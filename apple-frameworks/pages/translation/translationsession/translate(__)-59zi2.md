> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationsession/translate(_:)-59zi2](https://developer.apple.com/documentation/translation/translationsession/translate(_:)-59zi2)

# translate(\_:)

**Framework:** Translation  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+

Translates a formatted string of text, preserving formatting in the translation.

## Declaration

```swift
func translate(_ string: AttributedString) async throws -> TranslationSession.Response
```

## Parameters

- `string`: The formatted text to translate.

<a id="return-value"></a>

## Return Value

The response that contains the text translation with formatting preserved.

<a id="discussion"></a>

## Discussion

Use this method to translate text that includes formatting like bold text or links, and preserve that formatting in the translated result. The framework aligns formatting between the source and target languages so that formatted words in the source remain formatted in the translation. Custom attributes, such as timestamps for synchronized captions or lyrics, are also preserved. For examples of translating attributed strings, see [attributedSourceText](request/attributedsourcetext.md).

This function translates a single line of text and might display different UI depending on the state of the translation. The app doesn’t need to install the required languages before calling this method. The function handles translation based on language availability:

- If the required languages are already downloaded and the source language is clear, the function returns results without showing any UI to the person.
- If the source or target language aren’t installed, the framework asks the person for permission to download the languages. During the download a progress indicator displays. After it completes, the framework performs the translation.
- If the [sourceLanguage](sourcelanguage.md) is `nil` and the framework can’t detect it from the content, the framework prompts the person to choose the source language.

This function throws an `Error` if:

- The person doesn’t agree to downloading the languages
- The person dismisses the progress view during language downloads
- [TranslationSession](../translationsession.md) fails system validation
- The session doesn’t allow requesting downloads and languages aren’t installed
- You already cancelled the session
- Something goes wrong during translation

If a person dismisses the progress view while the languages download, the system throws a [userCancelled](../../foundation/cocoaerror/code/usercancelled.md) error, and the languages continue to download in the background.

> **Note**

> This function call can take several minutes while languages download.

## See Also

### Translating the text

- [translate(\_:)](translate%28__%29-4m20l.md): Translates a single string of text.
- [translate(batch:)](translate%28batch_%29.md): Translates multiple strings of text of the same language, returning a sequence of responses as they’re available.
- [translations(from:)](translations%28from_%29.md): Translates multiple strings of text of the same language, returning the results all at once when complete.
- [TranslationSession.Request](request.md): A translation request containing a single item of text to translate.
- [TranslationSession.Response](response.md): The response to a translation request.
- [TranslationSession.BatchResponse](batchresponse.md): A type that provides asynchronous access to translation responses.
