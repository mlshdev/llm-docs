> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/withunsafecurrenttask(body:)-udlb](https://developer.apple.com/documentation/swift/withunsafecurrenttask(body:)-udlb)

# withUnsafeCurrentTask(body:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Calls a closure with an unsafe reference to the current task.

## Declaration

```swift
@abi(nonisolated(nonsending) func withUnsafeCurrentTaskNonsendingExportedImpl<T>(body: nonisolated(nonsending) (UnsafeCurrentTask?) async throws -> T) async rethrows -> T) @export(implementation) nonisolated(nonsending) func withUnsafeCurrentTask<T>(body: nonisolated(nonsending) (UnsafeCurrentTask?) async throws -> T) async rethrows -> T
```

## Parameters

- `body`: A closure that takes an `UnsafeCurrentTask` parameter. If `body` has a return value, that value is also used as the return value for the `withUnsafeCurrentTask(body:)` function.

<a id="return-value"></a>

## Return Value

The return value, if any, of the `body` closure.

<a id="discussion"></a>

## Discussion

If you call this function from the body of an asynchronous function, the unsafe task handle passed to the closure is always non-`nil` because an asynchronous function always runs in the context of a task.

The operation is guaranteed to execute on the caller’s isolation.

Storing an unsafe reference to a task doesn’t affect the task’s actual life cycle, and the behavior of accessing an unsafe task reference outside of the `withUnsafeCurrentTask(body:)` method’s closure is unsafe and undefined behavior. There’s no safe way to retrieve a reference to the current task and save it for long-term use. To query the current task without saving a reference to it, use properties like `currentPriority`. If you need to store a reference to a task, create an unstructured task using `Task.detached(priority:operation:)` instead.

## See Also

### Getting an Unsafe Reference to the Current Task

- [withUnsafeCurrentTask(body:)](withunsafecurrenttask%28body_%29-6gvhl.md): Calls a closure with an unsafe reference to the current task.
