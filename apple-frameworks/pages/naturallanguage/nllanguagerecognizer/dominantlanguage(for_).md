> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nllanguagerecognizer/dominantlanguage(for:)](https://developer.apple.com/documentation/naturallanguage/nllanguagerecognizer/dominantlanguage(for:))

# dominantLanguage(for:) (Swift)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Finds the most likely language of a piece of text.

## Declaration

```swift
class func dominantLanguage(for string: String) -> NLLanguage?
```

## Parameters

- `string`: The text to analyze.

<a id="return-value"></a>

## Return Value

The most probable language of the piece of text.

## See Also

### Determining the language

- [processString(\_:)](processstring%28__%29.md): Analyzes the piece of text to determine its dominant language.
- [dominantLanguage](dominantlanguage.md): The most likely language for the processed text.
- [languageHypotheses(withMaximum:)](languagehypotheses%28withmaximum_%29.md): Generates the probabilities of possible languages for the processed text.
- [reset()](reset%28%29.md): Resets the recognizer to its initial state.

# dominantLanguageForString: (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Finds the most likely language of a piece of text.

## Declaration

```objectivec
+ (NLLanguage) dominantLanguageForString:(NSString *) string;
```

## Parameters

- `string`: The text to analyze.

<a id="return-value"></a>

## Return Value

The most probable language of the piece of text.

## See Also

### Determining the language

- [processString:](processstring%28__%29.md): Analyzes the piece of text to determine its dominant language.
- [dominantLanguage](dominantlanguage.md): The most likely language for the processed text.
- [languageHypothesesWithMaximum:](languagehypotheseswithmaximum_.md): Generates the probabilities of possible languages for the processed text.
- [reset](reset%28%29.md): Resets the recognizer to its initial state.
