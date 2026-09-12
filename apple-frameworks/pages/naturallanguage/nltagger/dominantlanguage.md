> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/dominantlanguage](https://developer.apple.com/documentation/naturallanguage/nltagger/dominantlanguage)

# dominantLanguage (Swift)

**Framework:** Natural Language  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The dominant language of the string set for the linguistic tagger.

## Declaration

```swift
var dominantLanguage: NLLanguage? { get }
```

<a id="Discussion"></a>

## Discussion

If you want to know the dominant language of a string that you’re analyzing with a linguistic tagger (for example, identifying part of speech for each word), specify the [language](../nltagscheme/language.md) tag scheme in the initializer. After you set the [string](string.md) property of the linguistic tagger, the dominant language can be determined with the [dominantLanguage](dominantlanguage.md) property, as shown in this example:

```swift
let text = "Die Kleinen haben friedlich zusammen gespielt."
let tagger = NLTagger(tagSchemes: [.language], options: 0)
tagger.string = text
tagger.dominantLanguage // NLLanguage.german
```

In the example, [german](../nllanguage/german.md) is the dominant language, indicating that the text is in German.

## See Also

### Determining the dominant language and orthography

- [setLanguage(\_:range:)](setlanguage%28__range_%29.md): Sets the language for a range of text within the tagger’s string.
- [setOrthography(\_:range:)](setorthography%28__range_%29.md): Sets the orthography for the specified range.

# dominantLanguage (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The dominant language of the string set for the linguistic tagger.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NLLanguage dominantLanguage;
```

<a id="Discussion"></a>

## Discussion

If you want to know the dominant language of a string that you’re analyzing with a linguistic tagger (for example, identifying part of speech for each word), specify the [NLTagSchemeLanguage](../nltagscheme/language.md) tag scheme in the initializer. After you set the [string](string.md) property of the linguistic tagger, the dominant language can be determined with the [dominantLanguage](dominantlanguage.md) property, as shown in this example:

```swift
let text = "Die Kleinen haben friedlich zusammen gespielt."
let tagger = NLTagger(tagSchemes: [.language], options: 0)
tagger.string = text
tagger.dominantLanguage // NLLanguage.german
```

In the example, [NLLanguageGerman](../nllanguage/german.md) is the dominant language, indicating that the text is in German.

## See Also

### Determining the dominant language and orthography

- [setLanguage:range:](setlanguage_range_.md): Sets the language for a range of text within the tagger’s string.
- [setOrthography:range:](setorthography_range_.md): Sets the orthography for the specified range.
