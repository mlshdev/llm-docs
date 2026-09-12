> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:draggingimageforrowswith:incolumn:with:offset:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:draggingimageforrowswith:incolumn:with:offset:))

# browser(\_:draggingImageForRowsWith:inColumn:with:offset:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sent to the delegate to obtain an image to represent dragged rows during a drag operation on a browser.

## Declaration

```swift
@MainActor optional func browser(_ browser: NSBrowser, draggingImageForRowsWith rowIndexes: IndexSet, inColumn column: Int, with event: NSEvent, offset dragImageOffset: NSPointPointer) -> NSImage?
```

## Parameters

- `browser`: The browser.
- `rowIndexes`: The indexes of the rows the user is dragging.
- `column`: The column containing the rows the user is dragging.
- `event`: The drag event.
- `dragImageOffset`: The offset for the returned image:

  - [NSZeroPoint](https://developer.apple.com/documentation/foundation/nszeropoint): Centers the image under the pointer.

<a id="return-value"></a>

## Return Value

An image representing the visible rows identified by `rowIndexes`.

## See Also

### Related Documentation

- [draggingImageForRows(with:inColumn:with:offset:)](../nsbrowser/draggingimageforrows%28with_incolumn_with_offset_%29.md): Provides an image to represent dragged rows during a drag operation on the browser.

### Dragging

- [browser(\_:canDragRowsWith:inColumn:with:)](browser%28__candragrowswith_incolumn_with_%29.md): Sent to the delegate to determine whether the browser can attempt to initiate a drag of the specified rows for the specified event.
- [browser(\_:validateDrop:proposedRow:column:dropOperation:)](browser%28__validatedrop_proposedrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether a drop should be accepted and to obtain the drop location. This method is required for a browser to be a drag destination.
- [browser(\_:acceptDrop:atRow:column:dropOperation:)](browser%28__acceptdrop_atrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether to accept the drop.
- [browser(\_:writeRowsWith:inColumn:to:)](browser%28__writerowswith_incolumn_to_%29.md): Deprecated. Determines whether a drag operation can proceed. This method is required for a browser to be a drag source.
- [browser(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWith:inColumn:)](browser%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_incolumn_%29.md): Deprecated. Implements file promise drag operations.

# browser:draggingImageForRowsWithIndexes:inColumn:withEvent:offset: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sent to the delegate to obtain an image to represent dragged rows during a drag operation on a browser.

## Declaration

```objectivec
- (NSImage *) browser:(NSBrowser *) browser draggingImageForRowsWithIndexes:(NSIndexSet *) rowIndexes inColumn:(NSInteger) column withEvent:(NSEvent *) event offset:(NSPointPointer) dragImageOffset;
```

## Parameters

- `browser`: The browser.
- `rowIndexes`: The indexes of the rows the user is dragging.
- `column`: The column containing the rows the user is dragging.
- `event`: The drag event.
- `dragImageOffset`: The offset for the returned image:

  - [NSZeroPoint](https://developer.apple.com/documentation/foundation/nszeropoint): Centers the image under the pointer.

<a id="return-value"></a>

## Return Value

An image representing the visible rows identified by `rowIndexes`.

## See Also

### Related Documentation

- [draggingImageForRowsWithIndexes:inColumn:withEvent:offset:](../nsbrowser/draggingimageforrows%28with_incolumn_with_offset_%29.md): Provides an image to represent dragged rows during a drag operation on the browser.

### Dragging

- [browser:canDragRowsWithIndexes:inColumn:withEvent:](browser%28__candragrowswith_incolumn_with_%29.md): Sent to the delegate to determine whether the browser can attempt to initiate a drag of the specified rows for the specified event.
- [browser:validateDrop:proposedRow:column:dropOperation:](browser%28__validatedrop_proposedrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether a drop should be accepted and to obtain the drop location. This method is required for a browser to be a drag destination.
- [browser:acceptDrop:atRow:column:dropOperation:](browser%28__acceptdrop_atrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether to accept the drop.
- [browser:writeRowsWithIndexes:inColumn:toPasteboard:](browser%28__writerowswith_incolumn_to_%29.md): Deprecated. Determines whether a drag operation can proceed. This method is required for a browser to be a drag source.
- [browser:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWithIndexes:inColumn:](browser%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_incolumn_%29.md): Deprecated. Implements file promise drag operations.
