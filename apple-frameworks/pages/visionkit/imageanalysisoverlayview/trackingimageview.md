> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayview/trackingimageview](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/trackingimageview)

# trackingImageView

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The image view that contains the image.

## Declaration

```swift
@MainActor weak final var trackingImageView: NSImageView? { get set }
```

## Mentioned In

- [Enabling Live Text interactions with images](../enabling-live-text-interactions-with-images.md)

<a id="discussion"></a>

## Discussion

Optionally, set this property to the image view that contains the image, and the overlay view automatically calculates the [contentsRect](contentsrect.md) property value based on the image view properties.

## See Also

### Configuring overlay views

- [delegate](delegate.md): An object that handles image analysis interface callbacks.
- [analysis](analysis.md): The results of analyzing an image for items that people can interact with.
- [preferredInteractionTypes](preferredinteractiontypes.md): The types of interactions that people can perform with the image in this overlay view.
- [ImageAnalysisOverlayView.InteractionTypes](interactiontypes.md): The types of interactions that people can perform with an image.
- [activeInteractionTypes](activeinteractiontypes.md): The types of interactions that a person actively performs.
