> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/deprecated-symbols](https://developer.apple.com/documentation/gamekit/deprecated-symbols)

# Deprecated symbols (Swift)

**Framework:** GameKit  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

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
- [GKTurnBasedEventHandler](gkturnbasedeventhandler.md): Deprecated. The [GKTurnBasedEventHandler](gkturnbasedeventhandler.md) class is used to respond to important messages related to turn-based matches. To use it, call the [shared()](gkturnbasedeventhandler/shared%28%29.md) class method to get the singleton instance and assign an object that implements the [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol to its [delegate](gkturnbasedeventhandler/delegate.md) property. All methods are called on the main thread.
- [GKVoiceChat](gkvoicechat.md): Deprecated. A voice channel that allows players to speak with each other in a multiplayer game.
- [GKVoiceChatService](gkvoicechatservice.md): Deprecated. The [GKVoiceChatService](gkvoicechatservice.md) class allows your application to connect two iOS devices into a voice chat.
- [GKNotificationBanner](gknotificationbanner.md): Deprecated. A Game Center-style banner that displays a message to the local player.

### Deprecated protocols

- [GKAchievementViewControllerDelegate](gkachievementviewcontrollerdelegate.md): Deprecated. An object implementing the [GKAchievementViewControllerDelegate](gkachievementviewcontrollerdelegate.md) protocol is called when the user dismisses the achievements view controller. Typically, this protocol is implemented by the object in your game that originally displayed the achievements user interface.
- [GKChallengeEventHandlerDelegate](gkchallengeeventhandlerdelegate.md): Deprecated. You implement the [GKChallengeEventHandlerDelegate](gkchallengeeventhandlerdelegate.md) delegate to control how challenges are displayed in your game.
- [GKChallengesViewControllerDelegate](gkchallengesviewcontrollerdelegate.md): Deprecated.
- [GKChallengeListener](gkchallengelistener.md): Deprecated. An object that responds to challenge events.
- [GKFriendRequestComposeViewControllerDelegate](gkfriendrequestcomposeviewcontrollerdelegate.md): Deprecated. The [GKFriendRequestComposeViewControllerDelegate](gkfriendrequestcomposeviewcontrollerdelegate.md) protocol is implemented by delegates of the [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md) class. The delegate is called when the player dismisses the friend request.
- [GKGameSessionEventListener](gkgamesessioneventlistener.md): Deprecated. An event listener that handles game session events.
- [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md): Deprecated. The [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md) protocol is implemented by delegates of the [GKLeaderboardViewController](gkleaderboardviewcontroller.md) class. The delegate is called when the player dismisses the leaderboard.
- [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md): Deprecated. The [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md) protocol is implemented on an object to customize the behavior of a [GKPeerPickerController](gkpeerpickercontroller.md) object. The delegate is called by the peer picker to create a session object and to respond as the session is configured by the controller.
- [GKSessionDelegate](gksessiondelegate.md): Deprecated. An object implements the [GKSessionDelegate](gksessiondelegate.md) protocol to control the behavior of a [GKSession](gksession.md) object. The delegate is called when other visible peers change their state relative to the session. It is also called to determine whether another peer is allowed to connect to the session.
- [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md): Deprecated. The [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol is implemented by an object to receive notifications events for turn-based matches. All methods are called on the main thread.
- [GKVoiceChatClient](gkvoicechatclient.md): Deprecated. The [GKVoiceChatClient](gkvoicechatclient.md) protocol is implemented to control the behavior of the [GKVoiceChatService](gkvoicechatservice.md) object. The voice chat client has a number of responsibilities:

### Deprecated structures

- [GKVoiceChatServiceError](gkvoicechatserviceerror-swift.struct.md): Deprecated.
- [GKSessionError](gksessionerror-swift.struct.md): Deprecated.
- [GKGameSessionError](gkgamesessionerror.md): Deprecated. Error codes for the game session domain.

### Deprecated constants

- [GKGameSessionErrorDomain](gkgamesessionerrordomain.md): Deprecated. The error domain for game sessions.
- [GKSessionErrorDomain](gksessionerrordomain.md): Deprecated. An error occurred in [GKSession](gksession.md).
- [GKVoiceChatServiceErrorDomain](gkvoicechatserviceerrordomain.md): Deprecated. An error occurred in [GKVoiceChatService](gkvoicechatservice.md).

### Deprecated enumerations

- [GKGameSessionError.Code](gkgamesessionerror/code.md): Deprecated. Error codes for the game session domain.
- [GKPeerConnectionState](gkpeerconnectionstate.md): Deprecated. The state of a peer known to the session.
- [GKPeerPickerConnectionType](gkpeerpickerconnectiontype.md): Deprecated. Network connections available to the peer picker dialog.
- [GKSendDataMode](gksenddatamode.md): Deprecated. The mechanism used to transmit data to other peers.
- [GKSessionError.Code](gksessionerror-swift.struct/code.md): Deprecated. Error codes for the session error domain.
- [GKSessionError](gksessionerror-swift.struct.md): Deprecated.
- [GKSessionMode](gksessionmode.md): Deprecated. Modes that determine how a session interacts with other peers.
- [GKVoiceChatServiceError.Code](gkvoicechatserviceerror-swift.struct/code.md): Deprecated. Error codes for the voice chat service error domain.
- [GKVoiceChatServiceError](gkvoicechatserviceerror-swift.struct.md): Deprecated.

# Deprecated symbols (Objective-C)

**Framework:** GameKit  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

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
- [GKTurnBasedEventHandler](gkturnbasedeventhandler.md): Deprecated. The [GKTurnBasedEventHandler](gkturnbasedeventhandler.md) class is used to respond to important messages related to turn-based matches. To use it, call the [sharedTurnBasedEventHandler](gkturnbasedeventhandler/shared%28%29.md) class method to get the singleton instance and assign an object that implements the [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol to its [delegate](gkturnbasedeventhandler/delegate.md) property. All methods are called on the main thread.
- [GKVoiceChat](gkvoicechat.md): Deprecated. A voice channel that allows players to speak with each other in a multiplayer game.
- [GKVoiceChatService](gkvoicechatservice.md): Deprecated. The [GKVoiceChatService](gkvoicechatservice.md) class allows your application to connect two iOS devices into a voice chat.
- [GKNotificationBanner](gknotificationbanner.md): Deprecated. A Game Center-style banner that displays a message to the local player.

### Deprecated protocols

- [GKAchievementViewControllerDelegate](gkachievementviewcontrollerdelegate.md): Deprecated. An object implementing the [GKAchievementViewControllerDelegate](gkachievementviewcontrollerdelegate.md) protocol is called when the user dismisses the achievements view controller. Typically, this protocol is implemented by the object in your game that originally displayed the achievements user interface.
- [GKChallengeEventHandlerDelegate](gkchallengeeventhandlerdelegate.md): Deprecated. You implement the [GKChallengeEventHandlerDelegate](gkchallengeeventhandlerdelegate.md) delegate to control how challenges are displayed in your game.
- [GKChallengesViewControllerDelegate](gkchallengesviewcontrollerdelegate.md): Deprecated.
- [GKChallengeListener](gkchallengelistener.md): Deprecated. An object that responds to challenge events.
- [GKFriendRequestComposeViewControllerDelegate](gkfriendrequestcomposeviewcontrollerdelegate.md): Deprecated. The [GKFriendRequestComposeViewControllerDelegate](gkfriendrequestcomposeviewcontrollerdelegate.md) protocol is implemented by delegates of the [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md) class. The delegate is called when the player dismisses the friend request.
- [GKGameSessionEventListener](gkgamesessioneventlistener.md): Deprecated. An event listener that handles game session events.
- [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md): Deprecated. The [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md) protocol is implemented by delegates of the [GKLeaderboardViewController](gkleaderboardviewcontroller.md) class. The delegate is called when the player dismisses the leaderboard.
- [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md): Deprecated. The [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md) protocol is implemented on an object to customize the behavior of a [GKPeerPickerController](gkpeerpickercontroller.md) object. The delegate is called by the peer picker to create a session object and to respond as the session is configured by the controller.
- [GKSessionDelegate](gksessiondelegate.md): Deprecated. An object implements the [GKSessionDelegate](gksessiondelegate.md) protocol to control the behavior of a [GKSession](gksession.md) object. The delegate is called when other visible peers change their state relative to the session. It is also called to determine whether another peer is allowed to connect to the session.
- [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md): Deprecated. The [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol is implemented by an object to receive notifications events for turn-based matches. All methods are called on the main thread.
- [GKVoiceChatClient](gkvoicechatclient.md): Deprecated. The [GKVoiceChatClient](gkvoicechatclient.md) protocol is implemented to control the behavior of the [GKVoiceChatService](gkvoicechatservice.md) object. The voice chat client has a number of responsibilities:

### Deprecated constants

- [GKGameSessionErrorDomain](gkgamesessionerrordomain.md): Deprecated. The error domain for game sessions.
- [GKSessionErrorDomain](gksessionerrordomain.md): Deprecated. An error occurred in [GKSession](gksession.md).
- [GKVoiceChatServiceErrorDomain](gkvoicechatserviceerrordomain.md): Deprecated. An error occurred in [GKVoiceChatService](gkvoicechatservice.md).

### Deprecated enumerations

- [GKGameSessionErrorCode](gkgamesessionerror/code.md): Deprecated. Error codes for the game session domain.
- [GKPeerConnectionState](gkpeerconnectionstate.md): Deprecated. The state of a peer known to the session.
- [GKPeerPickerConnectionType](gkpeerpickerconnectiontype.md): Deprecated. Network connections available to the peer picker dialog.
- [GKSendDataMode](gksenddatamode.md): Deprecated. The mechanism used to transmit data to other peers.
- [GKSessionError](gksessionerror-swift.struct/code.md): Deprecated. Error codes for the session error domain.
- [GKSessionMode](gksessionmode.md): Deprecated. Modes that determine how a session interacts with other peers.
- [GKVoiceChatServiceError](gkvoicechatserviceerror-swift.struct/code.md): Deprecated. Error codes for the voice chat service error domain.
