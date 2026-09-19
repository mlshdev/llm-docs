> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/translation/translationerror/internalerror

# internalError

**Framework:** Translation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

An error occurred internal to the translation engine.

## Declaration

```swift
static let internalError: TranslationError
```

## See Also

### Handling general errors

- [nothingToTranslate](nothingtotranslate.md): No content to translate.
- [unableToIdentifyLanguage](unabletoidentifylanguage.md): The framework can’t identify the source language automatically.
- [alreadyCancelled](alreadycancelled.md): An error describing a translation session that you’ve cancelled before, which prevents the session from producing additional results.
- [notInstalled](notinstalled.md): The device doesn’t have the necessary languages downloaded to perform a translation and the session can’t request the person to download them.
