> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/coloreffect(_:isenabled:)](https://developer.apple.com/documentation/swiftui/view/coloreffect(_:isenabled:))

# colorEffect(\_:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a new view that applies `shader` to `self` as a filter effect on the color of each pixel.

## Declaration

```swift
nonisolated func colorEffect(_ shader: Shader, isEnabled: Bool = true) -> some View

```

## Parameters

- `shader`: The shader to apply to `self` as a color filter.
- `isEnabled`: Whether the effect is enabled or not.

<a id="return-value"></a>

## Return Value

A new view that renders `self` with the shader applied as a color filter.

<a id="discussion"></a>

## Discussion

For a shader function to act as a color filter it must have a function signature matching:

```swift
[[ stitchable ]] half4 name(float2 position, half4 color, args...)
```

where `position` is the user-space coordinates of the pixel applied to the shader and `color` its source color, as a pre-multiplied color in the destination color space. `args...` should be compatible with the uniform arguments bound to `shader`. The function should return the modified color value.

> **Important**

> Views backed by AppKit or UIKit views may not render into the filtered layer. Instead, they log a warning and display a placeholder image to highlight the error.

## See Also

### Accessing Metal shaders

- [distortionEffect(\_:maxSampleOffset:isEnabled:)](distortioneffect%28__maxsampleoffset_isenabled_%29.md): Returns a new view that applies `shader` to `self` as a geometric distortion effect on the location of each pixel.
- [layerEffect(\_:maxSampleOffset:isEnabled:)](layereffect%28__maxsampleoffset_isenabled_%29.md): Returns a new view that applies `shader` to `self` as a filter on the raster layer created from `self`.
- [Shader](../shader.md): A reference to a function in a Metal shader library, along with its bound uniform argument values.
- [ShaderFunction](../shaderfunction.md): A reference to a function in a Metal shader library.
- [ShaderLibrary](../shaderlibrary.md): A Metal shader library.
