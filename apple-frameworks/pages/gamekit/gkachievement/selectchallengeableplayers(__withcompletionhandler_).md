> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievement/selectchallengeableplayers(_:withcompletionhandler:)](https://developer.apple.com/documentation/gamekit/gkachievement/selectchallengeableplayers(_:withcompletionhandler:))

# selectChallengeablePlayers(\_:withCompletionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.10+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Finds the subset of players who can earn an achievement.

## Declaration

```swift
func selectChallengeablePlayers(_ players: [GKPlayer], withCompletionHandler completionHandler: (@Sendable ([GKPlayer]?, (any Error)?) -> Void)? = nil)
```

```swift
func selectChallengeablePlayers(_ players: [GKPlayer]) async throws -> [GKPlayer]
```

## Parameters

- `players`: A list of players that GameKit uses to find players who are eligible to earn the achievement.
- `completionHandler`: A block that GameKit calls when this method completes.

  The block receives the following parameters:

  - **`challengeablePlayers`**: The players in the `players` parameter who are able to earn the achievement.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## See Also

### Issuing Achievement Challenges

- [challengeComposeController(withMessage:players:completion:)](challengecomposecontroller%28withmessage_players_completion_%29.md): Deprecated. Provides a view controller that you present to the player to issue an achievement challenge.
- [GKChallengeComposeHandler](../gkchallengecomposehandler.md): Deprecated. A completion block that provides information about the player who issues a challenge and the players who receive it.
- [challengeComposeController(withMessage:players:completionHandler:)](challengecomposecontroller%28withmessage_players_completionhandler_%29.md): Deprecated. Provides a view controller that you present to the player to issue an achievement challenge.
- [challengeComposeController(withPlayers:message:completionHandler:)](challengecomposecontroller%28withplayers_message_completionhandler_%29.md): Deprecated. Provides a challenge compose view controller with preselected player identifiers and a message.

# selectChallengeablePlayers:withCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.10+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Finds the subset of players who can earn an achievement.

## Declaration

```objectivec
- (void) selectChallengeablePlayers:(NSArray<GKPlayer *> *) players withCompletionHandler:(void (^)(NSArray<GKPlayer *> *challengeablePlayers, NSError *error)) completionHandler;
```

## Parameters

- `players`: A list of players that GameKit uses to find players who are eligible to earn the achievement.
- `completionHandler`: A block that GameKit calls when this method completes.

  The block receives the following parameters:

  - **`challengeablePlayers`**: The players in the `players` parameter who are able to earn the achievement.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## See Also

### Issuing Achievement Challenges

- [challengeComposeControllerWithMessage:players:completion:](challengecomposecontroller%28withmessage_players_completion_%29.md): Deprecated. Provides a view controller that you present to the player to issue an achievement challenge.
- [GKChallengeComposeHandler](../gkchallengecomposehandler.md): Deprecated. A completion block that provides information about the player who issues a challenge and the players who receive it.
- [challengeComposeControllerWithMessage:players:completionHandler:](challengecomposecontroller%28withmessage_players_completionhandler_%29.md): Deprecated. Provides a view controller that you present to the player to issue an achievement challenge.
- [challengeComposeControllerWithPlayers:message:completionHandler:](challengecomposecontroller%28withplayers_message_completionhandler_%29.md): Deprecated. Provides a challenge compose view controller with preselected player identifiers and a message.
