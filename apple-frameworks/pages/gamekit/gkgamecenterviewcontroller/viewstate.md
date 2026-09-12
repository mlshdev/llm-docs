> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamecenterviewcontroller/viewstate](https://developer.apple.com/documentation/gamekit/gkgamecenterviewcontroller/viewstate)

# viewState (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 14.0) · iPadOS 6.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.9+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The content that the Game Center controller displays.

> Use [init(state:)](init%28state_%29.md) instead.

## Declaration

```swift
var viewState: GKGameCenterViewControllerState { get set }
```

<a id="Discussion"></a>

## Discussion

See [GKGameCenterViewControllerState](../gkgamecenterviewcontrollerstate.md) for possible values. When you first present the Game Center view controller, the content displayed by the view controller is determined by this property. If the player navigates to different content, the view state is automatically updated. For example, to preserve the player’s selections, you can read the [viewState](viewstate.md) property after the screen is dismissed, and set that value the next time you initialize the view controller.

## See Also

### Deprecated Properties

- [leaderboardIdentifier](leaderboardidentifier.md): Deprecated. The named leaderboard that the view controller displays.
- [leaderboardCategory](leaderboardcategory.md): Deprecated. The named leaderboard that the view controller displays.
- [leaderboardTimeScope](leaderboardtimescope.md): Deprecated. A time filter that restricts the scores to display to the player.

# viewState (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 14.0) · iPadOS 6.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.9+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The content that the Game Center controller displays.

> Use [initWithState:](init%28state_%29.md) instead.

## Declaration

```objectivec
@property (nonatomic, assign) GKGameCenterViewControllerState viewState;
```

```objectivec
@property (atomic, assign) GKGameCenterViewControllerState viewState;
```

<a id="Discussion"></a>

## Discussion

See [GKGameCenterViewControllerState](../gkgamecenterviewcontrollerstate.md) for possible values. When you first present the Game Center view controller, the content displayed by the view controller is determined by this property. If the player navigates to different content, the view state is automatically updated. For example, to preserve the player’s selections, you can read the [viewState](viewstate.md) property after the screen is dismissed, and set that value the next time you initialize the view controller.

## See Also

### Deprecated Properties

- [leaderboardIdentifier](leaderboardidentifier.md): Deprecated. The named leaderboard that the view controller displays.
- [leaderboardCategory](leaderboardcategory.md): Deprecated. The named leaderboard that the view controller displays.
- [leaderboardTimeScope](leaderboardtimescope.md): Deprecated. A time filter that restricts the scores to display to the player.
