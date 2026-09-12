> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteractiondelegate/contentsrect(for:)](https://developer.apple.com/documentation/visionkit/imageanalysisinteractiondelegate/contentsrect(for:))

# contentsRect(for:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Returns the rectangle, in unit coordinates, that contains the image within the view.

## Declaration

```swift
@MainActor func contentsRect(for interaction: ImageAnalysisInteraction) -> CGRect
```

## Parameters

- `interaction`: The associated interaction object for the contents rectangle.

<a id="return-value"></a>

## Return Value

The rectangle of the image within the view, in unit coordinates. The default return value is the unit rectangle, `[0.0, 0.0, 1.0, 1.0]`, which represents the whole view contents.

## Mentioned In

- [Enabling Live Text interactions with images](../enabling-live-text-interactions-with-images.md)

<a id="discussion"></a>

## Discussion

Implement this method when the interaction view type isn’t [UIImageView](../../uikit/uiimageview.md).

## Default Implementations

### ImageAnalysisInteractionDelegate Implementations

- [contentsRect(for:)](contentsrect%28for_%29-90dek.md): A default unit rectangle that represents the full size of the interaction view.

## See Also

### Providing interface details

- [contentView(for:)](contentview%28for_%29.md): Provides the view that contains the image.
- [presentingViewController(for:)](presentingviewcontroller%28for_%29.md): Provides the view controller that presents the interface objects.
