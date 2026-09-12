> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitview/drawdivider(in:)](https://developer.apple.com/documentation/appkit/nssplitview/drawdivider(in:))

# drawDivider(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws a divider between two of the split view’s subviews.

## Declaration

```swift
func drawDivider(in rect: NSRect)
```

## Parameters

- `rect`: The entire divider rectangle in the split view’s flipped coordinate system.

<a id="Discussion"></a>

## Discussion

If you override this method to use a custom style for the divider, you may need to change the size of the divider.

## See Also

### Configuring and Drawing Dividers

- [dividerStyle](dividerstyle-swift.property.md): The style of divider between views.
- [NSSplitView.DividerStyle](dividerstyle-swift.enum.md): Constants that specify the style of the split view’s dividers.
- [dividerColor](dividercolor.md): The color of the dividers that the split view draws between subviews.
- [dividerThickness](dividerthickness.md): The thickness of the dividers for the split view.

# drawDividerInRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws a divider between two of the split view’s subviews.

## Declaration

```objectivec
- (void) drawDividerInRect:(NSRect) rect;
```

## Parameters

- `rect`: The entire divider rectangle in the split view’s flipped coordinate system.

<a id="Discussion"></a>

## Discussion

If you override this method to use a custom style for the divider, you may need to change the size of the divider.

## See Also

### Configuring and Drawing Dividers

- [dividerStyle](dividerstyle-swift.property.md): The style of divider between views.
- [NSSplitViewDividerStyle](dividerstyle-swift.enum.md): Constants that specify the style of the split view’s dividers.
- [dividerColor](dividercolor.md): The color of the dividers that the split view draws between subviews.
- [dividerThickness](dividerthickness.md): The thickness of the dividers for the split view.
