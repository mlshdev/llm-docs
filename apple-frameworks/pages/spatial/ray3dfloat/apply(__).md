> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/ray3dfloat/apply(_:)

# apply(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Applies a pose.

## Declaration

```swift
mutating func apply(_ pose: Pose3DFloat)
```

## Parameters

- `pose`: The pose. This function rotate’s the ray’s direction by the pose’s rotation and sets the ray’s origin to the pose’s position.
