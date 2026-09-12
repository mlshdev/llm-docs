> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintent/speakablegroupname](https://developer.apple.com/documentation/intents/insendmessageintent/speakablegroupname)

# speakableGroupName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

The name of the group to receive the message.

## Declaration

```swift
@NSCopying var speakableGroupName: INSpeakableString? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to identify the group that is the intended recipient of the message. Your app is responsible for managing groups and for using this parameter to identify the appropriate group.

## See Also

### Specifying Details About a Message

- [recipients](recipients.md): The array of users to receive the message.
- [outgoingMessageType](outgoingmessagetype.md): The format of the message contents.
- [conversationIdentifier](conversationidentifier.md): The identifier for the conversation.
- [content](content.md): The content of the message.
- [serviceName](servicename.md): The service to use when sending the message.
- [sender](sender.md): The person or account that’s sending the message.
- [attachments](attachments.md): Audio files to include in the message.

# speakableGroupName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

The name of the group to receive the message.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpeakableString * speakableGroupName;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpeakableString * speakableGroupName;
```

<a id="Discussion"></a>

## Discussion

Use this property to identify the group that is the intended recipient of the message. Your app is responsible for managing groups and for using this parameter to identify the appropriate group.

## See Also

### Specifying Details About a Message

- [recipients](recipients.md): The array of users to receive the message.
- [outgoingMessageType](outgoingmessagetype.md): The format of the message contents.
- [conversationIdentifier](conversationidentifier.md): The identifier for the conversation.
- [content](content.md): The content of the message.
- [serviceName](servicename.md): The service to use when sending the message.
- [sender](sender.md): The person or account that’s sending the message.
- [attachments](attachments.md): Audio files to include in the message.
