> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokerecognizer/search(_:fullwordsonly:casematchingonly:)](https://developer.apple.com/documentation/pencilkit/pkstrokerecognizer/search(_:fullwordsonly:casematchingonly:))

# search(\_:fullWordsOnly:caseMatchingOnly:)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Searches the drawing for strokes whose recognized text matches the query.

## Declaration

```swift
final func search(_ query: String, fullWordsOnly: Bool = false, caseMatchingOnly: Bool = false) async -> [PKStrokeRecognizer.SearchResult]
```

## Parameters

- `query`: The query string to search for.
- `fullWordsOnly`: Restricts matches to whole words only.
- `caseMatchingOnly`: Restricts matches to exact case.

<a id="return-value"></a>

## Return Value

An array of all results found.

## Mentioned In

- [Recognizing handwriting and converting it to text](../recognizing-handwriting-and-converting-to-text.md)

## See Also

### Searching for text

- [PKStrokeRecognizer.SearchResult](searchresult.md): A value that describes a single result returned by a handwriting search.
