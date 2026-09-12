> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatservice](https://developer.apple.com/documentation/gamekit/gkvoicechatservice)

# GKVoiceChatService (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The [GKVoiceChatService](gkvoicechatservice.md) class allows your application to connect two iOS devices into a voice chat.

> Use SharePlay instead

## Declaration

```swift
class GKVoiceChatService
```

<a id="overview"></a>

## Overview

Before you can use voice chat, your application must configure an audio session that allows for both play and recording ([kAudioSessionCategory_PlayAndRecord](../audiotoolbox/kaudiosessioncategory_playandrecord.md)). For more information on audio sessions, see [Audio Session Programming Guide](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/AudioSessionProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007875).

The voice chat service uses a [client](gkvoicechatservice/client.md) implemented by your application to find and connect to other participants. Each participant in the chat is identified by a unique *participant identifier* string. The client provides a participant identifier for the local user and translates other participant identifiers into connections to other users.  The format and mechanism used to translate participant identifiers into network connections is defined by the client.

Your application can configure the voice chat service to control the volume level of both local and remote participants and to detect when someone is speaking.

To use the voice chat service, your application retrieves the default service and attaches a client to it, then either connects to another participant or waits for them to start a connection.

## Topics

### Determining Whether Voice Chat Is Available

- [isVoIPAllowed()](gkvoicechatservice/isvoipallowed%28%29.md): Deprecated. Returns whether voice chat is allowed to be used on the device.

### Getting the Shared Voice Chat Service

- [default()](gkvoicechatservice/default%28%29.md): Deprecated. Retrieves the singleton chat service.

### Setting the Client

- [client](gkvoicechatservice/client.md): Deprecated. An object that the voice chat service uses to communicate with remote participants.

### Establishing a Voice Chat

- [startVoiceChat(withParticipantID:)](gkvoicechatservice/startvoicechat%28withparticipantid_%29.md): Deprecated. Sends a request to another participant to join the voice chat.

### Adjusting Audio Properties

- [isMicrophoneMuted](gkvoicechatservice/ismicrophonemuted.md): Deprecated. A Boolean value that determines whether the user’s microphone is muted.
- [remoteParticipantVolume](gkvoicechatservice/remoteparticipantvolume.md): Deprecated. A float that scales the volume of all remote participants.

### Monitoring the Audio Level

- [isInputMeteringEnabled](gkvoicechatservice/isinputmeteringenabled.md): Deprecated. A Boolean value that indicates whether the microphone’s sound level is being monitored.
- [inputMeterLevel](gkvoicechatservice/inputmeterlevel.md): Deprecated. The volume, in decibels (db), being received by the microphone.
- [isOutputMeteringEnabled](gkvoicechatservice/isoutputmeteringenabled.md): Deprecated. A Boolean value that indicates whether the voice level of remote participants is monitored.
- [outputMeterLevel](gkvoicechatservice/outputmeterlevel.md): Deprecated. The volume, in decibels (db), being received from all other participants.

### Ending a Voice Chat

- [stopVoiceChat(withParticipantID:)](gkvoicechatservice/stopvoicechat%28withparticipantid_%29.md): Deprecated. Ends a previously established voice chat.

### Methods Called by the Client

- [acceptCallID(\_:)](gkvoicechatservice/acceptcallid%28__%29.md): Deprecated. Accepts a request from a remote user to establish a voice chat.
- [denyCallID(\_:)](gkvoicechatservice/denycallid%28__%29.md): Deprecated. Rejects a request to establish a voice chat.
- [receivedData(\_:fromParticipantID:)](gkvoicechatservice/receiveddata%28__fromparticipantid_%29.md): Deprecated. Called by the client to deliver new data received from a remote participant.
- [receivedRealTime(\_:fromParticipantID:)](gkvoicechatservice/receivedrealtime%28__fromparticipantid_%29.md): Deprecated. Called by the client to deliver voice data received from a remote participant..

### Constants

- [Voice Chat Service Error Domain](voice-chat-service-error-domain.md): The [GKVoiceChatService](gkvoicechatservice.md) error domain.
- [GKVoiceChatServiceError.Code](gkvoicechatserviceerror-swift.struct/code.md): Deprecated. Error codes for the voice chat service error domain.
- [GKVoiceChatServiceError](gkvoicechatserviceerror-swift.struct.md): Deprecated.

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

# GKVoiceChatService (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The [GKVoiceChatService](gkvoicechatservice.md) class allows your application to connect two iOS devices into a voice chat.

> Use SharePlay instead

## Declaration

```objectivec
@interface GKVoiceChatService : NSObject
```

<a id="overview"></a>

## Overview

Before you can use voice chat, your application must configure an audio session that allows for both play and recording ([kAudioSessionCategory_PlayAndRecord](../audiotoolbox/kaudiosessioncategory_playandrecord.md)). For more information on audio sessions, see [Audio Session Programming Guide](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/AudioSessionProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007875).

The voice chat service uses a [client](gkvoicechatservice/client.md) implemented by your application to find and connect to other participants. Each participant in the chat is identified by a unique *participant identifier* string. The client provides a participant identifier for the local user and translates other participant identifiers into connections to other users.  The format and mechanism used to translate participant identifiers into network connections is defined by the client.

Your application can configure the voice chat service to control the volume level of both local and remote participants and to detect when someone is speaking.

To use the voice chat service, your application retrieves the default service and attaches a client to it, then either connects to another participant or waits for them to start a connection.

## Topics

### Determining Whether Voice Chat Is Available

- [isVoIPAllowed](gkvoicechatservice/isvoipallowed%28%29.md): Deprecated. Returns whether voice chat is allowed to be used on the device.

### Getting the Shared Voice Chat Service

- [defaultVoiceChatService](gkvoicechatservice/default%28%29.md): Deprecated. Retrieves the singleton chat service.

### Setting the Client

- [client](gkvoicechatservice/client.md): Deprecated. An object that the voice chat service uses to communicate with remote participants.

### Establishing a Voice Chat

- [startVoiceChatWithParticipantID:error:](gkvoicechatservice/startvoicechat%28withparticipantid_%29.md): Deprecated. Sends a request to another participant to join the voice chat.

### Adjusting Audio Properties

- [microphoneMuted](gkvoicechatservice/ismicrophonemuted.md): Deprecated. A Boolean value that determines whether the user’s microphone is muted.
- [remoteParticipantVolume](gkvoicechatservice/remoteparticipantvolume.md): Deprecated. A float that scales the volume of all remote participants.

### Monitoring the Audio Level

- [inputMeteringEnabled](gkvoicechatservice/isinputmeteringenabled.md): Deprecated. A Boolean value that indicates whether the microphone’s sound level is being monitored.
- [inputMeterLevel](gkvoicechatservice/inputmeterlevel.md): Deprecated. The volume, in decibels (db), being received by the microphone.
- [outputMeteringEnabled](gkvoicechatservice/isoutputmeteringenabled.md): Deprecated. A Boolean value that indicates whether the voice level of remote participants is monitored.
- [outputMeterLevel](gkvoicechatservice/outputmeterlevel.md): Deprecated. The volume, in decibels (db), being received from all other participants.

### Ending a Voice Chat

- [stopVoiceChatWithParticipantID:](gkvoicechatservice/stopvoicechat%28withparticipantid_%29.md): Deprecated. Ends a previously established voice chat.

### Methods Called by the Client

- [acceptCallID:error:](gkvoicechatservice/acceptcallid%28__%29.md): Deprecated. Accepts a request from a remote user to establish a voice chat.
- [denyCallID:](gkvoicechatservice/denycallid%28__%29.md): Deprecated. Rejects a request to establish a voice chat.
- [receivedData:fromParticipantID:](gkvoicechatservice/receiveddata%28__fromparticipantid_%29.md): Deprecated. Called by the client to deliver new data received from a remote participant.
- [receivedRealTimeData:fromParticipantID:](gkvoicechatservice/receivedrealtime%28__fromparticipantid_%29.md): Deprecated. Called by the client to deliver voice data received from a remote participant..

### Constants

- [Voice Chat Service Error Domain](voice-chat-service-error-domain.md): The [GKVoiceChatService](gkvoicechatservice.md) error domain.
- [GKVoiceChatServiceError](gkvoicechatserviceerror-swift.struct/code.md): Deprecated. Error codes for the voice chat service error domain.

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
