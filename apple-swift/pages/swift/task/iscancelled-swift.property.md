> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/task/iscancelled-swift.property](https://developer.apple.com/documentation/swift/task/iscancelled-swift.property)

# isCancelled

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the task should stop executing.

## Declaration

```swift
var isCancelled: Bool { get }
```

<a id="discussion"></a>

## Discussion

After the value of this property becomes `true`, it remains `true` indefinitely. There is no way to uncancel a task.

This property returns the actual cancellation state of the task, regardless of whether a cancellation shield is active. Use [isCancelled](iscancelled-swift.type.property.md) (the static property) if you need cancellation checking that respects active shields.

<a id="Instance-property-isCancelled-ignores-Task-Cancellation-Shields"></a>

### Instance property isCancelled ignores Task Cancellation Shields

The instance property [isCancelled](iscancelled-swift.property.md) is not contextual and therefore does not respect cancellation shields. If a task was cancelled and is executing with an active cancellation shield, these properties will return the *actual* cancellation status of the specific task.

Prefer using [isCancelled](iscancelled-swift.type.property.md) (the static property) in most situations when checking the cancellation status from inside the task.

> **See Also**

> \`\`\`Task/isCancelled-type.property\`\`

> **See Also**

> [checkCancellation()](checkcancellation%28%29.md)

> **See Also**

> [hasActiveCancellationShield](hasactivecancellationshield.md)

> **See Also**

> `withTaskCancellationShield(operation:)-(()->Value)`

## See Also

### Canceling Tasks

- [CancellationError](../cancellationerror.md): An error that indicates a task was canceled.
- [cancel()](cancel%28%29.md): Conforms when `Success` conforms to `Sendable` and `Failure` conforms to `Error`. Cancels this task.
- [isCancelled](iscancelled-swift.type.property.md): Conforms when `Success` is `Never` and `Failure` is `Never`. A Boolean value that indicates whether the task should stop executing.
- [checkCancellation()](checkcancellation%28%29.md): Conforms when `Success` is `Never` and `Failure` is `Never`. Throws an error if the task was canceled.
- [withTaskCancellationHandler(operation:onCancel:)](../withtaskcancellationhandler%28operation_oncancel_%29.md): Execute an operation with a cancellation handler that’s immediately invoked if the current task is canceled.
- [withTaskCancellationHandler(operation:onCancel:isolation:)](../withtaskcancellationhandler%28operation_oncancel_isolation_%29.md): Execute an operation with a cancellation handler that’s immediately invoked if the current task is canceled.
