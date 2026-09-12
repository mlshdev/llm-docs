> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintent/outgoingmessagetype](https://developer.apple.com/documentation/intents/insendmessageintent/outgoingmessagetype)

# outgoingMessageType (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

The format of the message contents.

## Declaration

```swift
var outgoingMessageType: INOutgoingMessageType { get }
```

<a id="Discussion"></a>

## Discussion

If the user asks Siri to send an audio message,\_ \_the value of this property is [INOutgoingMessageType.outgoingMessageAudio](../inoutgoingmessagetype/outgoingmessageaudio.md). An audio message may also include a transcription of the audio message in the [content](content.md) property.

If the user doesn’t specify what type of message to send, the default message type is [INOutgoingMessageType.outgoingMessageText](../inoutgoingmessagetype/outgoingmessagetext.md).

## See Also

### Specifying Details About a Message

- [recipients](recipients.md): The array of users to receive the message.
- [conversationIdentifier](conversationidentifier.md): The identifier for the conversation.
- [speakableGroupName](speakablegroupname.md): The name of the group to receive the message.
- [content](content.md): The content of the message.
- [serviceName](servicename.md): The service to use when sending the message.
- [sender](sender.md): The person or account that’s sending the message.
- [attachments](attachments.md): Audio files to include in the message.

# outgoingMessageType (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

The format of the message contents.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INOutgoingMessageType outgoingMessageType;
```

```objectivec
@property (atomic, assign, readonly) INOutgoingMessageType outgoingMessageType;
```

<a id="Discussion"></a>

## Discussion

If the user asks Siri to send an audio message,\_ \_the value of this property is [INOutgoingMessageTypeOutgoingMessageAudio](../inoutgoingmessagetype/outgoingmessageaudio.md). An audio message may also include a transcription of the audio message in the [content](content.md) property.

If the user doesn’t specify what type of message to send, the default message type is [INOutgoingMessageTypeOutgoingMessageText](../inoutgoingmessagetype/outgoingmessagetext.md).

## See Also

### Specifying Details About a Message

- [recipients](recipients.md): The array of users to receive the message.
- [conversationIdentifier](conversationidentifier.md): The identifier for the conversation.
- [speakableGroupName](speakablegroupname.md): The name of the group to receive the message.
- [content](content.md): The content of the message.
- [serviceName](servicename.md): The service to use when sending the message.
- [sender](sender.md): The person or account that’s sending the message.
- [attachments](attachments.md): Audio files to include in the message.
