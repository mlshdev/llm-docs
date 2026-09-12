> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievement](https://developer.apple.com/documentation/gamekit/gkachievement)

# GKAchievement (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

An achievement you can award a player as they make progress toward and reach a goal in your game.

## Declaration

```swift
class GKAchievement
```

## Mentioned In

- [Rewarding players with achievements](rewarding-players-with-achievements.md)

<a id="overview"></a>

## Overview

Before using this class, configure your game achievements in App Store Connect. Then the dashboard shows the achievements initially locked and you can access them in your code.

Use the [loadAchievements(completionHandler:)](gkachievement/loadachievements%28completionhandler_%29.md) method to load all the achievements that the local player is progressing toward. If an achievement doesn’t load, then it’s the first time you’re reporting the player’s progress toward it, and you must create a [GKAchievement](gkachievement.md) object to represent it. Next, set the percentage complete of the achievement using the [percentComplete](gkachievement/percentcomplete.md) property.

You can report the player’s progress for one or more achievements to Game Center using the [report(\_:withCompletionHandler:)](gkachievement/report%28__withcompletionhandler_%29.md) method. The dashboard changes the appearance of the achievements to show the current percentages. If you set the percentage of an achievement to 100, the dashboard shows it as completed.

To reset the player’s progress on all achievements, use the [resetAchievements(completionHandler:)](gkachievement/resetachievements%28completionhandler_%29.md) class method.

## Topics

### Loading and Initializing Achievements

- [loadAchievements(completionHandler:)](gkachievement/loadachievements%28completionhandler_%29.md): Loads the achievements that you previously reported the player making progress toward.
- [init(identifier:)](gkachievement/init%28identifier_%29.md): Initializes an achievement for the local player.
- [init(identifier:player:)](gkachievement/init%28identifier_player_%29.md): Initializes an achievement for a player.

### Accessing Achievement Properties

- [identifier](gkachievement/identifier.md): The identifier for the achievement that you enter in App Store Connect.
- [player](gkachievement/player.md): The player who earned the achievement.
- [percentComplete](gkachievement/percentcomplete.md): A percentage value that states how far the player has progressed on the achievement.
- [isCompleted](gkachievement/iscompleted.md): A Boolean value that states whether the player has completed the achievement.
- [lastReportedDate](gkachievement/lastreporteddate.md): The last time your game reported progress on the achievement for the player.

### Reporting Progress on Achievements

- [report(\_:withCompletionHandler:)](gkachievement/report%28__withcompletionhandler_%29.md): Reports the player’s progress of players toward one or more achievements.
- [report(\_:withEligibleChallenges:withCompletionHandler:)](gkachievement/report%28__witheligiblechallenges_withcompletionhandler_%29.md): Deprecated. Reports the player’s progress on achievements and limits the challenges, associated with those achievements, that the player may complete.
- [showsCompletionBanner](gkachievement/showscompletionbanner.md): A Boolean value that indicates whether GameKit displays a banner when the player completes the achievement.
- [resetAchievements(completionHandler:)](gkachievement/resetachievements%28completionhandler_%29.md): Resets the percentage completed for all of the player’s achievements.

### Issuing Achievement Challenges

- [selectChallengeablePlayers(\_:withCompletionHandler:)](gkachievement/selectchallengeableplayers%28__withcompletionhandler_%29.md): Deprecated. Finds the subset of players who can earn an achievement.
- [challengeComposeController(withMessage:players:completion:)](gkachievement/challengecomposecontroller%28withmessage_players_completion_%29.md): Deprecated. Provides a view controller that you present to the player to issue an achievement challenge.
- [GKChallengeComposeHandler](gkchallengecomposehandler.md): Deprecated. A completion block that provides information about the player who issues a challenge and the players who receive it.
- [challengeComposeController(withMessage:players:completionHandler:)](gkachievement/challengecomposecontroller%28withmessage_players_completionhandler_%29.md): Deprecated. Provides a view controller that you present to the player to issue an achievement challenge.
- [challengeComposeController(withPlayers:message:completionHandler:)](gkachievement/challengecomposecontroller%28withplayers_message_completionhandler_%29.md): Deprecated. Provides a challenge compose view controller with preselected player identifiers and a message.

### Deprecated

- [Deprecated Symbols](gkachievement-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Initializers

- [init(coder:)](gkachievement/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Achievements

- [Rewarding players with achievements](rewarding-players-with-achievements.md): Use achievements to motivate players and engage them more in your game.
- [GKAchievementDescription](gkachievementdescription.md): An object containing the text and artwork used to present an achievement to a player.

# GKAchievement (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

An achievement you can award a player as they make progress toward and reach a goal in your game.

## Declaration

```objectivec
@interface GKAchievement : NSObject
```

## Mentioned In

- [Rewarding players with achievements](rewarding-players-with-achievements.md)

<a id="overview"></a>

## Overview

Before using this class, configure your game achievements in App Store Connect. Then the dashboard shows the achievements initially locked and you can access them in your code.

Use the [loadAchievementsWithCompletionHandler:](gkachievement/loadachievements%28completionhandler_%29.md) method to load all the achievements that the local player is progressing toward. If an achievement doesn’t load, then it’s the first time you’re reporting the player’s progress toward it, and you must create a [GKAchievement](gkachievement.md) object to represent it. Next, set the percentage complete of the achievement using the [percentComplete](gkachievement/percentcomplete.md) property.

You can report the player’s progress for one or more achievements to Game Center using the [reportAchievements:withCompletionHandler:](gkachievement/report%28__withcompletionhandler_%29.md) method. The dashboard changes the appearance of the achievements to show the current percentages. If you set the percentage of an achievement to 100, the dashboard shows it as completed.

To reset the player’s progress on all achievements, use the [resetAchievementsWithCompletionHandler:](gkachievement/resetachievements%28completionhandler_%29.md) class method.

## Topics

### Loading and Initializing Achievements

- [loadAchievementsWithCompletionHandler:](gkachievement/loadachievements%28completionhandler_%29.md): Loads the achievements that you previously reported the player making progress toward.
- [initWithIdentifier:](gkachievement/init%28identifier_%29.md): Initializes an achievement for the local player.
- [initWithIdentifier:player:](gkachievement/init%28identifier_player_%29.md): Initializes an achievement for a player.

### Accessing Achievement Properties

- [identifier](gkachievement/identifier.md): The identifier for the achievement that you enter in App Store Connect.
- [player](gkachievement/player.md): The player who earned the achievement.
- [percentComplete](gkachievement/percentcomplete.md): A percentage value that states how far the player has progressed on the achievement.
- [completed](gkachievement/iscompleted.md): A Boolean value that states whether the player has completed the achievement.
- [lastReportedDate](gkachievement/lastreporteddate.md): The last time your game reported progress on the achievement for the player.

### Reporting Progress on Achievements

- [reportAchievements:withCompletionHandler:](gkachievement/report%28__withcompletionhandler_%29.md): Reports the player’s progress of players toward one or more achievements.
- [reportAchievements:withEligibleChallenges:withCompletionHandler:](gkachievement/report%28__witheligiblechallenges_withcompletionhandler_%29.md): Deprecated. Reports the player’s progress on achievements and limits the challenges, associated with those achievements, that the player may complete.
- [showsCompletionBanner](gkachievement/showscompletionbanner.md): A Boolean value that indicates whether GameKit displays a banner when the player completes the achievement.
- [resetAchievementsWithCompletionHandler:](gkachievement/resetachievements%28completionhandler_%29.md): Resets the percentage completed for all of the player’s achievements.

### Issuing Achievement Challenges

- [selectChallengeablePlayers:withCompletionHandler:](gkachievement/selectchallengeableplayers%28__withcompletionhandler_%29.md): Deprecated. Finds the subset of players who can earn an achievement.
- [challengeComposeControllerWithMessage:players:completion:](gkachievement/challengecomposecontroller%28withmessage_players_completion_%29.md): Deprecated. Provides a view controller that you present to the player to issue an achievement challenge.
- [GKChallengeComposeHandler](gkchallengecomposehandler.md): Deprecated. A completion block that provides information about the player who issues a challenge and the players who receive it.
- [challengeComposeControllerWithMessage:players:completionHandler:](gkachievement/challengecomposecontroller%28withmessage_players_completionhandler_%29.md): Deprecated. Provides a view controller that you present to the player to issue an achievement challenge.
- [challengeComposeControllerWithPlayers:message:completionHandler:](gkachievement/challengecomposecontroller%28withplayers_message_completionhandler_%29.md): Deprecated. Provides a challenge compose view controller with preselected player identifiers and a message.

### Deprecated

- [Deprecated Symbols](gkachievement-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Achievements

- [Rewarding players with achievements](rewarding-players-with-achievements.md): Use achievements to motivate players and engage them more in your game.
- [GKAchievementDescription](gkachievementdescription.md): An object containing the text and artwork used to present an achievement to a player.
