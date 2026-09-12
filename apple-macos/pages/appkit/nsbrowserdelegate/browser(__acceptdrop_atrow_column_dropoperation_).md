> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:acceptdrop:atrow:column:dropoperation:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:acceptdrop:atrow:column:dropoperation:))

# browser(\_:acceptDrop:atRow:column:dropOperation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sent to the delegate during a dragging session to determine whether to accept the drop.

## Declaration

```swift
@MainActor optional func browser(_ browser: NSBrowser, acceptDrop info: any NSDraggingInfo, atRow row: Int, column: Int, dropOperation: NSBrowser.DropOperation) -> Bool
```

## Parameters

- `browser`: The browser.
- `info`: The drag session information.
- `row`: The drop row.
- `column`: The drop column.
- `dropOperation`: The drop location relative to `row`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to accept the drop; [false](https://developer.apple.com/documentation/swift/false) to decline it.

<a id="Discussion"></a>

## Discussion

This method is required for a browser to be a drag destination. It is invoked after the [browser(\_:validateDrop:proposedRow:column:dropOperation:)](browser%28__validatedrop_proposedrow_column_dropoperation_%29.md) method allows the drop.

The delegate should incorporate the pasteboard data from the dragging session (```info``.draggingPasteboard```).

## See Also

### Dragging

- [browser(\_:canDragRowsWith:inColumn:with:)](browser%28__candragrowswith_incolumn_with_%29.md): Sent to the delegate to determine whether the browser can attempt to initiate a drag of the specified rows for the specified event.
- [browser(\_:draggingImageForRowsWith:inColumn:with:offset:)](browser%28__draggingimageforrowswith_incolumn_with_offset_%29.md): Sent to the delegate to obtain an image to represent dragged rows during a drag operation on a browser.
- [browser(\_:validateDrop:proposedRow:column:dropOperation:)](browser%28__validatedrop_proposedrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether a drop should be accepted and to obtain the drop location. This method is required for a browser to be a drag destination.
- [browser(\_:writeRowsWith:inColumn:to:)](browser%28__writerowswith_incolumn_to_%29.md): Deprecated. Determines whether a drag operation can proceed. This method is required for a browser to be a drag source.
- [browser(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWith:inColumn:)](browser%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_incolumn_%29.md): Deprecated. Implements file promise drag operations.

# browser:acceptDrop:atRow:column:dropOperation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sent to the delegate during a dragging session to determine whether to accept the drop.

## Declaration

```objectivec
- (BOOL) browser:(NSBrowser *) browser acceptDrop:(id<NSDraggingInfo>) info atRow:(NSInteger) row column:(NSInteger) column dropOperation:(NSBrowserDropOperation) dropOperation;
```

## Parameters

- `browser`: The browser.
- `info`: The drag session information.
- `row`: The drop row.
- `column`: The drop column.
- `dropOperation`: The drop location relative to `row`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to accept the drop; [false](https://developer.apple.com/documentation/swift/false) to decline it.

<a id="Discussion"></a>

## Discussion

This method is required for a browser to be a drag destination. It is invoked after the [browser:validateDrop:proposedRow:column:dropOperation:](browser%28__validatedrop_proposedrow_column_dropoperation_%29.md) method allows the drop.

The delegate should incorporate the pasteboard data from the dragging session (```info``.draggingPasteboard```).

## See Also

### Dragging

- [browser:canDragRowsWithIndexes:inColumn:withEvent:](browser%28__candragrowswith_incolumn_with_%29.md): Sent to the delegate to determine whether the browser can attempt to initiate a drag of the specified rows for the specified event.
- [browser:draggingImageForRowsWithIndexes:inColumn:withEvent:offset:](browser%28__draggingimageforrowswith_incolumn_with_offset_%29.md): Sent to the delegate to obtain an image to represent dragged rows during a drag operation on a browser.
- [browser:validateDrop:proposedRow:column:dropOperation:](browser%28__validatedrop_proposedrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether a drop should be accepted and to obtain the drop location. This method is required for a browser to be a drag destination.
- [browser:writeRowsWithIndexes:inColumn:toPasteboard:](browser%28__writerowswith_incolumn_to_%29.md): Deprecated. Determines whether a drag operation can proceed. This method is required for a browser to be a drag source.
- [browser:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWithIndexes:inColumn:](browser%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_incolumn_%29.md): Deprecated. Implements file promise drag operations.
