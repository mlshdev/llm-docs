> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/eulerangles/init(angles:order:)-44rv1](https://developer.apple.com/documentation/spatial/eulerangles/init(angles:order:)-44rv1)

# init(angles:order:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a new Euler angles structure from the specified single-precision angles and order.

## Declaration

```swift
init(angles: simd_float3, order: EulerAngles.Order)
```

## Parameters

- `angles`: A three-element, single-precision vector that specifies the Euler angles.
- `order`: The Euler angle order.

<a id="Discussion"></a>

## Discussion

> **Note**

> In Swift, use [EulerAngles.Order](https://developer.apple.com/documentation/spatial/eulerangles/order-swift.typealias) in place of `__SPEulerAngleOrder`.

## See Also

### Initializers

- [init()](init%28%29.md): Creates a new Euler angles structure.
- [init(angles:order:)](init%28angles_order_%29-93mu1.md): Creates a new Euler angles structure from the specified double-precision angles and order.
- [init(x:y:z:order:)](init%28x_y_z_order_%29.md): Creates a new Euler angles structure from the specified angle structures and order.
- [init(\_:\_:\_:order:)](init%28______order_%29.md): Deprecated. Creates a new Euler angles structure from the specified angle structures and order.
