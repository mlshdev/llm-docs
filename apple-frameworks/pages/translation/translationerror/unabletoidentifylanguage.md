> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationerror/unabletoidentifylanguage](https://developer.apple.com/documentation/translation/translationerror/unabletoidentifylanguage)

# unableToIdentifyLanguage

**Framework:** Translation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

The framework can’t identify the source language automatically.

## Declaration

```swift
static let unableToIdentifyLanguage: TranslationError
```

<a id="discussion"></a>

## Discussion

The framework throws this error when you call [prepareTranslation()](../translationsession/preparetranslation%28%29.md) without specifying the source language, or when using [status(for:to:)](../languageavailability/status%28for_to_%29.md) and it can’t automatically identify the source language of the sample text you pass in.

> **Note**

> For best results in automatic language detection, pass in a sample string of at least 20 characters in length.

## See Also

### Handling general errors

- [nothingToTranslate](nothingtotranslate.md): No content to translate.
- [internalError](internalerror.md): An error occurred internal to the translation engine.
- [alreadyCancelled](alreadycancelled.md): An error describing a translation session that you’ve cancelled before, which prevents the session from producing additional results.
- [notInstalled](notinstalled.md): The device doesn’t have the necessary languages downloaded to perform a translation and the session can’t request the person to download them.
