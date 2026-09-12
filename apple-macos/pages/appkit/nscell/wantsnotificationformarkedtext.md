> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/wantsnotificationformarkedtext](https://developer.apple.com/documentation/appkit/nscell/wantsnotificationformarkedtext)

# wantsNotificationForMarkedText (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell’s field editor should post text change notifications.

## Declaration

```swift
var wantsNotificationForMarkedText: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the field editor should post text notification changes while editing marked text. When the value is NO, the field editor should delay notifications until the marked text is confirmed.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Subclasses can override the property and change the value as appropriate.

## See Also

### Editing and Selecting Text

- [edit(withFrame:in:editor:delegate:event:)](edit%28withframe_in_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [select(withFrame:in:editor:delegate:start:length:)](select%28withframe_in_editor_delegate_start_length_%29.md): Selects the specified text range in the cell’s field editor.
- [sendsActionOnEndEditing](sendsactiononendediting.md): A Boolean value indicating whether the cell’s control object sends its action message when the user finishes editing the cell’s text.
- [endEditing(\_:)](endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [fieldEditor(for:)](fieldeditor%28for_%29.md): Returns a custom field editor for editing in the view.
- [usesSingleLineMode](usessinglelinemode.md): A Boolean value indicating whether the cell restricts layout and rendering of text to a single line.

# wantsNotificationForMarkedText (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell’s field editor should post text change notifications.

## Declaration

```objectivec
@property (readonly) BOOL wantsNotificationForMarkedText;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the field editor should post text notification changes while editing marked text. When the value is NO, the field editor should delay notifications until the marked text is confirmed.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Subclasses can override the property and change the value as appropriate.

## See Also

### Editing and Selecting Text

- [editWithFrame:inView:editor:delegate:event:](edit%28withframe_in_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [selectWithFrame:inView:editor:delegate:start:length:](select%28withframe_in_editor_delegate_start_length_%29.md): Selects the specified text range in the cell’s field editor.
- [sendsActionOnEndEditing](sendsactiononendediting.md): A Boolean value indicating whether the cell’s control object sends its action message when the user finishes editing the cell’s text.
- [endEditing:](endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [fieldEditorForView:](fieldeditor%28for_%29.md): Returns a custom field editor for editing in the view.
- [usesSingleLineMode](usessinglelinemode.md): A Boolean value indicating whether the cell restricts layout and rendering of text to a single line.
