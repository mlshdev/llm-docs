> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkchallengecomposehandler](https://developer.apple.com/documentation/gamekit/gkchallengecomposehandler)

# GKChallengeComposeHandler (Swift)

**Framework:** GameKit  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ (deprecated in 26.0) · iPadOS 17.0+ (deprecated in 26.0) · Mac Catalyst 17.0+ (deprecated in 26.0) · macOS 14.0+ (deprecated in 26.0) · tvOS 17.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A completion block that provides information about the player who issues a challenge and the players who receive it.

## Declaration

```swift
typealias GKChallengeComposeHandler = (UIViewController, Bool, [GKPlayer]?) -> Void
```

```swift
typealias GKChallengeComposeHandler = (NSViewController, Bool, [GKPlayer]?) -> Void
```

## Parameters

- `composeController`: The view controller for the challenge.
- `didIssueChallenge`: A Boolean value that indicates whether the player issues the challenge.
- `sentPlayers`: The players that receive the challenge.

## See Also

### Issuing Achievement Challenges

- [selectChallengeablePlayers(\_:withCompletionHandler:)](gkachievement/selectchallengeableplayers%28__withcompletionhandler_%29.md): Deprecated. Finds the subset of players who can earn an achievement.
- [challengeComposeController(withMessage:players:completion:)](gkachievement/challengecomposecontroller%28withmessage_players_completion_%29.md): Deprecated. Provides a view controller that you present to the player to issue an achievement challenge.
- [challengeComposeController(withMessage:players:completionHandler:)](gkachievement/challengecomposecontroller%28withmessage_players_completionhandler_%29.md): Deprecated. Provides a view controller that you present to the player to issue an achievement challenge.
- [challengeComposeController(withPlayers:message:completionHandler:)](gkachievement/challengecomposecontroller%28withplayers_message_completionhandler_%29.md): Deprecated. Provides a challenge compose view controller with preselected player identifiers and a message.

# GKChallengeComposeHandler (Objective-C)

**Framework:** GameKit  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ (deprecated in 26.0) · iPadOS 17.0+ (deprecated in 26.0) · Mac Catalyst 17.0+ (deprecated in 26.0) · macOS 14.0+ (deprecated in 26.0) · tvOS 17.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A completion block that provides information about the player who issues a challenge and the players who receive it.

## Declaration

```objectivec
typedef void (^)(UIViewController *, _Bool, NSArray<GKPlayer *> *) GKChallengeComposeHandler;
```

```objectivec
typedef void (^)(NSViewController *, _Bool, NSArray<GKPlayer *> *) GKChallengeComposeHandler;
```

## Parameters

- `composeController`: The view controller for the challenge.
- `didIssueChallenge`: A Boolean value that indicates whether the player issues the challenge.
- `sentPlayers`: The players that receive the challenge.

## See Also

### Issuing Achievement Challenges

- [selectChallengeablePlayers:withCompletionHandler:](gkachievement/selectchallengeableplayers%28__withcompletionhandler_%29.md): Deprecated. Finds the subset of players who can earn an achievement.
- [challengeComposeControllerWithMessage:players:completion:](gkachievement/challengecomposecontroller%28withmessage_players_completion_%29.md): Deprecated. Provides a view controller that you present to the player to issue an achievement challenge.
- [challengeComposeControllerWithMessage:players:completionHandler:](gkachievement/challengecomposecontroller%28withmessage_players_completionhandler_%29.md): Deprecated. Provides a view controller that you present to the player to issue an achievement challenge.
- [challengeComposeControllerWithPlayers:message:completionHandler:](gkachievement/challengecomposecontroller%28withplayers_message_completionhandler_%29.md): Deprecated. Provides a challenge compose view controller with preselected player identifiers and a message.
