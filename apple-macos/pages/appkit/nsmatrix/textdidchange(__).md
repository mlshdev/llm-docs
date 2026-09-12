> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/textdidchange(_:)](https://developer.apple.com/documentation/appkit/nsmatrix/textdidchange(_:))

# textDidChange(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when a key-down event or paste operation occurs that changes the receiver’s contents.

## Declaration

```swift
func textDidChange(_ notification: Notification)
```

## Parameters

- `notification`: The [textDidChangeNotification](../nscontrol/textdidchangenotification.md) notification.

<a id="Discussion"></a>

## Discussion

This method’s default behavior is to pass this message on to the selected cell (if the selected cell responds to `textDidChange:`) and then to post an [textDidChangeNotification](../nscontrol/textdidchangenotification.md) along with the receiving object to the default notification center. The posted notification’s user info contains the contents of notification’s user info dictionary, plus an additional key-value pair. The additional key is “`NSFieldEditor`”; the value for this key is the text object that changed.

## See Also

### Editing Text in Cells

- [selectText(\_:)](selecttext%28__%29.md): Selects text in the currently selected cell or in the key cell.
- [selectText(atRow:column:)](selecttext%28atrow_column_%29.md): Selects the text in the cell at the specified location and returns the cell.
- [textShouldBeginEditing(\_:)](textshouldbeginediting%28__%29.md): Requests permission to begin editing text.
- [textDidBeginEditing(\_:)](textdidbeginediting%28__%29.md): Invoked when there’s a change in the text after the receiver gains first responder status.
- [textShouldEndEditing(\_:)](textshouldendediting%28__%29.md): Requests permission to end editing.
- [textDidEndEditing(\_:)](textdidendediting%28__%29.md): Invoked when text editing ends.

# textDidChange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when a key-down event or paste operation occurs that changes the receiver’s contents.

## Declaration

```objectivec
- (void) textDidChange:(NSNotification *) notification;
```

## Parameters

- `notification`: The [NSControlTextDidChangeNotification](../nscontrol/textdidchangenotification.md) notification.

<a id="Discussion"></a>

## Discussion

This method’s default behavior is to pass this message on to the selected cell (if the selected cell responds to `textDidChange:`) and then to post an [NSControlTextDidChangeNotification](../nscontrol/textdidchangenotification.md) along with the receiving object to the default notification center. The posted notification’s user info contains the contents of notification’s user info dictionary, plus an additional key-value pair. The additional key is “`NSFieldEditor`”; the value for this key is the text object that changed.

## See Also

### Editing Text in Cells

- [selectText:](selecttext%28__%29.md): Selects text in the currently selected cell or in the key cell.
- [selectTextAtRow:column:](selecttext%28atrow_column_%29.md): Selects the text in the cell at the specified location and returns the cell.
- [textShouldBeginEditing:](textshouldbeginediting%28__%29.md): Requests permission to begin editing text.
- [textDidBeginEditing:](textdidbeginediting%28__%29.md): Invoked when there’s a change in the text after the receiver gains first responder status.
- [textShouldEndEditing:](textshouldendediting%28__%29.md): Requests permission to end editing.
- [textDidEndEditing:](textdidendediting%28__%29.md): Invoked when text editing ends.
