> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowleveldeformation/skinning-swift.struct/geometrybindtransform

# geometryBindTransform

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The geometry bind transform applied to vertex positions before the joint skinning math.

## Declaration

```swift
var geometryBindTransform: simd_float4x4 { get nonmutating set }
```

<a id="discussion"></a>

## Discussion

Defaults to `matrix_identity_float4x4`. Can be changed between `encode()` calls.
