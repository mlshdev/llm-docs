> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagger/dominantlanguage(for:)](https://developer.apple.com/documentation/foundation/nslinguistictagger/dominantlanguage(for:))

# dominantLanguage(for:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Returns the dominant language for the specified string.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```swift
class func dominantLanguage(for string: String) -> String?
```

## Parameters

- `string`: The string for which the dominant language is determined.

<a id="return-value"></a>

## Return Value

The BCP-47 tag identifying the dominant language of the string, or the tag “und” if a specific language cannot be determined.

<a id="Discussion"></a>

## Discussion

The [dominantLanguage(for:)](dominantlanguage%28for_%29.md) method is a convenience method for creating a new linguistic tagger, setting the [string](string.md) property, and getting the [dominantLanguage](dominantlanguage.md) property. If you analyze the same string more than once, create a linguistic tagger object instead of calling the method, as shown in this example:

```swift
let text = "Die Kleinen haben friedlich zusammen gespielt."
NSLinguisticTagger.dominantLanguage(for: text) // "de"
```

In the example, the BCP-47 language tag “de” is returned as the dominant language, indicating that the text is in German.

## See Also

### Determining the Dominant Language and Orthography

- [dominantLanguage](dominantlanguage.md): Deprecated. Returns the dominant language of the string set for the linguistic tagger.
- [orthography(at:effectiveRange:)](orthography%28at_effectiverange_%29.md): Deprecated. Returns the orthography at the index and also returns the effective range.
- [setOrthography(\_:range:)](setorthography%28__range_%29.md): Deprecated. Sets the orthography for the specified range.

# dominantLanguageForString: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Returns the dominant language for the specified string.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
+ (NSString *) dominantLanguageForString:(NSString *) string;
```

## Parameters

- `string`: The string for which the dominant language is determined.

<a id="return-value"></a>

## Return Value

The BCP-47 tag identifying the dominant language of the string, or the tag “und” if a specific language cannot be determined.

<a id="Discussion"></a>

## Discussion

The [dominantLanguageForString:](dominantlanguage%28for_%29.md) method is a convenience method for creating a new linguistic tagger, setting the [string](string.md) property, and getting the [dominantLanguage](dominantlanguage.md) property. If you analyze the same string more than once, create a linguistic tagger object instead of calling the method, as shown in this example:

```swift
let text = "Die Kleinen haben friedlich zusammen gespielt."
NSLinguisticTagger.dominantLanguage(for: text) // "de"
```

In the example, the BCP-47 language tag “de” is returned as the dominant language, indicating that the text is in German.

## See Also

### Determining the Dominant Language and Orthography

- [dominantLanguage](dominantlanguage.md): Deprecated. Returns the dominant language of the string set for the linguistic tagger.
- [orthographyAtIndex:effectiveRange:](orthography%28at_effectiverange_%29.md): Deprecated. Returns the orthography at the index and also returns the effective range.
- [setOrthography:range:](setorthography%28__range_%29.md): Deprecated. Sets the orthography for the specified range.
