> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordembedding](https://developer.apple.com/documentation/createml/mlwordembedding)

# MLWordEmbedding

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** macOS 10.15+

A map of strings in a vector space that enable your app to find similar strings by looking at a string’s neighbors.

## Declaration

```swift
struct MLWordEmbedding
```

<a id="overview"></a>

## Overview

Use an [MLWordEmbedding](mlwordembedding.md) to configure and save a word embedding to a file, which you then add to your project in Xcode. Your project uses that word embedding file at runtime to create an [NLEmbedding](../naturallanguage/nlembedding.md) instance, which finds similar strings based on the proximity of their vectors.

You configure a word embedding with a dictionary, keyed by strings which make up the *vocabulary* of the word embedding. The value for each string is an array of doubles, which represents a vector. The length of the arrays is arbitrary but all arrays in a word embedding must be the same length. The length of the arrays determine the number of dimensions in the vector space. For example, the following listing creates a word embedding with four dimensions and a vocabulary of two strings.

```swift
let wordEmbedding = try! MLWordEmbedding(dictionary: [
    "Hello"   : [0.0, 1.2, 5.0, 0.0],
    "Goodbye" : [0.0, 1.3, -6.2, 0.1]
])
```

Once you’ve configured an [MLWordEmbedding](mlwordembedding.md), save it to an `.mlmodel` file to include in your app.

```swift
try wordEmbedding.write(toFile: "~/Desktop/WordEmbedding.mlmodel")
```

A word embedding file can efficiently store many strings and their vectors.

## Topics

### Creating a word embedding

- [init(dictionary:parameters:)](mlwordembedding/init%28dictionary_parameters_%29.md): Creates a word embedding.
- [MLWordEmbedding.ModelParameters](mlwordembedding/modelparameters-swift.struct.md): The model configuration parameters.
- [modelParameters](mlwordembedding/modelparameters-swift.property.md): The model configuration parameters.

### Testing a word embedding

- [prediction(from:maxCount:maxDistance:distanceType:)](mlwordembedding/prediction%28from_maxcount_maxdistance_distancetype_%29.md): Predicts neighbors.
- [distance(between:and:distanceType:)](mlwordembedding/distance%28between_and_distancetype_%29.md): Calculates the distance between two strings in the vocabulary space.
- [NLDistanceType](../naturallanguage/nldistancetype.md): The means of calculating a distance between two locations in a text embedding.
- [contains(\_:)](mlwordembedding/contains%28__%29.md): Returns a Boolean value indicating whether the vocabulary contains the given string.
- [vector(for:)](mlwordembedding/vector%28for_%29.md): Accesses the vector associated with the given string in the vocabulary.

### Saving a word embedding

- [write(to:metadata:)](mlwordembedding/write%28to_metadata_%29.md): Exports the word embedding as a Core ML model file at the specified URL.
- [write(toFile:metadata:)](mlwordembedding/write%28tofile_metadata_%29.md): Exports the word embedding as a Core ML model file at the specified file path.

### Describing a word embedding

- [dimension](mlwordembedding/dimension.md): The number of dimensions in the vocabulary embedding space.
- [vocabularySize](mlwordembedding/vocabularysize.md): The number of strings in the vocabulary.
- [model](mlwordembedding/model.md): The word embedding contained within a Core ML model file.
- [description](mlwordembedding/description.md): A text representation of the word embedding.
- [debugDescription](mlwordembedding/debugdescription.md): A text representation of the word embedding that’s suitable for output during debugging.
- [playgroundDescription](mlwordembedding/playgrounddescription.md): A description of the word embedding shown in a playground.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlwordembedding/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mlwordembedding/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mlwordembedding/customstringconvertible-implementations.md)

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
- [MLGazetteer](mlgazetteer.md): A collection of terms and their labels, which augments a tagger that analyzes natural language text.
