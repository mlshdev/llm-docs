> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/task/basepriority](https://developer.apple.com/documentation/swift/task/basepriority)

# basePriority

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The current task’s base priority.

## Declaration

```swift
static var basePriority: TaskPriority? { get }
```

<a id="discussion"></a>

## Discussion

If you access this property outside of any task, this returns nil

## See Also

### Creating a Task

- [init(name:priority:operation:)](init%28name_priority_operation_%29-2dll5.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `Never`. Runs the given nonthrowing operation asynchronously as part of a new *unstructured* top-level task.
- [init(name:priority:operation:)](init%28name_priority_operation_%29-43wmk.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `any Error`. Runs the given throwing operation asynchronously as part of a new *unstructured* top-level task.
- [init(name:executorPreference:priority:operation:)](init%28name_executorpreference_priority_operation_%29-59bfi.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `any Error`. Runs the given throwing operation asynchronously as part of a new *unstructured* top-level task.
- [init(name:executorPreference:priority:operation:)](init%28name_executorpreference_priority_operation_%29-81pay.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `Never`. Runs the given nonthrowing operation asynchronously as part of a new *unstructured* top-level task.
- [currentPriority](currentpriority.md): Conforms when `Success` is `Never` and `Failure` is `Never`. The current task’s priority.
- [withTaskPriorityEscalationHandler(operation:onPriorityEscalated:)](../withtaskpriorityescalationhandler%28operation_onpriorityescalated_%29.md): Runs the passed `operation` while registering a task priority escalation handler. The handler will be triggered concurrently to the current task if the current is subject to priority escalation.
