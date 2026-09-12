> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/gaussiansplatresource/bufferresource-swift.struct/init(count:position:scale:rotation:opacity:sphericalharmonics:)](https://developer.apple.com/documentation/realitykit/gaussiansplatresource/bufferresource-swift.struct/init(count:position:scale:rotation:opacity:sphericalharmonics:))

# init(count:position:scale:rotation:opacity:sphericalHarmonics:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a buffer resource from descriptors for each per-splat property.

## Declaration

```swift
@MainActor init(count: Int, position: GaussianSplatResource.BufferDescriptor, scale: GaussianSplatResource.BufferDescriptor, rotation: GaussianSplatResource.BufferDescriptor, opacity: GaussianSplatResource.BufferDescriptor, sphericalHarmonics: (GaussianSplatResource.BufferDescriptor, GaussianSplatResource.SphericalHarmonicDegree)) throws
```

## Parameters

- `count`: The number of splats to render.
- `position`: The descriptor for each splat’s position.
- `scale`: The descriptor for each splat’s scale.
- `rotation`: The descriptor for each splat’s rotation.
- `opacity`: The descriptor for each splat’s opacity.
- `sphericalHarmonics`: The descriptor for each splat’s spherical harmonic coefficients, paired with the degree those coefficients represent.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if a descriptor is invalid or its buffer is too small for the splat count, or if the count exceeds the maximum the platform supports.
