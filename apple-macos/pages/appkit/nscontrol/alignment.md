> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/alignment](https://developer.apple.com/documentation/appkit/nscontrol/alignment)

# alignment (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The alignment mode of the text in the receiver’s cell.

## Declaration

```swift
var alignment: NSTextAlignment { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property can be one of the following constants: `NSLeftTextAlignment`, `NSRightTextAlignment`,`NSCenterTextAlignment`, `NSJustifiedTextAlignment`, or `NSNaturalTextAlignment`. The default value is `NSNaturalTextAlignment`. Setting this property while the cell is currently being edited aborts the edits to change the alignment.

## See Also

### Formatting Text

- [font](font.md): The font used to draw text in the receiver’s cell.
- [lineBreakMode](linebreakmode.md): The line break mode to use for text in the control’s cell.
- [usesSingleLineMode](usessinglelinemode.md): A Boolean value that indicates whether the text in the control’s cell uses single line mode.
- [formatter](formatter.md): The receiver’s formatter.
- [baseWritingDirection](basewritingdirection.md): The initial writing direction used to determine the actual writing direction for text.

# alignment (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The alignment mode of the text in the receiver’s cell.

## Declaration

```objectivec
@property NSTextAlignment alignment;
```

<a id="Discussion"></a>

## Discussion

The value of this property can be one of the following constants: `NSLeftTextAlignment`, `NSRightTextAlignment`,`NSCenterTextAlignment`, `NSJustifiedTextAlignment`, or `NSNaturalTextAlignment`. The default value is `NSNaturalTextAlignment`. Setting this property while the cell is currently being edited aborts the edits to change the alignment.

## See Also

### Formatting Text

- [font](font.md): The font used to draw text in the receiver’s cell.
- [lineBreakMode](linebreakmode.md): The line break mode to use for text in the control’s cell.
- [usesSingleLineMode](usessinglelinemode.md): A Boolean value that indicates whether the text in the control’s cell uses single line mode.
- [setFloatingPointFormat:left:right:](setfloatingpointformat_left_right_.md): Deprecated. Sets the auto-ranging and floating point number format of the receiver’s cell.
- [formatter](formatter.md): The receiver’s formatter.
- [baseWritingDirection](basewritingdirection.md): The initial writing direction used to determine the actual writing direction for text.
