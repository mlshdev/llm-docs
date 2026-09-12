> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteractiondelegate/contentview(for:)](https://developer.apple.com/documentation/visionkit/imageanalysisinteractiondelegate/contentview(for:))

# contentView(for:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Provides the view that contains the image.

## Declaration

```swift
@MainActor func contentView(for interaction: ImageAnalysisInteraction) -> UIView?
```

## Parameters

- `interaction`: The associated interaction object for the content view.

<a id="return-value"></a>

## Return Value

The view that contains the image for this interaction.

<a id="discussion"></a>

## Discussion

Implement this delegate method only when the view that contains the image isn’t the same as the interaction’s view.

## Default Implementations

### ImageAnalysisInteractionDelegate Implementations

- [contentView(for:)](contentview%28for_%29-28l6r.md): A default implementation that provides the interaction’s view.

## See Also

### Providing interface details

- [contentsRect(for:)](contentsrect%28for_%29.md): Returns the rectangle, in unit coordinates, that contains the image within the view.
- [presentingViewController(for:)](presentingviewcontroller%28for_%29.md): Provides the view controller that presents the interface objects.
