> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/imageaugmentationoptions/crop](https://developer.apple.com/documentation/createml/mlimageclassifier/imageaugmentationoptions/crop)

# crop

**Framework:** Create ML  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

An option for augmenting training data by creating cropped versions of each image.

## Declaration

```swift
static let crop: MLImageClassifier.ImageAugmentationOptions
```

<a id="discussion"></a>

## Discussion

Use this option to tell the image classifier to augment your training data set by creating cropped versions of the original images.

![Diagram showing how the original image results in four cropped variants.](https://developer.apple.com/images/com.apple.createml/MLImageClassifier-ImageAugmentationOptions-crop-1@2x.png)

The classifier creates four new images with random amounts of crop for each original.

## See Also

### Selecting augmentation options

- [rotation](rotation.md): An option for augmenting training data by rotating each image.
- [blur](blur.md): An option for augmenting training data by blurring each image.
- [exposure](exposure.md): An option for augmenting training data by lightening or darkening each image.
- [noise](noise.md): An option for augmenting training data by adding random amounts of noise to each image.
- [flip](flip.md): An option for augmenting training data by flipping each image along the horizontal and vertical axes.
