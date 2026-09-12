> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipresentationcontroller/frameofpresentedviewincontainerview](https://developer.apple.com/documentation/uikit/uipresentationcontroller/frameofpresentedviewincontainerview)

# frameOfPresentedViewInContainerView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The frame rectangle to assign to the presented view at the end of the animations.

## Declaration

```swift
var frameOfPresentedViewInContainerView: CGRect { get }
```

<a id="return-value"></a>

## Return Value

The rectangle of the presented view controller’s view, specified in the container view’s coordinate system.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns the frame rectangle of the container view, which results in the presented view controller’s content occupying the entire presentation space. You can override this method and return a different frame rectangle as needed. For example, you might specify a smaller frame rectangle if you want some of the underlying content to show around the edges of the presented view.

UIKit calls this method multiple times during the course of a presentation, so your implementation should return the same frame rectangle each time. Do not use this method to make changes to your view hierarchy or perform other one-time tasks.

## See Also

### Adjusting the size and layout of the presentation

- [containerViewWillLayoutSubviews()](containerviewwilllayoutsubviews%28%29.md): Notifies the presentation controller that layout is about to begin on the views of the container view.
- [containerViewDidLayoutSubviews()](containerviewdidlayoutsubviews%28%29.md): Notifies the presentation controller when layout ends on the views of the container view.

# frameOfPresentedViewInContainerView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The frame rectangle to assign to the presented view at the end of the animations.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect frameOfPresentedViewInContainerView;
```

<a id="return-value"></a>

## Return Value

The rectangle of the presented view controller’s view, specified in the container view’s coordinate system.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns the frame rectangle of the container view, which results in the presented view controller’s content occupying the entire presentation space. You can override this method and return a different frame rectangle as needed. For example, you might specify a smaller frame rectangle if you want some of the underlying content to show around the edges of the presented view.

UIKit calls this method multiple times during the course of a presentation, so your implementation should return the same frame rectangle each time. Do not use this method to make changes to your view hierarchy or perform other one-time tasks.

## See Also

### Adjusting the size and layout of the presentation

- [containerViewWillLayoutSubviews](containerviewwilllayoutsubviews%28%29.md): Notifies the presentation controller that layout is about to begin on the views of the container view.
- [containerViewDidLayoutSubviews](containerviewdidlayoutsubviews%28%29.md): Notifies the presentation controller when layout ends on the views of the container view.
