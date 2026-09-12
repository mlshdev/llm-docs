> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintent/groupname](https://developer.apple.com/documentation/intents/insendmessageintent/groupname)

# groupName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

The name of the group to receive the message.

> Use [speakableGroupName](speakablegroupname.md) instead.

## Declaration

```swift
var groupName: String? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to identify the group that is the intended recipient of the message. Your app is responsible for managing groups and for using this parameter to identify the appropriate group.

## See Also

### Deprecated Symbols

- [init(recipients:content:speakableGroupName:conversationIdentifier:serviceName:sender:)](init%28recipients_content_speakablegroupname_conversationidentifier_servicename_sender_%29.md): Deprecated. Initializes a send message intent object with the specified content and recipients.
- [init(recipients:content:groupName:serviceName:sender:)](init%28recipients_content_groupname_servicename_sender_%29.md): Deprecated. Initializes a send message intent object with the specified content and recipients.
- [init(recipients:outgoingMessageType:content:speakableGroupName:conversationIdentifier:serviceName:sender:)](init%28recipients_outgoingmessagetype_content_speakablegroupname_conversationidentifier_servicename_sender_%29.md): Deprecated. Initializes a send message intent object with the specified content and recipients.

# groupName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

The name of the group to receive the message.

> Use [speakableGroupName](speakablegroupname.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * groupName;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * groupName;
```

<a id="Discussion"></a>

## Discussion

Use this property to identify the group that is the intended recipient of the message. Your app is responsible for managing groups and for using this parameter to identify the appropriate group.

## See Also

### Deprecated Symbols

- [initWithRecipients:content:speakableGroupName:conversationIdentifier:serviceName:sender:](init%28recipients_content_speakablegroupname_conversationidentifier_servicename_sender_%29.md): Deprecated. Initializes a send message intent object with the specified content and recipients.
- [initWithRecipients:content:groupName:serviceName:sender:](init%28recipients_content_groupname_servicename_sender_%29.md): Deprecated. Initializes a send message intent object with the specified content and recipients.
- [initWithRecipients:outgoingMessageType:content:speakableGroupName:conversationIdentifier:serviceName:sender:](init%28recipients_outgoingmessagetype_content_speakablegroupname_conversationidentifier_servicename_sender_%29.md): Deprecated. Initializes a send message intent object with the specified content and recipients.
