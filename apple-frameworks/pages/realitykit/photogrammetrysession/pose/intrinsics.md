> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/photogrammetrysession/pose/intrinsics

# intrinsics

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

If available, the estimated pinhole camera intrinsics matrix associated with the input image.  If not available, `nil`.

## Declaration

```swift
var intrinsics: simd_float3x3? { get }
```
