> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagger](https://developer.apple.com/documentation/foundation/nslinguistictagger)

# NSLinguisticTagger (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Analyze natural language text to tag part of speech and lexical class, identify names, perform lemmatization, and determine the language and script.

> Use the [Natural Language](../naturallanguage.md) framework instead.

## Declaration

```swift
class NSLinguisticTagger
```

## Mentioned In

- [Tokenizing Natural Language Text](tokenizing-natural-language-text.md)
- [Identifying Parts of Speech](identifying-parts-of-speech.md)
- [Identifying People, Places, and Organizations](identifying-people-places-and-organizations.md)

<a id="overview"></a>

## Overview

[NSLinguisticTagger](nslinguistictagger.md) provides a uniform interface to a variety of natural language processing functionality with support for many different languages and scripts. You can use this class to segment natural language text into paragraphs, sentences, or words, and tag information about those segments, such as part of speech, lexical class, lemma, script, and language.

When you create a linguistic tagger, you specify what kind of information you’re interested in by passing one or more [NSLinguisticTagScheme](nslinguistictagscheme.md) values. Set the [string](nslinguistictagger/string.md) property to the natural language text you want to analyze, and the linguistic tagger processes it according to the specified tag schemes. You can then enumerate over the tags in a specified range, using the methods described in Enumerating Linguistic Tags, to get the information requested for a given scheme and unit.

<a id="Thread-Safety"></a>

### Thread Safety

A single instance of [NSLinguisticTagger](nslinguistictagger.md) should not be used simultaneously from multiple threads.

## Topics

### First Steps

- [Tokenizing Natural Language Text](tokenizing-natural-language-text.md): Enumerate the words in a string.
- [init(tagSchemes:options:)](nslinguistictagger/init%28tagschemes_options_%29.md): Deprecated. Creates a linguistic tagger instance using the specified tag schemes and options.
- [string](nslinguistictagger/string.md): Deprecated. The string being analyzed by the linguistic tagger.

### Getting the Tag Schemes

- [availableTagSchemes(for:language:)](nslinguistictagger/availabletagschemes%28for_language_%29.md): Deprecated. Returns the tag schemes available for a particular unit and language on the current device.
- [availableTagSchemes(forLanguage:)](nslinguistictagger/availabletagschemes%28forlanguage_%29.md): Deprecated. Returns the tag schemes available for a particular language on the current device.
- [tagSchemes](nslinguistictagger/tagschemes.md): Deprecated. Returns the tag schemes configured for this linguistic tagger. For possible values, see [NSLinguisticTagScheme](nslinguistictagscheme.md).

### Determining the Dominant Language and Orthography

- [dominantLanguage(for:)](nslinguistictagger/dominantlanguage%28for_%29.md): Deprecated. Returns the dominant language for the specified string.
- [dominantLanguage](nslinguistictagger/dominantlanguage.md): Deprecated. Returns the dominant language of the string set for the linguistic tagger.
- [orthography(at:effectiveRange:)](nslinguistictagger/orthography%28at_effectiverange_%29.md): Deprecated. Returns the orthography at the index and also returns the effective range.
- [setOrthography(\_:range:)](nslinguistictagger/setorthography%28__range_%29.md): Deprecated. Sets the orthography for the specified range.

### Enumerating Linguistic Tags

- [Identifying Parts of Speech](identifying-parts-of-speech.md): Classify nouns, verbs, adjectives, and other parts of speech in a string.
- [Identifying People, Places, and Organizations](identifying-people-places-and-organizations.md): Use a linguistic tagger to perform named entity recognition on a string.
- [enumerateTags(in:unit:scheme:options:using:)](nslinguistictagger/enumeratetags%28in_unit_scheme_options_using_%29.md): Deprecated. Enumerates over a given range of the string for a particular unit and calls the specified block for each tag.
- [enumerateTags(in:scheme:options:using:)](nslinguistictagger/enumeratetags%28in_scheme_options_using_%29.md): Deprecated. Enumerates over a given range of the string and calls the specified block for each tag.
- [enumerateTags(for:range:unit:scheme:options:orthography:using:)](nslinguistictagger/enumeratetags%28for_range_unit_scheme_options_orthography_using_%29.md): Deprecated. Enumerates over a given string and calls the specified block for each tag.
- [NSLinguisticTagger.Options](nslinguistictagger/options.md): Constants for linguistic tagger enumeration specifying which tokens to omit and whether to join names.

### Getting Linguistic Tags

- [tag(at:unit:scheme:tokenRange:)](nslinguistictagger/tag%28at_unit_scheme_tokenrange_%29.md): Deprecated. Returns a tag for a single scheme, for a given linguistic unit, at the specified character position.
- [tag(at:scheme:tokenRange:sentenceRange:)](nslinguistictagger/tag%28at_scheme_tokenrange_sentencerange_%29.md): Deprecated. Returns a tag for a single scheme at the specified character position.
- [tag(for:at:unit:scheme:orthography:tokenRange:)](nslinguistictagger/tag%28for_at_unit_scheme_orthography_tokenrange_%29.md): Deprecated. Returns a tag for a single scheme, for a given linguistic unit, at the specified character position in a string.
- [tags(in:unit:scheme:options:tokenRanges:)](nslinguistictagger/tags%28in_unit_scheme_options_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string range and linguistic unit.
- [tags(in:scheme:options:tokenRanges:)](nslinguistictagger/tags%28in_scheme_options_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string range.
- [tags(for:range:unit:scheme:options:orthography:tokenRanges:)](nslinguistictagger/tags%28for_range_unit_scheme_options_orthography_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string and linguistic unit.

### Determining the Range of a Unit Token

- [tokenRange(at:unit:)](nslinguistictagger/tokenrange%28at_unit_%29.md): Deprecated. Returns the range of the linguistic unit containing the specified character index.
- [sentenceRange(for:)](nslinguistictagger/sentencerange%28for_%29.md): Deprecated. Returns the range of a sentence containing the specified range.

### Determining the Possible Tags

- [possibleTags(at:scheme:tokenRange:sentenceRange:scores:)](nslinguistictagger/possibletags%28at_scheme_tokenrange_sentencerange_scores_%29.md): Deprecated. Returns an array of possible tags for the given scheme at the specified range, supplying matching scores.

### Notifying for Changes to the Analyzed String

- [stringEdited(in:changeInLength:)](nslinguistictagger/stringedited%28in_changeinlength_%29.md): Deprecated. Notifies the linguistic tagger that the string (if mutable) has changed as specified by the parameters.

### Supporting Types

- [NSLinguisticTagScheme](nslinguistictagscheme.md): Constants for the tag schemes specified when initializing a linguistic tagger.
- [NSLinguisticTaggerUnit](nslinguistictaggerunit.md): Constants representing linguistic units.
- [NSLinguisticTag](nslinguistictag.md): A token, lexical class, name, lemma, language, or script returned by a linguistic tagger for natural language text.

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

### Deprecated

- [Deprecated String Encodings](1497268-deprecated-string-encodings.md)

# NSLinguisticTagger (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Analyze natural language text to tag part of speech and lexical class, identify names, perform lemmatization, and determine the language and script.

> Use the [Natural Language](../naturallanguage.md) framework instead.

## Declaration

```objectivec
@interface NSLinguisticTagger : NSObject
```

## Mentioned In

- [Tokenizing Natural Language Text](tokenizing-natural-language-text.md)
- [Identifying Parts of Speech](identifying-parts-of-speech.md)
- [Identifying People, Places, and Organizations](identifying-people-places-and-organizations.md)

<a id="overview"></a>

## Overview

[NSLinguisticTagger](nslinguistictagger.md) provides a uniform interface to a variety of natural language processing functionality with support for many different languages and scripts. You can use this class to segment natural language text into paragraphs, sentences, or words, and tag information about those segments, such as part of speech, lexical class, lemma, script, and language.

When you create a linguistic tagger, you specify what kind of information you’re interested in by passing one or more [NSLinguisticTagScheme](nslinguistictagscheme.md) values. Set the [string](nslinguistictagger/string.md) property to the natural language text you want to analyze, and the linguistic tagger processes it according to the specified tag schemes. You can then enumerate over the tags in a specified range, using the methods described in Enumerating Linguistic Tags, to get the information requested for a given scheme and unit.

<a id="Thread-Safety"></a>

### Thread Safety

A single instance of [NSLinguisticTagger](nslinguistictagger.md) should not be used simultaneously from multiple threads.

## Topics

### First Steps

- [Tokenizing Natural Language Text](tokenizing-natural-language-text.md): Enumerate the words in a string.
- [initWithTagSchemes:options:](nslinguistictagger/init%28tagschemes_options_%29.md): Deprecated. Creates a linguistic tagger instance using the specified tag schemes and options.
- [string](nslinguistictagger/string.md): Deprecated. The string being analyzed by the linguistic tagger.

### Getting the Tag Schemes

- [availableTagSchemesForUnit:language:](nslinguistictagger/availabletagschemes%28for_language_%29.md): Deprecated. Returns the tag schemes available for a particular unit and language on the current device.
- [availableTagSchemesForLanguage:](nslinguistictagger/availabletagschemes%28forlanguage_%29.md): Deprecated. Returns the tag schemes available for a particular language on the current device.
- [tagSchemes](nslinguistictagger/tagschemes.md): Deprecated. Returns the tag schemes configured for this linguistic tagger. For possible values, see [NSLinguisticTagScheme](nslinguistictagscheme.md).

### Determining the Dominant Language and Orthography

- [dominantLanguageForString:](nslinguistictagger/dominantlanguage%28for_%29.md): Deprecated. Returns the dominant language for the specified string.
- [dominantLanguage](nslinguistictagger/dominantlanguage.md): Deprecated. Returns the dominant language of the string set for the linguistic tagger.
- [orthographyAtIndex:effectiveRange:](nslinguistictagger/orthography%28at_effectiverange_%29.md): Deprecated. Returns the orthography at the index and also returns the effective range.
- [setOrthography:range:](nslinguistictagger/setorthography%28__range_%29.md): Deprecated. Sets the orthography for the specified range.

### Enumerating Linguistic Tags

- [Identifying Parts of Speech](identifying-parts-of-speech.md): Classify nouns, verbs, adjectives, and other parts of speech in a string.
- [Identifying People, Places, and Organizations](identifying-people-places-and-organizations.md): Use a linguistic tagger to perform named entity recognition on a string.
- [enumerateTagsInRange:unit:scheme:options:usingBlock:](nslinguistictagger/enumeratetags%28in_unit_scheme_options_using_%29.md): Deprecated. Enumerates over a given range of the string for a particular unit and calls the specified block for each tag.
- [enumerateTagsInRange:scheme:options:usingBlock:](nslinguistictagger/enumeratetags%28in_scheme_options_using_%29.md): Deprecated. Enumerates over a given range of the string and calls the specified block for each tag.
- [enumerateTagsForString:range:unit:scheme:options:orthography:usingBlock:](nslinguistictagger/enumeratetags%28for_range_unit_scheme_options_orthography_using_%29.md): Deprecated. Enumerates over a given string and calls the specified block for each tag.
- [NSLinguisticTaggerOptions](nslinguistictagger/options.md): Constants for linguistic tagger enumeration specifying which tokens to omit and whether to join names.

### Getting Linguistic Tags

- [tagAtIndex:unit:scheme:tokenRange:](nslinguistictagger/tag%28at_unit_scheme_tokenrange_%29.md): Deprecated. Returns a tag for a single scheme, for a given linguistic unit, at the specified character position.
- [tagAtIndex:scheme:tokenRange:sentenceRange:](nslinguistictagger/tag%28at_scheme_tokenrange_sentencerange_%29.md): Deprecated. Returns a tag for a single scheme at the specified character position.
- [tagForString:atIndex:unit:scheme:orthography:tokenRange:](nslinguistictagger/tag%28for_at_unit_scheme_orthography_tokenrange_%29.md): Deprecated. Returns a tag for a single scheme, for a given linguistic unit, at the specified character position in a string.
- [tagsInRange:unit:scheme:options:tokenRanges:](nslinguistictagger/tags%28in_unit_scheme_options_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string range and linguistic unit.
- [tagsInRange:scheme:options:tokenRanges:](nslinguistictagger/tags%28in_scheme_options_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string range.
- [tagsForString:range:unit:scheme:options:orthography:tokenRanges:](nslinguistictagger/tags%28for_range_unit_scheme_options_orthography_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string and linguistic unit.

### Determining the Range of a Unit Token

- [tokenRangeAtIndex:unit:](nslinguistictagger/tokenrange%28at_unit_%29.md): Deprecated. Returns the range of the linguistic unit containing the specified character index.
- [sentenceRangeForRange:](nslinguistictagger/sentencerange%28for_%29.md): Deprecated. Returns the range of a sentence containing the specified range.

### Determining the Possible Tags

- [possibleTagsAtIndex:scheme:tokenRange:sentenceRange:scores:](nslinguistictagger/possibletags%28at_scheme_tokenrange_sentencerange_scores_%29.md): Deprecated. Returns an array of possible tags for the given scheme at the specified range, supplying matching scores.

### Notifying for Changes to the Analyzed String

- [stringEditedInRange:changeInLength:](nslinguistictagger/stringedited%28in_changeinlength_%29.md): Deprecated. Notifies the linguistic tagger that the string (if mutable) has changed as specified by the parameters.

### Supporting Types

- [NSLinguisticTagScheme](nslinguistictagscheme.md): Constants for the tag schemes specified when initializing a linguistic tagger.
- [NSLinguisticTaggerUnit](nslinguistictaggerunit.md): Constants representing linguistic units.
- [NSLinguisticTag](nslinguistictag.md): A token, lexical class, name, lemma, language, or script returned by a linguistic tagger for natural language text.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Deprecated

- [Deprecated String Encodings](1497268-deprecated-string-encodings.md)
