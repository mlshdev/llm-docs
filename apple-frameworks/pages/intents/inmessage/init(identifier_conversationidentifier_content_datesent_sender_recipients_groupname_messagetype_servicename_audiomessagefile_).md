> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmessage/init(identifier:conversationidentifier:content:datesent:sender:recipients:groupname:messagetype:servicename:audiomessagefile:)](https://developer.apple.com/documentation/intents/inmessage/init(identifier:conversationidentifier:content:datesent:sender:recipients:groupname:messagetype:servicename:audiomessagefile:))

# init(identifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:messageType:serviceName:audioMessageFile:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates a message with the specified content and an optional audio message file.

## Declaration

```swift
convenience init(identifier: String, conversationIdentifier: String?, content: String?, dateSent: Date?, sender: INPerson?, recipients: [INPerson]?, groupName: INSpeakableString?, messageType: INMessageType, serviceName: String?, audioMessageFile: INFile?)
```

## Parameters

- `identifier`: The message’s unique identifier. Specify a value that you can later use to identify the same message.
- `conversationIdentifier`: The identifier of the conversation that contains this message.
- `content`: The text that Siri recites to the message recipient.
- `dateSent`: The date and time the app sent the message to each recipient.
- `sender`: The person who sent the message.
- `recipients`: The people who recieved the message.
- `groupName`: The name of the grouped conversation. Provide a value only when the message belongs to a named group; otherwise, specify `nil`.
- `messageType`: The type of content the message contains. For possible values, see [INMessageType](../inmessagetype.md).
- `serviceName`: The name of the service that delivers the message.
- `audioMessageFile`: An audio recording that Siri plays to the message recipient.

<a id="return-value"></a>

## Return Value

A message that SiriKit configures with the specified parameters, or `nil` if there was a problem creating the message.

<a id="Discussion"></a>

## Discussion

Use the `conversationIdentifier` parameter to associate individual messages with a larger discussion among a specific group of people.

For each participant in the message (sender and recipients), create an instance of [INPerson](../inperson.md) using one of the initializers that require an `isMe` parameter. Use [true](https://developer.apple.com/documentation/swift/true) for the participant that represents the user of the current device; for all other participants, use [false](https://developer.apple.com/documentation/swift/false). When creating each of those objects, provide enough information for you to later identify that same person.

If your app supports more than one message service, specify the `serviceName` parameter to indicate which service the app uses to deliver a specific message.

To enable Siri to play an audio message, specify the `audioMessageFile` parameter and set the `messageType` parameter to [INMessageType.audio](../inmessagetype/audio.md). Siri’s access to the file lasts only for the duration of the current session and the system never sends the file to Apple’s servers. Siri supports all common audio formats; to request additional formats, use the [Feedback Assistant](https://feedbackassistant.apple.com/welcome).

## See Also

### Creating a Message

- [init(identifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:messageType:serviceName:)](init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_messagetype_servicename_%29.md): Creates a message with the specified content and an optional service name.
- [init(identifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:messageType:)](init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_messagetype_%29.md): Creates a message with the specified content and an optional group name.
- [init(identifier:conversationIdentifier:content:dateSent:sender:recipients:messageType:)](init%28identifier_conversationidentifier_content_datesent_sender_recipients_messagetype_%29.md): Creates a message of a distinct type with the specified content.
- [init(identifier:content:dateSent:sender:recipients:)](init%28identifier_content_datesent_sender_recipients_%29.md): Creates a message with the specified content.

# initWithIdentifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:messageType:serviceName:audioMessageFile: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates a message with the specified content and an optional audio message file.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier conversationIdentifier:(NSString *) conversationIdentifier content:(NSString *) content dateSent:(NSDate *) dateSent sender:(INPerson *) sender recipients:(NSArray<INPerson *> *) recipients groupName:(INSpeakableString *) groupName messageType:(INMessageType) messageType serviceName:(NSString *) serviceName audioMessageFile:(INFile *) audioMessageFile;
```

## Parameters

- `identifier`: The message’s unique identifier. Specify a value that you can later use to identify the same message.
- `conversationIdentifier`: The identifier of the conversation that contains this message.
- `content`: The text that Siri recites to the message recipient.
- `dateSent`: The date and time the app sent the message to each recipient.
- `sender`: The person who sent the message.
- `recipients`: The people who recieved the message.
- `groupName`: The name of the grouped conversation. Provide a value only when the message belongs to a named group; otherwise, specify `nil`.
- `messageType`: The type of content the message contains. For possible values, see [INMessageType](../inmessagetype.md).
- `serviceName`: The name of the service that delivers the message.
- `audioMessageFile`: An audio recording that Siri plays to the message recipient.

<a id="return-value"></a>

## Return Value

A message that SiriKit configures with the specified parameters, or `nil` if there was a problem creating the message.

<a id="Discussion"></a>

## Discussion

Use the `conversationIdentifier` parameter to associate individual messages with a larger discussion among a specific group of people.

For each participant in the message (sender and recipients), create an instance of [INPerson](../inperson.md) using one of the initializers that require an `isMe` parameter. Use [true](https://developer.apple.com/documentation/swift/true) for the participant that represents the user of the current device; for all other participants, use [false](https://developer.apple.com/documentation/swift/false). When creating each of those objects, provide enough information for you to later identify that same person.

If your app supports more than one message service, specify the `serviceName` parameter to indicate which service the app uses to deliver a specific message.

To enable Siri to play an audio message, specify the `audioMessageFile` parameter and set the `messageType` parameter to [INMessageTypeAudio](../inmessagetype/audio.md). Siri’s access to the file lasts only for the duration of the current session and the system never sends the file to Apple’s servers. Siri supports all common audio formats; to request additional formats, use the [Feedback Assistant](https://feedbackassistant.apple.com/welcome).

## See Also

### Creating a Message

- [initWithIdentifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:messageType:serviceName:](init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_messagetype_servicename_%29.md): Creates a message with the specified content and an optional service name.
- [initWithIdentifier:conversationIdentifier:content:dateSent:sender:recipients:groupName:messageType:](init%28identifier_conversationidentifier_content_datesent_sender_recipients_groupname_messagetype_%29.md): Creates a message with the specified content and an optional group name.
- [initWithIdentifier:conversationIdentifier:content:dateSent:sender:recipients:messageType:](init%28identifier_conversationidentifier_content_datesent_sender_recipients_messagetype_%29.md): Creates a message of a distinct type with the specified content.
- [initWithIdentifier:content:dateSent:sender:recipients:](init%28identifier_content_datesent_sender_recipients_%29.md): Creates a message with the specified content.
