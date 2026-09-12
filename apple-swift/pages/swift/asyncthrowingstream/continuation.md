> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncthrowingstream/continuation](https://developer.apple.com/documentation/swift/asyncthrowingstream/continuation)

# AsyncThrowingStream.Continuation

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A mechanism to interface between synchronous code and an asynchronous stream.

## Declaration

```swift
struct Continuation
```

<a id="overview"></a>

## Overview

The closure you provide to the `AsyncThrowingStream` in `init(_:bufferingPolicy:_:)` receives an instance of this type when invoked. Use this continuation to provide elements to the stream by calling one of the `yield` methods, then terminate the stream normally by calling the `finish()` method. You can also use the continuation’s `finish(throwing:)` method to terminate the stream by throwing an error.

> **Note**

> Unlike other continuations in Swift, `AsyncThrowingStream.Continuation` supports escaping.

## Topics

### Producing Elements

- [yield(\_:)](continuation/yield%28__%29.md): Resume the task awaiting the next iteration point by having it return normally from its suspension point with a given element.
- [yield(with:)](continuation/yield%28with_%29.md): Conforms when `Failure` conforms to `Error`. Resume the task awaiting the next iteration point by having it return normally or throw, based on a given result.
- [yield()](continuation/yield%28%29.md): Conforms when `Failure` conforms to `Error`. Resume the task awaiting the next iteration point by having it return normally from its suspension point.
- [AsyncThrowingStream.Continuation.YieldResult](continuation/yieldresult.md): A type that indicates the result of yielding a value to a client, by way of the continuation.

### Finishing the Stream

- [finish(throwing:)](continuation/finish%28throwing_%29.md): Resume the task awaiting the next iteration point by having it return nil, which signifies the end of the iteration.

### Handling Termination

- [onTermination](continuation/ontermination.md): A callback to invoke when canceling iteration of an asynchronous stream.
- [AsyncThrowingStream.Continuation.Termination](continuation/termination.md): A type that indicates how the stream terminated.

### Enumerations

- [AsyncThrowingStream.Continuation.BufferingPolicy](continuation/bufferingpolicy.md): A strategy that handles exhaustion of a buffer’s capacity.

### Default Implementations

- [Equatable Implementations](continuation/equatable-implementations.md)
- [Hashable Implementations](continuation/hashable-implementations.md)

## Relationships

### Conforms To

- [Equatable](../equatable.md)
- [Hashable](../hashable.md)
- [Sendable](../sendable.md)
- [SendableMetatype](../sendablemetatype.md)

## See Also

### Creating a Continuation-Based Stream

- [init(\_:bufferingPolicy:\_:)](init%28__bufferingpolicy___%29.md): Constructs an asynchronous stream for an element type, using the specified buffering policy and element-producing closure.
- [AsyncThrowingStream.Continuation.BufferingPolicy](continuation/bufferingpolicy.md): A strategy that handles exhaustion of a buffer’s capacity.
