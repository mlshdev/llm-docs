> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearching-3wkjv/scrollrangetovisible(_:indocument:)](https://developer.apple.com/documentation/uikit/uitextsearching-3wkjv/scrollrangetovisible(_:indocument:))

# scrollRangeToVisible(\_:inDocument:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Scrolls to the containing view to make the text range visible.

## Declaration

```swift
func scrollRangeToVisible(_ range: UITextRange, inDocument: Self.DocumentIdentifier?)
```

## Parameters

- `range`: The text range to scroll to.
- `inDocument`: A string that uniquely identifies the document containing the text range. `Nil` when searching a single document.

<a id="Discussion"></a>

## Discussion

If the seachable object supports scrolling, use this method to implement scrolling your view to make the highlighted text range visible.

## Default Implementations

### UITextSearching Implementations

- [scrollRangeToVisible(\_:inDocument:)](scrollrangetovisible%28__indocument_%29-8v4iu.md)

## See Also

### Displaying results

- [decorate(foundTextRange:document:usingStyle:)](decorate%28foundtextrange_document_usingstyle_%29.md): Applies the style to a specific text range to indicate found and highlighted results.
- [clearAllDecoratedFoundText()](clearalldecoratedfoundtext%28%29.md): Clears the style from all found and highlighted results.
- [willHighlight(foundTextRange:document:)](willhighlight%28foundtextrange_document_%29.md): Informs the searchable object when the highlighted search result is about to change.
