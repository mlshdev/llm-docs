> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/joinconversationaction](https://developer.apple.com/documentation/livecommunicationkit/joinconversationaction)

# JoinConversationAction

**Framework:** LiveCommunicationKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

An action for joining an incoming conversation.

## Declaration

```swift
final class JoinConversationAction
```

<a id="overview"></a>

## Overview

The incoming conversation might be currently ringing on a person’s device.

## Topics

### Creating a conversation action

- [init(conversationUUID:)](joinconversationaction/init%28conversationuuid_%29.md): Creates an action for joining an incoming conversation.

### Completing actions

- [fulfill(dateConnected:)](joinconversationaction/fulfill%28dateconnected_%29.md): Indicates that the local participant successfully joined an incoming conversation.

## Relationships

### Inherits From

- [ConversationAction](conversationaction.md)

## See Also

### Conversation actions

- [ConversationAction](conversationaction.md): A type that represents an action for a conversation.
- [EndConversationAction](endconversationaction.md): An action that removes the local participant from a conversation and stops all audio and video streams.
- [MergeConversationAction](mergeconversationaction.md): An action that merges two separate conversations into one conversation.
- [MuteConversationAction](muteconversationaction.md): An action that mutes or unmutes a conversation.
- [PauseConversationAction](pauseconversationaction.md): An action that stops or restarts all audio and video streams for a conversation.
- [PlayToneAction](playtoneaction.md): An action that plays sequence of tones to indicate that a participant of a conversation interacted with the keypad.
- [SetTranslatingAction](settranslatingaction.md): An action that starts or stops translation.
- [StartConversationAction](startconversationaction.md): An action that starts an outgoing conversation and causes the devices of a remote participant to ring.
- [UnmergeConversationAction](unmergeconversationaction.md): An action that separates two previosuly merged conversations.
