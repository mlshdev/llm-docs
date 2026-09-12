> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafecontinuation](https://developer.apple.com/documentation/swift/unsafecontinuation)

# UnsafeContinuation

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A mechanism to interface between synchronous and asynchronous code, without correctness checking.

## Declaration

```swift
@frozen struct UnsafeContinuation<T, E> where E : Error
```

<a id="overview"></a>

## Overview

A *continuation* is an opaque representation of program state. To create a continuation in asynchronous code, call the `withUnsafeContinuation(_:)` or `withUnsafeThrowingContinuation(_:)` function. To resume the asynchronous task, call the `resume(returning:)`, `resume(throwing:)`, `resume(with:)`, or `resume()` method.

> **Important**

> You must call a resume method exactly once on every execution path throughout the program. Resuming from a continuation more than once is undefined behavior. Never resuming leaves the task in a suspended state indefinitely, and leaks any associated resources.

`CheckedContinuation` performs runtime checks for missing or multiple resume operations. `UnsafeContinuation` avoids enforcing these invariants at runtime because it aims to be a low-overhead mechanism for interfacing Swift tasks with event loops, delegate methods, callbacks, and other non-`async` scheduling mechanisms. However, during development, the ability to verify that the invariants are being upheld in testing is important. Because both types have the same interface, you can replace one with the other in most circumstances, without making other changes.

## Topics

### Initializers

- [init(\_:)](unsafecontinuation/init%28__%29.md): Conforms when `E` conforms to `Error`. Convert a non-copyable continuation to an [UnsafeContinuation](unsafecontinuation.md).

### Instance Methods

- [resume()](unsafecontinuation/resume%28%29.md): Conforms when `E` conforms to `Error`. Resume the task that’s awaiting the continuation by returning.
- [resume(returning:)](unsafecontinuation/resume%28returning_%29-41kka.md): Resume the task that’s awaiting the continuation by returning the given value.
- [resume(returning:)](unsafecontinuation/resume%28returning_%29-8rtni.md): Resume the task that’s awaiting the continuation by returning the given value.
- [resume(throwing:)](unsafecontinuation/resume%28throwing_%29.md): Resume the task that’s awaiting the continuation by throwing the given error.
- [resume(with:)](unsafecontinuation/resume%28with_%29-4t59h.md): Conforms when `E` conforms to `Error`. Resume the task that’s awaiting the continuation by returning or throwing the given result value.
- [resume(with:)](unsafecontinuation/resume%28with_%29-7t959.md): Conforms when `E` conforms to `Error`. Resume the task that’s awaiting the continuation by returning or throwing the given result value.

## Relationships

### Conforms To

- [BitwiseCopyable](bitwisecopyable.md)
- [Copyable](copyable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Continuations

- [Continuation](continuation.md): A mechanism to interface between synchronous and asynchronous code, which enforces that the continuation is resumed exactly once.
- [withContinuation(of:\_:)](withcontinuation%28of___%29.md): Invokes the passed in closure with a non-copyable continuation for the current task.
- [withContinuation(of:throwing:\_:)](withcontinuation%28of_throwing___%29.md): Invokes the passed in closure with a non-copyable continuation for the current task.
- [CheckedContinuation](checkedcontinuation.md): A mechanism to interface between synchronous and asynchronous code, logging correctness violations.
- [withCheckedContinuation(function:\_:)](withcheckedcontinuation%28function___%29.md): Invokes the passed in closure with a checked continuation for the current task.
- [withCheckedThrowingContinuation(function:\_:)](withcheckedthrowingcontinuation%28function___%29-13yf6.md)
- [withCheckedThrowingContinuation(function:\_:)](withcheckedthrowingcontinuation%28function___%29-2k46m.md): Invokes the passed in closure with a checked continuation for the current task.
- [withUnsafeContinuation(\_:)](withunsafecontinuation%28__%29.md): Invokes the passed in closure with a unsafe continuation for the current task.
