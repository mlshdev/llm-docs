> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkchallengeeventhandlerdelegate](https://developer.apple.com/documentation/gamekit/gkchallengeeventhandlerdelegate)

# GKChallengeEventHandlerDelegate (Swift)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 6.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

You implement the [GKChallengeEventHandlerDelegate](gkchallengeeventhandlerdelegate.md) delegate to control how challenges are displayed in your game.

> You should instead implement the GKChallengeListener protocol and register a listener with GKLocalPlayer.

## Declaration

```swift
protocol GKChallengeEventHandlerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

By default, GameKit briefly displays a banner over your game when any of the following events occur:

- The local player receives a challenge.
- The local player completes a challenge.
- A remote player completes a challenge issued by the local player.

Your event handler can override or extend this behavior:

- It can prevent a banner from being displayed.
- It can be notified when a player taps in a banner.
- It can handle the events directly.

## Topics

### Detecting When a User Taps a Banner

- [localPlayerDidSelect(\_:)](gkchallengeeventhandlerdelegate/localplayerdidselect%28__%29.md): Deprecated. Called when the local player selects a challenge banner displayed by GameKit.

### Responding When a New Challenge is Received

- [localPlayerDidReceive(\_:)](gkchallengeeventhandlerdelegate/localplayerdidreceive%28__%29.md): Deprecated. Called when the local player receives a new challenge.
- [shouldShowBanner(forLocallyReceivedChallenge:)](gkchallengeeventhandlerdelegate/shouldshowbanner%28forlocallyreceivedchallenge_%29.md): Deprecated. Called to determine whether a banner should be shown when the local player receives a challenge.

### Responding to Challenges Completed By the Local Player

- [localPlayerDidComplete(\_:)](gkchallengeeventhandlerdelegate/localplayerdidcomplete%28__%29.md): Deprecated. Called when the local player completes a challenge.
- [shouldShowBanner(forLocallyCompletedChallenge:)](gkchallengeeventhandlerdelegate/shouldshowbanner%28forlocallycompletedchallenge_%29.md): Deprecated. Called to determine whether a banner should be shown when the local player completes a challenge.

### Responding to Challenges Issued by the Local Player

- [remotePlayerDidComplete(\_:)](gkchallengeeventhandlerdelegate/remoteplayerdidcomplete%28__%29.md): Deprecated. Called when a remote player completes a challenge issued by the local player.
- [shouldShowBanner(forRemotelyCompletedChallenge:)](gkchallengeeventhandlerdelegate/shouldshowbanner%28forremotelycompletedchallenge_%29.md): Deprecated. Called to determine whether a banner should be shown when a remote player completes a challenge.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated protocols

- [GKAchievementViewControllerDelegate](gkachievementviewcontrollerdelegate.md): Deprecated. An object implementing the [GKAchievementViewControllerDelegate](gkachievementviewcontrollerdelegate.md) protocol is called when the user dismisses the achievements view controller. Typically, this protocol is implemented by the object in your game that originally displayed the achievements user interface.
- [GKChallengesViewControllerDelegate](gkchallengesviewcontrollerdelegate.md): Deprecated.
- [GKChallengeListener](gkchallengelistener.md): Deprecated. An object that responds to challenge events.
- [GKFriendRequestComposeViewControllerDelegate](gkfriendrequestcomposeviewcontrollerdelegate.md): Deprecated. The [GKFriendRequestComposeViewControllerDelegate](gkfriendrequestcomposeviewcontrollerdelegate.md) protocol is implemented by delegates of the [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md) class. The delegate is called when the player dismisses the friend request.
- [GKGameSessionEventListener](gkgamesessioneventlistener.md): Deprecated. An event listener that handles game session events.
- [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md): Deprecated. The [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md) protocol is implemented by delegates of the [GKLeaderboardViewController](gkleaderboardviewcontroller.md) class. The delegate is called when the player dismisses the leaderboard.
- [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md): Deprecated. The [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md) protocol is implemented on an object to customize the behavior of a [GKPeerPickerController](gkpeerpickercontroller.md) object. The delegate is called by the peer picker to create a session object and to respond as the session is configured by the controller.
- [GKSessionDelegate](gksessiondelegate.md): Deprecated. An object implements the [GKSessionDelegate](gksessiondelegate.md) protocol to control the behavior of a [GKSession](gksession.md) object. The delegate is called when other visible peers change their state relative to the session. It is also called to determine whether another peer is allowed to connect to the session.
- [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md): Deprecated. The [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol is implemented by an object to receive notifications events for turn-based matches. All methods are called on the main thread.
- [GKVoiceChatClient](gkvoicechatclient.md): Deprecated. The [GKVoiceChatClient](gkvoicechatclient.md) protocol is implemented to control the behavior of the [GKVoiceChatService](gkvoicechatservice.md) object. The voice chat client has a number of responsibilities:

# GKChallengeEventHandlerDelegate (Objective-C)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

You implement the [GKChallengeEventHandlerDelegate](gkchallengeeventhandlerdelegate.md) delegate to control how challenges are displayed in your game.

> You should instead implement the GKChallengeListener protocol and register a listener with GKLocalPlayer.

## Declaration

```objectivec
@protocol GKChallengeEventHandlerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

By default, GameKit briefly displays a banner over your game when any of the following events occur:

- The local player receives a challenge.
- The local player completes a challenge.
- A remote player completes a challenge issued by the local player.

Your event handler can override or extend this behavior:

- It can prevent a banner from being displayed.
- It can be notified when a player taps in a banner.
- It can handle the events directly.

## Topics

### Detecting When a User Taps a Banner

- [localPlayerDidSelectChallenge:](gkchallengeeventhandlerdelegate/localplayerdidselect%28__%29.md): Deprecated. Called when the local player selects a challenge banner displayed by GameKit.

### Responding When a New Challenge is Received

- [localPlayerDidReceiveChallenge:](gkchallengeeventhandlerdelegate/localplayerdidreceive%28__%29.md): Deprecated. Called when the local player receives a new challenge.
- [shouldShowBannerForLocallyReceivedChallenge:](gkchallengeeventhandlerdelegate/shouldshowbanner%28forlocallyreceivedchallenge_%29.md): Deprecated. Called to determine whether a banner should be shown when the local player receives a challenge.

### Responding to Challenges Completed By the Local Player

- [localPlayerDidCompleteChallenge:](gkchallengeeventhandlerdelegate/localplayerdidcomplete%28__%29.md): Deprecated. Called when the local player completes a challenge.
- [shouldShowBannerForLocallyCompletedChallenge:](gkchallengeeventhandlerdelegate/shouldshowbanner%28forlocallycompletedchallenge_%29.md): Deprecated. Called to determine whether a banner should be shown when the local player completes a challenge.

### Responding to Challenges Issued by the Local Player

- [remotePlayerDidCompleteChallenge:](gkchallengeeventhandlerdelegate/remoteplayerdidcomplete%28__%29.md): Deprecated. Called when a remote player completes a challenge issued by the local player.
- [shouldShowBannerForRemotelyCompletedChallenge:](gkchallengeeventhandlerdelegate/shouldshowbanner%28forremotelycompletedchallenge_%29.md): Deprecated. Called to determine whether a banner should be shown when a remote player completes a challenge.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated protocols

- [GKAchievementViewControllerDelegate](gkachievementviewcontrollerdelegate.md): Deprecated. An object implementing the [GKAchievementViewControllerDelegate](gkachievementviewcontrollerdelegate.md) protocol is called when the user dismisses the achievements view controller. Typically, this protocol is implemented by the object in your game that originally displayed the achievements user interface.
- [GKChallengesViewControllerDelegate](gkchallengesviewcontrollerdelegate.md): Deprecated.
- [GKChallengeListener](gkchallengelistener.md): Deprecated. An object that responds to challenge events.
- [GKFriendRequestComposeViewControllerDelegate](gkfriendrequestcomposeviewcontrollerdelegate.md): Deprecated. The [GKFriendRequestComposeViewControllerDelegate](gkfriendrequestcomposeviewcontrollerdelegate.md) protocol is implemented by delegates of the [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md) class. The delegate is called when the player dismisses the friend request.
- [GKGameSessionEventListener](gkgamesessioneventlistener.md): Deprecated. An event listener that handles game session events.
- [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md): Deprecated. The [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md) protocol is implemented by delegates of the [GKLeaderboardViewController](gkleaderboardviewcontroller.md) class. The delegate is called when the player dismisses the leaderboard.
- [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md): Deprecated. The [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md) protocol is implemented on an object to customize the behavior of a [GKPeerPickerController](gkpeerpickercontroller.md) object. The delegate is called by the peer picker to create a session object and to respond as the session is configured by the controller.
- [GKSessionDelegate](gksessiondelegate.md): Deprecated. An object implements the [GKSessionDelegate](gksessiondelegate.md) protocol to control the behavior of a [GKSession](gksession.md) object. The delegate is called when other visible peers change their state relative to the session. It is also called to determine whether another peer is allowed to connect to the session.
- [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md): Deprecated. The [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol is implemented by an object to receive notifications events for turn-based matches. All methods are called on the main thread.
- [GKVoiceChatClient](gkvoicechatclient.md): Deprecated. The [GKVoiceChatClient](gkvoicechatclient.md) protocol is implemented to control the behavior of the [GKVoiceChatService](gkvoicechatservice.md) object. The voice chat client has a number of responsibilities:
