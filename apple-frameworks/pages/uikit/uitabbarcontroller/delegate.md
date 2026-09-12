> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/delegate](https://developer.apple.com/documentation/uikit/uitabbarcontroller/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The tab bar controller’s delegate object.

## Declaration

```swift
weak var delegate: (any UITabBarControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

You can use the delegate object to track changes to the items in the tab bar and to monitor the selection of tabs. The delegate object you provide should conform to the [UITabBarControllerDelegate](../uitabbarcontrollerdelegate.md) protocol. The default value for this property is `nil`.

## See Also

### Customizing the tab bar behavior

- [UITabBarControllerDelegate](../uitabbarcontrollerdelegate.md): A set of methods you implement to customize the behavior of a tab bar.
- [tabBarMinimizeBehavior](tabbarminimizebehavior.md): Defines the minimize behavior for the tab bar, if it is supported.
- [UITabBarController.MinimizeBehavior](minimizebehavior.md)

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The tab bar controller’s delegate object.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UITabBarControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

You can use the delegate object to track changes to the items in the tab bar and to monitor the selection of tabs. The delegate object you provide should conform to the [UITabBarControllerDelegate](../uitabbarcontrollerdelegate.md) protocol. The default value for this property is `nil`.

## See Also

### Customizing the tab bar behavior

- [UITabBarControllerDelegate](../uitabbarcontrollerdelegate.md): A set of methods you implement to customize the behavior of a tab bar.
- [tabBarMinimizeBehavior](tabbarminimizebehavior.md): Defines the minimize behavior for the tab bar, if it is supported.
- [UITabBarMinimizeBehavior](minimizebehavior.md)
