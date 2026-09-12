> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechat](https://developer.apple.com/documentation/gamekit/gkvoicechat)

# GKVoiceChat (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.1+ (deprecated in 18.0) · iPadOS 4.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A voice channel that allows players to speak with each other in a multiplayer game.

> Use SharePlay instead. See [Enable the local player to choose other players](finding-multiple-players-for-a-game.md#Enable-the-local-player-to-choose-other-players) and [startGroupActivity(playerHandler:)](gkmatchmaker/startgroupactivity%28playerhandler_%29.md).

## Declaration

```swift
class GKVoiceChat
```

## Mentioned In

- [Adding voice chat to multiplayer games](adding-voice-chat-to-multiplayer-games.md)

<a id="overview"></a>

## Overview

GameKit provides the underlying mechanism to implement voice chat between players in a multiplayer game. It’s your responsibility to provide player controls and display feedback during the chat.

First, configure voice chat by adding the [NSMicrophoneUsageDescription](../bundleresources/information-property-list/nsmicrophoneusagedescription.md) key to the Information Property List and creating an audio session. Then, create a `GKVoiceChat` object using the `GKMatch` [voiceChat(withName:)](gkmatch/voicechat%28withname_%29.md) method passing a string that identifies the voice channel. Use the [start()](gkvoicechat/start%28%29.md) method to connect players to the channel. Use the [isActive](gkvoicechat/isactive.md) property to activate the microphone or switch the microphone between channels.

Provide a handler using the [playerVoiceChatStateDidChangeHandler](gkvoicechat/playervoicechatstatedidchangehandler.md) property to update the interface when a player connects, speaks, or disconnects from a chat. You can also add controls that mute and set the volume using the [setPlayer(\_:muted:)](gkvoicechat/setplayer%28__muted_%29.md) method and [volume](gkvoicechat/volume.md) property.

Note that if there’s insufficient bandwidth over Wi-Fi to maintain a voice chat, GameKit may disconnect players from the channel or disband a channel.

## Topics

### Determining Whether Voice Chat Is Available

- [isVoIPAllowed()](gkvoicechat/isvoipallowed%28%29.md): Deprecated. Returns whether voice chat is available on the device.

### Starting and Stopping Voice Chat

- [start()](gkvoicechat/start%28%29.md): Deprecated. Starts communication with other players in a channel.
- [stop()](gkvoicechat/stop%28%29.md): Deprecated. Ends communication with other players in a channel.
- [isActive](gkvoicechat/isactive.md): Deprecated. A Boolean value that indicates whether the channel is sampling the microphone.

### Receiving Updates About Other Participants

- [playerVoiceChatStateDidChangeHandler](gkvoicechat/playervoicechatstatedidchangehandler.md): Deprecated. A method that handles when a player’s voice chat changes state.
- [GKVoiceChat.PlayerState](gkvoicechat/playerstate.md): Deprecated. The state of a player in a voice chat.

### Controlling Chat Volume

- [setPlayer(\_:muted:)](gkvoicechat/setplayer%28__muted_%29.md): Deprecated. Mutes a player in the chat, including the local player.
- [volume](gkvoicechat/volume.md): Deprecated. The volume level for the channel.

### Accessing Properties

- [name](gkvoicechat/name.md): Deprecated. The name of the voice chat channel.
- [players](gkvoicechat/players.md): Deprecated. The players connected to the channel.

### Deprecated Methods and Properties

- [playerIDs](gkvoicechat/playerids.md): Deprecated. An array of strings containing the player identifiers for the players connected to the channel.
- [playerStateUpdateHandler](gkvoicechat/playerstateupdatehandler.md): Deprecated. Handles when a player in the chat changes state.
- [setMute(\_:forPlayer:)](gkvoicechat/setmute%28__forplayer_%29.md): Deprecated. Mutes a player in a voice chat.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated classes

- [GKAchievementViewController](gkachievementviewcontroller.md): Deprecated. An `GKAchievementViewController` object provides a standard user interface to display achievement progress for the local player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKChallengeEventHandler](gkchallengeeventhandler.md): Deprecated. The `GKChallengeEventHandler` class is used to respond to events related to challenges sent or received by the local player.
- [GKChallengesViewController](gkchallengesviewcontroller.md): Deprecated.
- [GKChallenge](gkchallenge.md): Deprecated. A challenge issued by the local player to another player.
- [GKScoreChallenge](gkscorechallenge.md): Deprecated. A type of challenge where a player must beat the leaderboard score of another player.
- [GKAchievementChallenge](gkachievementchallenge.md): Deprecated. A type of challenge where a player must earn another player’s achievement.
- [GKCloudPlayer](gkcloudplayer.md): Deprecated. The object representing the currently signed-in iCloud user.
- [GKGameCenterViewController](gkgamecenterviewcontroller.md): Deprecated. The dashboard that allows players to access their Game Center data in your game.
- [GKGameSession](gkgamesession.md): Deprecated. A game session you can use to save game data, invite other players, and create turn-based and real-time game apps.
- [GKGameSessionSharingViewController](gkgamesessionsharingviewcontroller.md): Deprecated. A user interface you can use to invite other users into a tvOS game session.
- [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md): Deprecated. Your game uses the `GKFriendRequestComposeViewController` class to present a screen that allows the local player to send friend requests to other players.
- [GKLeaderboardViewController](gkleaderboardviewcontroller.md): Deprecated. The `GKLeaderboardViewController` class provides a standard user interface that displays leaderboard scores to the player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKPeerPickerController](gkpeerpickercontroller.md): Deprecated. Provides a standard user interface to allow one iOS device to discover and connect to another.
- [GKScore](gkscore.md): Deprecated. An object containing information for a score that was earned by the player.
- [GKSession](gksession.md): Deprecated. A [GKSession](gksession.md) object provides the ability to discover and connect to nearby iOS devices using Bluetooth or Wi-fi.

