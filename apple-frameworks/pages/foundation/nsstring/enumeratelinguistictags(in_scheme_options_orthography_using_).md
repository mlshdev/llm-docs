> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/enumeratelinguistictags(in:scheme:options:orthography:using:)](https://developer.apple.com/documentation/foundation/nsstring/enumeratelinguistictags(in:scheme:options:orthography:using:))

# enumerateLinguisticTags(in:scheme:options:orthography:using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Performs linguistic analysis on the specified string by enumerating the specific range of the string, providing the Block with the located tags.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```swift
func enumerateLinguisticTags(in range: NSRange, scheme: NSLinguisticTagScheme, options: NSLinguisticTagger.Options = [], orthography: NSOrthography?, using block: (NSLinguisticTag?, NSRange, NSRange, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `range`: The range of the string to analyze.
- `scheme`: The tag scheme to use. See Linguistic Tag Schemes for supported values.
- `options`: The linguistic tagger options to use. See [NSLinguisticTagger.Options](../nslinguistictagger/options.md)for the constants. These constants can be combined using the C-Bitwise OR operator.
- `orthography`: The orthography of the string. If `nil`, the linguistic tagger will attempt to determine the orthography from the string content.
- `block`: The Block to apply to the string.

  The block takes four arguments:

  - **tag**: The tag scheme for the token. The opts parameter specifies the types of tagger options that are located.
  - **tokenRange**: The range of a string matching the tag scheme.
  - **sentenceRange**: The range of the sentence in which the token is found.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further processing of the array. The `stop` argument is an out-only argument. You should only ever set this Boolean to [true](https://developer.apple.com/documentation/swift/true) within the Block.

<a id="Discussion"></a>

## Discussion

This is a convenience method.  It is the equivalent of creating an instance of `NSLinguisticTagger`, specifying the receiver as the string to be analyzed, and the orthography (or `nil`) and then invoking the [NSLinguisticTagger](../nslinguistictagger.md) method or [enumerateTags(in:scheme:options:using:)](../nslinguistictagger/enumeratetags%28in_scheme_options_using_%29.md).

## See Also

### Performing Linguistic Analysis

- [linguisticTags(in:scheme:options:orthography:tokenRanges:)](linguistictags%28in_scheme_options_orthography_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags for the specified range and requested tags within the receiving string.
- [NSString.EnumerationOptions](enumerationoptions.md): Constants to specify kinds of substrings and styles of enumeration.

# enumerateLinguisticTagsInRange:scheme:options:orthography:usingBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Performs linguistic analysis on the specified string by enumerating the specific range of the string, providing the Block with the located tags.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
- (void) enumerateLinguisticTagsInRange:(NSRange) range scheme:(NSLinguisticTagScheme) scheme options:(NSLinguisticTaggerOptions) options orthography:(NSOrthography *) orthography usingBlock:(void (^)(NSLinguisticTag tag, NSRange tokenRange, NSRange sentenceRange, BOOL *stop)) block;
```

## Parameters

- `range`: The range of the string to analyze.
- `scheme`: The tag scheme to use. See Linguistic Tag Schemes for supported values.
- `options`: The linguistic tagger options to use. See [NSLinguisticTaggerOptions](../nslinguistictagger/options.md)for the constants. These constants can be combined using the C-Bitwise OR operator.
- `orthography`: The orthography of the string. If `nil`, the linguistic tagger will attempt to determine the orthography from the string content.
- `block`: The Block to apply to the string.

  The block takes four arguments:

  - **tag**: The tag scheme for the token. The opts parameter specifies the types of tagger options that are located.
  - **tokenRange**: The range of a string matching the tag scheme.
  - **sentenceRange**: The range of the sentence in which the token is found.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further processing of the array. The `stop` argument is an out-only argument. You should only ever set this Boolean to [true](https://developer.apple.com/documentation/swift/true) within the Block.

<a id="Discussion"></a>

## Discussion

This is a convenience method.  It is the equivalent of creating an instance of `NSLinguisticTagger`, specifying the receiver as the string to be analyzed, and the orthography (or `nil`) and then invoking the [NSLinguisticTagger](../nslinguistictagger.md) method or [enumerateTagsInRange:scheme:options:usingBlock:](../nslinguistictagger/enumeratetags%28in_scheme_options_using_%29.md).

## See Also

### Performing Linguistic Analysis

- [linguisticTagsInRange:scheme:options:orthography:tokenRanges:](linguistictags%28in_scheme_options_orthography_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags for the specified range and requested tags within the receiving string.
- [NSStringEnumerationOptions](enumerationoptions.md): Constants to specify kinds of substrings and styles of enumeration.
