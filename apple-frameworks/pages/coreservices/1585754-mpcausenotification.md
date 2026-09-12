> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585754-mpcausenotification](https://developer.apple.com/documentation/coreservices/1585754-mpcausenotification)

# MPCauseNotification

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Signals a kernel notification.

## Declaration

```objectivec
OSStatus MPCauseNotification(MPNotificationID notificationID);
```

## Parameters

- `notificationID`: The ID of the kernel notification you want to signal.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

You call this function to signal a kernel notification much as you would signal any simple notification (for example,  [MPNotifyQueue](1585699-mpnotifyqueue.md) ).

## See Also

### Handling Kernel Notifications

- [MPCreateNotification](1585723-mpcreatenotification.md): Deprecated. Creates a kernel notification
- [MPDeleteNotification](1585659-mpdeletenotification.md): Deprecated. Removes a kernel notification.
- [MPModifyNotification](1585780-mpmodifynotification.md): Deprecated. Adds a simple notification to a kernel notification.
- [MPModifyNotificationParameters](1585668-mpmodifynotificationparameters.md): Deprecated.
