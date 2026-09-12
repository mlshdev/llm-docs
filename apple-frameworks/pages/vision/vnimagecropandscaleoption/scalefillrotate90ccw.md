> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnimagecropandscaleoption/scalefillrotate90ccw](https://developer.apple.com/documentation/vision/vnimagecropandscaleoption/scalefillrotate90ccw)

# VNImageCropAndScaleOption.scaleFillRotate90CCW (Swift)

**Framework:** Vision  
**Kind:** Case

An option that rotates the image 90 degrees counterclockwise and then scales it to fill the input dimensions.

## Declaration

```swift
case scaleFillRotate90CCW
```

<a id="Discussion"></a>

## Discussion

This option optimizes portrait images to fill into landscape buffers for algorithms that are rotation agnostic.

## See Also

### Crop and Scale Options

- [VNImageCropAndScaleOption.centerCrop](centercrop.md): An option that scales the image to fit its shorter side within the input dimensions, while preserving its aspect ratio, and center-crops the image.
- [VNImageCropAndScaleOption.scaleFit](scalefit.md): An option that scales the image to fit its longer side within the input dimensions, while preserving its aspect ratio, and center-crops the image.
- [VNImageCropAndScaleOption.scaleFill](scalefill.md): An option that scales the image to fill the input dimensions, resizing it if necessary.
- [VNImageCropAndScaleOption.scaleFitRotate90CCW](scalefitrotate90ccw.md): An option that rotates the image 90 degrees counterclockwise and then scales it, while preserving its aspect ratio, to fit on the long side.

# VNImageCropAndScaleOptionScaleFillRotate90CCW (Objective-C)

**Framework:** Vision  
**Kind:** Enumeration Case

An option that rotates the image 90 degrees counterclockwise and then scales it to fill the input dimensions.

## Declaration

```objectivec
VNImageCropAndScaleOptionScaleFillRotate90CCW
```

<a id="Discussion"></a>

## Discussion

This option optimizes portrait images to fill into landscape buffers for algorithms that are rotation agnostic.

## See Also

### Crop and Scale Options

- [VNImageCropAndScaleOptionCenterCrop](centercrop.md): An option that scales the image to fit its shorter side within the input dimensions, while preserving its aspect ratio, and center-crops the image.
- [VNImageCropAndScaleOptionScaleFit](scalefit.md): An option that scales the image to fit its longer side within the input dimensions, while preserving its aspect ratio, and center-crops the image.
- [VNImageCropAndScaleOptionScaleFill](scalefill.md): An option that scales the image to fill the input dimensions, resizing it if necessary.
- [VNImageCropAndScaleOptionScaleFitRotate90CCW](scalefitrotate90ccw.md): An option that rotates the image 90 degrees counterclockwise and then scales it, while preserving its aspect ratio, to fit on the long side.
