> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintent](https://developer.apple.com/documentation/intents/insearchformessagesintent)

# INSearchForMessagesIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A request to list the messages that match the specified criteria.

## Declaration

```swift
class INSearchForMessagesIntent
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="overview"></a>

## Overview

Siri creates [INSearchForMessagesIntent](insearchformessagesintent.md) objects when the user asks to see sent or received messages. You must implement this intent to support the reading of messages by Siri. This intent object contains the values for you to match when searching the user’s messages. Users can search for messages involving a specific person, messages with specific sent or received dates, or messages containing specific terms. When performing the search, use only the provided parameters, and ignore any that have no values.

To handle this intent, the handler object in your Intents extension must adopt the [INSearchForMessagesIntentHandling](insearchformessagesintenthandling.md) protocol. Your handler confirms the request and creates an [INSearchForMessagesIntentResponse](insearchformessagesintentresponse.md) object with the results of the search. For successful searches, Siri offers the user a way to launch your app and see the results.

> **Important**

>  To implement support for this intent fully, you must also implement support for the [INSetMessageAttributeIntent](insetmessageattributeintent.md) class. After reading messages that your search returns, Siri marks them as read by modifying the attributes of the messages using that intent class. For more information about supporting the set message attribute intent, see [INSetMessageAttributeIntent](insetmessageattributeintent.md).

To allow a user wearing AirPods to automatically hear messages, you must implement both [INSearchForMessagesIntent](insearchformessagesintent.md) and [INSendMessageIntent](insendmessageintent.md). Add [announcement](../usernotifications/unauthorizationoptions/announcement.md) to the options when calling [requestAuthorization(options:completionHandler:)](../usernotifications/unusernotificationcenter/requestauthorization%28options_completionhandler_%29.md). Finally, add [allowAnnouncement](../usernotifications/unnotificationcategoryoptions/allowannouncement.md) to the category option and [INSearchForMessagesIntent](insearchformessagesintent.md) to the category intent identifier.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

Additional attributes of this intent object include the following:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents |
| Requires unlocked device | Yes, unless Show Previews is in an enabled state on the user’s device. |

Apps can optionally ask the user to unlock the device before handling this intent. To require unlocking of the device, include the name of this class in the `IntentsRestrictedWhileLocked` key of your Intents extension’s `Info.plist` file.

## Topics

### Creating the Intent Object

- [init(recipients:senders:searchTerms:attributes:dateTime:identifiers:notificationIdentifiers:speakableGroupNames:conversationIdentifiers:)](insearchformessagesintent/init%28recipients_senders_searchterms_attributes_datetime_identifiers_notificationidentifiers_speakablegroupnames_conversationidentifiers_%29.md): Creates a search messages intent object with the specified search criteria.

### Getting the Senders and Recipients

- [recipients](insearchformessagesintent/recipients.md): The contacts who are the recipients of the messages.
- [recipientsOperator](insearchformessagesintent/recipientsoperator.md): The operator that defines how to use the recipients in the search criteria.
- [senders](insearchformessagesintent/senders.md): The senders to include or exclude when you search for messages.
- [sendersOperator](insearchformessagesintent/sendersoperator.md): The operator that defines how to use the senders in the search criteria.
- [speakableGroupNames](insearchformessagesintent/speakablegroupnames.md): The names of any groups associated with the message.
- [speakableGroupNamesOperator](insearchformessagesintent/speakablegroupnamesoperator.md): The operator that defines how to use the group names in the search criteria.

### Getting the Search Criteria

- [searchTerms](insearchformessagesintent/searchterms.md): The terms to look for in the messages.
- [searchTermsOperator](insearchformessagesintent/searchtermsoperator.md): The operator that defines how to use the set of terms in the search criteria.
- [dateTimeRange](insearchformessagesintent/datetimerange.md): The range of dates in which to search for messages.
- [attributes](insearchformessagesintent/attributes.md): The attributes that must be present on a message to yield a match.

### Specifying Message Identifiers

- [identifiers](insearchformessagesintent/identifiers.md): The message identifiers to locate in your search.
- [identifiersOperator](insearchformessagesintent/identifiersoperator.md): The operator that defines how to use the identifiers in the search criteria.
- [conversationIdentifiers](insearchformessagesintent/conversationidentifiers.md): The conversation identifiers to locate in your search.
- [conversationIdentifiersOperator](insearchformessagesintent/conversationidentifiersoperator.md): The operator that defines how to use the conversation identifiers in the search criteria.
- [notificationIdentifiers](insearchformessagesintent/notificationidentifiers.md): The notification identifiers to locate in your search.
- [notificationIdentifiersOperator](insearchformessagesintent/notificationidentifiersoperator.md): The operator that defines how to use the notification identifiers in the search criteria.

### Deprecated Symbols

- [init(recipients:senders:searchTerms:attributes:dateTimeRange:identifiers:notificationIdentifiers:speakableGroupNames:)](insearchformessagesintent/init%28recipients_senders_searchterms_attributes_datetimerange_identifiers_notificationidentifiers_speakablegroupnames_%29.md): Deprecated. Creates a *search messages* intent object with the specified search criteria.
- [init(recipients:senders:searchTerms:attributes:dateTimeRange:identifiers:notificationIdentifiers:groupNames:)](insearchformessagesintent/init%28recipients_senders_searchterms_attributes_datetimerange_identifiers_notificationidentifiers_groupnames_%29.md): Deprecated. Creates a *search messages* intent object with the specified search criteria.
- [groupNames](insearchformessagesintent/groupnames.md): Deprecated. The names of any groups associated with the message.
- [groupNamesOperator](insearchformessagesintent/groupnamesoperator.md): Deprecated. The operator that defines how to use the group names in the search criteria.

### Initializers

- [init(recipients:senders:searchTerms:attributes:dateTime:identifiers:notificationIdentifiers:groupNames:)](insearchformessagesintent/init%28recipients_senders_searchterms_attributes_datetime_identifiers_notificationidentifiers_groupnames_%29.md): Deprecated.
- [init(recipients:senders:searchTerms:attributes:dateTime:identifiers:notificationIdentifiers:speakableGroupNames:)](insearchformessagesintent/init%28recipients_senders_searchterms_attributes_datetime_identifiers_notificationidentifiers_speakablegroupnames_%29.md): Deprecated.
- [init(recipients:senders:searchTerms:attributes:dateTimeRange:identifiers:notificationIdentifiers:speakableGroupNames:conversationIdentifiers:)](insearchformessagesintent/init%28recipients_senders_searchterms_attributes_datetimerange_identifiers_notificationidentifiers_speakablegroupnames_conversationidentifiers_%29.md)

### Default Implementations

- [INSearchForMessagesIntent Implementations](insearchformessagesintent/insearchformessagesintent-implementations.md)

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Searching for Messages

- [INSearchForMessagesIntentHandling](insearchformessagesintenthandling.md): An interface that handles requests to search the current user’s messages.
- [INSearchForMessagesIntentResponse](insearchformessagesintentresponse.md): Your app’s response to a search for messages intent.

# INSearchForMessagesIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A request to list the messages that match the specified criteria.

## Declaration

```objectivec
@interface INSearchForMessagesIntent : INIntent
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="overview"></a>

## Overview

Siri creates [INSearchForMessagesIntent](insearchformessagesintent.md) objects when the user asks to see sent or received messages. You must implement this intent to support the reading of messages by Siri. This intent object contains the values for you to match when searching the user’s messages. Users can search for messages involving a specific person, messages with specific sent or received dates, or messages containing specific terms. When performing the search, use only the provided parameters, and ignore any that have no values.

To handle this intent, the handler object in your Intents extension must adopt the [INSearchForMessagesIntentHandling](insearchformessagesintenthandling.md) protocol. Your handler confirms the request and creates an [INSearchForMessagesIntentResponse](insearchformessagesintentresponse.md) object with the results of the search. For successful searches, Siri offers the user a way to launch your app and see the results.

> **Important**

>  To implement support for this intent fully, you must also implement support for the [INSetMessageAttributeIntent](insetmessageattributeintent.md) class. After reading messages that your search returns, Siri marks them as read by modifying the attributes of the messages using that intent class. For more information about supporting the set message attribute intent, see [INSetMessageAttributeIntent](insetmessageattributeintent.md).

To allow a user wearing AirPods to automatically hear messages, you must implement both [INSearchForMessagesIntent](insearchformessagesintent.md) and [INSendMessageIntent](insendmessageintent.md). Add [UNAuthorizationOptionAnnouncement](../usernotifications/unauthorizationoptions/announcement.md) to the options when calling [requestAuthorizationWithOptions:completionHandler:](../usernotifications/unusernotificationcenter/requestauthorization%28options_completionhandler_%29.md). Finally, add [UNNotificationCategoryOptionAllowAnnouncement](../usernotifications/unnotificationcategoryoptions/allowannouncement.md) to the category option and [INSearchForMessagesIntent](insearchformessagesintent.md) to the category intent identifier.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

Additional attributes of this intent object include the following:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents |
| Requires unlocked device | Yes, unless Show Previews is in an enabled state on the user’s device. |

Apps can optionally ask the user to unlock the device before handling this intent. To require unlocking of the device, include the name of this class in the `IntentsRestrictedWhileLocked` key of your Intents extension’s `Info.plist` file.

## Topics

### Creating the Intent Object

- [initWithRecipients:senders:searchTerms:attributes:dateTimeRange:identifiers:notificationIdentifiers:speakableGroupNames:conversationIdentifiers:](insearchformessagesintent/init%28recipients_senders_searchterms_attributes_datetime_identifiers_notificationidentifiers_speakablegroupnames_conversationidentifiers_%29.md): Creates a search messages intent object with the specified search criteria.

### Getting the Senders and Recipients

- [recipients](insearchformessagesintent/recipients.md): The contacts who are the recipients of the messages.
- [recipientsOperator](insearchformessagesintent/recipientsoperator.md): The operator that defines how to use the recipients in the search criteria.
- [senders](insearchformessagesintent/senders.md): The senders to include or exclude when you search for messages.
- [sendersOperator](insearchformessagesintent/sendersoperator.md): The operator that defines how to use the senders in the search criteria.
- [speakableGroupNames](insearchformessagesintent/speakablegroupnames.md): The names of any groups associated with the message.
- [speakableGroupNamesOperator](insearchformessagesintent/speakablegroupnamesoperator.md): The operator that defines how to use the group names in the search criteria.

### Getting the Search Criteria

- [searchTerms](insearchformessagesintent/searchterms.md): The terms to look for in the messages.
- [searchTermsOperator](insearchformessagesintent/searchtermsoperator.md): The operator that defines how to use the set of terms in the search criteria.
- [dateTimeRange](insearchformessagesintent/datetimerange.md): The range of dates in which to search for messages.
- [attributes](insearchformessagesintent/attributes.md): The attributes that must be present on a message to yield a match.

### Specifying Message Identifiers

- [identifiers](insearchformessagesintent/identifiers.md): The message identifiers to locate in your search.
- [identifiersOperator](insearchformessagesintent/identifiersoperator.md): The operator that defines how to use the identifiers in the search criteria.
- [conversationIdentifiers](insearchformessagesintent/conversationidentifiers.md): The conversation identifiers to locate in your search.
- [conversationIdentifiersOperator](insearchformessagesintent/conversationidentifiersoperator.md): The operator that defines how to use the conversation identifiers in the search criteria.
- [notificationIdentifiers](insearchformessagesintent/notificationidentifiers.md): The notification identifiers to locate in your search.
- [notificationIdentifiersOperator](insearchformessagesintent/notificationidentifiersoperator.md): The operator that defines how to use the notification identifiers in the search criteria.

### Deprecated Symbols

- [groupNames](insearchformessagesintent/groupnames.md): Deprecated. The names of any groups associated with the message.
- [groupNamesOperator](insearchformessagesintent/groupnamesoperator.md): Deprecated. The operator that defines how to use the group names in the search criteria.

### Instance Methods

- [initWithRecipients:senders:searchTerms:attributes:dateTimeRange:identifiers:notificationIdentifiers:groupNames:](insearchformessagesintent/init%28recipients_senders_searchterms_attributes_datetime_identifiers_notificationidentifiers_groupnames_%29.md): Deprecated.
- [initWithRecipients:senders:searchTerms:attributes:dateTimeRange:identifiers:notificationIdentifiers:speakableGroupNames:](insearchformessagesintent/init%28recipients_senders_searchterms_attributes_datetime_identifiers_notificationidentifiers_speakablegroupnames_%29.md): Deprecated.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Searching for Messages

- [INSearchForMessagesIntentHandling](insearchformessagesintenthandling.md): An interface that handles requests to search the current user’s messages.
- [INSearchForMessagesIntentResponse](insearchformessagesintentresponse.md): Your app’s response to a search for messages intent.
