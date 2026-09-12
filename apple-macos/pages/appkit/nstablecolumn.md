> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablecolumn](https://developer.apple.com/documentation/appkit/nstablecolumn)

# NSTableColumn (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The display characteristics and identifier for a column in a table view.

## Declaration

```swift
@MainActor class NSTableColumn
```

<a id="overview"></a>

## Overview

A table column object determines the width (including the maximum and minimum widths) of its column in the table view and specifies the column’s  resizing and editing behavior. A table column stores two cell objects: the header cell, which is used to draw the column header, and the data cell, which is used to draw the values for each row. In a cell-based table, you can control the display of the column by specifying subclasses of `NSCell` to use and by setting the font and other display characteristics for these cells. For example, you can use an [NSTextFieldCell](nstextfieldcell.md) to display string values or substitute an [NSImageCell](nsimagecell.md) to display pictures.

## Topics

### Creating a Table Column

- [init(identifier:)](nstablecolumn/init%28identifier_%29.md): Initializes a newly created table column with a string identifier.

### Setting the Table View

- [tableView](nstablecolumn/tableview.md): The table view that contains the table column.

### Controlling Size

- [width](nstablecolumn/width.md): The table column’s width, in points.
- [minWidth](nstablecolumn/minwidth.md): The table column’s minimum width, in points.
- [maxWidth](nstablecolumn/maxwidth.md): The table column’s maximum width, in points.
- [resizingMask](nstablecolumn/resizingmask.md): The table column’s resizing mask.
- [sizeToFit()](nstablecolumn/sizetofit%28%29.md): Resizes the table column to fit the width of its header cell.

### Setting the Header

- [title](nstablecolumn/title.md): The title of the table column’s header.
- [headerCell](nstablecolumn/headercell.md): The cell used to draw the table column’s header.

### Setting the Identifier

- [identifier](nstablecolumn/identifier.md): The identifier string for the table column.

### Controlling Editability in a Cell-Based Table

- [isEditable](nstablecolumn/iseditable.md): A Boolean that indicates whether a cell-based table’s column cells are user editable.

### Sorting

- [sortDescriptorPrototype](nstablecolumn/sortdescriptorprototype.md): The table column’s sort descriptor prototype.

### Setting Column Visibility

- [isHidden](nstablecolumn/ishidden.md): A Boolean that indicates whether the table column is hidden.

### Setting Tooltips

- [headerToolTip](nstablecolumn/headertooltip.md): The string that’s displayed in a help tag over the table column header.

### Deprecated Methods

- [dataCell](nstablecolumn/datacell.md): Deprecated. The cell prototype used by the table column to draw individual cells.
- [dataCell(forRow:)](nstablecolumn/datacell%28forrow_%29.md): Deprecated. Returns the cell object used to display values in the specified row of the table column.

### Constants

- [Resizing Modes](resizing-modes.md): These constants specify the resizing modes for a table column. The values are used to set the [resizingMask](nstablecolumn/resizingmask.md) property.

### Initializers

- [init(coder:)](nstablecolumn/init%28coder_%29.md)

### Structures

- [NSTableColumn.ResizingOptions](nstablecolumn/resizingoptions.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Rows and Columns

- [NSTableHeaderView](nstableheaderview.md): An object that draws headers over a table view’s columns and handles mouse events in those headers.
- [NSTableHeaderCell](nstableheadercell.md): An object that a table header view uses to draw the content of the column headers.
- [NSTableRowView](nstablerowview.md): The view shown for a row in a table view.
- [NSTableViewRowAction](nstableviewrowaction.md): A single action to present when the user swipes horizontally on a table row.
- [NSTableColumn.ResizingOptions](nstablecolumn/resizingoptions.md)

# NSTableColumn (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The display characteristics and identifier for a column in a table view.

## Declaration

```objectivec
@interface NSTableColumn : NSObject
```

<a id="overview"></a>

## Overview

A table column object determines the width (including the maximum and minimum widths) of its column in the table view and specifies the column’s  resizing and editing behavior. A table column stores two cell objects: the header cell, which is used to draw the column header, and the data cell, which is used to draw the values for each row. In a cell-based table, you can control the display of the column by specifying subclasses of `NSCell` to use and by setting the font and other display characteristics for these cells. For example, you can use an [NSTextFieldCell](nstextfieldcell.md) to display string values or substitute an [NSImageCell](nsimagecell.md) to display pictures.

## Topics

### Creating a Table Column

- [initWithIdentifier:](nstablecolumn/init%28identifier_%29.md): Initializes a newly created table column with a string identifier.

### Setting the Table View

- [tableView](nstablecolumn/tableview.md): The table view that contains the table column.

### Controlling Size

- [width](nstablecolumn/width.md): The table column’s width, in points.
- [minWidth](nstablecolumn/minwidth.md): The table column’s minimum width, in points.
- [maxWidth](nstablecolumn/maxwidth.md): The table column’s maximum width, in points.
- [resizingMask](nstablecolumn/resizingmask.md): The table column’s resizing mask.
- [sizeToFit](nstablecolumn/sizetofit%28%29.md): Resizes the table column to fit the width of its header cell.

### Setting the Header

- [title](nstablecolumn/title.md): The title of the table column’s header.
- [headerCell](nstablecolumn/headercell.md): The cell used to draw the table column’s header.

### Setting the Identifier

- [identifier](nstablecolumn/identifier.md): The identifier string for the table column.

### Controlling Editability in a Cell-Based Table

- [editable](nstablecolumn/iseditable.md): A Boolean that indicates whether a cell-based table’s column cells are user editable.

### Sorting

- [sortDescriptorPrototype](nstablecolumn/sortdescriptorprototype.md): The table column’s sort descriptor prototype.

### Setting Column Visibility

- [hidden](nstablecolumn/ishidden.md): A Boolean that indicates whether the table column is hidden.

### Setting Tooltips

- [headerToolTip](nstablecolumn/headertooltip.md): The string that’s displayed in a help tag over the table column header.

### Deprecated Methods

- [isResizable](nstablecolumn/isresizable.md): Deprecated. Returns whether the column is resizable.
- [setResizable:](nstablecolumn/setresizable_.md): Deprecated. Sets whether the user can resize the receiver in its NSTableView.
- [dataCell](nstablecolumn/datacell.md): Deprecated. The cell prototype used by the table column to draw individual cells.
- [dataCellForRow:](nstablecolumn/datacell%28forrow_%29.md): Deprecated. Returns the cell object used to display values in the specified row of the table column.

### Constants

- [Resizing Modes](resizing-modes.md): These constants specify the resizing modes for a table column. The values are used to set the [resizingMask](nstablecolumn/resizingmask.md) property.

### Initializers

- [initWithCoder:](nstablecolumn/init%28coder_%29.md)

### Structures

- [NSTableColumnResizingOptions](nstablecolumn/resizingoptions.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)

## See Also

### Rows and Columns

- [NSTableHeaderView](nstableheaderview.md): An object that draws headers over a table view’s columns and handles mouse events in those headers.
- [NSTableHeaderCell](nstableheadercell.md): An object that a table header view uses to draw the content of the column headers.
- [NSTableRowView](nstablerowview.md): The view shown for a row in a table view.
- [NSTableViewRowAction](nstableviewrowaction.md): A single action to present when the user swipes horizontally on a table row.
- [NSTableColumnResizingOptions](nstablecolumn/resizingoptions.md)
