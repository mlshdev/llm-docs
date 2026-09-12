> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/task/init(name:priority:operation:)-2dll5](https://developer.apple.com/documentation/swift/task/init(name:priority:operation:)-2dll5)

# init(name:priority:operation:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Runs the given nonthrowing operation asynchronously as part of a new *unstructured* top-level task.

## Declaration

```swift
@discardableResult init(name: String? = nil, priority: TaskPriority? = nil, operation: sending @escaping @isolated(any) () async -> Success)
```

## Parameters

- `name`: Human readable name of the task.
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

- [init(name:priority:operation:)](init%28name_priority_operation_%29-43wmk.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `any Error`. Runs the given throwing operation asynchronously as part of a new *unstructured* top-level task.
- [init(name:executorPreference:priority:operation:)](init%28name_executorpreference_priority_operation_%29-59bfi.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `any Error`. Runs the given throwing operation asynchronously as part of a new *unstructured* top-level task.
- [init(name:executorPreference:priority:operation:)](init%28name_executorpreference_priority_operation_%29-81pay.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `Never`. Runs the given nonthrowing operation asynchronously as part of a new *unstructured* top-level task.
- [currentPriority](currentpriority.md): Conforms when `Success` is `Never` and `Failure` is `Never`. The current task’s priority.
- [basePriority](basepriority.md): Conforms when `Success` is `Never` and `Failure` is `Never`. The current task’s base priority.
- [withTaskPriorityEscalationHandler(operation:onPriorityEscalated:)](../withtaskpriorityescalationhandler%28operation_onpriorityescalated_%29.md): Runs the passed `operation` while registering a task priority escalation handler. The handler will be triggered concurrently to the current task if the current is subject to priority escalation.
