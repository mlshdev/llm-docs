> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/drawcellinside(_:)](https://developer.apple.com/documentation/appkit/nscontrol/drawcellinside(_:))

# drawCellInside(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the inside of the receiver’s cell (the area within the bezel or border)

## Declaration

```swift
func drawCellInside(_ cell: NSCell)
```

## Parameters

- `cell`: The cell to draw. If the cell does not belong to the receiver, this method does nothing.

<a id="Discussion"></a>

## Discussion

If the receiver is transparent, the method causes the superview to draw itself. This method invokes the  [drawInterior(withFrame:in:)](../nscell/drawinterior%28withframe_in_%29.md) method of NSCell. This method has no effect on controls (such as `NSMatrix` and `NSForm`) that have multiple cells.

## See Also

### Deprecated Methods

- [selectedCell()](selectedcell%28%29.md): Returns the receiver’s selected cell.
- [selectedTag()](selectedtag%28%29.md): Returns the tag of the receiver’s selected cell.
- [setNeedsDisplay()](setneedsdisplay%28%29.md): Deprecated. Marks the receiver as needing redisplay (assuming automatic display is enabled).
- [calcSize()](calcsize%28%29.md): Deprecated. Recomputes any internal sizing information for the receiver, if necessary.
- [selectCell(\_:)](selectcell%28__%29.md): Selects the specified cell and redraws the control as needed.
- [drawCell(\_:)](drawcell%28__%29.md): Draws the specified cell, as long as it belongs to the receiver.
- [updateCell(\_:)](updatecell%28__%29.md): Marks the specified cell as in need of redrawing.
- [updateCellInside(\_:)](updatecellinside%28__%29.md): Marks the inside of the specified cell as in need of redrawing.

# drawCellInside: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the inside of the receiver’s cell (the area within the bezel or border)

## Declaration

```objectivec
- (void) drawCellInside:(NSCell *) cell;
```

## Parameters

- `cell`: The cell to draw. If the cell does not belong to the receiver, this method does nothing.

<a id="Discussion"></a>

## Discussion

If the receiver is transparent, the method causes the superview to draw itself. This method invokes the  [drawInteriorWithFrame:inView:](../nscell/drawinterior%28withframe_in_%29.md) method of NSCell. This method has no effect on controls (such as `NSMatrix` and `NSForm`) that have multiple cells.

## See Also

### Deprecated Methods

- [selectedCell](selectedcell%28%29.md): Returns the receiver’s selected cell.
- [selectedTag](selectedtag%28%29.md): Returns the tag of the receiver’s selected cell.
- [setNeedsDisplay](setneedsdisplay%28%29.md): Deprecated. Marks the receiver as needing redisplay (assuming automatic display is enabled).
- [calcSize](calcsize%28%29.md): Deprecated. Recomputes any internal sizing information for the receiver, if necessary.
- [selectCell:](selectcell%28__%29.md): Selects the specified cell and redraws the control as needed.
- [drawCell:](drawcell%28__%29.md): Draws the specified cell, as long as it belongs to the receiver.
- [updateCell:](updatecell%28__%29.md): Marks the specified cell as in need of redrawing.
- [updateCellInside:](updatecellinside%28__%29.md): Marks the inside of the specified cell as in need of redrawing.
- [controlTextDidBeginEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidbeginediting:): Deprecated. Sent when a control with editable text begins an editing session.
- [controlTextDidChange:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidchange:): Deprecated. Sent when the text in the receiving control changes.
- [controlTextDidEndEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidendediting:): Deprecated. Sent when a control with editable text ends an editing session.
