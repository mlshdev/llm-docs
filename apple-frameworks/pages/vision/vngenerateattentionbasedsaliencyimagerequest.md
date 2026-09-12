> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vngenerateattentionbasedsaliencyimagerequest](https://developer.apple.com/documentation/vision/vngenerateattentionbasedsaliencyimagerequest)

# VNGenerateAttentionBasedSaliencyImageRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An object that produces a heat map that identifies the parts of an image most likely to draw attention.

## Declaration

```swift
class VNGenerateAttentionBasedSaliencyImageRequest
```

## Topics

### Accessing the Results

- [results](vngenerateattentionbasedsaliencyimagerequest/results.md): The results of the image saliency request.

### Identifying Request Revisions

- [VNGenerateAttentionBasedSaliencyImageRequestRevision1](vngenerateattentionbasedsaliencyimagerequestrevision1.md): A constant for specifying revision 1 of the image saliency request.

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
- [VNGenerateObjectnessBasedSaliencyImageRequest](vngenerateobjectnessbasedsaliencyimagerequest.md): A request that generates a heat map that identifies the parts of an image most likely to represent objects.
- [VNSaliencyImageObservation](vnsaliencyimageobservation.md): An observation that contains a grayscale heat map of important areas across an image.

# VNGenerateAttentionBasedSaliencyImageRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An object that produces a heat map that identifies the parts of an image most likely to draw attention.

## Declaration

```objectivec
@interface VNGenerateAttentionBasedSaliencyImageRequest : VNImageBasedRequest
```

## Topics

### Accessing the Results

- [results](vngenerateattentionbasedsaliencyimagerequest/results.md): The results of the image saliency request.

### Identifying Request Revisions

- [VNGenerateAttentionBasedSaliencyImageRequestRevision1](vngenerateattentionbasedsaliencyimagerequestrevision1.md): A constant for specifying revision 1 of the image saliency request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

## See Also

### Saliency analysis

- [Cropping Images Using Saliency](cropping-images-using-saliency.md): Isolate regions in an image that are most likely to draw people’s attention.
- [VNGenerateObjectnessBasedSaliencyImageRequest](vngenerateobjectnessbasedsaliencyimagerequest.md): A request that generates a heat map that identifies the parts of an image most likely to represent objects.
- [VNSaliencyImageObservation](vnsaliencyimageobservation.md): An observation that contains a grayscale heat map of important areas across an image.
