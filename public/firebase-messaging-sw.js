importScripts('/__/firebase/6.0.4/firebase-app.js');
importScripts('/__/firebase/6.0.4/firebase-messaging.js');
importScripts('/__/firebase/init.js');


 const messaging = firebase.messaging();

 messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/public/images/firebase-logo.png'
    };
  
    return self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
 