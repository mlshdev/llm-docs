> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/imagescaler](https://developer.apple.com/documentation/createmlcomponents/imagescaler)

# ImageScaler

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An image scaling transformer.

## Declaration

```swift
struct ImageScaler
```

## Topics

### Creating a transformer

- [init(targetSize:)](imagescaler/init%28targetsize_%29.md): Creates an image scaler transformer. This transformer is used to scale an image to the `targetSize`.
- [init(targetHeight:)](imagescaler/init%28targetheight_%29.md): Creates an image scaler transformer that preserves the aspect ratio.
- [init(targetWidth:)](imagescaler/init%28targetwidth_%29.md): Creates an image scaler transformer that preserves the aspect ratio.

### Getting the target image size

- [targetSize](imagescaler/targetsize.md): The target image size.

### Performing the transformation

- [applied(to:eventHandler:)](imagescaler/applied%28to_eventhandler_%29.md): Perform the image scaler operation on the input pixelBuffer.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
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
- [ImageFeaturePrint](imagefeatureprint.md): ImageFeaturePrint image feature extractor.
- [ImageBlur](imageblur.md): An image blurring transformer.
- [ImageColorTransformer](imagecolortransformer.md): An image color transformer.
- [ImageExposureAdjuster](imageexposureadjuster.md): An image exposure adjusting transformer.
- [ImageFlipper](imageflipper.md): An image flipper transformer.
- [ImageRotator](imagerotator.md): An image rotating transformer.
- [RandomImageNoiseGenerator](randomimagenoisegenerator.md): A transformer that adds random noise to an image.
- [MLModelImageFeatureExtractor](mlmodelimagefeatureextractor.md): An image feature extractor provided by an MLModel.
