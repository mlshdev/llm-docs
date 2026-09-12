> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:writerowswith:incolumn:to:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:writerowswith:incolumn:to:))

# browser(\_:writeRowsWith:inColumn:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 27.0)

Determines whether a drag operation can proceed. This method is required for a browser to be a drag source.

> Use browser:pasteboardWriterForRow:column: instead

## Declaration

```swift
@MainActor optional func browser(_ browser: NSBrowser, writeRowsWith rowIndexes: IndexSet, inColumn column: Int, to pasteboard: NSPasteboard) -> Bool
```

## Parameters

- `browser`: The browser.
- `rowIndexes`: The indexes of the rows the user is dragging.
- `column`: The index of the column containing the dragged rows.
- `pasteboard`: The pasteboard containing the content from the dragged rows.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the dragging operation to proceed (see discussion for further details); [false](https://developer.apple.com/documentation/swift/false) to disallow it.

<a id="Discussion"></a>

## Discussion

This method is called after a drag operation has been allowed to start ([browser(\_:canDragRowsWith:inColumn:with:)](browser%28__candragrowswith_incolumn_with_%29.md) returns [true](https://developer.apple.com/documentation/swift/true)), but before it actually begins.

## See Also

### Dragging

- [browser(\_:canDragRowsWith:inColumn:with:)](browser%28__candragrowswith_incolumn_with_%29.md): Sent to the delegate to determine whether the browser can attempt to initiate a drag of the specified rows for the specified event.
- [browser(\_:draggingImageForRowsWith:inColumn:with:offset:)](browser%28__draggingimageforrowswith_incolumn_with_offset_%29.md): Sent to the delegate to obtain an image to represent dragged rows during a drag operation on a browser.
- [browser(\_:validateDrop:proposedRow:column:dropOperation:)](browser%28__validatedrop_proposedrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether a drop should be accepted and to obtain the drop location. This method is required for a browser to be a drag destination.
- [browser(\_:acceptDrop:atRow:column:dropOperation:)](browser%28__acceptdrop_atrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether to accept the drop.
- [browser(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWith:inColumn:)](browser%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_incolumn_%29.md): Deprecated. Implements file promise drag operations.

# browser:writeRowsWithIndexes:inColumn:toPasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 27.0)

Determines whether a drag operation can proceed. This method is required for a browser to be a drag source.

> Use browser:pasteboardWriterForRow:column: instead

## Declaration

```objectivec
- (BOOL) browser:(NSBrowser *) browser writeRowsWithIndexes:(NSIndexSet *) rowIndexes inColumn:(NSInteger) column toPasteboard:(NSPasteboard *) pasteboard;
```

## Parameters

- `browser`: The browser.
- `rowIndexes`: The indexes of the rows the user is dragging.
- `column`: The index of the column containing the dragged rows.
- `pasteboard`: The pasteboard containing the content from the dragged rows.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the dragging operation to proceed (see discussion for further details); [false](https://developer.apple.com/documentation/swift/false) to disallow it.

<a id="Discussion"></a>

## Discussion

This method is called after a drag operation has been allowed to start ([browser:canDragRowsWithIndexes:inColumn:withEvent:](browser%28__candragrowswith_incolumn_with_%29.md) returns [true](https://developer.apple.com/documentation/swift/true)), but before it actually begins.

## See Also

### Dragging

- [browser:canDragRowsWithIndexes:inColumn:withEvent:](browser%28__candragrowswith_incolumn_with_%29.md): Sent to the delegate to determine whether the browser can attempt to initiate a drag of the specified rows for the specified event.
- [browser:draggingImageForRowsWithIndexes:inColumn:withEvent:offset:](browser%28__draggingimageforrowswith_incolumn_with_offset_%29.md): Sent to the delegate to obtain an image to represent dragged rows during a drag operation on a browser.
- [browser:validateDrop:proposedRow:column:dropOperation:](browser%28__validatedrop_proposedrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether a drop should be accepted and to obtain the drop location. This method is required for a browser to be a drag destination.
- [browser:acceptDrop:atRow:column:dropOperation:](browser%28__acceptdrop_atrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether to accept the drop.
- [browser:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWithIndexes:inColumn:](browser%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_incolumn_%29.md): Deprecated. Implements file promise drag operations.
