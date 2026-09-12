> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlregion](https://developer.apple.com/documentation/metal/mtlregion)

# MTLRegion (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The bounds for a subset of an instance’s elements.

## Declaration

```swift
struct MTLRegion
```

## Mentioned In

- [Converting between pixel regions and sparse tile regions](converting-between-pixel-regions-and-sparse-tile-regions.md)

<a id="overview"></a>

## Overview

Metal has many instance types that represent arrays of discrete elements. For example, a texture has an array of pixel elements, and a thread grid has an array of computational threads. Use [MTLRegion](mtlregion.md) instances to describe subsets of these instances.

The origin is the front upper-left corner of the region, and its extents go towards the back lower-right corner. Conceptually, when using an [MTLRegion](mtlregion.md) instance to describe a subset of an instance, treat the instance as a 3D array of elements, even if it has fewer dimensions. For a 2D instance, set the z coordinate of the origin to `0` and the depth to `1`. For a 1D instance, set the y and z coordinates of the origin to `0` and the height and depth to `1`.

## Topics

### Creating regions

- [init()](mtlregion/init%28%29.md): Initializes a new region.
- [init(origin:size:)](mtlregion/init%28origin_size_%29.md): Initializes a new region with the specified origin and size.
- [MTLRegionMake1D(\_:\_:)](mtlregionmake1d%28____%29.md): Creates a 3D representation of a 1D region.
- [MTLRegionMake2D(\_:\_:\_:\_:)](mtlregionmake2d%28________%29.md): Creates a 3D representation of a 2D region.
- [MTLRegionMake3D(\_:\_:\_:\_:\_:\_:)](mtlregionmake3d%28____________%29.md): Creates a 3D region.

### Getting and setting region information

- [origin](mtlregion/origin.md): The coordinates of the front upper-left corner of the region.
- [size](mtlregion/size.md): The dimensions of the region.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Indirect compute commands

- [MTLIndirectComputeCommand](mtlindirectcomputecommand.md): A compute command in an indirect command buffer.
- [MTLSize](mtlsize.md): A type that represents one, two, or three dimensions of a type instance, such as an array or texture.
- [MTLOrigin](mtlorigin.md): The coordinates for the front upper-left corner of a region.
- [MTLStageInRegionIndirectArguments](mtlstageinregionindirectarguments.md): The data layout required for the arguments needed to specify the stage-in region.
- [MTLDispatchThreadgroupsIndirectArguments](mtldispatchthreadgroupsindirectarguments.md): The data layout required for arguments needed to specify the size of threadgroups.

# MTLRegion (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The bounds for a subset of an instance’s elements.

## Declaration

```objectivec
typedef struct { ... } MTLRegion;
```

## Mentioned In

- [Converting between pixel regions and sparse tile regions](converting-between-pixel-regions-and-sparse-tile-regions.md)

<a id="overview"></a>

## Overview

Metal has many instance types that represent arrays of discrete elements. For example, a texture has an array of pixel elements, and a thread grid has an array of computational threads. Use [MTLRegion](mtlregion.md) instances to describe subsets of these instances.

The origin is the front upper-left corner of the region, and its extents go towards the back lower-right corner. Conceptually, when using an [MTLRegion](mtlregion.md) instance to describe a subset of an instance, treat the instance as a 3D array of elements, even if it has fewer dimensions. For a 2D instance, set the z coordinate of the origin to `0` and the depth to `1`. For a 1D instance, set the y and z coordinates of the origin to `0` and the height and depth to `1`.

## Topics

### Creating regions

- [MTLRegionMake1D](mtlregionmake1d%28____%29.md): Creates a 3D representation of a 1D region.
- [MTLRegionMake2D](mtlregionmake2d%28________%29.md): Creates a 3D representation of a 2D region.
- [MTLRegionMake3D](mtlregionmake3d%28____________%29.md): Creates a 3D region.

### Getting and setting region information

- [origin](mtlregion/origin.md): The coordinates of the front upper-left corner of the region.
- [size](mtlregion/size.md): The dimensions of the region.

## See Also

### Indirect compute commands

- [MTLIndirectComputeCommand](mtlindirectcomputecommand.md): A compute command in an indirect command buffer.
- [MTLSize](mtlsize.md): A type that represents one, two, or three dimensions of a type instance, such as an array or texture.
- [MTLOrigin](mtlorigin.md): The coordinates for the front upper-left corner of a region.
- [MTLStageInRegionIndirectArguments](mtlstageinregionindirectarguments.md): The data layout required for the arguments needed to specify the stage-in region.
- [MTLDispatchThreadgroupsIndirectArguments](mtldispatchthreadgroupsindirectarguments.md): The data layout required for arguments needed to specify the size of threadgroups.
