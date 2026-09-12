> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/textshouldbeginediting(_:)](https://developer.apple.com/documentation/appkit/nsmatrix/textshouldbeginediting(_:))

# textShouldBeginEditing(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Requests permission to begin editing text.

## Declaration

```swift
func textShouldBeginEditing(_ textObject: NSText) -> Bool
```

## Parameters

- `textObject`: The text object requesting permission to begin editing.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the text object should proceed to make changes. If the delegate returns [false](https://developer.apple.com/documentation/swift/false), the text object abandons the editing operation.

<a id="Discussion"></a>

## Discussion

The default behavior of this method is to return the value obtained from [control(\_:textShouldBeginEditing:)](../nscontroltexteditingdelegate/control%28__textshouldbeginediting_%29.md), unless the delegate doesn’t respond to that method, in which case it returns [true](https://developer.apple.com/documentation/swift/true), thereby allowing text editing to proceed.

This method is invoked to let the [NSTextField](../nstextfield.md) respond to impending changes to its text. This method’s default behavior is to send [control(\_:textShouldBeginEditing:)](../nscontroltexteditingdelegate/control%28__textshouldbeginediting_%29.md) to the receiver’s delegate (passing the receiver and `textObject` as parameters).

## See Also

### Related Documentation

- [delegate](delegate.md): The delegate for messages from the field editor.

### Editing Text in Cells

- [selectText(\_:)](selecttext%28__%29.md): Selects text in the currently selected cell or in the key cell.
- [selectText(atRow:column:)](selecttext%28atrow_column_%29.md): Selects the text in the cell at the specified location and returns the cell.
- [textDidBeginEditing(\_:)](textdidbeginediting%28__%29.md): Invoked when there’s a change in the text after the receiver gains first responder status.
- [textDidChange(\_:)](textdidchange%28__%29.md): Invoked when a key-down event or paste operation occurs that changes the receiver’s contents.
- [textShouldEndEditing(\_:)](textshouldendediting%28__%29.md): Requests permission to end editing.
- [textDidEndEditing(\_:)](textdidendediting%28__%29.md): Invoked when text editing ends.

# textShouldBeginEditing: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Requests permission to begin editing text.

## Declaration

```objectivec
- (BOOL) textShouldBeginEditing:(NSText *) textObject;
```

## Parameters

- `textObject`: The text object requesting permission to begin editing.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the text object should proceed to make changes. If the delegate returns [false](https://developer.apple.com/documentation/swift/false), the text object abandons the editing operation.

<a id="Discussion"></a>

## Discussion

The default behavior of this method is to return the value obtained from [control:textShouldBeginEditing:](../nscontroltexteditingdelegate/control%28__textshouldbeginediting_%29.md), unless the delegate doesn’t respond to that method, in which case it returns [true](https://developer.apple.com/documentation/swift/true), thereby allowing text editing to proceed.

This method is invoked to let the [NSTextField](../nstextfield.md) respond to impending changes to its text. This method’s default behavior is to send [control:textShouldBeginEditing:](../nscontroltexteditingdelegate/control%28__textshouldbeginediting_%29.md) to the receiver’s delegate (passing the receiver and `textObject` as parameters).

## See Also

### Related Documentation

- [delegate](delegate.md): The delegate for messages from the field editor.

### Editing Text in Cells

- [selectText:](selecttext%28__%29.md): Selects text in the currently selected cell or in the key cell.
- [selectTextAtRow:column:](selecttext%28atrow_column_%29.md): Selects the text in the cell at the specified location and returns the cell.
- [textDidBeginEditing:](textdidbeginediting%28__%29.md): Invoked when there’s a change in the text after the receiver gains first responder status.
- [textDidChange:](textdidchange%28__%29.md): Invoked when a key-down event or paste operation occurs that changes the receiver’s contents.
- [textShouldEndEditing:](textshouldendediting%28__%29.md): Requests permission to end editing.
- [textDidEndEditing:](textdidendediting%28__%29.md): Invoked when text editing ends.
