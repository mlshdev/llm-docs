> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/projectivetransformcameracomponent/transform

# transform

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The custom projection RealityKit applies to objects in the scene.

## Declaration

```swift
var transform: float4x4
```

<a id="discussion"></a>

## Discussion

The value defaults to `4x4` zero matrix. Swap the near and far values to use a reverse depth matrix.
