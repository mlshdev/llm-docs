> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/checkedcontinuation](https://developer.apple.com/documentation/swift/checkedcontinuation)

# CheckedContinuation

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A mechanism to interface between synchronous and asynchronous code, logging correctness violations.

## Declaration

```swift
struct CheckedContinuation<T, E> where E : Error
```

<a id="overview"></a>

## Overview

A *continuation* is an opaque representation of program state. To create a continuation in asynchronous code, call the `withCheckedContinuation(isolation:function:_:)` or `withCheckedThrowingContinuation(isolation:function:_:)` function. To resume the asynchronous task, call the `resume(returning:)`, `resume(throwing:)`, `resume(with:)`, or `resume()` method.

> **Important**

> You must call a resume method exactly once on every execution path throughout the program.

Resuming from a continuation more than once is undefined behavior. Never resuming leaves the task in a suspended state indefinitely, and leaks any associated resources. `CheckedContinuation` logs a message if either of these invariants is violated.

`CheckedContinuation` performs runtime checks for missing or multiple resume operations. `UnsafeContinuation` avoids enforcing these invariants at runtime because it aims to be a low-overhead mechanism for interfacing Swift tasks with event loops, delegate methods, callbacks, and other non-`async` scheduling mechanisms. However, during development, the ability to verify that the invariants are being upheld in testing is important. Because both types have the same interface, you can replace one with the other in most circumstances, without making other changes.

## Topics

### Initializers

- [init(\_:function:)](checkedcontinuation/init%28__function_%29.md): Conforms when `E` conforms to `Error`. Convert a non-copyable continuation to a [CheckedContinuation](checkedcontinuation.md)
- [init(continuation:function:)](checkedcontinuation/init%28continuation_function_%29.md): Creates a checked continuation from an unsafe continuation.

### Instance Methods

- [resume()](checkedcontinuation/resume%28%29.md): Conforms when `E` conforms to `Error`. Resume the task awaiting the continuation by having it return normally from its suspension point.
- [resume(returning:)](checkedcontinuation/resume%28returning_%29.md): Resume the task awaiting the continuation by having it return normally from its suspension point.
- [resume(throwing:)](checkedcontinuation/resume%28throwing_%29.md): Resume the task awaiting the continuation by having it throw an error from its suspension point.
- [resume(with:)](checkedcontinuation/resume%28with_%29-3gh60.md): Conforms when `E` conforms to `Error`. Resume the task awaiting the continuation by having it either return normally or throw an error based on the state of the given `Result` value.
- [resume(with:)](checkedcontinuation/resume%28with_%29-5n1a5.md): Conforms when `E` conforms to `Error`. Resume the task awaiting the continuation by having it either return normally or throw an error based on the state of the given `Result` value.

## Relationships

### Conforms To

- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Continuations

- [Continuation](continuation.md): A mechanism to interface between synchronous and asynchronous code, which enforces that the continuation is resumed exactly once.
- [withContinuation(of:\_:)](withcontinuation%28of___%29.md): Invokes the passed in closure with a non-copyable continuation for the current task.
- [withContinuation(of:throwing:\_:)](withcontinuation%28of_throwing___%29.md): Invokes the passed in closure with a non-copyable continuation for the current task.
- [withCheckedContinuation(function:\_:)](withcheckedcontinuation%28function___%29.md): Invokes the passed in closure with a checked continuation for the current task.
- [withCheckedThrowingContinuation(function:\_:)](withcheckedthrowingcontinuation%28function___%29-13yf6.md)
- [withCheckedThrowingContinuation(function:\_:)](withcheckedthrowingcontinuation%28function___%29-2k46m.md): Invokes the passed in closure with a checked continuation for the current task.
- [UnsafeContinuation](unsafecontinuation.md): A mechanism to interface between synchronous and asynchronous code, without correctness checking.
- [withUnsafeContinuation(\_:)](withunsafecontinuation%28__%29.md): Invokes the passed in closure with a unsafe continuation for the current task.
