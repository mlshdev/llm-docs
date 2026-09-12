> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/visualeffect/distortioneffect(_:maxsampleoffset:isenabled:)](https://developer.apple.com/documentation/swiftui/visualeffect/distortioneffect(_:maxsampleoffset:isenabled:))

# distortionEffect(\_:maxSampleOffset:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a new visual effect that applies `shader` to `self` as a geometric distortion effect on the location of each pixel.

## Declaration

```swift
func distortionEffect(_ shader: Shader, maxSampleOffset: CGSize, isEnabled: Bool = true) -> some VisualEffect

```

## Parameters

- `shader`: The shader to apply as a distortion effect.
- `maxSampleOffset`: The maximum distance in each axis between the returned source pixel position and the destination pixel position, for all source pixels.
- `isEnabled`: Whether the effect is enabled or not.

<a id="return-value"></a>

## Return Value

A new view that renders `self` with the shader applied as a distortion effect.

<a id="discussion"></a>

## Discussion

For a shader function to act as a distortion effect it must have a function signature matching:

```swift
[[ stitchable ]] float2 name(float2 position, args...)
```

where `position` is the user-space coordinates of the destination pixel applied to the shader. `args...` should be compatible with the uniform arguments bound to `shader`. The function should return the user-space coordinates of the corresponding source pixel.

> **Important**

> Views backed by AppKit or UIKit views may not render into the filtered layer. Instead, they log a warning and display a placeholder image to highlight the error.

## See Also

### Applying other effects

- [blur(radius:opaque:)](blur%28radius_opaque_%29.md): Applies a Gaussian blur to the view.
- [layerEffect(\_:maxSampleOffset:isEnabled:)](layereffect%28__maxsampleoffset_isenabled_%29.md): Returns a new visual effect that applies `shader` to `self` as a filter on the raster layer created from `self`.
