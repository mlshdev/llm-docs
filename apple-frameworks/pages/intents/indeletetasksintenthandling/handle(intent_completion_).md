> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indeletetasksintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/indeletetasksintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Handles deleting a task.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
func handle(intent: INDeleteTasksIntent, completion: @escaping @Sendable (INDeleteTasksIntentResponse) -> Void)
```

```swift
func handle(intent: INDeleteTasksIntent) async -> INDeleteTasksIntentResponse
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Your handler object has already resolved and confirmed this object’s information.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INDeleteTasksIntentResponse](../indeletetasksintentresponse.md) object that contains the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to transfer control of deleting the task to your app. Delete the task based on the information in the intent parameter, create a response object with the relevant details, and call the provided completion handler.

# handleDeleteTasks:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Handles deleting a task.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) handleDeleteTasks:(INDeleteTasksIntent *) intent completion:(void (^)(INDeleteTasksIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Your handler object has already resolved and confirmed this object’s information.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INDeleteTasksIntentResponse](../indeletetasksintentresponse.md) object that contains the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to transfer control of deleting the task to your app. Delete the task based on the information in the intent parameter, create a response object with the relevant details, and call the provided completion handler.
