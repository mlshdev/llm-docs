> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayview/contentsrect](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/contentsrect)

# contentsRect

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

Returns the rectangle, in unit coordinates, that contains the image within the superview.

## Declaration

```swift
@MainActor final var contentsRect: CGRect { get }
```

<a id="discussion"></a>

## Discussion

If your app displays the image with [NSImageView](https://developer.apple.com/documentation/appkit/nsimageview) and you assign it to the [trackingImageView](trackingimageview.md) property, the framework doesn’t require you to implement this property.

The default value is the entire contents of the superview, which is the unit rectangle `[0.0, 0.0, 1.0, 1.0]`.

## See Also

### Managing custom image views

- [setContentsRectNeedsUpdate()](setcontentsrectneedsupdate%28%29.md): Informs the view that contains the image when the layout changes and the view needs to reload its content.
