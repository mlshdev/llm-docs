> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextsearching-3wkjv/selectedtextrange

# selectedTextRange

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

The range of selected text in a document.

## Declaration

```swift
var selectedTextRange: UITextRange? { get }
```

<a id="Discussion"></a>

## Discussion

If the text range has a length, it indicates the currently selected text. If it has zero length, it indicates the caret (insertion point). If the text-range object is `nil`, it indicates that there’s no current selection.

## See Also

### Identifying selected text

- [selectedTextSearchDocument](selectedtextsearchdocument.md): The object that uniquely identifies the specific document with selected text.
