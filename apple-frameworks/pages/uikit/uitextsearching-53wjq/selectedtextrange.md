> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearching-53wjq/selectedtextrange](https://developer.apple.com/documentation/uikit/uitextsearching-53wjq/selectedtextrange)

# selectedTextRange

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The range of selected text in a document.

## Declaration

```objectivec
@property (readonly, nullable) UITextRange * selectedTextRange;
```

<a id="Discussion"></a>

## Discussion

If the text range has a length, it indicates the currently selected text. If it has zero length, it indicates the caret (insertion point). If the text-range object is `nil`, it indicates that there’s no current selection.

## See Also

### Identifying selected text

- [selectedTextSearchDocument](selectedtextsearchdocument.md): The object that uniquely identifies the specific document with selected text.
