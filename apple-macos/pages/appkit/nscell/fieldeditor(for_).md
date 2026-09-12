> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/fieldeditor(for:)](https://developer.apple.com/documentation/appkit/nscell/fieldeditor(for:))

# fieldEditor(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns a custom field editor for editing in the view.

## Declaration

```swift
func fieldEditor(for controlView: NSView) -> NSTextView?
```

## Parameters

- `controlView`: The view containing cells that require a custom field editor.

<a id="return-value"></a>

## Return Value

A custom field editor. The field editor must have [isFieldEditor](../nstextview/isfieldeditor.md) set to [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

This is an override point for `NSCell` subclasses designed to use their own custom field editors. This message is sent to the selected cell of `aControlView` using the [NSWindow](../nswindow.md) method in [fieldEditor(\_:for:)](../nswindow/fieldeditor%28__for_%29.md).

Returning non-`nil` from this method indicates skipping the standard field editor querying processes including [windowWillReturnFieldEditor(\_:to:)](../nswindowdelegate/windowwillreturnfieldeditor%28__to_%29.md) delegation.

The default implementation returns `nil`.

## See Also

### Editing and Selecting Text

- [edit(withFrame:in:editor:delegate:event:)](edit%28withframe_in_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [select(withFrame:in:editor:delegate:start:length:)](select%28withframe_in_editor_delegate_start_length_%29.md): Selects the specified text range in the cell’s field editor.
- [sendsActionOnEndEditing](sendsactiononendediting.md): A Boolean value indicating whether the cell’s control object sends its action message when the user finishes editing the cell’s text.
- [endEditing(\_:)](endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [wantsNotificationForMarkedText](wantsnotificationformarkedtext.md): A Boolean value indicating whether the cell’s field editor should post text change notifications.
- [usesSingleLineMode](usessinglelinemode.md): A Boolean value indicating whether the cell restricts layout and rendering of text to a single line.

# fieldEditorForView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns a custom field editor for editing in the view.

## Declaration

```objectivec
- (NSTextView *) fieldEditorForView:(NSView *) controlView;
```

## Parameters

- `controlView`: The view containing cells that require a custom field editor.

<a id="return-value"></a>

## Return Value

A custom field editor. The field editor must have [fieldEditor](../nstextview/isfieldeditor.md) set to [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

This is an override point for `NSCell` subclasses designed to use their own custom field editors. This message is sent to the selected cell of `aControlView` using the [NSWindow](../nswindow.md) method in [fieldEditor:forObject:](../nswindow/fieldeditor%28__for_%29.md).

Returning non-`nil` from this method indicates skipping the standard field editor querying processes including [windowWillReturnFieldEditor:toObject:](../nswindowdelegate/windowwillreturnfieldeditor%28__to_%29.md) delegation.

The default implementation returns `nil`.

## See Also

### Editing and Selecting Text

- [editWithFrame:inView:editor:delegate:event:](edit%28withframe_in_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [selectWithFrame:inView:editor:delegate:start:length:](select%28withframe_in_editor_delegate_start_length_%29.md): Selects the specified text range in the cell’s field editor.
- [sendsActionOnEndEditing](sendsactiononendediting.md): A Boolean value indicating whether the cell’s control object sends its action message when the user finishes editing the cell’s text.
- [endEditing:](endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [wantsNotificationForMarkedText](wantsnotificationformarkedtext.md): A Boolean value indicating whether the cell’s field editor should post text change notifications.
- [usesSingleLineMode](usessinglelinemode.md): A Boolean value indicating whether the cell restricts layout and rendering of text to a single line.
