> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchcallhistoryintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/insearchcallhistoryintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Handles searching the user’s call history.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
func handle(intent: INSearchCallHistoryIntent, completion: @escaping @Sendable (INSearchCallHistoryIntentResponse) -> Void)
```

```swift
func handle(intent: INSearchCallHistoryIntent) async -> INSearchCallHistoryIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. The user has already resolved and confirmed the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSearchCallHistoryIntentResponse](../insearchcallhistoryintentresponse.md) object containing the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to search the user’s call history for entries matching the specified parameters. If the search yields results, make a note of those results and prepare to have your app display them. For example, you could include the results in the [NSUserActivity](../../foundation/nsuseractivity.md) object that you create with your response object.

At the end of your implementation, execute the block in the completion parameter, passing it a response object that encapsulates whether the search was successful.

# handleSearchCallHistory:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Handles searching the user’s call history.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) handleSearchCallHistory:(INSearchCallHistoryIntent *) intent completion:(void (^)(INSearchCallHistoryIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. The user has already resolved and confirmed the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSearchCallHistoryIntentResponse](../insearchcallhistoryintentresponse.md) object containing the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to search the user’s call history for entries matching the specified parameters. If the search yields results, make a note of those results and prepare to have your app display them. For example, you could include the results in the [NSUserActivity](../../foundation/nsuseractivity.md) object that you create with your response object.

At the end of your implementation, execute the block in the completion parameter, passing it a response object that encapsulates whether the search was successful.
