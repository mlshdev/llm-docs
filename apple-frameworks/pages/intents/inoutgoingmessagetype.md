> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inoutgoingmessagetype](https://developer.apple.com/documentation/intents/inoutgoingmessagetype)

# INOutgoingMessageType (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

The format of the message.

## Declaration

```swift
enum INOutgoingMessageType
```

## Topics

### Message Types

- [INOutgoingMessageType.outgoingMessageText](inoutgoingmessagetype/outgoingmessagetext.md): Plain text.
- [INOutgoingMessageType.outgoingMessageAudio](inoutgoingmessagetype/outgoingmessageaudio.md): An audio recording.
- [INOutgoingMessageType.unknown](inoutgoingmessagetype/unknown.md): An unspecified message format.

### Initializers

- [init(rawValue:)](inoutgoingmessagetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sending a Message

- [INSendMessageIntentHandling](insendmessageintenthandling.md): An interface to handle sending messages to one or more designated users.
- [INSendMessageIntent](insendmessageintent.md): A request to send a message to the designated recipients.
- [INSendMessageIntentResponse](insendmessageintentresponse.md): Your app’s response to a send message intent.
- [INSendMessageAttachment](insendmessageattachment.md): A file to include in a message.
- [INSendMessageIntentDonationMetadata](insendmessageintentdonationmetadata.md)

# INOutgoingMessageType (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

The format of the message.

## Declaration

```objectivec
enum INOutgoingMessageType : NSInteger;
```

## Topics

### Message Types

- [INOutgoingMessageTypeOutgoingMessageText](inoutgoingmessagetype/outgoingmessagetext.md): Plain text.
- [INOutgoingMessageTypeOutgoingMessageAudio](inoutgoingmessagetype/outgoingmessageaudio.md): An audio recording.
- [INOutgoingMessageTypeUnknown](inoutgoingmessagetype/unknown.md): An unspecified message format.

## See Also

### Sending a Message

- [INSendMessageIntentHandling](insendmessageintenthandling.md): An interface to handle sending messages to one or more designated users.
- [INSendMessageIntent](insendmessageintent.md): A request to send a message to the designated recipients.
- [INSendMessageIntentResponse](insendmessageintentresponse.md): Your app’s response to a send message intent.
- [INSendMessageAttachment](insendmessageattachment.md): A file to include in a message.
- [INSendMessageIntentDonationMetadata](insendmessageintentdonationmetadata.md)
