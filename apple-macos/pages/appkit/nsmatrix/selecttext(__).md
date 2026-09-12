> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/selecttext(_:)](https://developer.apple.com/documentation/appkit/nsmatrix/selecttext(_:))

# selectText(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects text in the currently selected cell or in the key cell.

## Declaration

```swift
func selectText(_ sender: Any?)
```

<a id="Discussion"></a>

## Discussion

If the currently selected cell is editable and enabled, its text is selected. Otherwise, the key cell is selected.

## See Also

### Related Documentation

- [selectText(\_:)](../nstextfield/selecttext%28__%29.md): Ends editing in the text field and, if it’s selectable, selects the entire text content.
- [keyCell](keycell.md): The cell that will be clicked when the user presses the Space bar.

### Editing Text in Cells

- [selectText(atRow:column:)](selecttext%28atrow_column_%29.md): Selects the text in the cell at the specified location and returns the cell.
- [textShouldBeginEditing(\_:)](textshouldbeginediting%28__%29.md): Requests permission to begin editing text.
- [textDidBeginEditing(\_:)](textdidbeginediting%28__%29.md): Invoked when there’s a change in the text after the receiver gains first responder status.
- [textDidChange(\_:)](textdidchange%28__%29.md): Invoked when a key-down event or paste operation occurs that changes the receiver’s contents.
- [textShouldEndEditing(\_:)](textshouldendediting%28__%29.md): Requests permission to end editing.
- [textDidEndEditing(\_:)](textdidendediting%28__%29.md): Invoked when text editing ends.

# selectText: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects text in the currently selected cell or in the key cell.

## Declaration

```objectivec
- (void) selectText:(id) sender;
```

<a id="Discussion"></a>

## Discussion

If the currently selected cell is editable and enabled, its text is selected. Otherwise, the key cell is selected.

## See Also

### Related Documentation

- [selectText:](../nstextfield/selecttext%28__%29.md): Ends editing in the text field and, if it’s selectable, selects the entire text content.
- [keyCell](keycell.md): The cell that will be clicked when the user presses the Space bar.

### Editing Text in Cells

- [selectTextAtRow:column:](selecttext%28atrow_column_%29.md): Selects the text in the cell at the specified location and returns the cell.
- [textShouldBeginEditing:](textshouldbeginediting%28__%29.md): Requests permission to begin editing text.
- [textDidBeginEditing:](textdidbeginediting%28__%29.md): Invoked when there’s a change in the text after the receiver gains first responder status.
- [textDidChange:](textdidchange%28__%29.md): Invoked when a key-down event or paste operation occurs that changes the receiver’s contents.
- [textShouldEndEditing:](textshouldendediting%28__%29.md): Requests permission to end editing.
- [textDidEndEditing:](textdidendediting%28__%29.md): Invoked when text editing ends.
