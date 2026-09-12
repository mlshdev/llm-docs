> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/importsgraphics](https://developer.apple.com/documentation/appkit/nscell/importsgraphics)

# importsGraphics (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell supports the importation of images into its text.

## Declaration

```swift
var importsGraphics: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the cell can import images into its text and support the RTFD text format.

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
- [setUpFieldEditorAttributes(\_:)](setupfieldeditorattributes%28__%29.md): Configures the textual and background attributes of the receiver’s field editor.
- [title](title.md): The cell’s title text.

# importsGraphics (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell supports the importation of images into its text.

## Declaration

```objectivec
@property BOOL importsGraphics;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the cell can import images into its text and support the RTFD text format.

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
- [setUpFieldEditorAttributes:](setupfieldeditorattributes%28__%29.md): Configures the textual and background attributes of the receiver’s field editor.
- [title](title.md): The cell’s title text.
