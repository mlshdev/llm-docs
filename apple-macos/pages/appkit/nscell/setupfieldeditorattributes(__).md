> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/setupfieldeditorattributes(_:)](https://developer.apple.com/documentation/appkit/nscell/setupfieldeditorattributes(_:))

# setUpFieldEditorAttributes(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Configures the textual and background attributes of the receiver’s field editor.

## Declaration

```swift
func setUpFieldEditorAttributes(_ textObj: NSText) -> NSText
```

## Parameters

- `textObj`: The field editor to configure.

<a id="return-value"></a>

## Return Value

The configured field editor.

<a id="Discussion"></a>

## Discussion

If the receiver is disabled, this method sets the text color to dark gray; otherwise the method sets it to the default color. If the receiver has a bezeled border, this method sets the background to the default color for text backgrounds; otherwise, the method sets it to the color of the receiver’s `NSControl` object.

You should not use this method to substitute a new field editor. [setUpFieldEditorAttributes(\_:)](setupfieldeditorattributes%28__%29.md) is intended to modify the attributes of the text object (that is, the field editor) passed into it and return that text object. If you want to substitute your own field editor, use the [fieldEditor(\_:for:)](../nswindow/fieldeditor%28__for_%29.md) method or the [windowWillReturnFieldEditor(\_:to:)](../nswindowdelegate/windowwillreturnfieldeditor%28__to_%29.md) delegate method of `NSWindow`.

## See Also

### Modifying Textual Attributes

- [isEditable](iseditable.md): A Boolean value indicating whether the cell is editable.
- [isSelectable](isselectable.md): A Boolean value indicating whether the cell’s text can be selected.
- [isScrollable](isscrollable.md): A Boolean value indicating whether excess text scrolls past the cell’s bounds.
- [alignment](alignment.md): The alignment of the cell’s text.
- [font](font.md): The font that the cell uses to display text.
- [lineBreakMode](linebreakmode.md): The line break mode to use when drawing text in the cell.
- [truncatesLastVisibleLine](truncateslastvisibleline.md): A Boolean value indicating whether the cell truncates text that does not fit within the cell’s bounds.
- [wraps](wraps.md): A Boolean value indicating whether the cell wraps text whose length that exceeds the cell’s frame.
- [baseWritingDirection](basewritingdirection.md): The initial writing direction used to determine the actual writing direction for text.
- [attributedStringValue](attributedstringvalue.md): The cell’s value as an attributed string.
- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value indicating whether the cell allows the editing of its content’s text attributes by the user.
- [importsGraphics](importsgraphics.md): A Boolean value indicating whether the cell supports the importation of images into its text.
- [title](title.md): The cell’s title text.

# setUpFieldEditorAttributes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Configures the textual and background attributes of the receiver’s field editor.

## Declaration

```objectivec
- (NSText *) setUpFieldEditorAttributes:(NSText *) textObj;
```

## Parameters

- `textObj`: The field editor to configure.

<a id="return-value"></a>

## Return Value

The configured field editor.

<a id="Discussion"></a>

## Discussion

If the receiver is disabled, this method sets the text color to dark gray; otherwise the method sets it to the default color. If the receiver has a bezeled border, this method sets the background to the default color for text backgrounds; otherwise, the method sets it to the color of the receiver’s `NSControl` object.

You should not use this method to substitute a new field editor. [setUpFieldEditorAttributes:](setupfieldeditorattributes%28__%29.md) is intended to modify the attributes of the text object (that is, the field editor) passed into it and return that text object. If you want to substitute your own field editor, use the [fieldEditor:forObject:](../nswindow/fieldeditor%28__for_%29.md) method or the [windowWillReturnFieldEditor:toObject:](../nswindowdelegate/windowwillreturnfieldeditor%28__to_%29.md) delegate method of `NSWindow`.

## See Also

### Modifying Textual Attributes

- [editable](iseditable.md): A Boolean value indicating whether the cell is editable.
- [selectable](isselectable.md): A Boolean value indicating whether the cell’s text can be selected.
- [scrollable](isscrollable.md): A Boolean value indicating whether excess text scrolls past the cell’s bounds.
- [alignment](alignment.md): The alignment of the cell’s text.
- [font](font.md): The font that the cell uses to display text.
- [lineBreakMode](linebreakmode.md): The line break mode to use when drawing text in the cell.
- [truncatesLastVisibleLine](truncateslastvisibleline.md): A Boolean value indicating whether the cell truncates text that does not fit within the cell’s bounds.
- [wraps](wraps.md): A Boolean value indicating whether the cell wraps text whose length that exceeds the cell’s frame.
- [baseWritingDirection](basewritingdirection.md): The initial writing direction used to determine the actual writing direction for text.
- [attributedStringValue](attributedstringvalue.md): The cell’s value as an attributed string.
- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value indicating whether the cell allows the editing of its content’s text attributes by the user.
- [importsGraphics](importsgraphics.md): A Boolean value indicating whether the cell supports the importation of images into its text.
- [title](title.md): The cell’s title text.
