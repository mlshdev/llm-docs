> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintent/init(recipients:senders:searchterms:attributes:datetime:identifiers:notificationidentifiers:speakablegroupnames:conversationidentifiers:)](https://developer.apple.com/documentation/intents/insearchformessagesintent/init(recipients:senders:searchterms:attributes:datetime:identifiers:notificationidentifiers:speakablegroupnames:conversationidentifiers:))

# init(recipients:senders:searchTerms:attributes:dateTime:identifiers:notificationIdentifiers:speakableGroupNames:conversationIdentifiers:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

Creates a search messages intent object with the specified search criteria.

## Declaration

```swift
init(recipients: [INPerson]?, senders: [INPerson]?, searchTerms: [String]?, attributes: INMessageAttributeOptions = [], dateTime dateTimeRange: INDateComponentsRange?, identifiers: [String]?, notificationIdentifiers: [String]?, speakableGroupNames: [INSpeakableString]?, conversationIdentifiers: [String]?)
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
- `conversationIdentifiers`: An array of conversation identifiers. Use this parameter to search one or more conversations.

<a id="return-value"></a>

## Return Value

An initialized intent or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Typically, you don’t create instances of this class yourself. Siri creates instances when the user asks to search their messages. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths. Specify `nil` for any parameters that you do not want used during the search.

# initWithRecipients:senders:searchTerms:attributes:dateTimeRange:identifiers:notificationIdentifiers:speakableGroupNames:conversationIdentifiers: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

Creates a search messages intent object with the specified search criteria.

## Declaration

```objectivec
- (instancetype) initWithRecipients:(NSArray<INPerson *> *) recipients senders:(NSArray<INPerson *> *) senders searchTerms:(NSArray<NSString *> *) searchTerms attributes:(INMessageAttributeOptions) attributes dateTimeRange:(INDateComponentsRange *) dateTimeRange identifiers:(NSArray<NSString *> *) identifiers notificationIdentifiers:(NSArray<NSString *> *) notificationIdentifiers speakableGroupNames:(NSArray<INSpeakableString *> *) speakableGroupNames conversationIdentifiers:(NSArray<NSString *> *) conversationIdentifiers;
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
- `conversationIdentifiers`: An array of conversation identifiers. Use this parameter to search one or more conversations.

<a id="return-value"></a>

## Return Value

An initialized intent or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Typically, you don’t create instances of this class yourself. Siri creates instances when the user asks to search their messages. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths. Specify `nil` for any parameters that you do not want used during the search.
