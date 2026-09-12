> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/textshouldendediting(_:)](https://developer.apple.com/documentation/appkit/nsmatrix/textshouldendediting(_:))

# textShouldEndEditing(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Requests permission to end editing.

## Declaration

```swift
func textShouldEndEditing(_ textObject: NSText) -> Bool
```

## Parameters

- `textObject`: The text object requesting permission to end editing.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the text object should proceed to finish editing and resign first responder status. If the delegate returns [false](https://developer.apple.com/documentation/swift/false), the text object selects all of its text and remains the first responder.

<a id="Discussion"></a>

## Discussion

The [NSMatrix](../nsmatrix.md) method returns [false](https://developer.apple.com/documentation/swift/false) if the text field contains invalid contents; otherwise it returns the value passed back from [control(\_:textShouldEndEditing:)](../nscontroltexteditingdelegate/control%28__textshouldendediting_%29.md).

This method is invoked to let the [NSTextField](../nstextfield.md) respond to impending loss of first-responder status. This method’s default behavior checks the text field for validity; providing that the field contents are deemed valid, and providing that the delegate responds, [control(\_:textShouldEndEditing:)](../nscontroltexteditingdelegate/control%28__textshouldendediting_%29.md) is sent to the receiver’s delegate (passing the receiver and `textObject` as parameters).

## See Also

### Related Documentation

- [delegate](delegate.md): The delegate for messages from the field editor.

### Editing Text in Cells

- [selectText(\_:)](selecttext%28__%29.md): Selects text in the currently selected cell or in the key cell.
- [selectText(atRow:column:)](selecttext%28atrow_column_%29.md): Selects the text in the cell at the specified location and returns the cell.
- [textShouldBeginEditing(\_:)](textshouldbeginediting%28__%29.md): Requests permission to begin editing text.
- [textDidBeginEditing(\_:)](textdidbeginediting%28__%29.md): Invoked when there’s a change in the text after the receiver gains first responder status.
- [textDidChange(\_:)](textdidchange%28__%29.md): Invoked when a key-down event or paste operation occurs that changes the receiver’s contents.
- [textDidEndEditing(\_:)](textdidendediting%28__%29.md): Invoked when text editing ends.

# textShouldEndEditing: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Requests permission to end editing.

## Declaration

```objectivec
- (BOOL) textShouldEndEditing:(NSText *) textObject;
```

## Parameters

- `textObject`: The text object requesting permission to end editing.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the text object should proceed to finish editing and resign first responder status. If the delegate returns [false](https://developer.apple.com/documentation/swift/false), the text object selects all of its text and remains the first responder.

<a id="Discussion"></a>

## Discussion

The [NSMatrix](../nsmatrix.md) method returns [false](https://developer.apple.com/documentation/swift/false) if the text field contains invalid contents; otherwise it returns the value passed back from [control:textShouldEndEditing:](../nscontroltexteditingdelegate/control%28__textshouldendediting_%29.md).

This method is invoked to let the [NSTextField](../nstextfield.md) respond to impending loss of first-responder status. This method’s default behavior checks the text field for validity; providing that the field contents are deemed valid, and providing that the delegate responds, [control:textShouldEndEditing:](../nscontroltexteditingdelegate/control%28__textshouldendediting_%29.md) is sent to the receiver’s delegate (passing the receiver and `textObject` as parameters).

## See Also

### Related Documentation

- [delegate](delegate.md): The delegate for messages from the field editor.

### Editing Text in Cells

- [selectText:](selecttext%28__%29.md): Selects text in the currently selected cell or in the key cell.
- [selectTextAtRow:column:](selecttext%28atrow_column_%29.md): Selects the text in the cell at the specified location and returns the cell.
- [textShouldBeginEditing:](textshouldbeginediting%28__%29.md): Requests permission to begin editing text.
- [textDidBeginEditing:](textdidbeginediting%28__%29.md): Invoked when there’s a change in the text after the receiver gains first responder status.
- [textDidChange:](textdidchange%28__%29.md): Invoked when a key-down event or paste operation occurs that changes the receiver’s contents.
- [textDidEndEditing:](textdidendediting%28__%29.md): Invoked when text editing ends.
