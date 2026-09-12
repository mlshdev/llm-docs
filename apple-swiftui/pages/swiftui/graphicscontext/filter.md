> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/filter](https://developer.apple.com/documentation/swiftui/graphicscontext/filter)

# GraphicsContext.Filter

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that applies image processing operations to rendered content.

## Declaration

```swift
struct Filter
```

<a id="overview"></a>

## Overview

Create and configure a filter that produces an image processing effect, like adding a drop shadow or a blur effect, by calling one of the factory methods defined by the `Filter` structure. Call the [addFilter(\_:options:)](addfilter%28__options_%29.md) method to add the filter to a [GraphicsContext](../graphicscontext.md). The filter only affects content that you draw into the context after adding the filter.

## Topics

### Changing brightness and contrast

- [brightness(\_:)](filter/brightness%28__%29.md): Returns a filter that applies a brightness adjustment.
- [contrast(\_:)](filter/contrast%28__%29.md): Returns a filter that applies a contrast adjustment.

### Manipulating color

- [saturation(\_:)](filter/saturation%28__%29.md): Returns a filter that applies a saturation adjustment.
- [colorInvert(\_:)](filter/colorinvert%28__%29.md): Returns a filter that inverts the color of their results.
- [colorMultiply(\_:)](filter/colormultiply%28__%29.md): Returns a filter that multiplies each color component by the matching component of a given color.
- [hueRotation(\_:)](filter/huerotation%28__%29.md): Returns a filter that applies a hue rotation adjustment.
- [grayscale(\_:)](filter/grayscale%28__%29.md): Returns a filter that applies a grayscale adjustment.
- [colorMatrix(\_:)](filter/colormatrix%28__%29.md): Returns a filter that multiplies by a given color matrix.

### Adding blur

- [blur(radius:options:)](filter/blur%28radius_options_%29.md): Returns a filter that applies a Gaussian blur.

### Adding a shadow

- [shadow(color:radius:x:y:blendMode:options:)](filter/shadow%28color_radius_x_y_blendmode_options_%29.md): Returns a filter that adds a shadow.

### Adjusting opacity

- [luminanceToAlpha](filter/luminancetoalpha.md): Returns a filter that sets the opacity of each pixel based on its luminance.
- [alphaThreshold(min:max:color:)](filter/alphathreshold%28min_max_color_%29.md): Returns a filter that replaces each pixel with alpha components within a range by a constant color, or transparency otherwise.

### Adding a transformation

- [projectionTransform(\_:)](filter/projectiontransform%28__%29.md): Returns a filter that transforms the rasterized form of subsequent graphics primitives.

### Using a custom Metal shader

- [colorShader(\_:)](filter/colorshader%28__%29.md): Returns a filter that applies `shader` to the color of each source pixel.
- [distortionShader(\_:maxSampleOffset:)](filter/distortionshader%28__maxsampleoffset_%29.md): Returns a filter that applies `shader` as a geometric distortion effect on the location of each pixel.
- [layerShader(\_:maxSampleOffset:)](filter/layershader%28__maxsampleoffset_%29.md): Returns a filter that applies `shader` to the contents of the source layer.

### Type Methods

- [alphaMultiply(\_:)](filter/alphamultiply%28__%29.md): Returns a filter that multiplies the alpha component by a given color.
- [colorMatrix(\_:isPremultiplied:)](filter/colormatrix%28__ispremultiplied_%29.md): Returns a filter that multiplies by a given color matrix.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Filtering

- [addFilter(\_:options:)](addfilter%28__options_%29.md): Adds a filter that applies to subsequent drawing operations.
- [GraphicsContext.FilterOptions](filteroptions.md): Options that configure a filter that you add to a graphics context.
- [GraphicsContext.BlurOptions](bluroptions.md): Options that configure the graphics context filter that creates blur.
- [GraphicsContext.ShadowOptions](shadowoptions.md): Options that configure the graphics context filter that creates shadows.
