> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:validatedrop:proposedrow:column:dropoperation:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:validatedrop:proposedrow:column:dropoperation:))

# browser(\_:validateDrop:proposedRow:column:dropOperation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sent to the delegate during a dragging session to determine whether a drop should be accepted and to obtain the drop location. This method is required for a browser to be a drag destination.

## Declaration

```swift
@MainActor optional func browser(_ browser: NSBrowser, validateDrop info: any NSDraggingInfo, proposedRow row: UnsafeMutablePointer<Int>, column: UnsafeMutablePointer<Int>, dropOperation: UnsafeMutablePointer<NSBrowser.DropOperation>) -> NSDragOperation
```

## Parameters

- `browser`: The browser.
- `info`: The drag session information.
- `row`: On input, the proposed drop row. On output, the drop row.
- `column`: On input, the proposed drop column. On output, the drop column.
- `dropOperation`: On input, the proposed drop location. On output, the drop location.

<a id="return-value"></a>

## Return Value

The drag operation that the data source is to perform. For the browser to accept the drop, it must not be [NSDragOperationNone](../nsdragoperation/nsdragoperationnone.md).

<a id="Discussion"></a>

## Discussion

The browser proposes a drop column, row, and row-relative location for the drop based on the pointer position, as shown in this table:

| Drop relative location | Description |
| --- | --- |
| [NSBrowser.DropOperation.on](../nsbrowser/dropoperation/on.md) | Dragging location (```dragInfo``.draggingLocation```) is closer to the middle of `row` than to either of its vertical sides. |
| [NSBrowser.DropOperation.above](../nsbrowser/dropoperation/above.md) | Dragging location is between two rows. Indicates a drop location above `row` and below `row` `- 1`. |

These are a few examples of how to specify a drop location:

|  | Row index | Row-relative location |
| --- | --- | --- |
| On row 2 | `2` | [NSBrowser.DropOperation.on](../nsbrowser/dropoperation/on.md) |
| Between rows 2 and 3 | `3` | [NSBrowser.DropOperation.above](../nsbrowser/dropoperation/above.md) |
| Below the last row | `[sender numberOfRows]` | [NSBrowser.DropOperation.above](../nsbrowser/dropoperation/above.md) |
| All rows | `-1` | [NSBrowser.DropOperation.on](../nsbrowser/dropoperation/on.md) |

## See Also

### Related Documentation

- [registerForDraggedTypes(\_:)](../nsview/registerfordraggedtypes%28__%29.md): Registers the pasteboard types that the view will accept as the destination of an image-dragging session.

### Dragging

- [browser(\_:canDragRowsWith:inColumn:with:)](browser%28__candragrowswith_incolumn_with_%29.md): Sent to the delegate to determine whether the browser can attempt to initiate a drag of the specified rows for the specified event.
- [browser(\_:draggingImageForRowsWith:inColumn:with:offset:)](browser%28__draggingimageforrowswith_incolumn_with_offset_%29.md): Sent to the delegate to obtain an image to represent dragged rows during a drag operation on a browser.
- [browser(\_:acceptDrop:atRow:column:dropOperation:)](browser%28__acceptdrop_atrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether to accept the drop.
- [browser(\_:writeRowsWith:inColumn:to:)](browser%28__writerowswith_incolumn_to_%29.md): Deprecated. Determines whether a drag operation can proceed. This method is required for a browser to be a drag source.
- [browser(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWith:inColumn:)](browser%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_incolumn_%29.md): Deprecated. Implements file promise drag operations.

# browser:validateDrop:proposedRow:column:dropOperation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sent to the delegate during a dragging session to determine whether a drop should be accepted and to obtain the drop location. This method is required for a browser to be a drag destination.

## Declaration

```objectivec
- (NSDragOperation) browser:(NSBrowser *) browser validateDrop:(id<NSDraggingInfo>) info proposedRow:(NSInteger *) row column:(NSInteger *) column dropOperation:(NSBrowserDropOperation *) dropOperation;
```

## Parameters

- `browser`: The browser.
- `info`: The drag session information.
- `row`: On input, the proposed drop row. On output, the drop row.
- `column`: On input, the proposed drop column. On output, the drop column.
- `dropOperation`: On input, the proposed drop location. On output, the drop location.

<a id="return-value"></a>

## Return Value

The drag operation that the data source is to perform. For the browser to accept the drop, it must not be [NSDragOperationNone](../nsdragoperation/nsdragoperationnone.md).

<a id="Discussion"></a>

## Discussion

The browser proposes a drop column, row, and row-relative location for the drop based on the pointer position, as shown in this table:

| Drop relative location | Description |
| --- | --- |
| [NSBrowserDropOn](../nsbrowser/dropoperation/on.md) | Dragging location (```dragInfo``.draggingLocation```) is closer to the middle of `row` than to either of its vertical sides. |
| [NSBrowserDropAbove](../nsbrowser/dropoperation/above.md) | Dragging location is between two rows. Indicates a drop location above `row` and below `row` `- 1`. |

These are a few examples of how to specify a drop location:

|  | Row index | Row-relative location |
| --- | --- | --- |
| On row 2 | `2` | [NSBrowserDropOn](../nsbrowser/dropoperation/on.md) |
| Between rows 2 and 3 | `3` | [NSBrowserDropAbove](../nsbrowser/dropoperation/above.md) |
| Below the last row | `[sender numberOfRows]` | [NSBrowserDropAbove](../nsbrowser/dropoperation/above.md) |
| All rows | `-1` | [NSBrowserDropOn](../nsbrowser/dropoperation/on.md) |

## See Also

### Related Documentation

- [registerForDraggedTypes:](../nsview/registerfordraggedtypes%28__%29.md): Registers the pasteboard types that the view will accept as the destination of an image-dragging session.

### Dragging

- [browser:canDragRowsWithIndexes:inColumn:withEvent:](browser%28__candragrowswith_incolumn_with_%29.md): Sent to the delegate to determine whether the browser can attempt to initiate a drag of the specified rows for the specified event.
- [browser:draggingImageForRowsWithIndexes:inColumn:withEvent:offset:](browser%28__draggingimageforrowswith_incolumn_with_offset_%29.md): Sent to the delegate to obtain an image to represent dragged rows during a drag operation on a browser.
- [browser:acceptDrop:atRow:column:dropOperation:](browser%28__acceptdrop_atrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether to accept the drop.
- [browser:writeRowsWithIndexes:inColumn:toPasteboard:](browser%28__writerowswith_incolumn_to_%29.md): Deprecated. Determines whether a drag operation can proceed. This method is required for a browser to be a drag source.
- [browser:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWithIndexes:inColumn:](browser%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_incolumn_%29.md): Deprecated. Implements file promise drag operations.
