> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayview/interactiontypes/imagesubject](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/interactiontypes/imagesubject)

# imageSubject

**Framework:** VisionKit  
**Kind:** Type Property  
**Availability:** macOS 13.0+

An option that enables people to click or tap a subject in an image to separate it from the background.

## Declaration

```swift
static let imageSubject: ImageAnalysisOverlayView.InteractionTypes
```

<a id="discussion"></a>

## Discussion

For more information about image subjects, see [ImageAnalysisOverlayView.Subject](../subject.md).

## See Also

### Specifying types of interactions

- [automatic](automatic.md): An option that enables interaction with any type of text, symbols, or subjects that the framework recognizes.
- [textSelection](textselection.md): An option that enables text selection, copying, and translating.
- [dataDetectors](datadetectors.md): An option that enables interaction with text of certain formats, such as URLs, email addresses, and physical addresses.
- [visualLookUp](visuallookup.md): An option that presents a button for more information on any subjects the framework recognizes in the image.
- [automaticTextOnly](automatictextonly.md): An option that enables all interaction types except image subjects and Visual Look Up.
