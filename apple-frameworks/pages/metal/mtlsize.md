> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsize](https://developer.apple.com/documentation/metal/mtlsize)

# MTLSize (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A type that represents one, two, or three dimensions of a type instance, such as an array or texture.

## Declaration

```swift
struct MTLSize
```

## Mentioned In

- [Converting between pixel regions and sparse tile regions](converting-between-pixel-regions-and-sparse-tile-regions.md)
- [Calculating threadgroup and grid sizes](calculating-threadgroup-and-grid-sizes.md)
- [Creating a rasterization rate map](creating-a-rasterization-rate-map.md)

<a id="overview"></a>

## Overview

Metal has many types that represent arrays of discrete elements, such as:

- A texture, which has an array of pixel elements
- A thread grid, which has an array of computational threads

Types and methods that work with these array-like types frequently have an [MTLSize](mtlsize.md) property or parameter that refers to the extents of a specific instance of the type, or a region within the instance.

> **Important**

> Treat each size instance as a measure of something in 3D, even if it represents something with only one or two dimensions, by assigning `1` to the irrelevant dimensions.

The following are some examples for setting a size for an instance that has less than three dimentions:

- For a 2D texture that has a height and width of `5`, set a size’s [depth](mtlsize/depth.md) property to `1` so that it represents `[5, 5, 1]`.
- For a 1D array with length `42`, set a size’s [height](mtlsize/height.md), [depth](mtlsize/depth.md) properties to `1`, so that it represents `[42, 1, 1]`.

## Topics

### Creating a size instance

- [init()](mtlsize/init%28%29.md): Creates a default size instance by setting the initial values for its width, height, and depth properties to zero.
- [init(width:height:depth:)](mtlsize/init%28width_height_depth_%29.md): Creates a size instance with values for its width, height, and depth properties.
- [MTLSizeMake(\_:\_:\_:)](mtlsizemake%28______%29.md): Creates a size instance with values for its width, height, and depth properties.

### Accessing a size’s dimensions

- [width](mtlsize/width.md): A value for the x-axis dimension.
- [height](mtlsize/height.md): A value for the y-axis dimension.
- [depth](mtlsize/depth.md): A value for the z-axis dimension.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Indirect compute commands

- [MTLIndirectComputeCommand](mtlindirectcomputecommand.md): A compute command in an indirect command buffer.
- [MTLRegion](mtlregion.md): The bounds for a subset of an instance’s elements.
- [MTLOrigin](mtlorigin.md): The coordinates for the front upper-left corner of a region.
- [MTLStageInRegionIndirectArguments](mtlstageinregionindirectarguments.md): The data layout required for the arguments needed to specify the stage-in region.
- [MTLDispatchThreadgroupsIndirectArguments](mtldispatchthreadgroupsindirectarguments.md): The data layout required for arguments needed to specify the size of threadgroups.

# MTLSize (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A type that represents one, two, or three dimensions of a type instance, such as an array or texture.

## Declaration

```objectivec
typedef struct { ... } MTLSize;
```

## Mentioned In

- [Converting between pixel regions and sparse tile regions](converting-between-pixel-regions-and-sparse-tile-regions.md)
- [Calculating threadgroup and grid sizes](calculating-threadgroup-and-grid-sizes.md)
- [Creating a rasterization rate map](creating-a-rasterization-rate-map.md)

<a id="overview"></a>

## Overview

Metal has many types that represent arrays of discrete elements, such as:

- A texture, which has an array of pixel elements
- A thread grid, which has an array of computational threads

Types and methods that work with these array-like types frequently have an [MTLSize](mtlsize.md) property or parameter that refers to the extents of a specific instance of the type, or a region within the instance.

> **Important**

> Treat each size instance as a measure of something in 3D, even if it represents something with only one or two dimensions, by assigning `1` to the irrelevant dimensions.

The following are some examples for setting a size for an instance that has less than three dimentions:

- For a 2D texture that has a height and width of `5`, set a size’s [depth](mtlsize/depth.md) property to `1` so that it represents `[5, 5, 1]`.
- For a 1D array with length `42`, set a size’s [height](mtlsize/height.md), [depth](mtlsize/depth.md) properties to `1`, so that it represents `[42, 1, 1]`.

## Topics

### Creating a size instance

- [MTLSizeMake](mtlsizemake%28______%29.md): Creates a size instance with values for its width, height, and depth properties.

### Accessing a size’s dimensions

- [width](mtlsize/width.md): A value for the x-axis dimension.
- [height](mtlsize/height.md): A value for the y-axis dimension.
- [depth](mtlsize/depth.md): A value for the z-axis dimension.

## See Also

### Indirect compute commands

- [MTLIndirectComputeCommand](mtlindirectcomputecommand.md): A compute command in an indirect command buffer.
- [MTLRegion](mtlregion.md): The bounds for a subset of an instance’s elements.
- [MTLOrigin](mtlorigin.md): The coordinates for the front upper-left corner of a region.
- [MTLStageInRegionIndirectArguments](mtlstageinregionindirectarguments.md): The data layout required for the arguments needed to specify the stage-in region.
- [MTLDispatchThreadgroupsIndirectArguments](mtldispatchthreadgroupsindirectarguments.md): The data layout required for arguments needed to specify the size of threadgroups.
