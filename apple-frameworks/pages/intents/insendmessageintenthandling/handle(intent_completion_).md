> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/insendmessageintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

Sends the message to the specified recipients.

## Declaration

```swift
func handle(intent: INSendMessageIntent, completion: @escaping @Sendable (INSendMessageIntentResponse) -> Void)
```

```swift
func handle(intent: INSendMessageIntent) async -> INSendMessageIntentResponse
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. The information in this object has already been resolved and confirmed by the user.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSendMessageIntentResponse](../insendmessageintentresponse.md) object containing the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must send the message to the designated recipients. The response object you provide should indicate the status of the message.

# handleSendMessage:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

Sends the message to the specified recipients.

## Declaration

```objectivec
- (void) handleSendMessage:(INSendMessageIntent *) intent completion:(void (^)(INSendMessageIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. The information in this object has already been resolved and confirmed by the user.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSendMessageIntentResponse](../insendmessageintentresponse.md) object containing the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must send the message to the designated recipients. The response object you provide should indicate the status of the message.
