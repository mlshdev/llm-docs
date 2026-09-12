> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/tooltip(for:)](https://developer.apple.com/documentation/appkit/nsmatrix/tooltip(for:))

# toolTip(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the tooltip for the specified cell.

## Declaration

```swift
func toolTip(for cell: NSCell) -> String?
```

## Parameters

- `cell`: The cell for which to return the tooltip.

<a id="return-value"></a>

## Return Value

The string used as the cell’s tooltip.

## See Also

### Managing Attributes of Individual Cells

- [setState(\_:atRow:column:)](setstate%28__atrow_column_%29.md): Sets the state of the cell at specified location.
- [setToolTip(\_:for:)](settooltip%28__for_%29.md): Sets the tooltip for the cell.

# toolTipForCell: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the tooltip for the specified cell.

## Declaration

```objectivec
- (NSString *) toolTipForCell:(NSCell *) cell;
```

## Parameters

- `cell`: The cell for which to return the tooltip.

<a id="return-value"></a>

## Return Value

The string used as the cell’s tooltip.

## See Also

### Managing Attributes of Individual Cells

- [setState:atRow:column:](setstate%28__atrow_column_%29.md): Sets the state of the cell at specified location.
- [setToolTip:forCell:](settooltip%28__for_%29.md): Sets the tooltip for the cell.
