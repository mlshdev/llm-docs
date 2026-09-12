> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/select(withframe:in:editor:delegate:start:length:)](https://developer.apple.com/documentation/appkit/nscell/select(withframe:in:editor:delegate:start:length:))

# select(withFrame:in:editor:delegate:start:length:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the specified text range in the cell’s field editor.

## Declaration

```swift
func select(withFrame rect: NSRect, in controlView: NSView, editor textObj: NSText, delegate: Any?, start selStart: Int, length selLength: Int)
```

## Parameters

- `rect`: The bounding rectangle of the cell.
- `controlView`: The control that manages the cell.
- `textObj`: The field editor to use for editing the cell.
- `delegate`: The object to use as a delegate for the field editor (`textObj` parameter). This delegate object receives various `NSText` delegation and notification methods during the course of editing the cell’s contents.
- `selStart`: The start of the text selection.
- `selLength`: The length of the text range.

<a id="Discussion"></a>

## Discussion

This method is similar to [edit(withFrame:in:editor:delegate:event:)](edit%28withframe_in_editor_delegate_event_%29.md), except that it can be invoked in any situation, not only on a mouse-down event. This method returns without doing anything if `controlView`, `textObj`, or the receiver is `nil`, or if the receiver has no font set for it.

## See Also

### Editing and Selecting Text

- [edit(withFrame:in:editor:delegate:event:)](edit%28withframe_in_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [sendsActionOnEndEditing](sendsactiononendediting.md): A Boolean value indicating whether the cell’s control object sends its action message when the user finishes editing the cell’s text.
- [endEditing(\_:)](endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [wantsNotificationForMarkedText](wantsnotificationformarkedtext.md): A Boolean value indicating whether the cell’s field editor should post text change notifications.
- [fieldEditor(for:)](fieldeditor%28for_%29.md): Returns a custom field editor for editing in the view.
- [usesSingleLineMode](usessinglelinemode.md): A Boolean value indicating whether the cell restricts layout and rendering of text to a single line.

# selectWithFrame:inView:editor:delegate:start:length: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the specified text range in the cell’s field editor.

## Declaration

```objectivec
- (void) selectWithFrame:(NSRect) rect inView:(NSView *) controlView editor:(NSText *) textObj delegate:(id) delegate start:(NSInteger) selStart length:(NSInteger) selLength;
```

## Parameters

- `rect`: The bounding rectangle of the cell.
- `controlView`: The control that manages the cell.
- `textObj`: The field editor to use for editing the cell.
- `delegate`: The object to use as a delegate for the field editor (`textObj` parameter). This delegate object receives various `NSText` delegation and notification methods during the course of editing the cell’s contents.
- `selStart`: The start of the text selection.
- `selLength`: The length of the text range.

<a id="Discussion"></a>

## Discussion

This method is similar to [editWithFrame:inView:editor:delegate:event:](edit%28withframe_in_editor_delegate_event_%29.md), except that it can be invoked in any situation, not only on a mouse-down event. This method returns without doing anything if `controlView`, `textObj`, or the receiver is `nil`, or if the receiver has no font set for it.

## See Also

### Editing and Selecting Text

- [editWithFrame:inView:editor:delegate:event:](edit%28withframe_in_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [sendsActionOnEndEditing](sendsactiononendediting.md): A Boolean value indicating whether the cell’s control object sends its action message when the user finishes editing the cell’s text.
- [endEditing:](endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [wantsNotificationForMarkedText](wantsnotificationformarkedtext.md): A Boolean value indicating whether the cell’s field editor should post text change notifications.
- [fieldEditorForView:](fieldeditor%28for_%29.md): Returns a custom field editor for editing in the view.
- [usesSingleLineMode](usessinglelinemode.md): A Boolean value indicating whether the cell restricts layout and rendering of text to a single line.
