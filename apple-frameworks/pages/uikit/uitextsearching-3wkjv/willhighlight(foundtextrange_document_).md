> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearching-3wkjv/willhighlight(foundtextrange:document:)](https://developer.apple.com/documentation/uikit/uitextsearching-3wkjv/willhighlight(foundtextrange:document:))

# willHighlight(foundTextRange:document:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Informs the searchable object when the highlighted search result is about to change.

## Declaration

```swift
func willHighlight(foundTextRange: UITextRange, document: Self.DocumentIdentifier?)
```

## Parameters

- `foundTextRange`: The text range to highlight.
- `document`: A string that uniquely identifies the document containing the text range. `Nil` when searching a single document.

## Default Implementations

### UITextSearching Implementations

- [willHighlight(foundTextRange:document:)](willhighlight%28foundtextrange_document_%29-55xf1.md)

## See Also

### Displaying results

- [decorate(foundTextRange:document:usingStyle:)](decorate%28foundtextrange_document_usingstyle_%29.md): Applies the style to a specific text range to indicate found and highlighted results.
- [clearAllDecoratedFoundText()](clearalldecoratedfoundtext%28%29.md): Clears the style from all found and highlighted results.
- [scrollRangeToVisible(\_:inDocument:)](scrollrangetovisible%28__indocument_%29.md): Scrolls to the containing view to make the text range visible.
