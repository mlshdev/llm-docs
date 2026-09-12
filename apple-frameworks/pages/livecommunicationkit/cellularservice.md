> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/cellularservice](https://developer.apple.com/documentation/livecommunicationkit/cellularservice)

# CellularService

**Framework:** LiveCommunicationKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A structure that represents the cellular service account to use for starting or joining a conversation.

## Declaration

```swift
struct CellularService
```

## Mentioned In

- [Preparing your app to be the default dialer app](preparing-your-app-to-be-the-default-dialer-app.md)

## Topics

### Attributes

- [label](cellularservice/label.md): The label for the service that people view in a communication app.
- [id](cellularservice/id.md): A unique identifier that identifies the cellular service.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Cellular network conversations

- [TelephonyConversationManager](telephonyconversationmanager.md): An interface for initiating cellular network conversations.
- [StartCellularConversationAction](startcellularconversationaction.md): The action that starts a cellular conversation using the default calling app.
- [Handle](handle.md): A way to reach a participant, such as a phone number or email address.
