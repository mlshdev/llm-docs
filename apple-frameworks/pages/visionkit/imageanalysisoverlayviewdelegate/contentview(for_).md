> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayviewdelegate/contentview(for:)](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/contentview(for:))

# contentView(for:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Provides the view that contains the image.

## Declaration

```swift
@MainActor func contentView(for overlayView: ImageAnalysisOverlayView) -> NSView?
```

## Parameters

- `overlayView`: The associated overlay view for the content view.

<a id="return-value"></a>

## Return Value

The view that contains the image.

<a id="discussion"></a>

## Discussion

The default value is `nil`.

## Default Implementations

### ImageAnalysisOverlayViewDelegate Implementations

- [contentView(for:)](contentview%28for_%29-khdt.md): A default implementation that returns a `nil` reference.

## See Also

### Providing interface details

- [contentsRect(for:)](contentsrect%28for_%29.md): Returns the rectangle, in unit coordinate space, that contains the image within the view.
