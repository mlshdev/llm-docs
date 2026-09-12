> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/telephonyconversationmanager](https://developer.apple.com/documentation/livecommunicationkit/telephonyconversationmanager)

# TelephonyConversationManager

**Framework:** LiveCommunicationKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An interface for initiating cellular network conversations.

## Declaration

```swift
final class TelephonyConversationManager
```

## Mentioned In

- [Preparing your app to be the default dialer app](preparing-your-app-to-be-the-default-dialer-app.md)
- [Initiating VoIP conversations with LiveCommunicationKit](initiating-voip-conversations-with-livecommunicationkit.md)

<a id="overview"></a>

## Overview

Use `TelephonyConversationManager` to initiate a cellular conversation and let the system route the conversation to the default calling app. For more information, see [Preparing your app to be the default dialer app](preparing-your-app-to-be-the-default-dialer-app.md).

## Topics

### Starting a conversation

- [startCellularConversation(\_:)](telephonyconversationmanager/startcellularconversation%28__%29.md): Starts a cellular conversation using the provided action.
- [sharedInstance](telephonyconversationmanager/sharedinstance.md): The shared object that manages cellular conversations.

### Cellular services

- [cellularServices](telephonyconversationmanager/cellularservices.md): A read-only list of cellular service accounts that you can use to initiate a cellular conversation.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Cellular network conversations

- [StartCellularConversationAction](startcellularconversationaction.md): The action that starts a cellular conversation using the default calling app.
- [CellularService](cellularservice.md): A structure that represents the cellular service account to use for starting or joining a conversation.
- [Handle](handle.md): A way to reach a participant, such as a phone number or email address.
