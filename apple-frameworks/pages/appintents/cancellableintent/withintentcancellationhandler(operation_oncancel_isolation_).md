> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/cancellableintent/withintentcancellationhandler(operation:oncancel:isolation:)](https://developer.apple.com/documentation/appintents/cancellableintent/withintentcancellationhandler(operation:oncancel:isolation:))

# withIntentCancellationHandler(operation:onCancel:isolation:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

Runs an operation with a cancellation handler that receives a cancellation reason.

## Declaration

```swift
func withIntentCancellationHandler<T>(operation: () async throws -> T, onCancel handler: @Sendable (IntentCancellationReason) -> Void, isolation: isolated (any Actor)? = #isolation) async rethrows -> T
```

## Parameters

- `operation`: The closure with the operation to run. Use this closure to run the code for your app intent’s task.
- `handler`: The closure to run when cancellation occurs. Use this closure to respond to the cancellation and perform any required cleanup. The closure receives a parameter with the cancellation reason and returns no value.
- `isolation`: The actor isolation for the operation. If you don’t specify a value, the system uses the current isolation context.

<a id="return-value"></a>

## Return Value

The value you return from the `operation` closure.

<a id="discussion"></a>

## Discussion

> **Throws**

> Rethrows any error thrown by the operation.

Use this method to handle cancellation in an app intent’s [perform()](../appintent/perform%28%29.md) method when you also want to know the reason for cancellation. If cancellation occurs due to a timeout or someone canceling the operation, the system runs your `handler` and gives you a little extra time to perform any cleanup. If you don’t need to know the cancellation reason, you can use the standard Swift [withTaskCancellationHandler(handler:operation:)](https://developer.apple.com/documentation/swift/withtaskcancellationhandler%28handler:operation:%29) method for tasks instead.

## See Also

### Cancelling the intent

- [IntentCancellationReason](../intentcancellationreason.md): Reasons for the cancellation of an app intent’s operation.
