> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/imagecropandscaleaction](https://developer.apple.com/documentation/vision/imagecropandscaleaction)

# ImageCropAndScaleAction

**Framework:** Vision  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A scale to apply to an input image before performing a request.

## Declaration

```swift
enum ImageCropAndScaleAction
```

<a id="overview"></a>

## Overview

Scaling an image ensures that it fits within the algorithm’s input image dimensions, which may require a change in aspect ratio. The figure below shows how each crop-and-scale option transforms the input image:

![A series of six photos that show the effects of applying a center crop, scale fit, scale fill, scale fit rotate 90 degrees counterclockwise, and scale fill rotate 90 degrees counterclockwise option to the original input image.](https://developer.apple.com/images/Vision/scale-crop-options@2x.png)

## Topics

### Getting the actions

- [ImageCropAndScaleAction.centerCrop](imagecropandscaleaction/centercrop.md): An action that scales the image and maintains the aspect ratio to fit on the short side and crop centered on the long side.
- [ImageCropAndScaleAction.scaleToFit](imagecropandscaleaction/scaletofit.md): An action that scales to the size the algorithm requires while maintaining the original aspect ratio.
- [ImageCropAndScaleAction.scaleToFill](imagecropandscaleaction/scaletofill.md): An action that scales the image to fill the input dimensions and resizing it, if necessary.
- [ImageCropAndScaleAction.scaleToFitPlus90CCWRotation](imagecropandscaleaction/scaletofitplus90ccwrotation.md): An action that scales the image and maintains the aspect ratio to fit on the long side, and rotates the image by 90 degrees counter clockwise.
- [ImageCropAndScaleAction.scaleToFillPlus90CCWRotation](imagecropandscaleaction/scaletofillplus90ccwrotation.md): An action that scales the image and rotates it by 90 degrees counter clockwise.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a request

- [cropAndScaleAction](calculateimageaestheticsscoresrequest/cropandscaleaction.md): An optional setting that tells the algorithm how to scale an input image before generating the result.
