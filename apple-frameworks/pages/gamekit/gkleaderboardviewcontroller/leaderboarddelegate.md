> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboardviewcontroller/leaderboarddelegate](https://developer.apple.com/documentation/gamekit/gkleaderboardviewcontroller/leaderboarddelegate)

# leaderboardDelegate (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** macOS · visionOS

The view controller’s delegate.

## Declaration

```swift
weak var leaderboardDelegate: (any GKLeaderboardViewControllerDelegate)! { get set }
```

<a id="Discussion"></a>

## Discussion

Before displaying the leaderboard, you must set a delegate.

## See Also

### Configuring the Leaderboard View Controller

- [category](category.md): The named leaderboard that is displayed by the view controller.
- [timeScope](timescope.md): A time filter used to restrict which scores are displayed to the player.

# leaderboardDelegate (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The view controller’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak) id<GKLeaderboardViewControllerDelegate> leaderboardDelegate;
```

```objectivec
@property (atomic, weak) id<GKLeaderboardViewControllerDelegate> leaderboardDelegate;
```

<a id="Discussion"></a>

## Discussion

Before displaying the leaderboard, you must set a delegate.

## See Also

### Configuring the Leaderboard View Controller

- [category](category.md): The named leaderboard that is displayed by the view controller.
- [timeScope](timescope.md): A time filter used to restrict which scores are displayed to the player.
