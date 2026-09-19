> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/affinetransform3dfloat/rotation

# rotation

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The affine transform’s rotation.

## Declaration

```swift
var rotation: Rotation3DFloat? { get }
```

<a id="discussion"></a>

## Discussion

This function can’t extract rotation from a non-scale-rotate-translate affine transform. In that case, the function returns `nil`.
