> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/filter/distortionshader(_:maxsampleoffset:)](https://developer.apple.com/documentation/swiftui/graphicscontext/filter/distortionshader(_:maxsampleoffset:))

# distortionShader(\_:maxSampleOffset:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a filter that applies `shader` as a geometric distortion effect on the location of each pixel.

## Declaration

```swift
static func distortionShader(_ shader: Shader, maxSampleOffset: CGSize) -> GraphicsContext.Filter
```

## Parameters

- `shader`: The shader to apply as a distortion effect.
- `maxSampleOffset`: The maximum distance in each axis between the returned source pixel position and the destination pixel position, for all source pixels.

<a id="return-value"></a>

## Return Value

A new filter that applies the shader as a distortion effect.

<a id="discussion"></a>

## Discussion

For a shader function to act as a distortion effect it must have a function signature matching:

```swift
[[ stitchable ]] float2 name(float2 position, args...)
```

where `position` is the user-space coordinates of the destination pixel applied to the shader. `args...` should be compatible with the uniform arguments bound to `shader`. The function should return the user-space coordinates of the corresponding source pixel.

## See Also

### Using a custom Metal shader

- [colorShader(\_:)](colorshader%28__%29.md): Returns a filter that applies `shader` to the color of each source pixel.
- [layerShader(\_:maxSampleOffset:)](layershader%28__maxsampleoffset_%29.md): Returns a filter that applies `shader` to the contents of the source layer.
