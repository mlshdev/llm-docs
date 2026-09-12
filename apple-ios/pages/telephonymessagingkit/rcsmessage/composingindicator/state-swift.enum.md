> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsmessage/composingindicator/state-swift.enum](https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/composingindicator/state-swift.enum)

# RCSMessage.ComposingIndicator.State

**Framework:** TelephonyMessagingKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+

An enumeration that represents the state of the indicator.

## Declaration

```swift
enum State
```

## Topics

### Working with composing indicator states

- [RCSMessage.ComposingIndicator.State.active](state-swift.enum/active.md): The client is composing a message.
- [RCSMessage.ComposingIndicator.State.idle](state-swift.enum/idle.md): The client is idle.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing composing indicator properties

- [state](state-swift.property.md): The state of the composer.
- [lastActive](lastactive.md): The time of last activity.
- [contentType](contenttype.md): The type of message being composed.
- [UTType](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct): A structure that represents a type of data to load, send, or receive.
- [refreshInterval](refreshinterval.md): The time interval after which the receiver can expect an update from the composer.
