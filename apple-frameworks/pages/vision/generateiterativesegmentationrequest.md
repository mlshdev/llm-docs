> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/generateiterativesegmentationrequest](https://developer.apple.com/documentation/vision/generateiterativesegmentationrequest)

# GenerateIterativeSegmentationRequest

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A request that generates a segmentation mask from points, a rectangle, or a scribble.

## Declaration

```swift
final class GenerateIterativeSegmentationRequest
```

<a id="overview"></a>

## Overview

Initialize with a seed point, a seed rectangle, or a seed scribble buffer to generate the initial segmentation mask. Then add points to iteratively refine the segmentation mask. The request supports a maximum of 13 points when seeded with a point or scribble, or 11 points when seeded with a box.

## Topics

### Creating a request

- [init(seedBox:\_:)](generateiterativesegmentationrequest/init%28seedbox___%29.md): Instantiates with a seed box.
- [init(seedPoint:\_:)](generateiterativesegmentationrequest/init%28seedpoint___%29.md): Instantiates with a seed point.
- [init(seedScribbleBuffer:\_:)](generateiterativesegmentationrequest/init%28seedscribblebuffer___%29.md): Instantiates with a scribble buffer.
- [GenerateIterativeSegmentationRequest.Result](generateiterativesegmentationrequest/result.md): The result is returned as a gray mask image. It can be nil if there is nothing to segment.

### Updating the mask

- [addExcludedPoint(\_:)](generateiterativesegmentationrequest/addexcludedpoint%28__%29.md): Refines the mask with a point that is excluded from the desired segmentation. Throws an error if the total number of added points exceeds the limit. (13 points when seedPoint or seedScribbleBuffer was used, or 11 points when seedBox was used)
- [addIncludedPoint(\_:)](generateiterativesegmentationrequest/addincludedpoint%28__%29.md): Refines the mask with a point that is part of the desired segmentation. Throws an error if the total number of added points exceeds the limit. (13 points when seedPoint or seedScribbleBuffer was used, or 11 points when seedBox was used)

### Accessing the quality level

- [qualityLevel](generateiterativesegmentationrequest/qualitylevel-swift.property.md): Controls the resolution of the produced mask.
- [GenerateIterativeSegmentationRequest.QualityLevel](generateiterativesegmentationrequest/qualitylevel-swift.enum.md): The resolution and quality of the segmentation mask the request produces.

### Getting the revision

- [revision](generateiterativesegmentationrequest/revision-swift.property.md): The request’s configured revision.
- [GenerateIterativeSegmentationRequest.Revision](generateiterativesegmentationrequest/revision-swift.enum.md)
- [supportedRevisions](generateiterativesegmentationrequest/supportedrevisions.md): The revisions supported by [GenerateIterativeSegmentationRequest](generateiterativesegmentationrequest.md).

### Comparing the request

- [==(\_:\_:)](generateiterativesegmentationrequest/==%28____%29.md): Returns a Boolean value indicating whether two instances are equal.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DownloadableAssetsRequest](downloadableassetsrequest.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ImageProcessingRequest](imageprocessingrequest.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VisionRequest](visionrequest.md)

## See Also

### Image segmentation and subject lifting

- [Segmenting objects using taps, scribbles or rectangles](segmenting-objects-using-taps-scribbles-or-rectangles.md): Select objects or regions in a photo using taps, scribbles, or rectangle selection, and generate a segmentation mask using the iterative segmentation API.
- [GenerateForegroundInstanceMaskRequest](generateforegroundinstancemaskrequest.md): A request that generates an instance mask of noticeable objects to separate from the background.
- [GeneratePersonInstanceMaskRequest](generatepersoninstancemaskrequest.md): A request that produces a mask of individual people it finds in the input image.
- [GeneratePersonSegmentationRequest](generatepersonsegmentationrequest.md): A request that produces a matte image for a person it finds in the input image.
