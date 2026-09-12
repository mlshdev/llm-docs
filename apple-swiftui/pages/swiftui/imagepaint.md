> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/imagepaint](https://developer.apple.com/documentation/swiftui/imagepaint)

# ImagePaint

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A shape style that fills a shape by repeating a region of an image.

## Declaration

```swift
@frozen struct ImagePaint
```

<a id="overview"></a>

## Overview

You can also use [image(\_:sourceRect:scale:)](shapestyle/image%28__sourcerect_scale_%29.md) to construct this style.

## Topics

### Creating an image paint style

- [init(image:sourceRect:scale:)](imagepaint/init%28image_sourcerect_scale_%29.md): Creates a shape-filling shape style.

### Configuring the image paint style

- [image](imagepaint/image.md): The image to be drawn.
- [scale](imagepaint/scale.md): A scale factor applied to the image while being drawn.
- [sourceRect](imagepaint/sourcerect.md): A unit-space rectangle defining how much of the source image to draw.

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
