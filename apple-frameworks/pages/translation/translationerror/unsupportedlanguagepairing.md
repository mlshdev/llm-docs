> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/translation/translationerror/unsupportedlanguagepairing

# unsupportedLanguagePairing

**Framework:** Translation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

The framework doesn’t support the specified source and target language pairing.

## Declaration

```swift
static let unsupportedLanguagePairing: TranslationError
```

<a id="discussion"></a>

## Discussion

The framework doesn’t support translating from and to the same language. For example, you can’t translate from English (US) to English (UK) or from French to French.

## See Also

### Handling unsupported errors

- [unsupportedSourceLanguage](unsupportedsourcelanguage.md): The framework doesn’t support the specified or detected source language.
- [unsupportedTargetLanguage](unsupportedtargetlanguage.md): The framework doesn’t support the specified or chosen target language.
