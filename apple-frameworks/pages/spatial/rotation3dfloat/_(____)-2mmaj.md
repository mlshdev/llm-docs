> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3dfloat/*(_:_:)-2mmaj](https://developer.apple.com/documentation/spatial/rotation3dfloat/*(_:_:)-2mmaj)

# \*(\_:\_:)

**Framework:** Spatial  
**Kind:** Operator  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Calculates the spherical linear interpolation between the identity rotation and the LHS rotation at the RHS interpolation parameter.

## Declaration

```swift
static func * (lhs: Rotation3DFloat, rhs: Float) -> Rotation3DFloat
```

## Parameters

- `lhs`: The rotation
- `rhs`: The interpolation parameter.

<a id="discussion"></a>

## Discussion

For example, multiplying an angle of 90° by `0.5`, returns an angle of 45°:

```
 let rotation = Rotation3DFloat(angle: Angle2DFloat(degrees: 90),
                           axis: .init(x: 0, y: 1, z: 0))
 let rotated = (rotation * 0.5).angle.degrees
 print(rotated) // prints "45.0"
```

- Note This function returns the longest path where the angle is greater than 180°,
