> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/ellipticalgradient](https://developer.apple.com/documentation/swiftui/ellipticalgradient)

# EllipticalGradient

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A radial gradient that draws an ellipse.

## Declaration

```swift
@frozen nonisolated struct EllipticalGradient
```

<a id="overview"></a>

## Overview

The gradient maps its coordinate space to the unit space square in which its center and radii are defined, then stretches that square to fill its bounding rect, possibly also stretching the circular gradient to have elliptical contours.

For example, an elliptical gradient centered on the view, filling its bounds:

```swift
EllipticalGradient(gradient: .init(colors: [.red, .yellow]))
```

When using an elliptical gradient as a shape style, you can also use [ellipticalGradient(\_:center:startRadiusFraction:endRadiusFraction:)](shapestyle/ellipticalgradient%28__center_startradiusfraction_endradiusfraction_%29.md).

## Topics

### Creating an elliptical gradient

- [init(gradient:center:startRadiusFraction:endRadiusFraction:)](ellipticalgradient/init%28gradient_center_startradiusfraction_endradiusfraction_%29.md): Creates an elliptical gradient.
- [init(colors:center:startRadiusFraction:endRadiusFraction:)](ellipticalgradient/init%28colors_center_startradiusfraction_endradiusfraction_%29.md): Creates an elliptical gradient from a collection of colors.
- [init(stops:center:startRadiusFraction:endRadiusFraction:)](ellipticalgradient/init%28stops_center_startradiusfraction_endradiusfraction_%29.md): Creates an elliptical gradient from a collection of color stops.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [ShapeStyle](shapestyle.md)
- [View](view.md)

## See Also

### Supporting types

- [AngularGradient](angulargradient.md): An angular gradient.
- [LinearGradient](lineargradient.md): A linear gradient.
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
