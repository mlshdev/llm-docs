> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/validateediting()](https://developer.apple.com/documentation/appkit/nscontrol/validateediting())

# validateEditing() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Validates changes to any user-typed text.

## Declaration

```swift
func validateEditing()
```

<a id="Discussion"></a>

## Discussion

Validation sets the object value of the cell to the current contents of the cell’s editor (the [NSText](../nstext.md) object used for editing), storing it as a simple [NSString](https://developer.apple.com/documentation/foundation/nsstring) or an attributed string object based on the attributes of the editor.

## See Also

### Managing the Field Editor

- [abortEditing()](abortediting%28%29.md): Terminates the current editing operation and discards any edited text.
- [currentEditor()](currenteditor%28%29.md): Returns the current field editor for the control.
- [edit(withFrame:editor:delegate:event:)](edit%28withframe_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [endEditing(\_:)](endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [select(withFrame:editor:delegate:start:length:)](select%28withframe_editor_delegate_start_length_%29.md): Selects the specified text range in the receiver’s field editor.

# validateEditing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Validates changes to any user-typed text.

## Declaration

```objectivec
- (void) validateEditing;
```

<a id="Discussion"></a>

## Discussion

Validation sets the object value of the cell to the current contents of the cell’s editor (the [NSText](../nstext.md) object used for editing), storing it as a simple [NSString](https://developer.apple.com/documentation/foundation/nsstring) or an attributed string object based on the attributes of the editor.

## See Also

### Managing the Field Editor

- [abortEditing](abortediting%28%29.md): Terminates the current editing operation and discards any edited text.
- [currentEditor](currenteditor%28%29.md): Returns the current field editor for the control.
- [editWithFrame:editor:delegate:event:](edit%28withframe_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [endEditing:](endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [selectWithFrame:editor:delegate:start:length:](select%28withframe_editor_delegate_start_length_%29.md): Selects the specified text range in the receiver’s field editor.
