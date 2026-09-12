> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/imagefeatureextractor](https://developer.apple.com/documentation/createmlcomponents/imagefeatureextractor)

# ImageFeatureExtractor

**Framework:** Create ML Components  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A transformer that takes an image and outputs image features.

## Declaration

```swift
protocol ImageFeatureExtractor : Transformer where Self.Input == CIImage, Self.Output == MLShapedArray<Float>
```

## Relationships

### Inherits From

- [Transformer](transformer.md)

### Conforming Types

- [ImageFeaturePrint](imagefeatureprint.md)
- [MLModelImageFeatureExtractor](mlmodelimagefeatureextractor.md)

## See Also

### Image components

- [Augmenting images to expand your training data](augmenting-images-to-expand-your-training-data.md): Improve your model by using transformed versions of your training images.
- [Creating a multi-label image classifier](creating-a-multi-label-image-classifier.md): Train a machine learning model to assign multiple labels to an image.
- [ImageReader](imagereader.md): An image file reader.
- [ImageCropper](imagecropper.md): An image crop transformer.
- [ImageScaler](imagescaler.md): An image scaling transformer.
- [ImageFeaturePrint](imagefeatureprint.md): ImageFeaturePrint image feature extractor.
- [ImageBlur](imageblur.md): An image blurring transformer.
- [ImageColorTransformer](imagecolortransformer.md): An image color transformer.
- [ImageExposureAdjuster](imageexposureadjuster.md): An image exposure adjusting transformer.
- [ImageFlipper](imageflipper.md): An image flipper transformer.
- [ImageRotator](imagerotator.md): An image rotating transformer.
- [RandomImageNoiseGenerator](randomimagenoisegenerator.md): A transformer that adds random noise to an image.
- [MLModelImageFeatureExtractor](mlmodelimagefeatureextractor.md): An image feature extractor provided by an MLModel.
