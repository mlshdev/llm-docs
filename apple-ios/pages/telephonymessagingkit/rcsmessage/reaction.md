> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsmessage/reaction](https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/reaction)

# RCSMessage.Reaction

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 27.0+

A structure that represents a reaction to an RCS message.

## Declaration

```swift
struct Reaction
```

## Topics

### Initializers

- [init(targetMessageID:operation:)](reaction/init%28targetmessageid_operation_%29.md): Creates a reaction instance with the message identifier and content.
- [init(targetMessageID:operation:isEndToEndEncrypted:)](reaction/init%28targetmessageid_operation_isendtoendencrypted_%29.md): Creates a reaction instance with the message identifier and content.

### Instance Properties

- [isEndToEndEncrypted](reaction/isendtoendencrypted.md): A Boolean value indicating whether this message is end-to-end encrypted.
- [operation](reaction/operation-swift.property.md): The operation to perform for the reaction.
- [targetMessageID](reaction/targetmessageid.md): The target message ID for the reaction.

### Enumerations

- [RCSMessage.Reaction.Operation](reaction/operation-swift.enum.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
