> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/startcellularconversationaction](https://developer.apple.com/documentation/livecommunicationkit/startcellularconversationaction)

# StartCellularConversationAction

**Framework:** LiveCommunicationKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The action that starts a cellular conversation using the default calling app.

## Declaration

```swift
struct StartCellularConversationAction
```

## Mentioned In

- [Preparing your app to be the default dialer app](preparing-your-app-to-be-the-default-dialer-app.md)
- [Initiating VoIP conversations with LiveCommunicationKit](initiating-voip-conversations-with-livecommunicationkit.md)

<a id="overview"></a>

## Overview

Use the `StartCellularConversationAction` to  initiate a conversation and let the system route the conversation to the default calling app. For more information, see [Preparing your app to be the default dialer app](preparing-your-app-to-be-the-default-dialer-app.md).

## Topics

### Request creation

- [init(\_:cellularService:)](startcellularconversationaction/init%28__cellularservice_%29.md): Creates an action that initiates a cellular network conversation.
- [init(\_:)](startcellularconversationaction/init%28__%29.md): Creates an action that initiates a cellular conversation using information from a recent conversation.

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
- [CellularService](cellularservice.md): A structure that represents the cellular service account to use for starting or joining a conversation.
- [Handle](handle.md): A way to reach a participant, such as a phone number or email address.
