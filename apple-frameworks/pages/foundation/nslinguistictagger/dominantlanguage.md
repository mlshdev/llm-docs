> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagger/dominantlanguage](https://developer.apple.com/documentation/foundation/nslinguistictagger/dominantlanguage)

# dominantLanguage (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Returns the dominant language of the string set for the linguistic tagger.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```swift
var dominantLanguage: String? { get }
```

<a id="return-value"></a>

## Return Value

The BCP-47 tag identifying the dominant language of the string, or the tag “und” if a specific language cannot be determined.

<a id="Discussion"></a>

## Discussion

If you want to know the dominant language of a string that you’re analyzing with a linguistic tagger (for example, identifying part of speech for each word), specify the [language](../nslinguistictagscheme/language.md) tag scheme in the initializer. After you set the [string](string.md) property of the linguistic tagger, the dominant language can be determined with the [dominantLanguage](dominantlanguage.md) property, as shown in this example:

```swift
let text = "Die Kleinen haben friedlich zusammen gespielt."
let tagger = NSLinguisticTagger(tagSchemes: [.language], options: 0)
tagger.string = text
tagger.dominantLanguage // "de"
```

In the example, the BCP-47 language tag “de” is returned as the dominant language, indicating that the text is in German.

## See Also

### Determining the Dominant Language and Orthography

- [dominantLanguage(for:)](dominantlanguage%28for_%29.md): Deprecated. Returns the dominant language for the specified string.
- [orthography(at:effectiveRange:)](orthography%28at_effectiverange_%29.md): Deprecated. Returns the orthography at the index and also returns the effective range.
- [setOrthography(\_:range:)](setorthography%28__range_%29.md): Deprecated. Sets the orthography for the specified range.

# dominantLanguage (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Returns the dominant language of the string set for the linguistic tagger.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * dominantLanguage;
```

<a id="return-value"></a>

## Return Value

The BCP-47 tag identifying the dominant language of the string, or the tag “und” if a specific language cannot be determined.

<a id="Discussion"></a>

## Discussion

If you want to know the dominant language of a string that you’re analyzing with a linguistic tagger (for example, identifying part of speech for each word), specify the [NSLinguisticTagSchemeLanguage](../nslinguistictagscheme/language.md) tag scheme in the initializer. After you set the [string](string.md) property of the linguistic tagger, the dominant language can be determined with the [dominantLanguage](dominantlanguage.md) property, as shown in this example:

```swift
let text = "Die Kleinen haben friedlich zusammen gespielt."
let tagger = NSLinguisticTagger(tagSchemes: [.language], options: 0)
tagger.string = text
tagger.dominantLanguage // "de"
```

In the example, the BCP-47 language tag “de” is returned as the dominant language, indicating that the text is in German.

## See Also

### Determining the Dominant Language and Orthography

- [dominantLanguageForString:](dominantlanguage%28for_%29.md): Deprecated. Returns the dominant language for the specified string.
- [orthographyAtIndex:effectiveRange:](orthography%28at_effectiverange_%29.md): Deprecated. Returns the orthography at the index and also returns the effective range.
- [setOrthography:range:](setorthography%28__range_%29.md): Deprecated. Sets the orthography for the specified range.
