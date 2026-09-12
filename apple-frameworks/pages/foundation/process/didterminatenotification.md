> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/process/didterminatenotification](https://developer.apple.com/documentation/foundation/process/didterminatenotification)

# didTerminateNotification (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Posted when the task has stopped execution.

## Declaration

```swift
class let didTerminateNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSTask` object that the system terminated. This notification doesn’t contain a `userInfo` dictionary.

The system posts this notification from the thread in which the `NSTask` object called [launch()](launch%28%29.md). When launching a task from a secondary thread or background queue, you can use the [terminationHandler](terminationhandler.md) property instead for greater control over the execution context of any operations to be performed after the task finishes.

This notification can be posted either when the task has exited normally or as a result of [terminate()](terminate%28%29.md) being sent to the `NSTask` object. If the `NSTask` object gets released, however, this notification won’t get sent, as the port the message would have been sent on was released as part of the task release. The observer method can use [terminationStatus](terminationstatus.md) to determine why the task died.

# NSTaskDidTerminateNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Posted when the task has stopped execution.

## Declaration

```objectivec
extern NSNotificationName const NSTaskDidTerminateNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSTask` object that the system terminated. This notification doesn’t contain a `userInfo` dictionary.

The system posts this notification from the thread in which the `NSTask` object called [launch](launch%28%29.md). When launching a task from a secondary thread or background queue, you can use the [terminationHandler](terminationhandler.md) property instead for greater control over the execution context of any operations to be performed after the task finishes.

This notification can be posted either when the task has exited normally or as a result of [terminate](terminate%28%29.md) being sent to the `NSTask` object. If the `NSTask` object gets released, however, this notification won’t get sent, as the port the message would have been sent on was released as part of the task release. The observer method can use [terminationStatus](terminationstatus.md) to determine why the task died.
