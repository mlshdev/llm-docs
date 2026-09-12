> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit](https://developer.apple.com/documentation/livecommunicationkit)

# LiveCommunicationKit

**Framework:** LiveCommunicationKit  
**Kind:** Framework  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Initiate and handle VoIP and cellular conversations, coordinate them with other communication apps and the system, and get ready to be a default calling or dialer app.

<a id="Overview"></a>

## Overview

LiveCommunicationKit allows you to offer VoIP conversation functionalities in your app, and to integrate your communication services with other communication apps in the system. With LiveCommunicationKit, your app can:

- Initiate and receive VoIP conversations
- Forward cellular network conversations to the system

Using LiveCommunicationKit in your app allows people to configure their device to use your app as the default dialer or calling app.

<a id="Manage-user-privacy"></a>

### Manage user privacy

With a person’s permission, an installed health research app that uses [SensorKit](https://developer.apple.com/documentation/sensorkit) entitlements may collect Speech Metrics data while your LiveCommunicationKit app is in use. To prevent this, set the [SRResearchDataGeneration](bundleresources/information-property-list/srresearchdatageneration.md) information property list key to `NO`.

> **Important**

> When someone starts a conversation in your app that uses LiveCommunicationKit, your app provides the contact information of the recipient to the system. The system may use that information to indicate communication with that person as a suggestion in the Journal app, or in other apps that use the [Journaling Suggestions](https://developer.apple.com/documentation/journalingsuggestions) framework.

## Topics

### Essentials

- [Initiating VoIP conversations with LiveCommunicationKit](livecommunicationkit/initiating-voip-conversations-with-livecommunicationkit.md): Let people initiate and receive VoIP conversations, and configure your app so it can be the default calling app on a person’s device.
- [Preparing your app to be the default dialer app](livecommunicationkit/preparing-your-app-to-be-the-default-dialer-app.md): Let people configure their device to set your app as the default dialer app.
- [LiveCommunicationKit updates](https://developer.apple.com/documentation/updates/livecommunicationkit): Learn about important changes to LiveCommunicationKit.

### Cellular network conversations

- [TelephonyConversationManager](livecommunicationkit/telephonyconversationmanager.md): An interface for initiating cellular network conversations.
- [StartCellularConversationAction](livecommunicationkit/startcellularconversationaction.md): The action that starts a cellular conversation using the default calling app.
- [CellularService](livecommunicationkit/cellularservice.md): A structure that represents the cellular service account to use for starting or joining a conversation.
- [Handle](livecommunicationkit/handle.md): A way to reach a participant, such as a phone number or email address.

### VoIP conversations

- [ConversationManager](livecommunicationkit/conversationmanager.md): An interface for managing and observing VoIP conversations.
- [ConversationManagerDelegate](livecommunicationkit/conversationmanagerdelegate.md): Methods for managing conversations and receiving VoIP conversation updates.
- [ConversationHistoryManager](livecommunicationkit/conversationhistorymanager.md): An interface for managing and providing conversation history.
- [Conversation](livecommunicationkit/conversation.md): A type that describes a video or audio conversation.

### Conversation actions

- [ConversationAction](livecommunicationkit/conversationaction.md): A type that represents an action for a conversation.
- [EndConversationAction](livecommunicationkit/endconversationaction.md): An action that removes the local participant from a conversation and stops all audio and video streams.
- [JoinConversationAction](livecommunicationkit/joinconversationaction.md): An action for joining an incoming conversation.
- [MergeConversationAction](livecommunicationkit/mergeconversationaction.md): An action that merges two separate conversations into one conversation.
- [MuteConversationAction](livecommunicationkit/muteconversationaction.md): An action that mutes or unmutes a conversation.
- [PauseConversationAction](livecommunicationkit/pauseconversationaction.md): An action that stops or restarts all audio and video streams for a conversation.
- [PlayToneAction](livecommunicationkit/playtoneaction.md): An action that plays sequence of tones to indicate that a participant of a conversation interacted with the keypad.
- [SetTranslatingAction](livecommunicationkit/settranslatingaction.md): An action that starts or stops translation.
- [StartConversationAction](livecommunicationkit/startconversationaction.md): An action that starts an outgoing conversation and causes the devices of a remote participant to ring.
- [UnmergeConversationAction](livecommunicationkit/unmergeconversationaction.md): An action that separates two previosuly merged conversations.
