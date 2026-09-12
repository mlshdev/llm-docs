> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationerror](https://developer.apple.com/documentation/translation/translationerror)

# TranslationError

**Framework:** Translation  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

Error codes describing why the framework can’t perform a translation.

## Declaration

```swift
struct TranslationError
```

## Topics

### Handling general errors

- [nothingToTranslate](translationerror/nothingtotranslate.md): No content to translate.
- [unableToIdentifyLanguage](translationerror/unabletoidentifylanguage.md): The framework can’t identify the source language automatically.
- [internalError](translationerror/internalerror.md): An error occurred internal to the translation engine.
- [alreadyCancelled](translationerror/alreadycancelled.md): An error describing a translation session that you’ve cancelled before, which prevents the session from producing additional results.
- [notInstalled](translationerror/notinstalled.md): The device doesn’t have the necessary languages downloaded to perform a translation and the session can’t request the person to download them.

### Handling unsupported errors

- [unsupportedSourceLanguage](translationerror/unsupportedsourcelanguage.md): The framework doesn’t support the specified or detected source language.
- [unsupportedTargetLanguage](translationerror/unsupportedtargetlanguage.md): The framework doesn’t support the specified or chosen target language.
- [unsupportedLanguagePairing](translationerror/unsupportedlanguagepairing.md): The framework doesn’t support the specified source and target language pairing.

### Describing errors

- [errorDescription](translationerror/errordescription.md): A localized message describing the error.
- [failureReason](translationerror/failurereason.md): A localized message describing the reason for the failure.

### Comparing errors

- [~=(\_:\_:)](translationerror/~=%28____%29.md): This operator allows you to check for a given value of a translation error and handle each error case.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
