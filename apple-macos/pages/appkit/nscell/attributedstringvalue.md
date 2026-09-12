> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/attributedstringvalue](https://developer.apple.com/documentation/appkit/nscell/attributedstringvalue)

# attributedStringValue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell’s value as an attributed string.

## Declaration

```swift
@NSCopying var attributedStringValue: NSAttributedString { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to get the value of the cell interpreted as an attributed string. The textual attributes included in the string are the default paragraph style, the cell’s font and alignment, and whether the cell is enabled and scrollable.

When setting the value of this property, if the cell has a formatter, but the formatter does not understand the attributed string, the formatter marks the cell’s object as invalid. If the receiver is not a text-type cell, it is converted to one before the value is set.

If you use a class that has an [attributedStringValue](attributedstringvalue.md) property, the cell gets the string from that property instead of using the [stringValue](stringvalue.md) property.

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
- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value indicating whether the cell allows the editing of its content’s text attributes by the user.
- [importsGraphics](importsgraphics.md): A Boolean value indicating whether the cell supports the importation of images into its text.
- [setUpFieldEditorAttributes(\_:)](setupfieldeditorattributes%28__%29.md): Configures the textual and background attributes of the receiver’s field editor.
- [title](title.md): The cell’s title text.

# attributedStringValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell’s value as an attributed string.

## Declaration

```objectivec
@property (copy) NSAttributedString * attributedStringValue;
```

<a id="Discussion"></a>

## Discussion

Use this property to get the value of the cell interpreted as an attributed string. The textual attributes included in the string are the default paragraph style, the cell’s font and alignment, and whether the cell is enabled and scrollable.

When setting the value of this property, if the cell has a formatter, but the formatter does not understand the attributed string, the formatter marks the cell’s object as invalid. If the receiver is not a text-type cell, it is converted to one before the value is set.

If you use a class that has an [attributedStringValue](attributedstringvalue.md) property, the cell gets the string from that property instead of using the [stringValue](stringvalue.md) property.

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
- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value indicating whether the cell allows the editing of its content’s text attributes by the user.
- [importsGraphics](importsgraphics.md): A Boolean value indicating whether the cell supports the importation of images into its text.
- [setUpFieldEditorAttributes:](setupfieldeditorattributes%28__%29.md): Configures the textual and background attributes of the receiver’s field editor.
- [title](title.md): The cell’s title text.
