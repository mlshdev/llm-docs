> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksessiondelegate](https://developer.apple.com/documentation/gamekit/gksessiondelegate)

# GKSessionDelegate (Swift)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

An object implements the [GKSessionDelegate](gksessiondelegate.md) protocol to control the behavior of a [GKSession](gksession.md) object. The delegate is called when other visible peers change their state relative to the session. It is also called to determine whether another peer is allowed to connect to the session.

## Declaration

```swift
protocol GKSessionDelegate : NSObjectProtocol
```

## Topics

### Observing Changes to Peers

- [session(\_:peer:didChange:)](gksessiondelegate/session%28__peer_didchange_%29.md): Deprecated. Received by the delegate when a peer changes state.

### Connection Requests from Other Peers

- [session(\_:didReceiveConnectionRequestFromPeer:)](gksessiondelegate/session%28__didreceiveconnectionrequestfrompeer_%29.md): Deprecated. Received by the delegate when a remote peer wants to create a connection to the session.

### Connection Errors

- [session(\_:connectionWithPeerFailed:withError:)](gksessiondelegate/session%28__connectionwithpeerfailed_witherror_%29.md): Deprecated. Received by the delegate when an attempt to connect to another peer failed.
- [session(\_:didFailWithError:)](gksessiondelegate/session%28__didfailwitherror_%29.md): Deprecated. Sent to the delegate when a serious error has occurred in the session.

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
- [GKGameSessionEventListener](gkgamesessioneventlistener.md): Deprecated. An event listener that handles game session events.
- [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md): Deprecated. The [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md) protocol is implemented by delegates of the [GKLeaderboardViewController](gkleaderboardviewcontroller.md) class. The delegate is called when the player dismisses the leaderboard.
- [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md): Deprecated. The [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md) protocol is implemented on an object to customize the behavior of a [GKPeerPickerController](gkpeerpickercontroller.md) object. The delegate is called by the peer picker to create a session object and to respond as the session is configured by the controller.
- [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md): Deprecated. The [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol is implemented by an object to receive notifications events for turn-based matches. All methods are called on the main thread.
- [GKVoiceChatClient](gkvoicechatclient.md): Deprecated. The [GKVoiceChatClient](gkvoicechatclient.md) protocol is implemented to control the behavior of the [GKVoiceChatService](gkvoicechatservice.md) object. The voice chat client has a number of responsibilities:

# GKSessionDelegate (Objective-C)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

An object implements the [GKSessionDelegate](gksessiondelegate.md) protocol to control the behavior of a [GKSession](gksession.md) object. The delegate is called when other visible peers change their state relative to the session. It is also called to determine whether another peer is allowed to connect to the session.

## Declaration

```objectivec
@protocol GKSessionDelegate <NSObject>
```

## Topics

### Observing Changes to Peers

- [session:peer:didChangeState:](gksessiondelegate/session%28__peer_didchange_%29.md): Deprecated. Received by the delegate when a peer changes state.

### Connection Requests from Other Peers

- [session:didReceiveConnectionRequestFromPeer:](gksessiondelegate/session%28__didreceiveconnectionrequestfrompeer_%29.md): Deprecated. Received by the delegate when a remote peer wants to create a connection to the session.

### Connection Errors

- [session:connectionWithPeerFailed:withError:](gksessiondelegate/session%28__connectionwithpeerfailed_witherror_%29.md): Deprecated. Received by the delegate when an attempt to connect to another peer failed.
- [session:didFailWithError:](gksessiondelegate/session%28__didfailwitherror_%29.md): Deprecated. Sent to the delegate when a serious error has occurred in the session.

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
- [GKGameSessionEventListener](gkgamesessioneventlistener.md): Deprecated. An event listener that handles game session events.
- [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md): Deprecated. The [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md) protocol is implemented by delegates of the [GKLeaderboardViewController](gkleaderboardviewcontroller.md) class. The delegate is called when the player dismisses the leaderboard.
- [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md): Deprecated. The [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md) protocol is implemented on an object to customize the behavior of a [GKPeerPickerController](gkpeerpickercontroller.md) object. The delegate is called by the peer picker to create a session object and to respond as the session is configured by the controller.
- [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md): Deprecated. The [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol is implemented by an object to receive notifications events for turn-based matches. All methods are called on the main thread.
- [GKVoiceChatClient](gkvoicechatclient.md): Deprecated. The [GKVoiceChatClient](gkvoicechatclient.md) protocol is implemented to control the behavior of the [GKVoiceChatService](gkvoicechatservice.md) object. The voice chat client has a number of responsibilities:
