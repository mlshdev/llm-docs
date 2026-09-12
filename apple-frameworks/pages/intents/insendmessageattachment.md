> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageattachment](https://developer.apple.com/documentation/intents/insendmessageattachment)

# INSendMessageAttachment (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

A file to include in a message.

## Declaration

```swift
class INSendMessageAttachment
```

<a id="overview"></a>

## Overview

When the type of a message is [INOutgoingMessageType.outgoingMessageAudio](inoutgoingmessagetype/outgoingmessageaudio.md), the intent includes the audio recording as an [INSendMessageAttachment](insendmessageattachment.md).

## Topics

### Creating an Audio Attachment

- [init(audioMessageFile:)](insendmessageattachment/init%28audiomessagefile_%29.md): Creates a message attachment with an audio file.

### Accessing the Message File

- [audioMessageFile](insendmessageattachment/audiomessagefile.md): The attachment’s recorded message.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Sending a Message

- [INSendMessageIntentHandling](insendmessageintenthandling.md): An interface to handle sending messages to one or more designated users.
- [INSendMessageIntent](insendmessageintent.md): A request to send a message to the designated recipients.
- [INSendMessageIntentResponse](insendmessageintentresponse.md): Your app’s response to a send message intent.
- [INOutgoingMessageType](inoutgoingmessagetype.md): The format of the message.
- [INSendMessageIntentDonationMetadata](insendmessageintentdonationmetadata.md)

# INSendMessageAttachment (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

A file to include in a message.

## Declaration

```objectivec
@interface INSendMessageAttachment : NSObject
```

<a id="overview"></a>

## Overview

When the type of a message is [INOutgoingMessageTypeOutgoingMessageAudio](inoutgoingmessagetype/outgoingmessageaudio.md), the intent includes the audio recording as an [INSendMessageAttachment](insendmessageattachment.md).

## Topics

### Creating an Audio Attachment

- [attachmentWithAudioMessageFile:](insendmessageattachment/init%28audiomessagefile_%29.md): Creates a message attachment with an audio file.

### Accessing the Message File

- [audioMessageFile](insendmessageattachment/audiomessagefile.md): The attachment’s recorded message.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Sending a Message

- [INSendMessageIntentHandling](insendmessageintenthandling.md): An interface to handle sending messages to one or more designated users.
- [INSendMessageIntent](insendmessageintent.md): A request to send a message to the designated recipients.
- [INSendMessageIntentResponse](insendmessageintentresponse.md): Your app’s response to a send message intent.
- [INOutgoingMessageType](inoutgoingmessagetype.md): The format of the message.
- [INSendMessageIntentDonationMetadata](insendmessageintentdonationmetadata.md)
