> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievementviewcontroller/achievementdelegate](https://developer.apple.com/documentation/gamekit/gkachievementviewcontroller/achievementdelegate)

# achievementDelegate (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 7.0) · iPadOS 4.1+ (deprecated in 7.0) · Mac Catalyst 4.1+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

The achievement view controller’s delegate.

## Declaration

```swift
weak var achievementDelegate: (any GKAchievementViewControllerDelegate)! { get set }
```

<a id="Discussion"></a>

## Discussion

Your game must set the delegate before presenting the view controller.

# achievementDelegate (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 7.0) · iPadOS 4.1+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

The achievement view controller’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak) id<GKAchievementViewControllerDelegate> achievementDelegate;
```

```objectivec
@property (atomic, weak) id<GKAchievementViewControllerDelegate> achievementDelegate;
```

<a id="Discussion"></a>

## Discussion

Your game must set the delegate before presenting the view controller.
