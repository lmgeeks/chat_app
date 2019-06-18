console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Notified by Traversy Media!",
    icon: "img/icon.png"
  });
});

/*
self.addEventListener('push', function (event) {
  console.log('Push received: ', event);
  let _data = event.data ? JSON.parse(event.data.text()) : {};
  notificationUrl = _data.url;
  event.waitUntil(
      self.registration.showNotification(_data.title, {
          body: _data.message,
          icon: _data.icon,
          tag: _data.tag
      })
  );
});*/