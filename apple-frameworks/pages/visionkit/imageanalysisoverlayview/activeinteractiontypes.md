> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayview/activeinteractiontypes](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/activeinteractiontypes)

# activeInteractionTypes

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The types of interactions that a person actively performs.

## Declaration

```swift
@MainActor final var activeInteractionTypes: ImageAnalysisOverlayView.InteractionTypes { get }
```

<a id="discussion"></a>

## Discussion

This property is always a concrete type that’s never set to [automatic](interactiontypes/automatic.md).

## See Also

### Configuring overlay views

- [delegate](delegate.md): An object that handles image analysis interface callbacks.
- [analysis](analysis.md): The results of analyzing an image for items that people can interact with.
- [preferredInteractionTypes](preferredinteractiontypes.md): The types of interactions that people can perform with the image in this overlay view.
- [ImageAnalysisOverlayView.InteractionTypes](interactiontypes.md): The types of interactions that people can perform with an image.
- [trackingImageView](trackingimageview.md): The image view that contains the image.
