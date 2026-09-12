> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/languageavailability/status(for:to:)](https://developer.apple.com/documentation/translation/languageavailability/status(for:to:))

# status(for:to:)

**Framework:** Translation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

Checks to see if the framework supports the language pairing based off a string of sample text.

## Declaration

```swift
func status(for text: String, to target: Locale.Language?) async throws -> LanguageAvailability.Status
```

## Parameters

- `text`: A sample string of text representing the source language you want to translation from.
- `target`: The target language you want to translate content into. When set to `nil`, the system picks an appropriate target based on the person’s preferred languages and returns the status for those languages.

<a id="return-value"></a>

## Return Value

The availability status for the language pairing to use in the translation.

<a id="discussion"></a>

## Discussion

Use this function when you don’t know the source language and want the framework to attempt a translation based on the sample text you pass in.

Pass in a string of sample `text` representing the language you want to translate from. When you do, the system automatically tries to detect the language of the text you pass in. If it can’t, it throws a [TranslationError](../translationerror.md).

If it can detect the source language of the text, it checks for necessary language asset downloads and whether they’re ready for use.

> **Note**

> For best results in automatic language detection, pass in a sample string of at least 20 characters in length.

## See Also

### Checking language availability

- [status(from:to:)](status%28from_to_%29.md): Checks for the installation of a specific language pairing and whether it’s ready for translation.
- [LanguageAvailability.Status](status.md): The availability status for a language or language pairing.
