> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/fillshapeview](https://developer.apple.com/documentation/swiftui/fillshapeview)

# FillShapeView

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A shape provider that fills its shape.

## Declaration

```swift
@frozen nonisolated struct FillShapeView<Content, Style, Background> where Content : Shape, Style : ShapeStyle, Background : View
```

<a id="overview"></a>

## Overview

You do not create this type directly, it is the return type of `Shape.fill`.

## Topics

### Creating a stroke shape view

- [init(shape:style:fillStyle:background:)](fillshapeview/init%28shape_style_fillstyle_background_%29.md): Create a FillShapeView.

### Getting shape view properties

- [background](fillshapeview/background.md): The background shown beneath this view.
- [fillStyle](fillshapeview/fillstyle.md): The fill style used when filling this view’s shape.
- [shape](fillshapeview/shape.md): The shape that this type draws and provides for other drawing operations.
- [style](fillshapeview/style.md): The style that fills this view’s shape.

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
- [StrokeShapeView](strokeshapeview.md): A shape provider that strokes its shape.
- [StrokeBorderShapeView](strokebordershapeview.md): A shape provider that strokes the border of its shape.
- [FillStyle](fillstyle.md): A style for rasterizing vector shapes.
