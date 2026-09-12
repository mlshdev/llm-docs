> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/endediting(_:)](https://developer.apple.com/documentation/appkit/nscell/endediting(_:))

# endEditing(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Ends the editing of text in the receiver using the specified field editor.

## Declaration

```swift
func endEditing(_ textObj: NSText)
```

## Parameters

- `textObj`: The field editor currently handling the editing of the cell’s content.

<a id="Discussion"></a>

## Discussion

Ends any editing of text that began with a call to [edit(withFrame:in:editor:delegate:event:)](edit%28withframe_in_editor_delegate_event_%29.md) or  [select(withFrame:in:editor:delegate:start:length:)](select%28withframe_in_editor_delegate_start_length_%29.md).

## See Also

### Editing and Selecting Text

- [edit(withFrame:in:editor:delegate:event:)](edit%28withframe_in_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [select(withFrame:in:editor:delegate:start:length:)](select%28withframe_in_editor_delegate_start_length_%29.md): Selects the specified text range in the cell’s field editor.
- [sendsActionOnEndEditing](sendsactiononendediting.md): A Boolean value indicating whether the cell’s control object sends its action message when the user finishes editing the cell’s text.
- [wantsNotificationForMarkedText](wantsnotificationformarkedtext.md): A Boolean value indicating whether the cell’s field editor should post text change notifications.
- [fieldEditor(for:)](fieldeditor%28for_%29.md): Returns a custom field editor for editing in the view.
- [usesSingleLineMode](usessinglelinemode.md): A Boolean value indicating whether the cell restricts layout and rendering of text to a single line.

# endEditing: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Ends the editing of text in the receiver using the specified field editor.

## Declaration

```objectivec
- (void) endEditing:(NSText *) textObj;
```

## Parameters

- `textObj`: The field editor currently handling the editing of the cell’s content.

<a id="Discussion"></a>

## Discussion

Ends any editing of text that began with a call to [editWithFrame:inView:editor:delegate:event:](edit%28withframe_in_editor_delegate_event_%29.md) or  [selectWithFrame:inView:editor:delegate:start:length:](select%28withframe_in_editor_delegate_start_length_%29.md).

## See Also

### Editing and Selecting Text

- [editWithFrame:inView:editor:delegate:event:](edit%28withframe_in_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [selectWithFrame:inView:editor:delegate:start:length:](select%28withframe_in_editor_delegate_start_length_%29.md): Selects the specified text range in the cell’s field editor.
- [sendsActionOnEndEditing](sendsactiononendediting.md): A Boolean value indicating whether the cell’s control object sends its action message when the user finishes editing the cell’s text.
- [wantsNotificationForMarkedText](wantsnotificationformarkedtext.md): A Boolean value indicating whether the cell’s field editor should post text change notifications.
- [fieldEditorForView:](fieldeditor%28for_%29.md): Returns a custom field editor for editing in the view.
- [usesSingleLineMode](usessinglelinemode.md): A Boolean value indicating whether the cell restricts layout and rendering of text to a single line.
