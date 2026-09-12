> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/exit()](https://developer.apple.com/documentation/foundation/thread/exit())

# exit() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Terminates the current thread.

## Declaration

```swift
class func exit()
```

<a id="Discussion"></a>

## Discussion

This method uses the [current](current.md) class method to access the current thread. Before exiting the thread, this method posts the [NSThreadWillExit](../nsnotification/name-swift.struct/nsthreadwillexit.md) with the thread being exited to the default notification center. Because notifications are delivered synchronously, all observers of [NSThreadWillExit](../nsnotification/name-swift.struct/nsthreadwillexit.md) are guaranteed to receive the notification before the thread exits.

Invoking this method should be avoided as it does not give your thread a chance to clean up any resources it allocated during its execution.

## See Also

### Related Documentation

- [current](current.md): Returns the thread object representing the current thread of execution.

### Stopping a Thread

- [sleep(until:)](sleep%28until_%29.md): Blocks the current thread until the time specified.
- [sleep(forTimeInterval:)](sleep%28fortimeinterval_%29.md): Sleeps the thread for a given time interval.
- [cancel()](cancel%28%29.md): Changes the cancelled state of the receiver to indicate that it should exit.

# exit (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Terminates the current thread.

## Declaration

```objectivec
+ (void) exit;
```

<a id="Discussion"></a>

## Discussion

This method uses the [currentThread](current.md) class method to access the current thread. Before exiting the thread, this method posts the [NSThreadWillExitNotification](../nsnotification/name-swift.struct/nsthreadwillexit.md) with the thread being exited to the default notification center. Because notifications are delivered synchronously, all observers of [NSThreadWillExitNotification](../nsnotification/name-swift.struct/nsthreadwillexit.md) are guaranteed to receive the notification before the thread exits.

Invoking this method should be avoided as it does not give your thread a chance to clean up any resources it allocated during its execution.

## See Also

### Related Documentation

- [currentThread](current.md): Returns the thread object representing the current thread of execution.

### Stopping a Thread

- [sleepUntilDate:](sleep%28until_%29.md): Blocks the current thread until the time specified.
- [sleepForTimeInterval:](sleep%28fortimeinterval_%29.md): Sleeps the thread for a given time interval.
- [cancel](cancel%28%29.md): Changes the cancelled state of the receiver to indicate that it should exit.
