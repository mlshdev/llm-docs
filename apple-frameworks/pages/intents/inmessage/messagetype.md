> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmessage/messagetype](https://developer.apple.com/documentation/intents/inmessage/messagetype)

# messageType (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The type of content the message contains.

## Declaration

```swift
var messageType: INMessageType { get }
```

## See Also

### Getting the Supplementary Attributes

- [dateSent](datesent.md): The date and time the app sent the message to each recipient.
- [groupName](groupname.md): The name of the grouped conversation.
- [INMessageType](../inmessagetype.md): Constants that describe the kinds of content a message can contain.
- [serviceName](servicename.md): The name of the service that delivers the message.

# messageType (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The type of content the message contains.

## Declaration

```objectivec
@property (nonatomic, readonly) INMessageType messageType;
```

```objectivec
@property (atomic, readonly) INMessageType messageType;
```

## See Also

### Getting the Supplementary Attributes

- [dateSent](datesent.md): The date and time the app sent the message to each recipient.
- [groupName](groupname.md): The name of the grouped conversation.
- [INMessageType](../inmessagetype.md): Constants that describe the kinds of content a message can contain.
- [serviceName](servicename.md): The name of the service that delivers the message.
