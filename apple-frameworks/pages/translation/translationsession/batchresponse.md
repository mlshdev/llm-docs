> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationsession/batchresponse](https://developer.apple.com/documentation/translation/translationsession/batchresponse)

# TranslationSession.BatchResponse

**Framework:** Translation  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

A type that provides asynchronous access to translation responses.

## Declaration

```swift
struct BatchResponse
```

<a id="overview"></a>

## Overview

This type returns instances of [TranslationSession.Response](response.md) asynchronously and throws an `Error` if something goes wrong.

## Topics

### Iterating over translation results

- [makeAsyncIterator()](batchresponse/makeasynciterator%28%29.md): Creates the asynchronous iterator that produces elements of this asynchronous sequence.

### Iteration types

- [TranslationSession.BatchResponse.AsyncIterator](batchresponse/asynciterator.md): The type of asynchronous iterator that produces elements of this asynchronous sequence.
- [TranslationSession.BatchResponse.Element](batchresponse/element.md): The type of element produced by this asynchronous sequence.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Translating the text

- [translate(\_:)](translate%28__%29-59zi2.md): Translates a formatted string of text, preserving formatting in the translation.
- [translate(\_:)](translate%28__%29-4m20l.md): Translates a single string of text.
- [translate(batch:)](translate%28batch_%29.md): Translates multiple strings of text of the same language, returning a sequence of responses as they’re available.
- [translations(from:)](translations%28from_%29.md): Translates multiple strings of text of the same language, returning the results all at once when complete.
- [TranslationSession.Request](request.md): A translation request containing a single item of text to translate.
- [TranslationSession.Response](response.md): The response to a translation request.
