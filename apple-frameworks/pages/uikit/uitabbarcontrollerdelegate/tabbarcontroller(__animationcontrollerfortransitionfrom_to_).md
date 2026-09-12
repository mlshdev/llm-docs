> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:animationcontrollerfortransitionfrom:to:)](https://developer.apple.com/documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:animationcontrollerfortransitionfrom:to:))

# tabBarController(\_:animationControllerForTransitionFrom:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS

Called to allow the delegate to return a [UIViewControllerAnimatedTransitioning](../uiviewcontrolleranimatedtransitioning.md) delegate object for use during a noninteractive tab bar view controller transition.

## Declaration

```swift
optional func tabBarController(_ tabBarController: UITabBarController, animationControllerForTransitionFrom fromVC: UIViewController, to toVC: UIViewController) -> (any UIViewControllerAnimatedTransitioning)?
```

## Parameters

- `tabBarController`: The tab bar controller whose view controller is transitioning.
- `fromVC`: The currently visible view controller.
- `toVC`: The view controller intended to be visible after the transition ends.

<a id="return-value"></a>

## Return Value

The [UIViewControllerAnimatedTransitioning](../uiviewcontrolleranimatedtransitioning.md) delegate object responsible for managing the tab bar view controller transition animation.

## See Also

### Supporting custom tab bar transition animations

- [tabBarController(\_:interactionControllerFor:)](tabbarcontroller%28__interactioncontrollerfor_%29.md): Called to allow the delegate to return a [UIViewControllerInteractiveTransitioning](../uiviewcontrollerinteractivetransitioning.md) delegate object for use during an animated tab bar transition.

# tabBarController:animationControllerForTransitionFromViewController:toViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS

Called to allow the delegate to return a [UIViewControllerAnimatedTransitioning](../uiviewcontrolleranimatedtransitioning.md) delegate object for use during a noninteractive tab bar view controller transition.

## Declaration

```objectivec
- (id<UIViewControllerAnimatedTransitioning>) tabBarController:(UITabBarController *) tabBarController animationControllerForTransitionFromViewController:(UIViewController *) fromVC toViewController:(UIViewController *) toVC;
```

## Parameters

- `tabBarController`: The tab bar controller whose view controller is transitioning.
- `fromVC`: The currently visible view controller.
- `toVC`: The view controller intended to be visible after the transition ends.

<a id="return-value"></a>

## Return Value

The [UIViewControllerAnimatedTransitioning](../uiviewcontrolleranimatedtransitioning.md) delegate object responsible for managing the tab bar view controller transition animation.

## See Also

### Supporting custom tab bar transition animations

- [tabBarController:interactionControllerForAnimationController:](tabbarcontroller%28__interactioncontrollerfor_%29.md): Called to allow the delegate to return a [UIViewControllerInteractiveTransitioning](../uiviewcontrollerinteractivetransitioning.md) delegate object for use during an animated tab bar transition.
