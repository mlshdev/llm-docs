> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/task/init(name:executorpreference:priority:operation:)-81pay](https://developer.apple.com/documentation/swift/task/init(name:executorpreference:priority:operation:)-81pay)

# init(name:executorPreference:priority:operation:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Runs the given nonthrowing operation asynchronously as part of a new *unstructured* top-level task.

## Declaration

```swift
@discardableResult init(name: String? = nil, executorPreference taskExecutor: (any TaskExecutor)?, priority: TaskPriority? = nil, operation: sending @escaping () async -> Success)
```

## Parameters

- `name`: Human readable name of the task.
- `taskExecutor`: The task executor that the child task should be started on and keep using. Explicitly passing `nil` as the executor preference is equivalent to no preference, and effectively means to inherit the outer context’s executor preference. You can also pass the [globalConcurrentExecutor](../globalconcurrentexecutor.md) global executor explicitly.
- `priority`: The priority of the operation task.
- `operation`: The operation to perform.

<a id="return-value"></a>

## Return Value

A reference to the task.

<a id="discussion"></a>

## Discussion

You need to keep a reference to the task if you want to cancel it by calling the `Task.cancel()` method. Discarding your reference to a task doesn’t implicitly cancel that task, it only makes it impossible for you to explicitly cancel the task.

## See Also

### Creating a Task

- [init(name:priority:operation:)](init%28name_priority_operation_%29-2dll5.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `Never`. Runs the given nonthrowing operation asynchronously as part of a new *unstructured* top-level task.
- [init(name:priority:operation:)](init%28name_priority_operation_%29-43wmk.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `any Error`. Runs the given throwing operation asynchronously as part of a new *unstructured* top-level task.
- [init(name:executorPreference:priority:operation:)](init%28name_executorpreference_priority_operation_%29-59bfi.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `any Error`. Runs the given throwing operation asynchronously as part of a new *unstructured* top-level task.
- [currentPriority](currentpriority.md): Conforms when `Success` is `Never` and `Failure` is `Never`. The current task’s priority.
- [basePriority](basepriority.md): Conforms when `Success` is `Never` and `Failure` is `Never`. The current task’s base priority.
- [withTaskPriorityEscalationHandler(operation:onPriorityEscalated:)](../withtaskpriorityescalationhandler%28operation_onpriorityescalated_%29.md): Runs the passed `operation` while registering a task priority escalation handler. The handler will be triggered concurrently to the current task if the current is subject to priority escalation.
