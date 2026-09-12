> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearching-53wjq/willhighlightfoundtextrange:indocument:](https://developer.apple.com/documentation/uikit/uitextsearching-53wjq/willhighlightfoundtextrange:indocument:)

# willHighlightFoundTextRange:inDocument:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Informs the searchable object when the highlighted search result is about to change.

## Declaration

```objectivec
- (void) willHighlightFoundTextRange:(UITextRange *) range inDocument:(UITextSearchDocumentIdentifier) document;
```

## Parameters

- `range`: The text range to highlight.
- `document`: A string that uniquely identifies the document containing the text range. `Nil` when searching a single document.

## See Also

### Displaying results

- [decorateFoundTextRange:inDocument:usingStyle:](decoratefoundtextrange_indocument_usingstyle_.md): Applies the style to a specific text range to indicate found and highlighted results.
- [clearAllDecoratedFoundText](clearalldecoratedfoundtext.md): Clears the style from all found and highlighted results.
- [scrollRangeToVisible:inDocument:](scrollrangetovisible_indocument_.md): Scrolls to the containing view to make the text range visible.
