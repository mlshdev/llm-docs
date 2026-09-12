> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/entry/challengecomposecontroller(withmessage:players:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkleaderboard/entry/challengecomposecontroller(withmessage:players:completionhandler:))

# challengeComposeController(withMessage:players:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Provides a challenge compose view controller with preselected player identifiers and a preformatted, player-editable message.

## Declaration

```swift
func challengeComposeController(withMessage message: String?, players: [GKPlayer]?, completionHandler: GKChallengeComposeCompletionBlock? = nil) -> UIViewController
```

```swift
func challengeComposeController(withMessage message: String?, players: [GKPlayer]?, completionHandler: GKChallengeComposeCompletionBlock? = nil) -> NSViewController
```

## Parameters

- `message`: The preformatted, player-editable message that GameKit sends to the players in the challenge.
- `players`: Players to invite to the challenge.
- `completionHandler`: A block that GameKit calls after it displays the view controller.

<a id="return-value"></a>

## Return Value

A [UIViewController](../../../uikit/uiviewcontroller.md) containing the player identifiers and a player-editable message.

<a id="Discussion"></a>

## Discussion

GameKit presents the returned view controller modally on the top view controller. After GameKit displays the view controller and the player sends or cancels the challenge, GameKit calls the completion handler block on the main thread.

## See Also

### Presenting Challenges

- [challengeComposeController(withMessage:players:completion:)](challengecomposecontroller%28withmessage_players_completion_%29.md): Deprecated. Provides a challenge compose view controller with preselected player identifiers and a preformatted, player-editable message.
- [GKChallengeComposeHandler](../../gkchallengecomposehandler.md): Deprecated. A completion block that provides information about the player who issues a challenge and the players who receive it.

# challengeComposeControllerWithMessage:players:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Provides a challenge compose view controller with preselected player identifiers and a preformatted, player-editable message.

## Declaration

```objectivec
- (UIViewController *) challengeComposeControllerWithMessage:(NSString *) message players:(NSArray<GKPlayer *> *) players completionHandler:(GKChallengeComposeCompletionBlock) completionHandler;
```

```objectivec
- (NSViewController *) challengeComposeControllerWithMessage:(NSString *) message players:(NSArray<GKPlayer *> *) players completionHandler:(GKChallengeComposeCompletionBlock) completionHandler;
```

## Parameters

- `message`: The preformatted, player-editable message that GameKit sends to the players in the challenge.
- `players`: Players to invite to the challenge.
- `completionHandler`: A block that GameKit calls after it displays the view controller.

<a id="return-value"></a>

## Return Value

A [UIViewController](../../../uikit/uiviewcontroller.md) containing the player identifiers and a player-editable message.

<a id="Discussion"></a>

## Discussion

GameKit presents the returned view controller modally on the top view controller. After GameKit displays the view controller and the player sends or cancels the challenge, GameKit calls the completion handler block on the main thread.

## See Also

### Presenting Challenges

- [challengeComposeControllerWithMessage:players:completion:](challengecomposecontroller%28withmessage_players_completion_%29.md): Deprecated. Provides a challenge compose view controller with preselected player identifiers and a preformatted, player-editable message.
- [GKChallengeComposeHandler](../../gkchallengecomposehandler.md): Deprecated. A completion block that provides information about the player who issues a challenge and the players who receive it.
