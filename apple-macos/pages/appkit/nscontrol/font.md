> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/font](https://developer.apple.com/documentation/appkit/nscontrol/font)

# font (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The font used to draw text in the receiver’s cell.

## Declaration

```swift
@NSCopying var font: NSFont? { get set }
```

<a id="Discussion"></a>

## Discussion

If the cell is being edited, setting this property causes the text in the cell to be redrawn in the new font, and the cell’s editor (the `NSText` object used globally for editing) is updated with the new font object.

## See Also

### Formatting Text

- [alignment](alignment.md): The alignment mode of the text in the receiver’s cell.
- [lineBreakMode](linebreakmode.md): The line break mode to use for text in the control’s cell.
- [usesSingleLineMode](usessinglelinemode.md): A Boolean value that indicates whether the text in the control’s cell uses single line mode.
- [formatter](formatter.md): The receiver’s formatter.
- [baseWritingDirection](basewritingdirection.md): The initial writing direction used to determine the actual writing direction for text.

# font (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The font used to draw text in the receiver’s cell.

## Declaration

```objectivec
@property (copy, nullable) NSFont * font;
```

<a id="Discussion"></a>

## Discussion

If the cell is being edited, setting this property causes the text in the cell to be redrawn in the new font, and the cell’s editor (the `NSText` object used globally for editing) is updated with the new font object.

## See Also

### Formatting Text

- [alignment](alignment.md): The alignment mode of the text in the receiver’s cell.
- [lineBreakMode](linebreakmode.md): The line break mode to use for text in the control’s cell.
- [usesSingleLineMode](usessinglelinemode.md): A Boolean value that indicates whether the text in the control’s cell uses single line mode.
- [setFloatingPointFormat:left:right:](setfloatingpointformat_left_right_.md): Deprecated. Sets the auto-ranging and floating point number format of the receiver’s cell.
- [formatter](formatter.md): The receiver’s formatter.
- [baseWritingDirection](basewritingdirection.md): The initial writing direction used to determine the actual writing direction for text.
