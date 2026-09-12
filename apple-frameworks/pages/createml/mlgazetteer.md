> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlgazetteer](https://developer.apple.com/documentation/createml/mlgazetteer)

# MLGazetteer

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** macOS 10.15+

A collection of terms and their labels, which augments a tagger that analyzes natural language text.

## Declaration

```swift
struct MLGazetteer
```

<a id="overview"></a>

## Overview

Use an [MLGazetteer](mlgazetteer.md) to configure a gazetteer and save it to a file, which you then add to your app in Xcode. Your app uses the gazetteer file at runtime to create an instance of [NLGazetteer](../naturallanguage/nlgazetteer.md), which augments an [NLTagger](../naturallanguage/nltagger.md) to tag specific terms with a label.

You configure a gazetteer with a dictionary, keyed by labels. Each value in the dictionary is an array of terms (words or phrases) for each label. For example, you can store the names of real and fictional planets in a gazetteer.

```swift
let planets = [
    "real planet": ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
    "fictional planet" : ["Arrakis", "Hoth", "Vulcan", "Pandora", "Tatooine", "Bajor", "Alderaan", "Romulus"]
]

let parameters = MLGazetteer.ModelParameters(language: .english)
let planetGazetteer = try! MLGazetteer(dictionary: planets, parameters: parameters)
```

Once you’ve configured an [MLGazetteer](mlgazetteer.md), save it to an `.mlmodel` file to include in your app.

```swift
try planetGazetteer.write(toFile: "~/Desktop/PlanetGazetteer.mlmodel")
```

A gazetteer file can efficiently store many labels, and many terms for each label.

## Topics

### Creating a gazetteer

- [init(dictionary:parameters:)](mlgazetteer/init%28dictionary_parameters_%29.md): Creates a gazetteer from a dictionary of labels and terms.
- [init(labeledData:textColumn:labelColumn:parameters:)](mlgazetteer/init%28labeleddata_textcolumn_labelcolumn_parameters_%29.md): Deprecated. Creates a gazetteer from a table of labels and terms.
- [MLGazetteer.ModelParameters](mlgazetteer/modelparameters-swift.struct.md): The model configuration parameters.
- [modelParameters](mlgazetteer/modelparameters-swift.property.md): The model configuration parameters.

### Testing a gazetteer

- [prediction(from:)](mlgazetteer/prediction%28from_%29.md): Predicts the label for the given term.
- [predictions(from:)](mlgazetteer/predictions%28from_%29.md): Predicts the labels for the given terms.
- [predictions(from:)](mlgazetteer/predictions%28from_%29-2rej.md): Predicts the labels for the given terms.
- [predictions(from:)](mlgazetteer/predictions%28from_%29-2jaui.md): Deprecated. Predicts the labels for the given terms in the table column.

### Saving a gazetteer

- [write(to:metadata:)](mlgazetteer/write%28to_metadata_%29.md): Exports the gazetteer as a Core ML model file at the specified URL.
- [write(toFile:metadata:)](mlgazetteer/write%28tofile_metadata_%29.md): Exports the gazetteer as a Core ML model file at the specified file path.

### Describing a gazetteer

- [model](mlgazetteer/model.md): The gazetteer contained within a Core ML model file stored in memory.
- [description](mlgazetteer/description.md): A text representation of the gazetteer.
- [debugDescription](mlgazetteer/debugdescription.md): A text representation of the gazetteer that’s suitable for output during debugging.
- [playgroundDescription](mlgazetteer/playgrounddescription.md): A description of the gazetteer shown in a playground.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlgazetteer/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mlgazetteer/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mlgazetteer/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Text models

- [Creating a text classifier model](creating-a-text-classifier-model.md): Train a machine learning model to classify natural language text.
- [Creating a word tagger model](creating-a-word-tagger-model.md): Train a machine learning model to tag individual words in natural language text.
- [MLTextClassifier](mltextclassifier.md): A model you train to classify natural language text.
- [MLWordTagger](mlwordtagger.md): A word-tagging model you train to classify natural language text at the word level.
- [MLWordEmbedding](mlwordembedding.md): A map of strings in a vector space that enable your app to find similar strings by looking at a string’s neighbors.
