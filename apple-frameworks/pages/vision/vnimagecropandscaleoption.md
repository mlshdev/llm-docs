> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnimagecropandscaleoption](https://developer.apple.com/documentation/vision/vnimagecropandscaleoption)

# VNImageCropAndScaleOption (Swift)

**Framework:** Vision  
**Kind:** Enumeration

Options that define how Vision crops and scales an input-image.

## Declaration

```swift
enum VNImageCropAndScaleOption
```

<a id="overview"></a>

## Overview

Scaling an image ensures that it fits within the algorithm’s input image dimensions, which may require a change in aspect ratio. The figure below shows how each crop-and-scale option transforms the input image:

![A series of six photos that show the effects of applying a center crop, scale fit, scale fill, scale fit rotate 90 degrees counterclockwise, and scale fill rotate 90 degrees counterclockwise option to the original input image.](https://developer.apple.com/images/Vision/scale-crop-options@2x.png)

## Topics

### Crop and Scale Options

- [VNImageCropAndScaleOption.centerCrop](vnimagecropandscaleoption/centercrop.md): An option that scales the image to fit its shorter side within the input dimensions, while preserving its aspect ratio, and center-crops the image.
- [VNImageCropAndScaleOption.scaleFit](vnimagecropandscaleoption/scalefit.md): An option that scales the image to fit its longer side within the input dimensions, while preserving its aspect ratio, and center-crops the image.
- [VNImageCropAndScaleOption.scaleFill](vnimagecropandscaleoption/scalefill.md): An option that scales the image to fill the input dimensions, resizing it if necessary.
- [VNImageCropAndScaleOption.scaleFitRotate90CCW](vnimagecropandscaleoption/scalefitrotate90ccw.md): An option that rotates the image 90 degrees counterclockwise and then scales it, while preserving its aspect ratio, to fit on the long side.
- [VNImageCropAndScaleOption.scaleFillRotate90CCW](vnimagecropandscaleoption/scalefillrotate90ccw.md): An option that rotates the image 90 degrees counterclockwise and then scales it to fill the input dimensions.

### Creating a Scale Option

- [init(rawValue:)](vnimagecropandscaleoption/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Image Options

- [imageCropAndScaleOption](vncoremlrequest/imagecropandscaleoption.md): An optional setting that tells the Vision algorithm how to scale an input image.

# VNImageCropAndScaleOption (Objective-C)

**Framework:** Vision  
**Kind:** Enumeration

Options that define how Vision crops and scales an input-image.

## Declaration

```objectivec
enum VNImageCropAndScaleOption : NSUInteger;
```

<a id="overview"></a>

## Overview

Scaling an image ensures that it fits within the algorithm’s input image dimensions, which may require a change in aspect ratio. The figure below shows how each crop-and-scale option transforms the input image:

![A series of six photos that show the effects of applying a center crop, scale fit, scale fill, scale fit rotate 90 degrees counterclockwise, and scale fill rotate 90 degrees counterclockwise option to the original input image.](https://developer.apple.com/images/Vision/scale-crop-options@2x.png)

## Topics

### Crop and Scale Options

- [VNImageCropAndScaleOptionCenterCrop](vnimagecropandscaleoption/centercrop.md): An option that scales the image to fit its shorter side within the input dimensions, while preserving its aspect ratio, and center-crops the image.
- [VNImageCropAndScaleOptionScaleFit](vnimagecropandscaleoption/scalefit.md): An option that scales the image to fit its longer side within the input dimensions, while preserving its aspect ratio, and center-crops the image.
- [VNImageCropAndScaleOptionScaleFill](vnimagecropandscaleoption/scalefill.md): An option that scales the image to fill the input dimensions, resizing it if necessary.
- [VNImageCropAndScaleOptionScaleFitRotate90CCW](vnimagecropandscaleoption/scalefitrotate90ccw.md): An option that rotates the image 90 degrees counterclockwise and then scales it, while preserving its aspect ratio, to fit on the long side.
- [VNImageCropAndScaleOptionScaleFillRotate90CCW](vnimagecropandscaleoption/scalefillrotate90ccw.md): An option that rotates the image 90 degrees counterclockwise and then scales it to fill the input dimensions.

## See Also

### Configuring Image Options

- [imageCropAndScaleOption](vncoremlrequest/imagecropandscaleoption.md): An optional setting that tells the Vision algorithm how to scale an input image.
