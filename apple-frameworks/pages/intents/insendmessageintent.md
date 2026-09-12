> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintent](https://developer.apple.com/documentation/intents/insendmessageintent)

# INSendMessageIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

A request to send a message to the designated recipients.

## Declaration

```swift
class INSendMessageIntent
```

## Mentioned In

- [Dispatching intents to handlers](../sirikit/dispatching-intents-to-handlers.md)
- [Improving interactions between Siri and your messaging app](../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="overview"></a>

## Overview

Siri creates an [INSendMessageIntent](insendmessageintent.md) object when the user asks to send a message to one or more users. This intent object contains the message to send and the recipients of the message, which can include groups of users. Use the information in this object to construct and send the message.

To handle this intent, the handler object in your Intents extension must adopt the [INSendMessageIntentHandling](insendmessageintenthandling.md) protocol. Your handler confirms the request and creates an [INSendMessageIntentResponse](insendmessageintentresponse.md) object with the results.

> **Note**

>  To allow a user wearing AirPods to automatically hear messages, you must implement both [INSearchForMessagesIntent](insearchformessagesintent.md) and [INSendMessageIntent](insendmessageintent.md). Add [announcement](../usernotifications/unauthorizationoptions/announcement.md) to the options when calling [requestAuthorization(options:completionHandler:)](../usernotifications/unusernotificationcenter/requestauthorization%28options_completionhandler_%29.md). Finally, add [allowAnnouncement](../usernotifications/unnotificationcategoryoptions/allowannouncement.md) to the category option and [INSearchForMessagesIntent](insearchformessagesintent.md) to the category intent identifier.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

Additional attributes of this intent object include the following:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device | No |

Apps can optionally ask the user to unlock the device before handling this intent. To require unlocking of the device, include the name of this class in the `IntentsRestrictedWhileLocked` key of your Intents extension’s `Info.plist` file.

## Topics

### Creating the Intent Object

- [init(recipients:outgoingMessageType:content:speakableGroupName:conversationIdentifier:serviceName:sender:attachments:)](insendmessageintent/init%28recipients_outgoingmessagetype_content_speakablegroupname_conversationidentifier_servicename_sender_attachments_%29.md): Creates a send message intent object with the specified content and recipients.

### Specifying Details About a Message

- [recipients](insendmessageintent/recipients.md): The array of users to receive the message.
- [outgoingMessageType](insendmessageintent/outgoingmessagetype.md): The format of the message contents.
- [conversationIdentifier](insendmessageintent/conversationidentifier.md): The identifier for the conversation.
- [speakableGroupName](insendmessageintent/speakablegroupname.md): The name of the group to receive the message.
- [content](insendmessageintent/content.md): The content of the message.
- [serviceName](insendmessageintent/servicename.md): The service to use when sending the message.
- [sender](insendmessageintent/sender.md): The person or account that’s sending the message.
- [attachments](insendmessageintent/attachments.md): Audio files to include in the message.

### Deprecated Symbols

- [init(recipients:content:speakableGroupName:conversationIdentifier:serviceName:sender:)](insendmessageintent/init%28recipients_content_speakablegroupname_conversationidentifier_servicename_sender_%29.md): Deprecated. Initializes a send message intent object with the specified content and recipients.
- [init(recipients:content:groupName:serviceName:sender:)](insendmessageintent/init%28recipients_content_groupname_servicename_sender_%29.md): Deprecated. Initializes a send message intent object with the specified content and recipients.
- [init(recipients:outgoingMessageType:content:speakableGroupName:conversationIdentifier:serviceName:sender:)](insendmessageintent/init%28recipients_outgoingmessagetype_content_speakablegroupname_conversationidentifier_servicename_sender_%29.md): Deprecated. Initializes a send message intent object with the specified content and recipients.
- [groupName](insendmessageintent/groupname.md): Deprecated. The name of the group to receive the message.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [UNNotificationContentProviding](../usernotifications/unnotificationcontentproviding.md)

## See Also

### Sending a Message

- [INSendMessageIntentHandling](insendmessageintenthandling.md): An interface to handle sending messages to one or more designated users.
- [INSendMessageIntentResponse](insendmessageintentresponse.md): Your app’s response to a send message intent.
- [INOutgoingMessageType](inoutgoingmessagetype.md): The format of the message.
- [INSendMessageAttachment](insendmessageattachment.md): A file to include in a message.
- [INSendMessageIntentDonationMetadata](insendmessageintentdonationmetadata.md)

# INSendMessageIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

A request to send a message to the designated recipients.

## Declaration

```objectivec
@interface INSendMessageIntent : INIntent
```

## Mentioned In

- [Dispatching intents to handlers](../sirikit/dispatching-intents-to-handlers.md)
- [Improving interactions between Siri and your messaging app](../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="overview"></a>

## Overview

Siri creates an [INSendMessageIntent](insendmessageintent.md) object when the user asks to send a message to one or more users. This intent object contains the message to send and the recipients of the message, which can include groups of users. Use the information in this object to construct and send the message.

To handle this intent, the handler object in your Intents extension must adopt the [INSendMessageIntentHandling](insendmessageintenthandling.md) protocol. Your handler confirms the request and creates an [INSendMessageIntentResponse](insendmessageintentresponse.md) object with the results.

> **Note**

>  To allow a user wearing AirPods to automatically hear messages, you must implement both [INSearchForMessagesIntent](insearchformessagesintent.md) and [INSendMessageIntent](insendmessageintent.md). Add [UNAuthorizationOptionAnnouncement](../usernotifications/unauthorizationoptions/announcement.md) to the options when calling [requestAuthorizationWithOptions:completionHandler:](../usernotifications/unusernotificationcenter/requestauthorization%28options_completionhandler_%29.md). Finally, add [UNNotificationCategoryOptionAllowAnnouncement](../usernotifications/unnotificationcategoryoptions/allowannouncement.md) to the category option and [INSearchForMessagesIntent](insearchformessagesintent.md) to the category intent identifier.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

Additional attributes of this intent object include the following:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device | No |

Apps can optionally ask the user to unlock the device before handling this intent. To require unlocking of the device, include the name of this class in the `IntentsRestrictedWhileLocked` key of your Intents extension’s `Info.plist` file.

## Topics

### Creating the Intent Object

- [initWithRecipients:outgoingMessageType:content:speakableGroupName:conversationIdentifier:serviceName:sender:attachments:](insendmessageintent/init%28recipients_outgoingmessagetype_content_speakablegroupname_conversationidentifier_servicename_sender_attachments_%29.md): Creates a send message intent object with the specified content and recipients.

### Specifying Details About a Message

- [recipients](insendmessageintent/recipients.md): The array of users to receive the message.
- [outgoingMessageType](insendmessageintent/outgoingmessagetype.md): The format of the message contents.
- [conversationIdentifier](insendmessageintent/conversationidentifier.md): The identifier for the conversation.
- [speakableGroupName](insendmessageintent/speakablegroupname.md): The name of the group to receive the message.
- [content](insendmessageintent/content.md): The content of the message.
- [serviceName](insendmessageintent/servicename.md): The service to use when sending the message.
- [sender](insendmessageintent/sender.md): The person or account that’s sending the message.
- [attachments](insendmessageintent/attachments.md): Audio files to include in the message.

### Deprecated Symbols

- [initWithRecipients:content:speakableGroupName:conversationIdentifier:serviceName:sender:](insendmessageintent/init%28recipients_content_speakablegroupname_conversationidentifier_servicename_sender_%29.md): Deprecated. Initializes a send message intent object with the specified content and recipients.
- [initWithRecipients:content:groupName:serviceName:sender:](insendmessageintent/init%28recipients_content_groupname_servicename_sender_%29.md): Deprecated. Initializes a send message intent object with the specified content and recipients.
- [initWithRecipients:outgoingMessageType:content:speakableGroupName:conversationIdentifier:serviceName:sender:](insendmessageintent/init%28recipients_outgoingmessagetype_content_speakablegroupname_conversationidentifier_servicename_sender_%29.md): Deprecated. Initializes a send message intent object with the specified content and recipients.
- [groupName](insendmessageintent/groupname.md): Deprecated. The name of the group to receive the message.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [UNNotificationContentProviding](../usernotifications/unnotificationcontentproviding.md)

## See Also

### Sending a Message

- [INSendMessageIntentHandling](insendmessageintenthandling.md): An interface to handle sending messages to one or more designated users.
- [INSendMessageIntentResponse](insendmessageintentresponse.md): Your app’s response to a send message intent.
- [INOutgoingMessageType](inoutgoingmessagetype.md): The format of the message.
- [INSendMessageAttachment](insendmessageattachment.md): A file to include in a message.
- [INSendMessageIntentDonationMetadata](insendmessageintentdonationmetadata.md)
