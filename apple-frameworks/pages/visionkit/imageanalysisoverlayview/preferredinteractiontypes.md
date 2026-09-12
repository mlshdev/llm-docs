> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayview/preferredinteractiontypes](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/preferredinteractiontypes)

# preferredInteractionTypes

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The types of interactions that people can perform with the image in this overlay view.

## Declaration

```swift
@MainActor final var preferredInteractionTypes: ImageAnalysisOverlayView.InteractionTypes { get set }
```

## Mentioned In

- [Enabling Live Text interactions with images](../enabling-live-text-interactions-with-images.md)

<a id="discussion"></a>

## Discussion

You need to set this property to enable the Live Text interface with the image. If this property contains [automatic](interactiontypes/automatic.md), the overlay view ignores the other interaction types in the set. The default value for this property is an empty array that disables any interactions.

## See Also

### Configuring overlay views

- [delegate](delegate.md): An object that handles image analysis interface callbacks.
- [analysis](analysis.md): The results of analyzing an image for items that people can interact with.
- [ImageAnalysisOverlayView.InteractionTypes](interactiontypes.md): The types of interactions that people can perform with an image.
- [trackingImageView](trackingimageview.md): The image view that contains the image.
- [activeInteractionTypes](activeinteractiontypes.md): The types of interactions that a person actively performs.
