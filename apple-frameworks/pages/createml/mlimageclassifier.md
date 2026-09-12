> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier](https://developer.apple.com/documentation/createml/mlimageclassifier)

# MLImageClassifier

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

A model you train to classify images.

## Declaration

```swift
struct MLImageClassifier
```

## Mentioned In

- [Creating an Image Classifier Model](creating-an-image-classifier-model.md)
- [Improving Your Model’s Accuracy](improving-your-model-s-accuracy.md)

<a id="overview"></a>

## Overview

Use an image classifier to train a machine learning model that you can include in your app to categorize images.

When you create the model, you give it a training dataset made up of labeled images, along with parameters that control the training process. For example, you can provide the model with images of elephants and giraffes, in two folders labeled `Elephant` and `Giraffe`, to train it to recognize these animals.

After training completes, you evaluate the trained model by showing it a testing dataset containing labeled images that the model hasn’t seen before. The metrics that come from this evaluation tell you whether the model performs well enough. For example, you can see how often the elephant and giraffe classifier mistakes a giraffe for an elephant. When the model makes too many mistakes, you can add more or better training data, or change the parameters, and try again.

When your model does perform well enough, you save it as a Core ML model file with the `mlmodel` extension. You can then import this model file into an app—like the [Classifying Images with Vision and Core ML](../coreml/classifying-images-with-vision-and-core-ml.md) sample code project—that uses a Core ML model file to classify images.

## Topics

### Training an image classifier asynchronously

- [makeTrainingSession(trainingData:parameters:sessionParameters:)](mlimageclassifier/maketrainingsession%28trainingdata_parameters_sessionparameters_%29.md): Creates or restores a training session.
- [train(trainingData:parameters:sessionParameters:)](mlimageclassifier/train%28trainingdata_parameters_sessionparameters_%29.md): Begins an asynchronous image classifier training session with a training dataset represented by a data source.
- [resume(\_:)](mlimageclassifier/resume%28__%29.md): Begins or continues an asynchronous image classifier training session.
- [restoreTrainingSession(sessionParameters:)](mlimageclassifier/restoretrainingsession%28sessionparameters_%29.md): Creates an asynchronous training session for an image classifier by restoring an existing training session’s state from its parameters.

### Creating an image classifier from a checkpoint

- [init(checkpoint:)](mlimageclassifier/init%28checkpoint_%29.md): Creates an image classifier from a training session checkpoint.

### Training an image classifier synchronously

- [init(trainingData:parameters:)](mlimageclassifier/init%28trainingdata_parameters_%29.md): Creates an image classifier with a training dataset represented by a data source.

### Evaluating an image classifier

- [evaluation(on:)](mlimageclassifier/evaluation%28on_%29.md): Generates metrics describing the image classifier’s performance on labeled images represented by a data source.
- [trainingMetrics](mlimageclassifier/trainingmetrics.md): Measurements of the classifier’s performance on the training data set.
- [validationMetrics](mlimageclassifier/validationmetrics.md): Measurements of the image classifier’s performance on the validation dataset.

### Testing an image classifier

- [prediction(from:)](mlimageclassifier/prediction%28from_%29.md): Generates a prediction for an image.
- [predictions(from:)](mlimageclassifier/predictions%28from_%29.md): Generates predictions for an array of images.

### Saving an image classifier

- [write(to:metadata:)](mlimageclassifier/write%28to_metadata_%29.md): Exports the image classifier as a Core ML model file to a location in the file system.
- [write(toFile:metadata:)](mlimageclassifier/write%28tofile_metadata_%29.md): Exports the image classifier as a Core ML model file to the file path.

### Inspecting an image classifier model

- [model](mlimageclassifier/model.md): The underlying Core ML model of the image classifier stored in memory.
- [modelParameters](mlimageclassifier/modelparameters-swift.property.md): The model configuration parameters the image classifier used during its training session.

### Describing an image classifier

- [description](mlimageclassifier/description.md): A text representation of the image classifier.
- [debugDescription](mlimageclassifier/debugdescription.md): A text representation of the image classifier that’s suitable for output during debugging.
- [playgroundDescription](mlimageclassifier/playgrounddescription.md): A description of the image classifier shown in a playground.

### Supporting types

- [MLImageClassifier.DataSource](mlimageclassifier/datasource.md): A data source for an image classifier.
- [MLImageClassifier.ModelParameters](mlimageclassifier/modelparameters-swift.struct.md): Parameters that affect the process of training an image classifier model.
- [MLImageClassifier.FeatureExtractorType](mlimageclassifier/featureextractortype.md): The underlying base model that extracts image features for image classifier training session.
- [MLImageClassifier.CustomFeatureExtractor](mlimageclassifier/customfeatureextractor.md): A custom feature extractor a training session uses to train an image classifier.
- [MLImageClassifier.ImageAugmentationOptions](mlimageclassifier/imageaugmentationoptions.md): The variations that the training process can use to generate more training data from the training data you provide.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlimageclassifier/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mlimageclassifier/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mlimageclassifier/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Image models

- [Creating an Image Classifier Model](creating-an-image-classifier-model.md): Train a machine learning model to classify images, and add it to your Core ML app.
- [MLObjectDetector](mlobjectdetector.md): A model you train to classify one or more objects within an image.
- [MLHandPoseClassifier](mlhandposeclassifier.md): A task that creates a hand pose classification model by training with images of people’s hands that you provide.
