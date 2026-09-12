> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/eulerangles/init(_:_:_:order:)](https://developer.apple.com/documentation/spatial/eulerangles/init(_:_:_:order:))

# init(\_:\_:\_:order:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates a new Euler angles structure from the specified angle structures and order.

## Declaration

```swift
init(_ x: Angle2D, _ y: Angle2D, _ z: Angle2D, order: EulerAngles.Order)
```

## Parameters

- `x`: The first angle.
- `y`: The second angle.
- `z`: The third angle.
- `order`: The Euler angle order.

<a id="Discussion"></a>

## Discussion

> **Note**

> In Swift, use [EulerAngles.Order](https://developer.apple.com/documentation/spatial/eulerangles/order-swift.typealias) in place of `__SPEulerAngleOrder`.

## See Also

### Deprecated symbols

- [init(eye:target:up:)](../rotation3d/init%28eye_target_up_%29.md): Deprecated. Creates a rotation structure that’s the look-at direction from a position to a target.
- [init(axis:angle:)](../rotation3d/init%28axis_angle_%29.md): Deprecated. Creates a rotation structure with the specified axis and the specified angle from Spatial structures.
- [init(quaternion:)](../rotation3d/init%28quaternion_%29-6ajmn.md): Deprecated. Creates a rotation axis from the specified single-precision quaternion.
- [zero](../rotation3d/zero.md): Deprecated. The rotation with the zero value.
- [isZero](../rotation3d/iszero.md): Deprecated. A Boolean value that indicates whether the rotation is zero.
