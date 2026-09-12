> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier](https://developer.apple.com/documentation/createml/mltextclassifier)

# MLTextClassifier

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

A model you train to classify natural language text.

## Declaration

```swift
struct MLTextClassifier
```

## Mentioned In

- [Creating a text classifier model](creating-a-text-classifier-model.md)

<a id="overview"></a>

## Overview

Use a text classifier to train a machine learning model you can include in your app to classify natural language text. The model learns to associate labels with features of the input text, which can be sentences, paragraphs, or even entire documents.

After you train a text classifier, you save it to a Core ML model file. You then use an instance of the [NLModel](../naturallanguage/nlmodel.md) class from the [Natural Language](../naturallanguage.md) framework to read the model file into your app.

## Topics

### Creating and training a text classifier

- [init(trainingData:parameters:)](mltextclassifier/init%28trainingdata_parameters_%29.md): Creates a text classifier.
- [init(trainingData:textColumn:labelColumn:parameters:)](mltextclassifier/init%28trainingdata_textcolumn_labelcolumn_parameters_%29.md): Creates a text classifier.
- [MLTextClassifier.DataSource](mltextclassifier/datasource.md): A data source for a text classifier.
- [MLTextClassifier.ModelParameters](mltextclassifier/modelparameters-swift.struct.md): Parameters that specify model training parameters and validation data.
- [modelParameters](mltextclassifier/modelparameters-swift.property.md): The configuration parameters that the text classifier used for training during initialization.

### Evaluating a text classifier

- [evaluation(on:)](mltextclassifier/evaluation%28on_%29.md): Computes evaluation metrics.
- [evaluation(on:textColumn:labelColumn:)](mltextclassifier/evaluation%28on_textcolumn_labelcolumn_%29.md): Computes evaluation metrics.
- [trainingMetrics](mltextclassifier/trainingmetrics.md): Measurements of the classifier’s performance on the training data set.
- [validationMetrics](mltextclassifier/validationmetrics.md): Measurements of the classifier’s performance on the validation data set.

### Testing a text classifier

- [prediction(from:)](mltextclassifier/prediction%28from_%29.md): Classifies a string with a label.
- [predictions(from:)](mltextclassifier/predictions%28from_%29.md): Classifies an array of strings with labels.
- [predictionWithConfidence(from:)](mltextclassifier/predictionwithconfidence%28from_%29.md): Predicts multiple possible labels and their confidence scores for the specified string.
- [predictionsWithConfidence(from:)](mltextclassifier/predictionswithconfidence%28from_%29.md): Predicts multiple possible labels and their confidence scores for each string in the specified array.

### Saving a text classifier

- [write(to:metadata:)](mltextclassifier/write%28to_metadata_%29.md): Exports the text classifier as a Core ML model file at the specified URL.
- [write(toFile:metadata:)](mltextclassifier/write%28tofile_metadata_%29.md): Exports the text classifier as a Core ML model file at the specified file path.

### Describing a text classifier

- [model](mltextclassifier/model.md): The underlying Core ML model of the text classifier.
- [description](mltextclassifier/description.md): A text representation of the text classifier.
- [debugDescription](mltextclassifier/debugdescription.md): A text representation of the text classifier that’s suitable for output during debugging.
- [playgroundDescription](mltextclassifier/playgrounddescription.md): A description of the text classifier in a playground.

### Supporting types

- [MLTextClassifier.FeatureExtractorType](mltextclassifier/featureextractortype.md): The text feature extractor type.
- [MLTextClassifier.ModelAlgorithmType](mltextclassifier/modelalgorithmtype.md): The type of algorithm that a text classifier uses.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mltextclassifier/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mltextclassifier/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mltextclassifier/customstringconvertible-implementations.md)

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

### Text models

- [Creating a text classifier model](creating-a-text-classifier-model.md): Train a machine learning model to classify natural language text.
- [Creating a word tagger model](creating-a-word-tagger-model.md): Train a machine learning model to tag individual words in natural language text.
- [MLWordTagger](mlwordtagger.md): A word-tagging model you train to classify natural language text at the word level.
- [MLGazetteer](mlgazetteer.md): A collection of terms and their labels, which augments a tagger that analyzes natural language text.
- [MLWordEmbedding](mlwordembedding.md): A map of strings in a vector space that enable your app to find similar strings by looking at a string’s neighbors.
