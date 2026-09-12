> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationsession/response](https://developer.apple.com/documentation/translation/translationsession/response)

# TranslationSession.Response

**Framework:** Translation  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

The response to a translation request.

## Declaration

```swift
struct Response
```

<a id="overview"></a>

## Overview

You get a single response structure after you translate a string, or when you call one of the batch translation methods passing in an array of translation requests. When the translation completes, a response instance returns with the translation result along with properties the framework used to perform the translation.

## Topics

### Initializing a response

- [init(sourceLanguage:targetLanguage:sourceText:targetText:clientIdentifier:)](response/init%28sourcelanguage_targetlanguage_sourcetext_targettext_clientidentifier_%29.md): Creates an instance of a translation response.
- [init(sourceLanguage:targetLanguage:sourceAttributedText:targetAttributedText:clientIdentifier:)](response/init%28sourcelanguage_targetlanguage_sourceattributedtext_targetattributedtext_clientidentifier_%29.md): Creates an instance of a translation response with formatted text.

### Getting translation results

- [sourceText](response/sourcetext.md): The original text to translate from.
- [targetText](response/targettext.md): The translated text.
- [attributedSourceText](response/attributedsourcetext.md): The original translated text, including style formatting and links.
- [attributedTargetText](response/attributedtargettext.md): The translated formatted text.

### Getting translation details

- [sourceLanguage](response/sourcelanguage.md): The language that the framework translated the text from.
- [targetLanguage](response/targetlanguage.md): The language that the framework translated the text into.
- [clientIdentifier](response/clientidentifier.md): The unique identifier matching the client identifier set in the translation request.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Translating the text

- [translate(\_:)](translate%28__%29-59zi2.md): Translates a formatted string of text, preserving formatting in the translation.
- [translate(\_:)](translate%28__%29-4m20l.md): Translates a single string of text.
- [translate(batch:)](translate%28batch_%29.md): Translates multiple strings of text of the same language, returning a sequence of responses as they’re available.
- [translations(from:)](translations%28from_%29.md): Translates multiple strings of text of the same language, returning the results all at once when complete.
- [TranslationSession.Request](request.md): A translation request containing a single item of text to translate.
- [TranslationSession.BatchResponse](batchresponse.md): A type that provides asynchronous access to translation responses.
