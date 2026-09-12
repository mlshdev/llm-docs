> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/imagerotator](https://developer.apple.com/documentation/createmlcomponents/imagerotator)

# ImageRotator

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An image rotating transformer.

## Declaration

```swift
struct ImageRotator
```

## Mentioned In

- [Augmenting images to expand your training data](augmenting-images-to-expand-your-training-data.md)

## Topics

### Creating the transformer

- [init(angle:)](imagerotator/init%28angle_%29.md): Creates a transformer that rotates an image by a specified angle.

### Getting the angle

- [angle](imagerotator/angle.md): The angle, in radians, by which to rotate the coordinate space of the specified context. Positive values rotate counterclockwise and negative values rotate clockwise.

### Performing the transformation

- [applied(to:eventHandler:)](imagerotator/applied%28to_eventhandler_%29.md): Rotates the image and then scales and crops the rotated image to fit the extent of the input image.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transformer](transformer.md)

## See Also

### Image components

- [Augmenting images to expand your training data](augmenting-images-to-expand-your-training-data.md): Improve your model by using transformed versions of your training images.
- [Creating a multi-label image classifier](creating-a-multi-label-image-classifier.md): Train a machine learning model to assign multiple labels to an image.
- [ImageReader](imagereader.md): An image file reader.
- [ImageFeatureExtractor](imagefeatureextractor.md): A transformer that takes an image and outputs image features.
- [ImageCropper](imagecropper.md): An image crop transformer.
- [ImageScaler](imagescaler.md): An image scaling transformer.
- [ImageFeaturePrint](imagefeatureprint.md): ImageFeaturePrint image feature extractor.
- [ImageBlur](imageblur.md): An image blurring transformer.
- [ImageColorTransformer](imagecolortransformer.md): An image color transformer.
- [ImageExposureAdjuster](imageexposureadjuster.md): An image exposure adjusting transformer.
- [ImageFlipper](imageflipper.md): An image flipper transformer.
- [RandomImageNoiseGenerator](randomimagenoisegenerator.md): A transformer that adds random noise to an image.
- [MLModelImageFeatureExtractor](mlmodelimagefeatureextractor.md): An image feature extractor provided by an MLModel.
