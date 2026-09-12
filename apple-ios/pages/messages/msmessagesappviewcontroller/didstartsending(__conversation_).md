> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagesappviewcontroller/didstartsending(_:conversation:)](https://developer.apple.com/documentation/messages/msmessagesappviewcontroller/didstartsending(_:conversation:))

# didStartSending(\_:conversation:) (Swift)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Invoked when the user sends a message object.

## Declaration

```swift
func didStartSending(_ message: MSMessage, conversation: MSConversation)
```

## Parameters

- `message`: The message being sent.
- `conversation`: The conversation that the user is currently viewing in the Messages app.

## Mentioned In

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](../adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md)

<a id="Discussion"></a>

## Discussion

Override this method to respond when the user sends an [MSMessage](../msmessage.md) object. This method is called if you use the conversation’s [insert(\_:completionHandler:)](../msconversation/insert%28__completionhandler_%29-3g248.md) method to add an [MSMessage](../msmessage.md) object to the Messages app’s input field, and the user taps Send. It does not guarantee  that the message will be successfully sent or delivered.

The system does not call this method if the controller’s [presentationStyle](presentationstyle.md) property is [MSMessagesAppPresentationStyle.transcript](../msmessagesapppresentationstyle/transcript.md), or if its [presentationContext](presentationcontext.md) property is [MSMessagesAppPresentationContext.media](../msmessagesapppresentationcontext/media.md).

## See Also

### Tracking Messages

- [willSelect(\_:conversation:)](willselect%28__conversation_%29.md): Invoked in response to the user selecting a message object in the transcript, before the system updates the conversation’s [selectedMessage](../msconversation/selectedmessage.md) property.
- [didSelect(\_:conversation:)](didselect%28__conversation_%29.md): Invoked in response to the user selecting a message object in the transcript, after the system updates the conversation’s [selectedMessage](../msconversation/selectedmessage.md) property.
- [didReceive(\_:conversation:)](didreceive%28__conversation_%29.md): Invoked when the iMessage app receives a new message object.
- [didCancelSending(\_:conversation:)](didcancelsending%28__conversation_%29.md): Invoked when the user deletes a message object from the Messages app’s input field.

# didStartSendingMessage:conversation: (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Invoked when the user sends a message object.

## Declaration

```objectivec
- (void) didStartSendingMessage:(MSMessage *) message conversation:(MSConversation *) conversation;
```

## Parameters

- `message`: The message being sent.
- `conversation`: The conversation that the user is currently viewing in the Messages app.

## Mentioned In

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](../adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md)

<a id="Discussion"></a>

## Discussion

Override this method to respond when the user sends an [MSMessage](../msmessage.md) object. This method is called if you use the conversation’s [insertMessage:completionHandler:](../msconversation/insert%28__completionhandler_%29-3g248.md) method to add an [MSMessage](../msmessage.md) object to the Messages app’s input field, and the user taps Send. It does not guarantee  that the message will be successfully sent or delivered.

The system does not call this method if the controller’s [presentationStyle](presentationstyle.md) property is [MSMessagesAppPresentationStyleTranscript](../msmessagesapppresentationstyle/transcript.md), or if its [presentationContext](presentationcontext.md) property is [MSMessagesAppPresentationContextMedia](../msmessagesapppresentationcontext/media.md).

## See Also

### Tracking Messages

- [willSelectMessage:conversation:](willselect%28__conversation_%29.md): Invoked in response to the user selecting a message object in the transcript, before the system updates the conversation’s [selectedMessage](../msconversation/selectedmessage.md) property.
- [didSelectMessage:conversation:](didselect%28__conversation_%29.md): Invoked in response to the user selecting a message object in the transcript, after the system updates the conversation’s [selectedMessage](../msconversation/selectedmessage.md) property.
- [didReceiveMessage:conversation:](didreceive%28__conversation_%29.md): Invoked when the iMessage app receives a new message object.
- [didCancelSendingMessage:conversation:](didcancelsending%28__conversation_%29.md): Invoked when the user deletes a message object from the Messages app’s input field.
