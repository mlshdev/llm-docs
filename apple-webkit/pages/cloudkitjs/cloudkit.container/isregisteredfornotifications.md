> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.container/isregisteredfornotifications](https://developer.apple.com/documentation/cloudkitjs/cloudkit.container/isregisteredfornotifications)

# isRegisteredForNotifications

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

Boolean value indicating whether this container is registered to receive push notifications.

## Declaration

```
attribute Boolean isRegisteredForNotifications;
```

<a id="Discussion"></a>

## Discussion

`true` if the container is registered to receive push notifications; otherwise, `false`.

## See Also

### Receiving Notifications

- [addNotificationListener](addnotificationlistener.md): Adds a function to call when a push notification occurs.
- [removeNotificationListener](removenotificationlistener.md): Removes a function to call when a push notification occurs.
- [registerForNotifications](registerfornotifications.md): Registers to receive push notifications.
- [unregisterForNotifications](unregisterfornotifications.md): Unregisters to receive push notifications.
