> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/isselectable](https://developer.apple.com/documentation/appkit/nscell/isselectable)

# isSelectable (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell’s text can be selected.

## Declaration

```swift
var isSelectable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the cell’s text is selectable. Setting the value of this property to [false](https://developer.apple.com/documentation/swift/false) also sets the [isEditable](iseditable.md) property to [false](https://developer.apple.com/documentation/swift/false). If the value of this cell is [true](https://developer.apple.com/documentation/swift/true), the value in the [isEditable](iseditable.md) property is not affected.

## See Also

### Modifying Textual Attributes

- [isEditable](iseditable.md): A Boolean value indicating whether the cell is editable.
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
- [title](title.md): The cell’s title text.

# selectable (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell’s text can be selected.

## Declaration

```objectivec
@property (getter=isSelectable) BOOL selectable;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the cell’s text is selectable. Setting the value of this property to [false](https://developer.apple.com/documentation/swift/false) also sets the [editable](iseditable.md) property to [false](https://developer.apple.com/documentation/swift/false). If the value of this cell is [true](https://developer.apple.com/documentation/swift/true), the value in the [editable](iseditable.md) property is not affected.

## See Also

### Modifying Textual Attributes

- [editable](iseditable.md): A Boolean value indicating whether the cell is editable.
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
- [title](title.md): The cell’s title text.
