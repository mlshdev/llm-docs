> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintent/sender](https://developer.apple.com/documentation/intents/insendmessageintent/sender)

# sender (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

The person or account that’s sending the message.

## Declaration

```swift
@NSCopying var sender: INPerson? { get }
```

## See Also

### Specifying Details About a Message

- [recipients](recipients.md): The array of users to receive the message.
- [outgoingMessageType](outgoingmessagetype.md): The format of the message contents.
- [conversationIdentifier](conversationidentifier.md): The identifier for the conversation.
- [speakableGroupName](speakablegroupname.md): The name of the group to receive the message.
- [content](content.md): The content of the message.
- [serviceName](servicename.md): The service to use when sending the message.
- [attachments](attachments.md): Audio files to include in the message.

# sender (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

The person or account that’s sending the message.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INPerson * sender;
```

```objectivec
@property (atomic, copy, readonly, nullable) INPerson * sender;
```

## See Also

### Specifying Details About a Message

- [recipients](recipients.md): The array of users to receive the message.
- [outgoingMessageType](outgoingmessagetype.md): The format of the message contents.
- [conversationIdentifier](conversationidentifier.md): The identifier for the conversation.
- [speakableGroupName](speakablegroupname.md): The name of the group to receive the message.
- [content](content.md): The content of the message.
- [serviceName](servicename.md): The service to use when sending the message.
- [attachments](attachments.md): Audio files to include in the message.
