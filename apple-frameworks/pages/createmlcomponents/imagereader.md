> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/imagereader](https://developer.apple.com/documentation/createmlcomponents/imagereader)

# ImageReader

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An image file reader.

## Declaration

```swift
struct ImageReader
```

## Topics

### Creating the transformer

- [init()](imagereader/init%28%29.md): Creates an image reader.

### Reading an image

- [read(url:)](imagereader/read%28url_%29.md): Reads an image URL as a `CIImage`.

### Performing the transformation

- [applied(to:eventHandler:)](imagereader/applied%28to_eventhandler_%29.md): Reads an image URL as a `CIImage`.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transformer](transformer.md)

## See Also

### Image components

- [Augmenting images to expand your training data](augmenting-images-to-expand-your-training-data.md): Improve your model by using transformed versions of your training images.
- [Creating a multi-label image classifier](creating-a-multi-label-image-classifier.md): Train a machine learning model to assign multiple labels to an image.
- [ImageFeatureExtractor](imagefeatureextractor.md): A transformer that takes an image and outputs image features.
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
