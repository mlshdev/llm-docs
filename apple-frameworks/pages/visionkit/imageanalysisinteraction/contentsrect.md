> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/imageanalysisinteraction/contentsrect

# contentsRect

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

A rectangle, in unit coordinate space, that describes the content area of the interaction.

## Declaration

```swift
@MainActor final var contentsRect: CGRect { get }
```

<a id="discussion"></a>

## Discussion

If the interaction’s view isn’t an instance of [UIImageView](../../uikit/uiimageview.md), your app sets the value for this property by implementing the [ImageAnalysisInteractionDelegate](../imageanalysisinteractiondelegate.md) callback [contentsRect(for:)](../imageanalysisinteractiondelegate/contentsrect%28for_%29.md). The default return value is the unit rectangle, `[0.0, 0.0, 1.0, 1.0]`, which represents the whole view contents.

## See Also

### Managing custom image views

- [setContentsRectNeedsUpdate()](setcontentsrectneedsupdate%28%29.md): Informs the view that contains the image when the layout changes and the view needs to reload its content.
