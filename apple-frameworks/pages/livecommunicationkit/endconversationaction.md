> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/endconversationaction](https://developer.apple.com/documentation/livecommunicationkit/endconversationaction)

# EndConversationAction

**Framework:** LiveCommunicationKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

An action that removes the local participant from a conversation and stops all audio and video streams.

## Declaration

```swift
final class EndConversationAction
```

## Mentioned In

- [Initiating VoIP conversations with LiveCommunicationKit](initiating-voip-conversations-with-livecommunicationkit.md)

<a id="overview"></a>

## Overview

Ending a conversation locally doesn’t necessarily end the conversation for remote members.

## Topics

### Creating a conversation action

- [init(conversationUUID:)](endconversationaction/init%28conversationuuid_%29.md): Creates an action that ends a conversation.

### Completing actions

- [fulfill(dateEnded:)](endconversationaction/fulfill%28dateended_%29.md): Indicates that conversation was successfully ended for the local member.

## Relationships

### Inherits From

- [ConversationAction](conversationaction.md)

## See Also

### Conversation actions

- [ConversationAction](conversationaction.md): A type that represents an action for a conversation.
- [JoinConversationAction](joinconversationaction.md): An action for joining an incoming conversation.
- [MergeConversationAction](mergeconversationaction.md): An action that merges two separate conversations into one conversation.
- [MuteConversationAction](muteconversationaction.md): An action that mutes or unmutes a conversation.
- [PauseConversationAction](pauseconversationaction.md): An action that stops or restarts all audio and video streams for a conversation.
- [PlayToneAction](playtoneaction.md): An action that plays sequence of tones to indicate that a participant of a conversation interacted with the keypad.
- [SetTranslatingAction](settranslatingaction.md): An action that starts or stops translation.
- [StartConversationAction](startconversationaction.md): An action that starts an outgoing conversation and causes the devices of a remote participant to ring.
- [UnmergeConversationAction](unmergeconversationaction.md): An action that separates two previosuly merged conversations.
