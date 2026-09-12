> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsmessage/customreaction](https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/customreaction)

# RCSMessage.CustomReaction

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 27.0+

A structure that represents a custom reaction to an RCS message.

## Declaration

```swift
struct CustomReaction
```

## Topics

### Initializers

- [init(targetMessageID:operation:)](customreaction/init%28targetmessageid_operation_%29.md): Creates a custom reaction instance with the message identifier and content.
- [init(targetMessageID:operation:isEndToEndEncrypted:)](customreaction/init%28targetmessageid_operation_isendtoendencrypted_%29.md): Creates a custom reaction instance with the message identifier and content.

### Instance Properties

- [isEndToEndEncrypted](customreaction/isendtoendencrypted.md): A Boolean value indicating whether this message is end-to-end encrypted.
- [operation](customreaction/operation-swift.property.md): The operation to perform for the custom reaction.
- [targetMessageID](customreaction/targetmessageid.md): The target message ID for the custom reaction.

### Enumerations

- [RCSMessage.CustomReaction.Operation](customreaction/operation-swift.enum.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
