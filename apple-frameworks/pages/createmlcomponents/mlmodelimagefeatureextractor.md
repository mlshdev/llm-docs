> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/mlmodelimagefeatureextractor](https://developer.apple.com/documentation/createmlcomponents/mlmodelimagefeatureextractor)

# MLModelImageFeatureExtractor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An image feature extractor provided by an MLModel.

## Declaration

```swift
struct MLModelImageFeatureExtractor
```

## Topics

### Creating the extractor

- [init(model:inputName:outputName:context:)](mlmodelimagefeatureextractor/init%28model_inputname_outputname_context_%29.md): Creates an image feature extractor from a CoreML model.
- [init(contentsOf:configuration:inputName:outputName:context:)](mlmodelimagefeatureextractor/init%28contentsof_configuration_inputname_outputname_context_%29.md): Creates an image feature extractor from a CoreML model URL.

### Getting the properties

- [inputName](mlmodelimagefeatureextractor/inputname.md): The model’s input feature name.
- [model](mlmodelimagefeatureextractor/model.md): The CoreML model with .mlmodel extension.
- [outputName](mlmodelimagefeatureextractor/outputname.md): The model’s output feature name.

### Applying

- [applied(to:eventHandler:)](mlmodelimagefeatureextractor/applied%28to_eventhandler_%29.md): Uses the CoreML model to create image features from the input pixel buffer.
- [MLModelImageFeatureExtractor.Error](mlmodelimagefeatureextractor/error.md): CoreML Extraction error.

## Relationships

### Conforms To

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
- [ImageFeaturePrint](imagefeatureprint.md): ImageFeaturePrint image feature extractor.
- [ImageBlur](imageblur.md): An image blurring transformer.
- [ImageColorTransformer](imagecolortransformer.md): An image color transformer.
- [ImageExposureAdjuster](imageexposureadjuster.md): An image exposure adjusting transformer.
- [ImageFlipper](imageflipper.md): An image flipper transformer.
- [ImageRotator](imagerotator.md): An image rotating transformer.
- [RandomImageNoiseGenerator](randomimagenoisegenerator.md): A transformer that adds random noise to an image.
