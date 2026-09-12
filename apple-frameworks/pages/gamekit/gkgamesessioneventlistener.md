> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesessioneventlistener](https://developer.apple.com/documentation/gamekit/gkgamesessioneventlistener)

# GKGameSessionEventListener (Swift)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

An event listener that handles game session events.

## Declaration

```swift
protocol GKGameSessionEventListener : NSObjectProtocol
```

## Topics

### Changing Player Status

- [session(\_:didAdd:)](gkgamesessioneventlistener/session%28__didadd_%29.md): Deprecated. Tells the listener a new player has been added to a game session.
- [session(\_:didRemove:)](gkgamesessioneventlistener/session%28__didremove_%29.md): Deprecated. Tells the listener a player left a game session.
- [session(\_:player:didChange:)](gkgamesessioneventlistener/session%28__player_didchange_%29.md): Deprecated. Tells the listener a player’s connection state has changed.
- [GKConnectionState](gkconnectionstate.md): Possible connection states for a player

### Transferring Data

- [session(\_:didReceive:from:)](gkgamesessioneventlistener/session%28__didreceive_from_%29.md): Deprecated. Tells the listener the player received data from another player.
- [session(\_:didReceiveMessage:with:from:)](gkgamesessioneventlistener/session%28__didreceivemessage_with_from_%29.md): Deprecated. Tells the listener a player has received a message from another player.
- [session(\_:player:didSave:)](gkgamesessioneventlistener/session%28__player_didsave_%29.md): Deprecated. Tells the listener data was saved by a player.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated protocols

- [GKAchievementViewControllerDelegate](gkachievementviewcontrollerdelegate.md): Deprecated. An object implementing the [GKAchievementViewControllerDelegate](gkachievementviewcontrollerdelegate.md) protocol is called when the user dismisses the achievements view controller. Typically, this protocol is implemented by the object in your game that originally displayed the achievements user interface.
- [GKChallengeEventHandlerDelegate](gkchallengeeventhandlerdelegate.md): Deprecated. You implement the [GKChallengeEventHandlerDelegate](gkchallengeeventhandlerdelegate.md) delegate to control how challenges are displayed in your game.
- [GKChallengesViewControllerDelegate](gkchallengesviewcontrollerdelegate.md): Deprecated.
- [GKChallengeListener](gkchallengelistener.md): Deprecated. An object that responds to challenge events.
- [GKFriendRequestComposeViewControllerDelegate](gkfriendrequestcomposeviewcontrollerdelegate.md): Deprecated. The [GKFriendRequestComposeViewControllerDelegate](gkfriendrequestcomposeviewcontrollerdelegate.md) protocol is implemented by delegates of the [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md) class. The delegate is called when the player dismisses the friend request.
- [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md): Deprecated. The [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md) protocol is implemented by delegates of the [GKLeaderboardViewController](gkleaderboardviewcontroller.md) class. The delegate is called when the player dismisses the leaderboard.
- [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md): Deprecated. The [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md) protocol is implemented on an object to customize the behavior of a [GKPeerPickerController](gkpeerpickercontroller.md) object. The delegate is called by the peer picker to create a session object and to respond as the session is configured by the controller.
- [GKSessionDelegate](gksessiondelegate.md): Deprecated. An object implements the [GKSessionDelegate](gksessiondelegate.md) protocol to control the behavior of a [GKSession](gksession.md) object. The delegate is called when other visible peers change their state relative to the session. It is also called to determine whether another peer is allowed to connect to the session.
- [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md): Deprecated. The [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol is implemented by an object to receive notifications events for turn-based matches. All methods are called on the main thread.
- [GKVoiceChatClient](gkvoicechatclient.md): Deprecated. The [GKVoiceChatClient](gkvoicechatclient.md) protocol is implemented to control the behavior of the [GKVoiceChatService](gkvoicechatservice.md) object. The voice chat client has a number of responsibilities:

# GKGameSessionEventListener (Objective-C)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

An event listener that handles game session events.

## Declaration

```objectivec
@protocol GKGameSessionEventListener <NSObject>
```

## Topics

### Changing Player Status

- [session:didAddPlayer:](gkgamesessioneventlistener/session%28__didadd_%29.md): Deprecated. Tells the listener a new player has been added to a game session.
- [session:didRemovePlayer:](gkgamesessioneventlistener/session%28__didremove_%29.md): Deprecated. Tells the listener a player left a game session.
- [session:player:didChangeConnectionState:](gkgamesessioneventlistener/session%28__player_didchange_%29.md): Deprecated. Tells the listener a player’s connection state has changed.
- [GKConnectionState](gkconnectionstate.md): Possible connection states for a player

### Transferring Data

- [session:didReceiveData:fromPlayer:](gkgamesessioneventlistener/session%28__didreceive_from_%29.md): Deprecated. Tells the listener the player received data from another player.
- [session:didReceiveMessage:withData:fromPlayer:](gkgamesessioneventlistener/session%28__didreceivemessage_with_from_%29.md): Deprecated. Tells the listener a player has received a message from another player.
- [session:player:didSaveData:](gkgamesessioneventlistener/session%28__player_didsave_%29.md): Deprecated. Tells the listener data was saved by a player.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated protocols

- [GKAchievementViewControllerDelegate](gkachievementviewcontrollerdelegate.md): Deprecated. An object implementing the [GKAchievementViewControllerDelegate](gkachievementviewcontrollerdelegate.md) protocol is called when the user dismisses the achievements view controller. Typically, this protocol is implemented by the object in your game that originally displayed the achievements user interface.
- [GKChallengeEventHandlerDelegate](gkchallengeeventhandlerdelegate.md): Deprecated. You implement the [GKChallengeEventHandlerDelegate](gkchallengeeventhandlerdelegate.md) delegate to control how challenges are displayed in your game.
- [GKChallengesViewControllerDelegate](gkchallengesviewcontrollerdelegate.md): Deprecated.
- [GKChallengeListener](gkchallengelistener.md): Deprecated. An object that responds to challenge events.
- [GKFriendRequestComposeViewControllerDelegate](gkfriendrequestcomposeviewcontrollerdelegate.md): Deprecated. The [GKFriendRequestComposeViewControllerDelegate](gkfriendrequestcomposeviewcontrollerdelegate.md) protocol is implemented by delegates of the [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md) class. The delegate is called when the player dismisses the friend request.
- [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md): Deprecated. The [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md) protocol is implemented by delegates of the [GKLeaderboardViewController](gkleaderboardviewcontroller.md) class. The delegate is called when the player dismisses the leaderboard.
- [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md): Deprecated. The [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md) protocol is implemented on an object to customize the behavior of a [GKPeerPickerController](gkpeerpickercontroller.md) object. The delegate is called by the peer picker to create a session object and to respond as the session is configured by the controller.
- [GKSessionDelegate](gksessiondelegate.md): Deprecated. An object implements the [GKSessionDelegate](gksessiondelegate.md) protocol to control the behavior of a [GKSession](gksession.md) object. The delegate is called when other visible peers change their state relative to the session. It is also called to determine whether another peer is allowed to connect to the session.
- [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md): Deprecated. The [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol is implemented by an object to receive notifications events for turn-based matches. All methods are called on the main thread.
- [GKVoiceChatClient](gkvoicechatclient.md): Deprecated. The [GKVoiceChatClient](gkvoicechatclient.md) protocol is implemented to control the behavior of the [GKVoiceChatService](gkvoicechatservice.md) object. The voice chat client has a number of responsibilities:
