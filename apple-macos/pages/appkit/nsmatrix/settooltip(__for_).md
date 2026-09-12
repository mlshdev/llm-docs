> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/settooltip(_:for:)](https://developer.apple.com/documentation/appkit/nsmatrix/settooltip(_:for:))

# setToolTip(\_:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the tooltip for the cell.

## Declaration

```swift
func setToolTip(_ toolTipString: String?, for cell: NSCell)
```

## Parameters

- `toolTipString`: The string to use as the cell’s tooltip (or help tag).
- `cell`: The cell to which to assign the tooltip.

## See Also

### Managing Attributes of Individual Cells

- [setState(\_:atRow:column:)](setstate%28__atrow_column_%29.md): Sets the state of the cell at specified location.
- [toolTip(for:)](tooltip%28for_%29.md): Returns the tooltip for the specified cell.

# setToolTip:forCell: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the tooltip for the cell.

## Declaration

```objectivec
- (void) setToolTip:(NSString *) toolTipString forCell:(NSCell *) cell;
```

## Parameters

- `toolTipString`: The string to use as the cell’s tooltip (or help tag).
- `cell`: The cell to which to assign the tooltip.

## See Also

### Managing Attributes of Individual Cells

- [setState:atRow:column:](setstate%28__atrow_column_%29.md): Sets the state of the cell at specified location.
- [toolTipForCell:](tooltip%28for_%29.md): Returns the tooltip for the specified cell.
