> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/ray3dfloat/unapplying(_:)-2ouak](https://developer.apple.com/documentation/spatial/ray3dfloat/unapplying(_:)-2ouak)

# unapplying(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a ray that’s transformed by the inverse of the specified pose.

## Declaration

```swift
func unapplying(_ pose: Pose3DFloat) -> Ray3DFloat
```

## Parameters

- `pose`: The pose.

<a id="discussion"></a>

## Discussion

- Returns The transformed ray. This function rotates the ray’s direction by the pose’s rotation and offsets the ray’s origin by the pose’s position.
