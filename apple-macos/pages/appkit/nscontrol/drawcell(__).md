> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/drawcell(_:)](https://developer.apple.com/documentation/appkit/nscontrol/drawcell(_:))

# drawCell(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the specified cell, as long as it belongs to the receiver.

## Declaration

```swift
func drawCell(_ cell: NSCell)
```

## Parameters

- `cell`: The cell to draw. If the cell does not belong to the receiver, this method does nothing.

<a id="Discussion"></a>

## Discussion

This method is provided primarily to support a consistent set of methods between `NSControl` objects with single and multiple cells, because a control with multiple cells needs to be able to draw individual cells.

## See Also

### Deprecated Methods

- [selectedCell()](selectedcell%28%29.md): Returns the receiver’s selected cell.
- [selectedTag()](selectedtag%28%29.md): Returns the tag of the receiver’s selected cell.
- [setNeedsDisplay()](setneedsdisplay%28%29.md): Deprecated. Marks the receiver as needing redisplay (assuming automatic display is enabled).
- [calcSize()](calcsize%28%29.md): Deprecated. Recomputes any internal sizing information for the receiver, if necessary.
- [selectCell(\_:)](selectcell%28__%29.md): Selects the specified cell and redraws the control as needed.
- [drawCellInside(\_:)](drawcellinside%28__%29.md): Draws the inside of the receiver’s cell (the area within the bezel or border)
- [updateCell(\_:)](updatecell%28__%29.md): Marks the specified cell as in need of redrawing.
- [updateCellInside(\_:)](updatecellinside%28__%29.md): Marks the inside of the specified cell as in need of redrawing.

# drawCell: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the specified cell, as long as it belongs to the receiver.

## Declaration

```objectivec
- (void) drawCell:(NSCell *) cell;
```

## Parameters

- `cell`: The cell to draw. If the cell does not belong to the receiver, this method does nothing.

<a id="Discussion"></a>

## Discussion

This method is provided primarily to support a consistent set of methods between `NSControl` objects with single and multiple cells, because a control with multiple cells needs to be able to draw individual cells.

## See Also

### Deprecated Methods

- [selectedCell](selectedcell%28%29.md): Returns the receiver’s selected cell.
- [selectedTag](selectedtag%28%29.md): Returns the tag of the receiver’s selected cell.
- [setNeedsDisplay](setneedsdisplay%28%29.md): Deprecated. Marks the receiver as needing redisplay (assuming automatic display is enabled).
- [calcSize](calcsize%28%29.md): Deprecated. Recomputes any internal sizing information for the receiver, if necessary.
- [selectCell:](selectcell%28__%29.md): Selects the specified cell and redraws the control as needed.
- [drawCellInside:](drawcellinside%28__%29.md): Draws the inside of the receiver’s cell (the area within the bezel or border)
- [updateCell:](updatecell%28__%29.md): Marks the specified cell as in need of redrawing.
- [updateCellInside:](updatecellinside%28__%29.md): Marks the inside of the specified cell as in need of redrawing.
- [controlTextDidBeginEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidbeginediting:): Deprecated. Sent when a control with editable text begins an editing session.
- [controlTextDidChange:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidchange:): Deprecated. Sent when the text in the receiving control changes.
- [controlTextDidEndEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidendediting:): Deprecated. Sent when a control with editable text ends an editing session.
