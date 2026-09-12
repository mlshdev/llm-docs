> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmessage/servicename](https://developer.apple.com/documentation/intents/inmessage/servicename)

# serviceName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.2+ · iPadOS 13.2+ · Mac Catalyst 13.2+ · visionOS 1.0+ · watchOS 6.1+

The name of the service that delivers the message.

## Declaration

```swift
var serviceName: String? { get }
```

## See Also

### Getting the Supplementary Attributes

- [dateSent](datesent.md): The date and time the app sent the message to each recipient.
- [groupName](groupname.md): The name of the grouped conversation.
- [messageType](messagetype.md): The type of content the message contains.
- [INMessageType](../inmessagetype.md): Constants that describe the kinds of content a message can contain.

# serviceName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.2+ · iPadOS 13.2+ · Mac Catalyst 13.2+ · visionOS 1.0+ · watchOS 6.1+

The name of the service that delivers the message.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * serviceName;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * serviceName;
```

## See Also

### Getting the Supplementary Attributes

- [dateSent](datesent.md): The date and time the app sent the message to each recipient.
- [groupName](groupname.md): The name of the grouped conversation.
- [messageType](messagetype.md): The type of content the message contains.
- [INMessageType](../inmessagetype.md): Constants that describe the kinds of content a message can contain.
