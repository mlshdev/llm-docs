> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationerror/notinstalled](https://developer.apple.com/documentation/translation/translationerror/notinstalled)

# notInstalled

**Framework:** Translation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

The device doesn’t have the necessary languages downloaded to perform a translation and the session can’t request the person to download them.

## Declaration

```swift
static let notInstalled: TranslationError
```

<a id="discussion"></a>

## Discussion

This error is thrown if [canRequestDownloads](../translationsession/canrequestdownloads.md) is false and either the languages are supported but the person hasn’t approved them or if the person has approved them but the languages haven’t finished downloading.

## See Also

### Handling general errors

- [nothingToTranslate](nothingtotranslate.md): No content to translate.
- [unableToIdentifyLanguage](unabletoidentifylanguage.md): The framework can’t identify the source language automatically.
- [internalError](internalerror.md): An error occurred internal to the translation engine.
- [alreadyCancelled](alreadycancelled.md): An error describing a translation session that you’ve cancelled before, which prevents the session from producing additional results.
