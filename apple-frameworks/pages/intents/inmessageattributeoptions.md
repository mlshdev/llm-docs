> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmessageattributeoptions](https://developer.apple.com/documentation/intents/inmessageattributeoptions)

# INMessageAttributeOptions (Swift)

**Framework:** Intents  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants that indicate a message search filter.

## Declaration

```swift
struct INMessageAttributeOptions
```

## Topics

### Constants

- [read](inmessageattributeoptions/read.md): A read message.
- [unread](inmessageattributeoptions/unread.md): An unread message.
- [flagged](inmessageattributeoptions/flagged.md): A flagged message.
- [unflagged](inmessageattributeoptions/unflagged.md): An unflagged message.
- [played](inmessageattributeoptions/played.md): A played message.

### Initializers

- [init(rawValue:)](inmessageattributeoptions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Managing Message Information

- [INMessage](inmessage.md): An object that describes a sent or received message.
- [INMessageAttribute](inmessageattribute.md): Constants that indicate an attribute of a message.
- [INPerson](inperson.md): Information about a person participating in a SiriKit interaction.

# INMessageAttributeOptions (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants that indicate a message search filter.

## Declaration

```objectivec
enum INMessageAttributeOptions : NSUInteger;
```

## Topics

### Constants

- [INMessageAttributeOptionRead](inmessageattributeoptions/read.md): A read message.
- [INMessageAttributeOptionUnread](inmessageattributeoptions/unread.md): An unread message.
- [INMessageAttributeOptionFlagged](inmessageattributeoptions/flagged.md): A flagged message.
- [INMessageAttributeOptionUnflagged](inmessageattributeoptions/unflagged.md): An unflagged message.
- [INMessageAttributeOptionPlayed](inmessageattributeoptions/played.md): A played message.

## See Also

### Managing Message Information

- [INMessage](inmessage.md): An object that describes a sent or received message.
- [INMessageAttribute](inmessageattribute.md): Constants that indicate an attribute of a message.
- [INPerson](inperson.md): Information about a person participating in a SiriKit interaction.
