> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/iszoombouncing](https://developer.apple.com/documentation/uikit/uiscrollview/iszoombouncing)

# isZoomBouncing (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates that zooming has exceeded the scaling limits specified for the scroll view.

## Declaration

```swift
var isZoomBouncing: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the scroll view is zooming back to a minimum or maximum zoom scaling value; otherwise, the value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Zooming and panning

- [panGestureRecognizer](pangesturerecognizer.md): The underlying gesture recognizer for pan gestures.
- [pinchGestureRecognizer](pinchgesturerecognizer.md): The underlying gesture recognizer for pinch gestures.
- [zoom(to:animated:)](zoom%28to_animated_%29.md): Zooms to a specific area of the content so that it’s visible in the scroll view.
- [zoomScale](zoomscale.md): A floating-point value that specifies the current scale factor applied to the scroll view’s content.
- [setZoomScale(\_:animated:)](setzoomscale%28__animated_%29.md): A floating-point value that specifies the current zoom scale.
- [maximumZoomScale](maximumzoomscale.md): A floating-point value that specifies the maximum scale factor that can apply to the scroll view’s content.
- [minimumZoomScale](minimumzoomscale.md): A floating-point value that specifies the minimum scale factor that can apply to the scroll view’s content.
- [isZooming](iszooming.md): A Boolean value that indicates whether the content view is currently zooming in or out.
- [isZoomAnimating](iszoomanimating.md): A Boolean value that indicates whether the scroll view is currently animating a zoom update.
- [bouncesZoom](bounceszoom.md): A Boolean value that determines whether the scroll view animates the content scaling when the scaling exceeds the maximum or minimum limits.

# zoomBouncing (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates that zooming has exceeded the scaling limits specified for the scroll view.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isZoomBouncing) BOOL zoomBouncing;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the scroll view is zooming back to a minimum or maximum zoom scaling value; otherwise, the value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Zooming and panning

- [panGestureRecognizer](pangesturerecognizer.md): The underlying gesture recognizer for pan gestures.
- [pinchGestureRecognizer](pinchgesturerecognizer.md): The underlying gesture recognizer for pinch gestures.
- [zoomToRect:animated:](zoom%28to_animated_%29.md): Zooms to a specific area of the content so that it’s visible in the scroll view.
- [zoomScale](zoomscale.md): A floating-point value that specifies the current scale factor applied to the scroll view’s content.
- [setZoomScale:animated:](setzoomscale%28__animated_%29.md): A floating-point value that specifies the current zoom scale.
- [maximumZoomScale](maximumzoomscale.md): A floating-point value that specifies the maximum scale factor that can apply to the scroll view’s content.
- [minimumZoomScale](minimumzoomscale.md): A floating-point value that specifies the minimum scale factor that can apply to the scroll view’s content.
- [zooming](iszooming.md): A Boolean value that indicates whether the content view is currently zooming in or out.
- [zoomAnimating](iszoomanimating.md): A Boolean value that indicates whether the scroll view is currently animating a zoom update.
- [bouncesZoom](bounceszoom.md): A Boolean value that determines whether the scroll view animates the content scaling when the scaling exceeds the maximum or minimum limits.
