> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboardviewcontroller/category](https://developer.apple.com/documentation/gamekit/gkleaderboardviewcontroller/category)

# category (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** macOS · visionOS

The named leaderboard that is displayed by the view controller.

## Declaration

```swift
var category: String! { get set }
```

<a id="Discussion"></a>

## Discussion

The `category` property must either be `nil` or it must match a leaderboard identifier for a leaderboard you defined in App Store Connect. If `nil`, the view displays scores for the default leaderboard. Default is `nil`.

When the view controller is presented, the initial leaderboard shown is based on the value of this property. If the player changes which leaderboard they are viewing, the `category` property is automatically updated. For example, you can read the `category` property after the screen is dismissed, and set that value the next time you initialize a new leaderboard view controller.

## See Also

### Configuring the Leaderboard View Controller

- [leaderboardDelegate](leaderboarddelegate.md): The view controller’s delegate.
- [timeScope](timescope.md): A time filter used to restrict which scores are displayed to the player.

# category (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The named leaderboard that is displayed by the view controller.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * category;
```

```objectivec
@property (atomic, copy) NSString * category;
```

<a id="Discussion"></a>

## Discussion

The `category` property must either be `nil` or it must match a leaderboard identifier for a leaderboard you defined in App Store Connect. If `nil`, the view displays scores for the default leaderboard. Default is `nil`.

When the view controller is presented, the initial leaderboard shown is based on the value of this property. If the player changes which leaderboard they are viewing, the `category` property is automatically updated. For example, you can read the `category` property after the screen is dismissed, and set that value the next time you initialize a new leaderboard view controller.

## See Also

### Configuring the Leaderboard View Controller

- [leaderboardDelegate](leaderboarddelegate.md): The view controller’s delegate.
- [timeScope](timescope.md): A time filter used to restrict which scores are displayed to the player.
