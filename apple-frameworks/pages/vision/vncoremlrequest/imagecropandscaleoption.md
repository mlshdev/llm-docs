> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncoremlrequest/imagecropandscaleoption](https://developer.apple.com/documentation/vision/vncoremlrequest/imagecropandscaleoption)

# imageCropAndScaleOption (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An optional setting that tells the Vision algorithm how to scale an input image.

## Declaration

```swift
var imageCropAndScaleOption: VNImageCropAndScaleOption { get set }
```

<a id="Discussion"></a>

## Discussion

Scaling an image ensures that the entire image fits into the algorithm’s input image dimensions, which may require a change in aspect ratio. Each crop-and-scale option transforms the input image in a different way.

![A series of six photos that show the effects of applying a center crop, scale fit, scale fill, scale fit rotate 90 degrees counterclockwise, and scale fill rotate 90 degrees counterclockwise option to the original input image.](https://developer.apple.com/images/Vision/scale-crop-options@2x.png)

## See Also

### Configuring Image Options

- [VNImageCropAndScaleOption](../vnimagecropandscaleoption.md): Options that define how Vision crops and scales an input-image.

# imageCropAndScaleOption (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An optional setting that tells the Vision algorithm how to scale an input image.

## Declaration

```objectivec
@property (nonatomic) VNImageCropAndScaleOption imageCropAndScaleOption;
```

<a id="Discussion"></a>

## Discussion

Scaling an image ensures that the entire image fits into the algorithm’s input image dimensions, which may require a change in aspect ratio. Each crop-and-scale option transforms the input image in a different way.

![A series of six photos that show the effects of applying a center crop, scale fit, scale fill, scale fit rotate 90 degrees counterclockwise, and scale fill rotate 90 degrees counterclockwise option to the original input image.](https://developer.apple.com/images/Vision/scale-crop-options@2x.png)

## See Also

### Configuring Image Options

- [VNImageCropAndScaleOption](../vnimagecropandscaleoption.md): Options that define how Vision crops and scales an input-image.
