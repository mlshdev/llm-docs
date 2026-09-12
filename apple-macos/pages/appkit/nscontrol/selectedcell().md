> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/selectedcell()](https://developer.apple.com/documentation/appkit/nscontrol/selectedcell())

# selectedCell() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the receiver’s selected cell.

## Declaration

```swift
func selectedCell() -> NSCell?
```

<a id="return-value"></a>

## Return Value

The selected cell object.

<a id="Discussion"></a>

## Discussion

The default implementation of this method simply returns the control’s associated cell (or `nil` if no cell has been set). Subclasses of `NSControl` that manage multiple cells (such as `NSMatrix` and `NSForm`) must override this method to return the cell selected by the user.

## See Also

### Related Documentation

- [cell](cell.md): The receiver’s cell object.

### Deprecated Methods

- [selectedTag()](selectedtag%28%29.md): Returns the tag of the receiver’s selected cell.
- [setNeedsDisplay()](setneedsdisplay%28%29.md): Deprecated. Marks the receiver as needing redisplay (assuming automatic display is enabled).
- [calcSize()](calcsize%28%29.md): Deprecated. Recomputes any internal sizing information for the receiver, if necessary.
- [selectCell(\_:)](selectcell%28__%29.md): Selects the specified cell and redraws the control as needed.
- [drawCell(\_:)](drawcell%28__%29.md): Draws the specified cell, as long as it belongs to the receiver.
- [drawCellInside(\_:)](drawcellinside%28__%29.md): Draws the inside of the receiver’s cell (the area within the bezel or border)
- [updateCell(\_:)](updatecell%28__%29.md): Marks the specified cell as in need of redrawing.
- [updateCellInside(\_:)](updatecellinside%28__%29.md): Marks the inside of the specified cell as in need of redrawing.

# selectedCell (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the receiver’s selected cell.

## Declaration

```objectivec
- (NSCell *) selectedCell;
```

<a id="return-value"></a>

## Return Value

The selected cell object.

<a id="Discussion"></a>

## Discussion

The default implementation of this method simply returns the control’s associated cell (or `nil` if no cell has been set). Subclasses of `NSControl` that manage multiple cells (such as `NSMatrix` and `NSForm`) must override this method to return the cell selected by the user.

## See Also

### Related Documentation

- [cell](cell.md): The receiver’s cell object.

### Deprecated Methods

- [selectedTag](selectedtag%28%29.md): Returns the tag of the receiver’s selected cell.
- [setNeedsDisplay](setneedsdisplay%28%29.md): Deprecated. Marks the receiver as needing redisplay (assuming automatic display is enabled).
- [calcSize](calcsize%28%29.md): Deprecated. Recomputes any internal sizing information for the receiver, if necessary.
- [selectCell:](selectcell%28__%29.md): Selects the specified cell and redraws the control as needed.
- [drawCell:](drawcell%28__%29.md): Draws the specified cell, as long as it belongs to the receiver.
- [drawCellInside:](drawcellinside%28__%29.md): Draws the inside of the receiver’s cell (the area within the bezel or border)
- [updateCell:](updatecell%28__%29.md): Marks the specified cell as in need of redrawing.
- [updateCellInside:](updatecellinside%28__%29.md): Marks the inside of the specified cell as in need of redrawing.
- [controlTextDidBeginEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidbeginediting:): Deprecated. Sent when a control with editable text begins an editing session.
- [controlTextDidChange:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidchange:): Deprecated. Sent when the text in the receiving control changes.
- [controlTextDidEndEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidendediting:): Deprecated. Sent when a control with editable text ends an editing session.
