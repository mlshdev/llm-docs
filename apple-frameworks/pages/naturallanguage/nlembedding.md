> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlembedding](https://developer.apple.com/documentation/naturallanguage/nlembedding)

# NLEmbedding (Swift)

**Framework:** Natural Language  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A map of strings to vectors, which locates neighboring, similar strings.

## Declaration

```swift
class NLEmbedding
```

## Mentioned In

- [Finding similarities between pieces of text](finding-similarities-between-pieces-of-text.md)

<a id="overview"></a>

## Overview

Use an [NLEmbedding](nlembedding.md) to find similar strings based on the proximity of their vectors.

The *vocabulary* is the entire set of strings in an embedding. Each string in the vocabulary has a vector, which is an array of doubles, and each double corresponds to a dimension in the embedding. An [NLEmbedding](nlembedding.md) uses these vectors to determine the distance between two strings, or to find the nearest neighbors of a string in the vocabulary. The higher the similarity of any two strings, the smaller the distance is between them.

[Natural Language](../naturallanguage.md) provides built-in word embeddings that you can retrieve by using the [wordEmbedding(for:)](nlembedding/wordembedding%28for_%29.md) method. You can also compile your own custom embedding into an efficient, searchable, on-disk representation. Typically, you compile an embedding by using Create ML’s [MLWordEmbedding](../createml/mlwordembedding.md) and save it as a file for your Xcode project at development time. Alternatively, you can compile an embedding at runtime by using Natural Language’s [writeEmbeddingForDictionary:language:revision:toURL:error:](nlembedding/writeembeddingfordictionary_language_revision_tourl_error_.md) method.

Your custom embedding can use any kind of string that’s useful to your app, such as phrases, brand names, serial numbers, and so on. For example, you could make an embedding of movie titles. Each movie title could have a vector that places similar movies close together in the embedding.

> **Important**

> A single [NLEmbedding](nlembedding.md) instance isn’t safe for concurrent use. Although its query methods, like [vector(for:)](nlembedding/vector%28for_%29.md), look like read-only lookups, calling them on one instance from multiple threads or tasks at the same time can crash your app. Serialize access to a shared instance, or give each thread or task its own instance.

## Topics

### Creating a word embedding

- [wordEmbedding(for:)](nlembedding/wordembedding%28for_%29.md): Retrieves a word embedding for a given language.
- [wordEmbedding(for:revision:)](nlembedding/wordembedding%28for_revision_%29.md): Retrieves a word embedding for a given language and revision.
- [init(contentsOf:)](nlembedding/init%28contentsof_%29.md): Creates a word embedding from a model file.

### Creating a sentence embedding

- [sentenceEmbedding(for:)](nlembedding/sentenceembedding%28for_%29.md): Retrieves a sentence embedding for a given language.
- [sentenceEmbedding(for:revision:)](nlembedding/sentenceembedding%28for_revision_%29.md): Retrieves a sentence embedding for a given language and revision.

### Finding strings and their distances in an embedding

- [neighbors(for:maximumCount:distanceType:)](nlembedding/neighbors%28for_maximumcount_distancetype_%29-8f1jc.md): Retrieves a limited number of strings near a string in the vocabulary.
- [neighbors(for:maximumCount:distanceType:)](nlembedding/neighbors%28for_maximumcount_distancetype_%29-8lp4z.md): Retrieves a limited number of strings near a location in the vocabulary space.
- [enumerateNeighbors(for:maximumCount:distanceType:using:)](nlembedding/enumerateneighbors%28for_maximumcount_distancetype_using_%29-72jda.md): Passes the nearest strings of a string in the vocabulary to a closure.
- [enumerateNeighbors(for:maximumCount:distanceType:using:)](nlembedding/enumerateneighbors%28for_maximumcount_distancetype_using_%29-6dy4x.md): Passes the nearest strings of a location in the vocabulary space to a closure.
- [distance(between:and:distanceType:)](nlembedding/distance%28between_and_distancetype_%29.md): Calculates the distance between two strings in the vocabulary space.
- [NLDistance](nldistance.md): The distance between two strings in a text embedding.

### Inspecting the vocabulary of an embedding

- [dimension](nlembedding/dimension.md): The number of dimensions in the vocabulary’s vector space.
- [vocabularySize](nlembedding/vocabularysize.md): The number of words in the vocabulary.
- [language](nlembedding/language.md): The language of the text in the word embedding.
- [contains(\_:)](nlembedding/contains%28__%29.md): Requests a Boolean value that indicates whether the term is in the vocabulary.
- [vector(for:)](nlembedding/vector%28for_%29.md): Requests the vector for the given term.
- [revision](nlembedding/revision.md): The revision of the word embedding.

### Saving an embedding

- [write(\_:language:revision:to:)](nlembedding/write%28__language_revision_to_%29.md): Exports the word embedding contained within a Core ML model file at the given URL.

### Checking for Natural Language support

- [currentRevision(for:)](nlembedding/currentrevision%28for_%29.md): Retrieves the current version of a word embedding for the given language.
- [supportedRevisions(for:)](nlembedding/supportedrevisions%28for_%29.md): Retrieves all version numbers of a word embedding for the given language.
- [currentSentenceEmbeddingRevision(for:)](nlembedding/currentsentenceembeddingrevision%28for_%29.md): Retrieves the current version of a sentence embedding for the given language.
- [supportedSentenceEmbeddingRevisions(for:)](nlembedding/supportedsentenceembeddingrevisions%28for_%29.md): Retrieves all version numbers of a sentence embedding for the given language.

### Initializers

- [init(contentsOfURL:)](nlembedding/init%28contentsofurl_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Text embedding

- [Finding similarities between pieces of text](finding-similarities-between-pieces-of-text.md): Calculate the semantic distance between words or sentences.

# NLEmbedding (Objective-C)

**Framework:** Natural Language  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A map of strings to vectors, which locates neighboring, similar strings.

## Declaration

```objectivec
@interface NLEmbedding : NSObject
```

## Mentioned In

- [Finding similarities between pieces of text](finding-similarities-between-pieces-of-text.md)

<a id="overview"></a>

## Overview

Use an [NLEmbedding](nlembedding.md) to find similar strings based on the proximity of their vectors.

The *vocabulary* is the entire set of strings in an embedding. Each string in the vocabulary has a vector, which is an array of doubles, and each double corresponds to a dimension in the embedding. An [NLEmbedding](nlembedding.md) uses these vectors to determine the distance between two strings, or to find the nearest neighbors of a string in the vocabulary. The higher the similarity of any two strings, the smaller the distance is between them.

[Natural Language](../naturallanguage.md) provides built-in word embeddings that you can retrieve by using the [wordEmbeddingForLanguage:](nlembedding/wordembedding%28for_%29.md) method. You can also compile your own custom embedding into an efficient, searchable, on-disk representation. Typically, you compile an embedding by using Create ML’s [MLWordEmbedding](../createml/mlwordembedding.md) and save it as a file for your Xcode project at development time. Alternatively, you can compile an embedding at runtime by using Natural Language’s [writeEmbeddingForDictionary:language:revision:toURL:error:](nlembedding/writeembeddingfordictionary_language_revision_tourl_error_.md) method.

Your custom embedding can use any kind of string that’s useful to your app, such as phrases, brand names, serial numbers, and so on. For example, you could make an embedding of movie titles. Each movie title could have a vector that places similar movies close together in the embedding.

> **Important**

> A single [NLEmbedding](nlembedding.md) instance isn’t safe for concurrent use. Although its query methods, like [vector(for:)](nlembedding/vector%28for_%29.md), look like read-only lookups, calling them on one instance from multiple threads or tasks at the same time can crash your app. Serialize access to a shared instance, or give each thread or task its own instance.

## Topics

### Creating a word embedding

- [wordEmbeddingForLanguage:](nlembedding/wordembedding%28for_%29.md): Retrieves a word embedding for a given language.
- [wordEmbeddingForLanguage:revision:](nlembedding/wordembedding%28for_revision_%29.md): Retrieves a word embedding for a given language and revision.
- [embeddingWithContentsOfURL:error:](nlembedding/init%28contentsof_%29.md): Creates a word embedding from a model file.

### Creating a sentence embedding

- [sentenceEmbeddingForLanguage:](nlembedding/sentenceembedding%28for_%29.md): Retrieves a sentence embedding for a given language.
- [sentenceEmbeddingForLanguage:revision:](nlembedding/sentenceembedding%28for_revision_%29.md): Retrieves a sentence embedding for a given language and revision.

### Finding strings and their distances in an embedding

- [neighborsForString:maximumCount:distanceType:](nlembedding/neighborsforstring_maximumcount_distancetype_.md): Retrieves a limited number of strings near a string in the vocabulary.
- [neighborsForString:maximumCount:maximumDistance:distanceType:](nlembedding/neighborsforstring_maximumcount_maximumdistance_distancetype_.md): Retrieves a limited number of strings, within a radius of a string, in the vocabulary.
- [neighborsForVector:maximumCount:distanceType:](nlembedding/neighborsforvector_maximumcount_distancetype_.md): Retrieves a limited number of strings near a location in the vocabulary space.
- [neighborsForVector:maximumCount:maximumDistance:distanceType:](nlembedding/neighborsforvector_maximumcount_maximumdistance_distancetype_.md): Retrieves a limited number of strings within a radius of a location in the vocabulary space.
- [enumerateNeighborsForString:maximumCount:distanceType:usingBlock:](nlembedding/enumerateneighborsforstring_maximumcount_distancetype_usingblock_.md): Passes the nearest strings of a string in the vocabulary to a block.
- [enumerateNeighborsForString:maximumCount:maximumDistance:distanceType:usingBlock:](nlembedding/enumerateneighborsforstring_maximumcount_maximumdistance_distancetype_usingblock_.md): Passes the nearest strings, within a radius of a string in the vocabulary, to a block.
- [enumerateNeighborsForVector:maximumCount:distanceType:usingBlock:](nlembedding/enumerateneighborsforvector_maximumcount_distancetype_usingblock_.md): Passes the nearest strings of a location in the vocabulary space to a closure.
- [enumerateNeighborsForVector:maximumCount:maximumDistance:distanceType:usingBlock:](nlembedding/enumerateneighborsforvector_maximumcount_maximumdistance_distancetype_usingblock_.md): Passes the nearest strings, within a radius of a location in the vocabulary space, to a block.
- [distanceBetweenString:andString:distanceType:](nlembedding/distancebetweenstring_andstring_distancetype_.md): Calculates the distance between two strings in the vocabulary space.
- [NLDistance](nldistance.md): The distance between two strings in a text embedding.

### Inspecting the vocabulary of an embedding

- [dimension](nlembedding/dimension.md): The number of dimensions in the vocabulary’s vector space.
- [vocabularySize](nlembedding/vocabularysize.md): The number of words in the vocabulary.
- [language](nlembedding/language.md): The language of the text in the word embedding.
- [containsString:](nlembedding/contains%28__%29.md): Requests a Boolean value that indicates whether the term is in the vocabulary.
- [vectorForString:](nlembedding/vectorforstring_.md): Requests the vector for the given term.
- [getVector:forString:](nlembedding/getvector_forstring_.md): Copies a vector into the given a pointer to a float array.
- [revision](nlembedding/revision.md): The revision of the word embedding.

### Saving an embedding

- [writeEmbeddingForDictionary:language:revision:toURL:error:](nlembedding/writeembeddingfordictionary_language_revision_tourl_error_.md): Exports the word embedding contained within a Core ML model file at the given URL.

### Checking for Natural Language support

- [currentRevisionForLanguage:](nlembedding/currentrevision%28for_%29.md): Retrieves the current version of a word embedding for the given language.
- [supportedRevisionsForLanguage:](nlembedding/supportedrevisions%28for_%29.md): Retrieves all version numbers of a word embedding for the given language.
- [currentSentenceEmbeddingRevisionForLanguage:](nlembedding/currentsentenceembeddingrevision%28for_%29.md): Retrieves the current version of a sentence embedding for the given language.
- [supportedSentenceEmbeddingRevisionsForLanguage:](nlembedding/supportedsentenceembeddingrevisions%28for_%29.md): Retrieves all version numbers of a sentence embedding for the given language.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Text embedding

- [Finding similarities between pieces of text](finding-similarities-between-pieces-of-text.md): Calculate the semantic distance between words or sentences.
