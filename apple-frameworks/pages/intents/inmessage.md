> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmessage](https://developer.apple.com/documentation/intents/inmessage)

# INMessage (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An object that describes a sent or received message.

## Declaration

```swift
class INMessage
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="overview"></a>

## Overview

When your app responds to an [INSearchForMessagesIntent](insearchformessagesintent.md), you create instances of this class to provide Siri with information about the messages in your app. Each message contains a unique identifier, the participants’ details, and the content. You can group messages into larger discussions and, if you app supports multiple services, identify the service that delivers each message.

## Topics

### Creating a Message

- [init(identifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:messageType:serviceName:audioMessageFile:)](inmessage/init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_messagetype_servicename_audiomessagefile_%29.md): Creates a message with the specified content and an optional audio message file.
- [init(identifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:messageType:serviceName:)](inmessage/init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_messagetype_servicename_%29.md): Creates a message with the specified content and an optional service name.
- [init(identifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:messageType:)](inmessage/init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_messagetype_%29.md): Creates a message with the specified content and an optional group name.
- [init(identifier:conversationIdentifier:content:dateSent:sender:recipients:messageType:)](inmessage/init%28identifier_conversationidentifier_content_datesent_sender_recipients_messagetype_%29.md): Creates a message of a distinct type with the specified content.
- [init(identifier:content:dateSent:sender:recipients:)](inmessage/init%28identifier_content_datesent_sender_recipients_%29.md): Creates a message with the specified content.

### Identifying the Message

- [identifier](inmessage/identifier.md): The message’s unique identifier.
- [conversationIdentifier](inmessage/conversationidentifier.md): The identifier of the conversation that contains this message.

### Getting the Participants

- [sender](inmessage/sender.md): The person who sent the message.
- [recipients](inmessage/recipients.md): The people who received the message.

### Getting the Content

- [content](inmessage/content.md): The text that Siri recites to the message recipient.
- [audioMessageFile](inmessage/audiomessagefile.md): Deprecated. An audio recording that Siri plays to the message recipient.

### Getting the Supplementary Attributes

- [dateSent](inmessage/datesent.md): The date and time the app sent the message to each recipient.
- [groupName](inmessage/groupname.md): The name of the grouped conversation.
- [messageType](inmessage/messagetype.md): The type of content the message contains.
- [INMessageType](inmessagetype.md): Constants that describe the kinds of content a message can contain.
- [serviceName](inmessage/servicename.md): The name of the service that delivers the message.

### Initializers

- [init(coder:)](inmessage/init%28coder_%29.md)
- [init(identifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:messageType:serviceName:attachmentFiles:)](inmessage/init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_messagetype_servicename_attachmentfiles_%29.md)
- [init(identifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:serviceName:linkMetadata:)](inmessage/init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_servicename_linkmetadata_%29.md)
- [init(identifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:serviceName:messageType:numberOfAttachments:)](inmessage/init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_servicename_messagetype_numberofattachments_%29.md)
- [init(identifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:serviceName:messageType:referencedMessage:reaction:)](inmessage/init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_servicename_messagetype_referencedmessage_reaction_%29.md)
- [init(identifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:serviceName:messageType:referencedMessage:sticker:reaction:)](inmessage/init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_servicename_messagetype_referencedmessage_sticker_reaction_%29.md)

### Instance Properties

- [attachmentFiles](inmessage/attachmentfiles.md)
- [linkMetadata](inmessage/linkmetadata.md)
- [numberOfAttachments](inmessage/numberofattachments.md)
- [reaction](inmessage/reaction.md)
- [sticker](inmessage/sticker.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Managing Message Information

- [INMessageAttribute](inmessageattribute.md): Constants that indicate an attribute of a message.
- [INMessageAttributeOptions](inmessageattributeoptions.md): Constants that indicate a message search filter.
- [INPerson](inperson.md): Information about a person participating in a SiriKit interaction.

# INMessage (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An object that describes a sent or received message.

## Declaration

```objectivec
@interface INMessage : NSObject
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="overview"></a>

## Overview

When your app responds to an [INSearchForMessagesIntent](insearchformessagesintent.md), you create instances of this class to provide Siri with information about the messages in your app. Each message contains a unique identifier, the participants’ details, and the content. You can group messages into larger discussions and, if you app supports multiple services, identify the service that delivers each message.

## Topics

### Creating a Message

- [initWithIdentifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:messageType:serviceName:audioMessageFile:](inmessage/init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_messagetype_servicename_audiomessagefile_%29.md): Creates a message with the specified content and an optional audio message file.
- [initWithIdentifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:messageType:serviceName:](inmessage/init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_messagetype_servicename_%29.md): Creates a message with the specified content and an optional service name.
- [initWithIdentifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:messageType:](inmessage/init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_messagetype_%29.md): Creates a message with the specified content and an optional group name.
- [initWithIdentifier:conversationIdentifier:content:dateSent:sender:recipients:messageType:](inmessage/init%28identifier_conversationidentifier_content_datesent_sender_recipients_messagetype_%29.md): Creates a message of a distinct type with the specified content.
- [initWithIdentifier:content:dateSent:sender:recipients:](inmessage/init%28identifier_content_datesent_sender_recipients_%29.md): Creates a message with the specified content.

### Identifying the Message

- [identifier](inmessage/identifier.md): The message’s unique identifier.
- [conversationIdentifier](inmessage/conversationidentifier.md): The identifier of the conversation that contains this message.

### Getting the Participants

- [sender](inmessage/sender.md): The person who sent the message.
- [recipients](inmessage/recipients.md): The people who received the message.

### Getting the Content

- [content](inmessage/content.md): The text that Siri recites to the message recipient.
- [audioMessageFile](inmessage/audiomessagefile.md): Deprecated. An audio recording that Siri plays to the message recipient.

### Getting the Supplementary Attributes

- [dateSent](inmessage/datesent.md): The date and time the app sent the message to each recipient.
- [groupName](inmessage/groupname.md): The name of the grouped conversation.
- [messageType](inmessage/messagetype.md): The type of content the message contains.
- [INMessageType](inmessagetype.md): Constants that describe the kinds of content a message can contain.
- [serviceName](inmessage/servicename.md): The name of the service that delivers the message.

### Instance Properties

- [attachmentFiles](inmessage/attachmentfiles.md)
- [linkMetadata](inmessage/linkmetadata.md)
- [numberOfAttachments](inmessage/numberofattachments.md)
- [reaction](inmessage/reaction.md)
- [sticker](inmessage/sticker.md)

### Instance Methods

- [initWithIdentifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:messageType:serviceName:attachmentFiles:](inmessage/init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_messagetype_servicename_attachmentfiles_%29.md)
- [initWithIdentifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:serviceName:linkMetadata:](inmessage/init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_servicename_linkmetadata_%29.md)
- [initWithIdentifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:serviceName:messageType:numberOfAttachments:](inmessage/init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_servicename_messagetype_numberofattachments_%29.md)
- [initWithIdentifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:serviceName:messageType:referencedMessage:reaction:](inmessage/init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_servicename_messagetype_referencedmessage_reaction_%29.md)
- [initWithIdentifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:serviceName:messageType:referencedMessage:sticker:reaction:](inmessage/init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_servicename_messagetype_referencedmessage_sticker_reaction_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Managing Message Information

- [INMessageAttribute](inmessageattribute.md): Constants that indicate an attribute of a message.
- [INMessageAttributeOptions](inmessageattributeoptions.md): Constants that indicate a message search filter.
- [INPerson](inperson.md): Information about a person participating in a SiriKit interaction.
