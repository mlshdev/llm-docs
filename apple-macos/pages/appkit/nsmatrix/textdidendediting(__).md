> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/textdidendediting(_:)](https://developer.apple.com/documentation/appkit/nsmatrix/textdidendediting(_:))

# textDidEndEditing(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when text editing ends.

## Declaration

```swift
func textDidEndEditing(_ notification: Notification)
```

## Parameters

- `notification`: The [textDidEndEditingNotification](../nscontrol/textdidendeditingnotification.md) notification.

<a id="Discussion"></a>

## Discussion

This method’s default behavior is to post an [textDidEndEditingNotification](../nscontrol/textdidendeditingnotification.md) along with the receiving object to the default notification center. The posted notification’s user info contains the contents of notification’s user info dictionary, plus an additional key-value pair. The additional key is “`NSFieldEditor`”; the value for this key is the text object that began editing. After posting the notification, [NSMatrix](../nsmatrix.md) sends an [endEditing(\_:)](../nscell/endediting%28__%29.md) message to the selected cell, draws and makes the selected cell key, and then takes the appropriate action based on which key was used to end editing (Return, Tab, or Back-Tab).

## See Also

### Editing Text in Cells

- [selectText(\_:)](selecttext%28__%29.md): Selects text in the currently selected cell or in the key cell.
- [selectText(atRow:column:)](selecttext%28atrow_column_%29.md): Selects the text in the cell at the specified location and returns the cell.
- [textShouldBeginEditing(\_:)](textshouldbeginediting%28__%29.md): Requests permission to begin editing text.
- [textDidBeginEditing(\_:)](textdidbeginediting%28__%29.md): Invoked when there’s a change in the text after the receiver gains first responder status.
- [textDidChange(\_:)](textdidchange%28__%29.md): Invoked when a key-down event or paste operation occurs that changes the receiver’s contents.
- [textShouldEndEditing(\_:)](textshouldendediting%28__%29.md): Requests permission to end editing.

# textDidEndEditing: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when text editing ends.

## Declaration

```objectivec
- (void) textDidEndEditing:(NSNotification *) notification;
```

## Parameters

- `notification`: The [NSControlTextDidEndEditingNotification](../nscontrol/textdidendeditingnotification.md) notification.

<a id="Discussion"></a>

## Discussion

This method’s default behavior is to post an [NSControlTextDidEndEditingNotification](../nscontrol/textdidendeditingnotification.md) along with the receiving object to the default notification center. The posted notification’s user info contains the contents of notification’s user info dictionary, plus an additional key-value pair. The additional key is “`NSFieldEditor`”; the value for this key is the text object that began editing. After posting the notification, [NSMatrix](../nsmatrix.md) sends an [endEditing:](../nscell/endediting%28__%29.md) message to the selected cell, draws and makes the selected cell key, and then takes the appropriate action based on which key was used to end editing (Return, Tab, or Back-Tab).

## See Also

### Editing Text in Cells

- [selectText:](selecttext%28__%29.md): Selects text in the currently selected cell or in the key cell.
- [selectTextAtRow:column:](selecttext%28atrow_column_%29.md): Selects the text in the cell at the specified location and returns the cell.
- [textShouldBeginEditing:](textshouldbeginediting%28__%29.md): Requests permission to begin editing text.
- [textDidBeginEditing:](textdidbeginediting%28__%29.md): Invoked when there’s a change in the text after the receiver gains first responder status.
- [textDidChange:](textdidchange%28__%29.md): Invoked when a key-down event or paste operation occurs that changes the receiver’s contents.
- [textShouldEndEditing:](textshouldendediting%28__%29.md): Requests permission to end editing.
