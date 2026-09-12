> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteraction/setcontentsrectneedsupdate()](https://developer.apple.com/documentation/visionkit/imageanalysisinteraction/setcontentsrectneedsupdate())

# setContentsRectNeedsUpdate()

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Informs the view that contains the image when the layout changes and the view needs to reload its content.

## Declaration

```swift
@MainActor final func setContentsRectNeedsUpdate()
```

## Mentioned In

- [Enabling Live Text interactions with images](../enabling-live-text-interactions-with-images.md)

<a id="discussion"></a>

## Discussion

The framework ignores calls to this method when your app adds the interaction to a [UIImageView](../../uikit/uiimageview.md), which calculates the [contentsRect](contentsrect.md) based on the image view’s [UIView.ContentMode](../../uikit/uiview/contentmode-swift.enum.md).

When the view that contains the image isn’t an instance of [UIImageView](../../uikit/uiimageview.md), call this method when the layout changes. The interaction then invokes the delegate’s [contentsRect(for:)](../imageanalysisinteractiondelegate/contentsrect%28for_%29.md) callback, which provides the updated content area to the system.

## See Also

### Managing custom image views

- [contentsRect](contentsrect.md): A rectangle, in unit coordinate space, that describes the content area of the interaction.
