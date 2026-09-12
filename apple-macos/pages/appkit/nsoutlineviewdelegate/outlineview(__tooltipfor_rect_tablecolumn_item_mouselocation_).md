> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:tooltipfor:rect:tablecolumn:item:mouselocation:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:tooltipfor:rect:tablecolumn:item:mouselocation:))

# outlineView(\_:toolTipFor:rect:tableColumn:item:mouseLocation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

When the cursor pauses over a given cell, the value returned from this method is displayed in a tooltip.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, toolTipFor cell: NSCell, rect: NSRectPointer, tableColumn: NSTableColumn?, item: Any, mouseLocation: NSPoint) -> String
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `cell`: The cell for which to generate a tooltip.
- `rect`: The proposed active area of the tooltip. To control the default active area, you can modify the `rect` parameter. By default, `rect` is computed as `[cell drawingRectForBounds:cellFrame]`.
- `tableColumn`: The table column that contains `cell`.
- `item`: The item for which to display a tooltip.
- `mouseLocation`: The current mouse location in view coordinates.

<a id="return-value"></a>

## Return Value

If you don’t want a tooltip at that location, return an empty string.

# outlineView:toolTipForCell:rect:tableColumn:item:mouseLocation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

When the cursor pauses over a given cell, the value returned from this method is displayed in a tooltip.

## Declaration

```objectivec
- (NSString *) outlineView:(NSOutlineView *) outlineView toolTipForCell:(NSCell *) cell rect:(NSRectPointer) rect tableColumn:(NSTableColumn *) tableColumn item:(id) item mouseLocation:(NSPoint) mouseLocation;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `cell`: The cell for which to generate a tooltip.
- `rect`: The proposed active area of the tooltip. To control the default active area, you can modify the `rect` parameter. By default, `rect` is computed as `[cell drawingRectForBounds:cellFrame]`.
- `tableColumn`: The table column that contains `cell`.
- `item`: The item for which to display a tooltip.
- `mouseLocation`: The current mouse location in view coordinates.

<a id="return-value"></a>

## Return Value

If you don’t want a tooltip at that location, return an empty string.
