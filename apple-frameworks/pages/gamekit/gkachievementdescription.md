> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievementdescription](https://developer.apple.com/documentation/gamekit/gkachievementdescription)

# GKAchievementDescription (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

An object containing the text and artwork used to present an achievement to a player.

## Declaration

```swift
class GKAchievementDescription
```

<a id="overview"></a>

## Overview

To present an achievement to the player in your interface, you can download the localized text and artwork for the achievements that you enter in App Store Connect. To get the localized text, use the [loadAchievementDescriptions(completionHandler:)](gkachievementdescription/loadachievementdescriptions%28completionhandler_%29.md) class method. GameKit passes an array of [GKAchievementDescription](gkachievementdescription.md) objects to the completion handler that contains the text. To get the artwork for an achievement, use the [loadImage(completionHandler:)](gkachievementdescription/loadimage%28completionhandler_%29.md) method.

To get standard images your game can use to present achievement progress to the player, use the [incompleteAchievementImage()](gkachievementdescription/incompleteachievementimage%28%29.md) and [placeholderCompletedAchievementImage()](gkachievementdescription/placeholdercompletedachievementimage%28%29.md)) class methods.

Alternatively, either add the access point or display the dashboard so that the player can view achievements and navigate to their other Game Center data.

## Topics

### Retrieving Achievement Descriptions

- [loadAchievementDescriptions(completionHandler:)](gkachievementdescription/loadachievementdescriptions%28completionhandler_%29.md): Downloads the localized descriptions of achievements from Game Center.

### Reading and Writing Achievement Properties

- [identifier](gkachievementdescription/identifier.md): The string you enter in App Store Connect that uniquely identifies the achievement.
- [title](gkachievementdescription/title.md): A localized title for the achievement.
- [unachievedDescription](gkachievementdescription/unachieveddescription.md): A localized description of the achievement that you display when the player hasn’t completed the achievement.
- [achievedDescription](gkachievementdescription/achieveddescription.md): A localized description of the achievement that you display when the player completes the achievement.
- [maximumPoints](gkachievementdescription/maximumpoints.md): The number of points that the player earns when completing the achievement.
- [image](gkachievementdescription/image.md): Deprecated. The achievement’s artwork that you display when the player completes the achievement.
- [isHidden](gkachievementdescription/ishidden.md): A Boolean value that states whether the achievement is initially visible to players.
- [isReplayable](gkachievementdescription/isreplayable.md): A Boolean value that states whether the player can earn the achievement multiple times.
- [rarityPercent](gkachievementdescription/raritypercent-4bh6k.md): The percentage of players of this game that earned the achievement.

### Working with Achievement Images

- [incompleteAchievementImage()](gkachievementdescription/incompleteachievementimage%28%29.md): A common image that you can display when the player hasn’t completed the achievement.
- [placeholderCompletedAchievementImage()](gkachievementdescription/placeholdercompletedachievementimage%28%29.md): A placeholder image that you can display when the player completes the achievement.
- [loadImage(completionHandler:)](gkachievementdescription/loadimage%28completionhandler_%29.md): Loads the image to display when the player completes the achievement.

### Retrieving Group Information

- [groupIdentifier](gkachievementdescription/groupidentifier.md): The identifier for the group that the achievement description is part of.

### Initializers

- [init(coder:)](gkachievementdescription/init%28coder_%29.md)

### Instance Properties

- [activityIdentifier](gkachievementdescription/activityidentifier.md): The identifier of the game activity associated with this achievement, as configured by the developer in App Store Connect.
- [activityProperties](gkachievementdescription/activityproperties.md): The properties when associating this achievement with a game activity, as configured by the developer in App Store Connect.
- [releaseState](gkachievementdescription/releasestate.md): The release state of the achievement in App Store Connect.

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

## See Also

### Achievements

