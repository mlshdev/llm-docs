> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnsaliencyimageobservation](https://developer.apple.com/documentation/vision/vnsaliencyimageobservation)

# VNSaliencyImageObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An observation that contains a grayscale heat map of important areas across an image.

## Declaration

```swift
class VNSaliencyImageObservation
```

<a id="overview"></a>

## Overview

The heat map is a [CVPixelBuffer](../corevideo/cvpixelbuffer.md) in a one-component floating-point pixel format. Its dimensions are 64 x 64 when fetched in real time, or 68 x 68 when requested in its deferred form.

## Topics

### Locating Salient Regions

- [salientObjects](vnsaliencyimageobservation/salientobjects.md): A collection of objects describing the distinct areas of the saliency heat map.

## Relationships

### Inherits From

- [VNPixelBufferObservation](vnpixelbufferobservation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [VNRequestRevisionProviding](vnrequestrevisionproviding.md)

## See Also

### Saliency analysis

- [Cropping Images Using Saliency](cropping-images-using-saliency.md): Isolate regions in an image that are most likely to draw people’s attention.
- [Highlighting Areas of Interest in an Image Using Saliency](highlighting-areas-of-interest-in-an-image-using-saliency.md): Quantify and visualize where people are likely to look in an image.
- [VNGenerateAttentionBasedSaliencyImageRequest](vngenerateattentionbasedsaliencyimagerequest.md): An object that produces a heat map that identifies the parts of an image most likely to draw attention.
- [VNGenerateObjectnessBasedSaliencyImageRequest](vngenerateobjectnessbasedsaliencyimagerequest.md): A request that generates a heat map that identifies the parts of an image most likely to represent objects.

# VNSaliencyImageObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An observation that contains a grayscale heat map of important areas across an image.

## Declaration

```objectivec
@interface VNSaliencyImageObservation : VNPixelBufferObservation
```

<a id="overview"></a>

## Overview

The heat map is a [CVPixelBufferRef](../corevideo/cvpixelbuffer.md) in a one-component floating-point pixel format. Its dimensions are 64 x 64 when fetched in real time, or 68 x 68 when requested in its deferred form.

## Topics

### Locating Salient Regions

- [salientObjects](vnsaliencyimageobservation/salientobjects.md): A collection of objects describing the distinct areas of the saliency heat map.

## Relationships

### Inherits From

- [VNPixelBufferObservation](vnpixelbufferobservation.md)

## See Also

### Saliency analysis

- [Cropping Images Using Saliency](cropping-images-using-saliency.md): Isolate regions in an image that are most likely to draw people’s attention.
- [VNGenerateAttentionBasedSaliencyImageRequest](vngenerateattentionbasedsaliencyimagerequest.md): An object that produces a heat map that identifies the parts of an image most likely to draw attention.
- [VNGenerateObjectnessBasedSaliencyImageRequest](vngenerateobjectnessbasedsaliencyimagerequest.md): A request that generates a heat map that identifies the parts of an image most likely to represent objects.
