> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextsearching-3wkjv/selectedtextsearchdocument

# selectedTextSearchDocument

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

The object that uniquely identifies the specific document with selected text.

## Declaration

```swift
var selectedTextSearchDocument: Self.DocumentIdentifier? { get }
```

<a id="Discussion"></a>

## Discussion

When performing a search across multiple documents, this object returns the identifier for the document with the selected text. When performing a search on a single document, it returns `nil`.

## Default Implementations

### UITextSearching Implementations

- [selectedTextSearchDocument](selectedtextsearchdocument-72uzm.md)

## See Also

### Identifying selected text

- [selectedTextRange](selectedtextrange.md): The range of selected text in a document.
