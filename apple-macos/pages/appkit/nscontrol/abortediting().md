> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/abortediting()](https://developer.apple.com/documentation/appkit/nscontrol/abortediting())

# abortEditing() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Terminates the current editing operation and discards any edited text.

## Declaration

```swift
func abortEditing() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if there was a field editor associated with the control; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If there was a field editor, this method removes the field editor’s delegate.

Because the control discards any edits, it doesn’t call [controlTextDidEndEditing(\_:)](../nscontroltexteditingdelegate/controltextdidendediting%28__%29.md).

## See Also

### Managing the Field Editor

- [currentEditor()](currenteditor%28%29.md): Returns the current field editor for the control.
- [validateEditing()](validateediting%28%29.md): Validates changes to any user-typed text.
- [edit(withFrame:editor:delegate:event:)](edit%28withframe_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [endEditing(\_:)](endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [select(withFrame:editor:delegate:start:length:)](select%28withframe_editor_delegate_start_length_%29.md): Selects the specified text range in the receiver’s field editor.

# abortEditing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Terminates the current editing operation and discards any edited text.

## Declaration

```objectivec
- (BOOL) abortEditing;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if there was a field editor associated with the control; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If there was a field editor, this method removes the field editor’s delegate.

Because the control discards any edits, it doesn’t call [controlTextDidEndEditing:](../nscontroltexteditingdelegate/controltextdidendediting%28__%29.md).

## See Also

### Managing the Field Editor

- [currentEditor](currenteditor%28%29.md): Returns the current field editor for the control.
- [validateEditing](validateediting%28%29.md): Validates changes to any user-typed text.
- [editWithFrame:editor:delegate:event:](edit%28withframe_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [endEditing:](endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [selectWithFrame:editor:delegate:start:length:](select%28withframe_editor_delegate_start_length_%29.md): Selects the specified text range in the receiver’s field editor.
