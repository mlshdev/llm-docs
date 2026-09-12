> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/task/immediatedetached(name:priority:executorpreference:operation:)-7h41b](https://developer.apple.com/documentation/swift/task/immediatedetached(name:priority:executorpreference:operation:)-7h41b)

# immediateDetached(name:priority:executorPreference:operation:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Create and immediately start running a new detached task in the context of the calling thread/task.

## Declaration

```swift
@discardableResult static func immediateDetached(name: String? = nil, priority: TaskPriority? = nil, executorPreference taskExecutor: consuming (any TaskExecutor)? = nil, operation: sending @escaping @isolated(any) () async -> Success) -> Task<Success, Never>
```

## Parameters

- `name`: The high-level human-readable name given for this task
- `priority`: The priority of the task. Pass `nil` to use the [basePriority](basepriority.md) of the current task (if there is one).
- `taskExecutor`: The task executor that the child task should be started on and keep using. Explicitly passing `nil` as the executor preference is equivalent to no preference, and effectively means to inherit the outer context’s executor preference. You can also pass the [globalConcurrentExecutor](../globalconcurrentexecutor.md) global executor explicitly.
- `operation`: The operation to be run immediately upon entering the task.

<a id="return-value"></a>

## Return Value

A reference to the unstructured task which may be awaited on.

<a id="discussion"></a>

## Discussion

This function *starts* the created task on the calling context. The task will continue executing on the caller’s context until it suspends, and after suspension will resume on the adequate executor. For a nonisolated operation this means running on the global concurrent pool, and on an isolated operation it means the appropriate executor of that isolation context.

As indicated by the lack of `async` on this method, this method does *not* suspend, and instead takes over the calling task’s (thread’s) execution in a synchronous manner.

Other than the execution semantics discussed above, the created task is semantically equivalent to a task created using the `Task/detached(name:priority:operation:)` function.

## See Also

### Creating a Task that Starts Immediately

- [immediate(name:priority:executorPreference:operation:)](immediate%28name_priority_executorpreference_operation_%29-88o80.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `Never`. Create and immediately start running a new task in the context of the calling thread/task.
- [immediate(name:priority:executorPreference:operation:)](immediate%28name_priority_executorpreference_operation_%29-9bghc.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `any Error`. Create and immediately start running a new task in the context of the calling thread/task.
- [immediateDetached(name:priority:executorPreference:operation:)](immediatedetached%28name_priority_executorpreference_operation_%29-52ipd.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `any Error`. Create and immediately start running a new detached task in the context of the calling thread/task.
