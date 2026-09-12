> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/cancel()](https://developer.apple.com/documentation/foundation/thread/cancel())

# cancel() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Changes the cancelled state of the receiver to indicate that it should exit.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

The semantics of this method are the same as those used for [Operation](../operation.md). This method sets state information in the receiver that is then reflected by the [isCancelled](iscancelled.md) property. Threads that support cancellation should periodically call the [isCancelled](iscancelled.md) method to determine if the thread has in fact been cancelled, and exit if it has been.

For more information about cancellation and operation objects, see [Operation](../operation.md).

## See Also

### Related Documentation

- [isCancelled](iscancelled.md): A Boolean value that indicates whether the receiver is cancelled.

### Stopping a Thread

- [sleep(until:)](sleep%28until_%29.md): Blocks the current thread until the time specified.
- [sleep(forTimeInterval:)](sleep%28fortimeinterval_%29.md): Sleeps the thread for a given time interval.
- [exit()](exit%28%29.md): Terminates the current thread.

# cancel (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Changes the cancelled state of the receiver to indicate that it should exit.

## Declaration

```objectivec
- (void) cancel;
```

<a id="Discussion"></a>

## Discussion

The semantics of this method are the same as those used for [NSOperation](../operation.md). This method sets state information in the receiver that is then reflected by the [cancelled](iscancelled.md) property. Threads that support cancellation should periodically call the [cancelled](iscancelled.md) method to determine if the thread has in fact been cancelled, and exit if it has been.

For more information about cancellation and operation objects, see [NSOperation](../operation.md).

## See Also

### Related Documentation

- [cancelled](iscancelled.md): A Boolean value that indicates whether the receiver is cancelled.

### Stopping a Thread

- [sleepUntilDate:](sleep%28until_%29.md): Blocks the current thread until the time specified.
- [sleepForTimeInterval:](sleep%28fortimeinterval_%29.md): Sleeps the thread for a given time interval.
- [exit](exit%28%29.md): Terminates the current thread.
