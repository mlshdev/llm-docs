> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpackedfloat4x3-c.struct](https://developer.apple.com/documentation/metal/mtlpackedfloat4x3-c.struct)

# MTLPackedFloat4x3

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure that contains the top three rows of a 4x4 matrix of 32-bit floating-point values, in column-major order.

## Declaration

```objectivec
typedef struct _MTLPackedFloat4x3 { ... } MTLPackedFloat4x3;
```

<a id="overview"></a>

## Overview

Metal uses the values `[0,0,0,1]` as the bottom row of the `4x4` matrix.

## Topics

### Instance Properties

- [columns](mtlpackedfloat4x3-c.struct/columns.md)

## See Also

### Supporting types

- [MTLAxisAlignedBoundingBox](mtlaxisalignedboundingbox-c.struct.md): The bounds for an axis-aligned bounding box.
- [MTLPackedFloat3](mtlpackedfloat3-c.struct.md): A structure that contains three 32-bit floating-point values with no additional padding.
- [MTLPackedFloat3Make](mtlpackedfloat3make%28______%29.md): Returns a new packed vector with three floating-point values.
- [MTL4BufferRange](mtl4bufferrange.md)
- [MTL4BufferRangeMake](mtl4bufferrangemake%28____%29.md)
