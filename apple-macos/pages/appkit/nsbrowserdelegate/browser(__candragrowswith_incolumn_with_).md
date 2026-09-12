> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:candragrowswith:incolumn:with:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:candragrowswith:incolumn:with:))

# browser(\_:canDragRowsWith:inColumn:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sent to the delegate to determine whether the browser can attempt to initiate a drag of the specified rows for the specified event.

## Declaration

```swift
@MainActor optional func browser(_ browser: NSBrowser, canDragRowsWith rowIndexes: IndexSet, inColumn column: Int, with event: NSEvent) -> Bool
```

## Parameters

- `browser`: The browser.
- `rowIndexes`: The rows the user is dragging.
- `column`: The column containing the rows the user is dragging.
- `event`: The drag event.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the drag operation; [false](https://developer.apple.com/documentation/swift/false) to disallow it.

## See Also

### Related Documentation

- [canDragRows(with:inColumn:with:)](../nsbrowser/candragrows%28with_incolumn_with_%29.md): Indicates whether the browser can attempt to initiate a drag of the given rows for the given event.

### Dragging

- [browser(\_:draggingImageForRowsWith:inColumn:with:offset:)](browser%28__draggingimageforrowswith_incolumn_with_offset_%29.md): Sent to the delegate to obtain an image to represent dragged rows during a drag operation on a browser.
- [browser(\_:validateDrop:proposedRow:column:dropOperation:)](browser%28__validatedrop_proposedrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether a drop should be accepted and to obtain the drop location. This method is required for a browser to be a drag destination.
- [browser(\_:acceptDrop:atRow:column:dropOperation:)](browser%28__acceptdrop_atrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether to accept the drop.
- [browser(\_:writeRowsWith:inColumn:to:)](browser%28__writerowswith_incolumn_to_%29.md): Deprecated. Determines whether a drag operation can proceed. This method is required for a browser to be a drag source.
- [browser(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWith:inColumn:)](browser%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_incolumn_%29.md): Deprecated. Implements file promise drag operations.

# browser:canDragRowsWithIndexes:inColumn:withEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sent to the delegate to determine whether the browser can attempt to initiate a drag of the specified rows for the specified event.

## Declaration

```objectivec
- (BOOL) browser:(NSBrowser *) browser canDragRowsWithIndexes:(NSIndexSet *) rowIndexes inColumn:(NSInteger) column withEvent:(NSEvent *) event;
```

## Parameters

- `browser`: The browser.
- `rowIndexes`: The rows the user is dragging.
- `column`: The column containing the rows the user is dragging.
- `event`: The drag event.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the drag operation; [false](https://developer.apple.com/documentation/swift/false) to disallow it.

## See Also

### Related Documentation

- [canDragRowsWithIndexes:inColumn:withEvent:](../nsbrowser/candragrows%28with_incolumn_with_%29.md): Indicates whether the browser can attempt to initiate a drag of the given rows for the given event.

### Dragging

- [browser:draggingImageForRowsWithIndexes:inColumn:withEvent:offset:](browser%28__draggingimageforrowswith_incolumn_with_offset_%29.md): Sent to the delegate to obtain an image to represent dragged rows during a drag operation on a browser.
- [browser:validateDrop:proposedRow:column:dropOperation:](browser%28__validatedrop_proposedrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether a drop should be accepted and to obtain the drop location. This method is required for a browser to be a drag destination.
- [browser:acceptDrop:atRow:column:dropOperation:](browser%28__acceptdrop_atrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether to accept the drop.
- [browser:writeRowsWithIndexes:inColumn:toPasteboard:](browser%28__writerowswith_incolumn_to_%29.md): Deprecated. Determines whether a drag operation can proceed. This method is required for a browser to be a drag source.
- [browser:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWithIndexes:inColumn:](browser%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_incolumn_%29.md): Deprecated. Implements file promise drag operations.
