> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/withunsafecontinuation(_:)](https://developer.apple.com/documentation/swift/withunsafecontinuation(_:))

# withUnsafeContinuation(\_:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Invokes the passed in closure with a unsafe continuation for the current task.

## Declaration

```swift
nonisolated(nonsending) func withUnsafeContinuation<T>(_ fn: (UnsafeContinuation<T, Never>) -> Void) async -> sending T
```

## Parameters

- `fn`: A closure that takes an `UnsafeContinuation` parameter.

<a id="return-value"></a>

## Return Value

The value continuation is resumed with.

<a id="discussion"></a>

## Discussion

The body of the closure executes synchronously on the calling task, and once it returns the calling task is suspended. It is possible to immediately resume the task, or escape the continuation in order to complete it afterwards, which will then resume the suspended task.

You must invoke the continuation’s `resume` method exactly once.

Missing to invoke it (eventually) will cause the calling task to remain suspended indefinitely which will result in the task “hanging” as well as being leaked with no possibility to destroy it.

Unlike the “checked” continuation variant, the `UnsafeContinuation` does not detect or diagnose any kind of misuse, so you need to be extra careful to avoid calling `resume` twice or forgetting to call resume before letting go of the continuation object.

> **See Also**

> `withUnsafeThrowingContinuation(function:_:)`

> **See Also**

> `withCheckedContinuation(function:_:)`

> **See Also**

> `withCheckedThrowingContinuation(function:_:)`

## See Also

### Continuations

- [Continuation](continuation.md): A mechanism to interface between synchronous and asynchronous code, which enforces that the continuation is resumed exactly once.
- [withContinuation(of:\_:)](withcontinuation%28of___%29.md): Invokes the passed in closure with a non-copyable continuation for the current task.
- [withContinuation(of:throwing:\_:)](withcontinuation%28of_throwing___%29.md): Invokes the passed in closure with a non-copyable continuation for the current task.
- [CheckedContinuation](checkedcontinuation.md): A mechanism to interface between synchronous and asynchronous code, logging correctness violations.
- [withCheckedContinuation(function:\_:)](withcheckedcontinuation%28function___%29.md): Invokes the passed in closure with a checked continuation for the current task.
- [withCheckedThrowingContinuation(function:\_:)](withcheckedthrowingcontinuation%28function___%29-13yf6.md)
- [withCheckedThrowingContinuation(function:\_:)](withcheckedthrowingcontinuation%28function___%29-2k46m.md): Invokes the passed in closure with a checked continuation for the current task.
- [UnsafeContinuation](unsafecontinuation.md): A mechanism to interface between synchronous and asynchronous code, without correctness checking.
