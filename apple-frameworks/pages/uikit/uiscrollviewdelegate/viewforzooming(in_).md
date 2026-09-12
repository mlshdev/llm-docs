> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollviewdelegate/viewforzooming(in:)](https://developer.apple.com/documentation/uikit/uiscrollviewdelegate/viewforzooming(in:))

# viewForZooming(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate for the view to scale when zooming is about to occur in the scroll view.

## Declaration

```swift
optional func viewForZooming(in scrollView: UIScrollView) -> UIView?
```

## Parameters

- `scrollView`: The scroll-view object displaying the content view.

<a id="return-value"></a>

## Return Value

A [UIView](../uiview.md) object that will be scaled as a result of the zooming gesture. Return `nil` if you don’t want zooming to occur.

## See Also

### Managing zooming

- [scrollViewWillBeginZooming(\_:with:)](scrollviewwillbeginzooming%28__with_%29.md): Tells the delegate that zooming of the content in the scroll view is about to commence.
- [scrollViewDidEndZooming(\_:with:atScale:)](scrollviewdidendzooming%28__with_atscale_%29.md): Tells the delegate when zooming of the content in the scroll view completed.
- [scrollViewDidZoom(\_:)](scrollviewdidzoom%28__%29.md): Tells the delegate that the scroll view’s zoom factor changed.

# viewForZoomingInScrollView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate for the view to scale when zooming is about to occur in the scroll view.

## Declaration

```objectivec
- (UIView *) viewForZoomingInScrollView:(UIScrollView *) scrollView;
```

## Parameters

- `scrollView`: The scroll-view object displaying the content view.

<a id="return-value"></a>

## Return Value

A [UIView](../uiview.md) object that will be scaled as a result of the zooming gesture. Return `nil` if you don’t want zooming to occur.

## See Also

### Managing zooming

- [scrollViewWillBeginZooming:withView:](scrollviewwillbeginzooming%28__with_%29.md): Tells the delegate that zooming of the content in the scroll view is about to commence.
- [scrollViewDidEndZooming:withView:atScale:](scrollviewdidendzooming%28__with_atscale_%29.md): Tells the delegate when zooming of the content in the scroll view completed.
- [scrollViewDidZoom:](scrollviewdidzoom%28__%29.md): Tells the delegate that the scroll view’s zoom factor changed.
