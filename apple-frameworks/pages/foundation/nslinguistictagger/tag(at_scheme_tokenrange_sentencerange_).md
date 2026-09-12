> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagger/tag(at:scheme:tokenrange:sentencerange:)](https://developer.apple.com/documentation/foundation/nslinguistictagger/tag(at:scheme:tokenrange:sentencerange:))

# tag(at:scheme:tokenRange:sentenceRange:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns a tag for a single scheme at the specified character position.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```swift
func tag(at charIndex: Int, scheme: NSLinguisticTagScheme, tokenRange: NSRangePointer?, sentenceRange: NSRangePointer?) -> NSLinguisticTag?
```

## Parameters

- `charIndex`: The position of the initial character.
- `scheme`: The tag scheme. See [NSLinguisticTagScheme](../nslinguistictagscheme.md) for the possible values.
- `tokenRange`: A pointer to the token range.
- `sentenceRange`: A pointer to the range of the sentence.

<a id="return-value"></a>

## Return Value

Returns the tag for the requested tag scheme, or `nil`. If a tag is returned, this function returns by reference the range of the token to `tokenRange`, and the range of the enclosing sentence to `sentenceRange`, if applicable.

<a id="Discussion"></a>

## Discussion

This is a convenience method for calling [tag(at:unit:scheme:tokenRange:)](tag%28at_unit_scheme_tokenrange_%29.md) and passing [NSLinguisticTaggerUnit.word](../nslinguistictaggerunit/word.md) as the linguistic unit.

## See Also

### Getting Linguistic Tags

- [tag(at:unit:scheme:tokenRange:)](tag%28at_unit_scheme_tokenrange_%29.md): Deprecated. Returns a tag for a single scheme, for a given linguistic unit, at the specified character position.
- [tag(for:at:unit:scheme:orthography:tokenRange:)](tag%28for_at_unit_scheme_orthography_tokenrange_%29.md): Deprecated. Returns a tag for a single scheme, for a given linguistic unit, at the specified character position in a string.
- [tags(in:unit:scheme:options:tokenRanges:)](tags%28in_unit_scheme_options_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string range and linguistic unit.
- [tags(in:scheme:options:tokenRanges:)](tags%28in_scheme_options_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string range.
- [tags(for:range:unit:scheme:options:orthography:tokenRanges:)](tags%28for_range_unit_scheme_options_orthography_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string and linguistic unit.

# tagAtIndex:scheme:tokenRange:sentenceRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns a tag for a single scheme at the specified character position.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
- (NSLinguisticTag) tagAtIndex:(NSUInteger) charIndex scheme:(NSLinguisticTagScheme) scheme tokenRange:(NSRangePointer) tokenRange sentenceRange:(NSRangePointer) sentenceRange;
```

## Parameters

- `charIndex`: The position of the initial character.
- `scheme`: The tag scheme. See [NSLinguisticTagScheme](../nslinguistictagscheme.md) for the possible values.
- `tokenRange`: A pointer to the token range.
- `sentenceRange`: A pointer to the range of the sentence.

<a id="return-value"></a>

## Return Value

Returns the tag for the requested tag scheme, or `nil`. If a tag is returned, this function returns by reference the range of the token to `tokenRange`, and the range of the enclosing sentence to `sentenceRange`, if applicable.

<a id="Discussion"></a>

## Discussion

This is a convenience method for calling [tagAtIndex:unit:scheme:tokenRange:](tag%28at_unit_scheme_tokenrange_%29.md) and passing [NSLinguisticTaggerUnitWord](../nslinguistictaggerunit/word.md) as the linguistic unit.

## See Also

### Getting Linguistic Tags

- [tagAtIndex:unit:scheme:tokenRange:](tag%28at_unit_scheme_tokenrange_%29.md): Deprecated. Returns a tag for a single scheme, for a given linguistic unit, at the specified character position.
- [tagForString:atIndex:unit:scheme:orthography:tokenRange:](tag%28for_at_unit_scheme_orthography_tokenrange_%29.md): Deprecated. Returns a tag for a single scheme, for a given linguistic unit, at the specified character position in a string.
- [tagsInRange:unit:scheme:options:tokenRanges:](tags%28in_unit_scheme_options_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string range and linguistic unit.
- [tagsInRange:scheme:options:tokenRanges:](tags%28in_scheme_options_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string range.
- [tagsForString:range:unit:scheme:options:orthography:tokenRanges:](tags%28for_range_unit_scheme_options_orthography_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags and token ranges for a given string and linguistic unit.
