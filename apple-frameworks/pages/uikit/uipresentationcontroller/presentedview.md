> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipresentationcontroller/presentedview](https://developer.apple.com/documentation/uikit/uipresentationcontroller/presentedview)

# presentedView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view to be animated by the animator objects during a transition.

## Declaration

```swift
var presentedView: UIView? { get }
```

<a id="return-value"></a>

## Return Value

The view to present. This view must be either the presented view controller’s view or an ancestor of that view.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns the presented view controller’s view. If you want to animate a different view, you may override this method and return that view. The view you specify must either be the presented view controller’s view or must be one of its ancestors.

The view returned by this method is given to the animator objects, which are responsible for animating it onscreen. The animator objects retrieve the view using the [view(forKey:)](../uiviewcontrollercontexttransitioning/view%28forkey_%29.md) method of the context object provided by UIKit.

UIKit calls this method multiple times during the course of a presentation, so your implementation should return the appropriate view as quickly as possible. Do not use this method to actually configure your view hierarchy. If you intend to return a custom view, configure your view hierarchy in the [presentationTransitionWillBegin()](presentationtransitionwillbegin%28%29.md) method.

## See Also

### Getting the presentation objects

- [presentingViewController](presentingviewcontroller.md): The view controller that is the starting point for the presentation.
- [presentedViewController](presentedviewcontroller.md): The view controller being presented.
- [containerView](containerview.md): The view in which the presentation occurs.

# presentedView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view to be animated by the animator objects during a transition.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIView * presentedView;
```

<a id="return-value"></a>

## Return Value

The view to present. This view must be either the presented view controller’s view or an ancestor of that view.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns the presented view controller’s view. If you want to animate a different view, you may override this method and return that view. The view you specify must either be the presented view controller’s view or must be one of its ancestors.

The view returned by this method is given to the animator objects, which are responsible for animating it onscreen. The animator objects retrieve the view using the [viewForKey:](../uiviewcontrollercontexttransitioning/view%28forkey_%29.md) method of the context object provided by UIKit.

UIKit calls this method multiple times during the course of a presentation, so your implementation should return the appropriate view as quickly as possible. Do not use this method to actually configure your view hierarchy. If you intend to return a custom view, configure your view hierarchy in the [presentationTransitionWillBegin](presentationtransitionwillbegin%28%29.md) method.

## See Also

### Getting the presentation objects

- [presentingViewController](presentingviewcontroller.md): The view controller that is the starting point for the presentation.
- [presentedViewController](presentedviewcontroller.md): The view controller being presented.
- [containerView](containerview.md): The view in which the presentation occurs.
