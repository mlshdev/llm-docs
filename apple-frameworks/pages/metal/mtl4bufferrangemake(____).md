> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4bufferrangemake(_:_:)](https://developer.apple.com/documentation/metal/mtl4bufferrangemake(_:_:))

# MTL4BufferRangeMake(\_:\_:) (Swift)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
func MTL4BufferRangeMake(_ bufferAddress: MTLGPUAddress, _ length: UInt64) -> MTL4BufferRange
```

<a id="discussion"></a>

## Discussion

Create a buffer range from a buffer’s GPU address (given by the gpuAddress property) and length. A length of (uint64_t)-1 represents the the range from the given address to the end of the buffer.

## See Also

### Supporting types

- [MTLAxisAlignedBoundingBox](mtlaxisalignedboundingbox-swift.typealias.md): The bounds for an axis-aligned bounding box.
- [MTLPackedFloat3](mtlpackedfloat3-swift.typealias.md): }
- [MTLPackedFloat4x3](mtlpackedfloat4x3-swift.typealias.md): A structure that contains the top three rows of a 4x4 matrix of 32-bit floating-point values, in column-major order.
- [MTLPackedFloat3Make(\_:\_:\_:)](mtlpackedfloat3make%28______%29.md): Returns a new packed vector with three floating-point values.
- [MTL4BufferRange](mtl4bufferrange.md)

# MTL4BufferRangeMake (Objective-C)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
static MTL4BufferRange MTL4BufferRangeMake(MTLGPUAddress bufferAddress, uint64_t length);
```

<a id="discussion"></a>

## Discussion

Create a buffer range from a buffer’s GPU address (given by the gpuAddress property) and length. A length of (uint64_t)-1 represents the the range from the given address to the end of the buffer.

## See Also

### Supporting types

- [MTLAxisAlignedBoundingBox](mtlaxisalignedboundingbox-c.struct.md): The bounds for an axis-aligned bounding box.
- [MTLPackedFloat3](mtlpackedfloat3-c.struct.md): A structure that contains three 32-bit floating-point values with no additional padding.
- [MTLPackedFloat4x3](mtlpackedfloat4x3-c.struct.md): A structure that contains the top three rows of a 4x4 matrix of 32-bit floating-point values, in column-major order.
- [MTLPackedFloat3Make](mtlpackedfloat3make%28______%29.md): Returns a new packed vector with three floating-point values.
- [MTL4BufferRange](mtl4bufferrange.md)
