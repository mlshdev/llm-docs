> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/writeoptions/texturequality/low](https://developer.apple.com/documentation/realitykit/entity/writeoptions/texturequality/low)

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