# GKVoiceChat (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.1+ (deprecated in 18.0) · iPadOS 4.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A voice channel that allows players to speak with each other in a multiplayer game.

> Use SharePlay instead. See [Enable the local player to choose other players](finding-multiple-players-for-a-game.md#Enable-the-local-player-to-choose-other-players) and [startGroupActivityWithPlayerHandler:](gkmatchmaker/startgroupactivity%28playerhandler_%29.md).

## Declaration

```objectivec
@interface GKVoiceChat : NSObject
```

## Mentioned In

- [Adding voice chat to multiplayer games](adding-voice-chat-to-multiplayer-games.md)

<a id="overview"></a>

## Overview

GameKit provides the underlying mechanism to implement voice chat between players in a multiplayer game. It’s your responsibility to provide player controls and display feedback during the chat.

First, configure voice chat by adding the [NSMicrophoneUsageDescription](../bundleresources/information-property-list/nsmicrophoneusagedescription.md) key to the Information Property List and creating an audio session. Then, create a `GKVoiceChat` object using the `GKMatch` [voiceChatWithName:](gkmatch/voicechat%28withname_%29.md) method passing a string that identifies the voice channel. Use the [start](gkvoicechat/start%28%29.md) method to connect players to the channel. Use the [active](gkvoicechat/isactive.md) property to activate the microphone or switch the microphone between channels.

Provide a handler using the [playerVoiceChatStateDidChangeHandler](gkvoicechat/playervoicechatstatedidchangehandler.md) property to update the interface when a player connects, speaks, or disconnects from a chat. You can also add controls that mute and set the volume using the [setPlayer:muted:](gkvoicechat/setplayer%28__muted_%29.md) method and [volume](gkvoicechat/volume.md) property.

Note that if there’s insufficient bandwidth over Wi-Fi to maintain a voice chat, GameKit may disconnect players from the channel or disband a channel.

## Topics

### Determining Whether Voice Chat Is Available

- [isVoIPAllowed](gkvoicechat/isvoipallowed%28%29.md): Deprecated. Returns whether voice chat is available on the device.

### Starting and Stopping Voice Chat

- [start](gkvoicechat/start%28%29.md): Deprecated. Starts communication with other players in a channel.
- [stop](gkvoicechat/stop%28%29.md): Deprecated. Ends communication with other players in a channel.
- [active](gkvoicechat/isactive.md): Deprecated. A Boolean value that indicates whether the channel is sampling the microphone.

### Receiving Updates About Other Participants

- [playerVoiceChatStateDidChangeHandler](gkvoicechat/playervoicechatstatedidchangehandler.md): Deprecated. A method that handles when a player’s voice chat changes state.
- [GKVoiceChatPlayerState](gkvoicechat/playerstate.md): Deprecated. The state of a player in a voice chat.

### Controlling Chat Volume

- [setPlayer:muted:](gkvoicechat/setplayer%28__muted_%29.md): Deprecated. Mutes a player in the chat, including the local player.
- [volume](gkvoicechat/volume.md): Deprecated. The volume level for the channel.

### Accessing Properties

- [name](gkvoicechat/name.md): Deprecated. The name of the voice chat channel.
- [players](gkvoicechat/players.md): Deprecated. The players connected to the channel.

### Deprecated Methods and Properties

- [playerIDs](gkvoicechat/playerids.md): Deprecated. An array of strings containing the player identifiers for the players connected to the channel.
- [playerStateUpdateHandler](gkvoicechat/playerstateupdatehandler.md): Deprecated. Handles when a player in the chat changes state.
- [setMute:forPlayer:](gkvoicechat/setmute%28__forplayer_%29.md): Deprecated. Mutes a player in a voice chat.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Deprecated classes

- [GKAchievementViewController](gkachievementviewcontroller.md): Deprecated. An `GKAchievementViewController` object provides a standard user interface to display achievement progress for the local player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKChallengeEventHandler](gkchallengeeventhandler.md): Deprecated. The `GKChallengeEventHandler` class is used to respond to events related to challenges sent or received by the local player.
- [GKChallengesViewController](gkchallengesviewcontroller.md): Deprecated.
- [GKChallenge](gkchallenge.md): Deprecated. A challenge issued by the local player to another player.
- [GKScoreChallenge](gkscorechallenge.md): Deprecated. A type of challenge where a player must beat the leaderboard score of another player.
- [GKAchievementChallenge](gkachievementchallenge.md): Deprecated. A type of challenge where a player must earn another player’s achievement.
- [GKCloudPlayer](gkcloudplayer.md): Deprecated. The object representing the currently signed-in iCloud user.
- [GKGameCenterViewController](gkgamecenterviewcontroller.md): Deprecated. The dashboard that allows players to access their Game Center data in your game.
- [GKGameSession](gkgamesession.md): Deprecated. A game session you can use to save game data, invite other players, and create turn-based and real-time game apps.
- [GKGameSessionSharingViewController](gkgamesessionsharingviewcontroller.md): Deprecated. A user interface you can use to invite other users into a tvOS game session.
- [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md): Deprecated. Your game uses the `GKFriendRequestComposeViewController` class to present a screen that allows the local player to send friend requests to other players.
- [GKLeaderboardViewController](gkleaderboardviewcontroller.md): Deprecated. The `GKLeaderboardViewController` class provides a standard user interface that displays leaderboard scores to the player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKPeerPickerController](gkpeerpickercontroller.md): Deprecated. Provides a standard user interface to allow one iOS device to discover and connect to another.
- [GKScore](gkscore.md): Deprecated. An object containing information for a score that was earned by the player.
- [GKSession](gksession.md): Deprecated. A [GKSession](gksession.md) object provides the ability to discover and connect to nearby iOS devices using Bluetooth or Wi-fi.
