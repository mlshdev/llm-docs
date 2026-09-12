> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nllanguagerecognizer](https://developer.apple.com/documentation/naturallanguage/nllanguagerecognizer)

# NLLanguageRecognizer (Swift)

**Framework:** Natural Language  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The language of a body of text.

## Declaration

```swift
class NLLanguageRecognizer
```

## Mentioned In

- [Identifying the language in text](identifying-the-language-in-text.md)

<a id="overview"></a>

## Overview

An [NLLanguageRecognizer](nllanguagerecognizer.md) object automatically detects the language of a piece of text. It performs language identification by:

1. Identifying the dominant script of a piece of text. Some languages have a unique script (like Greek), but others share the same script (like English, French, and German, which all share the Latin script).
2. Identifying the language itself.

The identification obtained from an [NLLanguageRecognizer](nllanguagerecognizer.md) object can be either a single most likely language, access through [dominantLanguage](nllanguagerecognizer/dominantlanguage.md), or a set of language candidates with probabilities, using [languageHypothesesWithMaximum:](nllanguagerecognizer/languagehypotheseswithmaximum_.md). You can reset the recognizer to its initial state, to be reused for new analysis.

Use the convenience method, [dominantLanguage(for:)](nllanguagerecognizer/dominantlanguage%28for_%29.md), to get the most likely language without creating an [NLLanguageRecognizer](nllanguagerecognizer.md).

> **Important**

>  Don’t use an instance of [NLLanguageRecognizer](nllanguagerecognizer.md) from more than one thread simultaneously.

## Topics

### Creating a recognizer

- [init()](nllanguagerecognizer/init%28%29.md): Creates a recognizer that you can customize.

### Determining the language

- [dominantLanguage(for:)](nllanguagerecognizer/dominantlanguage%28for_%29.md): Finds the most likely language of a piece of text.
- [processString(\_:)](nllanguagerecognizer/processstring%28__%29.md): Analyzes the piece of text to determine its dominant language.
- [dominantLanguage](nllanguagerecognizer/dominantlanguage.md): The most likely language for the processed text.
- [languageHypotheses(withMaximum:)](nllanguagerecognizer/languagehypotheses%28withmaximum_%29.md): Generates the probabilities of possible languages for the processed text.
- [reset()](nllanguagerecognizer/reset%28%29.md): Resets the recognizer to its initial state.

### Guiding the recognizer

- [languageHints](nllanguagerecognizer/languagehints-7dwgv.md): A dictionary that maps languages to their probabilities in the language identification process.
- [languageConstraints](nllanguagerecognizer/languageconstraints.md): Limits the set of possible languages that the recognizer will return.

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

### Language identification

- [Identifying the language in text](identifying-the-language-in-text.md): Detect the language in a piece of text by using a language recognizer.
- [NLLanguage](nllanguage.md): The languages that the Natural Language framework supports.

# NLLanguageRecognizer (Objective-C)

**Framework:** Natural Language  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The language of a body of text.

## Declaration

```objectivec
@interface NLLanguageRecognizer : NSObject
```

## Mentioned In

- [Identifying the language in text](identifying-the-language-in-text.md)

<a id="overview"></a>

## Overview

An [NLLanguageRecognizer](nllanguagerecognizer.md) object automatically detects the language of a piece of text. It performs language identification by:

1. Identifying the dominant script of a piece of text. Some languages have a unique script (like Greek), but others share the same script (like English, French, and German, which all share the Latin script).
2. Identifying the language itself.

The identification obtained from an [NLLanguageRecognizer](nllanguagerecognizer.md) object can be either a single most likely language, access through [dominantLanguage](nllanguagerecognizer/dominantlanguage.md), or a set of language candidates with probabilities, using [languageHypothesesWithMaximum:](nllanguagerecognizer/languagehypotheseswithmaximum_.md). You can reset the recognizer to its initial state, to be reused for new analysis.

Use the convenience method, [dominantLanguageForString:](nllanguagerecognizer/dominantlanguage%28for_%29.md), to get the most likely language without creating an [NLLanguageRecognizer](nllanguagerecognizer.md).

> **Important**

>  Don’t use an instance of [NLLanguageRecognizer](nllanguagerecognizer.md) from more than one thread simultaneously.

## Topics

### Creating a recognizer

- [init](nllanguagerecognizer/init%28%29.md): Creates a recognizer that you can customize.

### Determining the language

- [dominantLanguageForString:](nllanguagerecognizer/dominantlanguage%28for_%29.md): Finds the most likely language of a piece of text.
- [processString:](nllanguagerecognizer/processstring%28__%29.md): Analyzes the piece of text to determine its dominant language.
- [dominantLanguage](nllanguagerecognizer/dominantlanguage.md): The most likely language for the processed text.
- [languageHypothesesWithMaximum:](nllanguagerecognizer/languagehypotheseswithmaximum_.md): Generates the probabilities of possible languages for the processed text.
- [reset](nllanguagerecognizer/reset%28%29.md): Resets the recognizer to its initial state.

### Guiding the recognizer

- [languageHints](nllanguagerecognizer/languagehints-3gy00.md): A dictionary that maps languages to their probabilities in the language identification process.
- [languageConstraints](nllanguagerecognizer/languageconstraints.md): Limits the set of possible languages that the recognizer will return.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Language identification

- [Identifying the language in text](identifying-the-language-in-text.md): Detect the language in a piece of text by using a language recognizer.
- [NLLanguage](nllanguage.md): The languages that the Natural Language framework supports.
