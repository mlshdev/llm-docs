> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/continuation](https://developer.apple.com/documentation/swift/continuation)

# Continuation

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A mechanism to interface between synchronous and asynchronous code, which enforces that the continuation is resumed exactly once.

## Declaration

```swift
@frozen struct Continuation<Success, Failure> where Failure : Error, Success : ~Copyable
```

<a id="overview"></a>

## Overview

Unlike `CheckedContinuation`, which detects misuse at runtime, `Continuation` uses non-copyable semantics to enforce correct usage.

The continuation must only ever be resumed **exactly-once**. The compiler will prevent attempts from resuming the continuation more than once.

If a `Continuation` is destroyed without being resumed, the program traps with a diagnostic message indicating where the continuation was created. Because it is noncopyable, the compiler prevents accidental copies, and the `consuming` resume methods ensure the continuation can only be used once.

To create a continuation call [withContinuation(of:throwing:\_:)](withcontinuation%28of_throwing___%29.md).

To resume the task, suspended on a continuation, call [resume(returning:)](continuation/resume%28returning_%29-5fa8w.md), [resume(throwing:)](continuation/resume%28throwing_%29.md), [resume(with:)](continuation/resume%28with_%29.md), or [resume()](continuation/resume%28%29.md).

> **See Also**

> [CheckedContinuation](checkedcontinuation.md)

## Topics

### Instance Methods

- [resume()](continuation/resume%28%29.md): Resume the task awaiting the continuation by having it return from its suspension point
- [resume(returning:)](continuation/resume%28returning_%29-5fa8w.md): Resume the task awaiting the continuation by having it return from its suspension point
- [resume(returning:)](continuation/resume%28returning_%29-8uw9b.md): Resume the task awaiting the continuation by having it return from its suspension point
- [resume(throwing:)](continuation/resume%28throwing_%29.md): Resume the task awaiting the continuation by having it throw an error from its suspension point
- [resume(with:)](continuation/resume%28with_%29.md): Resume the task awaiting the continuation by having it either return or throw an error based on the state of the given `Result` value

## Relationships

### Conforms To

- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Continuations

- [withContinuation(of:\_:)](withcontinuation%28of___%29.md): Invokes the passed in closure with a non-copyable continuation for the current task.
- [withContinuation(of:throwing:\_:)](withcontinuation%28of_throwing___%29.md): Invokes the passed in closure with a non-copyable continuation for the current task.
- [CheckedContinuation](checkedcontinuation.md): A mechanism to interface between synchronous and asynchronous code, logging correctness violations.
- [withCheckedContinuation(function:\_:)](withcheckedcontinuation%28function___%29.md): Invokes the passed in closure with a checked continuation for the current task.
- [withCheckedThrowingContinuation(function:\_:)](withcheckedthrowingcontinuation%28function___%29-13yf6.md)
- [withCheckedThrowingContinuation(function:\_:)](withcheckedthrowingcontinuation%28function___%29-2k46m.md): Invokes the passed in closure with a checked continuation for the current task.
- [UnsafeContinuation](unsafecontinuation.md): A mechanism to interface between synchronous and asynchronous code, without correctness checking.
- [withUnsafeContinuation(\_:)](withunsafecontinuation%28__%29.md): Invokes the passed in closure with a unsafe continuation for the current task.
