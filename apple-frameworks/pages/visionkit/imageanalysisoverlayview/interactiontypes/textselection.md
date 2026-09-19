> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/interactiontypes/textselection

# textSelection

**Framework:** VisionKit  
**Kind:** Type Property  
**Availability:** macOS 13.0+

An option that enables text selection, copying, and translating.

## Declaration

```swift
static let textSelection: ImageAnalysisOverlayView.InteractionTypes
```

## See Also

### Specifying types of interactions

- [automatic](automatic.md): An option that enables interaction with any type of text, symbols, or subjects that the framework recognizes.
- [dataDetectors](datadetectors.md): An option that enables interaction with text of certain formats, such as URLs, email addresses, and physical addresses.
- [imageSubject](imagesubject.md): An option that enables people to click or tap a subject in an image to separate it from the background.
- [visualLookUp](visuallookup.md): An option that presents a button for more information on any subjects the framework recognizes in the image.
- [automaticTextOnly](automatictextonly.md): An option that enables all interaction types except image subjects and Visual Look Up.
