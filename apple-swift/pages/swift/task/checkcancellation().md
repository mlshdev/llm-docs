> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/task/checkcancellation()](https://developer.apple.com/documentation/swift/task/checkcancellation())

# checkCancellation()

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Throws an error if the task was canceled.

## Declaration

```swift
static func checkCancellation() throws
```

<a id="discussion"></a>

## Discussion

The error is always an instance of `CancellationError`.

> **See Also**

> `isCancelled()`

## See Also

### Canceling Tasks

- [CancellationError](../cancellationerror.md): An error that indicates a task was canceled.
- [cancel()](cancel%28%29.md): Conforms when `Success` conforms to `Sendable` and `Failure` conforms to `Error`. Cancels this task.
- [isCancelled](iscancelled-swift.property.md): Conforms when `Success` conforms to `Sendable` and `Failure` conforms to `Error`. A Boolean value that indicates whether the task should stop executing.
- [isCancelled](iscancelled-swift.type.property.md): Conforms when `Success` is `Never` and `Failure` is `Never`. A Boolean value that indicates whether the task should stop executing.
- [withTaskCancellationHandler(operation:onCancel:)](../withtaskcancellationhandler%28operation_oncancel_%29.md): Execute an operation with a cancellation handler that’s immediately invoked if the current task is canceled.
- [withTaskCancellationHandler(operation:onCancel:isolation:)](../withtaskcancellationhandler%28operation_oncancel_isolation_%29.md): Execute an operation with a cancellation handler that’s immediately invoked if the current task is canceled.
