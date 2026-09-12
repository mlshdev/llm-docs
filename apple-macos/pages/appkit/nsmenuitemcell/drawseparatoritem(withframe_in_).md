> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitemcell/drawseparatoritem(withframe:in:)](https://developer.apple.com/documentation/appkit/nsmenuitemcell/drawseparatoritem(withframe:in:))

# drawSeparatorItem(withFrame:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws a menu item separator.

## Declaration

```swift
func drawSeparatorItem(withFrame cellFrame: NSRect, in controlView: NSView)
```

## Parameters

- `cellFrame`: A rectangle defining the receiver’s frame area.
- `controlView`: The view object that contains this cell (usually an [NSControl](../nscontrol.md) object).

<a id="Discussion"></a>

## Discussion

This method uses the `cellFrame` parameter to calculate the rectangle in which to draw the menu item separator. This method uses the `controlView` to determine whether the separator item should be drawn normally or flipped.

You should not need to invoke this method directly. Subclasses may override this method to control the drawing of the separator.

## See Also

### Related Documentation

- [isFlipped](../nsview/isflipped.md): A Boolean value indicating whether the view uses a flipped coordinate system.

### Drawing the Menu Item

- [drawBorderAndBackground(withFrame:in:)](drawborderandbackground%28withframe_in_%29.md): Draws the borders and background associated with the receiver’s menu item (if any).
- [drawImage(withFrame:in:)](drawimage%28withframe_in_%29.md): Draws the image associated with the menu item.
- [drawKeyEquivalent(withFrame:in:)](drawkeyequivalent%28withframe_in_%29.md): Draws the key equivalent associated with the menu item.
- [drawStateImage(withFrame:in:)](drawstateimage%28withframe_in_%29.md): Draws the state image associated with the menu item.
- [drawTitle(withFrame:in:)](drawtitle%28withframe_in_%29.md): Draws the title associated with the menu item.
- [needsDisplay](needsdisplay.md): A Boolean value indicating whether the menu item needs to be displayed.

# drawSeparatorItemWithFrame:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws a menu item separator.

## Declaration

```objectivec
- (void) drawSeparatorItemWithFrame:(NSRect) cellFrame inView:(NSView *) controlView;
```

## Parameters

- `cellFrame`: A rectangle defining the receiver’s frame area.
- `controlView`: The view object that contains this cell (usually an [NSControl](../nscontrol.md) object).

<a id="Discussion"></a>

## Discussion

This method uses the `cellFrame` parameter to calculate the rectangle in which to draw the menu item separator. This method uses the `controlView` to determine whether the separator item should be drawn normally or flipped.

You should not need to invoke this method directly. Subclasses may override this method to control the drawing of the separator.

## See Also

### Related Documentation

- [flipped](../nsview/isflipped.md): A Boolean value indicating whether the view uses a flipped coordinate system.

### Drawing the Menu Item

- [drawBorderAndBackgroundWithFrame:inView:](drawborderandbackground%28withframe_in_%29.md): Draws the borders and background associated with the receiver’s menu item (if any).
- [drawImageWithFrame:inView:](drawimage%28withframe_in_%29.md): Draws the image associated with the menu item.
- [drawKeyEquivalentWithFrame:inView:](drawkeyequivalent%28withframe_in_%29.md): Draws the key equivalent associated with the menu item.
- [drawStateImageWithFrame:inView:](drawstateimage%28withframe_in_%29.md): Draws the state image associated with the menu item.
- [drawTitleWithFrame:inView:](drawtitle%28withframe_in_%29.md): Draws the title associated with the menu item.
- [needsDisplay](needsdisplay.md): A Boolean value indicating whether the menu item needs to be displayed.
