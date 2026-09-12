> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkpeerpickercontroller](https://developer.apple.com/documentation/gamekit/gkpeerpickercontroller)

# GKPeerPickerController (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0)

Provides a standard user interface to allow one iOS device to discover and connect to another.

> Use the [MCBrowserViewController](../multipeerconnectivity/mcbrowserviewcontroller.md) class in the Multipeer Connectivity framework instead.

## Declaration

```swift
class GKPeerPickerController
```

<a id="overview"></a>

## Overview

The result is a configured [GKSession](gksession.md) object connecting the two devices. To use a [GKPeerPickerController](gkpeerpickercontroller.md) object, your application creates the controller, adds a delegate, configures the allowed connection types, and then shows the peer picker. The delegate is called as the user makes selections within the peer picker interface.

In iOS 3.0, the peer picker can be configured to select between Bluetooth and Internet connections.

> **Important**

>  Although users can select Internet connections in the peer picker, [GKPeerPickerController](gkpeerpickercontroller.md) has no user interface for configuring them. If your application configures the peer picker to allow Internet connections, your application must also dismiss the peer picker and present its own interface to configure an Internet connection.

On iOS 3.0, your application should release the peer picker object after it dismisses the peer picker dialog. On iOS 3.1 or later, your application may release the peer picker after it is shown to the user. If you do this, the peer picker controller is automatically deallocated after the dialog is dismissed.

## Topics

### Setting and Getting the Delegate

- [delegate](gkpeerpickercontroller/delegate.md): Deprecated. The delegate of the peer picker controller.

### Displaying the Picker Dialog

- [dismiss()](gkpeerpickercontroller/dismiss%28%29.md): Deprecated. Hides the peer picker dialog.
- [show()](gkpeerpickercontroller/show%28%29.md): Deprecated. Displays the peer picker dialog to the user.
- [isVisible](gkpeerpickercontroller/isvisible.md): Deprecated. A Boolean value that indicates whether the picker dialog is visible.

### Configuring Connectivity Options

- [connectionTypesMask](gkpeerpickercontroller/connectiontypesmask.md): Deprecated. A mask that determines the types of connections a dialog presents to the user.

### Constants

- [GKPeerPickerConnectionType](gkpeerpickerconnectiontype.md): Deprecated. Network connections available to the peer picker dialog.

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
- [GKScore](gkscore.md): Deprecated. An object containing information for a score that was earned by the player.
- [GKSession](gksession.md): Deprecated. A [GKSession](gksession.md) object provides the ability to discover and connect to nearby iOS devices using Bluetooth or Wi-fi.
- [GKTurnBasedEventHandler](gkturnbasedeventhandler.md): Deprecated. The [GKTurnBasedEventHandler](gkturnbasedeventhandler.md) class is used to respond to important messages related to turn-based matches. To use it, call the [shared()](gkturnbasedeventhandler/shared%28%29.md) class method to get the singleton instance and assign an object that implements the [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol to its [delegate](gkturnbasedeventhandler/delegate.md) property. All methods are called on the main thread.

# GKPeerPickerController (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Provides a standard user interface to allow one iOS device to discover and connect to another.

> Use the [MCBrowserViewController](../multipeerconnectivity/mcbrowserviewcontroller.md) class in the Multipeer Connectivity framework instead.

## Declaration

```objectivec
@interface GKPeerPickerController : NSObject
```

<a id="overview"></a>

## Overview

The result is a configured [GKSession](gksession.md) object connecting the two devices. To use a [GKPeerPickerController](gkpeerpickercontroller.md) object, your application creates the controller, adds a delegate, configures the allowed connection types, and then shows the peer picker. The delegate is called as the user makes selections within the peer picker interface.

In iOS 3.0, the peer picker can be configured to select between Bluetooth and Internet connections.

> **Important**

>  Although users can select Internet connections in the peer picker, [GKPeerPickerController](gkpeerpickercontroller.md) has no user interface for configuring them. If your application configures the peer picker to allow Internet connections, your application must also dismiss the peer picker and present its own interface to configure an Internet connection.

On iOS 3.0, your application should release the peer picker object after it dismisses the peer picker dialog. On iOS 3.1 or later, your application may release the peer picker after it is shown to the user. If you do this, the peer picker controller is automatically deallocated after the dialog is dismissed.

## Topics

### Setting and Getting the Delegate

- [delegate](gkpeerpickercontroller/delegate.md): Deprecated. The delegate of the peer picker controller.

### Displaying the Picker Dialog

- [dismiss](gkpeerpickercontroller/dismiss%28%29.md): Deprecated. Hides the peer picker dialog.
- [show](gkpeerpickercontroller/show%28%29.md): Deprecated. Displays the peer picker dialog to the user.
- [visible](gkpeerpickercontroller/isvisible.md): Deprecated. A Boolean value that indicates whether the picker dialog is visible.

### Configuring Connectivity Options

- [connectionTypesMask](gkpeerpickercontroller/connectiontypesmask.md): Deprecated. A mask that determines the types of connections a dialog presents to the user.

### Constants

- [GKPeerPickerConnectionType](gkpeerpickerconnectiontype.md): Deprecated. Network connections available to the peer picker dialog.

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
- [GKScore](gkscore.md): Deprecated. An object containing information for a score that was earned by the player.
- [GKSession](gksession.md): Deprecated. A [GKSession](gksession.md) object provides the ability to discover and connect to nearby iOS devices using Bluetooth or Wi-fi.
- [GKTurnBasedEventHandler](gkturnbasedeventhandler.md): Deprecated. The [GKTurnBasedEventHandler](gkturnbasedeventhandler.md) class is used to respond to important messages related to turn-based matches. To use it, call the [sharedTurnBasedEventHandler](gkturnbasedeventhandler/shared%28%29.md) class method to get the singleton instance and assign an object that implements the [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol to its [delegate](gkturnbasedeventhandler/delegate.md) property. All methods are called on the main thread.
