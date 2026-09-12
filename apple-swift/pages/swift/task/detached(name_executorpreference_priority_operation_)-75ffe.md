> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/task/detached(name:executorpreference:priority:operation:)-75ffe](https://developer.apple.com/documentation/swift/task/detached(name:executorpreference:priority:operation:)-75ffe)

# detached(name:executorPreference:priority:operation:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Runs the given nonthrowing operation asynchronously as part of a new *unstructured* *detached* top-level task.

## Declaration

```swift
@discardableResult static func detached(name: String? = nil, executorPreference taskExecutor: (any TaskExecutor)?, priority: TaskPriority? = nil, operation: sending @escaping () async -> Success) -> Task<Success, Never>
```

## Parameters

- `name`: Human readable name of the task.
- `taskExecutor`: The task executor that the child task should be started on and keep using. Explicitly passing `nil` as the executor preference is equivalent to no preference, and effectively means to inherit the outer context’s executor preference. You can also pass the [globalConcurrentExecutor](../globalconcurrentexecutor.md) global executor explicitly.
- `priority`: The priority of the operation task. Omit this parameter or pass `nil` to inherit the enclosing context’s base priority.
- `operation`: The operation to perform.

<a id="return-value"></a>

## Return Value

A reference to the task.

<a id="discussion"></a>

## Discussion

Don’t use a detached unstructured task if it’s possible to model the operation using structured concurrency features like child tasks. Child tasks inherit the parent task’s priority and task-local storage, and canceling a parent task automatically cancels all of its child tasks. You need to handle these considerations manually with a detached task.

You need to keep a reference to the task if you want to cancel it by calling the `Task.cancel()` method. Discarding your reference to a task doesn’t implicitly cancel that task, it only makes it impossible for you to explicitly cancel the task.

## See Also

### Creating a Detached Task

- [detached(name:priority:operation:)](detached%28name_priority_operation_%29-795w1.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `any Error`. Runs the given throwing operation asynchronously as part of a new *unstructured* *detached* top-level task.
- [detached(name:priority:operation:)](detached%28name_priority_operation_%29-9xki7.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `Never`. Runs the given nonthrowing operation asynchronously as part of a new *unstructured* *detached* top-level task.
- [detached(name:executorPreference:priority:operation:)](detached%28name_executorpreference_priority_operation_%29-6r16s.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `any Error`. Runs the given throwing operation asynchronously as part of a new *unstructured* *detached* top-level task.
