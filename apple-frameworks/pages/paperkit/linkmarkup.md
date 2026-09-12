> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/linkmarkup](https://developer.apple.com/documentation/paperkit/linkmarkup)

# LinkMarkup

**Framework:** PaperKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A URL link that a person can tap on in the canvas.

## Declaration

```swift
struct LinkMarkup
```

## Topics

### Creating a link

- [init(url:frame:allowedInteractions:id:)](linkmarkup/init%28url_frame_allowedinteractions_id_%29.md): Initializes and returns a new link markup from the specified parameters.

### Accessing the destination

- [url](linkmarkup/url.md): The URL that the link navigates to when activated.

### Identifying markup

- [id](linkmarkup/id.md): Stable unique identity of the markup.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Markup](markup.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Markup elements

- [Markup](markup.md): A markup component.
- [ImageMarkup](imagemarkup.md): A markup element that represents an image.
- [ShapeMarkup](shapemarkup.md): A markup element that represents a shape or text box with customizable appearance and behavior.
- [LoupeMarkup](loupemarkup.md): A loupe magnifier that magnifies the content below the loupe.
- [MarkupInteractions](markupinteractions.md): Interactions that people can perform on markup elements.
