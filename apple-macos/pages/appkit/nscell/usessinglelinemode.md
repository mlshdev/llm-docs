> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/usessinglelinemode](https://developer.apple.com/documentation/appkit/nscell/usessinglelinemode)

# usesSingleLineMode (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value indicating whether the cell restricts layout and rendering of text to a single line.

## Declaration

```swift
var usesSingleLineMode: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), text layout and rendering is restricted to a single line. In addition, the cell ignores the return value from [wraps](wraps.md), interprets [NSLineBreakMode.byWordWrapping](../nslinebreakmode/bywordwrapping.md) and [NSLineBreakMode.byCharWrapping](../nslinebreakmode/bycharwrapping.md) returned by [lineBreakMode](linebreakmode.md) as [NSLineBreakMode.byClipping](../nslinebreakmode/byclipping.md), and configures the field editor to ignore key binding commands that insert paragraph and line separators.

The field editor bound to a single-line cell filters out paragraph and line separator insertion from user actions. Cells in single-line mode use the fixed baseline layout. The text baseline position is determined solely by the control size regardless of content font style or size.

## See Also

### Editing and Selecting Text

- [edit(withFrame:in:editor:delegate:event:)](edit%28withframe_in_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [select(withFrame:in:editor:delegate:start:length:)](select%28withframe_in_editor_delegate_start_length_%29.md): Selects the specified text range in the cell’s field editor.
- [sendsActionOnEndEditing](sendsactiononendediting.md): A Boolean value indicating whether the cell’s control object sends its action message when the user finishes editing the cell’s text.
- [endEditing(\_:)](endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [wantsNotificationForMarkedText](wantsnotificationformarkedtext.md): A Boolean value indicating whether the cell’s field editor should post text change notifications.
- [fieldEditor(for:)](fieldeditor%28for_%29.md): Returns a custom field editor for editing in the view.

# usesSingleLineMode (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value indicating whether the cell restricts layout and rendering of text to a single line.

## Declaration

```objectivec
@property BOOL usesSingleLineMode;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), text layout and rendering is restricted to a single line. In addition, the cell ignores the return value from [wraps](wraps.md), interprets [NSLineBreakByWordWrapping](../nslinebreakmode/bywordwrapping.md) and [NSLineBreakByCharWrapping](../nslinebreakmode/bycharwrapping.md) returned by [lineBreakMode](linebreakmode.md) as [NSLineBreakByClipping](../nslinebreakmode/byclipping.md), and configures the field editor to ignore key binding commands that insert paragraph and line separators.

The field editor bound to a single-line cell filters out paragraph and line separator insertion from user actions. Cells in single-line mode use the fixed baseline layout. The text baseline position is determined solely by the control size regardless of content font style or size.

## See Also

### Editing and Selecting Text

- [editWithFrame:inView:editor:delegate:event:](edit%28withframe_in_editor_delegate_event_%29.md): Begins editing of the receiver’s text using the specified field editor.
- [selectWithFrame:inView:editor:delegate:start:length:](select%28withframe_in_editor_delegate_start_length_%29.md): Selects the specified text range in the cell’s field editor.
- [sendsActionOnEndEditing](sendsactiononendediting.md): A Boolean value indicating whether the cell’s control object sends its action message when the user finishes editing the cell’s text.
- [endEditing:](endediting%28__%29.md): Ends the editing of text in the receiver using the specified field editor.
- [wantsNotificationForMarkedText](wantsnotificationformarkedtext.md): A Boolean value indicating whether the cell’s field editor should post text change notifications.
- [fieldEditorForView:](fieldeditor%28for_%29.md): Returns a custom field editor for editing in the view.
