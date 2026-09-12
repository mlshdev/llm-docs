> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/edit(withframe:in:editor:delegate:event:)](https://developer.apple.com/documentation/appkit/nscell/edit(withframe:in:editor:delegate:event:))

# edit(withFrame:in:editor:delegate:event:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Begins editing of the receiver’s text using the specified field editor.

## Declaration

```swift
func edit(withFrame rect: NSRect, in controlView: NSView, editor textObj: NSText, delegate: Any?, event: NSEvent?)
```

## Parameters

- `rect`: The bounding rectangle of the cell.
- `controlView`: The control that manages the cell.
- `textObj`: The field editor to use for editing the cell.
- `delegate`: The object to use as a delegate for the field editor (`textObj` parameter). This delegate object receives various `NSText` delegation and notification methods during the course of editing the cell’s contents.
- `event`: The `NSLeftMouseDown` event that initiated the editing behavior.

<a id="Discussion"></a>

## Discussion

If the receiver isn’t a text-type `NSCell` object, no editing is performed. Otherwise, the field editor (`textObj`) is sized to `aRect` and its superview is set to `controlView`, so it exactly covers the receiver. The field editor is then activated and editing begins. It’s the responsibility of the delegate to end editing when responding to [textShouldEndEditing(\_:)](../nstextdelegate/textshouldendediting%28__%29.md). Upon ending the editing session, the delegate should remove any data from the field editor.

## See Also

### Editing and Selecting Text

- [select(withFrame:in:editor:delegate:start:length:)](select%28withframe_in_editor_delegate_start_length_%29.md): Selects the specified text range in the cell’s field editor.
- [sendsActionOnEndEditing](sendsactiononendediting.md): A Boolean value indicating whether the cell’s control object sends its action message when the user finishes editing the cell’s text.
- [endEditing(\_:)](endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [wantsNotificationForMarkedText](wantsnotificationformarkedtext.md): A Boolean value indicating whether the cell’s field editor should post text change notifications.
- [fieldEditor(for:)](fieldeditor%28for_%29.md): Returns a custom field editor for editing in the view.
- [usesSingleLineMode](usessinglelinemode.md): A Boolean value indicating whether the cell restricts layout and rendering of text to a single line.

# editWithFrame:inView:editor:delegate:event: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Begins editing of the receiver’s text using the specified field editor.

## Declaration

```objectivec
- (void) editWithFrame:(NSRect) rect inView:(NSView *) controlView editor:(NSText *) textObj delegate:(id) delegate event:(NSEvent *) event;
```

## Parameters

- `rect`: The bounding rectangle of the cell.
- `controlView`: The control that manages the cell.
- `textObj`: The field editor to use for editing the cell.
- `delegate`: The object to use as a delegate for the field editor (`textObj` parameter). This delegate object receives various `NSText` delegation and notification methods during the course of editing the cell’s contents.
- `event`: The `NSLeftMouseDown` event that initiated the editing behavior.

<a id="Discussion"></a>

## Discussion

If the receiver isn’t a text-type `NSCell` object, no editing is performed. Otherwise, the field editor (`textObj`) is sized to `aRect` and its superview is set to `controlView`, so it exactly covers the receiver. The field editor is then activated and editing begins. It’s the responsibility of the delegate to end editing when responding to [textShouldEndEditing:](../nstextdelegate/textshouldendediting%28__%29.md). Upon ending the editing session, the delegate should remove any data from the field editor.

## See Also

### Editing and Selecting Text

- [selectWithFrame:inView:editor:delegate:start:length:](select%28withframe_in_editor_delegate_start_length_%29.md): Selects the specified text range in the cell’s field editor.
- [sendsActionOnEndEditing](sendsactiononendediting.md): A Boolean value indicating whether the cell’s control object sends its action message when the user finishes editing the cell’s text.
- [endEditing:](endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [wantsNotificationForMarkedText](wantsnotificationformarkedtext.md): A Boolean value indicating whether the cell’s field editor should post text change notifications.
- [fieldEditorForView:](fieldeditor%28for_%29.md): Returns a custom field editor for editing in the view.
- [usesSingleLineMode](usessinglelinemode.md): A Boolean value indicating whether the cell restricts layout and rendering of text to a single line.
