> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gknotificationbanner](https://developer.apple.com/documentation/gamekit/gknotificationbanner)

# GKNotificationBanner (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 17.0) · iPadOS 5.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.8+ (deprecated in 14.0) · tvOS 9.0+ (deprecated in 16.1) · visionOS 1.0+ (deprecated in 1.0)

A Game Center-style banner that displays a message to the local player.

> Use [UNNotificationRequest](../usernotifications/unnotificationrequest.md) or provide a custom interface instead.

## Declaration

```swift
class GKNotificationBanner
```

<a id="overview"></a>

## Overview

This class displays a message in a banner to the local player, similar to the banner that GameKit displays when a player earns an achievement. If the game is in the foreground, the banner appears immediately. If the game is in the background, the banner appears when the game becomes active.

To display the banner with your message, use the [show(withTitle:message:completionHandler:)](gknotificationbanner/show%28withtitle_message_completionhandler_%29.md) method. To specify a duration that GameKit presents the banner, use the [show(withTitle:message:duration:completionHandler:)](gknotificationbanner/show%28withtitle_message_duration_completionhandler_%29.md) method instead. Optionally, pass these methods a completion handler that GameKit calls after it dismisses the banner.

```swift
GKNotificationBanner.show(withTitle:"Hooray",
                          message:"You passed level 1 and can move to level 2.",
                          completionHandler: nil)
```

## Topics

### Displaying the Banner

- [show(withTitle:message:completionHandler:)](gknotificationbanner/show%28withtitle_message_completionhandler_%29.md): Deprecated. Displays a banner with a title and message to the player.
- [show(withTitle:message:duration:completionHandler:)](gknotificationbanner/show%28withtitle_message_duration_completionhandler_%29.md): Deprecated. Displays a banner to the player for a specified period of time.

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

# GKNotificationBanner (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 17.0) · iPadOS 5.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.8+ (deprecated in 14.0) · tvOS 9.0+ (deprecated in 16.1) · visionOS 1.0+ (deprecated in 1.0)

A Game Center-style banner that displays a message to the local player.

> Use [UNNotificationRequest](../usernotifications/unnotificationrequest.md) or provide a custom interface instead.

## Declaration

```objectivec
@interface GKNotificationBanner : NSObject
```

<a id="overview"></a>

## Overview

This class displays a message in a banner to the local player, similar to the banner that GameKit displays when a player earns an achievement. If the game is in the foreground, the banner appears immediately. If the game is in the background, the banner appears when the game becomes active.

To display the banner with your message, use the [showBannerWithTitle:message:completionHandler:](gknotificationbanner/show%28withtitle_message_completionhandler_%29.md) method. To specify a duration that GameKit presents the banner, use the [showBannerWithTitle:message:duration:completionHandler:](gknotificationbanner/show%28withtitle_message_duration_completionhandler_%29.md) method instead. Optionally, pass these methods a completion handler that GameKit calls after it dismisses the banner.

```swift
GKNotificationBanner.show(withTitle:"Hooray",
                          message:"You passed level 1 and can move to level 2.",
                          completionHandler: nil)
```

## Topics

### Displaying the Banner

- [showBannerWithTitle:message:completionHandler:](gknotificationbanner/show%28withtitle_message_completionhandler_%29.md): Deprecated. Displays a banner with a title and message to the player.
- [showBannerWithTitle:message:duration:completionHandler:](gknotificationbanner/show%28withtitle_message_duration_completionhandler_%29.md): Deprecated. Displays a banner to the player for a specified period of time.

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
