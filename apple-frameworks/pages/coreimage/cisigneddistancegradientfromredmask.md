> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cisigneddistancegradientfromredmask](https://developer.apple.com/documentation/coreimage/cisigneddistancegradientfromredmask)

# CISignedDistanceGradientFromRedMask (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The protocol for the Signed Distance Gradient From Red Mask filter.

## Declaration

```swift
protocol CISignedDistanceGradientFromRedMask : CIFilterProtocol
```

<a id="overview"></a>

## Overview

Produces an infinite image where the red channel contains the distance in pixels from each pixel to the mask.

## Topics

### Instance Properties

- [inputImage](cisigneddistancegradientfromredmask/inputimage.md): The input image whose red channel defines a mask. If the red channel pixel value is greater than 0.5 then the point is considered in the mask and output pixel will be a value between zero and negative one. Otherwise the output pixel will be a value between zero and one.
- [maximumDistance](cisigneddistancegradientfromredmask/maximumdistance.md): Determines the maximum distance to the mask that can be measured. Distances between zero and the maximum will be normalized to negative one and one.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

# CISignedDistanceGradientFromRedMask (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The protocol for the Signed Distance Gradient From Red Mask filter.

## Declaration

```objectivec
@protocol CISignedDistanceGradientFromRedMask <CIFilter>
```

<a id="overview"></a>

## Overview

Produces an infinite image where the red channel contains the distance in pixels from each pixel to the mask.

## Topics

### Instance Properties

- [inputImage](cisigneddistancegradientfromredmask/inputimage.md): The input image whose red channel defines a mask. If the red channel pixel value is greater than 0.5 then the point is considered in the mask and output pixel will be a value between zero and negative one. Otherwise the output pixel will be a value between zero and one.
- [maximumDistance](cisigneddistancegradientfromredmask/maximumdistance.md): Determines the maximum distance to the mask that can be measured. Distances between zero and the maximum will be normalized to negative one and one.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)
