> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.container/addnotificationlistener](https://developer.apple.com/documentation/cloudkitjs/cloudkit.container/addnotificationlistener)

# addNotificationListener

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Adds a function to call when a push notification occurs.

## Declaration

```
void addNotificationListener(
	function listener
);
```

## Parameters

- `listener`: The function to call when a push notification occurs. The function must have a single argument that is a [CloudKit.Notification](../cloudkit.notification.md) object.

<a id="Discussion"></a>

## Discussion

To subscribe to changes and register for push notifications, see `saveSubscription` in the [CloudKit.Database](../cloudkit.database.md) class.

## See Also

### Receiving Notifications

- [removeNotificationListener](removenotificationlistener.md): Removes a function to call when a push notification occurs.
- [registerForNotifications](registerfornotifications.md): Registers to receive push notifications.
- [unregisterForNotifications](unregisterfornotifications.md): Unregisters to receive push notifications.
- [isRegisteredForNotifications](isregisteredfornotifications.md): Boolean value indicating whether this container is registered to receive push notifications.
