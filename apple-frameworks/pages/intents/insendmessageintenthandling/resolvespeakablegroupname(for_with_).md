> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintenthandling/resolvespeakablegroupname(for:with:)](https://developer.apple.com/documentation/intents/insendmessageintenthandling/resolvespeakablegroupname(for:with:))

# resolveSpeakableGroupName(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

Resolves the name of the group receiving the message.

## Declaration

```swift
optional func resolveSpeakableGroupName(for intent: INSendMessageIntent, with completion: @escaping @Sendable (INSpeakableStringResolutionResult) -> Void)
```

```swift
optional func resolveSpeakableGroupName(for intent: INSendMessageIntent) async -> INSpeakableStringResolutionResult
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution. For successful resolutions, create a resolution with the [NSString](../../foundation/nsstring.md) object that contains the name of the group recognized by your app.

<a id="Discussion"></a>

## Discussion

Implement this method if your app supports the sending messages to named groups. You can specify a group instead of, or in addition to, individual recipients.

## See Also

### Resolving the Intent Parameters

- [resolveRecipients(for:with:)](resolverecipients%28for_with_%29-609yw.md): Resolves the user’s input when it isn’t clear who the recipients of the message are.
- [resolveOutgoingMessageType(for:with:)](resolveoutgoingmessagetype%28for_with_%29.md): Determines what type of message to send.
- [resolveContent(for:with:)](resolvecontent%28for_with_%29.md): Resolves the contents of the message.

# resolveSpeakableGroupNameForSendMessage:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

Resolves the name of the group receiving the message.

## Declaration

```objectivec
- (void) resolveSpeakableGroupNameForSendMessage:(INSendMessageIntent *) intent withCompletion:(void (^)(INSpeakableStringResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution. For successful resolutions, create a resolution with the [NSString](../../foundation/nsstring.md) object that contains the name of the group recognized by your app.

<a id="Discussion"></a>

## Discussion

Implement this method if your app supports the sending messages to named groups. You can specify a group instead of, or in addition to, individual recipients.

## See Also

### Resolving the Intent Parameters

- [resolveRecipientsForSendMessage:completion:](resolverecipients%28for_with_%29-609yw.md): Resolves the user’s input when it isn’t clear who the recipients of the message are.
- [resolveOutgoingMessageTypeForSendMessage:withCompletion:](resolveoutgoingmessagetype%28for_with_%29.md): Determines what type of message to send.
- [resolveContentForSendMessage:withCompletion:](resolvecontent%28for_with_%29.md): Resolves the contents of the message.
