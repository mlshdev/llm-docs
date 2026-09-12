> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/settextcolor(_:range:)](https://developer.apple.com/documentation/appkit/nstext/settextcolor(_:range:))

# setTextColor(\_:range:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the text color of characters within the specified range to the specified color.

## Declaration

```swift
func setTextColor(_ color: NSColor?, range: NSRange)
```

<a id="Discussion"></a>

## Discussion

Removes the text color attribute if `color` is `nil`. This method applies only to rich text objects.

This method does not include undo support by default. Clients must invoke [shouldChangeText(inRanges:replacementStrings:)](../nstextview/shouldchangetext%28inranges_replacementstrings_%29.md) or [shouldChangeText(in:replacementString:)](../nstextview/shouldchangetext%28in_replacementstring_%29.md) to include this method in an undoable action.

## See Also

### Setting text color

- [textColor](textcolor.md): The text color of all characters in the receiver.

# setTextColor:range: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the text color of characters within the specified range to the specified color.

## Declaration

```objectivec
- (void) setTextColor:(NSColor *) color range:(NSRange) range;
```

<a id="Discussion"></a>

## Discussion

Removes the text color attribute if `color` is `nil`. This method applies only to rich text objects.

This method does not include undo support by default. Clients must invoke [shouldChangeTextInRanges:replacementStrings:](../nstextview/shouldchangetext%28inranges_replacementstrings_%29.md) or [shouldChangeTextInRange:replacementString:](../nstextview/shouldchangetext%28in_replacementstring_%29.md) to include this method in an undoable action.

## See Also

### Setting text color

- [textColor](textcolor.md): The text color of all characters in the receiver.
