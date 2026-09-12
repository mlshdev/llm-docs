> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/strokestyle](https://developer.apple.com/documentation/swiftui/strokestyle)

# StrokeStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The characteristics of a stroke that traces a path.

## Declaration

```swift
@frozen struct StrokeStyle
```

## Topics

### Creating a stroke style

- [init(lineWidth:lineCap:lineJoin:miterLimit:dash:dashPhase:)](strokestyle/init%28linewidth_linecap_linejoin_miterlimit_dash_dashphase_%29.md): Creates a new stroke style from the given components.

### Setting stroke style properties

- [lineWidth](strokestyle/linewidth.md): The width of the stroked path.
- [lineCap](strokestyle/linecap.md): The endpoint style of a line.
- [lineJoin](strokestyle/linejoin.md): The join type of a line.
- [miterLimit](strokestyle/miterlimit.md): A threshold used to determine whether to use a bevel instead of a miter at a join.
- [dash](strokestyle/dash.md): The lengths of painted and unpainted segments used to make a dashed line.
- [dashPhase](strokestyle/dashphase.md): How far into the dash pattern the line starts.

## Relationships

### Conforms To

- [Animatable](animatable.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining shape behavior

- [ShapeView](shapeview.md): A view that provides a shape that you can use for drawing operations.
- [Shape](shape.md): A 2D shape that you can use when drawing a view.
- [AnyShape](anyshape.md): A type-erased shape value.
- [ShapeRole](shaperole.md): Ways of styling a shape.
- [StrokeShapeView](strokeshapeview.md): A shape provider that strokes its shape.
- [StrokeBorderShapeView](strokebordershapeview.md): A shape provider that strokes the border of its shape.
- [FillStyle](fillstyle.md): A style for rasterizing vector shapes.
- [FillShapeView](fillshapeview.md): A shape provider that fills its shape.
