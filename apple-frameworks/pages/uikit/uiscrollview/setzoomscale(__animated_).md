> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/setzoomscale(_:animated:)](https://developer.apple.com/documentation/uikit/uiscrollview/setzoomscale(_:animated:))

# setZoomScale(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A floating-point value that specifies the current zoom scale.

## Declaration

```swift
func setZoomScale(_ scale: CGFloat, animated: Bool)
```

## Parameters

- `scale`: The new value to scale the content to.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the transition to the new scale, [false](https://developer.apple.com/documentation/swift/false) to make the transition immediate.

<a id="Discussion"></a>

## Discussion

The new scale value should be between the [minimumZoomScale](minimumzoomscale.md) and the [maximumZoomScale](maximumzoomscale.md).

## See Also

### Zooming and panning

- [panGestureRecognizer](pangesturerecognizer.md): The underlying gesture recognizer for pan gestures.
- [pinchGestureRecognizer](pinchgesturerecognizer.md): The underlying gesture recognizer for pinch gestures.
- [zoom(to:animated:)](zoom%28to_animated_%29.md): Zooms to a specific area of the content so that it’s visible in the scroll view.
- [zoomScale](zoomscale.md): A floating-point value that specifies the current scale factor applied to the scroll view’s content.
- [maximumZoomScale](maximumzoomscale.md): A floating-point value that specifies the maximum scale factor that can apply to the scroll view’s content.
- [minimumZoomScale](minimumzoomscale.md): A floating-point value that specifies the minimum scale factor that can apply to the scroll view’s content.
- [isZoomBouncing](iszoombouncing.md): A Boolean value that indicates that zooming has exceeded the scaling limits specified for the scroll view.
- [isZooming](iszooming.md): A Boolean value that indicates whether the content view is currently zooming in or out.
- [isZoomAnimating](iszoomanimating.md): A Boolean value that indicates whether the scroll view is currently animating a zoom update.
- [bouncesZoom](bounceszoom.md): A Boolean value that determines whether the scroll view animates the content scaling when the scaling exceeds the maximum or minimum limits.

# setZoomScale:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A floating-point value that specifies the current zoom scale.

## Declaration

```objectivec
- (void) setZoomScale:(CGFloat) scale animated:(BOOL) animated;
```

## Parameters

- `scale`: The new value to scale the content to.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the transition to the new scale, [false](https://developer.apple.com/documentation/swift/false) to make the transition immediate.

<a id="Discussion"></a>

## Discussion

The new scale value should be between the [minimumZoomScale](minimumzoomscale.md) and the [maximumZoomScale](maximumzoomscale.md).

## See Also

### Zooming and panning

- [panGestureRecognizer](pangesturerecognizer.md): The underlying gesture recognizer for pan gestures.
- [pinchGestureRecognizer](pinchgesturerecognizer.md): The underlying gesture recognizer for pinch gestures.
- [zoomToRect:animated:](zoom%28to_animated_%29.md): Zooms to a specific area of the content so that it’s visible in the scroll view.
- [zoomScale](zoomscale.md): A floating-point value that specifies the current scale factor applied to the scroll view’s content.
- [maximumZoomScale](maximumzoomscale.md): A floating-point value that specifies the maximum scale factor that can apply to the scroll view’s content.
- [minimumZoomScale](minimumzoomscale.md): A floating-point value that specifies the minimum scale factor that can apply to the scroll view’s content.
- [zoomBouncing](iszoombouncing.md): A Boolean value that indicates that zooming has exceeded the scaling limits specified for the scroll view.
- [zooming](iszooming.md): A Boolean value that indicates whether the content view is currently zooming in or out.
- [zoomAnimating](iszoomanimating.md): A Boolean value that indicates whether the scroll view is currently animating a zoom update.
- [bouncesZoom](bounceszoom.md): A Boolean value that determines whether the scroll view animates the content scaling when the scaling exceeds the maximum or minimum limits.
