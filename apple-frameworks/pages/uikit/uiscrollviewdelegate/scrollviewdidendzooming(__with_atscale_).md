> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollviewdelegate/scrollviewdidendzooming(_:with:atscale:)](https://developer.apple.com/documentation/uikit/uiscrollviewdelegate/scrollviewdidendzooming(_:with:atscale:))

# scrollViewDidEndZooming(\_:with:atScale:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate when zooming of the content in the scroll view completed.

## Declaration

```swift
optional func scrollViewDidEndZooming(_ scrollView: UIScrollView, with view: UIView?, atScale scale: CGFloat)
```

## Parameters

- `scrollView`: The scroll-view object displaying the content view.
- `view`: The view object representing that part of the content view that needs to be scaled.
- `scale`: The scale factor to use for scaling; this value must be between the limits established by the `UIScrollView` properties [maximumZoomScale](../uiscrollview/maximumzoomscale.md) and [minimumZoomScale](../uiscrollview/minimumzoomscale.md).

<a id="Discussion"></a>

## Discussion

The scroll view also calls this method after any “bounce” animations. It also calls this method after animated changes to the zoom level and after a zoom-related gesture ends (regardless of whether the gesture resulted in a change to the zoom level).

## See Also

### Managing zooming

- [viewForZooming(in:)](viewforzooming%28in_%29.md): Asks the delegate for the view to scale when zooming is about to occur in the scroll view.
- [scrollViewWillBeginZooming(\_:with:)](scrollviewwillbeginzooming%28__with_%29.md): Tells the delegate that zooming of the content in the scroll view is about to commence.
- [scrollViewDidZoom(\_:)](scrollviewdidzoom%28__%29.md): Tells the delegate that the scroll view’s zoom factor changed.

# scrollViewDidEndZooming:withView:atScale: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate when zooming of the content in the scroll view completed.

## Declaration

```objectivec
- (void) scrollViewDidEndZooming:(UIScrollView *) scrollView withView:(UIView *) view atScale:(CGFloat) scale;
```

## Parameters

- `scrollView`: The scroll-view object displaying the content view.
- `view`: The view object representing that part of the content view that needs to be scaled.
- `scale`: The scale factor to use for scaling; this value must be between the limits established by the `UIScrollView` properties [maximumZoomScale](../uiscrollview/maximumzoomscale.md) and [minimumZoomScale](../uiscrollview/minimumzoomscale.md).

<a id="Discussion"></a>

## Discussion

The scroll view also calls this method after any “bounce” animations. It also calls this method after animated changes to the zoom level and after a zoom-related gesture ends (regardless of whether the gesture resulted in a change to the zoom level).

## See Also

### Managing zooming

- [viewForZoomingInScrollView:](viewforzooming%28in_%29.md): Asks the delegate for the view to scale when zooming is about to occur in the scroll view.
- [scrollViewWillBeginZooming:withView:](scrollviewwillbeginzooming%28__with_%29.md): Tells the delegate that zooming of the content in the scroll view is about to commence.
- [scrollViewDidZoom:](scrollviewdidzoom%28__%29.md): Tells the delegate that the scroll view’s zoom factor changed.
