> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkchallengelistener](https://developer.apple.com/documentation/gamekit/gkchallengelistener)

# GKChallengeListener (Swift)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 7.0+ (deprecated in 26.0) · iPadOS 7.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.10+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An object that responds to challenge events.

## Declaration

```swift
protocol GKChallengeListener : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Your game can ignore a challenge, start up in a specific state so the local player can respond to a challenge, or notify the challenger when the local player completes a challenge.

Don’t implement [GKChallengeListener](gkchallengelistener.md) directly; instead use [GKLocalPlayerListener](gklocalplayerlistener.md). The [GKLocalPlayerListener](gklocalplayerlistener.md) protocol inherits methods from [GKChallengeListener](gkchallengelistener.md), [GKInviteEventListener](gkinviteeventlistener.md), [GKSavedGameListener](gksavedgamelistener.md), and [GKTurnBasedEventListener](gkturnbasedeventlistener.md) in order to handle multiple events.

## Topics

### Responding to a Challenge

- [player(\_:didReceive:)](gkchallengelistener/player%28__didreceive_%29.md): Deprecated. Handles when the local player issues a challenge but the other player doesn’t want to respond immediately.
- [player(\_:wantsToPlay:)](gkchallengelistener/player%28__wantstoplay_%29.md): Deprecated. Handles when the local player issues a challenge and the other player accepts.

### Completing a Challenge

- [player(\_:didComplete:issuedByFriend:)](gkchallengelistener/player%28__didcomplete_issuedbyfriend_%29.md): Deprecated. Handles when the local player completes a challenge that a friend issues.
- [player(\_:issuedChallengeWasCompleted:byFriend:)](gkchallengelistener/player%28__issuedchallengewascompleted_byfriend_%29.md): Deprecated. Handles when a friend completes a challenge that the local player issues.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [GKLocalPlayerListener](gklocalplayerlistener.md)

## See Also

### Deprecated protocols

- [GKAchievementViewControllerDelegate](gkachievementviewcontrollerdelegate.md): Deprecated. An object implementing the [GKAchievementViewControllerDelegate](gkachievementviewcontrollerdelegate.md) protocol is called when the user dismisses the achievements view controller. Typically, this protocol is implemented by the object in your game that originally displayed the achievements user interface.
- [GKChallengeEventHandlerDelegate](gkchallengeeventhandlerdelegate.md): Deprecated. You implement the [GKChallengeEventHandlerDelegate](gkchallengeeventhandlerdelegate.md) delegate to control how challenges are displayed in your game.
- [GKChallengesViewControllerDelegate](gkchallengesviewcontrollerdelegate.md): Deprecated.
- [GKFriendRequestComposeViewControllerDelegate](gkfriendrequestcomposeviewcontrollerdelegate.md): Deprecated. The [GKFriendRequestComposeViewControllerDelegate](gkfriendrequestcomposeviewcontrollerdelegate.md) protocol is implemented by delegates of the [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md) class. The delegate is called when the player dismisses the friend request.
- [GKGameSessionEventListener](gkgamesessioneventlistener.md): Deprecated. An event listener that handles game session events.
- [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md): Deprecated. The [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md) protocol is implemented by delegates of the [GKLeaderboardViewController](gkleaderboardviewcontroller.md) class. The delegate is called when the player dismisses the leaderboard.
- [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md): Deprecated. The [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md) protocol is implemented on an object to customize the behavior of a [GKPeerPickerController](gkpeerpickercontroller.md) object. The delegate is called by the peer picker to create a session object and to respond as the session is configured by the controller.
- [GKSessionDelegate](gksessiondelegate.md): Deprecated. An object implements the [GKSessionDelegate](gksessiondelegate.md) protocol to control the behavior of a [GKSession](gksession.md) object. The delegate is called when other visible peers change their state relative to the session. It is also called to determine whether another peer is allowed to connect to the session.
- [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md): Deprecated. The [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol is implemented by an object to receive notifications events for turn-based matches. All methods are called on the main thread.
- [GKVoiceChatClient](gkvoicechatclient.md): Deprecated. The [GKVoiceChatClient](gkvoicechatclient.md) protocol is implemented to control the behavior of the [GKVoiceChatService](gkvoicechatservice.md) object. The voice chat client has a number of responsibilities:

# GKChallengeListener (Objective-C)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 7.0+ (deprecated in 26.0) · iPadOS 7.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.10+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An object that responds to challenge events.

## Declaration

```objectivec
@protocol GKChallengeListener <NSObject>
```

<a id="overview"></a>

## Overview

Your game can ignore a challenge, start up in a specific state so the local player can respond to a challenge, or notify the challenger when the local player completes a challenge.

Don’t implement [GKChallengeListener](gkchallengelistener.md) directly; instead use [GKLocalPlayerListener](gklocalplayerlistener.md). The [GKLocalPlayerListener](gklocalplayerlistener.md) protocol inherits methods from [GKChallengeListener](gkchallengelistener.md), [GKInviteEventListener](gkinviteeventlistener.md), [GKSavedGameListener](gksavedgamelistener.md), and [GKTurnBasedEventListener](gkturnbasedeventlistener.md) in order to handle multiple events.

## Topics

### Responding to a Challenge

- [player:didReceiveChallenge:](gkchallengelistener/player%28__didreceive_%29.md): Deprecated. Handles when the local player issues a challenge but the other player doesn’t want to respond immediately.
- [player:wantsToPlayChallenge:](gkchallengelistener/player%28__wantstoplay_%29.md): Deprecated. Handles when the local player issues a challenge and the other player accepts.

### Completing a Challenge

- [player:didCompleteChallenge:issuedByFriend:](gkchallengelistener/player%28__didcomplete_issuedbyfriend_%29.md): Deprecated. Handles when the local player completes a challenge that a friend issues.
- [player:issuedChallengeWasCompleted:byFriend:](gkchallengelistener/player%28__issuedchallengewascompleted_byfriend_%29.md): Deprecated. Handles when a friend completes a challenge that the local player issues.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [GKLocalPlayerListener](gklocalplayerlistener.md)

## See Also

### Deprecated protocols

- [GKAchievementViewControllerDelegate](gkachievementviewcontrollerdelegate.md): Deprecated. An object implementing the [GKAchievementViewControllerDelegate](gkachievementviewcontrollerdelegate.md) protocol is called when the user dismisses the achievements view controller. Typically, this protocol is implemented by the object in your game that originally displayed the achievements user interface.
- [GKChallengeEventHandlerDelegate](gkchallengeeventhandlerdelegate.md): Deprecated. You implement the [GKChallengeEventHandlerDelegate](gkchallengeeventhandlerdelegate.md) delegate to control how challenges are displayed in your game.
- [GKChallengesViewControllerDelegate](gkchallengesviewcontrollerdelegate.md): Deprecated.
- [GKFriendRequestComposeViewControllerDelegate](gkfriendrequestcomposeviewcontrollerdelegate.md): Deprecated. The [GKFriendRequestComposeViewControllerDelegate](gkfriendrequestcomposeviewcontrollerdelegate.md) protocol is implemented by delegates of the [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md) class. The delegate is called when the player dismisses the friend request.
- [GKGameSessionEventListener](gkgamesessioneventlistener.md): Deprecated. An event listener that handles game session events.
- [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md): Deprecated. The [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md) protocol is implemented by delegates of the [GKLeaderboardViewController](gkleaderboardviewcontroller.md) class. The delegate is called when the player dismisses the leaderboard.
- [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md): Deprecated. The [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md) protocol is implemented on an object to customize the behavior of a [GKPeerPickerController](gkpeerpickercontroller.md) object. The delegate is called by the peer picker to create a session object and to respond as the session is configured by the controller.
- [GKSessionDelegate](gksessiondelegate.md): Deprecated. An object implements the [GKSessionDelegate](gksessiondelegate.md) protocol to control the behavior of a [GKSession](gksession.md) object. The delegate is called when other visible peers change their state relative to the session. It is also called to determine whether another peer is allowed to connect to the session.
- [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md): Deprecated. The [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol is implemented by an object to receive notifications events for turn-based matches. All methods are called on the main thread.
- [GKVoiceChatClient](gkvoicechatclient.md): Deprecated. The [GKVoiceChatClient](gkvoicechatclient.md) protocol is implemented to control the behavior of the [GKVoiceChatService](gkvoicechatservice.md) object. The voice chat client has a number of responsibilities:
