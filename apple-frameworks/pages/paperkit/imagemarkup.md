> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/imagemarkup](https://developer.apple.com/documentation/paperkit/imagemarkup)

# ImageMarkup

**Framework:** PaperKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A markup element that represents an image.

## Declaration

```swift
struct ImageMarkup
```

## Topics

### Creating an image markup

- [init(image:frame:rotation:orientation:opacity:contentsBounds:accessibilityDescription:allowedInteractions:id:)](imagemarkup/init%28image_frame_rotation_orientation_opacity_contentsbounds_accessibilitydescription_allowedinteractions_id_%29.md): Initializes and returns a new image markup from the specified parameters.
- [init(image:frame:rotation:opacity:contentsBounds:accessibilityDescription:allowedInteractions:id:)](imagemarkup/init%28image_frame_rotation_opacity_contentsbounds_accessibilitydescription_allowedinteractions_id_%29-1ggjv.md): Initializes and returns a new image markup from the specified parameters.
- [init(image:frame:rotation:opacity:contentsBounds:accessibilityDescription:allowedInteractions:id:)](imagemarkup/init%28image_frame_rotation_opacity_contentsbounds_accessibilitydescription_allowedinteractions_id_%29-8y6o9.md): Initializes and returns a new image markup from the specified parameters.

### Accessing image content

- [image](imagemarkup/image.md): The image content displayed by this markup.
- [replaceImage(with:)](imagemarkup/replaceimage%28with_%29-10qzi.md): Replaces the contents of this image markup with an image file.
- [replaceImage(with:)](imagemarkup/replaceimage%28with_%29-6eb53.md): Replaces the contents of this image markup with a `CGImage`.
- [orientation](imagemarkup/orientation.md): The orientation of the image content.
- [contentsBounds](imagemarkup/contentsbounds.md): The portion of the image to display, in normalized coordinates.

### Configuring appearance

- [opacity](imagemarkup/opacity.md): The opacity of the image.
- [accessibilityDescription](imagemarkup/accessibilitydescription.md): The accessibility description of the image for assistive technologies.

### Identifying markup

- [id](imagemarkup/id.md): Stable unique identity of the markup.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Markup](markup.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Markup elements

- [Markup](markup.md): A markup component.
- [ShapeMarkup](shapemarkup.md): A markup element that represents a shape or text box with customizable appearance and behavior.
- [LinkMarkup](linkmarkup.md): A URL link that a person can tap on in the canvas.
- [LoupeMarkup](loupemarkup.md): A loupe magnifier that magnifies the content below the loupe.
- [MarkupInteractions](markupinteractions.md): Interactions that people can perform on markup elements.
