> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/geometricpin/init(named:offsetposition:offsetorientation:)](https://developer.apple.com/documentation/realitykit/geometricpin/init(named:offsetposition:offsetorientation:))

# init(named:offsetPosition:offsetOrientation:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a geometric pin that identifies a local position and orientation.

## Declaration

```swift
init(named name: String, offsetPosition: SIMD3<Float> = SIMD3<Float>(0, 0, 0), offsetOrientation: simd_quatf = simd_quatf(ix: 0, iy: 0, iz: 0, r: 1))
```

## Parameters

- `name`: Name of the `GeometricPin` in the namespace of the owning entity.
- `offsetPosition`: Adjustment of the `GeometricPin` position in the local coordinate frame.
- `offsetOrientation`: Adjustment of the `GeometricPin` orientation in the local coordinate frame.
