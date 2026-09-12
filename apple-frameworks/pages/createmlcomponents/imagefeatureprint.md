> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/imagefeatureprint](https://developer.apple.com/documentation/createmlcomponents/imagefeatureprint)

# ImageFeaturePrint

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

ImageFeaturePrint image feature extractor.

## Declaration

```swift
struct ImageFeaturePrint
```

## Topics

### Creating the extractor

- [init(cropAndScale:context:)](imagefeatureprint/init%28cropandscale_context_%29.md): Creates a FeaturePrint feature extractor.
- [init(revision:cropAndScale:context:)](imagefeatureprint/init%28revision_cropandscale_context_%29.md): Creates a FeaturePrint feature extractor.

### Getting the properties

- [cropAndScale](imagefeatureprint/cropandscale.md): The crop and scale options.
- [revision](imagefeatureprint/revision.md): The feature extractor revision number.
- [latestRevision](imagefeatureprint/latestrevision.md): The latest feature extractor revision.

### Performing the transformation

- [applied(to:eventHandler:)](imagefeatureprint/applied%28to_eventhandler_%29.md): Extracts image features from an image.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ImageFeatureExtractor](imagefeatureextractor.md)
- [Transformer](transformer.md)

## See Also

### Image components

- [Augmenting images to expand your training data](augmenting-images-to-expand-your-training-data.md): Improve your model by using transformed versions of your training images.
- [Creating a multi-label image classifier](creating-a-multi-label-image-classifier.md): Train a machine learning model to assign multiple labels to an image.
- [ImageReader](imagereader.md): An image file reader.
- [ImageFeatureExtractor](imagefeatureextractor.md): A transformer that takes an image and outputs image features.
- [ImageCropper](imagecropper.md): An image crop transformer.
- [ImageScaler](imagescaler.md): An image scaling transformer.
- [ImageBlur](imageblur.md): An image blurring transformer.
- [ImageColorTransformer](imagecolortransformer.md): An image color transformer.
- [ImageExposureAdjuster](imageexposureadjuster.md): An image exposure adjusting transformer.
- [ImageFlipper](imageflipper.md): An image flipper transformer.
- [ImageRotator](imagerotator.md): An image rotating transformer.
- [RandomImageNoiseGenerator](randomimagenoisegenerator.md): A transformer that adds random noise to an image.
- [MLModelImageFeatureExtractor](mlmodelimagefeatureextractor.md): An image feature extractor provided by an MLModel.
