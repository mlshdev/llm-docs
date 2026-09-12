> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsorigin](https://developer.apple.com/documentation/metalperformanceshaders/mpsorigin)

# MPSOrigin (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A position in an image used as the source origin.

## Declaration

```swift
struct MPSOrigin
```

<a id="overview"></a>

## Overview

The `double` data type is used because some kernel operations require fractional precision—for example, the [MPSImageLanczosScale](mpsimagelanczosscale.md) filter.

## Topics

### Fields

- [x](mpsorigin/x.md): The x coordinate of the position, in pixels.
- [y](mpsorigin/y.md): The y coordinate of the position, in pixels.
- [z](mpsorigin/z.md): The z coordinate of the position, in pixels.

### Initializers

- [init()](mpsorigin/init%28%29.md)
- [init(x:y:z:)](mpsorigin/init%28x_y_z_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# MPSOrigin (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A position in an image used as the source origin.

## Declaration

```objectivec
typedef struct MPSOrigin { ... } MPSOrigin;
```

<a id="overview"></a>

## Overview

The `double` data type is used because some kernel operations require fractional precision—for example, the [MPSImageLanczosScale](mpsimagelanczosscale.md) filter.

## Topics

### Fields

- [x](mpsorigin/x.md): The x coordinate of the position, in pixels.
- [y](mpsorigin/y.md): The y coordinate of the position, in pixels.
- [z](mpsorigin/z.md): The z coordinate of the position, in pixels.
