> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/cancellationerror](https://developer.apple.com/documentation/swift/cancellationerror)

# CancellationError

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An error that indicates a task was canceled.

## Declaration

```swift
struct CancellationError
```

<a id="overview"></a>

## Overview

This error is also thrown automatically by `Task.checkCancellation()`, if the current task has been canceled.

## Topics

### Initializers

- [init()](cancellationerror/init%28%29.md)

## Relationships

### Conforms To

- [Error](error.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Canceling Tasks

- [cancel()](task/cancel%28%29.md): Conforms when `Success` conforms to `Sendable` and `Failure` conforms to `Error`. Cancels this task.
- [isCancelled](task/iscancelled-swift.property.md): Conforms when `Success` conforms to `Sendable` and `Failure` conforms to `Error`. A Boolean value that indicates whether the task should stop executing.
- [isCancelled](task/iscancelled-swift.type.property.md): Conforms when `Success` is `Never` and `Failure` is `Never`. A Boolean value that indicates whether the task should stop executing.
- [checkCancellation()](task/checkcancellation%28%29.md): Conforms when `Success` is `Never` and `Failure` is `Never`. Throws an error if the task was canceled.
- [withTaskCancellationHandler(operation:onCancel:)](withtaskcancellationhandler%28operation_oncancel_%29.md): Execute an operation with a cancellation handler that’s immediately invoked if the current task is canceled.
- [withTaskCancellationHandler(operation:onCancel:isolation:)](withtaskcancellationhandler%28operation_oncancel_isolation_%29.md): Execute an operation with a cancellation handler that’s immediately invoked if the current task is canceled.
