> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayview/interactiontypes/visuallookup](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/interactiontypes/visuallookup)

# visualLookUp

**Framework:** VisionKit  
**Kind:** Type Property  
**Availability:** macOS 13.0+

An option that presents a button for more information on any subjects the framework recognizes in the image.

## Declaration

```swift
static let visualLookUp: ImageAnalysisOverlayView.InteractionTypes
```

<a id="discussion"></a>

## Discussion

When the framework identifies something familiar in an image that it can provide more information about (see [ImageAnalysisOverlayView.Subject](../subject.md)), it offers a button in the bottom-right corner of the view. When people tap the button, a modal sheet appears that offers info about the subject. For example, if the image contains a dog, the modal sheet describes the dog’s breed and provides a relevant web URL where people can read more about the breed.

VisionKit supports Visual Look Up when it recognizes the following subjects:

- Plants and flowers
- Animals, such as cats, dogs, birds, reptiles, and insects
- Places, such as constructed landmarks, sculptures, and natural landmarks
- Art and media, such as paintings, books, and album covers
- Food, such as prepared dishes and desserts
- Symbols, such as laundry care labels and vehicle dashboard indicators

## See Also

### Specifying types of interactions

- [automatic](automatic.md): An option that enables interaction with any type of text, symbols, or subjects that the framework recognizes.
- [textSelection](textselection.md): An option that enables text selection, copying, and translating.
- [dataDetectors](datadetectors.md): An option that enables interaction with text of certain formats, such as URLs, email addresses, and physical addresses.
- [imageSubject](imagesubject.md): An option that enables people to click or tap a subject in an image to separate it from the background.
- [automaticTextOnly](automatictextonly.md): An option that enables all interaction types except image subjects and Visual Look Up.
