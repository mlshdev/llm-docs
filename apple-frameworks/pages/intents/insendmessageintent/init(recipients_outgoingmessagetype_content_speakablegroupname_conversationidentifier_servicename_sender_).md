> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintent/init(recipients:outgoingmessagetype:content:speakablegroupname:conversationidentifier:servicename:sender:)](https://developer.apple.com/documentation/intents/insendmessageintent/init(recipients:outgoingmessagetype:content:speakablegroupname:conversationidentifier:servicename:sender:))

# init(recipients:outgoingMessageType:content:speakableGroupName:conversationIdentifier:serviceName:sender:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 14.0) · iPadOS 14.0+ (deprecated in 14.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · macOS 11.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 7.0+ (deprecated in 7.0)

Initializes a send message intent object with the specified content and recipients.

> Use [init(recipients:outgoingMessageType:content:speakableGroupName:conversationIdentifier:serviceName:sender:attachments:)](init%28recipients_outgoingmessagetype_content_speakablegroupname_conversationidentifier_servicename_sender_attachments_%29.md) instead.

## Declaration

```swift
convenience init(recipients: [INPerson]?, outgoingMessageType: INOutgoingMessageType, content: String?, speakableGroupName: INSpeakableString?, conversationIdentifier: String?, serviceName: String?, sender: INPerson?)
```

## Parameters

- `recipients`: The intended recipients of the message.
- `outgoingMessageType`: The format of the message.
- `content`: The contents of the message.
- `speakableGroupName`: The name of a group that should receive the message. Specify `nil` if you do not want to send the message to a group address.
- `conversationIdentifier`: The unique identifier for the message conversation. Specify `nil` if your app does not assign identifiers to conversations between users.
- `serviceName`: The specific service to use when sending the message. You may specify `nil` if your app has only one way of sending messages.
- `sender`: The person that created the message.

<a id="return-value"></a>

## Return Value

An initialized intent or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Create an [INSendMessageIntent](../insendmessageintent.md) and donate it in an [INInteraction](../ininteraction.md) when the user sends a message directly in your app. When the user initiates sending a message from outside your app, such as asking Siri or tapping on a contact in the Share Sheet, the system creates the intent and provides it to your intent handler.

## See Also

### Deprecated Symbols

- [init(recipients:content:speakableGroupName:conversationIdentifier:serviceName:sender:)](init%28recipients_content_speakablegroupname_conversationidentifier_servicename_sender_%29.md): Deprecated. Initializes a send message intent object with the specified content and recipients.
- [init(recipients:content:groupName:serviceName:sender:)](init%28recipients_content_groupname_servicename_sender_%29.md): Deprecated. Initializes a send message intent object with the specified content and recipients.
- [groupName](groupname.md): Deprecated. The name of the group to receive the message.

# initWithRecipients:outgoingMessageType:content:speakableGroupName:conversationIdentifier:serviceName:sender: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 14.0) · iPadOS 14.0+ (deprecated in 14.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · macOS 11.0+ (deprecated in 11.0) · tvOS 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 7.0+ (deprecated in 7.0)

Initializes a send message intent object with the specified content and recipients.

> Use [initWithRecipients:outgoingMessageType:content:speakableGroupName:conversationIdentifier:serviceName:sender:attachments:](init%28recipients_outgoingmessagetype_content_speakablegroupname_conversationidentifier_servicename_sender_attachments_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithRecipients:(NSArray<INPerson *> *) recipients outgoingMessageType:(INOutgoingMessageType) outgoingMessageType content:(NSString *) content speakableGroupName:(INSpeakableString *) speakableGroupName conversationIdentifier:(NSString *) conversationIdentifier serviceName:(NSString *) serviceName sender:(INPerson *) sender;
```

## Parameters

- `recipients`: The intended recipients of the message.
- `outgoingMessageType`: The format of the message.
- `content`: The contents of the message.
- `speakableGroupName`: The name of a group that should receive the message. Specify `nil` if you do not want to send the message to a group address.
- `conversationIdentifier`: The unique identifier for the message conversation. Specify `nil` if your app does not assign identifiers to conversations between users.
- `serviceName`: The specific service to use when sending the message. You may specify `nil` if your app has only one way of sending messages.
- `sender`: The person that created the message.

<a id="return-value"></a>

## Return Value

An initialized intent or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Create an [INSendMessageIntent](../insendmessageintent.md) and donate it in an [INInteraction](../ininteraction.md) when the user sends a message directly in your app. When the user initiates sending a message from outside your app, such as asking Siri or tapping on a contact in the Share Sheet, the system creates the intent and provides it to your intent handler.

## See Also

### Deprecated Symbols

- [initWithRecipients:content:speakableGroupName:conversationIdentifier:serviceName:sender:](init%28recipients_content_speakablegroupname_conversationidentifier_servicename_sender_%29.md): Deprecated. Initializes a send message intent object with the specified content and recipients.
- [initWithRecipients:content:groupName:serviceName:sender:](init%28recipients_content_groupname_servicename_sender_%29.md): Deprecated. Initializes a send message intent object with the specified content and recipients.
- [groupName](groupname.md): Deprecated. The name of the group to receive the message.
