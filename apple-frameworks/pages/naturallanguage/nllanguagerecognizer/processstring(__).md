> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nllanguagerecognizer/processstring(_:)](https://developer.apple.com/documentation/naturallanguage/nllanguagerecognizer/processstring(_:))

# processString(\_:) (Swift)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Analyzes the piece of text to determine its dominant language.

## Declaration

```swift
func processString(_ string: String)
```

## Mentioned In

- [Identifying the language in text](../identifying-the-language-in-text.md)

<a id="Discussion"></a>

## Discussion

Use this method to process the provided text and to update the [dominantLanguage](dominantlanguage.md) result and `languageHypotheses(withMaximum:)` probabilities.

## See Also

### Determining the language

- [dominantLanguage(for:)](dominantlanguage%28for_%29.md): Finds the most likely language of a piece of text.
- [dominantLanguage](dominantlanguage.md): The most likely language for the processed text.
- [languageHypotheses(withMaximum:)](languagehypotheses%28withmaximum_%29.md): Generates the probabilities of possible languages for the processed text.
- [reset()](reset%28%29.md): Resets the recognizer to its initial state.

# processString: (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Analyzes the piece of text to determine its dominant language.

## Declaration

```objectivec
- (void) processString:(NSString *) string;
```

## Mentioned In

- [Identifying the language in text](../identifying-the-language-in-text.md)

<a id="Discussion"></a>

## Discussion

Use this method to process the provided text and to update the [dominantLanguage](dominantlanguage.md) result and `languageHypotheses(withMaximum:)` probabilities.

## See Also

### Determining the language

- [dominantLanguageForString:](dominantlanguage%28for_%29.md): Finds the most likely language of a piece of text.
- [dominantLanguage](dominantlanguage.md): The most likely language for the processed text.
- [languageHypothesesWithMaximum:](languagehypotheseswithmaximum_.md): Generates the probabilities of possible languages for the processed text.
- [reset](reset%28%29.md): Resets the recognizer to its initial state.
