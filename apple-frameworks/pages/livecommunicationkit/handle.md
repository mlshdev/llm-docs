> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/handle](https://developer.apple.com/documentation/livecommunicationkit/handle)

# Handle

**Framework:** LiveCommunicationKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

A way to reach a participant, such as a phone number or email address.

## Declaration

```swift
struct Handle
```

## Mentioned In

- [Preparing your app to be the default dialer app](preparing-your-app-to-be-the-default-dialer-app.md)

## Topics

### Creation

- [init(type:value:displayName:)](handle/init%28type_value_displayname_%29.md): Creates a new handle that identifies a participant in a conversation.

### Type

- [type](handle/type.md): The type of the handle; for example a phone number or email address.
- [Handle.Kind](handle/kind.md): Values that define the handle that identifies a participant in a conversation.

### Attributes

- [displayName](handle/displayname.md): The name for a participant in a conversation that appears in the conversation UI.
- [value](handle/value.md): The raw value of the handle.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Cellular network conversations

- [TelephonyConversationManager](telephonyconversationmanager.md): An interface for initiating cellular network conversations.
- [StartCellularConversationAction](startcellularconversationaction.md): The action that starts a cellular conversation using the default calling app.
- [CellularService](cellularservice.md): A structure that represents the cellular service account to use for starting or joining a conversation.
