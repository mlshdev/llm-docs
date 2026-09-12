> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catextlayer](https://developer.apple.com/documentation/quartzcore/catextlayer)

# CATextLayer (Swift)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A layer that provides simple text layout and rendering of plain or attributed strings.

## Declaration

```swift
class CATextLayer
```

<a id="overview"></a>

## Overview

The first line is aligned to the top of the layer.

> **Note**

>  `CATextLayer` disables sub-pixel antialiasing when rendering text. Text can only be drawn using sub-pixel antialiasing when it is composited into an existing opaque background at the same time that it’s rasterized. There is no way to draw text with sub-pixel antialiasing by itself, whether into an image or a layer, in advance of having the background pixels to weave the text pixels into. Setting the `opacity` property of the layer to [true](https://developer.apple.com/documentation/swift/true) does not change the rendering mode.

> **Note**

>  In macOS, when a `CATextLayer` instance is positioned using the [CAConstraintLayoutManager](caconstraintlayoutmanager.md) class the bounds of the layer is resized to fit the text content.

## Topics

### Getting and Setting the Text

- [string](catextlayer/string.md): The text to be rendered by the receiver.

### Text Visual Properties

- [font](catextlayer/font.md): The font used to render the receiver’s text.
- [fontSize](catextlayer/fontsize.md): The font size used to render the receiver’s text. Animatable.
- [foregroundColor](catextlayer/foregroundcolor.md): The color used to render the receiver’s text. Animatable.
- [allowsFontSubpixelQuantization](catextlayer/allowsfontsubpixelquantization.md): Determines whether to allow subpixel quantization for the graphics context used for text rendering.

### Text Alignment and Truncation

- [isWrapped](catextlayer/iswrapped.md): Determines whether the text is wrapped to fit within the receiver’s bounds.
- [alignmentMode](catextlayer/alignmentmode.md): Determines how individual lines of text are horizontally aligned within the receiver’s bounds.
- [truncationMode](catextlayer/truncationmode.md): Determines how the text is truncated to fit within the receiver’s bounds.

### Constants

- [Truncation modes](truncation-modes.md): These constants are used by the [truncationMode](catextlayer/truncationmode.md) property.
- [Horizontal alignment modes](horizontal-alignment-modes.md): These constants are used by the [alignmentMode](catextlayer/alignmentmode.md) property.

## Relationships

### Inherits From

- [CALayer](calayer.md)

### Conforms To

- [CAMediaTiming](camediatiming.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Text, Shapes, and Gradients

- [CAShapeLayer](cashapelayer.md): A layer that draws a cubic Bezier spline in its coordinate space.
- [CAGradientLayer](cagradientlayer.md): A layer that draws a color gradient over its background color, filling the shape of the layer.

# CATextLayer (Objective-C)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A layer that provides simple text layout and rendering of plain or attributed strings.

## Declaration

```objectivec
@interface CATextLayer : CALayer
```

<a id="overview"></a>

## Overview

The first line is aligned to the top of the layer.

> **Note**

>  `CATextLayer` disables sub-pixel antialiasing when rendering text. Text can only be drawn using sub-pixel antialiasing when it is composited into an existing opaque background at the same time that it’s rasterized. There is no way to draw text with sub-pixel antialiasing by itself, whether into an image or a layer, in advance of having the background pixels to weave the text pixels into. Setting the `opacity` property of the layer to [true](https://developer.apple.com/documentation/swift/true) does not change the rendering mode.

> **Note**

>  In macOS, when a `CATextLayer` instance is positioned using the [CAConstraintLayoutManager](caconstraintlayoutmanager.md) class the bounds of the layer is resized to fit the text content.

## Topics

### Getting and Setting the Text

- [string](catextlayer/string.md): The text to be rendered by the receiver.

### Text Visual Properties

- [font](catextlayer/font.md): The font used to render the receiver’s text.
- [fontSize](catextlayer/fontsize.md): The font size used to render the receiver’s text. Animatable.
- [foregroundColor](catextlayer/foregroundcolor.md): The color used to render the receiver’s text. Animatable.
- [allowsFontSubpixelQuantization](catextlayer/allowsfontsubpixelquantization.md): Determines whether to allow subpixel quantization for the graphics context used for text rendering.

### Text Alignment and Truncation

- [wrapped](catextlayer/iswrapped.md): Determines whether the text is wrapped to fit within the receiver’s bounds.
- [alignmentMode](catextlayer/alignmentmode.md): Determines how individual lines of text are horizontally aligned within the receiver’s bounds.
- [truncationMode](catextlayer/truncationmode.md): Determines how the text is truncated to fit within the receiver’s bounds.

### Constants

- [Truncation modes](truncation-modes.md): These constants are used by the [truncationMode](catextlayer/truncationmode.md) property.
- [Horizontal alignment modes](horizontal-alignment-modes.md): These constants are used by the [alignmentMode](catextlayer/alignmentmode.md) property.

## Relationships

### Inherits From

- [CALayer](calayer.md)

## See Also

### Text, Shapes, and Gradients

- [CAShapeLayer](cashapelayer.md): A layer that draws a cubic Bezier spline in its coordinate space.
- [CAGradientLayer](cagradientlayer.md): A layer that draws a color gradient over its background color, filling the shape of the layer.
