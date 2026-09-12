> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstandardkeybindingresponding/deletewordbackward(_:)](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding/deletewordbackward(_:))

# deleteWordBackward(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Deletes the word preceding the current insertion point.

## Declaration

```swift
optional func deleteWordBackward(_ sender: Any?)
```

<a id="Discussion"></a>

## Discussion

If the insertion point is in the middle of a word, this method deletes only the portion of the word preceding the insertion point.

## See Also

### Deleting Content

- [deleteBackward(\_:)](deletebackward%28__%29.md): Deletes content moving backward from the current insertion point.
- [deleteBackwardByDecomposingPreviousCharacter(\_:)](deletebackwardbydecomposingpreviouscharacter%28__%29.md)
- [deleteForward(\_:)](deleteforward%28__%29.md)
- [deleteToBeginningOfLine(\_:)](deletetobeginningofline%28__%29.md): Deletes content from the insertion point to the beginning of the current line.
- [deleteToBeginningOfParagraph(\_:)](deletetobeginningofparagraph%28__%29.md): Deletes content from the insertion point to the beginning of the current paragraph.
- [deleteToEndOfLine(\_:)](deletetoendofline%28__%29.md): Deletes content from the insertion point to the end of the current line.
- [deleteToEndOfParagraph(\_:)](deletetoendofparagraph%28__%29.md): Deletes content from the insertion point to the end of the current paragraph.
- [deleteWordForward(\_:)](deletewordforward%28__%29.md)
- [yank(\_:)](yank%28__%29.md): Deletes the current selection, placing it in a temporary buffer, such as the Clipboard.

# deleteWordBackward: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Deletes the word preceding the current insertion point.

## Declaration

```objectivec
- (void) deleteWordBackward:(id) sender;
```

<a id="Discussion"></a>

## Discussion

If the insertion point is in the middle of a word, this method deletes only the portion of the word preceding the insertion point.

## See Also

### Deleting Content

- [deleteBackward:](deletebackward%28__%29.md): Deletes content moving backward from the current insertion point.
- [deleteBackwardByDecomposingPreviousCharacter:](deletebackwardbydecomposingpreviouscharacter%28__%29.md)
- [deleteForward:](deleteforward%28__%29.md)
- [deleteToBeginningOfLine:](deletetobeginningofline%28__%29.md): Deletes content from the insertion point to the beginning of the current line.
- [deleteToBeginningOfParagraph:](deletetobeginningofparagraph%28__%29.md): Deletes content from the insertion point to the beginning of the current paragraph.
- [deleteToEndOfLine:](deletetoendofline%28__%29.md): Deletes content from the insertion point to the end of the current line.
- [deleteToEndOfParagraph:](deletetoendofparagraph%28__%29.md): Deletes content from the insertion point to the end of the current paragraph.
- [deleteWordForward:](deletewordforward%28__%29.md)
- [yank:](yank%28__%29.md): Deletes the current selection, placing it in a temporary buffer, such as the Clipboard.
