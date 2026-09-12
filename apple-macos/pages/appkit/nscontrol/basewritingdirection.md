> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/basewritingdirection](https://developer.apple.com/documentation/appkit/nscontrol/basewritingdirection)

# baseWritingDirection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The initial writing direction used to determine the actual writing direction for text.

## Declaration

```swift
var baseWritingDirection: NSWritingDirection { get set }
```

<a id="Discussion"></a>

## Discussion

This property can have one of the following values: `NSWritingDirectionNatural`, `NSWritingDirectionLeftToRight`, or `NSWritingDirectionRightToLeft`. The default value is `NSWritingDirectionNatural`. The text system uses this value as a hint for calculating the actual direction for displaying Unicode characters. You should not need to access this value directly. If you know the base writing direction of the text you are rendering, you can set this property to specify that direction to the text system.

## See Also

### Formatting Text

- [alignment](alignment.md): The alignment mode of the text in the receiver’s cell.
- [font](font.md): The font used to draw text in the receiver’s cell.
- [lineBreakMode](linebreakmode.md): The line break mode to use for text in the control’s cell.
- [usesSingleLineMode](usessinglelinemode.md): A Boolean value that indicates whether the text in the control’s cell uses single line mode.
- [formatter](formatter.md): The receiver’s formatter.

# baseWritingDirection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The initial writing direction used to determine the actual writing direction for text.

## Declaration

```objectivec
@property NSWritingDirection baseWritingDirection;
```

<a id="Discussion"></a>

## Discussion

This property can have one of the following values: `NSWritingDirectionNatural`, `NSWritingDirectionLeftToRight`, or `NSWritingDirectionRightToLeft`. The default value is `NSWritingDirectionNatural`. The text system uses this value as a hint for calculating the actual direction for displaying Unicode characters. You should not need to access this value directly. If you know the base writing direction of the text you are rendering, you can set this property to specify that direction to the text system.

## See Also

### Formatting Text

- [alignment](alignment.md): The alignment mode of the text in the receiver’s cell.
- [font](font.md): The font used to draw text in the receiver’s cell.
- [lineBreakMode](linebreakmode.md): The line break mode to use for text in the control’s cell.
- [usesSingleLineMode](usessinglelinemode.md): A Boolean value that indicates whether the text in the control’s cell uses single line mode.
- [setFloatingPointFormat:left:right:](setfloatingpointformat_left_right_.md): Deprecated. Sets the auto-ranging and floating point number format of the receiver’s cell.
- [formatter](formatter.md): The receiver’s formatter.
