> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/ray3dfloat/applying(_:)-9e23e](https://developer.apple.com/documentation/spatial/ray3dfloat/applying(_:)-9e23e)

# applying(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a ray that’s transformed by the specified scaled pose.

## Declaration

```swift
func applying(_ scaledPose: ScaledPose3DFloat) -> Ray3DFloat
```

<a id="discussion"></a>

## Discussion

- Returns The transformed ray. This function rotates the ray’s direction by the pose’s rotation and offsets the ray’s origin by the pose’s position.
