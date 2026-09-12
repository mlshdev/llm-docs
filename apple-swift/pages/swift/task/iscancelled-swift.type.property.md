> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/task/iscancelled-swift.type.property](https://developer.apple.com/documentation/swift/task/iscancelled-swift.type.property)

# isCancelled

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the task should stop executing.

## Declaration

```swift
static var isCancelled: Bool { get }
```

<a id="discussion"></a>

## Discussion

After the value of this property becomes `true`, it remains `true` indefinitely. There is no way to uncancel a task.

<a id="Interaction-with-Task-Cancellation-Shields"></a>

### Interaction with Task Cancellation Shields

Cancellation may be suppressed by an active task cancellation shield (`withTaskCancellationShield(operation:)-(()->Value)`), which may cause `isCancelled` to return `false` even though the task has been cancelled externally.

> **See Also**

> [checkCancellation()](checkcancellation%28%29.md)

> **See Also**

> `withTaskCancellationShield(operation:)-(()->Value)`

## See Also

### Canceling Tasks

- [CancellationError](../cancellationerror.md): An error that indicates a task was canceled.
- [cancel()](cancel%28%29.md): Conforms when `Success` conforms to `Sendable` and `Failure` conforms to `Error`. Cancels this task.
- [isCancelled](iscancelled-swift.property.md): Conforms when `Success` conforms to `Sendable` and `Failure` conforms to `Error`. A Boolean value that indicates whether the task should stop executing.
- [checkCancellation()](checkcancellation%28%29.md): Conforms when `Success` is `Never` and `Failure` is `Never`. Throws an error if the task was canceled.
- [withTaskCancellationHandler(operation:onCancel:)](../withtaskcancellationhandler%28operation_oncancel_%29.md): Execute an operation with a cancellation handler that’s immediately invoked if the current task is canceled.
- [withTaskCancellationHandler(operation:onCancel:isolation:)](../withtaskcancellationhandler%28operation_oncancel_isolation_%29.md): Execute an operation with a cancellation handler that’s immediately invoked if the current task is canceled.
