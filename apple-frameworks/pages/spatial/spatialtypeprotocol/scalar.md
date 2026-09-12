> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spatialtypeprotocol/scalar](https://developer.apple.com/documentation/spatial/spatialtypeprotocol/scalar)

# Scalar

**Framework:** Spatial  
**Kind:** Associated Type  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
associatedtype Scalar : Numeric where Self.Scalar == Self.AffineTransform.Scalar, Self.AffineTransform.Scalar == Self.Point.Scalar, Self.Point.Scalar == Self.Pose.Scalar, Self.Pose.Scalar == Self.ProjectiveTransform.Scalar, Self.ProjectiveTransform.Scalar == Self.Rect.Scalar, Self.Rect.Scalar == Self.Rotation.Scalar, Self.Rotation.Scalar == Self.Size.Scalar, Self.Size.Scalar == Self.Vector.Scalar
```
