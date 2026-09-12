> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintent/init(recipients:content:groupname:servicename:sender:)](https://developer.apple.com/documentation/intents/insendmessageintent/init(recipients:content:groupname:servicename:sender:))

# init(recipients:content:groupName:serviceName:sender:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Initializes a send message intent object with the specified content and recipients.

> Use [init(recipients:outgoingMessageType:content:speakableGroupName:conversationIdentifier:serviceName:sender:attachments:)](init%28recipients_outgoingmessagetype_content_speakablegroupname_conversationidentifier_servicename_sender_attachments_%29.md) instead.

## Declaration

```swift
convenience init(recipients: [INPerson]?, content: String?, groupName: String?, serviceName: String?, sender: INPerson?)
```

## Parameters

- `recipients`: The intended recipients of the message.
- `content`: The contents of the message.
- `groupName`: The name of a group that should receive the message. Specify `nil` if you do not want to send the message to a group address.
- `serviceName`: The specific service to use when sending the message. You may specify `nil` if your app has only one way of sending messages.
- `sender`: The person that created the message.

<a id="return-value"></a>

## Return Value

An initialized intent or `nil` if the object could not be created.

## See Also

### Deprecated Symbols

- [init(recipients:content:speakableGroupName:conversationIdentifier:serviceName:sender:)](init%28recipients_content_speakablegroupname_conversationidentifier_servicename_sender_%29.md): Deprecated. Initializes a send message intent object with the specified content and recipients.
- [init(recipients:outgoingMessageType:content:speakableGroupName:conversationIdentifier:serviceName:sender:)](init%28recipients_outgoingmessagetype_content_speakablegroupname_conversationidentifier_servicename_sender_%29.md): Deprecated. Initializes a send message intent object with the specified content and recipients.
- [groupName](groupname.md): Deprecated. The name of the group to receive the message.

# initWithRecipients:content:groupName:serviceName:sender: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Initializes a send message intent object with the specified content and recipients.

> Use [initWithRecipients:outgoingMessageType:content:speakableGroupName:conversationIdentifier:serviceName:sender:attachments:](init%28recipients_outgoingmessagetype_content_speakablegroupname_conversationidentifier_servicename_sender_attachments_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithRecipients:(NSArray<INPerson *> *) recipients content:(NSString *) content groupName:(NSString *) groupName serviceName:(NSString *) serviceName sender:(INPerson *) sender;
```

## Parameters

- `recipients`: The intended recipients of the message.
- `content`: The contents of the message.
- `groupName`: The name of a group that should receive the message. Specify `nil` if you do not want to send the message to a group address.
- `serviceName`: The specific service to use when sending the message. You may specify `nil` if your app has only one way of sending messages.
- `sender`: The person that created the message.

<a id="return-value"></a>

## Return Value

An initialized intent or `nil` if the object could not be created.

## See Also

### Deprecated Symbols

- [initWithRecipients:content:speakableGroupName:conversationIdentifier:serviceName:sender:](init%28recipients_content_speakablegroupname_conversationidentifier_servicename_sender_%29.md): Deprecated. Initializes a send message intent object with the specified content and recipients.
- [initWithRecipients:outgoingMessageType:content:speakableGroupName:conversationIdentifier:serviceName:sender:](init%28recipients_outgoingmessagetype_content_speakablegroupname_conversationidentifier_servicename_sender_%29.md): Deprecated. Initializes a send message intent object with the specified content and recipients.
- [groupName](groupname.md): Deprecated. The name of the group to receive the message.
