> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indeletetasksintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/indeletetasksintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Validates whether you can delete the task.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func confirm(intent: INDeleteTasksIntent, completion: @escaping @Sendable (INDeleteTasksIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INDeleteTasksIntent) async -> INDeleteTasksIntentResponse
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Your handler object has already resolved the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. The handler has no return value and takes the following parameter:

  - **response**: The [INDeleteTasksIntentResponse](../indeletetasksintentresponse.md) object that contains the details to confirm with the user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method validates that you can delete the task, but doesn’t delete it yet. If deleting tasks involves contacting a remote server, validate that your server is available and ready to handle requests. In your implementation, execute the provided completion block with a response object that indicates your app’s readiness to delete the task.

# confirmDeleteTasks:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Validates whether you can delete the task.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) confirmDeleteTasks:(INDeleteTasksIntent *) intent completion:(void (^)(INDeleteTasksIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Your handler object has already resolved the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. The handler has no return value and takes the following parameter:

  - **response**: The [INDeleteTasksIntentResponse](../indeletetasksintentresponse.md) object that contains the details to confirm with the user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method validates that you can delete the task, but doesn’t delete it yet. If deleting tasks involves contacting a remote server, validate that your server is available and ready to handle requests. In your implementation, execute the provided completion block with a response object that indicates your app’s readiness to delete the task.
