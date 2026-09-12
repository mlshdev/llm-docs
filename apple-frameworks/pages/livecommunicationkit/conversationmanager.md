> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversationmanager](https://developer.apple.com/documentation/livecommunicationkit/conversationmanager)

# ConversationManager

**Framework:** LiveCommunicationKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

An interface for managing and observing VoIP conversations.

## Declaration

```swift
final class ConversationManager
```

## Mentioned In

- [Initiating VoIP conversations with LiveCommunicationKit](initiating-voip-conversations-with-livecommunicationkit.md)

<a id="overview"></a>

## Overview

Use `ConversationManager` to provide VoIP conversation functionality in your app. For more information, see [Preparing your app to be the default dialer app](preparing-your-app-to-be-the-default-dialer-app.md).

## Topics

### Creating the manager

- [init(configuration:)](conversationmanager/init%28configuration_%29.md): Creates a new conversation manager with a given conversation.
- [configuration](conversationmanager/configuration-swift.property.md): The configuration of a conversation manager.
- [ConversationManager.Configuration](conversationmanager/configuration-swift.struct.md): Configuration options for a conversation manager.

### Configuring the manager

- [conversations](conversationmanager/conversations.md): Currently active conversations.
- [pendingActions](conversationmanager/pendingactions.md): All unfinished conversation actions.
- [delegate](conversationmanager/delegate.md): The object that acts as the delegate of the conversation manager.

### Managing conversations

- [perform(\_:)](conversationmanager/perform%28__%29.md): Tells the conversation manager to asynchronously perform actions for a conversation.
- [invalidate()](conversationmanager/invalidate%28%29.md): Invalidates the conversation manager, ends all conversations, and fails all pending concersation actions.

### Observing conversations

- [pendingConversationActions(of:for:)](conversationmanager/pendingconversationactions%28of_for_%29.md): Queries a conversation for pending actions of a specified type.
- [reportConversationEvent(\_:for:)](conversationmanager/reportconversationevent%28__for_%29.md): Informs the system that an event has occurred and that it needs to update the conversation if necessary.
- [reportNewIncomingConversation(uuid:update:)](conversationmanager/reportnewincomingconversation%28uuid_update_%29.md): Informs the system that there’s a new incoming conversation, and the device should begin to ring and present the incoming Conversation UI.
- [reportNewIncomingVoIPPushPayload(\_:)](conversationmanager/reportnewincomingvoippushpayload%28__%29.md): Reports a new incoming conversation after your notification service extension decrypts a VoIP request.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)

## See Also

### VoIP conversations

- [ConversationManagerDelegate](conversationmanagerdelegate.md): Methods for managing conversations and receiving VoIP conversation updates.
- [ConversationHistoryManager](conversationhistorymanager.md): An interface for managing and providing conversation history.
- [Conversation](conversation.md): A type that describes a video or audio conversation.
