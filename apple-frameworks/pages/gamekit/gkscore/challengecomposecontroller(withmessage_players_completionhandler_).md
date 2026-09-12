> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkscore/challengecomposecontroller(withmessage:players:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkscore/challengecomposecontroller(withmessage:players:completionhandler:))

# challengeComposeController(withMessage:players:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.10+ (deprecated in 14.0) · tvOS 9.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Provides a challenge compose view controller with pre-selected player identifiers and a preformatted, player-editable message.

## Declaration

```swift
func challengeComposeController(withMessage message: String?, players: [GKPlayer]?, completionHandler: GKChallengeComposeCompletionBlock? = nil) -> UIViewController
```

```swift
func challengeComposeController(withMessage message: String?, players: [GKPlayer]?, completionHandler: GKChallengeComposeCompletionBlock? = nil) -> NSViewController
```

## Parameters

- `message`: The preformatted, player-editable message that is being sent to other players.
- `players`: An array of [GKPlayer](../gkplayer.md) objects that contains the player identifiers that the challenge is to be sent to.
- `completionHandler`: A block to be called after the view controller has been displayed. Contains the reason the handler was called and all player identifiers that the challenge was sent to.

<a id="return-value"></a>

## Return Value

A [UIViewController](../../uikit/uiviewcontroller.md) view containing the player identifiers and a player-editable message.

<a id="Discussion"></a>

## Discussion

The view controller returned is presented modally from the top view controller. After the view controller is displayed and the player sends or cancels the challenge, the completion handler block is called.

When this method is called, it creates a new background task to handle the request. The method then returns control to your game. Later, when the task is complete, GameKit calls your completion handler. The completion handler is always called on the main thread.

## See Also

### Issuing a Score Challenge

- [challengeComposeController(withMessage:players:completion:)](challengecomposecontroller%28withmessage_players_completion_%29.md): Deprecated. Provides a challenge compose view controller with preselected player identifiers and a preformatted, player-editable message.
- [GKChallengeComposeHandler](../gkchallengecomposehandler.md): Deprecated. A completion block that provides information about the player who issues a challenge and the players who receive it.
- [challengeComposeController(withPlayers:message:completionHandler:)](challengecomposecontroller%28withplayers_message_completionhandler_%29.md): Deprecated. Provides a challenge compose view controller with pre-selected player identifiers and a preformatted, player-editable message.

# challengeComposeControllerWithMessage:players:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.10+ (deprecated in 14.0) · tvOS 9.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Provides a challenge compose view controller with pre-selected player identifiers and a preformatted, player-editable message.

## Declaration

```objectivec
- (UIViewController *) challengeComposeControllerWithMessage:(NSString *) message players:(NSArray<GKPlayer *> *) players completionHandler:(GKChallengeComposeCompletionBlock) completionHandler;
```

```objectivec
- (NSViewController *) challengeComposeControllerWithMessage:(NSString *) message players:(NSArray<GKPlayer *> *) players completionHandler:(GKChallengeComposeCompletionBlock) completionHandler;
```

## Parameters

- `message`: The preformatted, player-editable message that is being sent to other players.
- `players`: An array of [GKPlayer](../gkplayer.md) objects that contains the player identifiers that the challenge is to be sent to.
- `completionHandler`: A block to be called after the view controller has been displayed. Contains the reason the handler was called and all player identifiers that the challenge was sent to.

<a id="return-value"></a>

## Return Value

A [UIViewController](../../uikit/uiviewcontroller.md) view containing the player identifiers and a player-editable message.

<a id="Discussion"></a>

## Discussion

The view controller returned is presented modally from the top view controller. After the view controller is displayed and the player sends or cancels the challenge, the completion handler block is called.

When this method is called, it creates a new background task to handle the request. The method then returns control to your game. Later, when the task is complete, GameKit calls your completion handler. The completion handler is always called on the main thread.

## See Also

### Issuing a Score Challenge

- [challengeComposeControllerWithMessage:players:completion:](challengecomposecontroller%28withmessage_players_completion_%29.md): Deprecated. Provides a challenge compose view controller with preselected player identifiers and a preformatted, player-editable message.
- [GKChallengeComposeHandler](../gkchallengecomposehandler.md): Deprecated. A completion block that provides information about the player who issues a challenge and the players who receive it.
- [challengeComposeControllerWithPlayers:message:completionHandler:](challengecomposecontroller%28withplayers_message_completionhandler_%29.md): Deprecated. Provides a challenge compose view controller with pre-selected player identifiers and a preformatted, player-editable message.
