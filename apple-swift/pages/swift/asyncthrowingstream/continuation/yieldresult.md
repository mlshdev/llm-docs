> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncthrowingstream/continuation/yieldresult](https://developer.apple.com/documentation/swift/asyncthrowingstream/continuation/yieldresult)

# AsyncThrowingStream.Continuation.YieldResult

**Framework:** Swift  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that indicates the result of yielding a value to a client, by way of the continuation.

## Declaration

```swift
enum YieldResult
```

<a id="overview"></a>

## Overview

The various `yield` methods of `AsyncThrowingStream.Continuation` return this type to indicate the success or failure of yielding an element to the continuation.

## Topics

### Yield Results

- [AsyncThrowingStream.Continuation.YieldResult.enqueued(remaining:)](yieldresult/enqueued%28remaining_%29.md): The stream successfully enqueued the element.
- [AsyncThrowingStream.Continuation.YieldResult.dropped(\_:)](yieldresult/dropped%28__%29.md): The stream didn’t enqueue the element because the buffer was full.
- [AsyncThrowingStream.Continuation.YieldResult.terminated](yieldresult/terminated.md): The stream didn’t enqueue the element because the stream was in a terminal state.

## Relationships

### Conforms To

- [Sendable](../../sendable.md)
- [SendableMetatype](../../sendablemetatype.md)

## See Also

### Producing Elements

- [yield(\_:)](yield%28__%29.md): Resume the task awaiting the next iteration point by having it return normally from its suspension point with a given element.
- [yield(with:)](yield%28with_%29.md): Conforms when `Failure` conforms to `Error`. Resume the task awaiting the next iteration point by having it return normally or throw, based on a given result.
- [yield()](yield%28%29.md): Conforms when `Failure` conforms to `Error`. Resume the task awaiting the next iteration point by having it return normally from its suspension point.
