> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:namesofpromisedfilesdroppedatdestination:fordraggedrowswith:incolumn:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:namesofpromisedfilesdroppedatdestination:fordraggedrowswith:incolumn:))

# browser(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWith:inColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.13)

Implements file promise drag operations.

> Use NSFilePromiseReceiver objects instead

## Declaration

```swift
optional func browser(_ browser: NSBrowser, namesOfPromisedFilesDroppedAtDestination dropDestination: URL, forDraggedRowsWith rowIndexes: IndexSet, inColumn column: Int) -> [String]
```

## Parameters

- `browser`: The browser.
- `dropDestination`: The drop filesystem location.
- `rowIndexes`: The indexes of the rows the user is dropping.
- `column`: The index of the column containing the rows the user is dropping.

<a id="return-value"></a>

## Return Value

Filenames (not pathnames) for the actual files represented by the rows the user is dropping.

<a id="Discussion"></a>

## Discussion

Note that file promise drag operation support requires adding the data type [filePromise](../nspasteboard/pasteboardtype/filepromise.md) to the pasteboard in the [browser(\_:writeRowsWith:inColumn:to:)](browser%28__writerowswith_incolumn_to_%29.md) method.

## See Also

### Dragging

- [browser(\_:canDragRowsWith:inColumn:with:)](browser%28__candragrowswith_incolumn_with_%29.md): Sent to the delegate to determine whether the browser can attempt to initiate a drag of the specified rows for the specified event.
- [browser(\_:draggingImageForRowsWith:inColumn:with:offset:)](browser%28__draggingimageforrowswith_incolumn_with_offset_%29.md): Sent to the delegate to obtain an image to represent dragged rows during a drag operation on a browser.
- [browser(\_:validateDrop:proposedRow:column:dropOperation:)](browser%28__validatedrop_proposedrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether a drop should be accepted and to obtain the drop location. This method is required for a browser to be a drag destination.
- [browser(\_:acceptDrop:atRow:column:dropOperation:)](browser%28__acceptdrop_atrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether to accept the drop.
- [browser(\_:writeRowsWith:inColumn:to:)](browser%28__writerowswith_incolumn_to_%29.md): Deprecated. Determines whether a drag operation can proceed. This method is required for a browser to be a drag source.

# browser:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWithIndexes:inColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.13)

Implements file promise drag operations.

> Use NSFilePromiseReceiver objects instead

## Declaration

```objectivec
- (NSArray<NSString *> *) browser:(NSBrowser *) browser namesOfPromisedFilesDroppedAtDestination:(NSURL *) dropDestination forDraggedRowsWithIndexes:(NSIndexSet *) rowIndexes inColumn:(NSInteger) column;
```

## Parameters

- `browser`: The browser.
- `dropDestination`: The drop filesystem location.
- `rowIndexes`: The indexes of the rows the user is dropping.
- `column`: The index of the column containing the rows the user is dropping.

<a id="return-value"></a>

## Return Value

Filenames (not pathnames) for the actual files represented by the rows the user is dropping.

<a id="Discussion"></a>

## Discussion

Note that file promise drag operation support requires adding the data type [NSFilesPromisePboardType](../nspasteboard/pasteboardtype/filepromise.md) to the pasteboard in the [browser:writeRowsWithIndexes:inColumn:toPasteboard:](browser%28__writerowswith_incolumn_to_%29.md) method.

## See Also

### Dragging

- [browser:canDragRowsWithIndexes:inColumn:withEvent:](browser%28__candragrowswith_incolumn_with_%29.md): Sent to the delegate to determine whether the browser can attempt to initiate a drag of the specified rows for the specified event.
- [browser:draggingImageForRowsWithIndexes:inColumn:withEvent:offset:](browser%28__draggingimageforrowswith_incolumn_with_offset_%29.md): Sent to the delegate to obtain an image to represent dragged rows during a drag operation on a browser.
- [browser:validateDrop:proposedRow:column:dropOperation:](browser%28__validatedrop_proposedrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether a drop should be accepted and to obtain the drop location. This method is required for a browser to be a drag destination.
- [browser:acceptDrop:atRow:column:dropOperation:](browser%28__acceptdrop_atrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether to accept the drop.
- [browser:writeRowsWithIndexes:inColumn:toPasteboard:](browser%28__writerowswith_incolumn_to_%29.md): Deprecated. Determines whether a drag operation can proceed. This method is required for a browser to be a drag source.
