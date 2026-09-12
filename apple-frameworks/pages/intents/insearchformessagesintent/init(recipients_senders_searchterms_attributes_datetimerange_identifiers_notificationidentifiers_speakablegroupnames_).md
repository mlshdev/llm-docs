> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintent/init(recipients:senders:searchterms:attributes:datetimerange:identifiers:notificationidentifiers:speakablegroupnames:)](https://developer.apple.com/documentation/intents/insearchformessagesintent/init(recipients:senders:searchterms:attributes:datetimerange:identifiers:notificationidentifiers:speakablegroupnames:))

# init(recipients:senders:searchTerms:attributes:dateTimeRange:identifiers:notificationIdentifiers:speakableGroupNames:)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ (deprecated in 12.0) · iPadOS 11.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 5.0)

Creates a *search messages* intent object with the specified search criteria.

> Use the designated initializer instead

## Declaration

```swift
convenience init(recipients: [INPerson]?, senders: [INPerson]?, searchTerms: [String]?, attributes: INMessageAttributeOptions = [], dateTimeRange: INDateComponentsRange?, identifiers: [String]?, notificationIdentifiers: [String]?, speakableGroupNames: [INSpeakableString]?)
```

## Parameters

- `recipients`: The recipients of the messages. You can specify multiple people to search for messages received by multiple users.
- `senders`: The senders of the messages. You can specify multiple people to search for messages sent by multiple users.
- `searchTerms`: An array of terms to look for in the message contents. Each term constitutes a search string to be matched in the message contents.
- `attributes`: Additional message attributes to consider during the search. For a list of possible values, see [INMessageAttributeOptions](../inmessageattributeoptions.md).
- `dateTimeRange`: The dates associated with the messages. Use this parameter to specify the range of dates to search.
- `identifiers`: The identifier strings of the messages. Use this parameter when you want to specify messages based on their unique ID.
- `notificationIdentifiers`: An array of identifiers from [UNNotification](../../usernotifications/unnotification.md) objects. Use this parameter to search the notifications associated with your app.
- `speakableGroupNames`: An array of strings representing any group addresses receiving the message.

<a id="return-value"></a>

## Return Value

An initialized intent or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, Siri creates instances when the user asks to search their messages. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths. Specify `nil` for any parameters that you do not want used during the search.

## See Also

### Deprecated Symbols

- [init(recipients:senders:searchTerms:attributes:dateTimeRange:identifiers:notificationIdentifiers:groupNames:)](init%28recipients_senders_searchterms_attributes_datetimerange_identifiers_notificationidentifiers_groupnames_%29.md): Deprecated. Creates a *search messages* intent object with the specified search criteria.
- [groupNames](groupnames.md): Deprecated. The names of any groups associated with the message.
- [groupNamesOperator](groupnamesoperator.md): Deprecated. The operator that defines how to use the group names in the search criteria.
