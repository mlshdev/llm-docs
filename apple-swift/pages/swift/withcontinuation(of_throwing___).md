> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/withcontinuation(of:throwing:_:)](https://developer.apple.com/documentation/swift/withcontinuation(of:throwing:_:))

# withContinuation(of:throwing:\_:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Invokes the passed in closure with a non-copyable continuation for the current task.

## Declaration

```swift
nonisolated(nonsending) func withContinuation<Success, Failure>(of: Success.Type = Success.self, throwing: Failure.Type, _ body: (consuming Continuation<Success, Failure>) -> Void) async throws(Failure) -> sending Success where Failure : Error, Success : ~Copyable
```

## Parameters

- `of`: The `Success` type returned by the continuation
- `throwing`: The `Failure` type that may be thrown
- `body`: A closure that takes a `Continuation` parameter

<a id="return-value"></a>

## Return Value

The value the continuation is resumed with

<a id="discussion"></a>

## Discussion

The body of the closure executes synchronously on the calling task, and once it returns the calling task is suspended. It is possible to immediately resume the task, or escape the continuation in order to complete it afterwards, which will then resume the suspended task.

You must invoke the continuation’s `resume` method exactly once. The continuation is a noncopyable type, and therefore multiple resume calls are prevented at compile time (as resuming the continuation consumes it). However, if the continuation is dropped without being resumed, the program traps.

## See Also

### Continuations

- [Continuation](continuation.md): A mechanism to interface between synchronous and asynchronous code, which enforces that the continuation is resumed exactly once.
- [withContinuation(of:\_:)](withcontinuation%28of___%29.md): Invokes the passed in closure with a non-copyable continuation for the current task.
- [CheckedContinuation](checkedcontinuation.md): A mechanism to interface between synchronous and asynchronous code, logging correctness violations.
- [withCheckedContinuation(function:\_:)](withcheckedcontinuation%28function___%29.md): Invokes the passed in closure with a checked continuation for the current task.
- [withCheckedThrowingContinuation(function:\_:)](withcheckedthrowingcontinuation%28function___%29-13yf6.md)
- [withCheckedThrowingContinuation(function:\_:)](withcheckedthrowingcontinuation%28function___%29-2k46m.md): Invokes the passed in closure with a checked continuation for the current task.
- [UnsafeContinuation](unsafecontinuation.md): A mechanism to interface between synchronous and asynchronous code, without correctness checking.
- [withUnsafeContinuation(\_:)](withunsafecontinuation%28__%29.md): Invokes the passed in closure with a unsafe continuation for the current task.
