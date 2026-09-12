> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/imagecolortransformer](https://developer.apple.com/documentation/createmlcomponents/imagecolortransformer)

# ImageColorTransformer

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An image color transformer.

## Declaration

```swift
struct ImageColorTransformer
```

## Topics

### Creating a color transformer

- [init(brightness:contrast:hue:saturation:)](imagecolortransformer/init%28brightness_contrast_hue_saturation_%29.md): Creates an image color transformer.

### Getting the properties

- [brightness](imagecolortransformer/brightness.md): The brightness adjustment, between 0.0 and 1.0.
- [contrast](imagecolortransformer/contrast.md): The contrast adjustment, between 0.0 and 1.0.
- [hue](imagecolortransformer/hue.md): The hue adjustment, between 0.0 and 1.0.
- [saturation](imagecolortransformer/saturation.md): The saturation adjustment, between 0.0 and 1.0.

### Applying the transformation

- [applied(to:eventHandler:)](imagecolortransformer/applied%28to_eventhandler_%29.md): Performs the image color transformation operation on the input image.

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
- [ImageExposureAdjuster](imageexposureadjuster.md): An image exposure adjusting transformer.
- [ImageFlipper](imageflipper.md): An image flipper transformer.
- [ImageRotator](imagerotator.md): An image rotating transformer.
- [RandomImageNoiseGenerator](randomimagenoisegenerator.md): A transformer that adds random noise to an image.
- [MLModelImageFeatureExtractor](mlmodelimagefeatureextractor.md): An image feature extractor provided by an MLModel.
