> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/updatecell(_:)](https://developer.apple.com/documentation/appkit/nscontrol/updatecell(_:))

# updateCell(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Marks the specified cell as in need of redrawing.

## Declaration

```swift
func updateCell(_ cell: NSCell)
```

## Parameters

- `cell`: The cell to redraw.

<a id="Discussion"></a>

## Discussion

If the cell currently has the focus, this method updates the cell’s focus ring; otherwise, the entire cell is marked as needing redisplay. The cell is redrawn during the next update cycle.

## See Also

### Deprecated Methods

- [selectedCell()](selectedcell%28%29.md): Returns the receiver’s selected cell.
- [selectedTag()](selectedtag%28%29.md): Returns the tag of the receiver’s selected cell.
- [setNeedsDisplay()](setneedsdisplay%28%29.md): Deprecated. Marks the receiver as needing redisplay (assuming automatic display is enabled).
- [calcSize()](calcsize%28%29.md): Deprecated. Recomputes any internal sizing information for the receiver, if necessary.
- [selectCell(\_:)](selectcell%28__%29.md): Selects the specified cell and redraws the control as needed.
- [drawCell(\_:)](drawcell%28__%29.md): Draws the specified cell, as long as it belongs to the receiver.
- [drawCellInside(\_:)](drawcellinside%28__%29.md): Draws the inside of the receiver’s cell (the area within the bezel or border)
- [updateCellInside(\_:)](updatecellinside%28__%29.md): Marks the inside of the specified cell as in need of redrawing.

# updateCell: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Marks the specified cell as in need of redrawing.

## Declaration

```objectivec
- (void) updateCell:(NSCell *) cell;
```

## Parameters

- `cell`: The cell to redraw.

<a id="Discussion"></a>

## Discussion

If the cell currently has the focus, this method updates the cell’s focus ring; otherwise, the entire cell is marked as needing redisplay. The cell is redrawn during the next update cycle.

## See Also

### Deprecated Methods

- [selectedCell](selectedcell%28%29.md): Returns the receiver’s selected cell.
- [selectedTag](selectedtag%28%29.md): Returns the tag of the receiver’s selected cell.
- [setNeedsDisplay](setneedsdisplay%28%29.md): Deprecated. Marks the receiver as needing redisplay (assuming automatic display is enabled).
- [calcSize](calcsize%28%29.md): Deprecated. Recomputes any internal sizing information for the receiver, if necessary.
- [selectCell:](selectcell%28__%29.md): Selects the specified cell and redraws the control as needed.
- [drawCell:](drawcell%28__%29.md): Draws the specified cell, as long as it belongs to the receiver.
- [drawCellInside:](drawcellinside%28__%29.md): Draws the inside of the receiver’s cell (the area within the bezel or border)
- [updateCellInside:](updatecellinside%28__%29.md): Marks the inside of the specified cell as in need of redrawing.
- [controlTextDidBeginEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidbeginediting:): Deprecated. Sent when a control with editable text begins an editing session.
- [controlTextDidChange:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidchange:): Deprecated. Sent when the text in the receiving control changes.
- [controlTextDidEndEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidendediting:): Deprecated. Sent when a control with editable text ends an editing session.
