> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nslinguistictagger/orthography(at:effectiverange:)

# orthography(at:effectiveRange:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.2) · iPadOS 5.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.7+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

Returns the orthography at the index and also returns the effective range.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```swift
func orthography(at charIndex: Int, effectiveRange: NSRangePointer?) -> NSOrthography?
```

## Parameters

- `charIndex`: The character index to begin examination.
- `effectiveRange`: An NSRangePointer that, upon completion, contains the range of the orthography containing `charIndex`.

<a id="return-value"></a>

## Return Value

The orthography for the location.

## See Also

### Determining the Dominant Language and Orthography

- [dominantLanguage(for:)](dominantlanguage%28for_%29.md): Deprecated. Returns the dominant language for the specified string.
- [dominantLanguage](dominantlanguage.md): Deprecated. Returns the dominant language of the string set for the linguistic tagger.
- [setOrthography(\_:range:)](setorthography%28__range_%29.md): Deprecated. Sets the orthography for the specified range.

# orthographyAtIndex:effectiveRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.2) · iPadOS 5.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.7+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

Returns the orthography at the index and also returns the effective range.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
- (NSOrthography *) orthographyAtIndex:(NSUInteger) charIndex effectiveRange:(NSRangePointer) effectiveRange;
```

## Parameters

- `charIndex`: The character index to begin examination.
- `effectiveRange`: An NSRangePointer that, upon completion, contains the range of the orthography containing `charIndex`.

<a id="return-value"></a>

## Return Value

The orthography for the location.

## See Also

### Determining the Dominant Language and Orthography

- [dominantLanguageForString:](dominantlanguage%28for_%29.md): Deprecated. Returns the dominant language for the specified string.
- [dominantLanguage](dominantlanguage.md): Deprecated. Returns the dominant language of the string set for the linguistic tagger.
- [setOrthography:range:](setorthography%28__range_%29.md): Deprecated. Sets the orthography for the specified range.
