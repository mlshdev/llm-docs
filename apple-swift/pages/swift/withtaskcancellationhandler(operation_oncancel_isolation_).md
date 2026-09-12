> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/withtaskcancellationhandler(operation:oncancel:isolation:)](https://developer.apple.com/documentation/swift/withtaskcancellationhandler(operation:oncancel:isolation:))

# withTaskCancellationHandler(operation:onCancel:isolation:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Execute an operation with a cancellation handler that’s immediately invoked if the current task is canceled.

## Declaration

```swift
@backDeployed(before: macOS 15.0, iOS 18.0, watchOS 11.0, tvOS 18.0, visionOS 2.0)
func withTaskCancellationHandler<T>(operation: () async throws -> T, onCancel handler: @Sendable () -> Void, isolation: isolated (any Actor)?) async rethrows -> T
```

## Parameters

- `operation`: The operation to perform.
- `handler`: A closure to execute on cancellation. If the task is canceled, this closure is called at most once; otherwise, it isn’t called.
- `isolation`: The actor that the operation is isolated to.

<a id="discussion"></a>

## Discussion

This differs from the operation cooperatively checking for cancellation and reacting to it in that the cancellation handler is *always* and *immediately* invoked when the task is canceled. For example, even if the operation is running code that never checks for cancellation, a cancellation handler still runs and provides a chance to run some cleanup code:

```swift
await withTaskCancellationHandler {
  var sum = 0
  while condition {
    sum += 1
  }
  return sum
} onCancel: {
  // This onCancel closure might execute concurrently with the operation.
  condition.cancel()
}
```

<a id="Execution-order-and-semantics"></a>

### Execution order and semantics

The `operation` closure is always invoked, even when the `withTaskCancellationHandler(operation:onCancel:)` method is called from a task that was already canceled.

When `withTaskCancellationHandler(operation:onCancel:)` is used in a task that has already been canceled, the cancellation handler will be executed immediately before the `operation` closure gets to execute.

This allows the cancellation handler to set some external “canceled” flag that the operation may be *atomically* checking for in order to avoid performing any actual work once the operation gets to run.

The `operation` closure executes on the calling execution context, and doesn’t suspend or change execution context unless code contained within the closure does so. In other words, the potential suspension point of the `withTaskCancellationHandler(operation:onCancel:)` never suspends by itself before executing the operation.

If cancellation occurs while the operation is running, the cancellation handler executes *concurrently* with the operation.

<a id="Cancellation-handlers-and-locks"></a>

### Cancellation handlers and locks

Cancellation handlers which acquire locks must take care to avoid deadlock. The cancellation handler may be invoked while holding internal locks associated with the task or other tasks.  Other operations on the task, such as resuming a continuation, may acquire these same internal locks. Therefore, if a cancellation handler must acquire a lock, other code should not cancel tasks or resume continuations while holding that lock.

## See Also

### Canceling Tasks

- [CancellationError](cancellationerror.md): An error that indicates a task was canceled.
- [cancel()](task/cancel%28%29.md): Conforms when `Success` conforms to `Sendable` and `Failure` conforms to `Error`. Cancels this task.
- [isCancelled](task/iscancelled-swift.property.md): Conforms when `Success` conforms to `Sendable` and `Failure` conforms to `Error`. A Boolean value that indicates whether the task should stop executing.
- [isCancelled](task/iscancelled-swift.type.property.md): Conforms when `Success` is `Never` and `Failure` is `Never`. A Boolean value that indicates whether the task should stop executing.
- [checkCancellation()](task/checkcancellation%28%29.md): Conforms when `Success` is `Never` and `Failure` is `Never`. Throws an error if the task was canceled.
- [withTaskCancellationHandler(operation:onCancel:)](withtaskcancellationhandler%28operation_oncancel_%29.md): Execute an operation with a cancellation handler that’s immediately invoked if the current task is canceled.
