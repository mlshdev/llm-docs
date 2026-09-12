> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/loupemarkup](https://developer.apple.com/documentation/paperkit/loupemarkup)

# LoupeMarkup

**Framework:** PaperKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A loupe magnifier that magnifies the content below the loupe.

## Declaration

```swift
struct LoupeMarkup
```

<a id="overview"></a>

## Overview

The loupe magnifies the content beneath its frame within the parent markup. The loupe centers the magnified region on the center of its frame.

## Topics

### Creating a loupe

- [init(frame:magnification:strokeColor:lineWidth:allowedInteractions:id:)](loupemarkup/init%28frame_magnification_strokecolor_linewidth_allowedinteractions_id_%29.md): Initializes and returns a new loupe markup from the specified parameters.

### Configuring appearance

- [magnification](loupemarkup/magnification.md): The magnification level applied to the content displayed within the loupe.
- [strokeColor](loupemarkup/strokecolor.md): The color of the loupe’s border.
- [lineWidth](loupemarkup/linewidth.md): The width of the loupe’s border in points.

### Identifying markup

- [id](loupemarkup/id.md): Stable unique identity of the markup.

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
- [LinkMarkup](linkmarkup.md): A URL link that a person can tap on in the canvas.
- [MarkupInteractions](markupinteractions.md): Interactions that people can perform on markup elements.
