> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/format/normalencoding/xy](https://developer.apple.com/documentation/realitykit/textureresource/format/normalencoding/xy)

# TextureResource.Format.NormalEncoding.xy

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A normal map with the X and Y components of a surface normal in the tangent space of the surface that RealityKit encodes in the red and green channels of a texture.

## Declaration

```swift
case xy
```

<a id="discussion"></a>

## Discussion

Each component value is between `0.0` and `1.0`.

## See Also

### Normal profiles

- [TextureResource.Format.NormalEncoding.wy](wy.md): A normal map with the X and Y components of a surface normal in the tangent space of the surface that RealityKit encodes in the alpha and green channels of a texture.
