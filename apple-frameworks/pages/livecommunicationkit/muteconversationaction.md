> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/muteconversationaction](https://developer.apple.com/documentation/livecommunicationkit/muteconversationaction)

# MuteConversationAction

**Framework:** LiveCommunicationKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

An action that mutes or unmutes a conversation.

## Declaration

```swift
final class MuteConversationAction
```

<a id="overview"></a>

## Overview

Muting a conversation means that remote members won’t be able to hear the local member.

## Topics

### Creating a conversation action

- [init(conversationUUID:isMuted:)](muteconversationaction/init%28conversationuuid_ismuted_%29.md): Creates an action to mute or unmute a conversation.

### Accessing action attributes

- [isMuted](muteconversationaction/ismuted.md): A value that specifies whether to mute or unmute the local participant of the conversation.

## Relationships

### Inherits From

- [ConversationAction](conversationaction.md)

## See Also

### Conversation actions

- [ConversationAction](conversationaction.md): A type that represents an action for a conversation.
- [EndConversationAction](endconversationaction.md): An action that removes the local participant from a conversation and stops all audio and video streams.
- [JoinConversationAction](joinconversationaction.md): An action for joining an incoming conversation.
- [MergeConversationAction](mergeconversationaction.md): An action that merges two separate conversations into one conversation.
- [PauseConversationAction](pauseconversationaction.md): An action that stops or restarts all audio and video streams for a conversation.
- [PlayToneAction](playtoneaction.md): An action that plays sequence of tones to indicate that a participant of a conversation interacted with the keypad.
- [SetTranslatingAction](settranslatingaction.md): An action that starts or stops translation.
- [StartConversationAction](startconversationaction.md): An action that starts an outgoing conversation and causes the devices of a remote participant to ring.
- [UnmergeConversationAction](unmergeconversationaction.md): An action that separates two previosuly merged conversations.
