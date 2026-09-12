> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipresentationcontroller/presentedviewcontroller](https://developer.apple.com/documentation/uikit/uipresentationcontroller/presentedviewcontroller)

# presentedViewController (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view controller being presented.

## Declaration

```swift
var presentedViewController: UIViewController { get }
```

<a id="Discussion"></a>

## Discussion

This object corresponds to the one passed as the first parameter of the [present(\_:animated:completion:)](../uiviewcontroller/present%28__animated_completion_%29.md) method. The successful conclusion of the presentation process causes this view controller’s content to be displayed onscreen.

## See Also

### Getting the presentation objects

- [presentingViewController](presentingviewcontroller.md): The view controller that is the starting point for the presentation.
- [containerView](containerview.md): The view in which the presentation occurs.
- [presentedView](presentedview.md): The view to be animated by the animator objects during a transition.

# presentedViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view controller being presented.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) UIViewController * presentedViewController;
```

<a id="Discussion"></a>

## Discussion

This object corresponds to the one passed as the first parameter of the [presentViewController:animated:completion:](../uiviewcontroller/present%28__animated_completion_%29.md) method. The successful conclusion of the presentation process causes this view controller’s content to be displayed onscreen.

## See Also

### Getting the presentation objects

- [presentingViewController](presentingviewcontroller.md): The view controller that is the starting point for the presentation.
- [containerView](containerview.md): The view in which the presentation occurs.
- [presentedView](presentedview.md): The view to be animated by the animator objects during a transition.
