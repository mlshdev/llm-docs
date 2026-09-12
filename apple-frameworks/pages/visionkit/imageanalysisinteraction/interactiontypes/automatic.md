> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteraction/interactiontypes/automatic](https://developer.apple.com/documentation/visionkit/imageanalysisinteraction/interactiontypes/automatic)

# automatic

**Framework:** VisionKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

An option that enables interaction with any type of text, symbols, or subjects that the framework recognizes.

## Declaration

```swift
static let automatic: ImageAnalysisInteraction.InteractionTypes
```

## Mentioned In

- [Enabling Live Text interactions with images](../../enabling-live-text-interactions-with-images.md)

<a id="discussion"></a>

## Discussion

People can select text to perform actions, and after tapping the Live Text button, they can interact with data detectors. If the [allowLongPressForDataDetectorsInTextMode](../allowlongpressfordatadetectorsintextmode.md) property is `true`, a person can touch and hold text to activate data detectors without tapping the Live Text button.

## See Also

### Specifying types of interactions

- [textSelection](textselection.md): An option that enables text selection, copying, and translating.
- [dataDetectors](datadetectors.md): An option that enables interaction with text of certain formats, such as URLs, email addresses, and physical addresses.
- [imageSubject](imagesubject.md): An option that enables people to use a long-press gesture on a subject in an image to separate it from the background.
- [visualLookUp](visuallookup.md): An option that presents a button for more information on any subjects the framework recognizes in the image.
- [automaticTextOnly](automatictextonly.md): An option that enables all interaction types except image subjects and Visual Look Up.
