> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversationaction](https://developer.apple.com/documentation/livecommunicationkit/conversationaction)

# ConversationAction

**Framework:** LiveCommunicationKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

A type that represents an action for a conversation.

## Declaration

```swift
class ConversationAction
```

## Topics

### Creating an action

- [init(conversationUUID:timeoutDate:)](conversationaction/init%28conversationuuid_timeoutdate_%29.md): Creates a conversation action.

### Completing actions

- [fulfill()](conversationaction/fulfill%28%29.md): Reports that the action was successful.
- [fail()](conversationaction/fail%28%29.md): Reports that performing the action failed.

### Accessing action attributes

- [conversationUUID](conversationaction/conversationuuid.md): The unique identifier for the action’s associated conversation.
- [uuid](conversationaction/uuid.md): The unique identifier that identifies the action.
- [timeoutDate](conversationaction/timeoutdate.md): The point in time that marks when the action can’t be completed anymore.
- [state](conversationaction/state-swift.property.md): The action’s current state.
- [ConversationAction.State](conversationaction/state-swift.enum.md): A type that describes the current state of a conversation action.

## Relationships

### Inherited By

- [EndConversationAction](endconversationaction.md)
- [JoinConversationAction](joinconversationaction.md)
- [MergeConversationAction](mergeconversationaction.md)
- [MuteConversationAction](muteconversationaction.md)
- [PauseConversationAction](pauseconversationaction.md)
- [PlayToneAction](playtoneaction.md)
- [SetTranslatingAction](settranslatingaction.md)
- [StartConversationAction](startconversationaction.md)
- [UnmergeConversationAction](unmergeconversationaction.md)

## See Also

### Conversation actions

- [EndConversationAction](endconversationaction.md): An action that removes the local participant from a conversation and stops all audio and video streams.
- [JoinConversationAction](joinconversationaction.md): An action for joining an incoming conversation.
- [MergeConversationAction](mergeconversationaction.md): An action that merges two separate conversations into one conversation.
- [MuteConversationAction](muteconversationaction.md): An action that mutes or unmutes a conversation.
- [PauseConversationAction](pauseconversationaction.md): An action that stops or restarts all audio and video streams for a conversation.
- [PlayToneAction](playtoneaction.md): An action that plays sequence of tones to indicate that a participant of a conversation interacted with the keypad.
- [SetTranslatingAction](settranslatingaction.md): An action that starts or stops translation.
- [StartConversationAction](startconversationaction.md): An action that starts an outgoing conversation and causes the devices of a remote participant to ring.
- [UnmergeConversationAction](unmergeconversationaction.md): An action that separates two previosuly merged conversations.
