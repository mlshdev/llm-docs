> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/selectedtag()](https://developer.apple.com/documentation/appkit/nscontrol/selectedtag())

# selectedTag() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the tag of the receiver’s selected cell.

## Declaration

```swift
func selectedTag() -> Int
```

<a id="return-value"></a>

## Return Value

The tag of the selected cell, or `-1` if no cell is selected.

<a id="Discussion"></a>

## Discussion

When you set the tag of a control with a single cell in Interface Builder, it sets the tags of both the control and the cell with the same value as a convenience.

## See Also

### Related Documentation

- [tag](tag.md): The tag identifying the receiver (not the tag of the receiver’s cell).

### Deprecated Methods

- [selectedCell()](selectedcell%28%29.md): Returns the receiver’s selected cell.
- [setNeedsDisplay()](setneedsdisplay%28%29.md): Deprecated. Marks the receiver as needing redisplay (assuming automatic display is enabled).
- [calcSize()](calcsize%28%29.md): Deprecated. Recomputes any internal sizing information for the receiver, if necessary.
- [selectCell(\_:)](selectcell%28__%29.md): Selects the specified cell and redraws the control as needed.
- [drawCell(\_:)](drawcell%28__%29.md): Draws the specified cell, as long as it belongs to the receiver.
- [drawCellInside(\_:)](drawcellinside%28__%29.md): Draws the inside of the receiver’s cell (the area within the bezel or border)
- [updateCell(\_:)](updatecell%28__%29.md): Marks the specified cell as in need of redrawing.
- [updateCellInside(\_:)](updatecellinside%28__%29.md): Marks the inside of the specified cell as in need of redrawing.

# selectedTag (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the tag of the receiver’s selected cell.

## Declaration

```objectivec
- (NSInteger) selectedTag;
```

<a id="return-value"></a>

## Return Value

The tag of the selected cell, or `-1` if no cell is selected.

<a id="Discussion"></a>

## Discussion

When you set the tag of a control with a single cell in Interface Builder, it sets the tags of both the control and the cell with the same value as a convenience.

## See Also

### Related Documentation

- [tag](tag.md): The tag identifying the receiver (not the tag of the receiver’s cell).

### Deprecated Methods

- [selectedCell](selectedcell%28%29.md): Returns the receiver’s selected cell.
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
