> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.container/registerfornotifications](https://developer.apple.com/documentation/cloudkitjs/cloudkit.container/registerfornotifications)

# registerForNotifications

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Registers to receive push notifications.

## Declaration

```
void registerForNotifications();
```

<a id="Discussion"></a>

## Discussion

To subscribe to changes and register for push notifications, see `saveSubscription` in the [CloudKit.Database](../cloudkit.database.md) class.

## See Also

### Receiving Notifications

- [addNotificationListener](addnotificationlistener.md): Adds a function to call when a push notification occurs.
- [removeNotificationListener](removenotificationlistener.md): Removes a function to call when a push notification occurs.
- [unregisterForNotifications](unregisterfornotifications.md): Unregisters to receive push notifications.
- [isRegisteredForNotifications](isregisteredfornotifications.md): Boolean value indicating whether this container is registered to receive push notifications.
