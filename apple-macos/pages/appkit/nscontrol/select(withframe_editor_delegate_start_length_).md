> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/select(withframe:editor:delegate:start:length:)](https://developer.apple.com/documentation/appkit/nscontrol/select(withframe:editor:delegate:start:length:))

# select(withFrame:editor:delegate:start:length:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Selects the specified text range in the receiver’s field editor.

## Declaration

```swift
func select(withFrame rect: NSRect, editor textObj: NSText, delegate: Any?, start selStart: Int, length selLength: Int)
```

## Parameters

- `rect`: The bounding rectangle of the control’s cell.
- `textObj`: The field editor to use.
- `delegate`: The object to use as a delegate for the field editor. This delegate object receives various [NSText](../nstext.md) delegation and notification methods during the course of editing the cell’s contents.
- `selStart`: The start of the text selection.
- `selLength`: The length of the text range.

<a id="Discussion"></a>

## Discussion

This method is similar to [edit(withFrame:editor:delegate:event:)](edit%28withframe_editor_delegate_event_%29.md), except that it can be invoked in any situation, not only on a mouse-down event. This method returns without doing anything if `textObj` or the receiver is `nil`, or if the receiver has no font set for it.

## See Also

### Managing the Field Editor

- [abortEditing()](abortediting%28%29.md): Terminates the current editing operation and discards any edited text.
- [currentEditor()](currenteditor%28%29.md): Returns the current field editor for the control.
- [validateEditing()](validateediting%28%29.md): Validates changes to any user-typed text.
- [edit(withFrame:editor:delegate:event:)](edit%28withframe_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [endEditing(\_:)](endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.

# selectWithFrame:editor:delegate:start:length: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Selects the specified text range in the receiver’s field editor.

## Declaration

```objectivec
- (void) selectWithFrame:(NSRect) rect editor:(NSText *) textObj delegate:(id) delegate start:(NSInteger) selStart length:(NSInteger) selLength;
```

## Parameters

- `rect`: The bounding rectangle of the control’s cell.
- `textObj`: The field editor to use.
- `delegate`: The object to use as a delegate for the field editor. This delegate object receives various [NSText](../nstext.md) delegation and notification methods during the course of editing the cell’s contents.
- `selStart`: The start of the text selection.
- `selLength`: The length of the text range.

<a id="Discussion"></a>

## Discussion

This method is similar to [editWithFrame:editor:delegate:event:](edit%28withframe_editor_delegate_event_%29.md), except that it can be invoked in any situation, not only on a mouse-down event. This method returns without doing anything if `textObj` or the receiver is `nil`, or if the receiver has no font set for it.

## See Also

### Managing the Field Editor

- [abortEditing](abortediting%28%29.md): Terminates the current editing operation and discards any edited text.
- [currentEditor](currenteditor%28%29.md): Returns the current field editor for the control.
- [validateEditing](validateediting%28%29.md): Validates changes to any user-typed text.
- [editWithFrame:editor:delegate:event:](edit%28withframe_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [endEditing:](endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
