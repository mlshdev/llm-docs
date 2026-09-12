> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagger/enumeratetags(for:range:unit:scheme:options:orthography:using:)](https://developer.apple.com/documentation/foundation/nslinguistictagger/enumeratetags(for:range:unit:scheme:options:orthography:using:))

# enumerateTags(for:range:unit:scheme:options:orthography:using:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Enumerates over a given string and calls the specified block for each tag.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```swift
class func enumerateTags(for string: String, range: NSRange, unit: NSLinguisticTaggerUnit, scheme: NSLinguisticTagScheme, options: NSLinguisticTagger.Options = [], orthography: NSOrthography?, using block: (NSLinguisticTag?, NSRange, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `string`: The string to enumerate over.
- `range`: The range to analyze.
- `unit`: The linguistic unit. For possible values, see [NSLinguisticTaggerUnit](../nslinguistictaggerunit.md)
- `scheme`: The tag scheme. For possible values, see [NSLinguisticTagScheme](../nslinguistictagscheme.md).
- `options`: The linguistic tagger options to use. See [NSLinguisticTagger.Options](options.md) for possible values.
- `orthography`: The orthography of the string. If unspecified, the orthography is automatically detected.
- `block`: The block to apply to ranges of the string.

  The block takes the following arguments:

  - **tag**: The located linguistic tag.
  - **tokenRange**: The range of the linguistic tag.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further processing of the set. The `stop` argument is an out-only argument. You should only ever set this Boolean to [true](https://developer.apple.com/documentation/swift/true) within the block.

<a id="Discussion"></a>

## Discussion

This method’s block is called for all tokens intersecting a given range, supplying tags and ranges. The tagger segments the string into sentences and tokens as necessary, and return those ranges along with a tag for any scheme in its array of tag schemes. For example, if the tag scheme is [lexicalClass](../nslinguistictagscheme/lexicalclass.md), the tags specify the part of speech (for word tokens) or the type of whitespace or punctuation (for whitespace or punctuation tokens).  If the tag scheme is [lemma](../nslinguistictagscheme/lemma.md), the tags specify the stem form of the word (if known) for each word token.

> **Important**

>  This method enumerates over the ranges of all tokens that intersect the specified range.

This is a convenience method for initializing a linguistic tagger, setting the [string](string.md) property, and calling the [enumerateTags(in:unit:scheme:options:using:)](enumeratetags%28in_unit_scheme_options_using_%29.md) method. If you analyze the same string more than once, you should create a linguistic tagger object instead of calling this method.

## See Also

### Enumerating Linguistic Tags

- [Identifying Parts of Speech](../identifying-parts-of-speech.md): Classify nouns, verbs, adjectives, and other parts of speech in a string.
- [Identifying People, Places, and Organizations](../identifying-people-places-and-organizations.md): Use a linguistic tagger to perform named entity recognition on a string.
- [enumerateTags(in:unit:scheme:options:using:)](enumeratetags%28in_unit_scheme_options_using_%29.md): Deprecated. Enumerates over a given range of the string for a particular unit and calls the specified block for each tag.
- [enumerateTags(in:scheme:options:using:)](enumeratetags%28in_scheme_options_using_%29.md): Deprecated. Enumerates over a given range of the string and calls the specified block for each tag.
- [NSLinguisticTagger.Options](options.md): Constants for linguistic tagger enumeration specifying which tokens to omit and whether to join names.

# enumerateTagsForString:range:unit:scheme:options:orthography:usingBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Enumerates over a given string and calls the specified block for each tag.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
+ (void) enumerateTagsForString:(NSString *) string range:(NSRange) range unit:(NSLinguisticTaggerUnit) unit scheme:(NSLinguisticTagScheme) scheme options:(NSLinguisticTaggerOptions) options orthography:(NSOrthography *) orthography usingBlock:(void (^)(NSLinguisticTag tag, NSRange tokenRange, BOOL *stop)) block;
```

## Parameters

- `string`: The string to enumerate over.
- `range`: The range to analyze.
- `unit`: The linguistic unit. For possible values, see [NSLinguisticTaggerUnit](../nslinguistictaggerunit.md)
- `scheme`: The tag scheme. For possible values, see [NSLinguisticTagScheme](../nslinguistictagscheme.md).
- `options`: The linguistic tagger options to use. See [NSLinguisticTaggerOptions](options.md) for possible values.
- `orthography`: The orthography of the string. If unspecified, the orthography is automatically detected.
- `block`: The block to apply to ranges of the string.

  The block takes the following arguments:

  - **tag**: The located linguistic tag.
  - **tokenRange**: The range of the linguistic tag.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further processing of the set. The `stop` argument is an out-only argument. You should only ever set this Boolean to [true](https://developer.apple.com/documentation/swift/true) within the block.

<a id="Discussion"></a>

## Discussion

This method’s block is called for all tokens intersecting a given range, supplying tags and ranges. The tagger segments the string into sentences and tokens as necessary, and return those ranges along with a tag for any scheme in its array of tag schemes. For example, if the tag scheme is [NSLinguisticTagSchemeLexicalClass](../nslinguistictagscheme/lexicalclass.md), the tags specify the part of speech (for word tokens) or the type of whitespace or punctuation (for whitespace or punctuation tokens).  If the tag scheme is [NSLinguisticTagSchemeLemma](../nslinguistictagscheme/lemma.md), the tags specify the stem form of the word (if known) for each word token.

> **Important**

>  This method enumerates over the ranges of all tokens that intersect the specified range.

This is a convenience method for initializing a linguistic tagger, setting the [string](string.md) property, and calling the [enumerateTagsInRange:unit:scheme:options:usingBlock:](enumeratetags%28in_unit_scheme_options_using_%29.md) method. If you analyze the same string more than once, you should create a linguistic tagger object instead of calling this method.

## See Also

### Enumerating Linguistic Tags

- [Identifying Parts of Speech](../identifying-parts-of-speech.md): Classify nouns, verbs, adjectives, and other parts of speech in a string.
- [Identifying People, Places, and Organizations](../identifying-people-places-and-organizations.md): Use a linguistic tagger to perform named entity recognition on a string.
- [enumerateTagsInRange:unit:scheme:options:usingBlock:](enumeratetags%28in_unit_scheme_options_using_%29.md): Deprecated. Enumerates over a given range of the string for a particular unit and calls the specified block for each tag.
- [enumerateTagsInRange:scheme:options:usingBlock:](enumeratetags%28in_scheme_options_using_%29.md): Deprecated. Enumerates over a given range of the string and calls the specified block for each tag.
- [NSLinguisticTaggerOptions](options.md): Constants for linguistic tagger enumeration specifying which tokens to omit and whether to join names.
