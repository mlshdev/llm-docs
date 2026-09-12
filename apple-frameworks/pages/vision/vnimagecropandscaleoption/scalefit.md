> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnimagecropandscaleoption/scalefit](https://developer.apple.com/documentation/vision/vnimagecropandscaleoption/scalefit)

# VNImageCropAndScaleOption.scaleFit (Swift)

**Framework:** Vision  
**Kind:** Case

An option that scales the image to fit its longer side within the input dimensions, while preserving its aspect ratio, and center-crops the image.

## Declaration

```swift
case scaleFit
```

<a id="Discussion"></a>

## Discussion

This option fills the remaining space with transparent pixels to maintain aspect ratio.

## See Also

### Crop and Scale Options

- [VNImageCropAndScaleOption.centerCrop](centercrop.md): An option that scales the image to fit its shorter side within the input dimensions, while preserving its aspect ratio, and center-crops the image.
- [VNImageCropAndScaleOption.scaleFill](scalefill.md): An option that scales the image to fill the input dimensions, resizing it if necessary.
- [VNImageCropAndScaleOption.scaleFitRotate90CCW](scalefitrotate90ccw.md): An option that rotates the image 90 degrees counterclockwise and then scales it, while preserving its aspect ratio, to fit on the long side.
- [VNImageCropAndScaleOption.scaleFillRotate90CCW](scalefillrotate90ccw.md): An option that rotates the image 90 degrees counterclockwise and then scales it to fill the input dimensions.

# VNImageCropAndScaleOptionScaleFit (Objective-C)

**Framework:** Vision  
**Kind:** Enumeration Case

An option that scales the image to fit its longer side within the input dimensions, while preserving its aspect ratio, and center-crops the image.

## Declaration

```objectivec
VNImageCropAndScaleOptionScaleFit
```

<a id="Discussion"></a>

## Discussion

This option fills the remaining space with transparent pixels to maintain aspect ratio.

## See Also

### Crop and Scale Options

- [VNImageCropAndScaleOptionCenterCrop](centercrop.md): An option that scales the image to fit its shorter side within the input dimensions, while preserving its aspect ratio, and center-crops the image.
- [VNImageCropAndScaleOptionScaleFill](scalefill.md): An option that scales the image to fill the input dimensions, resizing it if necessary.
- [VNImageCropAndScaleOptionScaleFitRotate90CCW](scalefitrotate90ccw.md): An option that rotates the image 90 degrees counterclockwise and then scales it, while preserving its aspect ratio, to fit on the long side.
- [VNImageCropAndScaleOptionScaleFillRotate90CCW](scalefillrotate90ccw.md): An option that rotates the image 90 degrees counterclockwise and then scales it to fill the input dimensions.
