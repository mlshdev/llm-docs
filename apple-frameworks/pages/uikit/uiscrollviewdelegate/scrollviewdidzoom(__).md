> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollviewdelegate/scrollviewdidzoom(_:)](https://developer.apple.com/documentation/uikit/uiscrollviewdelegate/scrollviewdidzoom(_:))

# scrollViewDidZoom(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the scroll view’s zoom factor changed.

## Declaration

```swift
optional func scrollViewDidZoom(_ scrollView: UIScrollView)
```

## Parameters

- `scrollView`: The scroll-view object whose zoom factor changed.

## See Also

### Managing zooming

- [viewForZooming(in:)](viewforzooming%28in_%29.md): Asks the delegate for the view to scale when zooming is about to occur in the scroll view.
- [scrollViewWillBeginZooming(\_:with:)](scrollviewwillbeginzooming%28__with_%29.md): Tells the delegate that zooming of the content in the scroll view is about to commence.
- [scrollViewDidEndZooming(\_:with:atScale:)](scrollviewdidendzooming%28__with_atscale_%29.md): Tells the delegate when zooming of the content in the scroll view completed.

# scrollViewDidZoom: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the scroll view’s zoom factor changed.

## Declaration

```objectivec
- (void) scrollViewDidZoom:(UIScrollView *) scrollView;
```

## Parameters

- `scrollView`: The scroll-view object whose zoom factor changed.

## See Also

### Managing zooming

- [viewForZoomingInScrollView:](viewforzooming%28in_%29.md): Asks the delegate for the view to scale when zooming is about to occur in the scroll view.
- [scrollViewWillBeginZooming:withView:](scrollviewwillbeginzooming%28__with_%29.md): Tells the delegate that zooming of the content in the scroll view is about to commence.
- [scrollViewDidEndZooming:withView:atScale:](scrollviewdidendzooming%28__with_atscale_%29.md): Tells the delegate when zooming of the content in the scroll view completed.
