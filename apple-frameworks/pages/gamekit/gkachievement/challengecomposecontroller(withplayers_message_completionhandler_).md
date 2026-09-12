> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievement/challengecomposecontroller(withplayers:message:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkachievement/challengecomposecontroller(withplayers:message:completionhandler:))

# challengeComposeController(withPlayers:message:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Provides a challenge compose view controller with preselected player identifiers and a message.

> Use the [challengeComposeController(withMessage:players:completion:)](challengecomposecontroller%28withmessage_players_completion_%29.md) method instead.

## Declaration

```swift
func challengeComposeController(withPlayers playerIDs: [String]?, message: String?, completionHandler: GKChallengeComposeCompletionBlock? = nil) -> UIViewController?
```

## Parameters

- `playerIDs`: An array of `NSString` objects that contains the player identifiers that the challenge is to be sent to.
- `message`: The message that is sent to other players. This message can be edited by the player.
- `completionHandler`: A block to be called after the view controller has been displayed. Contains the reason the handler was called and all player identifiers that the challenge was sent to.

<a id="return-value"></a>

## Return Value

A `UIViewController` view that contains the player identifiers and the challenge message.

<a id="Discussion"></a>

## Discussion

When this method is called, it creates a new background task to handle the request. The method then returns control to your game. Later, when the task is complete, Game Kit calls your completion handler. The completion handler is always called on the main thread.

The view controller returned is presented modally from the top view controller. After the view controller is displayed and the player sends or cancels the challenge, the completion handler block is called.

## See Also

### Issuing Achievement Challenges

- [selectChallengeablePlayers(\_:withCompletionHandler:)](selectchallengeableplayers%28__withcompletionhandler_%29.md): Deprecated. Finds the subset of players who can earn an achievement.
- [challengeComposeController(withMessage:players:completion:)](challengecomposecontroller%28withmessage_players_completion_%29.md): Deprecated. Provides a view controller that you present to the player to issue an achievement challenge.
- [GKChallengeComposeHandler](../gkchallengecomposehandler.md): Deprecated. A completion block that provides information about the player who issues a challenge and the players who receive it.
- [challengeComposeController(withMessage:players:completionHandler:)](challengecomposecontroller%28withmessage_players_completionhandler_%29.md): Deprecated. Provides a view controller that you present to the player to issue an achievement challenge.

# challengeComposeControllerWithPlayers:message:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Provides a challenge compose view controller with preselected player identifiers and a message.

> Use the [challengeComposeControllerWithMessage:players:completion:](challengecomposecontroller%28withmessage_players_completion_%29.md) method instead.

## Declaration

```objectivec
- (UIViewController *) challengeComposeControllerWithPlayers:(NSArray<NSString *> *) playerIDs message:(NSString *) message completionHandler:(GKChallengeComposeCompletionBlock) completionHandler;
```

```objectivec
- (NSViewController *) challengeComposeControllerWithPlayers:(NSArray<NSString *> *) playerIDs message:(NSString *) message completionHandler:(GKChallengeComposeCompletionBlock) completionHandler;
```

## Parameters

- `playerIDs`: An array of `NSString` objects that contains the player identifiers that the challenge is to be sent to.
- `message`: The message that is sent to other players. This message can be edited by the player.
- `completionHandler`: A block to be called after the view controller has been displayed. Contains the reason the handler was called and all player identifiers that the challenge was sent to.

<a id="return-value"></a>

## Return Value

A `UIViewController` view that contains the player identifiers and the challenge message.

<a id="Discussion"></a>

## Discussion

When this method is called, it creates a new background task to handle the request. The method then returns control to your game. Later, when the task is complete, Game Kit calls your completion handler. The completion handler is always called on the main thread.

The view controller returned is presented modally from the top view controller. After the view controller is displayed and the player sends or cancels the challenge, the completion handler block is called.

## See Also

### Issuing Achievement Challenges

- [selectChallengeablePlayers:withCompletionHandler:](selectchallengeableplayers%28__withcompletionhandler_%29.md): Deprecated. Finds the subset of players who can earn an achievement.
- [challengeComposeControllerWithMessage:players:completion:](challengecomposecontroller%28withmessage_players_completion_%29.md): Deprecated. Provides a view controller that you present to the player to issue an achievement challenge.
- [GKChallengeComposeHandler](../gkchallengecomposehandler.md): Deprecated. A completion block that provides information about the player who issues a challenge and the players who receive it.
- [challengeComposeControllerWithMessage:players:completionHandler:](challengecomposecontroller%28withmessage_players_completionhandler_%29.md): Deprecated. Provides a view controller that you present to the player to issue an achievement challenge.
