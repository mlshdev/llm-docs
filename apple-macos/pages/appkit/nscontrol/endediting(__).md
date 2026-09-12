> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/endediting(_:)](https://developer.apple.com/documentation/appkit/nscontrol/endediting(_:))

# endEditing(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Ends the editing of text in the receiver using the specified field editor.

## Declaration

```swift
func endEditing(_ textObj: NSText)
```

## Parameters

- `textObj`: The field editor currently handling the editing of the cell’s content.

<a id="Discussion"></a>

## Discussion

Ends any editing of text that began with a call to [edit(withFrame:editor:delegate:event:)](edit%28withframe_editor_delegate_event_%29.md) or [select(withFrame:editor:delegate:start:length:)](select%28withframe_editor_delegate_start_length_%29.md).

## See Also

### Managing the Field Editor

- [abortEditing()](abortediting%28%29.md): Terminates the current editing operation and discards any edited text.
- [currentEditor()](currenteditor%28%29.md): Returns the current field editor for the control.
- [validateEditing()](validateediting%28%29.md): Validates changes to any user-typed text.
- [edit(withFrame:editor:delegate:event:)](edit%28withframe_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [select(withFrame:editor:delegate:start:length:)](select%28withframe_editor_delegate_start_length_%29.md): Selects the specified text range in the receiver’s field editor.

# endEditing: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Ends the editing of text in the receiver using the specified field editor.

## Declaration

```objectivec
- (void) endEditing:(NSText *) textObj;
```

## Parameters

- `textObj`: The field editor currently handling the editing of the cell’s content.

<a id="Discussion"></a>

## Discussion

Ends any editing of text that began with a call to [editWithFrame:editor:delegate:event:](edit%28withframe_editor_delegate_event_%29.md) or [selectWithFrame:editor:delegate:start:length:](select%28withframe_editor_delegate_start_length_%29.md).

## See Also

### Managing the Field Editor

- [abortEditing](abortediting%28%29.md): Terminates the current editing operation and discards any edited text.
- [currentEditor](currenteditor%28%29.md): Returns the current field editor for the control.
- [validateEditing](validateediting%28%29.md): Validates changes to any user-typed text.
- [editWithFrame:editor:delegate:event:](edit%28withframe_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [selectWithFrame:editor:delegate:start:length:](select%28withframe_editor_delegate_start_length_%29.md): Selects the specified text range in the receiver’s field editor.
