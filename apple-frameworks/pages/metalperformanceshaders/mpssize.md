> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpssize](https://developer.apple.com/documentation/metalperformanceshaders/mpssize)

# MPSSize (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A size of a region in an image.

## Declaration

```swift
struct MPSSize
```

<a id="overview"></a>

## Overview

The depth of a region is usually `1.0`.

The `double` data type is used because some kernel operations require fractional precision—for example, the [MPSImageLanczosScale](mpsimagelanczosscale.md) filter.

## Topics

### Fields

- [width](mpssize/width.md): The width of the region, in pixels.
- [height](mpssize/height.md): The height of the region, in pixels.
- [depth](mpssize/depth.md): The depth of the region, in pixels.

### Initializers

- [init()](mpssize/init%28%29.md)
- [init(width:height:depth:)](mpssize/init%28width_height_depth_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# MPSSize (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A size of a region in an image.

## Declaration

```objectivec
typedef struct MPSSize { ... } MPSSize;
```

<a id="overview"></a>

## Overview

The depth of a region is usually `1.0`.

The `double` data type is used because some kernel operations require fractional precision—for example, the [MPSImageLanczosScale](mpsimagelanczosscale.md) filter.

## Topics

### Fields

- [width](mpssize/width.md): The width of the region, in pixels.
- [height](mpssize/height.md): The height of the region, in pixels.
- [depth](mpssize/depth.md): The depth of the region, in pixels.
