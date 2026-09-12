> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nllanguagerecognizer/languagehypotheseswithmaximum:](https://developer.apple.com/documentation/naturallanguage/nllanguagerecognizer/languagehypotheseswithmaximum:)

# languageHypothesesWithMaximum:

**Interface language:** Objective-C

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Generates the probabilities of possible languages for the processed text.

## Declaration

```objectivec
- (NSDictionary<NSString *,NSNumber *> *) languageHypothesesWithMaximum:(NSUInteger) maxHypotheses;
```

## Parameters

- `maxHypotheses`: The maximum number of languages to return.

<a id="return-value"></a>

## Return Value

A dictionary mapping languages with their probabilities, up to `maxHypotheses` languages.

## Mentioned In

- [Identifying the language in text](../identifying-the-language-in-text.md)

## See Also

### Determining the language

- [dominantLanguageForString:](dominantlanguage%28for_%29.md): Finds the most likely language of a piece of text.
- [processString:](processstring%28__%29.md): Analyzes the piece of text to determine its dominant language.
- [dominantLanguage](dominantlanguage.md): The most likely language for the processed text.
- [reset](reset%28%29.md): Resets the recognizer to its initial state.
