> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser](https://developer.apple.com/documentation/appkit/nsbrowser)

# NSBrowser (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An interface that displays a hierarchically organized list of data items that can be navigated and selected.

## Declaration

```swift
class NSBrowser
```

<a id="overview"></a>

## Overview

A browser displays information using a set of columns, which are indexed from left to right. Each successive column displays the next level down in the data hierarchy. This class uses the [NSBrowserCell](nsbrowsercell.md) class to implement its user interface.

Browsers have the following components:

- Columns
- Scroll views
- Matrices
- Browser cells

To the user, browsers display data in columns and rows within each column. These components are arranged in the following component hierarchy:

```objc
Browser
|---Columns [1..*]
    |---Scroll view
       |---Matrix
           |---Rows [0..*]
```

<a id="Superclass-overrides"></a>

### Superclass overrides

- [isOpaque](nsview/isopaque.md) returns [true](https://developer.apple.com/documentation/swift/true) when the browser doesn’t have a title and its background color’s alpha component is `1.0`; otherwise, it returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Protocol-implementations"></a>

### Protocol implementations

- The [NSBrowser](nsbrowser.md) implementation of [namesOfPromisedFilesDropped(atDestination:)](nsdragginginfo/namesofpromisedfilesdropped%28atdestination_%29.md) provides the names of the files that the browser promises to create at a specified location, the result of sending `browser:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWithIndexes:inColumn:` to the delegate.

## Topics

### Configuring Browsers

- [reusesColumns](nsbrowser/reusescolumns.md): A Boolean that indicates whether the browser reuses matrix objects after their columns are unloaded.
- [maxVisibleColumns](nsbrowser/maxvisiblecolumns.md): The maximum number of visible columns.
- [autohidesScroller](nsbrowser/autohidesscroller.md): A Boolean that indicates whether the browser automatically hides its scroller.
- [backgroundColor](nsbrowser/backgroundcolor.md): The browser’s background color.
- [minColumnWidth](nsbrowser/mincolumnwidth.md): The minimum column width, in pixels.
- [separatesColumns](nsbrowser/separatescolumns.md): A Boolean that indicates whether columns are separated by bezeled borders.
- [takesTitleFromPreviousColumn](nsbrowser/takestitlefrompreviouscolumn.md): A Boolean that indicates whether a column takes its title from the selected cell in the previous column.
- [tile()](nsbrowser/tile%28%29.md): Adjusts the various subviews of the browser—scrollers, columns, titles, and so on—without redrawing.
- [delegate](nsbrowser/delegate.md): The browser’s delegate.

### Managing Component Types

- [cellClass](nsbrowser/cellclass.md): Returns the `NSBrowserCell` class.
- [setCellClass(\_:)](nsbrowser/setcellclass%28__%29.md): Sets the class of the cell to be used by the matrices in the columns of the browser.
- [cellPrototype](nsbrowser/cellprototype.md): The prototype `NSCell` for displaying items in the matrices in the columns of the browser.

### Managing Selection Behavior

- [allowsBranchSelection](nsbrowser/allowsbranchselection.md): A Boolean that indicates whether the user can select branch items.
- [allowsEmptySelection](nsbrowser/allowsemptyselection.md): A Boolean that indicates whether there can be nothing selected.
- [allowsMultipleSelection](nsbrowser/allowsmultipleselection.md): A Boolean that indicates whether the user can select multiple items.
- [selectedRowIndexes(inColumn:)](nsbrowser/selectedrowindexes%28incolumn_%29.md): Provides the indexes of the selected rows in a given column of the browser.
- [selectRowIndexes(\_:inColumn:)](nsbrowser/selectrowindexes%28__incolumn_%29.md): Specifies the selected rows in a given column of the browser.
- [allowsTypeSelect](nsbrowser/allowstypeselect.md): A Boolean that indicates whether the browser allows keystroke-based selection (type select).

### Managing Selection

- [selectedCell(inColumn:)](nsbrowser/selectedcell%28incolumn_%29.md): Returns the last (lowest) cell selected in the given column.
- [selectedCells](nsbrowser/selectedcells.md): All cells selected in the rightmost column.
- [selectAll(\_:)](nsbrowser/selectall%28__%29.md): Selects all cells in the last column of the browser.
- [selectedRow(inColumn:)](nsbrowser/selectedrow%28incolumn_%29.md): Returns the row index of the selected cell in the specified column.
- [selectRow(\_:inColumn:)](nsbrowser/selectrow%28__incolumn_%29.md): Selects the cell at the specified row and column index.
- [selectionIndexPath](nsbrowser/selectionindexpath.md): The index path of the item selected in the browser.
- [selectionIndexPaths](nsbrowser/selectionindexpaths.md): An array containing the index paths of all items selected in the browser.

### Accessing Components

- [loadedCell(atRow:column:)](nsbrowser/loadedcell%28atrow_column_%29.md): Loads, if necessary, and returns the cell at the specified row and column location.
- [editItem(at:with:select:)](nsbrowser/edititem%28at_with_select_%29.md): Begins editing the item at the specified path.
- [item(at:)](nsbrowser/item%28at_%29.md): Returns the item at the specified index path.
- [item(atRow:inColumn:)](nsbrowser/item%28atrow_incolumn_%29.md): Returns the item located at the specified row and column.
- [indexPath(forColumn:)](nsbrowser/indexpath%28forcolumn_%29.md): Returns the index path of the item whose children are displayed in the given column.
- [isLeafItem(\_:)](nsbrowser/isleafitem%28__%29.md): Returns whether the specified item is a leaf item.
- [parentForItems(inColumn:)](nsbrowser/parentforitems%28incolumn_%29.md): Returns the item that contains the children located in the specified column.

### Managing the Path

- [path()](nsbrowser/path%28%29.md): Returns a string representing the browser’s current path.
- [setPath(\_:)](nsbrowser/setpath%28__%29.md): Sets the path to be displayed by the browser.
- [path(toColumn:)](nsbrowser/path%28tocolumn_%29.md): Returns a string representing the path from the first column up to, but not including, the column at the given index.
- [pathSeparator](nsbrowser/pathseparator.md): The path separator.

### Managing Columns

- [addColumn()](nsbrowser/addcolumn%28%29.md): Adds a column to the right of the last column.
- [selectedColumn](nsbrowser/selectedcolumn.md): The index of the last column with a selected item.
- [lastColumn](nsbrowser/lastcolumn.md): The index of the last column loaded.
- [firstVisibleColumn](nsbrowser/firstvisiblecolumn.md): The index of the first visible column.
- [numberOfVisibleColumns](nsbrowser/numberofvisiblecolumns.md): The number of visible columns.
- [lastVisibleColumn](nsbrowser/lastvisiblecolumn.md): The index of the last visible column.
- [validateVisibleColumns()](nsbrowser/validatevisiblecolumns%28%29.md): Validates the browser’s visible columns.
- [isLoaded](nsbrowser/isloaded.md): A Boolean that indicates whether column 0 is loaded.
- [loadColumnZero()](nsbrowser/loadcolumnzero%28%29.md): Loads column 0; unloads previously loaded columns.
- [reloadColumn(\_:)](nsbrowser/reloadcolumn%28__%29.md): Reloads the given column.

### Accessing Column Titles

- [title(ofColumn:)](nsbrowser/title%28ofcolumn_%29.md): Returns the title displayed for the given column.
- [setTitle(\_:ofColumn:)](nsbrowser/settitle%28__ofcolumn_%29.md): Sets the title of the given column.
- [isTitled](nsbrowser/istitled.md): A Boolean that indicates whether columns display titles.
- [drawTitle(ofColumn:in:)](nsbrowser/drawtitle%28ofcolumn_in_%29.md): Draws the title for the specified column within the given rectangle.
- [titleHeight](nsbrowser/titleheight.md): The height of the column titles for the browser.
- [titleFrame(ofColumn:)](nsbrowser/titleframe%28ofcolumn_%29.md): Returns the bounds of the title frame for the specified column.

### Updating Browsers

- [noteHeightOfRowsWithIndexesChanged(\_:inColumn:)](nsbrowser/noteheightofrowswithindexeschanged%28__incolumn_%29.md): Immediately retiles the browser’s columns using row heights specified by the browser’s delegate.
- [reloadData(forRowIndexes:inColumn:)](nsbrowser/reloaddata%28forrowindexes_incolumn_%29.md): Updates the rows in the column with the specified column index with indexes in the specified set.

### Scrolling

- [hasHorizontalScroller](nsbrowser/hashorizontalscroller.md): A Boolean that indicates whether the browser has a horizontal scroller.
- [scrollColumnToVisible(\_:)](nsbrowser/scrollcolumntovisible%28__%29.md): Scrolls to make the specified column visible.
- [scrollColumnsLeft(by:)](nsbrowser/scrollcolumnsleft%28by_%29.md): Scrolls columns left by the specified number of columns.
- [scrollColumnsRight(by:)](nsbrowser/scrollcolumnsright%28by_%29.md): Scrolls columns right by the specified number of columns.
- [scrollRowToVisible(\_:inColumn:)](nsbrowser/scrollrowtovisible%28__incolumn_%29.md): Scrolls the specified row to be visible within the specified column.

### Dragging

- [setDraggingSourceOperationMask(\_:forLocal:)](nsbrowser/setdraggingsourceoperationmask%28__forlocal_%29.md): Specifies the drag-operation mask for dragging operations with local or external destinations.
- [canDragRows(with:inColumn:with:)](nsbrowser/candragrows%28with_incolumn_with_%29.md): Indicates whether the browser can attempt to initiate a drag of the given rows for the given event.
- [draggingImageForRows(with:inColumn:with:offset:)](nsbrowser/draggingimageforrows%28with_incolumn_with_offset_%29.md): Provides an image to represent dragged rows during a drag operation on the browser.

### Getting Column Frames

- [frame(ofColumn:)](nsbrowser/frame%28ofcolumn_%29.md): Returns the rectangle containing the given column.
- [frame(ofInsideOfColumn:)](nsbrowser/frame%28ofinsideofcolumn_%29.md): Returns the rectangle containing the specified column, not including borders.

### Getting Row Frames

- [frame(ofRow:inColumn:)](nsbrowser/frame%28ofrow_incolumn_%29.md): Returns the frame of the cell at the specified location, including the expandable arrow.
- [getRow(\_:column:for:)](nsbrowser/getrow%28__column_for_%29.md): Gets the row and column coordinates for the specified point, if a cell exists at that point.

### Managing Actions

- [doubleAction](nsbrowser/doubleaction.md): The browser’s double-click action method.
- [sendsActionOnArrowKeys](nsbrowser/sendsactiononarrowkeys.md): A Boolean that indicates whether pressing an arrow key causes an action message to be sent.
- [sendAction()](nsbrowser/sendaction%28%29.md): Sends the action message to the target.

### Handling Mouse-Click Events

- [doClick(\_:)](nsbrowser/doclick%28__%29.md): Responds to (single) mouse clicks in a column of the browser.
- [doDoubleClick(\_:)](nsbrowser/dodoubleclick%28__%29.md): Responds to double clicks in a column of the browser.
- [clickedColumn](nsbrowser/clickedcolumn.md): The column number of the cell that the user clicked to display a context menu.
- [clickedRow](nsbrowser/clickedrow.md): The row number of the cell that the user clicked to display a context menu.

### Sizing

- [removeSavedColumns(withAutosaveName:)](nsbrowser/removesavedcolumns%28withautosavename_%29.md): Removes the column configuration data stored under the given name from the application’s user defaults.
- [columnsAutosaveName](nsbrowser/columnsautosavename-swift.property.md): The name used to automatically save the browser’s column configuration.
- [NSBrowser.ColumnsAutosaveName](nsbrowser/columnsautosavename-swift.typealias.md)
- [columnContentWidth(forColumnWidth:)](nsbrowser/columncontentwidth%28forcolumnwidth_%29.md): Returns the content width for a given column width.
- [columnWidth(forColumnContentWidth:)](nsbrowser/columnwidth%28forcolumncontentwidth_%29.md): Returns the column width for the width of the given column’s content.
- [columnResizingType](nsbrowser/columnresizingtype-swift.property.md): A constant indicating the browser’s column resizing type.
- [prefersAllColumnUserResizing](nsbrowser/prefersallcolumnuserresizing.md): A Boolean that indicates whether the browser is set to resize all columns simultaneously rather than resizing a single column at a time.
- [width(ofColumn:)](nsbrowser/width%28ofcolumn_%29.md): Returns the width of the specified column.
- [setWidth(\_:ofColumn:)](nsbrowser/setwidth%28__ofcolumn_%29.md): Sets the width of the specified column.
- [defaultColumnWidth()](nsbrowser/defaultcolumnwidth%28%29.md): Returns the default column width of the browser’s columns.
- [setDefaultColumnWidth(\_:)](nsbrowser/setdefaultcolumnwidth%28__%29.md): Sets the default column width for new browser columns that do not otherwise have an initial width from defaults or the browser’s delegate.
- [rowHeight](nsbrowser/rowheight.md): The height of the browser’s rows.

### Constants

- [NSBrowser.ColumnResizingType](nsbrowser/columnresizingtype-swift.enum.md): Types of browser column resizing.
- [NSBrowser.DropOperation](nsbrowser/dropoperation.md): The type used to specify the drop type of a drag-and-drop operation. See [browser(\_:validateDrop:proposedRow:column:dropOperation:)](nsbrowserdelegate/browser%28__validatedrop_proposedrow_column_dropoperation_%29.md) for more information.
- [Application Kit Versions for NSBrowser Functionality](application-kit-versions-for-nsbrowser-functionality.md): The version of the AppKit.framework containing a specific bug fix or capability.

### Notifications

- [columnConfigurationDidChangeNotification](nsbrowser/columnconfigurationdidchangenotification.md): Notifies the delegate when the width of a browser column has changed.

### Deprecated

- [column(of:)](nsbrowser/column%28of_%29.md): Deprecated. Returns the column number in which the given matrix is located.
- [matrix(inColumn:)](nsbrowser/matrix%28incolumn_%29.md): Deprecated. Returns the matrix located in the specified column.
- [matrixClass()](nsbrowser/matrixclass%28%29.md): Deprecated. Returns the matrix class used in the browser’s columns.
- [setMatrixClass(\_:)](nsbrowser/setmatrixclass%28__%29.md): Deprecated. Sets the matrix class to be used in the browser’s columns.

### Instance Methods

- [selectedCell()](nsbrowser/selectedcell%28%29.md)

### Structures

- [NSBrowser.ColumnConfigurationDidChangeMessage](nsbrowser/columnconfigurationdidchangemessage.md)

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSBrowser (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An interface that displays a hierarchically organized list of data items that can be navigated and selected.

## Declaration

```objectivec
@interface NSBrowser : NSControl
```

<a id="overview"></a>

## Overview

A browser displays information using a set of columns, which are indexed from left to right. Each successive column displays the next level down in the data hierarchy. This class uses the [NSBrowserCell](nsbrowsercell.md) class to implement its user interface.

Browsers have the following components:

- Columns
- Scroll views
- Matrices
- Browser cells

To the user, browsers display data in columns and rows within each column. These components are arranged in the following component hierarchy:

```objc
Browser
|---Columns [1..*]
    |---Scroll view
       |---Matrix
           |---Rows [0..*]
```

<a id="Superclass-overrides"></a>

### Superclass overrides

- [opaque](nsview/isopaque.md) returns [true](https://developer.apple.com/documentation/swift/true) when the browser doesn’t have a title and its background color’s alpha component is `1.0`; otherwise, it returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Protocol-implementations"></a>

### Protocol implementations

- The [NSBrowser](nsbrowser.md) implementation of [namesOfPromisedFilesDroppedAtDestination:](nsdragginginfo/namesofpromisedfilesdropped%28atdestination_%29.md) provides the names of the files that the browser promises to create at a specified location, the result of sending `browser:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWithIndexes:inColumn:` to the delegate.

## Topics

### Configuring Browsers

- [reusesColumns](nsbrowser/reusescolumns.md): A Boolean that indicates whether the browser reuses matrix objects after their columns are unloaded.
- [maxVisibleColumns](nsbrowser/maxvisiblecolumns.md): The maximum number of visible columns.
- [autohidesScroller](nsbrowser/autohidesscroller.md): A Boolean that indicates whether the browser automatically hides its scroller.
- [backgroundColor](nsbrowser/backgroundcolor.md): The browser’s background color.
- [minColumnWidth](nsbrowser/mincolumnwidth.md): The minimum column width, in pixels.
- [separatesColumns](nsbrowser/separatescolumns.md): A Boolean that indicates whether columns are separated by bezeled borders.
- [takesTitleFromPreviousColumn](nsbrowser/takestitlefrompreviouscolumn.md): A Boolean that indicates whether a column takes its title from the selected cell in the previous column.
- [tile](nsbrowser/tile%28%29.md): Adjusts the various subviews of the browser—scrollers, columns, titles, and so on—without redrawing.
- [delegate](nsbrowser/delegate.md): The browser’s delegate.

### Managing Component Types

- [cellClass](nsbrowser/cellclass.md): Returns the `NSBrowserCell` class.
- [setCellClass:](nsbrowser/setcellclass%28__%29.md): Sets the class of the cell to be used by the matrices in the columns of the browser.
- [cellPrototype](nsbrowser/cellprototype.md): The prototype `NSCell` for displaying items in the matrices in the columns of the browser.

### Managing Selection Behavior

- [allowsBranchSelection](nsbrowser/allowsbranchselection.md): A Boolean that indicates whether the user can select branch items.
- [allowsEmptySelection](nsbrowser/allowsemptyselection.md): A Boolean that indicates whether there can be nothing selected.
- [allowsMultipleSelection](nsbrowser/allowsmultipleselection.md): A Boolean that indicates whether the user can select multiple items.
- [selectedRowIndexesInColumn:](nsbrowser/selectedrowindexes%28incolumn_%29.md): Provides the indexes of the selected rows in a given column of the browser.
- [selectRowIndexes:inColumn:](nsbrowser/selectrowindexes%28__incolumn_%29.md): Specifies the selected rows in a given column of the browser.
- [allowsTypeSelect](nsbrowser/allowstypeselect.md): A Boolean that indicates whether the browser allows keystroke-based selection (type select).

### Managing Selection

- [selectedCell](nsbrowser/selectedcell.md): The last (rightmost and lowest) selected cell.
- [selectedCellInColumn:](nsbrowser/selectedcell%28incolumn_%29.md): Returns the last (lowest) cell selected in the given column.
- [selectedCells](nsbrowser/selectedcells.md): All cells selected in the rightmost column.
- [selectAll:](nsbrowser/selectall%28__%29.md): Selects all cells in the last column of the browser.
- [selectedRowInColumn:](nsbrowser/selectedrow%28incolumn_%29.md): Returns the row index of the selected cell in the specified column.
- [selectRow:inColumn:](nsbrowser/selectrow%28__incolumn_%29.md): Selects the cell at the specified row and column index.
- [selectionIndexPath](nsbrowser/selectionindexpath.md): The index path of the item selected in the browser.
- [selectionIndexPaths](nsbrowser/selectionindexpaths.md): An array containing the index paths of all items selected in the browser.

### Accessing Components

- [loadedCellAtRow:column:](nsbrowser/loadedcell%28atrow_column_%29.md): Loads, if necessary, and returns the cell at the specified row and column location.
- [editItemAtIndexPath:withEvent:select:](nsbrowser/edititem%28at_with_select_%29.md): Begins editing the item at the specified path.
- [itemAtIndexPath:](nsbrowser/item%28at_%29.md): Returns the item at the specified index path.
- [itemAtRow:inColumn:](nsbrowser/item%28atrow_incolumn_%29.md): Returns the item located at the specified row and column.
- [indexPathForColumn:](nsbrowser/indexpath%28forcolumn_%29.md): Returns the index path of the item whose children are displayed in the given column.
- [isLeafItem:](nsbrowser/isleafitem%28__%29.md): Returns whether the specified item is a leaf item.
- [parentForItemsInColumn:](nsbrowser/parentforitems%28incolumn_%29.md): Returns the item that contains the children located in the specified column.

### Managing the Path

- [path](nsbrowser/path%28%29.md): Returns a string representing the browser’s current path.
- [setPath:](nsbrowser/setpath%28__%29.md): Sets the path to be displayed by the browser.
- [pathToColumn:](nsbrowser/path%28tocolumn_%29.md): Returns a string representing the path from the first column up to, but not including, the column at the given index.
- [pathSeparator](nsbrowser/pathseparator.md): The path separator.

### Managing Columns

- [addColumn](nsbrowser/addcolumn%28%29.md): Adds a column to the right of the last column.
- [selectedColumn](nsbrowser/selectedcolumn.md): The index of the last column with a selected item.
- [lastColumn](nsbrowser/lastcolumn.md): The index of the last column loaded.
- [firstVisibleColumn](nsbrowser/firstvisiblecolumn.md): The index of the first visible column.
- [numberOfVisibleColumns](nsbrowser/numberofvisiblecolumns.md): The number of visible columns.
- [lastVisibleColumn](nsbrowser/lastvisiblecolumn.md): The index of the last visible column.
- [validateVisibleColumns](nsbrowser/validatevisiblecolumns%28%29.md): Validates the browser’s visible columns.
- [loaded](nsbrowser/isloaded.md): A Boolean that indicates whether column 0 is loaded.
- [loadColumnZero](nsbrowser/loadcolumnzero%28%29.md): Loads column 0; unloads previously loaded columns.
- [reloadColumn:](nsbrowser/reloadcolumn%28__%29.md): Reloads the given column.

### Accessing Column Titles

- [titleOfColumn:](nsbrowser/title%28ofcolumn_%29.md): Returns the title displayed for the given column.
- [setTitle:ofColumn:](nsbrowser/settitle%28__ofcolumn_%29.md): Sets the title of the given column.
- [titled](nsbrowser/istitled.md): A Boolean that indicates whether columns display titles.
- [drawTitleOfColumn:inRect:](nsbrowser/drawtitle%28ofcolumn_in_%29.md): Draws the title for the specified column within the given rectangle.
- [titleHeight](nsbrowser/titleheight.md): The height of the column titles for the browser.
- [titleFrameOfColumn:](nsbrowser/titleframe%28ofcolumn_%29.md): Returns the bounds of the title frame for the specified column.

### Updating Browsers

- [noteHeightOfRowsWithIndexesChanged:inColumn:](nsbrowser/noteheightofrowswithindexeschanged%28__incolumn_%29.md): Immediately retiles the browser’s columns using row heights specified by the browser’s delegate.
- [reloadDataForRowIndexes:inColumn:](nsbrowser/reloaddata%28forrowindexes_incolumn_%29.md): Updates the rows in the column with the specified column index with indexes in the specified set.

### Scrolling

- [hasHorizontalScroller](nsbrowser/hashorizontalscroller.md): A Boolean that indicates whether the browser has a horizontal scroller.
- [scrollColumnToVisible:](nsbrowser/scrollcolumntovisible%28__%29.md): Scrolls to make the specified column visible.
- [scrollColumnsLeftBy:](nsbrowser/scrollcolumnsleft%28by_%29.md): Scrolls columns left by the specified number of columns.
- [scrollColumnsRightBy:](nsbrowser/scrollcolumnsright%28by_%29.md): Scrolls columns right by the specified number of columns.
- [scrollRowToVisible:inColumn:](nsbrowser/scrollrowtovisible%28__incolumn_%29.md): Scrolls the specified row to be visible within the specified column.

### Dragging

- [setDraggingSourceOperationMask:forLocal:](nsbrowser/setdraggingsourceoperationmask%28__forlocal_%29.md): Specifies the drag-operation mask for dragging operations with local or external destinations.
- [canDragRowsWithIndexes:inColumn:withEvent:](nsbrowser/candragrows%28with_incolumn_with_%29.md): Indicates whether the browser can attempt to initiate a drag of the given rows for the given event.
- [draggingImageForRowsWithIndexes:inColumn:withEvent:offset:](nsbrowser/draggingimageforrows%28with_incolumn_with_offset_%29.md): Provides an image to represent dragged rows during a drag operation on the browser.

### Getting Column Frames

- [frameOfColumn:](nsbrowser/frame%28ofcolumn_%29.md): Returns the rectangle containing the given column.
- [frameOfInsideOfColumn:](nsbrowser/frame%28ofinsideofcolumn_%29.md): Returns the rectangle containing the specified column, not including borders.

### Getting Row Frames

- [frameOfRow:inColumn:](nsbrowser/frame%28ofrow_incolumn_%29.md): Returns the frame of the cell at the specified location, including the expandable arrow.
- [getRow:column:forPoint:](nsbrowser/getrow%28__column_for_%29.md): Gets the row and column coordinates for the specified point, if a cell exists at that point.

### Managing Actions

- [doubleAction](nsbrowser/doubleaction.md): The browser’s double-click action method.
- [sendsActionOnArrowKeys](nsbrowser/sendsactiononarrowkeys.md): A Boolean that indicates whether pressing an arrow key causes an action message to be sent.
- [sendAction](nsbrowser/sendaction%28%29.md): Sends the action message to the target.

### Handling Mouse-Click Events

- [doClick:](nsbrowser/doclick%28__%29.md): Responds to (single) mouse clicks in a column of the browser.
- [doDoubleClick:](nsbrowser/dodoubleclick%28__%29.md): Responds to double clicks in a column of the browser.
- [clickedColumn](nsbrowser/clickedcolumn.md): The column number of the cell that the user clicked to display a context menu.
- [clickedRow](nsbrowser/clickedrow.md): The row number of the cell that the user clicked to display a context menu.

### Sizing

- [removeSavedColumnsWithAutosaveName:](nsbrowser/removesavedcolumns%28withautosavename_%29.md): Removes the column configuration data stored under the given name from the application’s user defaults.
- [columnsAutosaveName](nsbrowser/columnsautosavename-swift.property.md): The name used to automatically save the browser’s column configuration.
- [NSBrowserColumnsAutosaveName](nsbrowser/columnsautosavename-swift.typealias.md)
- [columnContentWidthForColumnWidth:](nsbrowser/columncontentwidth%28forcolumnwidth_%29.md): Returns the content width for a given column width.
- [columnWidthForColumnContentWidth:](nsbrowser/columnwidth%28forcolumncontentwidth_%29.md): Returns the column width for the width of the given column’s content.
- [columnResizingType](nsbrowser/columnresizingtype-swift.property.md): A constant indicating the browser’s column resizing type.
- [prefersAllColumnUserResizing](nsbrowser/prefersallcolumnuserresizing.md): A Boolean that indicates whether the browser is set to resize all columns simultaneously rather than resizing a single column at a time.
- [widthOfColumn:](nsbrowser/width%28ofcolumn_%29.md): Returns the width of the specified column.
- [setWidth:ofColumn:](nsbrowser/setwidth%28__ofcolumn_%29.md): Sets the width of the specified column.
- [defaultColumnWidth](nsbrowser/defaultcolumnwidth%28%29.md): Returns the default column width of the browser’s columns.
- [setDefaultColumnWidth:](nsbrowser/setdefaultcolumnwidth%28__%29.md): Sets the default column width for new browser columns that do not otherwise have an initial width from defaults or the browser’s delegate.
- [rowHeight](nsbrowser/rowheight.md): The height of the browser’s rows.

### Constants

- [NSBrowserColumnResizingType](nsbrowser/columnresizingtype-swift.enum.md): Types of browser column resizing.
- [NSBrowserDropOperation](nsbrowser/dropoperation.md): The type used to specify the drop type of a drag-and-drop operation. See [browser:validateDrop:proposedRow:column:dropOperation:](nsbrowserdelegate/browser%28__validatedrop_proposedrow_column_dropoperation_%29.md) for more information.
- [Application Kit Versions for NSBrowser Functionality](application-kit-versions-for-nsbrowser-functionality.md): The version of the AppKit.framework containing a specific bug fix or capability.

### Notifications

- [NSBrowserColumnConfigurationDidChangeNotification](nsbrowser/columnconfigurationdidchangenotification.md): Notifies the delegate when the width of a browser column has changed.

### Deprecated

- [updateScroller](nsbrowser/updatescroller.md): Deprecated. Updates the horizontal scroller to reflect column positions.
- [scrollViaScroller:](nsbrowser/scrollviascroller_.md): Deprecated. Scrolls columns left or right based on an `NSScroller`.
- [displayAllColumns](nsbrowser/displayallcolumns.md): Deprecated. Updates the browser to display all loaded columns.
- [displayColumn:](nsbrowser/displaycolumn_.md): Deprecated. Updates the browser to display the given column.
- [columnOfMatrix:](nsbrowser/column%28of_%29.md): Deprecated. Returns the column number in which the given matrix is located.
- [matrixInColumn:](nsbrowser/matrix%28incolumn_%29.md): Deprecated. Returns the matrix located in the specified column.
- [matrixClass](nsbrowser/matrixclass%28%29.md): Deprecated. Returns the matrix class used in the browser’s columns.
- [setMatrixClass:](nsbrowser/setmatrixclass%28__%29.md): Deprecated. Sets the matrix class to be used in the browser’s columns.

### Instance Methods

- [acceptsArrowKeys](nsbrowser/acceptsarrowkeys.md): Deprecated. Indicates whether the browser allows navigation using the arrow keys.
- [setAcceptsArrowKeys:](nsbrowser/setacceptsarrowkeys_.md): Deprecated. Specifies whether the browser allows navigation using the arrow keys.

## Relationships

### Inherits From

- [NSControl](nscontrol.md)
