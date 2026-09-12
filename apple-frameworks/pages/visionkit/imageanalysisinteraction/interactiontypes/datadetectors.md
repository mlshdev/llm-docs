> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteraction/interactiontypes/datadetectors](https://developer.apple.com/documentation/visionkit/imageanalysisinteraction/interactiontypes/datadetectors)

# dataDetectors

**Framework:** VisionKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

An option that enables interaction with text of certain formats, such as URLs, email addresses, and physical addresses.

## Declaration

```swift
static let dataDetectors: ImageAnalysisInteraction.InteractionTypes
```

<a id="discussion"></a>

## Discussion

People interact with *data detectors*, or UI that highlights each instance of the recognized formats in text that’s on an image. The data detectors appear without a Live Text button, because people can’t interact with other text with this option.

## See Also

### Specifying types of interactions

- [automatic](automatic.md): An option that enables interaction with any type of text, symbols, or subjects that the framework recognizes.
- [textSelection](textselection.md): An option that enables text selection, copying, and translating.
- [imageSubject](imagesubject.md): An option that enables people to use a long-press gesture on a subject in an image to separate it from the background.
- [visualLookUp](visuallookup.md): An option that presents a button for more information on any subjects the framework recognizes in the image.
- [automaticTextOnly](automatictextonly.md): An option that enables all interaction types except image subjects and Visual Look Up.
