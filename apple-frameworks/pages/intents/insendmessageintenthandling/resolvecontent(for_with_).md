> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintenthandling/resolvecontent(for:with:)](https://developer.apple.com/documentation/intents/insendmessageintenthandling/resolvecontent(for:with:))

# resolveContent(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

Resolves the contents of the message.

## Declaration

```swift
optional func resolveContent(for intent: INSendMessageIntent, with completion: @escaping @Sendable (INStringResolutionResult) -> Void)
```

```swift
optional func resolveContent(for intent: INSendMessageIntent) async -> INStringResolutionResult
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution. For successful resolutions, create a resolution with the [NSString](../../foundation/nsstring.md) object that contains the proposed content of the message.

<a id="Discussion"></a>

## Discussion

This method resolves the contents of the message.

## See Also

### Resolving the Intent Parameters

- [resolveRecipients(for:with:)](resolverecipients%28for_with_%29-609yw.md): Resolves the user’s input when it isn’t clear who the recipients of the message are.
- [resolveOutgoingMessageType(for:with:)](resolveoutgoingmessagetype%28for_with_%29.md): Determines what type of message to send.
- [resolveSpeakableGroupName(for:with:)](resolvespeakablegroupname%28for_with_%29.md): Resolves the name of the group receiving the message.

# resolveContentForSendMessage:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

Resolves the contents of the message.

## Declaration

```objectivec
- (void) resolveContentForSendMessage:(INSendMessageIntent *) intent withCompletion:(void (^)(INStringResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution. For successful resolutions, create a resolution with the [NSString](../../foundation/nsstring.md) object that contains the proposed content of the message.

<a id="Discussion"></a>

## Discussion

This method resolves the contents of the message.

## See Also

### Resolving the Intent Parameters

- [resolveRecipientsForSendMessage:completion:](resolverecipients%28for_with_%29-609yw.md): Resolves the user’s input when it isn’t clear who the recipients of the message are.
- [resolveOutgoingMessageTypeForSendMessage:withCompletion:](resolveoutgoingmessagetype%28for_with_%29.md): Determines what type of message to send.
- [resolveSpeakableGroupNameForSendMessage:withCompletion:](resolvespeakablegroupname%28for_with_%29.md): Resolves the name of the group receiving the message.
