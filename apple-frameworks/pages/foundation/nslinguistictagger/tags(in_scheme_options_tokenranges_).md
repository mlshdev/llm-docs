> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagger/tags(in:scheme:options:tokenranges:)](https://developer.apple.com/documentation/foundation/nslinguistictagger/tags(in:scheme:options:tokenranges:))

# tags(in:scheme:options:tokenRanges:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns an array of linguistic tags and token ranges for a given string range.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```swift
func tags(in range: NSRange, scheme tagScheme: String, options opts: NSLinguisticTagger.Options = [], tokenRanges: AutoreleasingUnsafeMutablePointer<NSArray?>?) -> [String]
```

## Parameters

- `range`: The range from which to return tags.
- `tagScheme`: The tag scheme. See [NSLinguisticTagScheme](../nslinguistictagscheme.md) for possible values.
- `opts`: The linguistic tagger options to use. See [NSLinguisticTagger.Options](options.md) for possible values.
- `tokenRanges`: Returns by reference an array of token ranges.

<a id="return-value"></a>

## Return Value

An array of the tags in the requested range.

<a id="Discussion"></a>

## Discussion

When the returned array contains an entry that doesn’t have a corresponding tag scheme, that entry is an empty string (`""`).

This is a convenience method for calling [tags(in:unit:scheme:options:tokenRanges:)](tags%28in_unit_scheme_options_tokenranges_%29.md) and passing [NSLinguisticTaggerUnit.word](../nslinguistictaggerunit/word.md) as the linguistic unit.

## See Also

### Getting Linguistic Tags

- [tag(at:unit:scheme:tokenRange:)](tag%28at_unit_scheme_tokenrange_%29.md): Deprecated. Returns a tag for a single scheme, for a given linguistic unit, at the specified character position.
- [tag(at:scheme:tokenRange:sentenceRange:)](tag%28at_scheme_tokenrange_sentencerange_%29.md): Deprecated. Returns a tag for a single scheme at the specified character position.
- [tag(for:at:unit:scheme:orthography:tokenRange:)](tag%28for_at_unit_scheme_orthography_tokenrange_%29.md): Deprecated. Returns a tag for a single scheme, for a given linguistic unit, at the specified character position in a string.
- [tags(in:unit:scheme:options:tokenRanges:)](tags%28in_unit_scheme_options_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string range and linguistic unit.
- [tags(for:range:unit:scheme:options:orthography:tokenRanges:)](tags%28for_range_unit_scheme_options_orthography_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string and linguistic unit.

# tagsInRange:scheme:options:tokenRanges: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns an array of linguistic tags and token ranges for a given string range.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
- (NSArray<NSString *> *) tagsInRange:(NSRange) range scheme:(NSString *) tagScheme options:(NSLinguisticTaggerOptions) opts tokenRanges:(NSArray<NSValue *> **) tokenRanges;
```

## Parameters

- `range`: The range from which to return tags.
- `tagScheme`: The tag scheme. See [NSLinguisticTagScheme](../nslinguistictagscheme.md) for possible values.
- `opts`: The linguistic tagger options to use. See [NSLinguisticTaggerOptions](options.md) for possible values.
- `tokenRanges`: Returns by reference an array of token ranges.

<a id="return-value"></a>

## Return Value

An array of the tags in the requested range.

<a id="Discussion"></a>

## Discussion

When the returned array contains an entry that doesn’t have a corresponding tag scheme, that entry is an empty string (`""`).

This is a convenience method for calling [tagsInRange:unit:scheme:options:tokenRanges:](tags%28in_unit_scheme_options_tokenranges_%29.md) and passing [NSLinguisticTaggerUnitWord](../nslinguistictaggerunit/word.md) as the linguistic unit.

## See Also

### Getting Linguistic Tags

- [tagAtIndex:unit:scheme:tokenRange:](tag%28at_unit_scheme_tokenrange_%29.md): Deprecated. Returns a tag for a single scheme, for a given linguistic unit, at the specified character position.
- [tagAtIndex:scheme:tokenRange:sentenceRange:](tag%28at_scheme_tokenrange_sentencerange_%29.md): Deprecated. Returns a tag for a single scheme at the specified character position.
- [tagForString:atIndex:unit:scheme:orthography:tokenRange:](tag%28for_at_unit_scheme_orthography_tokenrange_%29.md): Deprecated. Returns a tag for a single scheme, for a given linguistic unit, at the specified character position in a string.
- [tagsInRange:unit:scheme:options:tokenRanges:](tags%28in_unit_scheme_options_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string range and linguistic unit.
- [tagsForString:range:unit:scheme:options:orthography:tokenRanges:](tags%28for_range_unit_scheme_options_orthography_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string and linguistic unit.
