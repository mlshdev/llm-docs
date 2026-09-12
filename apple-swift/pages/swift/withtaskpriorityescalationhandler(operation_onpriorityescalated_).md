> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/withtaskpriorityescalationhandler(operation:onpriorityescalated:)](https://developer.apple.com/documentation/swift/withtaskpriorityescalationhandler(operation:onpriorityescalated:))

# withTaskPriorityEscalationHandler(operation:onPriorityEscalated:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Runs the passed `operation` while registering a task priority escalation handler. The handler will be triggered concurrently to the current task if the current is subject to priority escalation.

## Declaration

```swift
nonisolated(nonsending) func withTaskPriorityEscalationHandler<T, E>(operation: nonisolated(nonsending) () async throws(E) -> T, onPriorityEscalated handler: @Sendable (TaskPriority, TaskPriority) -> Void) async throws(E) -> T where E : Error
```

## Parameters

- `operation`: The operation during which to listen for priority escalation
- `handler`: Handler to invoke, concurrently to `operation`, when priority escalation happens. The first argument is the old priority (before escalation), and the second argument is the new escalated priority.

<a id="return-value"></a>

## Return Value

The value returned by `operation`

<a id="discussion"></a>

## Discussion

The handler may perform additional actions upon priority escalation, but cannot influence how the escalation influences the task, i.e. the task’s priority will be escalated regardless of actions performed in the handler.

The handler will only trigger if a priority escalation occurs while the operation is in progress.

If multiple task escalation handlers are nested they will all be triggered.

Task escalation propagates through structured concurrency child-tasks.

> **Throws**

> When the `operation` throws an error

## See Also

### Creating a Task

- [init(name:priority:operation:)](task/init%28name_priority_operation_%29-2dll5.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `Never`. Runs the given nonthrowing operation asynchronously as part of a new *unstructured* top-level task.
- [init(name:priority:operation:)](task/init%28name_priority_operation_%29-43wmk.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `any Error`. Runs the given throwing operation asynchronously as part of a new *unstructured* top-level task.
- [init(name:executorPreference:priority:operation:)](task/init%28name_executorpreference_priority_operation_%29-59bfi.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `any Error`. Runs the given throwing operation asynchronously as part of a new *unstructured* top-level task.
- [init(name:executorPreference:priority:operation:)](task/init%28name_executorpreference_priority_operation_%29-81pay.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `Never`. Runs the given nonthrowing operation asynchronously as part of a new *unstructured* top-level task.
- [currentPriority](task/currentpriority.md): Conforms when `Success` is `Never` and `Failure` is `Never`. The current task’s priority.
- [basePriority](task/basepriority.md): Conforms when `Success` is `Never` and `Failure` is `Never`. The current task’s base priority.
