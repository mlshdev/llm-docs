> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrolleranimatedtransitioning/animatetransition(using:)](https://developer.apple.com/documentation/uikit/uiviewcontrolleranimatedtransitioning/animatetransition(using:))

# animateTransition(using:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells your animator object to perform the transition animations.

## Declaration

```swift
func animateTransition(using transitionContext: any UIViewControllerContextTransitioning)
```

## Parameters

- `transitionContext`: The context object containing information about the transition.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when presenting or dismissing a view controller. Use this method to configure the animations associated with your custom transition. You can use view-based animations or Core Animation to configure your animations.

All animations must take place in the view specified by the [containerView](../uiviewcontrollercontexttransitioning/containerview.md) property of `transitionContext`. Add the view being presented (or revealed if the transition involves dismissing a view controller) to the container view’s hierarchy and set up any animations you want to make that view move into position. If you want to draw to the screen directly without a view, use this method to configure a [CADisplayLink](../../quartzcore/cadisplaylink.md) object instead.

You can retrieve the view controllers involved in the transition from the [viewController(forKey:)](../uiviewcontrollercontexttransitioning/viewcontroller%28forkey_%29.md) method of `transitionContext`. For more information about the information provided by the context object, see [UIViewControllerContextTransitioning](../uiviewcontrollercontexttransitioning.md).

## See Also

### Performing a transition

- [animationEnded(\_:)](animationended%28__%29.md): Tells your animator object that the transition animations have finished.

# animateTransition: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells your animator object to perform the transition animations.

## Declaration

```objectivec
- (void) animateTransition:(id<UIViewControllerContextTransitioning>) transitionContext;
```

## Parameters

- `transitionContext`: The context object containing information about the transition.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when presenting or dismissing a view controller. Use this method to configure the animations associated with your custom transition. You can use view-based animations or Core Animation to configure your animations.

All animations must take place in the view specified by the [containerView](../uiviewcontrollercontexttransitioning/containerview.md) property of `transitionContext`. Add the view being presented (or revealed if the transition involves dismissing a view controller) to the container view’s hierarchy and set up any animations you want to make that view move into position. If you want to draw to the screen directly without a view, use this method to configure a [CADisplayLink](../../quartzcore/cadisplaylink.md) object instead.

You can retrieve the view controllers involved in the transition from the [viewControllerForKey:](../uiviewcontrollercontexttransitioning/viewcontroller%28forkey_%29.md) method of `transitionContext`. For more information about the information provided by the context object, see [UIViewControllerContextTransitioning](../uiviewcontrollercontexttransitioning.md).

## See Also

### Performing a transition

- [animationEnded:](animationended%28__%29.md): Tells your animator object that the transition animations have finished.
