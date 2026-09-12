> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectrectanglesrequest](https://developer.apple.com/documentation/vision/vndetectrectanglesrequest)

# VNDetectRectanglesRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An image-analysis request that finds projected rectangular regions in an image.

## Declaration

```swift
class VNDetectRectanglesRequest
```

<a id="overview"></a>

## Overview

A rectangle detection request locates regions of an image with rectangular shape, like credit cards, business cards, documents, and signs. The request returns its observations in the form of [VNRectangleObservation](vnrectangleobservation.md) objects, which contain normalized coordinates of bounding boxes containing the rectangle.

Use this type of request to find the bounding boxes of rectangles in an image. Vision returns observations for rectangles found in all orientations and sizes, along with a confidence level to indicate how likely it’s that the observation contains an actual rectangle.

To further configure or restrict the types of rectangles found, set properties on the request specifying a range of aspect ratios, sizes, and quadrature tolerance.

## Topics

### Configuring Detection

- [minimumAspectRatio](vndetectrectanglesrequest/minimumaspectratio.md): A `float` specifying the minimum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [maximumAspectRatio](vndetectrectanglesrequest/maximumaspectratio.md): A `float` specifying the maximum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [VNAspectRatio](vnaspectratio.md): A type alias for expressing rectangle aspect ratios in Vision.
- [quadratureTolerance](vndetectrectanglesrequest/quadraturetolerance.md): A float specifying the number of degrees a rectangle corner angle can deviate from 90°.
- [VNDegrees](vndegrees.md): A typealias for expressing tolerance angles in Vision.
- [minimumSize](vndetectrectanglesrequest/minimumsize.md): The minimum size of a rectangle to detect, as a proportion of the smallest dimension.
- [minimumConfidence](vndetectrectanglesrequest/minimumconfidence.md): A value specifying the minimum acceptable confidence level.
- [VNConfidence](vnconfidence.md): A type alias for the confidence value of an observation.
- [maximumObservations](vndetectrectanglesrequest/maximumobservations.md): An integer specifying the maximum number of rectangles Vision returns.

### Accessing the Results

- [results](vndetectrectanglesrequest/results.md): The results of the request to detect rectangles.
- [VNRectangleObservation](vnrectangleobservation.md): An object that represents the four vertices of a detected rectangle.

### Identifying Request Revisions

- [VNDetectRectanglesRequestRevision1](vndetectrectanglesrequestrevision1.md): A constant for specifying revision 1 of the rectangle detection request.

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

# VNDetectRectanglesRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An image-analysis request that finds projected rectangular regions in an image.

## Declaration

```objectivec
@interface VNDetectRectanglesRequest : VNImageBasedRequest
```

<a id="overview"></a>

## Overview

A rectangle detection request locates regions of an image with rectangular shape, like credit cards, business cards, documents, and signs. The request returns its observations in the form of [VNRectangleObservation](vnrectangleobservation.md) objects, which contain normalized coordinates of bounding boxes containing the rectangle.

Use this type of request to find the bounding boxes of rectangles in an image. Vision returns observations for rectangles found in all orientations and sizes, along with a confidence level to indicate how likely it’s that the observation contains an actual rectangle.

To further configure or restrict the types of rectangles found, set properties on the request specifying a range of aspect ratios, sizes, and quadrature tolerance.

## Topics

### Configuring Detection

- [minimumAspectRatio](vndetectrectanglesrequest/minimumaspectratio.md): A `float` specifying the minimum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [maximumAspectRatio](vndetectrectanglesrequest/maximumaspectratio.md): A `float` specifying the maximum aspect ratio of the rectangle to detect, defined as the shorter dimension over the longer dimension.
- [VNAspectRatio](vnaspectratio.md): A type alias for expressing rectangle aspect ratios in Vision.
- [quadratureTolerance](vndetectrectanglesrequest/quadraturetolerance.md): A float specifying the number of degrees a rectangle corner angle can deviate from 90°.
- [VNDegrees](vndegrees.md): A typealias for expressing tolerance angles in Vision.
- [minimumSize](vndetectrectanglesrequest/minimumsize.md): The minimum size of a rectangle to detect, as a proportion of the smallest dimension.
- [minimumConfidence](vndetectrectanglesrequest/minimumconfidence.md): A value specifying the minimum acceptable confidence level.
- [VNConfidence](vnconfidence.md): A type alias for the confidence value of an observation.
- [maximumObservations](vndetectrectanglesrequest/maximumobservations.md): An integer specifying the maximum number of rectangles Vision returns.

### Accessing the Results

- [results](vndetectrectanglesrequest/results.md): The results of the request to detect rectangles.
- [VNRectangleObservation](vnrectangleobservation.md): An object that represents the four vertices of a detected rectangle.

### Identifying Request Revisions

- [VNDetectRectanglesRequestRevision1](vndetectrectanglesrequestrevision1.md): A constant for specifying revision 1 of the rectangle detection request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)
