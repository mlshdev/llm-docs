> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagger/tags(in:unit:scheme:options:tokenranges:)](https://developer.apple.com/documentation/foundation/nslinguistictagger/tags(in:unit:scheme:options:tokenranges:))

# tags(in:unit:scheme:options:tokenRanges:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Returns an array of linguistic tags and token ranges for a given string range and linguistic unit.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```swift
func tags(in range: NSRange, unit: NSLinguisticTaggerUnit, scheme: NSLinguisticTagScheme, options: NSLinguisticTagger.Options = [], tokenRanges: AutoreleasingUnsafeMutablePointer<NSArray?>?) -> [NSLinguisticTag]
```

## Parameters

- `range`: The range from which to return tags.
- `unit`: The linguistic unit. See [NSLinguisticTaggerUnit](../nslinguistictaggerunit.md) for possible values.
- `scheme`: The tag scheme. See [NSLinguisticTagScheme](../nslinguistictagscheme.md) for possible values.
- `options`: The linguistic tagger options to use. See [NSLinguisticTagger.Options](options.md) for possible values.
- `tokenRanges`: Returns by reference an array of token ranges.

<a id="return-value"></a>

## Return Value

An array of the tags in the requested range.

<a id="Discussion"></a>

## Discussion

When the returned array contains an entry that doesn’t have a corresponding tag scheme, that entry is an empty string (`""`).

## See Also

### Getting Linguistic Tags

- [tag(at:unit:scheme:tokenRange:)](tag%28at_unit_scheme_tokenrange_%29.md): Deprecated. Returns a tag for a single scheme, for a given linguistic unit, at the specified character position.
- [tag(at:scheme:tokenRange:sentenceRange:)](tag%28at_scheme_tokenrange_sentencerange_%29.md): Deprecated. Returns a tag for a single scheme at the specified character position.
- [tag(for:at:unit:scheme:orthography:tokenRange:)](tag%28for_at_unit_scheme_orthography_tokenrange_%29.md): Deprecated. Returns a tag for a single scheme, for a given linguistic unit, at the specified character position in a string.
- [tags(in:scheme:options:tokenRanges:)](tags%28in_scheme_options_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string range.
- [tags(for:range:unit:scheme:options:orthography:tokenRanges:)](tags%28for_range_unit_scheme_options_orthography_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string and linguistic unit.

# tagsInRange:unit:scheme:options:tokenRanges: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Returns an array of linguistic tags and token ranges for a given string range and linguistic unit.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
- (NSArray<NSString *> *) tagsInRange:(NSRange) range unit:(NSLinguisticTaggerUnit) unit scheme:(NSLinguisticTagScheme) scheme options:(NSLinguisticTaggerOptions) options tokenRanges:(NSArray<NSValue *> **) tokenRanges;
```

## Parameters

- `range`: The range from which to return tags.
- `unit`: The linguistic unit. See [NSLinguisticTaggerUnit](../nslinguistictaggerunit.md) for possible values.
- `scheme`: The tag scheme. See [NSLinguisticTagScheme](../nslinguistictagscheme.md) for possible values.
- `options`: The linguistic tagger options to use. See [NSLinguisticTaggerOptions](options.md) for possible values.
- `tokenRanges`: Returns by reference an array of token ranges.

<a id="return-value"></a>

## Return Value

An array of the tags in the requested range.

<a id="Discussion"></a>

## Discussion

When the returned array contains an entry that doesn’t have a corresponding tag scheme, that entry is an empty string (`""`).

## See Also

### Getting Linguistic Tags

- [tagAtIndex:unit:scheme:tokenRange:](tag%28at_unit_scheme_tokenrange_%29.md): Deprecated. Returns a tag for a single scheme, for a given linguistic unit, at the specified character position.
- [tagAtIndex:scheme:tokenRange:sentenceRange:](tag%28at_scheme_tokenrange_sentencerange_%29.md): Deprecated. Returns a tag for a single scheme at the specified character position.
- [tagForString:atIndex:unit:scheme:orthography:tokenRange:](tag%28for_at_unit_scheme_orthography_tokenrange_%29.md): Deprecated. Returns a tag for a single scheme, for a given linguistic unit, at the specified character position in a string.
- [tagsInRange:scheme:options:tokenRanges:](tags%28in_scheme_options_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string range.
- [tagsForString:range:unit:scheme:options:orthography:tokenRanges:](tags%28for_range_unit_scheme_options_orthography_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string and linguistic unit.
