> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitabbarcontroller/tabbarminimizebehavior

# tabBarMinimizeBehavior (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Defines the minimize behavior for the tab bar, if it is supported.

## Declaration

```swift
var tabBarMinimizeBehavior: UITabBarController.MinimizeBehavior { get set }
```

<a id="discussion"></a>

## Discussion

The default value for this property is `UITabBarMinimizeBehaviorAutomatic`.

## See Also

### Customizing the tab bar behavior

- [delegate](delegate.md): The tab bar controller’s delegate object.
- [UITabBarControllerDelegate](../uitabbarcontrollerdelegate.md): A set of methods you implement to customize the behavior of a tab bar.
- [UITabBarController.MinimizeBehavior](minimizebehavior.md)

# tabBarMinimizeBehavior (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Defines the minimize behavior for the tab bar, if it is supported.

## Declaration

```objectivec
@property (nonatomic, assign) UITabBarMinimizeBehavior tabBarMinimizeBehavior;
```

<a id="discussion"></a>

## Discussion

The default value for this property is `UITabBarMinimizeBehaviorAutomatic`.

## See Also

### Customizing the tab bar behavior

- [delegate](delegate.md): The tab bar controller’s delegate object.
- [UITabBarControllerDelegate](../uitabbarcontrollerdelegate.md): A set of methods you implement to customize the behavior of a tab bar.
- [UITabBarMinimizeBehavior](minimizebehavior.md)
