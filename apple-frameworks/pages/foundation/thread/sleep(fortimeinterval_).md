> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/sleep(fortimeinterval:)](https://developer.apple.com/documentation/foundation/thread/sleep(fortimeinterval:))

# sleep(forTimeInterval:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sleeps the thread for a given time interval.

## Declaration

```swift
class func sleep(forTimeInterval ti: TimeInterval)
```

## Parameters

- `ti`: The duration of the sleep.

<a id="Discussion"></a>

## Discussion

No run loop processing occurs while the thread is blocked.

## See Also

### Stopping a Thread

- [sleep(until:)](sleep%28until_%29.md): Blocks the current thread until the time specified.
- [exit()](exit%28%29.md): Terminates the current thread.
- [cancel()](cancel%28%29.md): Changes the cancelled state of the receiver to indicate that it should exit.

# sleepForTimeInterval: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sleeps the thread for a given time interval.

## Declaration

```objectivec
+ (void) sleepForTimeInterval:(NSTimeInterval) ti;
```

## Parameters

- `ti`: The duration of the sleep.

<a id="Discussion"></a>

## Discussion

No run loop processing occurs while the thread is blocked.

## See Also

### Stopping a Thread

- [sleepUntilDate:](sleep%28until_%29.md): Blocks the current thread until the time specified.
- [exit](exit%28%29.md): Terminates the current thread.
- [cancel](cancel%28%29.md): Changes the cancelled state of the receiver to indicate that it should exit.
