> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/shapemarkup](https://developer.apple.com/documentation/paperkit/shapemarkup)

# ShapeMarkup

**Framework:** PaperKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A markup element that represents a shape or text box with customizable appearance and behavior.

## Declaration

```swift
struct ShapeMarkup
```

<a id="overview"></a>

## Overview

Use `ShapeMarkup` to add geometric shapes, lines, and text containers to your markup content. Shapes can be filled, stroked, rotated, and configured with various visual properties.

```swift
// Create a filled rectangle
let rect = ShapeMarkup(
    shape: .rectangle,
    frame: CGRect(x: 0, y: 0, width: 100, height: 50),
    fillColor: CGColor(red: 0, green: 0, blue: 1, alpha: 1)
)

// Create a resizable textbox
var textBox = ShapeMarkup(
    shape: .rectangle,
    frame: CGRect(x: 0, y: 0, width: 80, height: 80),
    attributedText: AttributedString("Star!"),
    autoresizing: [.flexibleWidth]
)
textBox.attributedText = AttributedString("This text will cause the box to expand")

// Create an arrow line
let arrow = ShapeMarkup(
    shape: .line(start: .zero, control: CGPoint(x: 0.5, y: 0), end: CGPoint(x: 1, y: 0)),
    frame: CGRect(x: 0, y: 0, width: 200, height: 2),
    strokeColor: CGColor(red: 0, green: 0, blue: 0, alpha: 1),
    endLineMarker: .arrow
)
```

## Topics

### Creating a shape

- [init(configuration:frame:rotation:)](shapemarkup/init%28configuration_frame_rotation_%29.md): Initializes and returns a new shape markup from the specified parameters.
- [init(shape:frame:rotation:fillColor:strokeColor:lineWidth:opacity:startLineMarker:endLineMarker:attributedText:allowedInteractions:autoresizing:id:)](shapemarkup/init%28shape_frame_rotation_fillcolor_strokecolor_linewidth_opacity_startlinemarker_endlinemarker_attributedtext_allowedinteractions_autoresizing_id_%29.md): Initializes and returns a new shape markup from the specified parameters.

### Choosing a shape type

- [shape](shapemarkup/shape-swift.property.md): The type of the shape.
- [shapeScaled](shapemarkup/shapescaled.md): The type of the shape with values scaled to the current frame.
- [ShapeMarkup.Shape](shapemarkup/shape-swift.enum.md)

### Configuring fill and stroke

- [fillColor](shapemarkup/fillcolor.md): The color used to fill the shape’s path.
- [strokeColor](shapemarkup/strokecolor.md): The color used to stroke the shape’s path.
- [lineWidth](shapemarkup/linewidth.md): The line width of the shape’s path.
- [opacity](shapemarkup/opacity.md): The opacity of the shape.

### Configuring text

- [attributedText](shapemarkup/attributedtext.md): The attributed text displayed inside this shape.

### Configuring line markers

- [startLineMarker](shapemarkup/startlinemarker.md): The line marker used at the start of an open shape path.
- [endLineMarker](shapemarkup/endlinemarker.md): The line marker used at the end of an open shape path.
- [ShapeMarkup.LineMarker](shapemarkup/linemarker.md): A marker that can be attached to a line.

### Configuring sizing

- [autoresizing](shapemarkup/autoresizing.md): Automatic sizing behaviors for this markup.

### Identifying markup

- [id](shapemarkup/id.md): Stable unique identity of the markup.

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
- [LinkMarkup](linkmarkup.md): A URL link that a person can tap on in the canvas.
- [LoupeMarkup](loupemarkup.md): A loupe magnifier that magnifies the content below the loupe.
- [MarkupInteractions](markupinteractions.md): Interactions that people can perform on markup elements.
