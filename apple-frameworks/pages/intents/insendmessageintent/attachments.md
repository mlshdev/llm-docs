> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintent/attachments](https://developer.apple.com/documentation/intents/insendmessageintent/attachments)

# attachments (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Audio files to include in the message.

## Declaration

```swift
var attachments: [INSendMessageAttachment]? { get }
```

## See Also

### Specifying Details About a Message

- [recipients](recipients.md): The array of users to receive the message.
- [outgoingMessageType](outgoingmessagetype.md): The format of the message contents.
- [conversationIdentifier](conversationidentifier.md): The identifier for the conversation.
- [speakableGroupName](speakablegroupname.md): The name of the group to receive the message.
- [content](content.md): The content of the message.
- [serviceName](servicename.md): The service to use when sending the message.
- [sender](sender.md): The person or account that’s sending the message.

# attachments (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Audio files to include in the message.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INSendMessageAttachment *> * attachments;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INSendMessageAttachment *> * attachments;
```

## See Also

### Specifying Details About a Message

- [recipients](recipients.md): The array of users to receive the message.
- [outgoingMessageType](outgoingmessagetype.md): The format of the message contents.
- [conversationIdentifier](conversationidentifier.md): The identifier for the conversation.
- [speakableGroupName](speakablegroupname.md): The name of the group to receive the message.
- [content](content.md): The content of the message.
- [serviceName](servicename.md): The service to use when sending the message.
- [sender](sender.md): The person or account that’s sending the message.
