> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585659-mpdeletenotification](https://developer.apple.com/documentation/coreservices/1585659-mpdeletenotification)

# MPDeleteNotification

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Removes a kernel notification.

## Declaration

```objectivec
OSStatus MPDeleteNotification(MPNotificationID notificationID);
```

## Parameters

- `notificationID`: The ID of the notification you want to remove.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

Also see the function  [MPCreateNotification](1585723-mpcreatenotification.md).

## See Also

### Handling Kernel Notifications

- [MPCauseNotification](1585754-mpcausenotification.md): Deprecated. Signals a kernel notification.
- [MPCreateNotification](1585723-mpcreatenotification.md): Deprecated. Creates a kernel notification
- [MPModifyNotification](1585780-mpmodifynotification.md): Deprecated. Adds a simple notification to a kernel notification.
- [MPModifyNotificationParameters](1585668-mpmodifynotificationparameters.md): Deprecated.
