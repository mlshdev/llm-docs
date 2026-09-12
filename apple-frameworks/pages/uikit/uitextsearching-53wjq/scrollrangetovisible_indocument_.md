> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearching-53wjq/scrollrangetovisible:indocument:](https://developer.apple.com/documentation/uikit/uitextsearching-53wjq/scrollrangetovisible:indocument:)

# scrollRangeToVisible:inDocument:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Scrolls to the containing view to make the text range visible.

## Declaration

```objectivec
- (void) scrollRangeToVisible:(UITextRange *) range inDocument:(UITextSearchDocumentIdentifier) document;
```

## Parameters

- `range`: The text range to scroll to.
- `document`: A string that uniquely identifies the document containing the text range. `Nil` when searching a single document.

<a id="Discussion"></a>

## Discussion

If the seachable object supports scrolling, use this method to implement scrolling your view to make the highlighted text range visible.

## See Also

### Displaying results

- [decorateFoundTextRange:inDocument:usingStyle:](decoratefoundtextrange_indocument_usingstyle_.md): Applies the style to a specific text range to indicate found and highlighted results.
- [clearAllDecoratedFoundText](clearalldecoratedfoundtext.md): Clears the style from all found and highlighted results.
- [willHighlightFoundTextRange:inDocument:](willhighlightfoundtextrange_indocument_.md): Informs the searchable object when the highlighted search result is about to change.
