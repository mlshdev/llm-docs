> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteraction/interactiontypes](https://developer.apple.com/documentation/visionkit/imageanalysisinteraction/interactiontypes)

# ImageAnalysisInteraction.InteractionTypes

**Framework:** VisionKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The types of interactions that people can perform with an image.

## Declaration

```swift
struct InteractionTypes
```

## Topics

### Specifying types of interactions

- [automatic](interactiontypes/automatic.md): An option that enables interaction with any type of text, symbols, or subjects that the framework recognizes.
- [textSelection](interactiontypes/textselection.md): An option that enables text selection, copying, and translating.
- [dataDetectors](interactiontypes/datadetectors.md): An option that enables interaction with text of certain formats, such as URLs, email addresses, and physical addresses.
- [imageSubject](interactiontypes/imagesubject.md): An option that enables people to use a long-press gesture on a subject in an image to separate it from the background.
- [visualLookUp](interactiontypes/visuallookup.md): An option that presents a button for more information on any subjects the framework recognizes in the image.
- [automaticTextOnly](interactiontypes/automatictextonly.md): An option that enables all interaction types except image subjects and Visual Look Up.

### Creating an interaction

- [init(rawValue:)](interactiontypes/init%28rawvalue_%29.md): Creates an instance from a raw type.
- [rawValue](interactiontypes/rawvalue.md): The corresponding value of the raw type.

### Managing sets

- [Set properties and methods](../interactiontypes-set-properties-and-methods.md): The properties and methods that conform to the option set protocol.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Configuring an image interaction

- [delegate](delegate.md): The delegate that handles the interaction callbacks.
- [analysis](analysis.md): The results of analyzing an image for items that people can interact with.
- [view](view.md): The view that uses this interaction.
- [preferredInteractionTypes](preferredinteractiontypes.md): The types of interactions that people can perform with the image.
- [activeInteractionTypes](activeinteractiontypes.md): The types of interactions that a person actively performs.
