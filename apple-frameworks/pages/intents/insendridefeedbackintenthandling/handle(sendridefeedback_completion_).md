> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendridefeedbackintenthandling/handle(sendridefeedback:completion:)](https://developer.apple.com/documentation/intents/insendridefeedbackintenthandling/handle(sendridefeedback:completion:))

# handle(sendRideFeedback:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Handles the recording of feedback for the specified ride.

## Declaration

```swift
func handle(sendRideFeedback sendRideFeedbackintent: INSendRideFeedbackIntent, completion: @escaping @Sendable (INSendRideFeedbackIntentResponse) -> Void)
```

```swift
func handle(sendRideFeedback sendRideFeedbackintent: INSendRideFeedbackIntent) async -> INSendRideFeedbackIntentResponse
```

## Parameters

- `sendRideFeedbackintent`: The intent object containing details about the user’s request. The information in this object has already been confirmed by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSendRideFeedbackIntentResponse](../insendridefeedbackintentresponse.md) object containing the status of applying the feedback. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

In your implementation of this method, apply the feedback in the provided intent object to the specified ride.

# handleSendRideFeedback:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Handles the recording of feedback for the specified ride.

## Declaration

```objectivec
- (void) handleSendRideFeedback:(INSendRideFeedbackIntent *) sendRideFeedbackintent completion:(void (^)(INSendRideFeedbackIntentResponse *response)) completion;
```

## Parameters

- `sendRideFeedbackintent`: The intent object containing details about the user’s request. The information in this object has already been confirmed by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSendRideFeedbackIntentResponse](../insendridefeedbackintentresponse.md) object containing the status of applying the feedback. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

In your implementation of this method, apply the feedback in the provided intent object to the specified ride.
