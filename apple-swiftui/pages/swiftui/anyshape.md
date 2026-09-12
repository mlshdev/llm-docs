> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/anyshape](https://developer.apple.com/documentation/swiftui/anyshape)

# AnyShape

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type-erased shape value.

## Declaration

```swift
@frozen struct AnyShape
```

<a id="overview"></a>

## Overview

You can use this type to dynamically switch between shape types:

```swift
struct MyClippedView: View {
    var isCircular: Bool

    var body: some View {
        OtherView().clipShape(isCircular ?
            AnyShape(Circle()) : AnyShape(Capsule()))
    }
}
```

## Topics

### Creating a shape

- [init(\_:)](anyshape/init%28__%29.md): Create an any shape instance from a shape.

## Relationships

### Conforms To

- [Animatable](animatable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Shape](shape.md)
- [View](view.md)

## See Also

### Defining shape behavior

- [ShapeView](shapeview.md): A view that provides a shape that you can use for drawing operations.
- [Shape](shape.md): A 2D shape that you can use when drawing a view.
- [ShapeRole](shaperole.md): Ways of styling a shape.
- [StrokeStyle](strokestyle.md): The characteristics of a stroke that traces a path.
- [StrokeShapeView](strokeshapeview.md): A shape provider that strokes its shape.
- [StrokeBorderShapeView](strokebordershapeview.md): A shape provider that strokes the border of its shape.
- [FillStyle](fillstyle.md): A style for rasterizing vector shapes.
- [FillShapeView](fillshapeview.md): A shape provider that fills its shape.
