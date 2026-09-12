> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/fillstyle](https://developer.apple.com/documentation/swiftui/fillstyle)

# FillStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A style for rasterizing vector shapes.

## Declaration

```swift
@frozen struct FillStyle
```

## Topics

### Creating a fill style

- [init(eoFill:antialiased:)](fillstyle/init%28eofill_antialiased_%29.md): Creates a new fill style with the specified settings.

### Setting fill style properties

- [isEOFilled](fillstyle/iseofilled.md): A Boolean value that indicates whether to use the even-odd rule when rendering a shape.
- [isAntialiased](fillstyle/isantialiased.md): A Boolean value that indicates whether to apply antialiasing to the edges of a shape.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining shape behavior

- [ShapeView](shapeview.md): A view that provides a shape that you can use for drawing operations.
- [Shape](shape.md): A 2D shape that you can use when drawing a view.
- [AnyShape](anyshape.md): A type-erased shape value.
- [ShapeRole](shaperole.md): Ways of styling a shape.
- [StrokeStyle](strokestyle.md): The characteristics of a stroke that traces a path.
- [StrokeShapeView](strokeshapeview.md): A shape provider that strokes its shape.
- [StrokeBorderShapeView](strokebordershapeview.md): A shape provider that strokes the border of its shape.
- [FillShapeView](fillshapeview.md): A shape provider that fills its shape.
