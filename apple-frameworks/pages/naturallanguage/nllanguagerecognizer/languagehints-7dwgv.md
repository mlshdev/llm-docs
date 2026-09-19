> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/naturallanguage/nllanguagerecognizer/languagehints-7dwgv

# languageHints

**Framework:** Natural Language  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A dictionary that maps languages to their probabilities in the language identification process.

## Declaration

```swift
@nonobjc var languageHints: [NLLanguage : Double] { get set }
```

<a id="Discussion"></a>

## Discussion

This is a dictionary mapping languages to their probabilities and used by [processString(\_:)](processstring%28__%29.md).

## See Also

### Guiding the recognizer

- [languageConstraints](languageconstraints.md): Limits the set of possible languages that the recognizer will return.
