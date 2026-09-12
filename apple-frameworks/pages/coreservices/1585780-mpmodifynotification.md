> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585780-mpmodifynotification](https://developer.apple.com/documentation/coreservices/1585780-mpmodifynotification)

# MPModifyNotification

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Adds a simple notification to a kernel notification.

## Declaration

```objectivec
OSStatus MPModifyNotification(MPNotificationID notificationID, MPOpaqueID anID, void *notifyParam1, void *notifyParam2, void *notifyParam3);
```

## Parameters

- `notificationID`: The ID of the kernel notification you want to add to..
- `anID`: The ID of the simple notification (semaphore, message group, or event group) you want to add to the kernel notification.
- `notifyParam1`: If `anID` specifies an event group, this parameter should contain the flags to set in the event group when [MPCauseNotification](1585754-mpcausenotification.md) is called. If `anID` specifies a message queue, this parameter should contain the first pointer-sized value of the message to be sent to the message queue when [MPCauseNotification](1585754-mpcausenotification.md) is called.
- `notifyParam2`: If `anID` specifies a message queue, this parameter should contain the second pointer-sized value of the message to be sent to the message queue when [MPCauseNotification](1585754-mpcausenotification.md) is called. Pass `NULL` if you don’t need this parameter.
- `notifyParam3`: If `anID` specifies a message queue, this parameter should contain the third pointer-sized value of the message sent to the message queue when [MPCauseNotification](1585754-mpcausenotification.md) is called. Pass `NULL` if you don’t need this parameter.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

You specify the parameters for the simple notifications just as if you were calling the  [MPSetTimerNotify](1585726-mpsettimernotify.md)  function.

## See Also

### Handling Kernel Notifications

- [MPCauseNotification](1585754-mpcausenotification.md): Deprecated. Signals a kernel notification.
- [MPCreateNotification](1585723-mpcreatenotification.md): Deprecated. Creates a kernel notification
- [MPDeleteNotification](1585659-mpdeletenotification.md): Deprecated. Removes a kernel notification.
- [MPModifyNotificationParameters](1585668-mpmodifynotificationparameters.md): Deprecated.
