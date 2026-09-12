> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/imageaugmentationoptions/rotation](https://developer.apple.com/documentation/createml/mlimageclassifier/imageaugmentationoptions/rotation)

# rotation

**Framework:** Create ML  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

An option for augmenting training data by rotating each image.

## Declaration

```swift
static let rotation: MLImageClassifier.ImageAugmentationOptions
```

<a id="discussion"></a>

## Discussion

Use this option to tell the image classifier to augment your training data set by rotating the original images.

![Diagram showing how the original image results in four rotated variants.](https://developer.apple.com/images/com.apple.createml/MLImageClassifier-ImageAugmentationOptions-rotation-1@2x.png)

The classifier creates four new images with random rotation angles for each original.

## See Also

### Selecting augmentation options

- [crop](crop.md): An option for augmenting training data by creating cropped versions of each image.
- [blur](blur.md): An option for augmenting training data by blurring each image.
- [exposure](exposure.md): An option for augmenting training data by lightening or darkening each image.
- [noise](noise.md): An option for augmenting training data by adding random amounts of noise to each image.
- [flip](flip.md): An option for augmenting training data by flipping each image along the horizontal and vertical axes.