- [Rewarding players with achievements](rewarding-players-with-achievements.md): Use achievements to motivate players and engage them more in your game.
- [GKAchievement](gkachievement.md): An achievement you can award a player as they make progress toward and reach a goal in your game.

# GKAchievementDescription (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

An object containing the text and artwork used to present an achievement to a player.

## Declaration

```objectivec
@interface GKAchievementDescription : NSObject
```

<a id="overview"></a>

## Overview

To present an achievement to the player in your interface, you can download the localized text and artwork for the achievements that you enter in App Store Connect. To get the localized text, use the [loadAchievementDescriptionsWithCompletionHandler:](gkachievementdescription/loadachievementdescriptions%28completionhandler_%29.md) class method. GameKit passes an array of [GKAchievementDescription](gkachievementdescription.md) objects to the completion handler that contains the text. To get the artwork for an achievement, use the [loadImageWithCompletionHandler:](gkachievementdescription/loadimage%28completionhandler_%29.md) method.

To get standard images your game can use to present achievement progress to the player, use the [incompleteAchievementImage](gkachievementdescription/incompleteachievementimage%28%29.md) and [placeholderCompletedAchievementImage](gkachievementdescription/placeholdercompletedachievementimage%28%29.md)) class methods.

Alternatively, either add the access point or display the dashboard so that the player can view achievements and navigate to their other Game Center data.

## Topics

### Retrieving Achievement Descriptions

- [loadAchievementDescriptionsWithCompletionHandler:](gkachievementdescription/loadachievementdescriptions%28completionhandler_%29.md): Downloads the localized descriptions of achievements from Game Center.

### Reading and Writing Achievement Properties

- [identifier](gkachievementdescription/identifier.md): The string you enter in App Store Connect that uniquely identifies the achievement.
- [title](gkachievementdescription/title.md): A localized title for the achievement.
- [unachievedDescription](gkachievementdescription/unachieveddescription.md): A localized description of the achievement that you display when the player hasn’t completed the achievement.
- [achievedDescription](gkachievementdescription/achieveddescription.md): A localized description of the achievement that you display when the player completes the achievement.
- [maximumPoints](gkachievementdescription/maximumpoints.md): The number of points that the player earns when completing the achievement.
- [image](gkachievementdescription/image.md): Deprecated. The achievement’s artwork that you display when the player completes the achievement.
- [hidden](gkachievementdescription/ishidden.md): A Boolean value that states whether the achievement is initially visible to players.
- [replayable](gkachievementdescription/isreplayable.md): A Boolean value that states whether the player can earn the achievement multiple times.
- [rarityPercent](gkachievementdescription/raritypercent-3zqw6.md): The percentage of players of this game that earned the achievement.

### Working with Achievement Images

- [incompleteAchievementImage](gkachievementdescription/incompleteachievementimage%28%29.md): A common image that you can display when the player hasn’t completed the achievement.
- [placeholderCompletedAchievementImage](gkachievementdescription/placeholdercompletedachievementimage%28%29.md): A placeholder image that you can display when the player completes the achievement.
- [loadImageWithCompletionHandler:](gkachievementdescription/loadimage%28completionhandler_%29.md): Loads the image to display when the player completes the achievement.

### Retrieving Group Information

- [groupIdentifier](gkachievementdescription/groupidentifier.md): The identifier for the group that the achievement description is part of.

### Instance Properties

- [activityIdentifier](gkachievementdescription/activityidentifier.md): The identifier of the game activity associated with this achievement, as configured by the developer in App Store Connect.
- [activityProperties](gkachievementdescription/activityproperties.md): The properties when associating this achievement with a game activity, as configured by the developer in App Store Connect.
- [releaseState](gkachievementdescription/releasestate.md): The release state of the achievement in App Store Connect.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Achievements

- [Rewarding players with achievements](rewarding-players-with-achievements.md): Use achievements to motivate players and engage them more in your game.
- [GKAchievement](gkachievement.md): An achievement you can award a player as they make progress toward and reach a goal in your game.
