> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagger/setorthography(_:range:)](https://developer.apple.com/documentation/foundation/nslinguistictagger/setorthography(_:range:))

# setOrthography(\_:range:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Sets the orthography for the specified range.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```swift
func setOrthography(_ orthography: NSOrthography?, range: NSRange)
```

## Parameters

- `orthography`: The orthography.
- `range`: The range.

<a id="Discussion"></a>

## Discussion

If the orthography of the linguistic tagger is not set, it will determine it automatically from the contents of the text.  You should call this method only if you  know the orthography of the text by some other means.

## See Also

### Determining the Dominant Language and Orthography

- [dominantLanguage(for:)](dominantlanguage%28for_%29.md): Deprecated. Returns the dominant language for the specified string.
- [dominantLanguage](dominantlanguage.md): Deprecated. Returns the dominant language of the string set for the linguistic tagger.
- [orthography(at:effectiveRange:)](orthography%28at_effectiverange_%29.md): Deprecated. Returns the orthography at the index and also returns the effective range.

# setOrthography:range: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Sets the orthography for the specified range.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
- (void) setOrthography:(NSOrthography *) orthography range:(NSRange) range;
```

## Parameters

- `orthography`: The orthography.
- `range`: The range.

<a id="Discussion"></a>

## Discussion

If the orthography of the linguistic tagger is not set, it will determine it automatically from the contents of the text.  You should call this method only if you  know the orthography of the text by some other means.

## See Also

### Determining the Dominant Language and Orthography

- [dominantLanguageForString:](dominantlanguage%28for_%29.md): Deprecated. Returns the dominant language for the specified string.
- [dominantLanguage](dominantlanguage.md): Deprecated. Returns the dominant language of the string set for the linguistic tagger.
- [orthographyAtIndex:effectiveRange:](orthography%28at_effectiverange_%29.md): Deprecated. Returns the orthography at the index and also returns the effective range.
