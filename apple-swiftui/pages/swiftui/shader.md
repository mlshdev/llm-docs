> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shader](https://developer.apple.com/documentation/swiftui/shader)

# Shader

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A reference to a function in a Metal shader library, along with its bound uniform argument values.

## Declaration

```swift
struct Shader
```

<a id="overview"></a>

## Overview

Shader values can be used as filter effects on views, see the [colorEffect(\_:isEnabled:)](view/coloreffect%28__isenabled_%29.md), [distortionEffect(\_:maxSampleOffset:isEnabled:)](view/distortioneffect%28__maxsampleoffset_isenabled_%29.md), and [layerEffect(\_:maxSampleOffset:isEnabled:)](view/layereffect%28__maxsampleoffset_isenabled_%29.md) functions.

Shaders also conform to the [ShapeStyle](shapestyle.md) protocol, letting their MSL shader function provide per-pixel color to fill any shape or text view. For a shader function to act as a fill pattern it must have a function signature matching:

```swift
[[ stitchable ]] half4 name(float2 position, args...)
```

where `position` is the user-space coordinates of the pixel applied to the shader, and `args...` should be compatible with the uniform arguments bound to `shader`. The function should return the premultiplied color value in the color space of the destination (typically extended sRGB).

## Topics

### Creating a shader

- [init(function:arguments:)](shader/init%28function_arguments_%29.md): Creates a new shader from a function and the uniform argument values to bind to the function.
- [Shader.Argument](shader/argument.md): A single uniform argument value to a shader function.

### Getting the shader function

- [function](shader/function.md): The shader function called by the shader.
- [arguments](shader/arguments.md): The uniform argument values passed to the shader function.

### Configuring the shader

- [dithersColor](shader/ditherscolor.md): For shader functions that return color values, whether the returned color has dither noise added to it, or is simply rounded to the output bit-depth. For shaders generating smooth gradients, dithering is usually necessary to prevent visible banding in the result.

### Structures

- [Shader.UsageType](shader/usagetype.md): The different ways in which a `Shader` may be used to render.

### Instance Methods

- [compile(as:)](shader/compile%28as_%29.md): Attempts to asynchronously compile a shader function, to minimize the chance of stalling when it is first used for rendering.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [ShapeStyle](shapestyle.md)

## See Also

### Accessing Metal shaders

- [colorEffect(\_:isEnabled:)](view/coloreffect%28__isenabled_%29.md): Returns a new view that applies `shader` to `self` as a filter effect on the color of each pixel.
- [distortionEffect(\_:maxSampleOffset:isEnabled:)](view/distortioneffect%28__maxsampleoffset_isenabled_%29.md): Returns a new view that applies `shader` to `self` as a geometric distortion effect on the location of each pixel.
- [layerEffect(\_:maxSampleOffset:isEnabled:)](view/layereffect%28__maxsampleoffset_isenabled_%29.md): Returns a new view that applies `shader` to `self` as a filter on the raster layer created from `self`.
- [ShaderFunction](shaderfunction.md): A reference to a function in a Metal shader library.
- [ShaderLibrary](shaderlibrary.md): A Metal shader library.
