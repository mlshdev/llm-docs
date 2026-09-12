> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagger/enumeratetags(in:scheme:options:using:)](https://developer.apple.com/documentation/foundation/nslinguistictagger/enumeratetags(in:scheme:options:using:))

# enumerateTags(in:scheme:options:using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Enumerates over a given range of the string and calls the specified block for each tag.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```swift
func enumerateTags(in range: NSRange, scheme tagScheme: NSLinguisticTagScheme, options opts: NSLinguisticTagger.Options = [], using block: (NSLinguisticTag?, NSRange, NSRange, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `range`: The range to analyze.
- `tagScheme`: The tag scheme. For possible values, see [NSLinguisticTagScheme](../nslinguistictagscheme.md).
- `opts`: The linguistic tagger options to use. See [NSLinguisticTagger.Options](options.md) for possible values.
- `block`: The block to apply to ranges of the string.

  The block takes the following arguments:

  - **tag**: The located linguistic tag.
  - **tokenRange**: The range of the linguistic tag.
  - **sentenceRange**: The range of the sentence in which the tag occurs.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further processing of the set. The `stop` argument is an out-only argument. You should only ever set this Boolean to [true](https://developer.apple.com/documentation/swift/true) within the block.

<a id="Discussion"></a>

## Discussion

This method’s block is called for all tokens intersecting a given range, supplying tags and ranges. The tagger segments the string into sentences and tokens as necessary, and return those ranges along with a tag for any scheme in its array of tag schemes. For example, if the tag scheme is [lexicalClass](../nslinguistictagscheme/lexicalclass.md), the tags specify the part of speech (for word tokens) or the type of whitespace or punctuation (for whitespace or punctuation tokens).  If the tag scheme is [lemma](../nslinguistictagscheme/lemma.md), the tags specify the stem form of the word (if known) for each word token.

> **Important**

>  This method enumerates over the ranges of all tokens that intersect the specified range.

This is a convenience method for calling the [enumerateTags(in:unit:scheme:options:using:)](enumeratetags%28in_unit_scheme_options_using_%29.md) method, passing [NSLinguisticTaggerUnit.word](../nslinguistictaggerunit/word.md) as the linguistic unit.

## See Also

### Enumerating Linguistic Tags

- [Identifying Parts of Speech](../identifying-parts-of-speech.md): Classify nouns, verbs, adjectives, and other parts of speech in a string.
- [Identifying People, Places, and Organizations](../identifying-people-places-and-organizations.md): Use a linguistic tagger to perform named entity recognition on a string.
- [enumerateTags(in:unit:scheme:options:using:)](enumeratetags%28in_unit_scheme_options_using_%29.md): Deprecated. Enumerates over a given range of the string for a particular unit and calls the specified block for each tag.
- [enumerateTags(for:range:unit:scheme:options:orthography:using:)](enumeratetags%28for_range_unit_scheme_options_orthography_using_%29.md): Deprecated. Enumerates over a given string and calls the specified block for each tag.
- [NSLinguisticTagger.Options](options.md): Constants for linguistic tagger enumeration specifying which tokens to omit and whether to join names.

# enumerateTagsInRange:scheme:options:usingBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Enumerates over a given range of the string and calls the specified block for each tag.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
- (void) enumerateTagsInRange:(NSRange) range scheme:(NSLinguisticTagScheme) tagScheme options:(NSLinguisticTaggerOptions) opts usingBlock:(void (^)(NSLinguisticTag tag, NSRange tokenRange, NSRange sentenceRange, BOOL *stop)) block;
```

## Parameters

- `range`: The range to analyze.
- `tagScheme`: The tag scheme. For possible values, see [NSLinguisticTagScheme](../nslinguistictagscheme.md).
- `opts`: The linguistic tagger options to use. See [NSLinguisticTaggerOptions](options.md) for possible values.
- `block`: The block to apply to ranges of the string.

  The block takes the following arguments:

  - **tag**: The located linguistic tag.
  - **tokenRange**: The range of the linguistic tag.
  - **sentenceRange**: The range of the sentence in which the tag occurs.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further processing of the set. The `stop` argument is an out-only argument. You should only ever set this Boolean to [true](https://developer.apple.com/documentation/swift/true) within the block.

<a id="Discussion"></a>

## Discussion

This method’s block is called for all tokens intersecting a given range, supplying tags and ranges. The tagger segments the string into sentences and tokens as necessary, and return those ranges along with a tag for any scheme in its array of tag schemes. For example, if the tag scheme is [NSLinguisticTagSchemeLexicalClass](../nslinguistictagscheme/lexicalclass.md), the tags specify the part of speech (for word tokens) or the type of whitespace or punctuation (for whitespace or punctuation tokens).  If the tag scheme is [NSLinguisticTagSchemeLemma](../nslinguistictagscheme/lemma.md), the tags specify the stem form of the word (if known) for each word token.

> **Important**

>  This method enumerates over the ranges of all tokens that intersect the specified range.

This is a convenience method for calling the [enumerateTagsInRange:unit:scheme:options:usingBlock:](enumeratetags%28in_unit_scheme_options_using_%29.md) method, passing [NSLinguisticTaggerUnitWord](../nslinguistictaggerunit/word.md) as the linguistic unit.

## See Also

### Enumerating Linguistic Tags

- [Identifying Parts of Speech](../identifying-parts-of-speech.md): Classify nouns, verbs, adjectives, and other parts of speech in a string.
- [Identifying People, Places, and Organizations](../identifying-people-places-and-organizations.md): Use a linguistic tagger to perform named entity recognition on a string.
- [enumerateTagsInRange:unit:scheme:options:usingBlock:](enumeratetags%28in_unit_scheme_options_using_%29.md): Deprecated. Enumerates over a given range of the string for a particular unit and calls the specified block for each tag.
- [enumerateTagsForString:range:unit:scheme:options:orthography:usingBlock:](enumeratetags%28for_range_unit_scheme_options_orthography_using_%29.md): Deprecated. Enumerates over a given string and calls the specified block for each tag.
- [NSLinguisticTaggerOptions](options.md): Constants for linguistic tagger enumeration specifying which tokens to omit and whether to join names.
