> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearching-3wkjv/decorate(foundtextrange:document:usingstyle:)](https://developer.apple.com/documentation/uikit/uitextsearching-3wkjv/decorate(foundtextrange:document:usingstyle:))

# decorate(foundTextRange:document:usingStyle:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Applies the style to a specific text range to indicate found and highlighted results.

## Declaration

```swift
func decorate(foundTextRange: UITextRange, document: Self.DocumentIdentifier?, usingStyle: UITextSearchFoundTextStyle)
```

## Parameters

- `foundTextRange`: The text range to decorate.
- `document`: A string that uniquely identifies the document containing the text range. `Nil` when searching a single document.
- `usingStyle`: The style to decorate the text: highlighted, found, or normal.

<a id="Discussion"></a>

## Discussion

The system calls this method during a find session to display the results of a search in your custom view. Your implenentation should decorate matching text ranges for the given style to indicate the found and highlighted result.

## See Also

### Displaying results

- [clearAllDecoratedFoundText()](clearalldecoratedfoundtext%28%29.md): Clears the style from all found and highlighted results.
- [willHighlight(foundTextRange:document:)](willhighlight%28foundtextrange_document_%29.md): Informs the searchable object when the highlighted search result is about to change.
- [scrollRangeToVisible(\_:inDocument:)](scrollrangetovisible%28__indocument_%29.md): Scrolls to the containing view to make the text range visible.
