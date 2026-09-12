> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamecenterviewcontroller/leaderboardidentifier](https://developer.apple.com/documentation/gamekit/gkgamecenterviewcontroller/leaderboardidentifier)

# leaderboardIdentifier (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 14.0) · iPadOS 7.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The named leaderboard that the view controller displays.

> Use [init(leaderboard:playerScope:)](init%28leaderboard_playerscope_%29.md) instead.

## Declaration

```swift
var leaderboardIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The [leaderboardIdentifier](leaderboardidentifier.md) property must either be `nil` or it must match a leaderboard identifier you defined when you created your leaderboards in App Store Connect. If `nil`, the view displays scores for the aggregate leaderboard. Default is `nil`.

When the leaderboard is presented, the value of this property determines which leaderboard content is displayed to the player. As the player changes which leaderboard content they view, the [leaderboardIdentifier](leaderboardidentifier.md) property is automatically updated. For example, to preserve the player’s selections, you can read the [leaderboardIdentifier](leaderboardidentifier.md) property after the screen is dismissed, and set that value the next time you initialize the view controller.

## See Also

### Deprecated Properties

- [viewState](viewstate.md): Deprecated. The content that the Game Center controller displays.
- [leaderboardCategory](leaderboardcategory.md): Deprecated. The named leaderboard that the view controller displays.
- [leaderboardTimeScope](leaderboardtimescope.md): Deprecated. A time filter that restricts the scores to display to the player.

# leaderboardIdentifier (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 14.0) · iPadOS 7.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The named leaderboard that the view controller displays.

> Use [initWithLeaderboard:playerScope:](init%28leaderboard_playerscope_%29.md) instead.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSString * leaderboardIdentifier;
```

<a id="Discussion"></a>

## Discussion

The [leaderboardIdentifier](leaderboardidentifier.md) property must either be `nil` or it must match a leaderboard identifier you defined when you created your leaderboards in App Store Connect. If `nil`, the view displays scores for the aggregate leaderboard. Default is `nil`.

When the leaderboard is presented, the value of this property determines which leaderboard content is displayed to the player. As the player changes which leaderboard content they view, the [leaderboardIdentifier](leaderboardidentifier.md) property is automatically updated. For example, to preserve the player’s selections, you can read the [leaderboardIdentifier](leaderboardidentifier.md) property after the screen is dismissed, and set that value the next time you initialize the view controller.

## See Also

### Deprecated Properties

- [viewState](viewstate.md): Deprecated. The content that the Game Center controller displays.
- [leaderboardCategory](leaderboardcategory.md): Deprecated. The named leaderboard that the view controller displays.
- [leaderboardTimeScope](leaderboardtimescope.md): Deprecated. A time filter that restricts the scores to display to the player.
