> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidistancegradientfromredmask](https://developer.apple.com/documentation/coreimage/cidistancegradientfromredmask)

# CIDistanceGradientFromRedMask (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The protocol for the Distance Gradient From Red Mask filter.

## Declaration

```swift
protocol CIDistanceGradientFromRedMask : CIFilterProtocol
```

<a id="overview"></a>

## Overview

Produces an infinite image where the red channel contains the distance in pixels from each pixel to the mask.

## Topics

### Instance Properties

- [inputImage](cidistancegradientfromredmask/inputimage.md): The input image whose red channel defines a mask. If the red channel pixel value is greater than 0.5 then the point is considered in the mask and output pixel will be zero. Otherwise the output pixel will be a value between zero and one.
- [maximumDistance](cidistancegradientfromredmask/maximumdistance.md): Determines the maximum distance to the mask that can be measured. Distances between zero and the maximum will be normalized to zero and one.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

# CIDistanceGradientFromRedMask (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The protocol for the Distance Gradient From Red Mask filter.

## Declaration

```objectivec
@protocol CIDistanceGradientFromRedMask <CIFilter>
```

<a id="overview"></a>

## Overview

Produces an infinite image where the red channel contains the distance in pixels from each pixel to the mask.

## Topics

### Instance Properties

- [inputImage](cidistancegradientfromredmask/inputimage.md): The input image whose red channel defines a mask. If the red channel pixel value is greater than 0.5 then the point is considered in the mask and output pixel will be zero. Otherwise the output pixel will be a value between zero and one.
- [maximumDistance](cidistancegradientfromredmask/maximumdistance.md): Determines the maximum distance to the mask that can be measured. Distances between zero and the maximum will be normalized to zero and one.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)
