> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/zoom(to:animated:)](https://developer.apple.com/documentation/uikit/uiscrollview/zoom(to:animated:))

# zoom(to:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Zooms to a specific area of the content so that it’s visible in the scroll view.

## Declaration

```swift
func zoom(to rect: CGRect, animated: Bool)
```

## Parameters

- `rect`: A rectangle defining an area of the content view. The rectangle should be in the coordinate space of the view returned by [viewForZooming(in:)](../uiscrollviewdelegate/viewforzooming%28in_%29.md).
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if the scrolling should be animated, [false](https://developer.apple.com/documentation/swift/false) if it should be immediate.

<a id="Discussion"></a>

## Discussion

This method zooms so that the content view becomes the area defined by `rect`, adjusting the [zoomScale](zoomscale.md) as necessary.

## See Also

### Zooming and panning

- [panGestureRecognizer](pangesturerecognizer.md): The underlying gesture recognizer for pan gestures.
- [pinchGestureRecognizer](pinchgesturerecognizer.md): The underlying gesture recognizer for pinch gestures.
- [zoomScale](zoomscale.md): A floating-point value that specifies the current scale factor applied to the scroll view’s content.
- [setZoomScale(\_:animated:)](setzoomscale%28__animated_%29.md): A floating-point value that specifies the current zoom scale.
- [maximumZoomScale](maximumzoomscale.md): A floating-point value that specifies the maximum scale factor that can apply to the scroll view’s content.
- [minimumZoomScale](minimumzoomscale.md): A floating-point value that specifies the minimum scale factor that can apply to the scroll view’s content.
- [isZoomBouncing](iszoombouncing.md): A Boolean value that indicates that zooming has exceeded the scaling limits specified for the scroll view.
- [isZooming](iszooming.md): A Boolean value that indicates whether the content view is currently zooming in or out.
- [isZoomAnimating](iszoomanimating.md): A Boolean value that indicates whether the scroll view is currently animating a zoom update.
- [bouncesZoom](bounceszoom.md): A Boolean value that determines whether the scroll view animates the content scaling when the scaling exceeds the maximum or minimum limits.

# zoomToRect:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Zooms to a specific area of the content so that it’s visible in the scroll view.

## Declaration

```objectivec
- (void) zoomToRect:(CGRect) rect animated:(BOOL) animated;
```

## Parameters

- `rect`: A rectangle defining an area of the content view. The rectangle should be in the coordinate space of the view returned by [viewForZoomingInScrollView:](../uiscrollviewdelegate/viewforzooming%28in_%29.md).
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if the scrolling should be animated, [false](https://developer.apple.com/documentation/swift/false) if it should be immediate.

<a id="Discussion"></a>

## Discussion

This method zooms so that the content view becomes the area defined by `rect`, adjusting the [zoomScale](zoomscale.md) as necessary.

## See Also

### Zooming and panning

- [panGestureRecognizer](pangesturerecognizer.md): The underlying gesture recognizer for pan gestures.
- [pinchGestureRecognizer](pinchgesturerecognizer.md): The underlying gesture recognizer for pinch gestures.
- [zoomScale](zoomscale.md): A floating-point value that specifies the current scale factor applied to the scroll view’s content.
- [setZoomScale:animated:](setzoomscale%28__animated_%29.md): A floating-point value that specifies the current zoom scale.
- [maximumZoomScale](maximumzoomscale.md): A floating-point value that specifies the maximum scale factor that can apply to the scroll view’s content.
- [minimumZoomScale](minimumzoomscale.md): A floating-point value that specifies the minimum scale factor that can apply to the scroll view’s content.
- [zoomBouncing](iszoombouncing.md): A Boolean value that indicates that zooming has exceeded the scaling limits specified for the scroll view.
- [zooming](iszooming.md): A Boolean value that indicates whether the content view is currently zooming in or out.
- [zoomAnimating](iszoomanimating.md): A Boolean value that indicates whether the scroll view is currently animating a zoom update.
- [bouncesZoom](bounceszoom.md): A Boolean value that determines whether the scroll view animates the content scaling when the scaling exceeds the maximum or minimum limits.
