> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievement/challengecomposecontroller(withmessage:players:completion:)](https://developer.apple.com/documentation/gamekit/gkachievement/challengecomposecontroller(withmessage:players:completion:))

# challengeComposeController(withMessage:players:completion:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ (deprecated in 26.0) · iPadOS 17.0+ (deprecated in 26.0) · Mac Catalyst 17.0+ (deprecated in 26.0) · macOS 14.0+ (deprecated in 26.0) · tvOS 17.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Provides a view controller that you present to the player to issue an achievement challenge.

## Declaration

```swift
func challengeComposeController(withMessage message: String?, players: [GKPlayer], completion completionHandler: GKChallengeComposeHandler? = nil) -> UIViewController
```

```swift
func challengeComposeController(withMessage message: String?, players: [GKPlayer], completion completionHandler: GKChallengeComposeHandler? = nil) -> NSViewController
```

## Parameters

- `message`: The challenge message, which the player can edit before GameKit sends it to other players.
- `players`: The players to invite to the challenge.
- `completionHandler`: A block that GameKit calls after it displays the view controller.

<a id="Discussion"></a>

## Discussion

This method presents the view controller modally from the top view controller. GameKit calls the completion handler block after it displays the view controller and the player sends or cancels the challenge.

## See Also

### Issuing Achievement Challenges

- [selectChallengeablePlayers(\_:withCompletionHandler:)](selectchallengeableplayers%28__withcompletionhandler_%29.md): Deprecated. Finds the subset of players who can earn an achievement.
- [GKChallengeComposeHandler](../gkchallengecomposehandler.md): Deprecated. A completion block that provides information about the player who issues a challenge and the players who receive it.
- [challengeComposeController(withMessage:players:completionHandler:)](challengecomposecontroller%28withmessage_players_completionhandler_%29.md): Deprecated. Provides a view controller that you present to the player to issue an achievement challenge.
- [challengeComposeController(withPlayers:message:completionHandler:)](challengecomposecontroller%28withplayers_message_completionhandler_%29.md): Deprecated. Provides a challenge compose view controller with preselected player identifiers and a message.

# challengeComposeControllerWithMessage:players:completion: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ (deprecated in 26.0) · iPadOS 17.0+ (deprecated in 26.0) · Mac Catalyst 17.0+ (deprecated in 26.0) · macOS 14.0+ (deprecated in 26.0) · tvOS 17.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Provides a view controller that you present to the player to issue an achievement challenge.

## Declaration

```objectivec
- (UIViewController *) challengeComposeControllerWithMessage:(NSString *) message players:(NSArray<GKPlayer *> *) players completion:(GKChallengeComposeHandler) completionHandler;
```

```objectivec
- (NSViewController *) challengeComposeControllerWithMessage:(NSString *) message players:(NSArray<GKPlayer *> *) players completion:(GKChallengeComposeHandler) completionHandler;
```

## Parameters

- `message`: The challenge message, which the player can edit before GameKit sends it to other players.
- `players`: The players to invite to the challenge.
- `completionHandler`: A block that GameKit calls after it displays the view controller.

<a id="Discussion"></a>

## Discussion

This method presents the view controller modally from the top view controller. GameKit calls the completion handler block after it displays the view controller and the player sends or cancels the challenge.

## See Also

### Issuing Achievement Challenges

- [selectChallengeablePlayers:withCompletionHandler:](selectchallengeableplayers%28__withcompletionhandler_%29.md): Deprecated. Finds the subset of players who can earn an achievement.
- [GKChallengeComposeHandler](../gkchallengecomposehandler.md): Deprecated. A completion block that provides information about the player who issues a challenge and the players who receive it.
- [challengeComposeControllerWithMessage:players:completionHandler:](challengecomposecontroller%28withmessage_players_completionhandler_%29.md): Deprecated. Provides a view controller that you present to the player to issue an achievement challenge.
- [challengeComposeControllerWithPlayers:message:completionHandler:](challengecomposecontroller%28withplayers_message_completionhandler_%29.md): Deprecated. Provides a challenge compose view controller with preselected player identifiers and a message.
