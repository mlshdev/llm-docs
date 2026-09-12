> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmessage/datesent](https://developer.apple.com/documentation/intents/inmessage/datesent)

# dateSent (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The date and time the app sent the message to each recipient.

## Declaration

```swift
var dateSent: Date? { get }
```

## See Also

### Getting the Supplementary Attributes

- [groupName](groupname.md): The name of the grouped conversation.
- [messageType](messagetype.md): The type of content the message contains.
- [INMessageType](../inmessagetype.md): Constants that describe the kinds of content a message can contain.
- [serviceName](servicename.md): The name of the service that delivers the message.

# dateSent (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The date and time the app sent the message to each recipient.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDate * dateSent;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSDate * dateSent;
```

## See Also

### Getting the Supplementary Attributes

- [groupName](groupname.md): The name of the grouped conversation.
- [messageType](messagetype.md): The type of content the message contains.
- [INMessageType](../inmessagetype.md): Constants that describe the kinds of content a message can contain.
- [serviceName](servicename.md): The name of the service that delivers the message.
