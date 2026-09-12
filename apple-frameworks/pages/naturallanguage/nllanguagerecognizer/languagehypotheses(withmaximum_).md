> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nllanguagerecognizer/languagehypotheses(withmaximum:)](https://developer.apple.com/documentation/naturallanguage/nllanguagerecognizer/languagehypotheses(withmaximum:))

# languageHypotheses(withMaximum:)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Generates the probabilities of possible languages for the processed text.

## Declaration

```swift
@nonobjc func languageHypotheses(withMaximum maxHypotheses: Int) -> [NLLanguage : Double]
```

## Parameters

- `maxHypotheses`: The maximum number of languages to return.

<a id="return-value"></a>

## Return Value

A dictionary mapping languages with their probabilities, up to `maxHypotheses` languages.

## See Also

### Determining the language

- [dominantLanguage(for:)](dominantlanguage%28for_%29.md): Finds the most likely language of a piece of text.
- [processString(\_:)](processstring%28__%29.md): Analyzes the piece of text to determine its dominant language.
- [dominantLanguage](dominantlanguage.md): The most likely language for the processed text.
- [reset()](reset%28%29.md): Resets the recognizer to its initial state.
