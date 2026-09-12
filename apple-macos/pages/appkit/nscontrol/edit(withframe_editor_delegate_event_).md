> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/edit(withframe:editor:delegate:event:)](https://developer.apple.com/documentation/appkit/nscontrol/edit(withframe:editor:delegate:event:))

# edit(withFrame:editor:delegate:event:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Begins editing of the receiver’s text using the specified field editor.

## Declaration

```swift
func edit(withFrame rect: NSRect, editor textObj: NSText, delegate: Any?, event: NSEvent)
```

## Parameters

- `rect`: The bounding rectangle of the control’s cell.
- `textObj`: The field editor to use.
- `delegate`: The object to use as a delegate for the field editor. This delegate object receives various [NSText](../nstext.md) delegation and notification methods during the course of editing the cell’s contents.
- `event`: The [NSLeftMouseDown](../nsleftmousedown.md) event that initiated the editing behavior.

<a id="Discussion"></a>

## Discussion

For a receiver that is a control with editable text (such as an [NSTextField](../nstextfield.md) object), the field editor is sized to `aRect` and is then activated and editing begins. It’s the responsibility of the delegate to end editing when responding to [control(\_:textShouldEndEditing:)](../nscontroltexteditingdelegate/control%28__textshouldendediting_%29.md). Upon ending the editing session, the delegate should remove any data from the field editor.

## See Also

### Managing the Field Editor

- [abortEditing()](abortediting%28%29.md): Terminates the current editing operation and discards any edited text.
- [currentEditor()](currenteditor%28%29.md): Returns the current field editor for the control.
- [validateEditing()](validateediting%28%29.md): Validates changes to any user-typed text.
- [endEditing(\_:)](endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [select(withFrame:editor:delegate:start:length:)](select%28withframe_editor_delegate_start_length_%29.md): Selects the specified text range in the receiver’s field editor.

# editWithFrame:editor:delegate:event: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Begins editing of the receiver’s text using the specified field editor.

## Declaration

```objectivec
- (void) editWithFrame:(NSRect) rect editor:(NSText *) textObj delegate:(id) delegate event:(NSEvent *) event;
```

## Parameters

- `rect`: The bounding rectangle of the control’s cell.
- `textObj`: The field editor to use.
- `delegate`: The object to use as a delegate for the field editor. This delegate object receives various [NSText](../nstext.md) delegation and notification methods during the course of editing the cell’s contents.
- `event`: The [NSLeftMouseDown](../nsleftmousedown.md) event that initiated the editing behavior.

<a id="Discussion"></a>

## Discussion

For a receiver that is a control with editable text (such as an [NSTextField](../nstextfield.md) object), the field editor is sized to `aRect` and is then activated and editing begins. It’s the responsibility of the delegate to end editing when responding to [control:textShouldEndEditing:](../nscontroltexteditingdelegate/control%28__textshouldendediting_%29.md). Upon ending the editing session, the delegate should remove any data from the field editor.

## See Also

### Managing the Field Editor

- [abortEditing](abortediting%28%29.md): Terminates the current editing operation and discards any edited text.
- [currentEditor](currenteditor%28%29.md): Returns the current field editor for the control.
- [validateEditing](validateediting%28%29.md): Validates changes to any user-typed text.
- [endEditing:](endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [selectWithFrame:editor:delegate:start:length:](select%28withframe_editor_delegate_start_length_%29.md): Selects the specified text range in the receiver’s field editor.
