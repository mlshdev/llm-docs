> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nllanguagerecognizer/reset()](https://developer.apple.com/documentation/naturallanguage/nllanguagerecognizer/reset())

# reset() (Swift)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Resets the recognizer to its initial state.

## Declaration

```swift
func reset()
```

## See Also

### Determining the language

- [dominantLanguage(for:)](dominantlanguage%28for_%29.md): Finds the most likely language of a piece of text.
- [processString(\_:)](processstring%28__%29.md): Analyzes the piece of text to determine its dominant language.
- [dominantLanguage](dominantlanguage.md): The most likely language for the processed text.
- [languageHypotheses(withMaximum:)](languagehypotheses%28withmaximum_%29.md): Generates the probabilities of possible languages for the processed text.

# reset (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Resets the recognizer to its initial state.

## Declaration

```objectivec
- (void) reset;
```

## See Also

### Determining the language

- [dominantLanguageForString:](dominantlanguage%28for_%29.md): Finds the most likely language of a piece of text.
- [processString:](processstring%28__%29.md): Analyzes the piece of text to determine its dominant language.
- [dominantLanguage](dominantlanguage.md): The most likely language for the processed text.
- [languageHypothesesWithMaximum:](languagehypotheseswithmaximum_.md): Generates the probabilities of possible languages for the processed text.
