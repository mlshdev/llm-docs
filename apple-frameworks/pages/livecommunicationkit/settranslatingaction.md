> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/settranslatingaction](https://developer.apple.com/documentation/livecommunicationkit/settranslatingaction)

# SetTranslatingAction

**Framework:** LiveCommunicationKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An action that starts or stops translation.

## Declaration

```swift
final class SetTranslatingAction
```

<a id="overview"></a>

## Overview

To avoid interrupting or impeding call translation when a person mutes their audio during a conversation, don’t deactivate the upstream audio. Instead, mute your app’s audio input using [MuteConversationAction](muteconversationaction.md) and keep the upstream audio active to allow translated audio to flow when a person mutes the hardware microphone.

## Topics

### Creating a conversation action

- [init(conversationID:isTranslating:localLanguage:remoteLanguage:)](settranslatingaction/init%28conversationid_istranslating_locallanguage_remotelanguage_%29.md): Creates an action that starts or stops translation.

### Accessing action attributes

- [isTranslating](settranslatingaction/istranslating.md): A value that indicates whether to start or stop translation.
- [localLanguage](settranslatingaction/locallanguage.md): The local participant’s language.
- [remoteLanguage](settranslatingaction/remotelanguage.md): The remote participant’s language.

### Completing a translation

- [fulfill(using:)](settranslatingaction/fulfill%28using_%29.md): Reports that the translation action was successful.
- [SetTranslatingAction.TranslationEngine](settranslatingaction/translationengine.md): Values that describe the translation engine that provided a translation.

## Relationships

### Inherits From

- [ConversationAction](conversationaction.md)

## See Also

### Conversation actions

- [ConversationAction](conversationaction.md): A type that represents an action for a conversation.
- [EndConversationAction](endconversationaction.md): An action that removes the local participant from a conversation and stops all audio and video streams.
- [JoinConversationAction](joinconversationaction.md): An action for joining an incoming conversation.
- [MergeConversationAction](mergeconversationaction.md): An action that merges two separate conversations into one conversation.
- [MuteConversationAction](muteconversationaction.md): An action that mutes or unmutes a conversation.
- [PauseConversationAction](pauseconversationaction.md): An action that stops or restarts all audio and video streams for a conversation.
- [PlayToneAction](playtoneaction.md): An action that plays sequence of tones to indicate that a participant of a conversation interacted with the keypad.
- [StartConversationAction](startconversationaction.md): An action that starts an outgoing conversation and causes the devices of a remote participant to ring.
- [UnmergeConversationAction](unmergeconversationaction.md): An action that separates two previosuly merged conversations.
