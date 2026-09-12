> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievementviewcontrollerdelegate/achievementviewcontrollerdidfinish(_:)](https://developer.apple.com/documentation/gamekit/gkachievementviewcontrollerdelegate/achievementviewcontrollerdidfinish(_:))

# achievementViewControllerDidFinish(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 7.0) · iPadOS 4.1+ (deprecated in 7.0) · Mac Catalyst 4.1+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Called when the user dismisses the achievements user interface.

## Declaration

```swift
func achievementViewControllerDidFinish(_ viewController: GKAchievementViewController!)
```

## Parameters

- `viewController`: The achievement view controller whose interface was dismissed by the player.

<a id="Discussion"></a>

## Discussion

Your delegate should dismiss the view controller. If your game paused any gameplay or other activities, it can restart those services in this method.

# achievementViewControllerDidFinish: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 7.0) · iPadOS 4.1+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Called when the user dismisses the achievements user interface.

## Declaration

```objectivec
- (void) achievementViewControllerDidFinish:(GKAchievementViewController *) viewController;
```

## Parameters

- `viewController`: The achievement view controller whose interface was dismissed by the player.

<a id="Discussion"></a>

## Discussion

Your delegate should dismiss the view controller. If your game paused any gameplay or other activities, it can restart those services in this method.
