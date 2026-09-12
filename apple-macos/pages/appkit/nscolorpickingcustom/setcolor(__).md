> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpickingcustom/setcolor(_:)](https://developer.apple.com/documentation/appkit/nscolorpickingcustom/setcolor(_:))

# setColor(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adjusts the receiver to make the specified color the currently selected color.

## Declaration

```swift
@MainActor func setColor(_ newColor: NSColor)
```

## Parameters

- `newColor`: The color to set as the currently selected color.

<a id="Discussion"></a>

## Discussion

This method is invoked on the current color picker each time `NSColorPanel`‘s [color](../nscolorpanel/color.md) method is invoked. If `color` is actually different from the color picker’s color (as it would be if, for example, the user dragged a color into `NSColorPanel`‘s color well), this method could be used to update the color picker’s color to reflect the change.

## See Also

### Related Documentation

- [color](../nscolorpanel/color.md): The color of the receiver.

# setColor: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adjusts the receiver to make the specified color the currently selected color.

## Declaration

```objectivec
- (void) setColor:(NSColor *) newColor;
```

## Parameters

- `newColor`: The color to set as the currently selected color.

<a id="Discussion"></a>

## Discussion

This method is invoked on the current color picker each time `NSColorPanel`‘s [color](../nscolorpanel/color.md) method is invoked. If `color` is actually different from the color picker’s color (as it would be if, for example, the user dragged a color into `NSColorPanel`‘s color well), this method could be used to update the color picker’s color to reflect the change.

## See Also

### Related Documentation

- [color](../nscolorpanel/color.md): The color of the receiver.
