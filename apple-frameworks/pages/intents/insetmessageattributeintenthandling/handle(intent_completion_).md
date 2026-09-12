> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetmessageattributeintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/insetmessageattributeintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Handles modifying the message attributes.

## Declaration

```swift
func handle(intent: INSetMessageAttributeIntent, completion: @escaping @Sendable (INSetMessageAttributeIntentResponse) -> Void)
```

```swift
func handle(intent: INSetMessageAttributeIntent) async -> INSetMessageAttributeIntentResponse
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. The information in this object has already been resolved and confirmed by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSetMessageAttributeIntentResponse](../insetmessageattributeintentresponse.md) object containing the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must try to modify the attributes of the messages. The response object you provide should indicate whether you were successful at making the changes.

# handleSetMessageAttribute:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Handles modifying the message attributes.

## Declaration

```objectivec
- (void) handleSetMessageAttribute:(INSetMessageAttributeIntent *) intent completion:(void (^)(INSetMessageAttributeIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. The information in this object has already been resolved and confirmed by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSetMessageAttributeIntentResponse](../insetmessageattributeintentresponse.md) object containing the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must try to modify the attributes of the messages. The response object you provide should indicate whether you were successful at making the changes.
