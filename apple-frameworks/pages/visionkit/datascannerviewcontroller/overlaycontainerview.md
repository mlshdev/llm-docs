> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontroller/overlaycontainerview](https://developer.apple.com/documentation/visionkit/datascannerviewcontroller/overlaycontainerview)

# overlayContainerView

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

A view that the data scanner displays over its view without interfering with the Live Text interface.

## Declaration

```swift
@MainActor var overlayContainerView: UIView { get }
```

## Mentioned In

- [Scanning data with the camera](../scanning-data-with-the-camera.md)

<a id="discussion"></a>

## Discussion

Optionally, add custom highlights to this view that doesn’t interfere with hit-testing or the guidance objects. If you want to add interface objects above the highlights, add those objects as subviews of the [view](../../uikit/uiviewcontroller/view.md) property.

## See Also

### Customizing the interface

- [regionOfInterest](regionofinterest.md): The area of the live video in view coordinates that the data scanner searches for items.
