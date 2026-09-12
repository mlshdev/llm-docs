> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmessage/groupname](https://developer.apple.com/documentation/intents/inmessage/groupname)

# groupName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The name of the grouped conversation.

## Declaration

```swift
@NSCopying var groupName: INSpeakableString? { get }
```

## See Also

### Getting the Supplementary Attributes

- [dateSent](datesent.md): The date and time the app sent the message to each recipient.
- [messageType](messagetype.md): The type of content the message contains.
- [INMessageType](../inmessagetype.md): Constants that describe the kinds of content a message can contain.
- [serviceName](servicename.md): The name of the service that delivers the message.

# groupName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The name of the grouped conversation.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpeakableString * groupName;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpeakableString * groupName;
```

## See Also

### Getting the Supplementary Attributes

- [dateSent](datesent.md): The date and time the app sent the message to each recipient.
- [messageType](messagetype.md): The type of content the message contains.
- [INMessageType](../inmessagetype.md): Constants that describe the kinds of content a message can contain.
- [serviceName](servicename.md): The name of the service that delivers the message.
