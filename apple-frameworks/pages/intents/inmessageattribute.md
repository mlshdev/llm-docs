> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmessageattribute](https://developer.apple.com/documentation/intents/inmessageattribute)

# INMessageAttribute (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants that indicate an attribute of a message.

## Declaration

```swift
enum INMessageAttribute
```

## Topics

### Constants

- [INMessageAttribute.unknown](inmessageattribute/unknown.md): No known attribute.
- [INMessageAttribute.read](inmessageattribute/read.md): The message is marked as read.
- [INMessageAttribute.unread](inmessageattribute/unread.md): The message is marked as unread.
- [INMessageAttribute.flagged](inmessageattribute/flagged.md): The message has been flagged.
- [INMessageAttribute.unflagged](inmessageattribute/unflagged.md): The message has not been flagged.
- [INMessageAttribute.played](inmessageattribute/played.md): The message has been played.

### Initializers

- [init(rawValue:)](inmessageattribute/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Message Information

- [INMessage](inmessage.md): An object that describes a sent or received message.
- [INMessageAttributeOptions](inmessageattributeoptions.md): Constants that indicate a message search filter.
- [INPerson](inperson.md): Information about a person participating in a SiriKit interaction.

# INMessageAttribute (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants that indicate an attribute of a message.

## Declaration

```objectivec
enum INMessageAttribute : NSInteger;
```

## Topics

### Constants

- [INMessageAttributeUnknown](inmessageattribute/unknown.md): No known attribute.
- [INMessageAttributeRead](inmessageattribute/read.md): The message is marked as read.
- [INMessageAttributeUnread](inmessageattribute/unread.md): The message is marked as unread.
- [INMessageAttributeFlagged](inmessageattribute/flagged.md): The message has been flagged.
- [INMessageAttributeUnflagged](inmessageattribute/unflagged.md): The message has not been flagged.
- [INMessageAttributePlayed](inmessageattribute/played.md): The message has been played.

## See Also

### Managing Message Information

- [INMessage](inmessage.md): An object that describes a sent or received message.
- [INMessageAttributeOptions](inmessageattributeoptions.md): Constants that indicate a message search filter.
- [INPerson](inperson.md): Information about a person participating in a SiriKit interaction.
