> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/setfloatingpointformat:left:right:](https://developer.apple.com/documentation/appkit/nscontrol/setfloatingpointformat:left:right:)

# setFloatingPointFormat:left:right:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.0)

Sets the auto-ranging and floating point number format of the receiver’s cell.

## Declaration

```objectivec
- (void) setFloatingPointFormat:(BOOL) autoRange left:(NSUInteger) leftDigits right:(NSUInteger) rightDigits;
```

## Parameters

- `autoRange`: [true](https://developer.apple.com/documentation/swift/true) to enable auto-ranging; otherwise, [false](https://developer.apple.com/documentation/swift/false).
- `leftDigits`: The number of digits to display to the left of the decimal point.
- `rightDigits`: The number of digits to display to the right of the decimal point.

<a id="Discussion"></a>

## Discussion

For more information about auto-ranging and how it works, see the description of this method in the [NSCell](../nscell.md) class specification. If the cell is being edited, the current edits are discarded and the cell’s interior is redrawn.

> **Note**

>  This method is being deprecated in favor of a new class of formatter objects. For more information, see [NSFormatter](https://developer.apple.com/documentation/foundation/formatter). This documentation is provided only for developers who need to modify older applications.

## See Also

### Related Documentation

- [setFloatingPointFormat:left:right:](../nscell/setfloatingpointformat_left_right_.md): Deprecated. Sets the auto-ranging and floating point number format of the receiver’s cell.

### Formatting Text

- [alignment](alignment.md): The alignment mode of the text in the receiver’s cell.
- [font](font.md): The font used to draw text in the receiver’s cell.
- [lineBreakMode](linebreakmode.md): The line break mode to use for text in the control’s cell.
- [usesSingleLineMode](usessinglelinemode.md): A Boolean value that indicates whether the text in the control’s cell uses single line mode.
- [formatter](formatter.md): The receiver’s formatter.
- [baseWritingDirection](basewritingdirection.md): The initial writing direction used to determine the actual writing direction for text.
