> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayviewdelegate/contentsrect(for:)](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/contentsrect(for:))

# contentsRect(for:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Returns the rectangle, in unit coordinate space, that contains the image within the view.

## Declaration

```swift
@MainActor func contentsRect(for overlayView: ImageAnalysisOverlayView) -> CGRect
```

## Parameters

- `overlayView`: The associated overlay view for the contents rectangle.

<a id="return-value"></a>

## Return Value

The rectangle of the image within the view, in unit coordinates. The default return value is the unit rectangle `[0.0, 0.0, 1.0, 1.0]`, which represents the whole view contents.

<a id="discussion"></a>

## Discussion

Implement this method if the [trackingImageView](../imageanalysisoverlayview/trackingimageview.md) type isn’t [NSImageView](https://developer.apple.com/documentation/appkit/nsimageview).

## Default Implementations

### ImageAnalysisOverlayViewDelegate Implementations

- [contentsRect(for:)](contentsrect%28for_%29-34yzu.md): A default implementation that returns a rectangle that specifies the full width and height of the view.

## See Also

### Providing interface details

- [contentView(for:)](contentview%28for_%29.md): Provides the view that contains the image.
