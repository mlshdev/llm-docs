> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpackedfloat3make(_:_:_:)](https://developer.apple.com/documentation/metal/mtlpackedfloat3make(_:_:_:))

# MTLPackedFloat3Make(\_:\_:\_:) (Swift)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Returns a new packed vector with three floating-point values.

## Declaration

```swift
func MTLPackedFloat3Make(_ x: Float, _ y: Float, _ z: Float) -> MTLPackedFloat3
```

## Parameters

- `x`: The vector’s x coordinate.
- `y`: The vector’s y coordinate.
- `z`: The vector’s z coordinate.

## See Also

### Supporting types

- [MTLAxisAlignedBoundingBox](mtlaxisalignedboundingbox-swift.typealias.md): The bounds for an axis-aligned bounding box.
- [MTLPackedFloat3](mtlpackedfloat3-swift.typealias.md): }
- [MTLPackedFloat4x3](mtlpackedfloat4x3-swift.typealias.md): A structure that contains the top three rows of a 4x4 matrix of 32-bit floating-point values, in column-major order.
- [MTL4BufferRange](mtl4bufferrange.md)
- [MTL4BufferRangeMake(\_:\_:)](mtl4bufferrangemake%28____%29.md)

# MTLPackedFloat3Make (Objective-C)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Returns a new packed vector with three floating-point values.

## Declaration

```objectivec
static MTLPackedFloat3 MTLPackedFloat3Make(float x, float y, float z);
```

## Parameters

- `x`: The vector’s x coordinate.
- `y`: The vector’s y coordinate.
- `z`: The vector’s z coordinate.

## See Also

### Supporting types

- [MTLAxisAlignedBoundingBox](mtlaxisalignedboundingbox-c.struct.md): The bounds for an axis-aligned bounding box.
- [MTLPackedFloat3](mtlpackedfloat3-c.struct.md): A structure that contains three 32-bit floating-point values with no additional padding.
- [MTLPackedFloat4x3](mtlpackedfloat4x3-c.struct.md): A structure that contains the top three rows of a 4x4 matrix of 32-bit floating-point values, in column-major order.
- [MTL4BufferRange](mtl4bufferrange.md)
- [MTL4BufferRangeMake](mtl4bufferrangemake%28____%29.md)
