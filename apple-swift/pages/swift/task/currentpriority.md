> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/task/currentpriority](https://developer.apple.com/documentation/swift/task/currentpriority)

# currentPriority

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The current task’s priority.

## Declaration

```swift
static var currentPriority: TaskPriority { get }
```

<a id="discussion"></a>

## Discussion

If you access this property outside of any task, this queries the system to determine the priority at which the current function is running. If the system can’t provide a priority, this property’s value is `Priority.default`.

## See Also

### Creating a Task

- [init(name:priority:operation:)](init%28name_priority_operation_%29-2dll5.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `Never`. Runs the given nonthrowing operation asynchronously as part of a new *unstructured* top-level task.
- [init(name:priority:operation:)](init%28name_priority_operation_%29-43wmk.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `any Error`. Runs the given throwing operation asynchronously as part of a new *unstructured* top-level task.
- [init(name:executorPreference:priority:operation:)](init%28name_executorpreference_priority_operation_%29-59bfi.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `any Error`. Runs the given throwing operation asynchronously as part of a new *unstructured* top-level task.
- [init(name:executorPreference:priority:operation:)](init%28name_executorpreference_priority_operation_%29-81pay.md): Conforms when `Success` conforms to `Sendable` and `Failure` is `Never`. Runs the given nonthrowing operation asynchronously as part of a new *unstructured* top-level task.
- [basePriority](basepriority.md): Conforms when `Success` is `Never` and `Failure` is `Never`. The current task’s base priority.
- [withTaskPriorityEscalationHandler(operation:onPriorityEscalated:)](../withtaskpriorityescalationhandler%28operation_onpriorityescalated_%29.md): Runs the passed `operation` while registering a task priority escalation handler. The handler will be triggered concurrently to the current task if the current is subject to priority escalation.
