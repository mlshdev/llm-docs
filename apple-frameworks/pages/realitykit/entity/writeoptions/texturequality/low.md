> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/entity/writeoptions/texturequality/low

# low

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Aggressively reduces the texture file size. RealityKit can suppress some visual details to reach the smallest file size.

## Declaration

```swift
static var low: Entity.WriteOptions.TextureQuality { get }
```

## See Also

### Choosing a quality level

- [medium](medium.md): Reduces more the texture file size. RealityKit might not preserve fine details to reach a small file size.
