> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/nsdidbecomesinglethreaded](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsdidbecomesinglethreaded)

# NSDidBecomeSingleThreaded (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ (deprecated in 26.0) · iPadOS 2.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.0+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 2.0+ (deprecated in 26.0)

Not implemented.

> Programs no longer transition to single-threaded mode from threaded environments

## Declaration

```swift
static let NSDidBecomeSingleThreaded: NSNotification.Name
```

## See Also

### Notifications

- [NSThreadWillExit](nsthreadwillexit.md): Deprecated. An `NSThread` object posts this notification when it receives the [exit()](../../thread/exit%28%29.md) message, before the thread exits. Observer methods invoked to receive this notification execute in the exiting thread, before it exits.
- [NSWillBecomeMultiThreaded](nswillbecomemultithreaded.md): Deprecated. Posted when the first thread is detached from the current thread. The `NSThread` class posts this notification at most once—the first time a thread is detached using [detachNewThreadSelector(\_:toTarget:with:)](../../thread/detachnewthreadselector%28__totarget_with_%29.md) or the [start()](../../thread/start%28%29.md) method. Subsequent invocations of those methods do not post this notification. Observers of this notification have their notification method invoked in the main thread, not the new thread. The observer notification methods always execute before the new thread begins executing.

# NSDidBecomeSingleThreadedNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 26.0) · iPadOS 2.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.0+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 2.0+ (deprecated in 26.0)

Not implemented.

> Programs no longer transition to single-threaded mode from threaded environments

## Declaration

```objectivec
extern NSNotificationName const NSDidBecomeSingleThreadedNotification;
```

## See Also

### Notifications

- [NSThreadWillExitNotification](nsthreadwillexit.md): Deprecated. An `NSThread` object posts this notification when it receives the [exit](../../thread/exit%28%29.md) message, before the thread exits. Observer methods invoked to receive this notification execute in the exiting thread, before it exits.
- [NSWillBecomeMultiThreadedNotification](nswillbecomemultithreaded.md): Deprecated. Posted when the first thread is detached from the current thread. The `NSThread` class posts this notification at most once—the first time a thread is detached using [detachNewThreadSelector:toTarget:withObject:](../../thread/detachnewthreadselector%28__totarget_with_%29.md) or the [start](../../thread/start%28%29.md) method. Subsequent invocations of those methods do not post this notification. Observers of this notification have their notification method invoked in the main thread, not the new thread. The observer notification methods always execute before the new thread begins executing.
