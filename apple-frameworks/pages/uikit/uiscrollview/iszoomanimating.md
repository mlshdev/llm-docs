> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/iszoomanimating](https://developer.apple.com/documentation/uikit/uiscrollview/iszoomanimating)

# isZoomAnimating (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value that indicates whether the scroll view is currently animating a zoom update.

## Declaration

```swift
var isZoomAnimating: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Call [stopScrollingAndZooming()](stopscrollingandzooming%28%29.md) to stop the animation.

## See Also

### Zooming and panning

- [panGestureRecognizer](pangesturerecognizer.md): The underlying gesture recognizer for pan gestures.
- [pinchGestureRecognizer](pinchgesturerecognizer.md): The underlying gesture recognizer for pinch gestures.
- [zoom(to:animated:)](zoom%28to_animated_%29.md): Zooms to a specific area of the content so that it’s visible in the scroll view.
- [zoomScale](zoomscale.md): A floating-point value that specifies the current scale factor applied to the scroll view’s content.
- [setZoomScale(\_:animated:)](setzoomscale%28__animated_%29.md): A floating-point value that specifies the current zoom scale.
- [maximumZoomScale](maximumzoomscale.md): A floating-point value that specifies the maximum scale factor that can apply to the scroll view’s content.
- [minimumZoomScale](minimumzoomscale.md): A floating-point value that specifies the minimum scale factor that can apply to the scroll view’s content.
- [isZoomBouncing](iszoombouncing.md): A Boolean value that indicates that zooming has exceeded the scaling limits specified for the scroll view.
- [isZooming](iszooming.md): A Boolean value that indicates whether the content view is currently zooming in or out.
- [bouncesZoom](bounceszoom.md): A Boolean value that determines whether the scroll view animates the content scaling when the scaling exceeds the maximum or minimum limits.

# zoomAnimating (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value that indicates whether the scroll view is currently animating a zoom update.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isZoomAnimating) BOOL zoomAnimating;
```

<a id="Discussion"></a>

## Discussion

Call [stopScrollingAndZooming](stopscrollingandzooming%28%29.md) to stop the animation.

## See Also

### Zooming and panning

- [panGestureRecognizer](pangesturerecognizer.md): The underlying gesture recognizer for pan gestures.
- [pinchGestureRecognizer](pinchgesturerecognizer.md): The underlying gesture recognizer for pinch gestures.
- [zoomToRect:animated:](zoom%28to_animated_%29.md): Zooms to a specific area of the content so that it’s visible in the scroll view.
- [zoomScale](zoomscale.md): A floating-point value that specifies the current scale factor applied to the scroll view’s content.
- [setZoomScale:animated:](setzoomscale%28__animated_%29.md): A floating-point value that specifies the current zoom scale.
- [maximumZoomScale](maximumzoomscale.md): A floating-point value that specifies the maximum scale factor that can apply to the scroll view’s content.
- [minimumZoomScale](minimumzoomscale.md): A floating-point value that specifies the minimum scale factor that can apply to the scroll view’s content.
- [zoomBouncing](iszoombouncing.md): A Boolean value that indicates that zooming has exceeded the scaling limits specified for the scroll view.
- [zooming](iszooming.md): A Boolean value that indicates whether the content view is currently zooming in or out.
- [bouncesZoom](bounceszoom.md): A Boolean value that determines whether the scroll view animates the content scaling when the scaling exceeds the maximum or minimum limits.
