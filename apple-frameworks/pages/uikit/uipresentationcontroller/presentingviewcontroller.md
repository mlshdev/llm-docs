> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipresentationcontroller/presentingviewcontroller](https://developer.apple.com/documentation/uikit/uipresentationcontroller/presentingviewcontroller)

# presentingViewController (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view controller that is the starting point for the presentation.

## Declaration

```swift
var presentingViewController: UIViewController { get }
```

<a id="Discussion"></a>

## Discussion

The object in this property could be the root view controller of the window, a parent view controller that is marked as defining the current context, or the last view controller that was presented onscreen. This view controller may or may not be the same one whose [present(\_:animated:completion:)](../uiviewcontroller/present%28__animated_completion_%29.md) method was called to initiate the presentation process. It may also not be the view controller used to initialize your presentation controller.

## See Also

### Getting the presentation objects

- [presentedViewController](presentedviewcontroller.md): The view controller being presented.
- [containerView](containerview.md): The view in which the presentation occurs.
- [presentedView](presentedview.md): The view to be animated by the animator objects during a transition.

# presentingViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view controller that is the starting point for the presentation.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) UIViewController * presentingViewController;
```

<a id="Discussion"></a>

## Discussion

The object in this property could be the root view controller of the window, a parent view controller that is marked as defining the current context, or the last view controller that was presented onscreen. This view controller may or may not be the same one whose [presentViewController:animated:completion:](../uiviewcontroller/present%28__animated_completion_%29.md) method was called to initiate the presentation process. It may also not be the view controller used to initialize your presentation controller.

## See Also

### Getting the presentation objects

- [presentedViewController](presentedviewcontroller.md): The view controller being presented.
- [containerView](containerview.md): The view in which the presentation occurs.
- [presentedView](presentedview.md): The view to be animated by the animator objects during a transition.
