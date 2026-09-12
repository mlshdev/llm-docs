> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/linguistictags(in:scheme:options:orthography:tokenranges:)](https://developer.apple.com/documentation/foundation/nsstring/linguistictags(in:scheme:options:orthography:tokenranges:))

# linguisticTags(in:scheme:options:orthography:tokenRanges:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns an array of linguistic tags for the specified range and requested tags within the receiving string.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```swift
func linguisticTags(in range: NSRange, scheme: NSLinguisticTagScheme, options: NSLinguisticTagger.Options = [], orthography: NSOrthography?, tokenRanges: AutoreleasingUnsafeMutablePointer<NSArray?>?) -> [NSLinguisticTag]
```

## Parameters

- `range`: The range of the string to analyze.
- `scheme`: The tag scheme to use. See Linguistic Tag Schemes for supported values.
- `options`: The linguistic tagger options to use. See [NSLinguisticTagger.Options](../nslinguistictagger/options.md) for the constants. These constants can be combined using the C-Bitwise OR operator.
- `orthography`: The orthography of the string. If `nil`, the linguistic tagger will attempt to determine the orthography from the string content.
- `tokenRanges`: An array returned by-reference containing the token ranges of the linguistic tags wrapped in `NSValue` objects.

<a id="return-value"></a>

## Return Value

Returns an array containing the linguistic tags for the `tokenRanges` within the receiving string.

<a id="Discussion"></a>

## Discussion

This is a convenience method.  It is the equivalent of creating an instance of [NSLinguisticTagger](../nslinguistictagger.md), specifying the receiver as the string to be analyzed, and the orthography (or `nil`) and then invoking the [NSLinguisticTagger](../nslinguistictagger.md) method or [linguisticTags(in:scheme:options:orthography:tokenRanges:)](linguistictags%28in_scheme_options_orthography_tokenranges_%29.md).

## See Also

### Performing Linguistic Analysis

- [enumerateLinguisticTags(in:scheme:options:orthography:using:)](enumeratelinguistictags%28in_scheme_options_orthography_using_%29.md): Deprecated. Performs linguistic analysis on the specified string by enumerating the specific range of the string, providing the Block with the located tags.
- [NSString.EnumerationOptions](enumerationoptions.md): Constants to specify kinds of substrings and styles of enumeration.

# linguisticTagsInRange:scheme:options:orthography:tokenRanges: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns an array of linguistic tags for the specified range and requested tags within the receiving string.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
- (NSArray<NSString *> *) linguisticTagsInRange:(NSRange) range scheme:(NSLinguisticTagScheme) scheme options:(NSLinguisticTaggerOptions) options orthography:(NSOrthography *) orthography tokenRanges:(NSArray<NSValue *> **) tokenRanges;
```

## Parameters

- `range`: The range of the string to analyze.
- `scheme`: The tag scheme to use. See Linguistic Tag Schemes for supported values.
- `options`: The linguistic tagger options to use. See [NSLinguisticTaggerOptions](../nslinguistictagger/options.md) for the constants. These constants can be combined using the C-Bitwise OR operator.
- `orthography`: The orthography of the string. If `nil`, the linguistic tagger will attempt to determine the orthography from the string content.
- `tokenRanges`: An array returned by-reference containing the token ranges of the linguistic tags wrapped in `NSValue` objects.

<a id="return-value"></a>

## Return Value

Returns an array containing the linguistic tags for the `tokenRanges` within the receiving string.

<a id="Discussion"></a>

## Discussion

This is a convenience method.  It is the equivalent of creating an instance of [NSLinguisticTagger](../nslinguistictagger.md), specifying the receiver as the string to be analyzed, and the orthography (or `nil`) and then invoking the [NSLinguisticTagger](../nslinguistictagger.md) method or [linguisticTagsInRange:scheme:options:orthography:tokenRanges:](linguistictags%28in_scheme_options_orthography_tokenranges_%29.md).

## See Also

### Performing Linguistic Analysis

- [enumerateLinguisticTagsInRange:scheme:options:orthography:usingBlock:](enumeratelinguistictags%28in_scheme_options_orthography_using_%29.md): Deprecated. Performs linguistic analysis on the specified string by enumerating the specific range of the string, providing the Block with the located tags.
- [NSStringEnumerationOptions](enumerationoptions.md): Constants to specify kinds of substrings and styles of enumeration.
