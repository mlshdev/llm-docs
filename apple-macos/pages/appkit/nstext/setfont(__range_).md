> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/setfont(_:range:)](https://developer.apple.com/documentation/appkit/nstext/setfont(_:range:))

# setFont(\_:range:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the font of characters within `aRange` to `aFont`.

## Declaration

```swift
func setFont(_ font: NSFont, range: NSRange)
```

<a id="Discussion"></a>

## Discussion

This method applies only to a rich text object.

This method does not include undo support by default. Clients must invoke [shouldChangeText(inRanges:replacementStrings:)](../nstextview/shouldchangetext%28inranges_replacementstrings_%29.md) or [shouldChangeText(in:replacementString:)](../nstextview/shouldchangetext%28in_replacementstring_%29.md) to include this method in an undoable action.

## See Also

### Changing the font

- [changeFont(\_:)](changefont%28__%29.md): This action method changes the font of the selection for a rich text object, or of all text for a plain text object.
- [font](font.md): The font of all the receiver’s text.

# setFont:range: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the font of characters within `aRange` to `aFont`.

## Declaration

```objectivec
- (void) setFont:(NSFont *) font range:(NSRange) range;
```

<a id="Discussion"></a>

## Discussion

This method applies only to a rich text object.

This method does not include undo support by default. Clients must invoke [shouldChangeTextInRanges:replacementStrings:](../nstextview/shouldchangetext%28inranges_replacementstrings_%29.md) or [shouldChangeTextInRange:replacementString:](../nstextview/shouldchangetext%28in_replacementstring_%29.md) to include this method in an undoable action.

## See Also

### Changing the font

- [changeFont:](changefont%28__%29.md): This action method changes the font of the selection for a rich text object, or of all text for a plain text object.
- [font](font.md): The font of all the receiver’s text.
