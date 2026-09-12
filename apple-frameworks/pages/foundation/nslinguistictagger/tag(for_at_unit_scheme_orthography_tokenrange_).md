> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagger/tag(for:at:unit:scheme:orthography:tokenrange:)](https://developer.apple.com/documentation/foundation/nslinguistictagger/tag(for:at:unit:scheme:orthography:tokenrange:))

# tag(for:at:unit:scheme:orthography:tokenRange:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Returns a tag for a single scheme, for a given linguistic unit, at the specified character position in a string.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```swift
class func tag(for string: String, at charIndex: Int, unit: NSLinguisticTaggerUnit, scheme: NSLinguisticTagScheme, orthography: NSOrthography?, tokenRange: NSRangePointer?) -> NSLinguisticTag?
```

## Parameters

- `string`: The position of the initial character.
- `charIndex`: The linguistic unit. See [NSLinguisticTaggerUnit](../nslinguistictaggerunit.md) for possible values.
- `unit`: The tag scheme. See [NSLinguisticTagScheme](../nslinguistictagscheme.md) for possible values.
- `scheme`: A pointer to the token range.

<a id="return-value"></a>

## Return Value

Returns the tag for the requested tag scheme and linguistic unit, or `nil`. If a tag is returned, this function returns by reference the range of the token to `tokenRange`.

<a id="Discussion"></a>

## Discussion

This is a convenience method for initializing a linguistic tagger, setting the [string](string.md) property, and calling the [tag(for:at:unit:scheme:orthography:tokenRange:)](tag%28for_at_unit_scheme_orthography_tokenrange_%29.md) method. If you analyze the same string more than once, you should create a linguistic tagger object instead of calling this method.

## See Also

### Getting Linguistic Tags

- [tag(at:unit:scheme:tokenRange:)](tag%28at_unit_scheme_tokenrange_%29.md): Deprecated. Returns a tag for a single scheme, for a given linguistic unit, at the specified character position.
- [tag(at:scheme:tokenRange:sentenceRange:)](tag%28at_scheme_tokenrange_sentencerange_%29.md): Deprecated. Returns a tag for a single scheme at the specified character position.
- [tags(in:unit:scheme:options:tokenRanges:)](tags%28in_unit_scheme_options_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string range and linguistic unit.
- [tags(in:scheme:options:tokenRanges:)](tags%28in_scheme_options_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string range.
- [tags(for:range:unit:scheme:options:orthography:tokenRanges:)](tags%28for_range_unit_scheme_options_orthography_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string and linguistic unit.

# tagForString:atIndex:unit:scheme:orthography:tokenRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Returns a tag for a single scheme, for a given linguistic unit, at the specified character position in a string.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
+ (NSLinguisticTag) tagForString:(NSString *) string atIndex:(NSUInteger) charIndex unit:(NSLinguisticTaggerUnit) unit scheme:(NSLinguisticTagScheme) scheme orthography:(NSOrthography *) orthography tokenRange:(NSRangePointer) tokenRange;
```

## Parameters

- `string`: The position of the initial character.
- `charIndex`: The linguistic unit. See [NSLinguisticTaggerUnit](../nslinguistictaggerunit.md) for possible values.
- `unit`: The tag scheme. See [NSLinguisticTagScheme](../nslinguistictagscheme.md) for possible values.
- `scheme`: A pointer to the token range.

<a id="return-value"></a>

## Return Value

Returns the tag for the requested tag scheme and linguistic unit, or `nil`. If a tag is returned, this function returns by reference the range of the token to `tokenRange`.

<a id="Discussion"></a>

## Discussion

This is a convenience method for initializing a linguistic tagger, setting the [string](string.md) property, and calling the [tagForString:atIndex:unit:scheme:orthography:tokenRange:](tag%28for_at_unit_scheme_orthography_tokenrange_%29.md) method. If you analyze the same string more than once, you should create a linguistic tagger object instead of calling this method.

## See Also

### Getting Linguistic Tags

- [tagAtIndex:unit:scheme:tokenRange:](tag%28at_unit_scheme_tokenrange_%29.md): Deprecated. Returns a tag for a single scheme, for a given linguistic unit, at the specified character position.
- [tagAtIndex:scheme:tokenRange:sentenceRange:](tag%28at_scheme_tokenrange_sentencerange_%29.md): Deprecated. Returns a tag for a single scheme at the specified character position.
- [tagsInRange:unit:scheme:options:tokenRanges:](tags%28in_unit_scheme_options_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string range and linguistic unit.
- [tagsInRange:scheme:options:tokenRanges:](tags%28in_scheme_options_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string range.
- [tagsForString:range:unit:scheme:options:orthography:tokenRanges:](tags%28for_range_unit_scheme_options_orthography_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string and linguistic unit.
