> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievement/challengecomposecontroller(withmessage:players:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkachievement/challengecomposecontroller(withmessage:players:completionhandler:))

# challengeComposeController(withMessage:players:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.10+ (deprecated in 14.0) · tvOS 9.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Provides a view controller that you present to the player to issue an achievement challenge.

> Use the [challengeComposeController(withMessage:players:completion:)](challengecomposecontroller%28withmessage_players_completion_%29.md) method instead.

## Declaration

```swift
func challengeComposeController(withMessage message: String?, players: [GKPlayer], completionHandler: GKChallengeComposeCompletionBlock? = nil) -> UIViewController
```

```swift
func challengeComposeController(withMessage message: String?, players: [GKPlayer], completionHandler: GKChallengeComposeCompletionBlock? = nil) -> NSViewController
```

## Parameters

- `message`: The challenge message which the player can edit before GameKit sends it to other players.
- `players`: The players that the challenge should be sent to.
- `completionHandler`: A block that GameKit calls after it displays the view controller.

<a id="return-value"></a>

## Return Value

A view controller that contains the player identifiers and the challenge message.

<a id="Discussion"></a>

## Discussion

This method presents the view controller modally from the top view controller. GameKit calls the completion handler block after it displays the view controller and the player sends or cancels the challenge.

## See Also

### Issuing Achievement Challenges

- [selectChallengeablePlayers(\_:withCompletionHandler:)](selectchallengeableplayers%28__withcompletionhandler_%29.md): Deprecated. Finds the subset of players who can earn an achievement.
- [challengeComposeController(withMessage:players:completion:)](challengecomposecontroller%28withmessage_players_completion_%29.md): Deprecated. Provides a view controller that you present to the player to issue an achievement challenge.
- [GKChallengeComposeHandler](../gkchallengecomposehandler.md): Deprecated. A completion block that provides information about the player who issues a challenge and the players who receive it.
- [challengeComposeController(withPlayers:message:completionHandler:)](challengecomposecontroller%28withplayers_message_completionhandler_%29.md): Deprecated. Provides a challenge compose view controller with preselected player identifiers and a message.

# challengeComposeControllerWithMessage:players:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.10+ (deprecated in 14.0) · tvOS 9.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Provides a view controller that you present to the player to issue an achievement challenge.

> Use the [challengeComposeControllerWithMessage:players:completion:](challengecomposecontroller%28withmessage_players_completion_%29.md) method instead.

## Declaration

```objectivec
- (UIViewController *) challengeComposeControllerWithMessage:(NSString *) message players:(NSArray<GKPlayer *> *) players completionHandler:(GKChallengeComposeCompletionBlock) completionHandler;
```

```objectivec
- (NSViewController *) challengeComposeControllerWithMessage:(NSString *) message players:(NSArray<GKPlayer *> *) players completionHandler:(GKChallengeComposeCompletionBlock) completionHandler;
```

## Parameters

- `message`: The challenge message which the player can edit before GameKit sends it to other players.
- `players`: The players that the challenge should be sent to.
- `completionHandler`: A block that GameKit calls after it displays the view controller.

<a id="return-value"></a>

## Return Value

A view controller that contains the player identifiers and the challenge message.

<a id="Discussion"></a>

## Discussion

This method presents the view controller modally from the top view controller. GameKit calls the completion handler block after it displays the view controller and the player sends or cancels the challenge.

## See Also

### Issuing Achievement Challenges

- [selectChallengeablePlayers:withCompletionHandler:](selectchallengeableplayers%28__withcompletionhandler_%29.md): Deprecated. Finds the subset of players who can earn an achievement.
- [challengeComposeControllerWithMessage:players:completion:](challengecomposecontroller%28withmessage_players_completion_%29.md): Deprecated. Provides a view controller that you present to the player to issue an achievement challenge.
- [GKChallengeComposeHandler](../gkchallengecomposehandler.md): Deprecated. A completion block that provides information about the player who issues a challenge and the players who receive it.
- [challengeComposeControllerWithPlayers:message:completionHandler:](challengecomposecontroller%28withplayers_message_completionhandler_%29.md): Deprecated. Provides a challenge compose view controller with preselected player identifiers and a message.
