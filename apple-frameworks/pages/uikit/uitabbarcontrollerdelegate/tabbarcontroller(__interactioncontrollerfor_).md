> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:interactioncontrollerfor:)](https://developer.apple.com/documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:interactioncontrollerfor:))

# tabBarController(\_:interactionControllerFor:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS

Called to allow the delegate to return a [UIViewControllerInteractiveTransitioning](../uiviewcontrollerinteractivetransitioning.md) delegate object for use during an animated tab bar transition.

## Declaration

```swift
optional func tabBarController(_ tabBarController: UITabBarController, interactionControllerFor animationController: any UIViewControllerAnimatedTransitioning) -> (any UIViewControllerInteractiveTransitioning)?
```

## Parameters

- `tabBarController`: The tab bar controller participating in the interactive, animated transition.
- `animationController`: The noninteractive animation controller

<a id="return-value"></a>

## Return Value

The [UIViewControllerInteractiveTransitioning](../uiviewcontrollerinteractivetransitioning.md) delegate object responsible for managing the user interaction in an animated tab bar transition.

## See Also

### Supporting custom tab bar transition animations

- [tabBarController(\_:animationControllerForTransitionFrom:to:)](tabbarcontroller%28__animationcontrollerfortransitionfrom_to_%29.md): Called to allow the delegate to return a [UIViewControllerAnimatedTransitioning](../uiviewcontrolleranimatedtransitioning.md) delegate object for use during a noninteractive tab bar view controller transition.

# tabBarController:interactionControllerForAnimationController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS

Called to allow the delegate to return a [UIViewControllerInteractiveTransitioning](../uiviewcontrollerinteractivetransitioning.md) delegate object for use during an animated tab bar transition.

## Declaration

```objectivec
- (id<UIViewControllerInteractiveTransitioning>) tabBarController:(UITabBarController *) tabBarController interactionControllerForAnimationController:(id<UIViewControllerAnimatedTransitioning>) animationController;
```

## Parameters

- `tabBarController`: The tab bar controller participating in the interactive, animated transition.
- `animationController`: The noninteractive animation controller

<a id="return-value"></a>

## Return Value

The [UIViewControllerInteractiveTransitioning](../uiviewcontrollerinteractivetransitioning.md) delegate object responsible for managing the user interaction in an animated tab bar transition.

## See Also

### Supporting custom tab bar transition animations

- [tabBarController:animationControllerForTransitionFromViewController:toViewController:](tabbarcontroller%28__animationcontrollerfortransitionfrom_to_%29.md): Called to allow the delegate to return a [UIViewControllerAnimatedTransitioning](../uiviewcontrolleranimatedtransitioning.md) delegate object for use during a noninteractive tab bar view controller transition.
