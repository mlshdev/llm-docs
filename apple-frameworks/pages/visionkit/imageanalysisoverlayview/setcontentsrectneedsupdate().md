> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayview/setcontentsrectneedsupdate()](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/setcontentsrectneedsupdate())

# setContentsRectNeedsUpdate()

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Informs the view that contains the image when the layout changes and the view needs to reload its content.

## Declaration

```swift
@MainActor final func setContentsRectNeedsUpdate()
```

## Mentioned In

- [Enabling Live Text interactions with images](../enabling-live-text-interactions-with-images.md)

<a id="discussion"></a>

## Discussion

The framework ignores calls to this method when the superview is of type [NSImageView](https://developer.apple.com/documentation/appkit/nsimageview).

If the superview is a class other than `NSImageView`, call this method when the layout changes. The overlay view then invokes the delegate’s [contentsRect(for:)](../imageanalysisoverlayviewdelegate/contentsrect%28for_%29-34yzu.md) method to request the new content area.

## See Also

### Managing custom image views

- [contentsRect](contentsrect.md): Returns the rectangle, in unit coordinates, that contains the image within the superview.
