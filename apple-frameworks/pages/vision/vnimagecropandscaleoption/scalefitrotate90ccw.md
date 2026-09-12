> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnimagecropandscaleoption/scalefitrotate90ccw](https://developer.apple.com/documentation/vision/vnimagecropandscaleoption/scalefitrotate90ccw)

# VNImageCropAndScaleOption.scaleFitRotate90CCW (Swift)

**Framework:** Vision  
**Kind:** Case

An option that rotates the image 90 degrees counterclockwise and then scales it, while preserving its aspect ratio, to fit on the long side.

## Declaration

```swift
case scaleFitRotate90CCW
```

<a id="Discussion"></a>

## Discussion

This option optimizes portrait images to fit into landscape buffers for algorithms that are rotation agnostic, and fills the remaining space with transparent pixels.

## See Also

### Crop and Scale Options

- [VNImageCropAndScaleOption.centerCrop](centercrop.md): An option that scales the image to fit its shorter side within the input dimensions, while preserving its aspect ratio, and center-crops the image.
- [VNImageCropAndScaleOption.scaleFit](scalefit.md): An option that scales the image to fit its longer side within the input dimensions, while preserving its aspect ratio, and center-crops the image.
- [VNImageCropAndScaleOption.scaleFill](scalefill.md): An option that scales the image to fill the input dimensions, resizing it if necessary.
- [VNImageCropAndScaleOption.scaleFillRotate90CCW](scalefillrotate90ccw.md): An option that rotates the image 90 degrees counterclockwise and then scales it to fill the input dimensions.

# VNImageCropAndScaleOptionScaleFitRotate90CCW (Objective-C)

**Framework:** Vision  
**Kind:** Enumeration Case

An option that rotates the image 90 degrees counterclockwise and then scales it, while preserving its aspect ratio, to fit on the long side.

## Declaration

```objectivec
VNImageCropAndScaleOptionScaleFitRotate90CCW
```

<a id="Discussion"></a>

## Discussion

This option optimizes portrait images to fit into landscape buffers for algorithms that are rotation agnostic, and fills the remaining space with transparent pixels.

## See Also

### Crop and Scale Options

- [VNImageCropAndScaleOptionCenterCrop](centercrop.md): An option that scales the image to fit its shorter side within the input dimensions, while preserving its aspect ratio, and center-crops the image.
- [VNImageCropAndScaleOptionScaleFit](scalefit.md): An option that scales the image to fit its longer side within the input dimensions, while preserving its aspect ratio, and center-crops the image.
- [VNImageCropAndScaleOptionScaleFill](scalefill.md): An option that scales the image to fill the input dimensions, resizing it if necessary.
- [VNImageCropAndScaleOptionScaleFillRotate90CCW](scalefillrotate90ccw.md): An option that rotates the image 90 degrees counterclockwise and then scales it to fill the input dimensions.
