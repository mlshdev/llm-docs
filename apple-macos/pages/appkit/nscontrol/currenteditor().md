> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/currenteditor()](https://developer.apple.com/documentation/appkit/nscontrol/currenteditor())

# currentEditor() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the current field editor for the control.

## Declaration

```swift
func currentEditor() -> NSText?
```

<a id="return-value"></a>

## Return Value

The field editor for the current control, or `nil` if the receiver does not have a field editor.

<a id="Discussion"></a>

## Discussion

When the receiver is a control displaying editable text (for example, a text field) and it is the first responder, it has a field editor, which is returned by this method. The field editor is a single [NSTextView](../nstextview.md) object that is shared among all the controls in a window for light text-editing needs. It is automatically instantiated when needed.

## See Also

### Managing the Field Editor

- [abortEditing()](abortediting%28%29.md): Terminates the current editing operation and discards any edited text.
- [validateEditing()](validateediting%28%29.md): Validates changes to any user-typed text.
- [edit(withFrame:editor:delegate:event:)](edit%28withframe_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [endEditing(\_:)](endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [select(withFrame:editor:delegate:start:length:)](select%28withframe_editor_delegate_start_length_%29.md): Selects the specified text range in the receiver’s field editor.

# currentEditor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the current field editor for the control.

## Declaration

```objectivec
- (NSText *) currentEditor;
```

<a id="return-value"></a>

## Return Value

The field editor for the current control, or `nil` if the receiver does not have a field editor.

<a id="Discussion"></a>

## Discussion

When the receiver is a control displaying editable text (for example, a text field) and it is the first responder, it has a field editor, which is returned by this method. The field editor is a single [NSTextView](../nstextview.md) object that is shared among all the controls in a window for light text-editing needs. It is automatically instantiated when needed.

## See Also

### Managing the Field Editor

- [abortEditing](abortediting%28%29.md): Terminates the current editing operation and discards any edited text.
- [validateEditing](validateediting%28%29.md): Validates changes to any user-typed text.
- [editWithFrame:editor:delegate:event:](edit%28withframe_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [endEditing:](endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [selectWithFrame:editor:delegate:start:length:](select%28withframe_editor_delegate_start_length_%29.md): Selects the specified text range in the receiver’s field editor.
