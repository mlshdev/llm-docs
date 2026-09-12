> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585723-mpcreatenotification](https://developer.apple.com/documentation/coreservices/1585723-mpcreatenotification)

# MPCreateNotification

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Creates a kernel notification

## Declaration

```objectivec
OSStatus MPCreateNotification(MPNotificationID *notificationID);
```

## Parameters

- `notificationID`: On return, `notificationID` points to the newly created kernel notification.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

After creating the kernel notification object, you can add simple notifications by calling the function  [MPModifyNotification](1585780-mpmodifynotification.md).

Also see the function  [MPDeleteNotification](1585659-mpdeletenotification.md).

## See Also

### Handling Kernel Notifications

- [MPCauseNotification](1585754-mpcausenotification.md): Deprecated. Signals a kernel notification.
- [MPDeleteNotification](1585659-mpdeletenotification.md): Deprecated. Removes a kernel notification.
- [MPModifyNotification](1585780-mpmodifynotification.md): Deprecated. Adds a simple notification to a kernel notification.
- [MPModifyNotificationParameters](1585668-mpmodifynotificationparameters.md): Deprecated.
