> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationerror/alreadycancelled](https://developer.apple.com/documentation/translation/translationerror/alreadycancelled)

# alreadyCancelled

**Framework:** Translation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

An error describing a translation session that you’ve cancelled before, which prevents the session from producing additional results.

## Declaration

```swift
static let alreadyCancelled: TranslationError
```

<a id="discussion"></a>

## Discussion

A [TranslationSession](../translationsession.md) instance throws this error when you call one of its translate methods after calling its [cancel()](../translationsession/cancel%28%29.md) method.

## See Also

### Handling general errors

- [nothingToTranslate](nothingtotranslate.md): No content to translate.
- [unableToIdentifyLanguage](unabletoidentifylanguage.md): The framework can’t identify the source language automatically.
- [internalError](internalerror.md): An error occurred internal to the translation engine.
- [notInstalled](notinstalled.md): The device doesn’t have the necessary languages downloaded to perform a translation and the session can’t request the person to download them.
