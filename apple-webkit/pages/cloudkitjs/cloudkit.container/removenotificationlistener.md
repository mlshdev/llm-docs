> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.container/removenotificationlistener](https://developer.apple.com/documentation/cloudkitjs/cloudkit.container/removenotificationlistener)

# removeNotificationListener

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Removes a function to call when a push notification occurs.

## Declaration

```
void removeNotificationListener(
	function listener
);
```

## See Also

### Receiving Notifications

- [addNotificationListener](addnotificationlistener.md): Adds a function to call when a push notification occurs.
- [registerForNotifications](registerfornotifications.md): Registers to receive push notifications.
- [unregisterForNotifications](unregisterfornotifications.md): Unregisters to receive push notifications.
- [isRegisteredForNotifications](isregisteredfornotifications.md): Boolean value indicating whether this container is registered to receive push notifications.
