> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintent/recipients](https://developer.apple.com/documentation/intents/insendmessageintent/recipients)

# recipients (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

The array of users to receive the message.

## Declaration

```swift
var recipients: [INPerson]? { get }
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="Discussion"></a>

## Discussion

Use this property to identify the intended recipients of the message. During the resolution phase, use the information in each [INPerson](../inperson.md) object to resolve the named individual to a specific user of your app.

## See Also

### Specifying Details About a Message

- [outgoingMessageType](outgoingmessagetype.md): The format of the message contents.
- [conversationIdentifier](conversationidentifier.md): The identifier for the conversation.
- [speakableGroupName](speakablegroupname.md): The name of the group to receive the message.
- [content](content.md): The content of the message.
- [serviceName](servicename.md): The service to use when sending the message.
- [sender](sender.md): The person or account that’s sending the message.
- [attachments](attachments.md): Audio files to include in the message.

# recipients (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

The array of users to receive the message.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INPerson *> * recipients;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INPerson *> * recipients;
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="Discussion"></a>

## Discussion

Use this property to identify the intended recipients of the message. During the resolution phase, use the information in each [INPerson](../inperson.md) object to resolve the named individual to a specific user of your app.

## See Also

### Specifying Details About a Message

- [outgoingMessageType](outgoingmessagetype.md): The format of the message contents.
- [conversationIdentifier](conversationidentifier.md): The identifier for the conversation.
- [speakableGroupName](speakablegroupname.md): The name of the group to receive the message.
- [content](content.md): The content of the message.
- [serviceName](servicename.md): The service to use when sending the message.
- [sender](sender.md): The person or account that’s sending the message.
- [attachments](attachments.md): Audio files to include in the message.
