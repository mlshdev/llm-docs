> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/radialgradient](https://developer.apple.com/documentation/swiftui/radialgradient)

# RadialGradient

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A radial gradient.

## Declaration

```swift
@frozen nonisolated struct RadialGradient
```

<a id="overview"></a>

## Overview

The gradient applies the color function as the distance from a center point, scaled to fit within the defined start and end radii. The gradient maps the unit space center point into the bounding rectangle of each shape filled with the gradient.

When using a radial gradient as a shape style, you can also use [radialGradient(\_:center:startRadius:endRadius:)](shapestyle/radialgradient%28__center_startradius_endradius_%29.md).

## Topics

### Creating a radial gradient

- [init(gradient:center:startRadius:endRadius:)](radialgradient/init%28gradient_center_startradius_endradius_%29.md): Creates a radial gradient from a base gradient.
- [init(colors:center:startRadius:endRadius:)](radialgradient/init%28colors_center_startradius_endradius_%29.md): Creates a radial gradient from a collection of colors.
- [init(stops:center:startRadius:endRadius:)](radialgradient/init%28stops_center_startradius_endradius_%29.md): Creates a radial gradient from a collection of color stops.

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
- [LinearGradient](lineargradient.md): A linear gradient.
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
