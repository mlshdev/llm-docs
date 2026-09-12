> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msconversation](https://developer.apple.com/documentation/messages/msconversation)

# MSConversation (Swift)

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

An object that represents a conversation in the Messages app.

## Declaration

```swift
class MSConversation
```

## Mentioned In

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md)

<a id="overview"></a>

## Overview

The [MSConversation](msconversation.md) class represents a conversation in the Messages app. Use conversation objects to access information about the currently selected message or the conversation participants, or to send text, stickers, attachments, or message objects.

## Topics

### Accessing the Selected Message

- [selectedMessage](msconversation/selectedmessage.md): The message that the user selected in the conversation transcript.

### Accessing Participants

- [localParticipantIdentifier](msconversation/localparticipantidentifier.md): A UUID that identifies the user on this device.
- [remoteParticipantIdentifiers](msconversation/remoteparticipantidentifiers.md): An array of UUIDs representing the remote participants in this conversation.

### Inserting Content into the Input Field

- [insertAttachment(\_:withAlternateFilename:completionHandler:)](msconversation/insertattachment%28__withalternatefilename_completionhandler_%29.md): Inserts an attachment into the current context.
- [insert(\_:completionHandler:)](msconversation/insert%28__completionhandler_%29-3g248.md): Inserts a message object into the Messages app’s input field.
- [insert(\_:completionHandler:)](msconversation/insert%28__completionhandler_%29-7fpdd.md): Inserts a sticker into the current context.
- [insertText(\_:completionHandler:)](msconversation/inserttext%28__completionhandler_%29.md): Inserts text into the Messages app’s input field.

### Directly Sending a Message

- [sendAttachment(\_:withAlternateFilename:completionHandler:)](msconversation/sendattachment%28__withalternatefilename_completionhandler_%29.md): Sends the media file specified by the given URL.
- [send(\_:completionHandler:)](msconversation/send%28__completionhandler_%29-9krz.md): Sends a message object.
- [send(\_:completionHandler:)](msconversation/send%28__completionhandler_%29-4kje0.md): Sends a sticker.
- [sendText(\_:completionHandler:)](msconversation/sendtext%28__completionhandler_%29.md): Sends a text message.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Message content

- [MSSticker](mssticker.md): A sticker that can be sent as a new message or attached to an existing balloon in the Messages app’s transcript.

# MSConversation (Objective-C)

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

An object that represents a conversation in the Messages app.

## Declaration

```objectivec
@interface MSConversation : NSObject
```

## Mentioned In

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md)

<a id="overview"></a>

## Overview

The [MSConversation](msconversation.md) class represents a conversation in the Messages app. Use conversation objects to access information about the currently selected message or the conversation participants, or to send text, stickers, attachments, or message objects.

## Topics

### Accessing the Selected Message

- [selectedMessage](msconversation/selectedmessage.md): The message that the user selected in the conversation transcript.

### Accessing Participants

- [localParticipantIdentifier](msconversation/localparticipantidentifier.md): A UUID that identifies the user on this device.
- [remoteParticipantIdentifiers](msconversation/remoteparticipantidentifiers.md): An array of UUIDs representing the remote participants in this conversation.

### Inserting Content into the Input Field

- [insertAttachment:withAlternateFilename:completionHandler:](msconversation/insertattachment%28__withalternatefilename_completionhandler_%29.md): Inserts an attachment into the current context.
- [insertMessage:completionHandler:](msconversation/insert%28__completionhandler_%29-3g248.md): Inserts a message object into the Messages app’s input field.
- [insertSticker:completionHandler:](msconversation/insert%28__completionhandler_%29-7fpdd.md): Inserts a sticker into the current context.
- [insertText:completionHandler:](msconversation/inserttext%28__completionhandler_%29.md): Inserts text into the Messages app’s input field.

### Directly Sending a Message

- [sendAttachment:withAlternateFilename:completionHandler:](msconversation/sendattachment%28__withalternatefilename_completionhandler_%29.md): Sends the media file specified by the given URL.
- [sendMessage:completionHandler:](msconversation/send%28__completionhandler_%29-9krz.md): Sends a message object.
- [sendSticker:completionHandler:](msconversation/send%28__completionhandler_%29-4kje0.md): Sends a sticker.
- [sendText:completionHandler:](msconversation/sendtext%28__completionhandler_%29.md): Sends a text message.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Message content

- [MSSticker](mssticker.md): A sticker that can be sent as a new message or attached to an existing balloon in the Messages app’s transcript.
