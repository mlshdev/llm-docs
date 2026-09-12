> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationsession/translate(_:)-4m20l](https://developer.apple.com/documentation/translation/translationsession/translate(_:)-4m20l)

# translate(\_:)

**Framework:** Translation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

Translates a single string of text.

## Declaration

```swift
func translate(_ string: String) async throws -> TranslationSession.Response
```

## Parameters

- `string`: The string of plain text to translate.

<a id="return-value"></a>

## Return Value

The response containing the text translation.

<a id="discussion"></a>

## Discussion

This function translates a single line of text and might display different UI depending on the state of the translation. The app doesn’t need to install the required languages before calling this method.

If the required languages for translation have already downloaded and the source language is clear, this function returns results without showing any UI to the person.

If the source or target language aren’t installed, the framework asks the person for permission to download the languages. During the download a progress indicator displays. After it completes, the framework performs the translation.

If the `sourceLanguage` is `nil` and the framework can’t detect the source language from the content, the framework prompts the person to choose the source language.

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

- [translate(\_:)](translate%28__%29-59zi2.md): Translates a formatted string of text, preserving formatting in the translation.
- [translate(batch:)](translate%28batch_%29.md): Translates multiple strings of text of the same language, returning a sequence of responses as they’re available.
- [translations(from:)](translations%28from_%29.md): Translates multiple strings of text of the same language, returning the results all at once when complete.
- [TranslationSession.Request](request.md): A translation request containing a single item of text to translate.
- [TranslationSession.Response](response.md): The response to a translation request.
- [TranslationSession.BatchResponse](batchresponse.md): A type that provides asynchronous access to translation responses.
