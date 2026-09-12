> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagesappviewcontroller/didselect(_:conversation:)](https://developer.apple.com/documentation/messages/msmessagesappviewcontroller/didselect(_:conversation:))

# didSelect(\_:conversation:) (Swift)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Invoked in response to the user selecting a message object in the transcript, after the system updates the conversation’s [selectedMessage](../msconversation/selectedmessage.md) property.

## Declaration

```swift
func didSelect(_ message: MSMessage, conversation: MSConversation)
```

## Parameters

- `message`: The message selected by the user.
- `conversation`: The current conversation.

## Mentioned In

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](../adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md)

<a id="Discussion"></a>

## Discussion

This method is called when the user selects one of your app’s message objects in the transcript while your extension is active. Both the `message` parameter and the `conversation` object’s [selectedMessage](../msconversation/selectedmessage.md) property contain the message selected by the user.

If you need to access the previously selected message, override the [willSelect(\_:conversation:)](willselect%28__conversation_%29.md) method instead.

This method is called when a new message arrives while your extension is active. You receive notifications about messages sent using your extension only. You cannot interact with messages from other extensions.

The system does not call this method if the controller’s [presentationStyle](presentationstyle.md) property is [MSMessagesAppPresentationStyle.transcript](../msmessagesapppresentationstyle/transcript.md), or if its [presentationContext](presentationcontext.md) property is [MSMessagesAppPresentationContext.media](../msmessagesapppresentationcontext/media.md).

## See Also

### Tracking Messages

- [willSelect(\_:conversation:)](willselect%28__conversation_%29.md): Invoked in response to the user selecting a message object in the transcript, before the system updates the conversation’s [selectedMessage](../msconversation/selectedmessage.md) property.
- [didReceive(\_:conversation:)](didreceive%28__conversation_%29.md): Invoked when the iMessage app receives a new message object.
- [didStartSending(\_:conversation:)](didstartsending%28__conversation_%29.md): Invoked when the user sends a message object.
- [didCancelSending(\_:conversation:)](didcancelsending%28__conversation_%29.md): Invoked when the user deletes a message object from the Messages app’s input field.

# didSelectMessage:conversation: (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Invoked in response to the user selecting a message object in the transcript, after the system updates the conversation’s [selectedMessage](../msconversation/selectedmessage.md) property.

## Declaration

```objectivec
- (void) didSelectMessage:(MSMessage *) message conversation:(MSConversation *) conversation;
```

## Parameters

- `message`: The message selected by the user.
- `conversation`: The current conversation.

## Mentioned In

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](../adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md)

<a id="Discussion"></a>

## Discussion

This method is called when the user selects one of your app’s message objects in the transcript while your extension is active. Both the `message` parameter and the `conversation` object’s [selectedMessage](../msconversation/selectedmessage.md) property contain the message selected by the user.

If you need to access the previously selected message, override the [willSelectMessage:conversation:](willselect%28__conversation_%29.md) method instead.

This method is called when a new message arrives while your extension is active. You receive notifications about messages sent using your extension only. You cannot interact with messages from other extensions.

The system does not call this method if the controller’s [presentationStyle](presentationstyle.md) property is [MSMessagesAppPresentationStyleTranscript](../msmessagesapppresentationstyle/transcript.md), or if its [presentationContext](presentationcontext.md) property is [MSMessagesAppPresentationContextMedia](../msmessagesapppresentationcontext/media.md).

## See Also

### Tracking Messages

- [willSelectMessage:conversation:](willselect%28__conversation_%29.md): Invoked in response to the user selecting a message object in the transcript, before the system updates the conversation’s [selectedMessage](../msconversation/selectedmessage.md) property.
- [didReceiveMessage:conversation:](didreceive%28__conversation_%29.md): Invoked when the iMessage app receives a new message object.
- [didStartSendingMessage:conversation:](didstartsending%28__conversation_%29.md): Invoked when the user sends a message object.
- [didCancelSendingMessage:conversation:](didcancelsending%28__conversation_%29.md): Invoked when the user deletes a message object from the Messages app’s input field.
