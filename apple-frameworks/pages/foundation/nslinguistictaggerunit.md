> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictaggerunit](https://developer.apple.com/documentation/foundation/nslinguistictaggerunit)

# NSLinguisticTaggerUnit (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants representing linguistic units.

## Declaration

```swift
enum NSLinguisticTaggerUnit
```

<a id="overview"></a>

## Overview

You use these constants with the [availableTagSchemes(for:language:)](nslinguistictagger/availabletagschemes%28for_language_%29.md) method as well as the [tag(for:at:unit:scheme:orthography:tokenRange:)](nslinguistictagger/tag%28for_at_unit_scheme_orthography_tokenrange_%29.md),  [tags(in:unit:scheme:options:tokenRanges:)](nslinguistictagger/tags%28in_unit_scheme_options_tokenranges_%29.md), and [enumerateTags(in:unit:scheme:options:using:)](nslinguistictagger/enumeratetags%28in_unit_scheme_options_using_%29.md) methods.

## Topics

### Constants

- [NSLinguisticTaggerUnit.document](nslinguistictaggerunit/document.md): The document in its entirety.
- [NSLinguisticTaggerUnit.paragraph](nslinguistictaggerunit/paragraph.md): An individual paragraph.
- [NSLinguisticTaggerUnit.sentence](nslinguistictaggerunit/sentence.md): An individual sentence.
- [NSLinguisticTaggerUnit.word](nslinguistictaggerunit/word.md): An individual word.

### Initializers

- [init(rawValue:)](nslinguistictaggerunit/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting Types

- [NSLinguisticTagScheme](nslinguistictagscheme.md): Constants for the tag schemes specified when initializing a linguistic tagger.
- [NSLinguisticTag](nslinguistictag.md): A token, lexical class, name, lemma, language, or script returned by a linguistic tagger for natural language text.

# NSLinguisticTaggerUnit (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants representing linguistic units.

## Declaration

```objectivec
enum NSLinguisticTaggerUnit : NSInteger;
```

<a id="overview"></a>

## Overview

You use these constants with the [availableTagSchemesForUnit:language:](nslinguistictagger/availabletagschemes%28for_language_%29.md) method as well as the [tagForString:atIndex:unit:scheme:orthography:tokenRange:](nslinguistictagger/tag%28for_at_unit_scheme_orthography_tokenrange_%29.md),  [tagsInRange:unit:scheme:options:tokenRanges:](nslinguistictagger/tags%28in_unit_scheme_options_tokenranges_%29.md), and [enumerateTagsInRange:unit:scheme:options:usingBlock:](nslinguistictagger/enumeratetags%28in_unit_scheme_options_using_%29.md) methods.

## Topics

### Constants

- [NSLinguisticTaggerUnitDocument](nslinguistictaggerunit/document.md): The document in its entirety.
- [NSLinguisticTaggerUnitParagraph](nslinguistictaggerunit/paragraph.md): An individual paragraph.
- [NSLinguisticTaggerUnitSentence](nslinguistictaggerunit/sentence.md): An individual sentence.
- [NSLinguisticTaggerUnitWord](nslinguistictaggerunit/word.md): An individual word.

## See Also

### Supporting Types

- [NSLinguisticTagScheme](nslinguistictagscheme.md): Constants for the tag schemes specified when initializing a linguistic tagger.
- [NSLinguisticTag](nslinguistictag.md): A token, lexical class, name, lemma, language, or script returned by a linguistic tagger for natural language text.
