> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordtagger](https://developer.apple.com/documentation/createml/mlwordtagger)

# MLWordTagger

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** macOS 10.14+

A word-tagging model you train to classify natural language text at the word level.

## Declaration

```swift
struct MLWordTagger
```

## Mentioned In

- [Creating a word tagger model](creating-a-word-tagger-model.md)

<a id="overview"></a>

## Overview

Use an [MLWordTagger](mlwordtagger.md) to create a custom word tagger to identify content that’s relevant for your app, like product names and points of interest.

To use your custom word tagger in the [Natural Language](../naturallanguage.md) framework, save it to a model file and import it into an [NLModel](../naturallanguage/nlmodel.md). Then add your custom [NLModel](../naturallanguage/nlmodel.md) to an [NLTagger](../naturallanguage/nltagger.md) with its [setModels(\_:forTagScheme:)](../naturallanguage/nltagger/setmodels%28__fortagscheme_%29.md) method.

## Topics

### Creating and training a word tagger

- [init(trainingData:parameters:)](mlwordtagger/init%28trainingdata_parameters_%29.md): Creates a word tagger.
- [init(trainingData:tokenColumn:labelColumn:parameters:)](mlwordtagger/init%28trainingdata_tokencolumn_labelcolumn_parameters_%29.md): Creates a word tagger.
- [MLWordTagger.Token](mlwordtagger/token.md): The token type of a word tagger, which is a string.
- [MLWordTagger.ModelParameters](mlwordtagger/modelparameters-swift.struct.md): Parameters that specify model training parameters and validation data.
- [modelParameters](mlwordtagger/modelparameters-swift.property.md): The configuration parameters that the word tagger used for training during initialization.

### Evaluating a word tagger

- [evaluation(on:tokenColumn:labelColumn:)](mlwordtagger/evaluation%28on_tokencolumn_labelcolumn_%29.md): Computes evaluation metrics.
- [evaluation(on:)](mlwordtagger/evaluation%28on_%29.md): Computes evaluation metrics.
- [trainingMetrics](mlwordtagger/trainingmetrics.md): Measurements of the tagger’s performance on the training data set.
- [validationMetrics](mlwordtagger/validationmetrics.md): Measurements of the tagger’s performance on the validation data set.
- [MLWordTaggerMetrics](mlwordtaggermetrics.md): Metrics you use to evaluate a word tagger’s performance.

### Testing a word tagger

- [prediction(from:)](mlwordtagger/prediction%28from_%29.md): Predicts a tag for the input string.
- [predictions(from:)](mlwordtagger/predictions%28from_%29.md): Predicts sequences of labels, token locations, and token lengths from the input strings.
- [predictionWithConfidence(from:)](mlwordtagger/predictionwithconfidence%28from_%29.md): Predicts tags and confidence scores for the input string. Predicts tags and confidence scores for the input string.

### Saving a word tagger

- [write(to:metadata:)](mlwordtagger/write%28to_metadata_%29.md): Exports the word tagger as a Core ML model file at the specified URL.
- [write(toFile:metadata:)](mlwordtagger/write%28tofile_metadata_%29.md): Exports the word tagger as a Core ML model file at the specified file path.

### Describing a word tagger

- [model](mlwordtagger/model.md): The underlying Core ML model of the word tagger.
- [description](mlwordtagger/description.md): A text representation of the word tagger.
- [debugDescription](mlwordtagger/debugdescription.md): A text representation of the word tagger that’s suitable for output during debugging.
- [playgroundDescription](mlwordtagger/playgrounddescription.md): A description of the word tagger in a playground.

### Supporting types

- [MLWordTagger.FeatureExtractorType](mlwordtagger/featureextractortype.md): The feature extractors that are available to train a word tagger using with the transfer-learning algorithm option.
- [MLWordTagger.ModelAlgorithmType](mlwordtagger/modelalgorithmtype.md): The algorithm type.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlwordtagger/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mlwordtagger/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mlwordtagger/customstringconvertible-implementations.md)

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
- [MLTextClassifier](mltextclassifier.md): A model you train to classify natural language text.
- [MLGazetteer](mlgazetteer.md): A collection of terms and their labels, which augments a tagger that analyzes natural language text.
- [MLWordEmbedding](mlwordembedding.md): A map of strings in a vector space that enable your app to find similar strings by looking at a string’s neighbors.
