> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/sendsactiononendediting](https://developer.apple.com/documentation/appkit/nscell/sendsactiononendediting)

# sendsActionOnEndEditing (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell’s control object sends its action message when the user finishes editing the cell’s text.

## Declaration

```swift
var sendsActionOnEndEditing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the control sends its action message when editing is complete. Editing is complete when the user does one of the following:

- Presses the Return key
- Presses the Tab key to move out of the field
- Clicks another text field

When the value is [false](https://developer.apple.com/documentation/swift/false), the control sends its action message only when the user presses the Return key.

## See Also

### Editing and Selecting Text

- [edit(withFrame:in:editor:delegate:event:)](edit%28withframe_in_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [select(withFrame:in:editor:delegate:start:length:)](select%28withframe_in_editor_delegate_start_length_%29.md): Selects the specified text range in the cell’s field editor.
- [endEditing(\_:)](endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [wantsNotificationForMarkedText](wantsnotificationformarkedtext.md): A Boolean value indicating whether the cell’s field editor should post text change notifications.
- [fieldEditor(for:)](fieldeditor%28for_%29.md): Returns a custom field editor for editing in the view.
- [usesSingleLineMode](usessinglelinemode.md): A Boolean value indicating whether the cell restricts layout and rendering of text to a single line.

# sendsActionOnEndEditing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell’s control object sends its action message when the user finishes editing the cell’s text.

## Declaration

```objectivec
@property BOOL sendsActionOnEndEditing;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the control sends its action message when editing is complete. Editing is complete when the user does one of the following:

- Presses the Return key
- Presses the Tab key to move out of the field
- Clicks another text field

When the value is [false](https://developer.apple.com/documentation/swift/false), the control sends its action message only when the user presses the Return key.

## See Also

### Editing and Selecting Text

- [editWithFrame:inView:editor:delegate:event:](edit%28withframe_in_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [selectWithFrame:inView:editor:delegate:start:length:](select%28withframe_in_editor_delegate_start_length_%29.md): Selects the specified text range in the cell’s field editor.
- [endEditing:](endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [wantsNotificationForMarkedText](wantsnotificationformarkedtext.md): A Boolean value indicating whether the cell’s field editor should post text change notifications.
- [fieldEditorForView:](fieldeditor%28for_%29.md): Returns a custom field editor for editing in the view.
- [usesSingleLineMode](usessinglelinemode.md): A Boolean value indicating whether the cell restricts layout and rendering of text to a single line.
