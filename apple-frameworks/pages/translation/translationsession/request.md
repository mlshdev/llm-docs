> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationsession/request](https://developer.apple.com/documentation/translation/translationsession/request)

# TranslationSession.Request

**Framework:** Translation  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

A translation request containing a single item of text to translate.

## Declaration

```swift
struct Request
```

<a id="overview"></a>

## Overview

Create a translation request to translate a string of text. Initialize the request using [init(sourceText:clientIdentifier:)](request/init%28sourcetext_clientidentifier_%29-ruyz.md). Set the [sourceText](request/sourcetext.md) to the string of text you want to translate. Then pass that request in an array to one of the batch translation functions.

Keep track of the correspondence between the responses and requests by setting the [clientIdentifier](request/clientidentifier.md) on the sent request, then matching it with the [clientIdentifier](response/clientidentifier.md) of the received response when the translation completes.

## Topics

### Initializing a translation request

- [init(sourceText:clientIdentifier:)](request/init%28sourcetext_clientidentifier_%29-8fung.md): Creates a request for translating a single attributed string.
- [init(sourceText:clientIdentifier:)](request/init%28sourcetext_clientidentifier_%29-ruyz.md): Creates a request for translating a single string of text.

### Specifying text to translate

- [sourceText](request/sourcetext.md): The plain text input to translate.
- [attributedSourceText](request/attributedsourcetext.md): The text to translate, including styling like bold text, italics, and hyperlink data for linking between data sources.

### Identifying requests

- [clientIdentifier](request/clientidentifier.md): An optional unique identifier to associate a translation request with its response.

## See Also

### Translating the text

- [translate(\_:)](translate%28__%29-59zi2.md): Translates a formatted string of text, preserving formatting in the translation.
- [translate(\_:)](translate%28__%29-4m20l.md): Translates a single string of text.
- [translate(batch:)](translate%28batch_%29.md): Translates multiple strings of text of the same language, returning a sequence of responses as they’re available.
- [translations(from:)](translations%28from_%29.md): Translates multiple strings of text of the same language, returning the results all at once when complete.
- [TranslationSession.Response](response.md): The response to a translation request.
- [TranslationSession.BatchResponse](batchresponse.md): A type that provides asynchronous access to translation responses.
