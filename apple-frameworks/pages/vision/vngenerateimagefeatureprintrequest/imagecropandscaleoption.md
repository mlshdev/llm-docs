> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vngenerateimagefeatureprintrequest/imagecropandscaleoption](https://developer.apple.com/documentation/vision/vngenerateimagefeatureprintrequest/imagecropandscaleoption)

# imageCropAndScaleOption (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An optional setting that tells the algorithm how to scale an input image before generating the feature print.

## Declaration

```swift
var imageCropAndScaleOption: VNImageCropAndScaleOption { get set }
```

<a id="Discussion"></a>

## Discussion

Scaling is applied before generating the feature print. The default value is [VNImageCropAndScaleOption.scaleFill](../vnimagecropandscaleoption/scalefill.md).

Scaling an image ensures that the entire image fits into the algorithm’s input image dimensions, which may require a change in aspect ratio. Each crop and scale option transforms the input image in a different way:

![A photo of a flower cropped and scaled according to Vision image options](https://developer.apple.com/images/Vision/scale-crop-options@2x.png)

## See Also

### Scaling and Cropping Images

- [VNImageCropAndScaleOption](../vnimagecropandscaleoption.md): Options that define how Vision crops and scales an input-image.

# imageCropAndScaleOption (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An optional setting that tells the algorithm how to scale an input image before generating the feature print.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) VNImageCropAndScaleOption imageCropAndScaleOption;
```

<a id="Discussion"></a>

## Discussion

Scaling is applied before generating the feature print. The default value is [VNImageCropAndScaleOptionScaleFill](../vnimagecropandscaleoption/scalefill.md).

Scaling an image ensures that the entire image fits into the algorithm’s input image dimensions, which may require a change in aspect ratio. Each crop and scale option transforms the input image in a different way:

![A photo of a flower cropped and scaled according to Vision image options](https://developer.apple.com/images/Vision/scale-crop-options@2x.png)

## See Also

### Scaling and Cropping Images

- [VNImageCropAndScaleOption](../vnimagecropandscaleoption.md): Options that define how Vision crops and scales an input-image.
