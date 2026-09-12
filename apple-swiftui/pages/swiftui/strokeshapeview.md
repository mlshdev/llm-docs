> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/strokeshapeview](https://developer.apple.com/documentation/swiftui/strokeshapeview)

# StrokeShapeView

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A shape provider that strokes its shape.

## Declaration

```swift
@frozen nonisolated struct StrokeShapeView<Content, Style, Background> where Content : Shape, Style : ShapeStyle, Background : View
```

<a id="overview"></a>

## Overview

You don’t create this type directly; it’s the return type of `Shape.stroke`.

## Topics

### Creating a stroke shape view

- [init(shape:style:strokeStyle:isAntialiased:background:)](strokeshapeview/init%28shape_style_strokestyle_isantialiased_background_%29.md): Create a StrokeShapeView.

### Getting shape view properties

- [background](strokeshapeview/background.md): The background shown beneath this view.
- [isAntialiased](strokeshapeview/isantialiased.md): Whether this shape should be drawn antialiased.
- [shape](strokeshapeview/shape.md): The shape that this type draws and provides for other drawing operations.
- [strokeStyle](strokeshapeview/strokestyle.md): The stroke style used when stroking this view’s shape.
- [style](strokeshapeview/style.md): The style that strokes this view’s shape.

## Relationships

### Conforms To

- [ShapeView](shapeview.md)
- [View](view.md)

## See Also

### Defining shape behavior

- [ShapeView](shapeview.md): A view that provides a shape that you can use for drawing operations.
- [Shape](shape.md): A 2D shape that you can use when drawing a view.
- [AnyShape](anyshape.md): A type-erased shape value.
- [ShapeRole](shaperole.md): Ways of styling a shape.
- [StrokeStyle](strokestyle.md): The characteristics of a stroke that traces a path.
- [StrokeBorderShapeView](strokebordershapeview.md): A shape provider that strokes the border of its shape.
- [FillStyle](fillstyle.md): A style for rasterizing vector shapes.
- [FillShapeView](fillshapeview.md): A shape provider that fills its shape.
