> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitemcell/drawimage(withframe:in:)](https://developer.apple.com/documentation/appkit/nsmenuitemcell/drawimage(withframe:in:))

# drawImage(withFrame:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the image associated with the menu item.

## Declaration

```swift
func drawImage(withFrame cellFrame: NSRect, in controlView: NSView)
```

## Parameters

- `cellFrame`: A rectangle defining the receiver’s frame area.
- `controlView`: The view object that contains this cell (usually an [NSControl](../nscontrol.md) object).

<a id="Discussion"></a>

## Discussion

This method invokes the `NSCell` method [imageRect(forBounds:)](../nscell/imagerect%28forbounds_%29.md), passing it `cellFrame`, to calculate the rectangle in which to draw the image. This method is invoked by the cell’s `drawWithFrame:` method. You should not need to invoke it directly. Subclasses may override this method to control the drawing of the image.

## See Also

### Drawing the Menu Item

- [drawBorderAndBackground(withFrame:in:)](drawborderandbackground%28withframe_in_%29.md): Draws the borders and background associated with the receiver’s menu item (if any).
- [drawKeyEquivalent(withFrame:in:)](drawkeyequivalent%28withframe_in_%29.md): Draws the key equivalent associated with the menu item.
- [drawSeparatorItem(withFrame:in:)](drawseparatoritem%28withframe_in_%29.md): Draws a menu item separator.
- [drawStateImage(withFrame:in:)](drawstateimage%28withframe_in_%29.md): Draws the state image associated with the menu item.
- [drawTitle(withFrame:in:)](drawtitle%28withframe_in_%29.md): Draws the title associated with the menu item.
- [needsDisplay](needsdisplay.md): A Boolean value indicating whether the menu item needs to be displayed.

# drawImageWithFrame:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the image associated with the menu item.

## Declaration

```objectivec
- (void) drawImageWithFrame:(NSRect) cellFrame inView:(NSView *) controlView;
```

## Parameters

- `cellFrame`: A rectangle defining the receiver’s frame area.
- `controlView`: The view object that contains this cell (usually an [NSControl](../nscontrol.md) object).

<a id="Discussion"></a>

## Discussion

This method invokes the `NSCell` method [imageRectForBounds:](../nscell/imagerect%28forbounds_%29.md), passing it `cellFrame`, to calculate the rectangle in which to draw the image. This method is invoked by the cell’s `drawWithFrame:` method. You should not need to invoke it directly. Subclasses may override this method to control the drawing of the image.

## See Also

### Drawing the Menu Item

- [drawBorderAndBackgroundWithFrame:inView:](drawborderandbackground%28withframe_in_%29.md): Draws the borders and background associated with the receiver’s menu item (if any).
- [drawKeyEquivalentWithFrame:inView:](drawkeyequivalent%28withframe_in_%29.md): Draws the key equivalent associated with the menu item.
- [drawSeparatorItemWithFrame:inView:](drawseparatoritem%28withframe_in_%29.md): Draws a menu item separator.
- [drawStateImageWithFrame:inView:](drawstateimage%28withframe_in_%29.md): Draws the state image associated with the menu item.
- [drawTitleWithFrame:inView:](drawtitle%28withframe_in_%29.md): Draws the title associated with the menu item.
- [needsDisplay](needsdisplay.md): A Boolean value indicating whether the menu item needs to be displayed.
