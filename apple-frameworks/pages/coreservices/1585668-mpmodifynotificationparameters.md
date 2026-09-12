> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585668-mpmodifynotificationparameters](https://developer.apple.com/documentation/coreservices/1585668-mpmodifynotificationparameters)

# MPModifyNotificationParameters

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.1+ (deprecated in 10.7)

## Declaration

```objectivec
OSStatus MPModifyNotificationParameters(MPNotificationID notificationID, MPOpaqueIDClass kind, void *notifyParam1, void *notifyParam2, void *notifyParam3);
```

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

## See Also

### Handling Kernel Notifications

- [MPCauseNotification](1585754-mpcausenotification.md): Deprecated. Signals a kernel notification.
- [MPCreateNotification](1585723-mpcreatenotification.md): Deprecated. Creates a kernel notification
- [MPDeleteNotification](1585659-mpdeletenotification.md): Deprecated. Removes a kernel notification.
- [MPModifyNotification](1585780-mpmodifynotification.md): Deprecated. Adds a simple notification to a kernel notification.
