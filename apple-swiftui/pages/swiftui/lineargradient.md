> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/lineargradient](https://developer.apple.com/documentation/swiftui/lineargradient)

# LinearGradient

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A linear gradient.

## Declaration

```swift
@frozen nonisolated struct LinearGradient
```

## Mentioned In

- [Laying out a simple view](laying-out-a-simple-view.md)

<a id="overview"></a>

## Overview

The gradient applies the color function along an axis, as defined by its start and end points. The gradient maps the unit space points into the bounding rectangle of each shape filled with the gradient.

When using a linear gradient as a shape style, you can also use [linearGradient(\_:startPoint:endPoint:)](shapestyle/lineargradient%28__startpoint_endpoint_%29.md).

## Topics

### Creating a linear gradient

- [init(gradient:startPoint:endPoint:)](lineargradient/init%28gradient_startpoint_endpoint_%29.md): Creates a linear gradient from a base gradient.
- [init(colors:startPoint:endPoint:)](lineargradient/init%28colors_startpoint_endpoint_%29.md): Creates a linear gradient from a collection of colors.
- [init(stops:startPoint:endPoint:)](lineargradient/init%28stops_startpoint_endpoint_%29.md): Creates a linear gradient from a collection of color stops.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [ShapeStyle](shapestyle.md)
- [View](view.md)

## See Also

### Supporting types

- [AngularGradient](angulargradient.md): An angular gradient.
- [EllipticalGradient](ellipticalgradient.md): A radial gradient that draws an ellipse.
- [RadialGradient](radialgradient.md): A radial gradient.
- [Material](material.md): A background material type.
- [ImagePaint](imagepaint.md): A shape style that fills a shape by repeating a region of an image.
- [HierarchicalShapeStyle](hierarchicalshapestyle.md): A shape style that maps to one of the numbered content styles.
- [HierarchicalShapeStyleModifier](hierarchicalshapestylemodifier.md): Styles that you can apply to hierarchical shapes.
- [ForegroundStyle](foregroundstyle.md): The foreground style in the current context.
- [BackgroundStyle](backgroundstyle.md): The background style in the current context.
- [SelectionShapeStyle](selectionshapestyle.md): A style used to visually indicate selection following platform conventional colors and behaviors.
- [SeparatorShapeStyle](separatorshapestyle.md): A style appropriate for foreground separator or border lines.
- [TintShapeStyle](tintshapestyle.md): A style that reflects the current tint color.
- [FillShapeStyle](fillshapestyle.md): A shape style that displays one of the overlay fills.
- [LinkShapeStyle](linkshapestyle.md): A style appropriate for links.
- [PlaceholderTextShapeStyle](placeholdertextshapestyle.md): A style appropriate for placeholder text.
