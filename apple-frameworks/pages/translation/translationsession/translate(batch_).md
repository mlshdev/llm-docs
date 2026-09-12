> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationsession/translate(batch:)](https://developer.apple.com/documentation/translation/translationsession/translate(batch:))

# translate(batch:)

**Framework:** Translation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

Translates multiple strings of text of the same language, returning a sequence of responses as they’re available.

## Declaration

```swift
func translate(batch: [TranslationSession.Request]) -> TranslationSession.BatchResponse
```

## Parameters

- `batch`: The array of requests to translate.

<a id="return-value"></a>

## Return Value

An `AsyncSequence` of responses containing the text translations.

<a id="discussion"></a>

## Discussion

This function translates multiple strings of text incrementally and might display different UI depending on the state of the translation. The app doesn’t need to install the required languages before calling this method.

Pass in the strings of text you want to translate as an array of the [TranslationSession.Request](request.md) type. To create requests for attributed strings, use `Request/init(sourceText:clientIdentifier:)-(AttributedString)`. Set the [clientIdentifier](request/clientidentifier.md) on each request so you can match the request with the response as the translations incrementally return.

If the required languages for translation have already downloaded and the source language is clear, this function returns results without showing any UI to the person.

If the source or target language aren’t installed, the framework asks the person for permission to download the languages. During the download a progress indicator displays. After it completes, the framework performs the translation.

If the `sourceLanguage` is `nil` and the framework can’t detect the source language from the content, the framework prompts the person to choose the source language.

The framework only supports string translations of the same language. The strings must either match the `sourceLanguage` you set in the configuration, or if the `sourceLanguage` is `nil`, be of the same language.

This function throws an `Error` if:

- The person doesn’t agree to downloading the languages
- The person dismisses the progress view during language downloads
- [TranslationSession](../translationsession.md)  fails system validation
- The session doesn’t allow requesting downloads and languages aren’t installed
- You already cancelled the session
- Something goes wrong during translation

If a person dismisses the progress view while the languages download, the system throws a [userCancelled](../../foundation/cocoaerror/code/usercancelled.md) error, and the languages continue to download in the background.

> **Note**

> Calls to this function can take several minutes while languages download. The framework shows a progress indicator during the download.

## See Also

### Translating the text

- [translate(\_:)](translate%28__%29-59zi2.md): Translates a formatted string of text, preserving formatting in the translation.
- [translate(\_:)](translate%28__%29-4m20l.md): Translates a single string of text.
- [translations(from:)](translations%28from_%29.md): Translates multiple strings of text of the same language, returning the results all at once when complete.
- [TranslationSession.Request](request.md): A translation request containing a single item of text to translate.
- [TranslationSession.Response](response.md): The response to a translation request.
- [TranslationSession.BatchResponse](batchresponse.md): A type that provides asynchronous access to translation responses.
