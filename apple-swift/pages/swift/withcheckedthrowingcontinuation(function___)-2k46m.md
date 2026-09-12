> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/withcheckedthrowingcontinuation(function:_:)-2k46m](https://developer.apple.com/documentation/swift/withcheckedthrowingcontinuation(function:_:)-2k46m)

# withCheckedThrowingContinuation(function:\_:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Invokes the passed in closure with a checked continuation for the current task.

## Declaration

```swift
@abi(nonisolated(nonsending) func withCheckedThrowingContinuationNonisolatedNonsending<T, E>(function: String, _ body: (CheckedContinuation<T, E>) -> Void) async throws(E) -> sending T where E : Error) nonisolated(nonsending) func withCheckedThrowingContinuation<T, E>(function: String = #function, _ body: (CheckedContinuation<T, E>) -> Void) async throws(E) -> sending T where E : Error
```

## Parameters

- `function`: A string identifying the declaration that is the notional source for the continuation, used to identify the continuation in runtime diagnostics related to misuse of this continuation.
- `body`: A closure that takes a `CheckedContinuation` parameter.

<a id="return-value"></a>

## Return Value

The value continuation is resumed with.

<a id="discussion"></a>

## Discussion

The body of the closure executes synchronously on the calling task, and once it returns the calling task is suspended. It is possible to immediately resume the task, or escape the continuation in order to complete it afterwards, which will then resume the suspended task.

If `resume(throwing:)` is called on the continuation, this function throws that error.

You must invoke the continuation’s `resume` method exactly once.

Missing to invoke it (eventually) will cause the calling task to remain suspended indefinitely which will result in the task “hanging” as well as being leaked with no possibility to destroy it.

The checked continuation offers detection of misuse, and dropping the last reference to it, without having resumed it will trigger a warning. Resuming a continuation twice is also diagnosed and will cause a crash.

> **See Also**

> `withCheckedContinuation(function:_:)`

> **See Also**

> `withUnsafeContinuation(function:_:)`

> **See Also**

> `withUnsafeThrowingContinuation(function:_:)`

## See Also

### Continuations

- [Continuation](continuation.md): A mechanism to interface between synchronous and asynchronous code, which enforces that the continuation is resumed exactly once.
- [withContinuation(of:\_:)](withcontinuation%28of___%29.md): Invokes the passed in closure with a non-copyable continuation for the current task.
- [withContinuation(of:throwing:\_:)](withcontinuation%28of_throwing___%29.md): Invokes the passed in closure with a non-copyable continuation for the current task.
- [CheckedContinuation](checkedcontinuation.md): A mechanism to interface between synchronous and asynchronous code, logging correctness violations.
- [withCheckedContinuation(function:\_:)](withcheckedcontinuation%28function___%29.md): Invokes the passed in closure with a checked continuation for the current task.
- [withCheckedThrowingContinuation(function:\_:)](withcheckedthrowingcontinuation%28function___%29-13yf6.md)
- [UnsafeContinuation](unsafecontinuation.md): A mechanism to interface between synchronous and asynchronous code, without correctness checking.
- [withUnsafeContinuation(\_:)](withunsafecontinuation%28__%29.md): Invokes the passed in closure with a unsafe continuation for the current task.
