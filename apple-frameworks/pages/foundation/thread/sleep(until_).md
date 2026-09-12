> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/sleep(until:)](https://developer.apple.com/documentation/foundation/thread/sleep(until:))

# sleep(until:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Blocks the current thread until the time specified.

## Declaration

```swift
class func sleep(until date: Date)
```

## Parameters

- `date`: The time at which to resume processing.

<a id="Discussion"></a>

## Discussion

No run loop processing occurs while the thread is blocked.

## See Also

### Related Documentation

- [current](current.md): Returns the thread object representing the current thread of execution.

### Stopping a Thread

- [sleep(forTimeInterval:)](sleep%28fortimeinterval_%29.md): Sleeps the thread for a given time interval.
- [exit()](exit%28%29.md): Terminates the current thread.
- [cancel()](cancel%28%29.md): Changes the cancelled state of the receiver to indicate that it should exit.

# sleepUntilDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Blocks the current thread until the time specified.

## Declaration

```objectivec
+ (void) sleepUntilDate:(NSDate *) date;
```

## Parameters

- `date`: The time at which to resume processing.

<a id="Discussion"></a>

## Discussion

No run loop processing occurs while the thread is blocked.

## See Also

### Related Documentation

- [currentThread](current.md): Returns the thread object representing the current thread of execution.

### Stopping a Thread

- [sleepForTimeInterval:](sleep%28fortimeinterval_%29.md): Sleeps the thread for a given time interval.
- [exit](exit%28%29.md): Terminates the current thread.
- [cancel](cancel%28%29.md): Changes the cancelled state of the receiver to indicate that it should exit.
