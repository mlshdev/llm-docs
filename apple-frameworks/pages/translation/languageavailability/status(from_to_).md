> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/languageavailability/status(from:to:)](https://developer.apple.com/documentation/translation/languageavailability/status(from:to:))

# status(from:to:)

**Framework:** Translation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

Checks for the installation of a specific language pairing and whether it’s ready for translation.

## Declaration

```swift
func status(from source: Locale.Language, to target: Locale.Language?) async -> LanguageAvailability.Status
```

## Parameters

- `source`: The source language of the content.
- `target`: The target language you want to translate content into. When set to `nil`, the system picks an appropriate target based on the person’s preferred languages and returns the status for those languages.

<a id="return-value"></a>

## Return Value

The availability status for a language pairing.

<a id="discussion"></a>

## Discussion

Use this function to check whether the system has installed the required language assets and the languages are ready to use for translation.

> **Note**

> The framework doesn’t support translating from and to the same language. For example, you can’t translate from English (US) to English (UK).

## See Also

### Checking language availability

- [status(for:to:)](status%28for_to_%29.md): Checks to see if the framework supports the language pairing based off a string of sample text.
- [LanguageAvailability.Status](status.md): The availability status for a language or language pairing.
