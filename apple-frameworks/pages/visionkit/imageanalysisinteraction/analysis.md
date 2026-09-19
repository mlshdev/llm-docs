> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/imageanalysisinteraction/analysis

# analysis

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The results of analyzing an image for items that people can interact with.

## Declaration

```swift
@MainActor final var analysis: ImageAnalysis? { get set }
```

## Mentioned In

- [Enabling Live Text interactions with images](../enabling-live-text-interactions-with-images.md)

## See Also

### Configuring an image interaction

- [delegate](delegate.md): The delegate that handles the interaction callbacks.
- [view](view.md): The view that uses this interaction.
- [preferredInteractionTypes](preferredinteractiontypes.md): The types of interactions that people can perform with the image.
- [ImageAnalysisInteraction.InteractionTypes](interactiontypes.md): The types of interactions that people can perform with an image.
- [activeInteractionTypes](activeinteractiontypes.md): The types of interactions that a person actively performs.
