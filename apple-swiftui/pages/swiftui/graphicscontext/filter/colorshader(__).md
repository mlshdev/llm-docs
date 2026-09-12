> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/filter/colorshader(_:)](https://developer.apple.com/documentation/swiftui/graphicscontext/filter/colorshader(_:))

# colorShader(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a filter that applies `shader` to the color of each source pixel.

## Declaration

```swift
static func colorShader(_ shader: Shader) -> GraphicsContext.Filter
```

## Parameters

- `shader`: The shader to apply to `self` as a color filter.

<a id="return-value"></a>

## Return Value

A filter that applies the shader  as a color filter.

<a id="discussion"></a>

## Discussion

For a shader function to act as a color filter it must have a function signature matching:

```swift
[[ stitchable ]] half4 name(float2 position, half4 color, args...)
```

where `position` is the user-space coordinates of the pixel applied to the shader and `color` its source color, as a pre-multiplied color in the destination color space. `args...` should be compatible with the uniform arguments bound to `shader`. The function should return the modified color value.

## See Also

### Using a custom Metal shader

- [distortionShader(\_:maxSampleOffset:)](distortionshader%28__maxsampleoffset_%29.md): Returns a filter that applies `shader` as a geometric distortion effect on the location of each pixel.
- [layerShader(\_:maxSampleOffset:)](layershader%28__maxsampleoffset_%29.md): Returns a filter that applies `shader` to the contents of the source layer.
