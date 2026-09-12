> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vngenerateobjectnessbasedsaliencyimagerequest](https://developer.apple.com/documentation/vision/vngenerateobjectnessbasedsaliencyimagerequest)

# VNGenerateObjectnessBasedSaliencyImageRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A request that generates a heat map that identifies the parts of an image most likely to represent objects.

## Declaration

```swift
class VNGenerateObjectnessBasedSaliencyImageRequest
```

<a id="overview"></a>

## Overview

The resulting observation, [VNSaliencyImageObservation](vnsaliencyimageobservation.md), encodes this data as a heat map, which you can use to highlight regions of interest.

## Topics

### Accessing the Results

- [results](vngenerateobjectnessbasedsaliencyimagerequest/results.md): The results of the image saliency request.

### Identifying Request Revisions

- [VNGenerateObjectnessBasedSaliencyImageRequestRevision1](vngenerateobjectnessbasedsaliencyimagerequestrevision1.md): A constant for specifying revision 1 of the image saliency request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Saliency analysis

- [Cropping Images Using Saliency](cropping-images-using-saliency.md): Isolate regions in an image that are most likely to draw people’s attention.
- [Highlighting Areas of Interest in an Image Using Saliency](highlighting-areas-of-interest-in-an-image-using-saliency.md): Quantify and visualize where people are likely to look in an image.
- [VNGenerateAttentionBasedSaliencyImageRequest](vngenerateattentionbasedsaliencyimagerequest.md): An object that produces a heat map that identifies the parts of an image most likely to draw attention.
- [VNSaliencyImageObservation](vnsaliencyimageobservation.md): An observation that contains a grayscale heat map of important areas across an image.

# VNGenerateObjectnessBasedSaliencyImageRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A request that generates a heat map that identifies the parts of an image most likely to represent objects.

## Declaration

```objectivec
@interface VNGenerateObjectnessBasedSaliencyImageRequest : VNImageBasedRequest
```

<a id="overview"></a>

## Overview

The resulting observation, [VNSaliencyImageObservation](vnsaliencyimageobservation.md), encodes this data as a heat map, which you can use to highlight regions of interest.

## Topics

### Accessing the Results

- [results](vngenerateobjectnessbasedsaliencyimagerequest/results.md): The results of the image saliency request.

### Identifying Request Revisions

- [VNGenerateObjectnessBasedSaliencyImageRequestRevision1](vngenerateobjectnessbasedsaliencyimagerequestrevision1.md): A constant for specifying revision 1 of the image saliency request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

## See Also

### Saliency analysis

- [Cropping Images Using Saliency](cropping-images-using-saliency.md): Isolate regions in an image that are most likely to draw people’s attention.
- [VNGenerateAttentionBasedSaliencyImageRequest](vngenerateattentionbasedsaliencyimagerequest.md): An object that produces a heat map that identifies the parts of an image most likely to draw attention.
- [VNSaliencyImageObservation](vnsaliencyimageobservation.md): An observation that contains a grayscale heat map of important areas across an image.
