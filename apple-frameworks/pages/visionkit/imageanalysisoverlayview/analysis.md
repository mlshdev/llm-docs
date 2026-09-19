> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/analysis

# analysis

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The results of analyzing an image for items that people can interact with.

## Declaration

```swift
@MainActor final var analysis: ImageAnalysis? { get set }
```

## Mentioned In

- [Enabling Live Text interactions with images](../enabling-live-text-interactions-with-images.md)

## See Also

### Configuring overlay views

- [delegate](delegate.md): An object that handles image analysis interface callbacks.
- [preferredInteractionTypes](preferredinteractiontypes.md): The types of interactions that people can perform with the image in this overlay view.
- [ImageAnalysisOverlayView.InteractionTypes](interactiontypes.md): The types of interactions that people can perform with an image.
- [trackingImageView](trackingimageview.md): The image view that contains the image.
- [activeInteractionTypes](activeinteractiontypes.md): The types of interactions that a person actively performs.
