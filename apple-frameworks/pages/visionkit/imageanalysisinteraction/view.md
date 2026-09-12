> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteraction/view](https://developer.apple.com/documentation/visionkit/imageanalysisinteraction/view)

# view

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The view that uses this interaction.

## Declaration

```swift
@MainActor @preconcurrency weak final var view: UIView? { get }
```

## See Also

### Configuring an image interaction

- [delegate](delegate.md): The delegate that handles the interaction callbacks.
- [analysis](analysis.md): The results of analyzing an image for items that people can interact with.
- [preferredInteractionTypes](preferredinteractiontypes.md): The types of interactions that people can perform with the image.
- [ImageAnalysisInteraction.InteractionTypes](interactiontypes.md): The types of interactions that people can perform with an image.
- [activeInteractionTypes](activeinteractiontypes.md): The types of interactions that a person actively performs.
