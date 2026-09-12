> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tintshapestyle](https://developer.apple.com/documentation/swiftui/tintshapestyle)

# TintShapeStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A style that reflects the current tint color.

## Declaration

```swift
struct TintShapeStyle
```

<a id="overview"></a>

## Overview

You can set the tint color with the [tint(\_:)](view/tint%28__%29.md) modifier. If no explicit tint is set, the tint is derived from the app’s accent color.

You can also use [tint](shapestyle/tint.md) to construct this style.

## Topics

### Creating a tint shape style

- [init()](tintshapestyle/init%28%29.md): Creates a tint shape style.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [ShapeStyle](shapestyle.md)

## See Also

### Supporting types

- [AngularGradient](angulargradient.md): An angular gradient.
- [EllipticalGradient](ellipticalgradient.md): A radial gradient that draws an ellipse.
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
- [FillShapeStyle](fillshapestyle.md): A shape style that displays one of the overlay fills.
- [LinkShapeStyle](linkshapestyle.md): A style appropriate for links.
- [PlaceholderTextShapeStyle](placeholdertextshapestyle.md): A style appropriate for placeholder text.
