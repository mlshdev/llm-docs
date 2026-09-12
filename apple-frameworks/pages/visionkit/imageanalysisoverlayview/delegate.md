> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayview/delegate](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/delegate)

# delegate

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

An object that handles image analysis interface callbacks.

## Declaration

```swift
@MainActor weak final var delegate: (any ImageAnalysisOverlayViewDelegate)? { get set }
```

## See Also

### Configuring overlay views

- [analysis](analysis.md): The results of analyzing an image for items that people can interact with.
- [preferredInteractionTypes](preferredinteractiontypes.md): The types of interactions that people can perform with the image in this overlay view.
- [ImageAnalysisOverlayView.InteractionTypes](interactiontypes.md): The types of interactions that people can perform with an image.
- [trackingImageView](trackingimageview.md): The image view that contains the image.
- [activeInteractionTypes](activeinteractiontypes.md): The types of interactions that a person actively performs.
