'use strict';

const timeOut = (requestPromise, timeout = 10000) => {
  let timeoutAction = null;
  const timerPromise = new Promise((resolve, reject) => {
    timeoutAction = () => {
      reject('请求超时');
    }
  })
  setTimeout(() => {
    timeoutAction()
  }, timeout)
  return Promise.race([requestPromise, timerPromise]);
}

const get = (url, params) => {
  if (params) {
    const paramsArray = [];
    // 拼接参数
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&');
    } else {
      url += '&' + paramsArray.join('&');
    }
  }
  // fetch请求
  const myFetch = fetch(url, {
    method: 'GET',
    credentials: 'include'
  })
  return new Promise((resolve, reject) => {
    timeOut(myFetch)
      .then(response => {
      })
      .then(res => {
        resolve(res)
      })
      .catch(e => {
        reject(e);
      });
  })
};

const post = (url, body) => {
  // Default options are marked with *
  const myFetch = fetch(url, {
    body: JSON.stringify(body), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, same-origin, *omit
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc. 88019005
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer' // *client, no-referrer
  })

  return new Promise((resolve, reject) => {
    timeOut(myFetch)
      .then(response => {
        return response.json();
      })
      .then(res => {
        resolve(res)
      })
      .catch(e => {
        reject(e);
      });
  })
};

const put = (url, body) => {
  // Default options are marked with *
  const myFetch = fetch(url, {
    body: JSON.stringify(body), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, same-origin, *omit
    headers: {
      'content-type': 'application/json'
    },
    method: 'PUT', // *GET, POST, PUT, DELETE, etc. 88019005
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer' // *client, no-referrer
  })

  return new Promise((resolve, reject) => {
    timeOut(myFetch)
      .then(response => {
        return response.json();
      })
      .then(res => {
        resolve(res)
      })
      .catch(e => {
        reject(e);
      });
  })
};

const del = (url, body) => {
  // Default options are marked with *
  const myFetch = fetch(url, {
    body: JSON.stringify(body), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, same-origin, *omit
    headers: {
      'content-type': 'application/json'
    },
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc. 88019005
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer' // *client, no-referrer
  })

  return new Promise((resolve, reject) => {
    timeOut(myFetch)
      .then(response => {
        return response.json();
      })
      .then(res => {
        resolve(res)
      })
      .catch(e => {
        reject(e);
      });
  })
};

export default { get, post, put, del }
