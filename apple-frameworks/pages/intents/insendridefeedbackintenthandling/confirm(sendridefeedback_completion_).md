> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendridefeedbackintenthandling/confirm(sendridefeedback:completion:)](https://developer.apple.com/documentation/intents/insendridefeedbackintenthandling/confirm(sendridefeedback:completion:))

# confirm(sendRideFeedback:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Confirms that you can apply the feedback to the specified ride.

## Declaration

```swift
optional func confirm(sendRideFeedback sendRideFeedbackIntent: INSendRideFeedbackIntent, completion: @escaping @Sendable (INSendRideFeedbackIntentResponse) -> Void)
```

```swift
optional func confirm(sendRideFeedback sendRideFeedbackIntent: INSendRideFeedbackIntent) async -> INSendRideFeedbackIntentResponse
```

## Parameters

- `sendRideFeedbackIntent`: The intent object containing details about the user’s request.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSendRideFeedbackIntentResponse](../insendridefeedbackintentresponse.md) object containing the status of whether your app is able to apply the feedback to the ride. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to confirm that you can apply the provided feedback to the ride. Use this method to create a response object with information about whether you can apply the feedback to the ride.

# confirmSendRideFeedback:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Confirms that you can apply the feedback to the specified ride.

## Declaration

```objectivec
- (void) confirmSendRideFeedback:(INSendRideFeedbackIntent *) sendRideFeedbackIntent completion:(void (^)(INSendRideFeedbackIntentResponse *response)) completion;
```

## Parameters

- `sendRideFeedbackIntent`: The intent object containing details about the user’s request.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSendRideFeedbackIntentResponse](../insendridefeedbackintentresponse.md) object containing the status of whether your app is able to apply the feedback to the ride. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to confirm that you can apply the provided feedback to the ride. Use this method to create a response object with information about whether you can apply the feedback to the ride.
