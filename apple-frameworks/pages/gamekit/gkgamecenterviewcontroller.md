> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamecenterviewcontroller](https://developer.apple.com/documentation/gamekit/gkgamecenterviewcontroller)

# GKGameCenterViewController (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 6.0+ (deprecated in 26.0) · iPadOS 6.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.9+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

The dashboard that allows players to access their Game Center data in your game.

## Declaration

```swift
class GKGameCenterViewController
```

## Mentioned In

- [Adding an access point to your game](adding-an-access-point-to-your-game.md)
- [Displaying the Game Center dashboard](displaying-the-game-center-dashboard.md)

<a id="overview"></a>

## Overview

This view controller presents the dashboard from which players can browse and manage their Game Center data. You can present the dashboard in a specific state from which players can navigate to other areas, including their profile. Your game should pause other activities before presenting the dashboard.

To present the dashboard, initialize a new [GKGameCenterViewController](gkgamecenterviewcontroller.md) object and set its delegate. Optionally, initialize a view controller in a specific state, to show a leaderboard with scores from a set of players or during a time period, or to show a specific achievement. Then present the view controller to the player, and GameKit calls your delegate when the player dismisses it.

For visionOS games, the dashboard appears anchored to the window, scene, or view relative to where you present the view controller. For immersive games, set the parent window to a separate window group than the immersive space window group. For the visionOS location of the dashboard when using the access point, see [Configure the access point on visionOS](adding-an-access-point-to-your-game.md#Configure-the-access-point-on-visionOS).

## Topics

### Configuring Game Center content

- [init(state:)](gkgamecenterviewcontroller/init%28state_%29.md): Creates a view controller that presents the specified Game Center content.
- [GKGameCenterViewControllerState](gkgamecenterviewcontrollerstate.md): The type of content for the view controller to present.
- [init(leaderboard:playerScope:)](gkgamecenterviewcontroller/init%28leaderboard_playerscope_%29.md): Creates a view controller that presents a leaderboard with data for the specified players.
- [init(leaderboardID:playerScope:timeScope:)](gkgamecenterviewcontroller/init%28leaderboardid_playerscope_timescope_%29.md): Creates a view controller that presents a leaderboard with data from the specified players and time period.
- [init(leaderboardSetID:)](gkgamecenterviewcontroller/init%28leaderboardsetid_%29.md): Creates a view controller that presents a leaderboard set.
- [init(achievementID:)](gkgamecenterviewcontroller/init%28achievementid_%29.md): Creates a view controller that presents an achievement.
- [init(player:)](gkgamecenterviewcontroller/init%28player_%29.md): Creates a view controller that presents a player’s Game Center profile.

### Setting the view controller delegate

- [gameCenterDelegate](gkgamecenterviewcontroller/gamecenterdelegate.md): The view controller’s delegate.
- [GKGameCenterControllerDelegate](gkgamecentercontrollerdelegate.md): Deprecated. The delegate that GameKit calls when the player dismisses the dashboard.

### Deprecated

- [Deprecated Symbols](gkgamecenterviewcontroller-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UINavigationController](../uikit/uinavigationcontroller.md)

### Inherited By

- [GKAchievementViewController](gkachievementviewcontroller.md)
- [GKLeaderboardViewController](gkleaderboardviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [GKViewController](gkviewcontroller.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSEditor](https://developer.apple.com/documentation/appkit/nseditor)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSeguePerforming](https://developer.apple.com/documentation/appkit/nssegueperforming)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Deprecated classes

- [GKAchievementViewController](gkachievementviewcontroller.md): Deprecated. An `GKAchievementViewController` object provides a standard user interface to display achievement progress for the local player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKChallengeEventHandler](gkchallengeeventhandler.md): Deprecated. The `GKChallengeEventHandler` class is used to respond to events related to challenges sent or received by the local player.
- [GKChallengesViewController](gkchallengesviewcontroller.md): Deprecated.
- [GKChallenge](gkchallenge.md): Deprecated. A challenge issued by the local player to another player.
- [GKScoreChallenge](gkscorechallenge.md): Deprecated. A type of challenge where a player must beat the leaderboard score of another player.
- [GKAchievementChallenge](gkachievementchallenge.md): Deprecated. A type of challenge where a player must earn another player’s achievement.
- [GKCloudPlayer](gkcloudplayer.md): Deprecated. The object representing the currently signed-in iCloud user.
- [GKGameSession](gkgamesession.md): Deprecated. A game session you can use to save game data, invite other players, and create turn-based and real-time game apps.
- [GKGameSessionSharingViewController](gkgamesessionsharingviewcontroller.md): Deprecated. A user interface you can use to invite other users into a tvOS game session.
- [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md): Deprecated. Your game uses the `GKFriendRequestComposeViewController` class to present a screen that allows the local player to send friend requests to other players.
- [GKLeaderboardViewController](gkleaderboardviewcontroller.md): Deprecated. The `GKLeaderboardViewController` class provides a standard user interface that displays leaderboard scores to the player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKPeerPickerController](gkpeerpickercontroller.md): Deprecated. Provides a standard user interface to allow one iOS device to discover and connect to another.
- [GKScore](gkscore.md): Deprecated. An object containing information for a score that was earned by the player.
- [GKSession](gksession.md): Deprecated. A [GKSession](gksession.md) object provides the ability to discover and connect to nearby iOS devices using Bluetooth or Wi-fi.
- [GKTurnBasedEventHandler](gkturnbasedeventhandler.md): Deprecated. The [GKTurnBasedEventHandler](gkturnbasedeventhandler.md) class is used to respond to important messages related to turn-based matches. To use it, call the [shared()](gkturnbasedeventhandler/shared%28%29.md) class method to get the singleton instance and assign an object that implements the [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol to its [delegate](gkturnbasedeventhandler/delegate.md) property. All methods are called on the main thread.

# GKGameCenterViewController (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 6.0+ (deprecated in 26.0) · iPadOS 6.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.9+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

The dashboard that allows players to access their Game Center data in your game.

## Declaration

```objectivec
@interface GKGameCenterViewController : UINavigationController
```

```objectivec
@interface GKGameCenterViewController : NSViewController
```

```objectivec
@interface GKGameCenterViewController
```

## Mentioned In

- [Adding an access point to your game](adding-an-access-point-to-your-game.md)
- [Displaying the Game Center dashboard](displaying-the-game-center-dashboard.md)

<a id="overview"></a>

## Overview

This view controller presents the dashboard from which players can browse and manage their Game Center data. You can present the dashboard in a specific state from which players can navigate to other areas, including their profile. Your game should pause other activities before presenting the dashboard.

To present the dashboard, initialize a new [GKGameCenterViewController](gkgamecenterviewcontroller.md) object and set its delegate. Optionally, initialize a view controller in a specific state, to show a leaderboard with scores from a set of players or during a time period, or to show a specific achievement. Then present the view controller to the player, and GameKit calls your delegate when the player dismisses it.

For visionOS games, the dashboard appears anchored to the window, scene, or view relative to where you present the view controller. For immersive games, set the parent window to a separate window group than the immersive space window group. For the visionOS location of the dashboard when using the access point, see [Configure the access point on visionOS](adding-an-access-point-to-your-game.md#Configure-the-access-point-on-visionOS).

## Topics

### Configuring Game Center content

- [initWithState:](gkgamecenterviewcontroller/init%28state_%29.md): Creates a view controller that presents the specified Game Center content.
- [GKGameCenterViewControllerState](gkgamecenterviewcontrollerstate.md): The type of content for the view controller to present.
- [initWithLeaderboard:playerScope:](gkgamecenterviewcontroller/init%28leaderboard_playerscope_%29.md): Creates a view controller that presents a leaderboard with data for the specified players.
- [initWithLeaderboardID:playerScope:timeScope:](gkgamecenterviewcontroller/init%28leaderboardid_playerscope_timescope_%29.md): Creates a view controller that presents a leaderboard with data from the specified players and time period.
- [initWithLeaderboardSetID:](gkgamecenterviewcontroller/init%28leaderboardsetid_%29.md): Creates a view controller that presents a leaderboard set.
- [initWithAchievementID:](gkgamecenterviewcontroller/init%28achievementid_%29.md): Creates a view controller that presents an achievement.
- [initWithPlayer:](gkgamecenterviewcontroller/init%28player_%29.md): Creates a view controller that presents a player’s Game Center profile.

### Setting the view controller delegate

- [gameCenterDelegate](gkgamecenterviewcontroller/gamecenterdelegate.md): The view controller’s delegate.
- [GKGameCenterControllerDelegate](gkgamecentercontrollerdelegate.md): Deprecated. The delegate that GameKit calls when the player dismisses the dashboard.

### Deprecated

- [Deprecated Symbols](gkgamecenterviewcontroller-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UINavigationController](../uikit/uinavigationcontroller.md)

### Inherited By

- [GKAchievementViewController](gkachievementviewcontroller.md)
- [GKLeaderboardViewController](gkleaderboardviewcontroller.md)

### Conforms To

- [GKViewController](gkviewcontroller.md)

## See Also

### Deprecated classes

- [GKAchievementViewController](gkachievementviewcontroller.md): Deprecated. An `GKAchievementViewController` object provides a standard user interface to display achievement progress for the local player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKChallengeEventHandler](gkchallengeeventhandler.md): Deprecated. The `GKChallengeEventHandler` class is used to respond to events related to challenges sent or received by the local player.
- [GKChallengesViewController](gkchallengesviewcontroller.md): Deprecated.
- [GKChallenge](gkchallenge.md): Deprecated. A challenge issued by the local player to another player.
- [GKScoreChallenge](gkscorechallenge.md): Deprecated. A type of challenge where a player must beat the leaderboard score of another player.
- [GKAchievementChallenge](gkachievementchallenge.md): Deprecated. A type of challenge where a player must earn another player’s achievement.
- [GKCloudPlayer](gkcloudplayer.md): Deprecated. The object representing the currently signed-in iCloud user.
- [GKGameSession](gkgamesession.md): Deprecated. A game session you can use to save game data, invite other players, and create turn-based and real-time game apps.
- [GKGameSessionSharingViewController](gkgamesessionsharingviewcontroller.md): Deprecated. A user interface you can use to invite other users into a tvOS game session.
- [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md): Deprecated. Your game uses the `GKFriendRequestComposeViewController` class to present a screen that allows the local player to send friend requests to other players.
- [GKLeaderboardViewController](gkleaderboardviewcontroller.md): Deprecated. The `GKLeaderboardViewController` class provides a standard user interface that displays leaderboard scores to the player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKPeerPickerController](gkpeerpickercontroller.md): Deprecated. Provides a standard user interface to allow one iOS device to discover and connect to another.
- [GKScore](gkscore.md): Deprecated. An object containing information for a score that was earned by the player.
- [GKSession](gksession.md): Deprecated. A [GKSession](gksession.md) object provides the ability to discover and connect to nearby iOS devices using Bluetooth or Wi-fi.
- [GKTurnBasedEventHandler](gkturnbasedeventhandler.md): Deprecated. The [GKTurnBasedEventHandler](gkturnbasedeventhandler.md) class is used to respond to important messages related to turn-based matches. To use it, call the [sharedTurnBasedEventHandler](gkturnbasedeventhandler/shared%28%29.md) class method to get the singleton instance and assign an object that implements the [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol to its [delegate](gkturnbasedeventhandler/delegate.md) property. All methods are called on the main thread.
