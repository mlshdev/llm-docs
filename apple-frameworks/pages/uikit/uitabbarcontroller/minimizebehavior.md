> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/minimizebehavior](https://developer.apple.com/documentation/uikit/uitabbarcontroller/minimizebehavior)

# UITabBarController.MinimizeBehavior (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
enum MinimizeBehavior
```

## Topics

### Enumeration Cases

- [UITabBarController.MinimizeBehavior.automatic](minimizebehavior/automatic.md): Resolves to the system default minimize behavior.
- [UITabBarController.MinimizeBehavior.never](minimizebehavior/never.md): The tab bar does not minimize.
- [UITabBarController.MinimizeBehavior.onScrollDown](minimizebehavior/onscrolldown.md): The tab bar minimizes when scrolling down, and expands when scrolling back up.
- [UITabBarController.MinimizeBehavior.onScrollUp](minimizebehavior/onscrollup.md): The tab bar minimizes when scrolling up, and expands when scrolling back down. Recommended if the scroll view content is aligned to the bottom.

### Initializers

- [init(rawValue:)](minimizebehavior/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing the tab bar behavior

- [delegate](delegate.md): The tab bar controller’s delegate object.
- [UITabBarControllerDelegate](../uitabbarcontrollerdelegate.md): A set of methods you implement to customize the behavior of a tab bar.
- [tabBarMinimizeBehavior](tabbarminimizebehavior.md): Defines the minimize behavior for the tab bar, if it is supported.

# UITabBarMinimizeBehavior (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
enum UITabBarMinimizeBehavior : NSInteger;
```

## Topics

### Enumeration Cases

- [UITabBarMinimizeBehaviorAutomatic](minimizebehavior/automatic.md): Resolves to the system default minimize behavior.
- [UITabBarMinimizeBehaviorNever](minimizebehavior/never.md): The tab bar does not minimize.
- [UITabBarMinimizeBehaviorOnScrollDown](minimizebehavior/onscrolldown.md): The tab bar minimizes when scrolling down, and expands when scrolling back up.
- [UITabBarMinimizeBehaviorOnScrollUp](minimizebehavior/onscrollup.md): The tab bar minimizes when scrolling up, and expands when scrolling back down. Recommended if the scroll view content is aligned to the bottom.

## See Also

### Customizing the tab bar behavior

- [delegate](delegate.md): The tab bar controller’s delegate object.
- [UITabBarControllerDelegate](../uitabbarcontrollerdelegate.md): A set of methods you implement to customize the behavior of a tab bar.
- [tabBarMinimizeBehavior](tabbarminimizebehavior.md): Defines the minimize behavior for the tab bar, if it is supported.
