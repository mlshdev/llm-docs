> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkchallengedefinition](https://developer.apple.com/documentation/gamekit/gkchallengedefinition)

# GKChallengeDefinition (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An object that represents the static metadata you define for the challenge.

## Declaration

```swift
class GKChallengeDefinition
```

## Mentioned In

- [Creating engaging challenges from leaderboards](creating-engaging-challenges-from-leaderboards.md)

## Topics

### Getting the display properties and image

- [title](gkchallengedefinition/title.md): A short title for the challenge definition.
- [details](gkchallengedefinition/details.md): A more detailed description of the challenge definition.
- [loadImage(completionHandler:)](gkchallengedefinition/loadimage%28completionhandler_%29.md): Loads the image set on the challenge definition, which may be `nil` if none was set.

### Getting the challenge rules

- [durationOptions](gkchallengedefinition/durationoptions.md): The duration options for the challenge, like `1 day` or `1 week`.
- [isRepeatable](gkchallengedefinition/isrepeatable.md): Indicates if a challenge can be attempted more than once.

### Getting the leaderboard

- [leaderboard](gkchallengedefinition/leaderboard.md): Scores submitted to this leaderboard will also be submitted as scores in this challenge.

### Getting the release state

- [releaseState](gkchallengedefinition/releasestate.md): The release state of the challenge definition in App Store Connect.
- [GKReleaseState](gkreleasestate.md): Describes the release state of an App Store Connect resource, such as an Achievement or Leaderboard.

### Getting the identifier properties

- [groupIdentifier](gkchallengedefinition/groupidentifier.md): The group identifier for the challenge definition, if one exists.
- [identifier](gkchallengedefinition/identifier.md): The developer defined identifier for a given challenge definition.

### Loading challenge definitions

- [loadChallengeDefinitions(completionHandler:)](gkchallengedefinition/loadchallengedefinitions%28completionhandler_%29.md): Loads all the challenge definitions for the current game, returns an empty array if none exist.

### Checking for active challenges

- [hasActiveChallenges(completionHandler:)](gkchallengedefinition/hasactivechallenges%28completionhandler_%29.md): Indicates if this definition has active challenges associated with it.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Challenges

- [Creating engaging challenges from leaderboards](creating-engaging-challenges-from-leaderboards.md): Encourage friendly competition by adding challenges to your game.
- [Choosing a leaderboard for your challenges](choosing-a-leaderboard-for-your-challenges.md): Understand what gameplay works well when configuring challenges in your game.
- [GKShowChallengeBanners](../bundleresources/information-property-list/gkshowchallengebanners.md): Deprecated. A Boolean value that indicates whether GameKit can display challenge banners in a game.

# GKChallengeDefinition (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An object that represents the static metadata you define for the challenge.

## Declaration

```objectivec
@interface GKChallengeDefinition : NSObject
```

## Mentioned In

- [Creating engaging challenges from leaderboards](creating-engaging-challenges-from-leaderboards.md)

## Topics

### Getting the display properties and image

- [title](gkchallengedefinition/title.md): A short title for the challenge definition.
- [details](gkchallengedefinition/details.md): A more detailed description of the challenge definition.
- [loadImageWithCompletionHandler:](gkchallengedefinition/loadimage%28completionhandler_%29.md): Loads the image set on the challenge definition, which may be `nil` if none was set.

### Getting the challenge rules

- [durationOptions](gkchallengedefinition/durationoptions.md): The duration options for the challenge, like `1 day` or `1 week`.
- [isRepeatable](gkchallengedefinition/isrepeatable.md): Indicates if a challenge can be attempted more than once.

### Getting the leaderboard

- [leaderboard](gkchallengedefinition/leaderboard.md): Scores submitted to this leaderboard will also be submitted as scores in this challenge.

### Getting the release state

- [releaseState](gkchallengedefinition/releasestate.md): The release state of the challenge definition in App Store Connect.
- [GKReleaseState](gkreleasestate.md): Describes the release state of an App Store Connect resource, such as an Achievement or Leaderboard.

### Getting the identifier properties

- [groupIdentifier](gkchallengedefinition/groupidentifier.md): The group identifier for the challenge definition, if one exists.
- [identifier](gkchallengedefinition/identifier.md): The developer defined identifier for a given challenge definition.

### Loading challenge definitions

- [loadChallengeDefinitionsWithCompletionHandler:](gkchallengedefinition/loadchallengedefinitions%28completionhandler_%29.md): Loads all the challenge definitions for the current game, returns an empty array if none exist.

### Checking for active challenges

- [hasActiveChallengesWithCompletionHandler:](gkchallengedefinition/hasactivechallenges%28completionhandler_%29.md): Indicates if this definition has active challenges associated with it.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Challenges

- [Creating engaging challenges from leaderboards](creating-engaging-challenges-from-leaderboards.md): Encourage friendly competition by adding challenges to your game.
- [Choosing a leaderboard for your challenges](choosing-a-leaderboard-for-your-challenges.md): Understand what gameplay works well when configuring challenges in your game.
- [GKShowChallengeBanners](../bundleresources/information-property-list/gkshowchallengebanners.md): Deprecated. A Boolean value that indicates whether GameKit can display challenge banners in a game.
