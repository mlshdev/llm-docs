> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/selecttext(atrow:column:)](https://developer.apple.com/documentation/appkit/nsmatrix/selecttext(atrow:column:))

# selectText(atRow:column:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the text in the cell at the specified location and returns the cell.

## Declaration

```swift
func selectText(atRow row: Int, column col: Int) -> NSCell?
```

## Parameters

- `row`: The row containing the text to select.
- `col`: The column containing the text to select.

<a id="return-value"></a>

## Return Value

If it is both editable and selectable, the cell at the specified row and column. If the cell at the specified location, is either not editable or not selectable, this method does nothing and returns nil. If `row` and `column` indicate a cell that is outside the receiver, this method does nothing and returns the receiver.

## See Also

### Editing Text in Cells

- [selectText(\_:)](selecttext%28__%29.md): Selects text in the currently selected cell or in the key cell.
- [textShouldBeginEditing(\_:)](textshouldbeginediting%28__%29.md): Requests permission to begin editing text.
- [textDidBeginEditing(\_:)](textdidbeginediting%28__%29.md): Invoked when there’s a change in the text after the receiver gains first responder status.
- [textDidChange(\_:)](textdidchange%28__%29.md): Invoked when a key-down event or paste operation occurs that changes the receiver’s contents.
- [textShouldEndEditing(\_:)](textshouldendediting%28__%29.md): Requests permission to end editing.
- [textDidEndEditing(\_:)](textdidendediting%28__%29.md): Invoked when text editing ends.

# selectTextAtRow:column: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the text in the cell at the specified location and returns the cell.

## Declaration

```objectivec
- (NSCell *) selectTextAtRow:(NSInteger) row column:(NSInteger) col;
```

## Parameters

- `row`: The row containing the text to select.
- `col`: The column containing the text to select.

<a id="return-value"></a>

## Return Value

If it is both editable and selectable, the cell at the specified row and column. If the cell at the specified location, is either not editable or not selectable, this method does nothing and returns nil. If `row` and `column` indicate a cell that is outside the receiver, this method does nothing and returns the receiver.

## See Also

### Editing Text in Cells

- [selectText:](selecttext%28__%29.md): Selects text in the currently selected cell or in the key cell.
- [textShouldBeginEditing:](textshouldbeginediting%28__%29.md): Requests permission to begin editing text.
- [textDidBeginEditing:](textdidbeginediting%28__%29.md): Invoked when there’s a change in the text after the receiver gains first responder status.
- [textDidChange:](textdidchange%28__%29.md): Invoked when a key-down event or paste operation occurs that changes the receiver’s contents.
- [textShouldEndEditing:](textshouldendediting%28__%29.md): Requests permission to end editing.
- [textDidEndEditing:](textdidendediting%28__%29.md): Invoked when text editing ends.
