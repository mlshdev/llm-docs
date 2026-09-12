> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate](https://developer.apple.com/documentation/appkit/nsbrowserdelegate)

# NSBrowserDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that a browser delegate implements to manage selection, scrolling, sizing, and other behavior.

## Declaration

```swift
protocol NSBrowserDelegate : NSObjectProtocol
```

## Topics

### Getting Browser Information

- [browser(\_:isColumnValid:)](nsbrowserdelegate/browser%28__iscolumnvalid_%29.md): Returns whether the contents of the specified column are valid.
- [browser(\_:numberOfRowsInColumn:)](nsbrowserdelegate/browser%28__numberofrowsincolumn_%29.md): Returns the number of rows of data in the specified column.
- [browser(\_:numberOfChildrenOfItem:)](nsbrowserdelegate/browser%28__numberofchildrenofitem_%29.md): Asks the delegate for the number of children the given item has.
- [browser(\_:titleOfColumn:)](nsbrowserdelegate/browser%28__titleofcolumn_%29.md): Asks the delegate for the title to display above the specified column.

### Managing Selection Behavior

- [browser(\_:shouldTypeSelectFor:withCurrentSearch:)](nsbrowserdelegate/browser%28__shouldtypeselectfor_withcurrentsearch_%29.md): Sent to the delegate to determine whether keyboard-based selection (type select) for a given event and search string should proceed.
- [browser(\_:typeSelectStringForRow:inColumn:)](nsbrowserdelegate/browser%28__typeselectstringforrow_incolumn_%29.md): Sent to the delegate to get the keyboard-based selection (type select) string for the specified row and column.
- [browser(\_:nextTypeSelectMatchFromRow:toRow:inColumn:for:)](nsbrowserdelegate/browser%28__nexttypeselectmatchfromrow_torow_incolumn_for_%29.md): Sent to the delegate to customize a browser’s keyboard-based selection (type select) behavior.

### Managing Selection

- [browser(\_:selectCellWith:inColumn:)](nsbrowserdelegate/browser%28__selectcellwith_incolumn_%29.md): Asks the delegate to select the cell with the given title in the specified column.
- [browser(\_:selectRow:inColumn:)](nsbrowserdelegate/browser%28__selectrow_incolumn_%29.md): Asks the delegate to select the cell at the specified row and column location.
- [browser(\_:selectionIndexesForProposedSelection:inColumn:)](nsbrowserdelegate/browser%28__selectionindexesforproposedselection_incolumn_%29.md): Asks the delegate for a set of indexes to select when the user changes the selection in the browser with the keyboard or mouse.

### Accessing Components

- [browser(\_:child:ofItem:)](nsbrowserdelegate/browser%28__child_ofitem_%29.md): Asks the delegate to return the child of the specified item at the specified index.
- [browser(\_:isLeafItem:)](nsbrowserdelegate/browser%28__isleafitem_%29.md): Asks the delegate whether the specified item is a leaf item (an item that cannot be expanded).
- [browser(\_:shouldEditItem:)](nsbrowserdelegate/browser%28__shouldedititem_%29.md): Asks the delegate whether the browser may start an editing session for the specified item.
- [browser(\_:objectValueForItem:)](nsbrowserdelegate/browser%28__objectvalueforitem_%29.md): Returns the object that the specified item uses to draw its contents.
- [browser(\_:setObjectValue:forItem:)](nsbrowserdelegate/browser%28__setobjectvalue_foritem_%29.md): Sets the object that the specified item uses to draw its contents to the specified object.
- [rootItem(for:)](nsbrowserdelegate/rootitem%28for_%29.md): Asks the delegate to return the root item of the browser.
- [browser(\_:previewViewControllerForLeafItem:)](nsbrowserdelegate/browser%28__previewviewcontrollerforleafitem_%29.md): Asks the delegate for a controller that provides a preview column for the specified leaf item.
- [browser(\_:headerViewControllerForItem:)](nsbrowserdelegate/browser%28__headerviewcontrollerforitem_%29.md): Asks the delegate for a controller that provides a header view for the specified column item.

### Managing Columns

- [browser(\_:createRowsForColumn:in:)](nsbrowserdelegate/browser%28__createrowsforcolumn_in_%29.md): Creates a row in the given matrix for each row of data in the specified column of the browser.
- [browser(\_:willDisplayCell:atRow:column:)](nsbrowserdelegate/browser%28__willdisplaycell_atrow_column_%29.md): Gives the delegate the opportunity to modify the specified cell at the given row and column location before the browser displays it.
- [browser(\_:didChangeLastColumn:toColumn:)](nsbrowserdelegate/browser%28__didchangelastcolumn_tocolumn_%29.md): Tells the delegate that the browser’s last column changed.

### Scrolling

- [browserWillScroll(\_:)](nsbrowserdelegate/browserwillscroll%28__%29.md): Notifies the delegate when the browser will scroll.
- [browserDidScroll(\_:)](nsbrowserdelegate/browserdidscroll%28__%29.md): Notifies the delegate when the browser has scrolled.

### Dragging

- [browser(\_:canDragRowsWith:inColumn:with:)](nsbrowserdelegate/browser%28__candragrowswith_incolumn_with_%29.md): Sent to the delegate to determine whether the browser can attempt to initiate a drag of the specified rows for the specified event.
- [browser(\_:draggingImageForRowsWith:inColumn:with:offset:)](nsbrowserdelegate/browser%28__draggingimageforrowswith_incolumn_with_offset_%29.md): Sent to the delegate to obtain an image to represent dragged rows during a drag operation on a browser.
- [browser(\_:validateDrop:proposedRow:column:dropOperation:)](nsbrowserdelegate/browser%28__validatedrop_proposedrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether a drop should be accepted and to obtain the drop location. This method is required for a browser to be a drag destination.
- [browser(\_:acceptDrop:atRow:column:dropOperation:)](nsbrowserdelegate/browser%28__acceptdrop_atrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether to accept the drop.
- [browser(\_:writeRowsWith:inColumn:to:)](nsbrowserdelegate/browser%28__writerowswith_incolumn_to_%29.md): Deprecated. Determines whether a drag operation can proceed. This method is required for a browser to be a drag source.
- [browser(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWith:inColumn:)](nsbrowserdelegate/browser%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_incolumn_%29.md): Deprecated. Implements file promise drag operations.

### Sizing

- [browser(\_:shouldSizeColumn:forUserResize:toWidth:)](nsbrowserdelegate/browser%28__shouldsizecolumn_foruserresize_towidth_%29.md): Used to determine a column’s initial size.
- [browser(\_:sizeToFitWidthOfColumn:)](nsbrowserdelegate/browser%28__sizetofitwidthofcolumn_%29.md): Returns the ideal width for a column.
- [browserColumnConfigurationDidChange(\_:)](nsbrowserdelegate/browsercolumnconfigurationdidchange%28__%29.md): Used by clients to implement their own column width persistence.
- [browser(\_:heightOfRow:inColumn:)](nsbrowserdelegate/browser%28__heightofrow_incolumn_%29.md): Specifies the height of the specified row in the specified column.

### Displaying Cell Content

- [browser(\_:shouldShowCellExpansionForRow:column:)](nsbrowserdelegate/browser%28__shouldshowcellexpansionforrow_column_%29.md): Invoked to allow the delegate to control cell expansion for a specific row and column.

### Instance Methods

- [browser(\_:draggingSession:endedAt:operation:)](nsbrowserdelegate/browser%28__draggingsession_endedat_operation_%29.md)
- [browser(\_:draggingSession:willBeginAt:forRowsWith:column:)](nsbrowserdelegate/browser%28__draggingsession_willbeginat_forrowswith_column_%29.md)
- [browser(\_:pasteboardWriterForRow:column:)](nsbrowserdelegate/browser%28__pasteboardwriterforrow_column_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# NSBrowserDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that a browser delegate implements to manage selection, scrolling, sizing, and other behavior.

## Declaration

```objectivec
@protocol NSBrowserDelegate <NSObject>
```

## Topics

### Getting Browser Information

- [browser:isColumnValid:](nsbrowserdelegate/browser%28__iscolumnvalid_%29.md): Returns whether the contents of the specified column are valid.
- [browser:numberOfRowsInColumn:](nsbrowserdelegate/browser%28__numberofrowsincolumn_%29.md): Returns the number of rows of data in the specified column.
- [browser:numberOfChildrenOfItem:](nsbrowserdelegate/browser%28__numberofchildrenofitem_%29.md): Asks the delegate for the number of children the given item has.
- [browser:titleOfColumn:](nsbrowserdelegate/browser%28__titleofcolumn_%29.md): Asks the delegate for the title to display above the specified column.

### Managing Selection Behavior

- [browser:shouldTypeSelectForEvent:withCurrentSearchString:](nsbrowserdelegate/browser%28__shouldtypeselectfor_withcurrentsearch_%29.md): Sent to the delegate to determine whether keyboard-based selection (type select) for a given event and search string should proceed.
- [browser:typeSelectStringForRow:inColumn:](nsbrowserdelegate/browser%28__typeselectstringforrow_incolumn_%29.md): Sent to the delegate to get the keyboard-based selection (type select) string for the specified row and column.
- [browser:nextTypeSelectMatchFromRow:toRow:inColumn:forString:](nsbrowserdelegate/browser%28__nexttypeselectmatchfromrow_torow_incolumn_for_%29.md): Sent to the delegate to customize a browser’s keyboard-based selection (type select) behavior.

### Managing Selection

- [browser:selectCellWithString:inColumn:](nsbrowserdelegate/browser%28__selectcellwith_incolumn_%29.md): Asks the delegate to select the cell with the given title in the specified column.
- [browser:selectRow:inColumn:](nsbrowserdelegate/browser%28__selectrow_incolumn_%29.md): Asks the delegate to select the cell at the specified row and column location.
- [browser:selectionIndexesForProposedSelection:inColumn:](nsbrowserdelegate/browser%28__selectionindexesforproposedselection_incolumn_%29.md): Asks the delegate for a set of indexes to select when the user changes the selection in the browser with the keyboard or mouse.

### Accessing Components

- [browser:child:ofItem:](nsbrowserdelegate/browser%28__child_ofitem_%29.md): Asks the delegate to return the child of the specified item at the specified index.
- [browser:isLeafItem:](nsbrowserdelegate/browser%28__isleafitem_%29.md): Asks the delegate whether the specified item is a leaf item (an item that cannot be expanded).
- [browser:shouldEditItem:](nsbrowserdelegate/browser%28__shouldedititem_%29.md): Asks the delegate whether the browser may start an editing session for the specified item.
- [browser:objectValueForItem:](nsbrowserdelegate/browser%28__objectvalueforitem_%29.md): Returns the object that the specified item uses to draw its contents.
- [browser:setObjectValue:forItem:](nsbrowserdelegate/browser%28__setobjectvalue_foritem_%29.md): Sets the object that the specified item uses to draw its contents to the specified object.
- [rootItemForBrowser:](nsbrowserdelegate/rootitem%28for_%29.md): Asks the delegate to return the root item of the browser.
- [browser:previewViewControllerForLeafItem:](nsbrowserdelegate/browser%28__previewviewcontrollerforleafitem_%29.md): Asks the delegate for a controller that provides a preview column for the specified leaf item.
- [browser:headerViewControllerForItem:](nsbrowserdelegate/browser%28__headerviewcontrollerforitem_%29.md): Asks the delegate for a controller that provides a header view for the specified column item.

### Managing Columns

- [browser:createRowsForColumn:inMatrix:](nsbrowserdelegate/browser%28__createrowsforcolumn_in_%29.md): Creates a row in the given matrix for each row of data in the specified column of the browser.
- [browser:willDisplayCell:atRow:column:](nsbrowserdelegate/browser%28__willdisplaycell_atrow_column_%29.md): Gives the delegate the opportunity to modify the specified cell at the given row and column location before the browser displays it.
- [browser:didChangeLastColumn:toColumn:](nsbrowserdelegate/browser%28__didchangelastcolumn_tocolumn_%29.md): Tells the delegate that the browser’s last column changed.

### Scrolling

- [browserWillScroll:](nsbrowserdelegate/browserwillscroll%28__%29.md): Notifies the delegate when the browser will scroll.
- [browserDidScroll:](nsbrowserdelegate/browserdidscroll%28__%29.md): Notifies the delegate when the browser has scrolled.

### Dragging

- [browser:canDragRowsWithIndexes:inColumn:withEvent:](nsbrowserdelegate/browser%28__candragrowswith_incolumn_with_%29.md): Sent to the delegate to determine whether the browser can attempt to initiate a drag of the specified rows for the specified event.
- [browser:draggingImageForRowsWithIndexes:inColumn:withEvent:offset:](nsbrowserdelegate/browser%28__draggingimageforrowswith_incolumn_with_offset_%29.md): Sent to the delegate to obtain an image to represent dragged rows during a drag operation on a browser.
- [browser:validateDrop:proposedRow:column:dropOperation:](nsbrowserdelegate/browser%28__validatedrop_proposedrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether a drop should be accepted and to obtain the drop location. This method is required for a browser to be a drag destination.
- [browser:acceptDrop:atRow:column:dropOperation:](nsbrowserdelegate/browser%28__acceptdrop_atrow_column_dropoperation_%29.md): Sent to the delegate during a dragging session to determine whether to accept the drop.
- [browser:writeRowsWithIndexes:inColumn:toPasteboard:](nsbrowserdelegate/browser%28__writerowswith_incolumn_to_%29.md): Deprecated. Determines whether a drag operation can proceed. This method is required for a browser to be a drag source.
- [browser:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWithIndexes:inColumn:](nsbrowserdelegate/browser%28__namesofpromisedfilesdroppedatdestination_fordraggedrowswith_incolumn_%29.md): Deprecated. Implements file promise drag operations.

### Sizing

- [browser:shouldSizeColumn:forUserResize:toWidth:](nsbrowserdelegate/browser%28__shouldsizecolumn_foruserresize_towidth_%29.md): Used to determine a column’s initial size.
- [browser:sizeToFitWidthOfColumn:](nsbrowserdelegate/browser%28__sizetofitwidthofcolumn_%29.md): Returns the ideal width for a column.
- [browserColumnConfigurationDidChange:](nsbrowserdelegate/browsercolumnconfigurationdidchange%28__%29.md): Used by clients to implement their own column width persistence.
- [browser:heightOfRow:inColumn:](nsbrowserdelegate/browser%28__heightofrow_incolumn_%29.md): Specifies the height of the specified row in the specified column.

### Displaying Cell Content

- [browser:shouldShowCellExpansionForRow:column:](nsbrowserdelegate/browser%28__shouldshowcellexpansionforrow_column_%29.md): Invoked to allow the delegate to control cell expansion for a specific row and column.

### Instance Methods

- [browser:draggingSession:endedAtPoint:operation:](nsbrowserdelegate/browser%28__draggingsession_endedat_operation_%29.md)
- [browser:draggingSession:willBeginAtPoint:forRowsWithIndexes:column:](nsbrowserdelegate/browser%28__draggingsession_willbeginat_forrowswith_column_%29.md)
- [browser:pasteboardWriterForRow:column:](nsbrowserdelegate/browser%28__pasteboardwriterforrow_column_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
