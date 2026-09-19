> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/textureresource/semantic-swift.enum/normal

# TextureResource.Semantic.normal

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Use the texture to store surface normals.

## Declaration

```swift
case normal
```

<a id="discussion"></a>

## Discussion

Properties that specify a semantic of `normal` use the texture to store tangent-space surface normal vectors for use in lighting calculations. Each pixel’s `R` channel stores the `X` value from the vector. The `G` channel stores the `Y` value from the vector, and the `B` channel stores the `Z` value from the vector. All values are between `-1.0` and `1.0`.

## See Also

### Specifying intended use

- [TextureResource.Semantic.raw](raw.md): Use the texture unmodified.
- [TextureResource.Semantic.color](color.md): Use the texture to store colors data.
- [TextureResource.Semantic.hdrColor](hdrcolor.md): Use the texture to store a high-dynamic range image.
- [TextureResource.Semantic.scalar](scalar.md): Use the texture to store a single value in each pixel.
