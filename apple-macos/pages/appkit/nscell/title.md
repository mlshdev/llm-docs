> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/title](https://developer.apple.com/documentation/appkit/nscell/title)

# title (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell’s title text.

## Declaration

```swift
var title: String { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the string to display in the cell. Subclasses (such as [NSButtonCell](../nsbuttoncell.md)) may use the title for a different purpose.

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
- [setUpFieldEditorAttributes(\_:)](setupfieldeditorattributes%28__%29.md): Configures the textual and background attributes of the receiver’s field editor.

# title (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell’s title text.

## Declaration

```objectivec
@property (copy) NSString * title;
```

<a id="Discussion"></a>

## Discussion

This property contains the string to display in the cell. Subclasses (such as [NSButtonCell](../nsbuttoncell.md)) may use the title for a different purpose.

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
- [setUpFieldEditorAttributes:](setupfieldeditorattributes%28__%29.md): Configures the textual and background attributes of the receiver’s field editor.
