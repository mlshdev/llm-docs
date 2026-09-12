> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipresentationcontroller/containerview](https://developer.apple.com/documentation/uikit/uipresentationcontroller/containerview)

# containerView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view in which the presentation occurs.

## Declaration

```swift
var containerView: UIView? { get }
```

<a id="Discussion"></a>

## Discussion

UIKit sets the value of this property shortly after receiving the presentation controller from your transitioning delegate. The container view is always an ancestor of the presented view controller’s view. During transition animations, the container view also contains the presenting view controller’s view. When adding custom views to a presentation, add them to the container view.

If your transition also employs custom animator objects, those objects can get this container view from the [containerView](../uiviewcontrollercontexttransitioning/containerview.md) property of the context object provided by UIKit.

## See Also

### Getting the presentation objects

- [presentingViewController](presentingviewcontroller.md): The view controller that is the starting point for the presentation.
- [presentedViewController](presentedviewcontroller.md): The view controller being presented.
- [presentedView](presentedview.md): The view to be animated by the animator objects during a transition.

# containerView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view in which the presentation occurs.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIView * containerView;
```

<a id="Discussion"></a>

## Discussion

UIKit sets the value of this property shortly after receiving the presentation controller from your transitioning delegate. The container view is always an ancestor of the presented view controller’s view. During transition animations, the container view also contains the presenting view controller’s view. When adding custom views to a presentation, add them to the container view.

If your transition also employs custom animator objects, those objects can get this container view from the [containerView](../uiviewcontrollercontexttransitioning/containerview.md) property of the context object provided by UIKit.

## See Also

### Getting the presentation objects

- [presentingViewController](presentingviewcontroller.md): The view controller that is the starting point for the presentation.
- [presentedViewController](presentedviewcontroller.md): The view controller being presented.
- [presentedView](presentedview.md): The view to be animated by the animator objects during a transition.
