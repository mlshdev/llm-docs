> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/setneedsdisplay()](https://developer.apple.com/documentation/appkit/nscontrol/setneedsdisplay())

# setNeedsDisplay() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Marks the receiver as needing redisplay (assuming automatic display is enabled).

> Set the needsDisplay property to YES instead

## Declaration

```swift
func setNeedsDisplay()
```

<a id="Discussion"></a>

## Discussion

This method also recalculates the dimensions of the control as needed.

## See Also

### Related Documentation

- [needsDisplay](../nsview/needsdisplay.md): A Boolean value that determines whether the view needs to be redrawn before being displayed.

### Deprecated Methods

- [selectedCell()](selectedcell%28%29.md): Returns the receiver’s selected cell.
- [selectedTag()](selectedtag%28%29.md): Returns the tag of the receiver’s selected cell.
- [calcSize()](calcsize%28%29.md): Deprecated. Recomputes any internal sizing information for the receiver, if necessary.
- [selectCell(\_:)](selectcell%28__%29.md): Selects the specified cell and redraws the control as needed.
- [drawCell(\_:)](drawcell%28__%29.md): Draws the specified cell, as long as it belongs to the receiver.
- [drawCellInside(\_:)](drawcellinside%28__%29.md): Draws the inside of the receiver’s cell (the area within the bezel or border)
- [updateCell(\_:)](updatecell%28__%29.md): Marks the specified cell as in need of redrawing.
- [updateCellInside(\_:)](updatecellinside%28__%29.md): Marks the inside of the specified cell as in need of redrawing.

# setNeedsDisplay (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Marks the receiver as needing redisplay (assuming automatic display is enabled).

> Set the needsDisplay property to YES instead

## Declaration

```objectivec
- (void) setNeedsDisplay;
```

<a id="Discussion"></a>

## Discussion

This method also recalculates the dimensions of the control as needed.

## See Also

### Related Documentation

- [needsDisplay](../nsview/needsdisplay.md): A Boolean value that determines whether the view needs to be redrawn before being displayed.

### Deprecated Methods

- [selectedCell](selectedcell%28%29.md): Returns the receiver’s selected cell.
- [selectedTag](selectedtag%28%29.md): Returns the tag of the receiver’s selected cell.
- [calcSize](calcsize%28%29.md): Deprecated. Recomputes any internal sizing information for the receiver, if necessary.
- [selectCell:](selectcell%28__%29.md): Selects the specified cell and redraws the control as needed.
- [drawCell:](drawcell%28__%29.md): Draws the specified cell, as long as it belongs to the receiver.
- [drawCellInside:](drawcellinside%28__%29.md): Draws the inside of the receiver’s cell (the area within the bezel or border)
- [updateCell:](updatecell%28__%29.md): Marks the specified cell as in need of redrawing.
- [updateCellInside:](updatecellinside%28__%29.md): Marks the inside of the specified cell as in need of redrawing.
- [controlTextDidBeginEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidbeginediting:): Deprecated. Sent when a control with editable text begins an editing session.
- [controlTextDidChange:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidchange:): Deprecated. Sent when the text in the receiving control changes.
- [controlTextDidEndEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidendediting:): Deprecated. Sent when a control with editable text ends an editing session.
