> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintent/servicename](https://developer.apple.com/documentation/intents/insendmessageintent/servicename)

# serviceName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

The service to use when sending the message.

## Declaration

```swift
var serviceName: String? { get }
```

<a id="Discussion"></a>

## Discussion

Apps that support multiple ways of sending messages can use the information in this property to determine which service to use. If your app supports only one way of sending messages, you can ignore this value.

## See Also

### Specifying Details About a Message

- [recipients](recipients.md): The array of users to receive the message.
- [outgoingMessageType](outgoingmessagetype.md): The format of the message contents.
- [conversationIdentifier](conversationidentifier.md): The identifier for the conversation.
- [speakableGroupName](speakablegroupname.md): The name of the group to receive the message.
- [content](content.md): The content of the message.
- [sender](sender.md): The person or account that’s sending the message.
- [attachments](attachments.md): Audio files to include in the message.

# serviceName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

The service to use when sending the message.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * serviceName;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * serviceName;
```

<a id="Discussion"></a>

## Discussion

Apps that support multiple ways of sending messages can use the information in this property to determine which service to use. If your app supports only one way of sending messages, you can ignore this value.

## See Also

### Specifying Details About a Message

- [recipients](recipients.md): The array of users to receive the message.
- [outgoingMessageType](outgoingmessagetype.md): The format of the message contents.
- [conversationIdentifier](conversationidentifier.md): The identifier for the conversation.
- [speakableGroupName](speakablegroupname.md): The name of the group to receive the message.
- [content](content.md): The content of the message.
- [sender](sender.md): The person or account that’s sending the message.
- [attachments](attachments.md): Audio files to include in the message.
