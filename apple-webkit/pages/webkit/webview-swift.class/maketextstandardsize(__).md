> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/maketextstandardsize(_:)](https://developer.apple.com/documentation/webkit/webview-swift.class/maketextstandardsize(_:))

# makeTextStandardSize(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Resets the text size to a multiple of 1.

## Declaration

```swift
@IBAction func makeTextStandardSize(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent this message.

## See Also

### Editing Documents

- [replaceSelection(with:)](replaceselection%28with_%29-5px9m.md): Replaces the receiver’s current selection with the specified DOM node.
- [replaceSelection(withText:)](replaceselection%28withtext_%29.md): Replaces the current selection with a string of text.
- [replaceSelection(withMarkupString:)](replaceselection%28withmarkupstring_%29.md): Replaces the current selection with mixed text and markup.
- [replaceSelection(with:)](replaceselection%28with_%29-3vj8l.md): Replaces the current selection with an archive’s contents.
- [deleteSelection()](deleteselection%28%29.md): Deletes the receiver’s current selection unless it’s collapsed.
- [moveToBeginningOfSentence(\_:)](movetobeginningofsentence%28__%29.md): Moves the insertion point to the beginning of the current sentence.
- [moveToBeginningOfSentenceAndModifySelection(\_:)](movetobeginningofsentenceandmodifyselection%28__%29.md): Moves the insertion point and extends the selection to the beginning of the current sentence.
- [moveToEndOfSentence(\_:)](movetoendofsentence%28__%29.md): Moves the insertion point to the end of the current sentence.
- [moveToEndOfSentenceAndModifySelection(\_:)](movetoendofsentenceandmodifyselection%28__%29.md): Moves the insertion point and extends the selection to the end of the current sentence.
- [selectSentence(\_:)](selectsentence%28__%29.md): Selects the entire sentence around the insertion point.
- [toggleContinuousSpellChecking(\_:)](togglecontinuousspellchecking%28__%29.md): Toggles whether continuous spell checking is available.
- [toggleSmartInsertDelete(\_:)](togglesmartinsertdelete%28__%29.md): Toggles whether spaces around selected words are inserted or deleted to preserve proper spacing and punctuation.
- [canMakeTextStandardSize](canmaketextstandardsize.md): A Boolean that indicates whether the current text size is a multiple of 1.
- [maintainsInactiveSelection](maintainsinactiveselection.md): A Boolean that indicates whether the selection is maintained when focus is lost.

# makeTextStandardSize: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Resets the text size to a multiple of 1.

## Declaration

```objectivec
- (void) makeTextStandardSize:(id) sender;
```

## Parameters

- `sender`: The object that sent this message.

## See Also

### Editing Documents

- [replaceSelectionWithNode:](replaceselection%28with_%29-5px9m.md): Replaces the receiver’s current selection with the specified DOM node.
- [replaceSelectionWithText:](replaceselection%28withtext_%29.md): Replaces the current selection with a string of text.
- [replaceSelectionWithMarkupString:](replaceselection%28withmarkupstring_%29.md): Replaces the current selection with mixed text and markup.
- [replaceSelectionWithArchive:](replaceselection%28with_%29-3vj8l.md): Replaces the current selection with an archive’s contents.
- [deleteSelection](deleteselection%28%29.md): Deletes the receiver’s current selection unless it’s collapsed.
- [moveToBeginningOfSentence:](movetobeginningofsentence%28__%29.md): Moves the insertion point to the beginning of the current sentence.
- [moveToBeginningOfSentenceAndModifySelection:](movetobeginningofsentenceandmodifyselection%28__%29.md): Moves the insertion point and extends the selection to the beginning of the current sentence.
- [moveToEndOfSentence:](movetoendofsentence%28__%29.md): Moves the insertion point to the end of the current sentence.
- [moveToEndOfSentenceAndModifySelection:](movetoendofsentenceandmodifyselection%28__%29.md): Moves the insertion point and extends the selection to the end of the current sentence.
- [selectSentence:](selectsentence%28__%29.md): Selects the entire sentence around the insertion point.
- [toggleContinuousSpellChecking:](togglecontinuousspellchecking%28__%29.md): Toggles whether continuous spell checking is available.
- [toggleSmartInsertDelete:](togglesmartinsertdelete%28__%29.md): Toggles whether spaces around selected words are inserted or deleted to preserve proper spacing and punctuation.
- [canMakeTextStandardSize](canmaketextstandardsize.md): A Boolean that indicates whether the current text size is a multiple of 1.
- [maintainsInactiveSelection](maintainsinactiveselection.md): A Boolean that indicates whether the selection is maintained when focus is lost.
