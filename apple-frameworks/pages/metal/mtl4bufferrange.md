> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4bufferrange](https://developer.apple.com/documentation/metal/mtl4bufferrange)

# MTL4BufferRange (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
struct MTL4BufferRange
```

<a id="overview"></a>

## Overview

A struct representing a range of a Metal buffer. The offset into the buffer is included in the address. The length is generally optional, which a value of (uint64_t)-1 representing the range from the given address to the end of the buffer. However, providing the length can enable more accurate API validation, especially when sub-allocating ranges of a buffer.

## Topics

### Initializers

- [init()](mtl4bufferrange/init%28%29.md)
- [init(bufferAddress:length:)](mtl4bufferrange/init%28bufferaddress_length_%29.md)

### Instance Properties

- [bufferAddress](mtl4bufferrange/bufferaddress.md)
- [length](mtl4bufferrange/length.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Supporting types

- [MTLAxisAlignedBoundingBox](mtlaxisalignedboundingbox-swift.typealias.md): The bounds for an axis-aligned bounding box.
- [MTLPackedFloat3](mtlpackedfloat3-swift.typealias.md): }
- [MTLPackedFloat4x3](mtlpackedfloat4x3-swift.typealias.md): A structure that contains the top three rows of a 4x4 matrix of 32-bit floating-point values, in column-major order.
- [MTLPackedFloat3Make(\_:\_:\_:)](mtlpackedfloat3make%28______%29.md): Returns a new packed vector with three floating-point values.
- [MTL4BufferRangeMake(\_:\_:)](mtl4bufferrangemake%28____%29.md)

# MTL4BufferRange (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef struct MTL4BufferRange { ... } MTL4BufferRange;
```

<a id="overview"></a>

## Overview

A struct representing a range of a Metal buffer. The offset into the buffer is included in the address. The length is generally optional, which a value of (uint64_t)-1 representing the range from the given address to the end of the buffer. However, providing the length can enable more accurate API validation, especially when sub-allocating ranges of a buffer.

## Topics

### Instance Properties

- [bufferAddress](mtl4bufferrange/bufferaddress.md)
- [length](mtl4bufferrange/length.md)

## See Also

### Supporting types

- [MTLAxisAlignedBoundingBox](mtlaxisalignedboundingbox-c.struct.md): The bounds for an axis-aligned bounding box.
- [MTLPackedFloat3](mtlpackedfloat3-c.struct.md): A structure that contains three 32-bit floating-point values with no additional padding.
- [MTLPackedFloat4x3](mtlpackedfloat4x3-c.struct.md): A structure that contains the top three rows of a 4x4 matrix of 32-bit floating-point values, in column-major order.
- [MTLPackedFloat3Make](mtlpackedfloat3make%28______%29.md): Returns a new packed vector with three floating-point values.
- [MTL4BufferRangeMake](mtl4bufferrangemake%28____%29.md)
