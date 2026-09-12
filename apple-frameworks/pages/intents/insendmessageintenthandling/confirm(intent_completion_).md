> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/insendmessageintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

Confirms that you can send the message.

## Declaration

```swift
optional func confirm(intent: INSendMessageIntent, completion: @escaping @Sendable (INSendMessageIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INSendMessageIntent) async -> INSendMessageIntentResponse
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSendMessageIntentResponse](../insendmessageintentresponse.md) object containing the details to confirm with the user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method validates that your messaging service is available and that sending a message is possible. At some point in your implementation, execute the provided completion block with a response object.

The response object you create in this method and in the [handle(intent:completion:)](handle%28intent_completion_%29.md) method should be virtually the same. For more information about creating the response object, see [INSendMessageIntentResponse](../insendmessageintentresponse.md).

# confirmSendMessage:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

Confirms that you can send the message.

## Declaration

```objectivec
- (void) confirmSendMessage:(INSendMessageIntent *) intent completion:(void (^)(INSendMessageIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSendMessageIntentResponse](../insendmessageintentresponse.md) object containing the details to confirm with the user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method validates that your messaging service is available and that sending a message is possible. At some point in your implementation, execute the provided completion block with a response object.

The response object you create in this method and in the [handleSendMessage:completion:](handle%28intent_completion_%29.md) method should be virtually the same. For more information about creating the response object, see [INSendMessageIntentResponse](../insendmessageintentresponse.md).
