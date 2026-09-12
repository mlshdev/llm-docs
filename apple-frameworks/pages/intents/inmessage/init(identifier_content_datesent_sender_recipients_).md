> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmessage/init(identifier:content:datesent:sender:recipients:)](https://developer.apple.com/documentation/intents/inmessage/init(identifier:content:datesent:sender:recipients:))

# init(identifier:content:dateSent:sender:recipients:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates a message with the specified content.

## Declaration

```swift
convenience init(identifier: String, content: String?, dateSent: Date?, sender: INPerson?, recipients: [INPerson]?)
```

## Parameters

- `identifier`: The message’s unique identifier. Specify a value that you can later use to identify the same message.
- `content`: The text that Siri recites to the message recipient.
- `dateSent`: The date and time the app sent the message to each recipient.
- `sender`: The person who sent the message.
- `recipients`: The people who recieved the message.

<a id="return-value"></a>

## Return Value

A message that SiriKit configures with the specified parameters, or `nil` if there was a problem creating the message.

<a id="Discussion"></a>

## Discussion

For each participant in the message (sender and recipients), create an instance of [INPerson](../inperson.md) using one of the initializers that require an `isMe` parameter. Use [true](https://developer.apple.com/documentation/swift/true) for the participant that represents the user of the current device; for all other participants, use [false](https://developer.apple.com/documentation/swift/false). When creating each of those objects, provide enough information for you to later identify that same person.

## See Also

### Creating a Message

- [init(identifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:messageType:serviceName:audioMessageFile:)](init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_messagetype_servicename_audiomessagefile_%29.md): Creates a message with the specified content and an optional audio message file.
- [init(identifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:messageType:serviceName:)](init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_messagetype_servicename_%29.md): Creates a message with the specified content and an optional service name.
- [init(identifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:messageType:)](init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_messagetype_%29.md): Creates a message with the specified content and an optional group name.
- [init(identifier:conversationIdentifier:content:dateSent:sender:recipients:messageType:)](init%28identifier_conversationidentifier_content_datesent_sender_recipients_messagetype_%29.md): Creates a message of a distinct type with the specified content.

# initWithIdentifier:content:dateSent:sender:recipients: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates a message with the specified content.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier content:(NSString *) content dateSent:(NSDate *) dateSent sender:(INPerson *) sender recipients:(NSArray<INPerson *> *) recipients;
```

## Parameters

- `identifier`: The message’s unique identifier. Specify a value that you can later use to identify the same message.
- `content`: The text that Siri recites to the message recipient.
- `dateSent`: The date and time the app sent the message to each recipient.
- `sender`: The person who sent the message.
- `recipients`: The people who recieved the message.

<a id="return-value"></a>

## Return Value

A message that SiriKit configures with the specified parameters, or `nil` if there was a problem creating the message.

<a id="Discussion"></a>

## Discussion

For each participant in the message (sender and recipients), create an instance of [INPerson](../inperson.md) using one of the initializers that require an `isMe` parameter. Use [true](https://developer.apple.com/documentation/swift/true) for the participant that represents the user of the current device; for all other participants, use [false](https://developer.apple.com/documentation/swift/false). When creating each of those objects, provide enough information for you to later identify that same person.

## See Also

### Creating a Message

- [initWithIdentifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:messageType:serviceName:audioMessageFile:](init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_messagetype_servicename_audiomessagefile_%29.md): Creates a message with the specified content and an optional audio message file.
- [initWithIdentifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:messageType:serviceName:](init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_messagetype_servicename_%29.md): Creates a message with the specified content and an optional service name.
- [initWithIdentifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:messageType:](init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_messagetype_%29.md): Creates a message with the specified content and an optional group name.
- [initWithIdentifier:conversationIdentifier:content:dateSent:sender:recipients:messageType:](init%28identifier_conversationidentifier_content_datesent_sender_recipients_messagetype_%29.md): Creates a message of a distinct type with the specified content.
