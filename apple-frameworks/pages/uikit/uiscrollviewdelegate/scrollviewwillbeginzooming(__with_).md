> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollviewdelegate/scrollviewwillbeginzooming(_:with:)](https://developer.apple.com/documentation/uikit/uiscrollviewdelegate/scrollviewwillbeginzooming(_:with:))

# scrollViewWillBeginZooming(\_:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that zooming of the content in the scroll view is about to commence.

## Declaration

```swift
optional func scrollViewWillBeginZooming(_ scrollView: UIScrollView, with view: UIView?)
```

## Parameters

- `scrollView`: The scroll-view object displaying the content view.
- `view`: The view object whose content is about to be zoomed.

<a id="Discussion"></a>

## Discussion

This method is called at the beginning of zoom gestures and in cases where a change in zoom level is to be animated. You can use this method to store state information or perform any additional actions prior to zooming the view’s content.

## See Also

### Managing zooming

- [viewForZooming(in:)](viewforzooming%28in_%29.md): Asks the delegate for the view to scale when zooming is about to occur in the scroll view.
- [scrollViewDidEndZooming(\_:with:atScale:)](scrollviewdidendzooming%28__with_atscale_%29.md): Tells the delegate when zooming of the content in the scroll view completed.
- [scrollViewDidZoom(\_:)](scrollviewdidzoom%28__%29.md): Tells the delegate that the scroll view’s zoom factor changed.

# scrollViewWillBeginZooming:withView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that zooming of the content in the scroll view is about to commence.

## Declaration

```objectivec
- (void) scrollViewWillBeginZooming:(UIScrollView *) scrollView withView:(UIView *) view;
```

## Parameters

- `scrollView`: The scroll-view object displaying the content view.
- `view`: The view object whose content is about to be zoomed.

<a id="Discussion"></a>

## Discussion

This method is called at the beginning of zoom gestures and in cases where a change in zoom level is to be animated. You can use this method to store state information or perform any additional actions prior to zooming the view’s content.

## See Also

### Managing zooming

- [viewForZoomingInScrollView:](viewforzooming%28in_%29.md): Asks the delegate for the view to scale when zooming is about to occur in the scroll view.
- [scrollViewDidEndZooming:withView:atScale:](scrollviewdidendzooming%28__with_atscale_%29.md): Tells the delegate when zooming of the content in the scroll view completed.
- [scrollViewDidZoom:](scrollviewdidzoom%28__%29.md): Tells the delegate that the scroll view’s zoom factor changed.
