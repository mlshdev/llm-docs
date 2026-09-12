> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix](https://developer.apple.com/documentation/appkit/nsmatrix)

# NSMatrix (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A legacy interface for grouping radio buttons or other types of cells together.

## Declaration

```swift
class NSMatrix
```

<a id="overview"></a>

## Overview

> **Important**

>  Use of NSMatrix is discouraged in apps that run in macOS 10.8 and later. If you need to create a radio button group in an app that runs in macOS 10.8 and later, create instances of [NSButton](https://developer.apple.com/library/archive/technotes/tn2219/_index.html#//apple_ref/doc/uid/DTS10004624-CH1-SUBSECTION12) that each specify a button type of `NSRadioButton` and specify the same action and the same superview for each button in the group.

`NSMatrix` uses flipped coordinates by default. The cells in an [NSMatrix](nsmatrix.md) object are numbered by row and column, each starting with 0; for example, the top left [NSCell](nscell.md) would be at (0, 0), and the [NSCell](nscell.md) that’s second down and third across would be at (1, 2).

The [NSMatrix](nsmatrix.md) class has the notion of a single selected cell, which is the cell that was most recently clicked or that was so designated by a [selectCell(atRow:column:)](nsmatrix/selectcell%28atrow_column_%29.md) or [selectCell(withTag:)](nsmatrix/selectcell%28withtag_%29.md) message. The selected cell is the cell chosen for action messages except for [performClick(\_:)](nscell/performclick%28__%29.md) ([NSCell](nscell.md)), which is assigned to the key cell. (The key cell is generally identical to the selected cell, but can be given click focus while leaving the selected cell unchanged.) If the user has selected multiple cells, the selected cell is the one lowest and furthest to the right in the matrix of cells.

## Topics

### Initializing an NSMatrix Object

- [init(frame:)](nsmatrix/init%28frame_%29.md): Initializes a newly allocated matrix with the specified frame.
- [init(frame:mode:cellClass:numberOfRows:numberOfColumns:)](nsmatrix/init%28frame_mode_cellclass_numberofrows_numberofcolumns_%29.md): Initializes and returns a newly allocated matrix of the specified size using cells of the given class.
- [init(frame:mode:prototype:numberOfRows:numberOfColumns:)](nsmatrix/init%28frame_mode_prototype_numberofrows_numberofcolumns_%29.md): Initializes and returns a newly allocated matrix of the specified size using the given cell as a prototype.

### Configuring the Matrix Object

- [mode](nsmatrix/mode-swift.property.md): The selection mode of the receiver.
- [allowsEmptySelection](nsmatrix/allowsemptyselection.md): A Boolean that indicates whether a radio-mode matrix supports an empty selection.
- [isSelectionByRect](nsmatrix/isselectionbyrect.md): A Boolean that indicates whether the user can select a rectangle of cells in the receiver by dragging the cursor.

### Managing the Cell Class

- [cellClass](nsmatrix/cellclass.md): The subclass of [NSCell](nscell.md) that the matrix uses when creating new (empty) cells.
- [prototype](nsmatrix/prototype.md): The prototype cell that’s copied whenever the matrix creates a new cell.

### Laying Out the Cells of the Matrix

- [addColumn()](nsmatrix/addcolumn%28%29.md): Adds a new column of cells to the right of the last column.
- [addColumn(with:)](nsmatrix/addcolumn%28with_%29.md): Adds a new column of cells to the right of the last column, using the given cells.
- [addRow()](nsmatrix/addrow%28%29.md): Adds a new row of cells below the last row.
- [addRow(with:)](nsmatrix/addrow%28with_%29.md): Adds a new row of cells below the last row, using the specified cells.
- [cellFrame(atRow:column:)](nsmatrix/cellframe%28atrow_column_%29.md): Returns the frame rectangle of the cell that would be drawn at the specified location.
- [cellSize](nsmatrix/cellsize.md): The size of each cell in the matrix.
- [getNumberOfRows(\_:columns:)](nsmatrix/getnumberofrows%28__columns_%29.md): Obtains the number of rows and columns in the receiver.
- [insertColumn(\_:)](nsmatrix/insertcolumn%28__%29.md): Inserts a new column of cells at the specified location.
- [insertColumn(\_:with:)](nsmatrix/insertcolumn%28__with_%29.md): Inserts a new column of cells before the specified column, using the given cells.
- [insertRow(\_:)](nsmatrix/insertrow%28__%29.md): Inserts a new row of cells before the specified row.
- [insertRow(\_:with:)](nsmatrix/insertrow%28__with_%29.md): Inserts a new row of cells before the specified row, using the given cells.
- [intercellSpacing](nsmatrix/intercellspacing.md): The vertical and horizontal spacing between cells in the matrix.
- [makeCell(atRow:column:)](nsmatrix/makecell%28atrow_column_%29.md): Creates a new cell at the location specified by the given row and column in the receiver.
- [numberOfColumns](nsmatrix/numberofcolumns.md): The number of columns in the matrix.
- [numberOfRows](nsmatrix/numberofrows.md): The number of rows in the matrix.
- [putCell(\_:atRow:column:)](nsmatrix/putcell%28__atrow_column_%29.md): Replaces the cell at the specified row and column with the new cell.
- [removeColumn(\_:)](nsmatrix/removecolumn%28__%29.md): Removes the specified column at from the receiver.
- [removeRow(\_:)](nsmatrix/removerow%28__%29.md): Removes the specified row from the receiver.
- [renewRows(\_:columns:)](nsmatrix/renewrows%28__columns_%29.md): Changes the number of rows and columns in the receiver.
- [sort(using:context:)](nsmatrix/sort%28using_context_%29.md): Sorts the receiver’s cells in ascending order as defined by the specified comparison function.
- [sort(using:)](nsmatrix/sort%28using_%29.md): Sorts the receiver’s cells in ascending order as defined by the comparison method.

### Auto Layout Sizing

- [autorecalculatesCellSize](nsmatrix/autorecalculatescellsize.md): A Boolean that indicates whether the matrix auto-recalculates its cell size.

### Finding Matrix Coordinates

- [getRow(\_:column:for:)](nsmatrix/getrow%28__column_for_%29.md): Indicates whether the specified point lies within one of the cells of the matrix and returns the location of the cell within which the point lies.
- [getRow(\_:column:of:)](nsmatrix/getrow%28__column_of_%29.md): Searches the receiver for the specified cell and returns the row and column of the cell

### Managing Attributes of Individual Cells

- [setState(\_:atRow:column:)](nsmatrix/setstate%28__atrow_column_%29.md): Sets the state of the cell at specified location.
- [setToolTip(\_:for:)](nsmatrix/settooltip%28__for_%29.md): Sets the tooltip for the cell.
- [toolTip(for:)](nsmatrix/tooltip%28for_%29.md): Returns the tooltip for the specified cell.

### Selecting and Deselecting Cells

- [selectCell(atRow:column:)](nsmatrix/selectcell%28atrow_column_%29.md): Selects the cell at the specified row and column within the receiver.
- [selectCell(withTag:)](nsmatrix/selectcell%28withtag_%29.md): Selects the last cell with the given tag.
- [selectAll(\_:)](nsmatrix/selectall%28__%29.md): Selects and highlights all cells in the receiver.
- [keyCell](nsmatrix/keycell.md): The cell that will be clicked when the user presses the Space bar.
- [setSelectionFrom(\_:to:anchor:highlight:)](nsmatrix/setselectionfrom%28__to_anchor_highlight_%29.md): Programmatically selects a range of cells.
- [deselectAllCells()](nsmatrix/deselectallcells%28%29.md): Deselects all cells in the receiver and, if necessary, redisplays the receiver.
- [deselectSelectedCell()](nsmatrix/deselectselectedcell%28%29.md): Deselects the selected cell or cells.

### Finding Cells

- [selectedCells](nsmatrix/selectedcells.md): An array containing all of the matrix’s highlighted cells plus its selected cell.
- [selectedColumn](nsmatrix/selectedcolumn.md): The column number of the selected cell.
- [selectedRow](nsmatrix/selectedrow.md): The row number of the selected cell.
- [cell(atRow:column:)](nsmatrix/cell%28atrow_column_%29.md): Returns the cell at the specified row and column.
- [cell(withTag:)](nsmatrix/cell%28withtag_%29.md): Searches the receiver and returns the last cell matching the specified tag.
- [cells](nsmatrix/cells.md): An array containing the cells of the matrix.

### Modifying Graphics Attributes

- [backgroundColor](nsmatrix/backgroundcolor.md): The background color of the matrix (the space between the cells).
- [cellBackgroundColor](nsmatrix/cellbackgroundcolor.md): The background color of the matrix’s cells.
- [drawsBackground](nsmatrix/drawsbackground.md): A Boolean that indicates whether the matrix draws its background.
- [drawsCellBackground](nsmatrix/drawscellbackground.md): A Boolean that indicates whether the matrix draws the background within each of its cells.

### Editing Text in Cells

- [selectText(\_:)](nsmatrix/selecttext%28__%29.md): Selects text in the currently selected cell or in the key cell.
- [selectText(atRow:column:)](nsmatrix/selecttext%28atrow_column_%29.md): Selects the text in the cell at the specified location and returns the cell.
- [textShouldBeginEditing(\_:)](nsmatrix/textshouldbeginediting%28__%29.md): Requests permission to begin editing text.
- [textDidBeginEditing(\_:)](nsmatrix/textdidbeginediting%28__%29.md): Invoked when there’s a change in the text after the receiver gains first responder status.
- [textDidChange(\_:)](nsmatrix/textdidchange%28__%29.md): Invoked when a key-down event or paste operation occurs that changes the receiver’s contents.
- [textShouldEndEditing(\_:)](nsmatrix/textshouldendediting%28__%29.md): Requests permission to end editing.
- [textDidEndEditing(\_:)](nsmatrix/textdidendediting%28__%29.md): Invoked when text editing ends.

### Setting Tab Key Behavior

- [tabKeyTraversesCells](nsmatrix/tabkeytraversescells.md): A Boolean that indicates whether pressing the Tab key advances the key cell to the next selectable cell.

### Managing the Delegate

- [delegate](nsmatrix/delegate.md): The delegate for messages from the field editor.
- [NSMatrixDelegate](nsmatrixdelegate.md): The `NSMatrixDelegate` protocol defines the optional methods implemented by delegates of `NSMatrix` objects.

### Resizing the Matrix and Its Cells

- [autosizesCells](nsmatrix/autosizescells.md): A Boolean that indicates whether the cell sizes change when the receiver is resized.
- [setValidateSize(\_:)](nsmatrix/setvalidatesize%28__%29.md): Specifies whether the receiver’s size information is validated.
- [sizeToCells()](nsmatrix/sizetocells%28%29.md): Changes the width and the height of the receiver’s frame so it exactly contains the cells.

### Scrolling Cells in the Matrix

- [isAutoscroll](nsmatrix/isautoscroll.md): A Boolean that indicates whether the receiver is automatically scrolled.
- [setScrollable(\_:)](nsmatrix/setscrollable%28__%29.md): Specifies whether the cells in the matrix are scrollable.
- [scrollCellToVisible(atRow:column:)](nsmatrix/scrollcelltovisible%28atrow_column_%29.md): Scrolls the receiver so the specified cell is visible.

### Displaying and Highlighting Cells

- [drawCell(atRow:column:)](nsmatrix/drawcell%28atrow_column_%29.md): Displays the cell at the specified row and column.
- [highlightCell(\_:atRow:column:)](nsmatrix/highlightcell%28__atrow_column_%29.md): Highlights or unhighlights the cell at the specified row and column location.

### Managing and Sending Action Messages

- [sendAction()](nsmatrix/sendaction%28%29.md): If the selected cell has both an action and a target, sends its action to its target.
- [sendAction(\_:to:forAllCells:)](nsmatrix/sendaction%28__to_forallcells_%29.md): Iterates through the cells in the receiver, sending the specified selector to an object for each cell.
- [doubleAction](nsmatrix/doubleaction.md): The action sent to the target of the receiver when the user double-clicks a cell.
- [sendDoubleAction()](nsmatrix/senddoubleaction%28%29.md): Sends the double-click action message to the target of the receiver.

### Handling Event and Action Messages

- [acceptsFirstMouse(for:)](nsmatrix/acceptsfirstmouse%28for_%29.md): Returns a Boolean value indicating whether the receiver accepts the first mouse.
- [mouseDown(with:)](nsmatrix/mousedown%28with_%29.md): Responds to a mouse-down event.
- [mouseDownFlags](nsmatrix/mousedownflags.md): The flags in effect at the mouse-down event that started the current tracking session.
- [performKeyEquivalent(with:)](nsmatrix/performkeyequivalent%28with_%29.md): Looks for a cell that has the given key equivalent and, if found, makes that cell respond as if clicked.

### Managing the Cursor

- [resetCursorRects()](nsmatrix/resetcursorrects%28%29.md): Resets cursor rectangles so the cursor becomes an I-beam over text cells.

### Constants

- [NSMatrix.Mode](nsmatrix/mode-swift.enum.md): These constants determine how [NSCell](nscell.md) objects behave when an [NSMatrix](nsmatrix.md) object is tracking the mouse.

### Instance Methods

- [selectedCell()](nsmatrix/selectedcell%28%29.md)

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

### Inherited By

- [NSForm](nsform.md)

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
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)
- [NSViewToolTipOwner](nsviewtooltipowner.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controls

- [Responding to control-based events using target-action](https://developer.apple.com/documentation/uikit/responding-to-control-based-events-using-target-action): Handle user input by connecting buttons, sliders, and other controls to your app’s code using the target-action design pattern.
- [NSButton](nsbutton.md): A control that defines an area on the screen that a user clicks to trigger an action.
- [NSColorWell](nscolorwell.md): A control that displays a color value and lets the user change that color value.
- [Combo Box](combo-box.md): Display a list of values in a pop-up menu that lets the user select a value or type in a custom value.
- [NSComboButton](nscombobutton.md): A button with a pull-down menu and a default action.
- [Date Picker](date-picker.md): Display a calendar date and provide controls for editing the date value.
- [NSImageView](nsimageview.md): A display of image data in a frame.
- [NSLevelIndicator](nslevelindicator.md): A visual representation of a level or quantity, using discrete values.
- [Path Control](path-control.md): A display of a file system path or virtual path information.
- [NSPopUpButton](nspopupbutton.md): A control for selecting an item from a list.
- [NSProgressIndicator](nsprogressindicator.md): An interface that provides visual feedback to the user about the status of an ongoing task.
- [NSRuleEditor](nsruleeditor.md): An interface for configuring a rule-based list of options.
- [NSPredicateEditor](nspredicateeditor.md): A defined set of rules that allows the editing of predicate objects.
- [Search Field](search-field.md): Provide a text field that is optimized for text-based search interfaces.
- [NSSegmentedControl](nssegmentedcontrol.md): Display one or more buttons in a single horizontal group.

# NSMatrix (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A legacy interface for grouping radio buttons or other types of cells together.

## Declaration

```objectivec
@interface NSMatrix : NSControl
```

<a id="overview"></a>

## Overview

> **Important**

>  Use of NSMatrix is discouraged in apps that run in macOS 10.8 and later. If you need to create a radio button group in an app that runs in macOS 10.8 and later, create instances of [NSButton](https://developer.apple.com/library/archive/technotes/tn2219/_index.html#//apple_ref/doc/uid/DTS10004624-CH1-SUBSECTION12) that each specify a button type of `NSRadioButton` and specify the same action and the same superview for each button in the group.

`NSMatrix` uses flipped coordinates by default. The cells in an [NSMatrix](nsmatrix.md) object are numbered by row and column, each starting with 0; for example, the top left [NSCell](nscell.md) would be at (0, 0), and the [NSCell](nscell.md) that’s second down and third across would be at (1, 2).

The [NSMatrix](nsmatrix.md) class has the notion of a single selected cell, which is the cell that was most recently clicked or that was so designated by a [selectCellAtRow:column:](nsmatrix/selectcell%28atrow_column_%29.md) or [selectCellWithTag:](nsmatrix/selectcell%28withtag_%29.md) message. The selected cell is the cell chosen for action messages except for [performClick:](nscell/performclick%28__%29.md) ([NSCell](nscell.md)), which is assigned to the key cell. (The key cell is generally identical to the selected cell, but can be given click focus while leaving the selected cell unchanged.) If the user has selected multiple cells, the selected cell is the one lowest and furthest to the right in the matrix of cells.

## Topics

### Initializing an NSMatrix Object

- [initWithFrame:](nsmatrix/init%28frame_%29.md): Initializes a newly allocated matrix with the specified frame.
- [initWithFrame:mode:cellClass:numberOfRows:numberOfColumns:](nsmatrix/init%28frame_mode_cellclass_numberofrows_numberofcolumns_%29.md): Initializes and returns a newly allocated matrix of the specified size using cells of the given class.
- [initWithFrame:mode:prototype:numberOfRows:numberOfColumns:](nsmatrix/init%28frame_mode_prototype_numberofrows_numberofcolumns_%29.md): Initializes and returns a newly allocated matrix of the specified size using the given cell as a prototype.

### Configuring the Matrix Object

- [mode](nsmatrix/mode-swift.property.md): The selection mode of the receiver.
- [allowsEmptySelection](nsmatrix/allowsemptyselection.md): A Boolean that indicates whether a radio-mode matrix supports an empty selection.
- [selectionByRect](nsmatrix/isselectionbyrect.md): A Boolean that indicates whether the user can select a rectangle of cells in the receiver by dragging the cursor.

### Managing the Cell Class

- [cellClass](nsmatrix/cellclass.md): The subclass of [NSCell](nscell.md) that the matrix uses when creating new (empty) cells.
- [prototype](nsmatrix/prototype.md): The prototype cell that’s copied whenever the matrix creates a new cell.

### Laying Out the Cells of the Matrix

- [addColumn](nsmatrix/addcolumn%28%29.md): Adds a new column of cells to the right of the last column.
- [addColumnWithCells:](nsmatrix/addcolumn%28with_%29.md): Adds a new column of cells to the right of the last column, using the given cells.
- [addRow](nsmatrix/addrow%28%29.md): Adds a new row of cells below the last row.
- [addRowWithCells:](nsmatrix/addrow%28with_%29.md): Adds a new row of cells below the last row, using the specified cells.
- [cellFrameAtRow:column:](nsmatrix/cellframe%28atrow_column_%29.md): Returns the frame rectangle of the cell that would be drawn at the specified location.
- [cellSize](nsmatrix/cellsize.md): The size of each cell in the matrix.
- [getNumberOfRows:columns:](nsmatrix/getnumberofrows%28__columns_%29.md): Obtains the number of rows and columns in the receiver.
- [insertColumn:](nsmatrix/insertcolumn%28__%29.md): Inserts a new column of cells at the specified location.
- [insertColumn:withCells:](nsmatrix/insertcolumn%28__with_%29.md): Inserts a new column of cells before the specified column, using the given cells.
- [insertRow:](nsmatrix/insertrow%28__%29.md): Inserts a new row of cells before the specified row.
- [insertRow:withCells:](nsmatrix/insertrow%28__with_%29.md): Inserts a new row of cells before the specified row, using the given cells.
- [intercellSpacing](nsmatrix/intercellspacing.md): The vertical and horizontal spacing between cells in the matrix.
- [makeCellAtRow:column:](nsmatrix/makecell%28atrow_column_%29.md): Creates a new cell at the location specified by the given row and column in the receiver.
- [numberOfColumns](nsmatrix/numberofcolumns.md): The number of columns in the matrix.
- [numberOfRows](nsmatrix/numberofrows.md): The number of rows in the matrix.
- [putCell:atRow:column:](nsmatrix/putcell%28__atrow_column_%29.md): Replaces the cell at the specified row and column with the new cell.
- [removeColumn:](nsmatrix/removecolumn%28__%29.md): Removes the specified column at from the receiver.
- [removeRow:](nsmatrix/removerow%28__%29.md): Removes the specified row from the receiver.
- [renewRows:columns:](nsmatrix/renewrows%28__columns_%29.md): Changes the number of rows and columns in the receiver.
- [sortUsingFunction:context:](nsmatrix/sort%28using_context_%29.md): Sorts the receiver’s cells in ascending order as defined by the specified comparison function.
- [sortUsingSelector:](nsmatrix/sort%28using_%29.md): Sorts the receiver’s cells in ascending order as defined by the comparison method.

### Auto Layout Sizing

- [autorecalculatesCellSize](nsmatrix/autorecalculatescellsize.md): A Boolean that indicates whether the matrix auto-recalculates its cell size.

### Finding Matrix Coordinates

- [getRow:column:forPoint:](nsmatrix/getrow%28__column_for_%29.md): Indicates whether the specified point lies within one of the cells of the matrix and returns the location of the cell within which the point lies.
- [getRow:column:ofCell:](nsmatrix/getrow%28__column_of_%29.md): Searches the receiver for the specified cell and returns the row and column of the cell

### Managing Attributes of Individual Cells

- [setState:atRow:column:](nsmatrix/setstate%28__atrow_column_%29.md): Sets the state of the cell at specified location.
- [setToolTip:forCell:](nsmatrix/settooltip%28__for_%29.md): Sets the tooltip for the cell.
- [toolTipForCell:](nsmatrix/tooltip%28for_%29.md): Returns the tooltip for the specified cell.

### Selecting and Deselecting Cells

- [selectCellAtRow:column:](nsmatrix/selectcell%28atrow_column_%29.md): Selects the cell at the specified row and column within the receiver.
- [selectCellWithTag:](nsmatrix/selectcell%28withtag_%29.md): Selects the last cell with the given tag.
- [selectAll:](nsmatrix/selectall%28__%29.md): Selects and highlights all cells in the receiver.
- [keyCell](nsmatrix/keycell.md): The cell that will be clicked when the user presses the Space bar.
- [setSelectionFrom:to:anchor:highlight:](nsmatrix/setselectionfrom%28__to_anchor_highlight_%29.md): Programmatically selects a range of cells.
- [deselectAllCells](nsmatrix/deselectallcells%28%29.md): Deselects all cells in the receiver and, if necessary, redisplays the receiver.
- [deselectSelectedCell](nsmatrix/deselectselectedcell%28%29.md): Deselects the selected cell or cells.

### Finding Cells

- [selectedCell](nsmatrix/selectedcell.md): The most recently selected cell.
- [selectedCells](nsmatrix/selectedcells.md): An array containing all of the matrix’s highlighted cells plus its selected cell.
- [selectedColumn](nsmatrix/selectedcolumn.md): The column number of the selected cell.
- [selectedRow](nsmatrix/selectedrow.md): The row number of the selected cell.
- [cellAtRow:column:](nsmatrix/cell%28atrow_column_%29.md): Returns the cell at the specified row and column.
- [cellWithTag:](nsmatrix/cell%28withtag_%29.md): Searches the receiver and returns the last cell matching the specified tag.
- [cells](nsmatrix/cells.md): An array containing the cells of the matrix.

### Modifying Graphics Attributes

- [backgroundColor](nsmatrix/backgroundcolor.md): The background color of the matrix (the space between the cells).
- [cellBackgroundColor](nsmatrix/cellbackgroundcolor.md): The background color of the matrix’s cells.
- [drawsBackground](nsmatrix/drawsbackground.md): A Boolean that indicates whether the matrix draws its background.
- [drawsCellBackground](nsmatrix/drawscellbackground.md): A Boolean that indicates whether the matrix draws the background within each of its cells.

### Editing Text in Cells

- [selectText:](nsmatrix/selecttext%28__%29.md): Selects text in the currently selected cell or in the key cell.
- [selectTextAtRow:column:](nsmatrix/selecttext%28atrow_column_%29.md): Selects the text in the cell at the specified location and returns the cell.
- [textShouldBeginEditing:](nsmatrix/textshouldbeginediting%28__%29.md): Requests permission to begin editing text.
- [textDidBeginEditing:](nsmatrix/textdidbeginediting%28__%29.md): Invoked when there’s a change in the text after the receiver gains first responder status.
- [textDidChange:](nsmatrix/textdidchange%28__%29.md): Invoked when a key-down event or paste operation occurs that changes the receiver’s contents.
- [textShouldEndEditing:](nsmatrix/textshouldendediting%28__%29.md): Requests permission to end editing.
- [textDidEndEditing:](nsmatrix/textdidendediting%28__%29.md): Invoked when text editing ends.

### Setting Tab Key Behavior

- [tabKeyTraversesCells](nsmatrix/tabkeytraversescells.md): A Boolean that indicates whether pressing the Tab key advances the key cell to the next selectable cell.

### Managing the Delegate

- [delegate](nsmatrix/delegate.md): The delegate for messages from the field editor.
- [NSMatrixDelegate](nsmatrixdelegate.md): The `NSMatrixDelegate` protocol defines the optional methods implemented by delegates of `NSMatrix` objects.

### Resizing the Matrix and Its Cells

- [autosizesCells](nsmatrix/autosizescells.md): A Boolean that indicates whether the cell sizes change when the receiver is resized.
- [setValidateSize:](nsmatrix/setvalidatesize%28__%29.md): Specifies whether the receiver’s size information is validated.
- [sizeToCells](nsmatrix/sizetocells%28%29.md): Changes the width and the height of the receiver’s frame so it exactly contains the cells.

### Scrolling Cells in the Matrix

- [autoscroll](nsmatrix/isautoscroll.md): A Boolean that indicates whether the receiver is automatically scrolled.
- [setScrollable:](nsmatrix/setscrollable%28__%29.md): Specifies whether the cells in the matrix are scrollable.
- [scrollCellToVisibleAtRow:column:](nsmatrix/scrollcelltovisible%28atrow_column_%29.md): Scrolls the receiver so the specified cell is visible.

### Displaying and Highlighting Cells

- [drawCellAtRow:column:](nsmatrix/drawcell%28atrow_column_%29.md): Displays the cell at the specified row and column.
- [highlightCell:atRow:column:](nsmatrix/highlightcell%28__atrow_column_%29.md): Highlights or unhighlights the cell at the specified row and column location.

### Managing and Sending Action Messages

- [sendAction](nsmatrix/sendaction%28%29.md): If the selected cell has both an action and a target, sends its action to its target.
- [sendAction:to:forAllCells:](nsmatrix/sendaction%28__to_forallcells_%29.md): Iterates through the cells in the receiver, sending the specified selector to an object for each cell.
- [doubleAction](nsmatrix/doubleaction.md): The action sent to the target of the receiver when the user double-clicks a cell.
- [sendDoubleAction](nsmatrix/senddoubleaction%28%29.md): Sends the double-click action message to the target of the receiver.

### Handling Event and Action Messages

- [acceptsFirstMouse:](nsmatrix/acceptsfirstmouse%28for_%29.md): Returns a Boolean value indicating whether the receiver accepts the first mouse.
- [mouseDown:](nsmatrix/mousedown%28with_%29.md): Responds to a mouse-down event.
- [mouseDownFlags](nsmatrix/mousedownflags.md): The flags in effect at the mouse-down event that started the current tracking session.
- [performKeyEquivalent:](nsmatrix/performkeyequivalent%28with_%29.md): Looks for a cell that has the given key equivalent and, if found, makes that cell respond as if clicked.

### Managing the Cursor

- [resetCursorRects](nsmatrix/resetcursorrects%28%29.md): Resets cursor rectangles so the cursor becomes an I-beam over text cells.

### Constants

- [NSMatrixMode](nsmatrix/mode-swift.enum.md): These constants determine how [NSCell](nscell.md) objects behave when an [NSMatrix](nsmatrix.md) object is tracking the mouse.

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

### Inherited By

- [NSForm](nsform.md)

### Conforms To

- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)
- [NSViewToolTipOwner](nsviewtooltipowner.md)

## See Also

### Controls

- [Responding to control-based events using target-action](https://developer.apple.com/documentation/uikit/responding-to-control-based-events-using-target-action): Handle user input by connecting buttons, sliders, and other controls to your app’s code using the target-action design pattern.
- [NSButton](nsbutton.md): A control that defines an area on the screen that a user clicks to trigger an action.
- [NSColorWell](nscolorwell.md): A control that displays a color value and lets the user change that color value.
- [Combo Box](combo-box.md): Display a list of values in a pop-up menu that lets the user select a value or type in a custom value.
- [NSComboButton](nscombobutton.md): A button with a pull-down menu and a default action.
- [Date Picker](date-picker.md): Display a calendar date and provide controls for editing the date value.
- [NSImageView](nsimageview.md): A display of image data in a frame.
- [NSLevelIndicator](nslevelindicator.md): A visual representation of a level or quantity, using discrete values.
- [Path Control](path-control.md): A display of a file system path or virtual path information.
- [NSPopUpButton](nspopupbutton.md): A control for selecting an item from a list.
- [NSProgressIndicator](nsprogressindicator.md): An interface that provides visual feedback to the user about the status of an ongoing task.
- [NSRuleEditor](nsruleeditor.md): An interface for configuring a rule-based list of options.
- [NSPredicateEditor](nspredicateeditor.md): A defined set of rules that allows the editing of predicate objects.
- [Search Field](search-field.md): Provide a text field that is optimized for text-based search interfaces.
- [NSSegmentedControl](nssegmentedcontrol.md): Display one or more buttons in a single horizontal group.
