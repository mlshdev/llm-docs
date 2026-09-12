> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintent/conversationidentifier](https://developer.apple.com/documentation/intents/insendmessageintent/conversationidentifier)

# conversationIdentifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

The identifier for the conversation.

## Declaration

```swift
var conversationIdentifier: String? { get }
```

## See Also

### Specifying Details About a Message

- [recipients](recipients.md): The array of users to receive the message.
- [outgoingMessageType](outgoingmessagetype.md): The format of the message contents.
- [speakableGroupName](speakablegroupname.md): The name of the group to receive the message.
- [content](content.md): The content of the message.
- [serviceName](servicename.md): The service to use when sending the message.
- [sender](sender.md): The person or account that’s sending the message.
- [attachments](attachments.md): Audio files to include in the message.

# conversationIdentifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

The identifier for the conversation.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * conversationIdentifier;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * conversationIdentifier;
```

## See Also

### Specifying Details About a Message

- [recipients](recipients.md): The array of users to receive the message.
- [outgoingMessageType](outgoingmessagetype.md): The format of the message contents.
- [speakableGroupName](speakablegroupname.md): The name of the group to receive the message.
- [content](content.md): The content of the message.
- [serviceName](servicename.md): The service to use when sending the message.
- [sender](sender.md): The person or account that’s sending the message.
- [attachments](attachments.md): Audio files to include in the message.
