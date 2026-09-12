> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokerecognizer/searchresult](https://developer.apple.com/documentation/pencilkit/pkstrokerecognizer/searchresult)

# PKStrokeRecognizer.SearchResult

**Framework:** PencilKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A value that describes a single result returned by a handwriting search.

## Declaration

```swift
struct SearchResult
```

## Mentioned In

- [Recognizing handwriting and converting it to text](../recognizing-handwriting-and-converting-to-text.md)

<a id="overview"></a>

## Overview

Each `SearchResult` identifies the set of strokes that matched the query and the bounding rectangle that contains them, expressed in the coordinate space of the drawing.

## Topics

### Getting the result data

- [strokes](searchresult/strokes.md): The identifiers of the strokes the result contains.
- [bounds](searchresult/bounds.md): The bounds of the matched strokes in the coordinate space of their drawing.

## See Also

### Searching for text

- [search(\_:fullWordsOnly:caseMatchingOnly:)](search%28__fullwordsonly_casematchingonly_%29.md): Searches the drawing for strokes whose recognized text matches the query.
