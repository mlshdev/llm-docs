> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgridview](https://developer.apple.com/documentation/appkit/nsgridview)

# NSGridView (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12+

A container that aligns views in a flexible grid of rows and columns.

## Declaration

```swift
class NSGridView
```

<a id="overview"></a>

## Overview

A grid view helps you lay out content, such as photos or thumbnails, in a row-column arrangement similar to a spreadsheet. Within a grid view, an item that occupies a single row-column intersection is represented by an [NSGridCell](nsgridcell.md) object.

## Topics

### Creating a Grid View

- [init(numberOfColumns:rows:)](nsgridview/init%28numberofcolumns_rows_%29.md): Creates a newly allocated grid view object with the specified number of columns and rows.
- [init(views:)](nsgridview/init%28views_%29.md): Creates a newly allocated grid view object with the specified array of arrays of views.
- [init(frame:)](nsgridview/init%28frame_%29.md): Creates a newly allocated grid view object with the specified frame rectangle.
- [init(coder:)](nsgridview/init%28coder_%29.md): Creates a newly allocated grid view object from the coder.

### Getting Information About the Grid

- [numberOfRows](nsgridview/numberofrows.md): The number of rows in the grid view.
- [numberOfColumns](nsgridview/numberofcolumns.md): The number of columns in the grid view.
- [index(of:)](nsgridview/index%28of_%29-32sdd.md): Returns the index of the specified grid column.
- [row(at:)](nsgridview/row%28at_%29.md): Returns the grid row object at the specified index.
- [column(at:)](nsgridview/column%28at_%29.md): Returns the grid column object at the specified index.
- [index(of:)](nsgridview/index%28of_%29-6zs2o.md): Returns the index of the specified grid row.

### Adding, Removing, and Moving Rows

- [addRow(with:)](nsgridview/addrow%28with_%29.md): Adds an array of views to a new row.
- [insertRow(at:with:)](nsgridview/insertrow%28at_with_%29.md): Inserts the array of view objects into the grid view at the index.
- [removeRow(at:)](nsgridview/removerow%28at_%29.md): Removes the row from the grid view at the index.
- [moveRow(at:to:)](nsgridview/moverow%28at_to_%29.md): Moves the specified row to the new row location.

### Adding, Removing, and Moving Columns

- [addColumn(with:)](nsgridview/addcolumn%28with_%29.md): Adds a new column containing the array of views.
- [insertColumn(at:with:)](nsgridview/insertcolumn%28at_with_%29.md): Inserts the array of view objects at the specified index.
- [removeColumn(at:)](nsgridview/removecolumn%28at_%29.md): Removes the column from the grid view at the specified index.
- [moveColumn(at:to:)](nsgridview/movecolumn%28at_to_%29.md): Moves the specified column to a new column location.

### Managing Grid Spacing and Alignment

- [sizedForContent](nsgridview/sizedforcontent.md): The default value for row and column sizes.
- [columnSpacing](nsgridview/columnspacing.md): The column spacing for the grid view.
- [rowSpacing](nsgridview/rowspacing.md): The row spacing for the grid view.
- [rowAlignment](nsgridview/rowalignment.md): The row alignment for the grid view.
- [xPlacement](nsgridview/xplacement.md): The placement of the cell within the grid column.
- [yPlacement](nsgridview/yplacement.md): The placement of the cell within the grid row.

### Creating and Merging Cells

- [cell(atColumnIndex:rowIndex:)](nsgridview/cell%28atcolumnindex_rowindex_%29.md): Returns the grid cell object at the specified column and row index.
- [cell(for:)](nsgridview/cell%28for_%29.md): Returns the grid cell object that contains the given view or one of its ancestors.
- [mergeCells(inHorizontalRange:verticalRange:)](nsgridview/mergecells%28inhorizontalrange_verticalrange_%29.md): Expands the cell at the top-leading corner of the horizontal and vertical range to cover the entire area.

## Relationships

### Inherits From

- [NSView](nsview.md)

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

# NSGridView (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12+

A container that aligns views in a flexible grid of rows and columns.

## Declaration

```objectivec
@interface NSGridView : NSView
```

<a id="overview"></a>

## Overview

A grid view helps you lay out content, such as photos or thumbnails, in a row-column arrangement similar to a spreadsheet. Within a grid view, an item that occupies a single row-column intersection is represented by an [NSGridCell](nsgridcell.md) object.

## Topics

### Creating a Grid View

- [gridViewWithNumberOfColumns:rows:](nsgridview/init%28numberofcolumns_rows_%29.md): Creates a newly allocated grid view object with the specified number of columns and rows.
- [gridViewWithViews:](nsgridview/init%28views_%29.md): Creates a newly allocated grid view object with the specified array of arrays of views.
- [initWithFrame:](nsgridview/init%28frame_%29.md): Creates a newly allocated grid view object with the specified frame rectangle.
- [initWithCoder:](nsgridview/init%28coder_%29.md): Creates a newly allocated grid view object from the coder.

### Getting Information About the Grid

- [numberOfRows](nsgridview/numberofrows.md): The number of rows in the grid view.
- [numberOfColumns](nsgridview/numberofcolumns.md): The number of columns in the grid view.
- [indexOfColumn:](nsgridview/index%28of_%29-32sdd.md): Returns the index of the specified grid column.
- [rowAtIndex:](nsgridview/row%28at_%29.md): Returns the grid row object at the specified index.
- [columnAtIndex:](nsgridview/column%28at_%29.md): Returns the grid column object at the specified index.
- [indexOfRow:](nsgridview/index%28of_%29-6zs2o.md): Returns the index of the specified grid row.

### Adding, Removing, and Moving Rows

- [addRowWithViews:](nsgridview/addrow%28with_%29.md): Adds an array of views to a new row.
- [insertRowAtIndex:withViews:](nsgridview/insertrow%28at_with_%29.md): Inserts the array of view objects into the grid view at the index.
- [removeRowAtIndex:](nsgridview/removerow%28at_%29.md): Removes the row from the grid view at the index.
- [moveRowAtIndex:toIndex:](nsgridview/moverow%28at_to_%29.md): Moves the specified row to the new row location.

### Adding, Removing, and Moving Columns

- [addColumnWithViews:](nsgridview/addcolumn%28with_%29.md): Adds a new column containing the array of views.
- [insertColumnAtIndex:withViews:](nsgridview/insertcolumn%28at_with_%29.md): Inserts the array of view objects at the specified index.
- [removeColumnAtIndex:](nsgridview/removecolumn%28at_%29.md): Removes the column from the grid view at the specified index.
- [moveColumnAtIndex:toIndex:](nsgridview/movecolumn%28at_to_%29.md): Moves the specified column to a new column location.

### Managing Grid Spacing and Alignment

- [NSGridViewSizeForContent](nsgridview/sizedforcontent.md): The default value for row and column sizes.
- [columnSpacing](nsgridview/columnspacing.md): The column spacing for the grid view.
- [rowSpacing](nsgridview/rowspacing.md): The row spacing for the grid view.
- [rowAlignment](nsgridview/rowalignment.md): The row alignment for the grid view.
- [xPlacement](nsgridview/xplacement.md): The placement of the cell within the grid column.
- [yPlacement](nsgridview/yplacement.md): The placement of the cell within the grid row.

### Creating and Merging Cells

- [cellAtColumnIndex:rowIndex:](nsgridview/cell%28atcolumnindex_rowindex_%29.md): Returns the grid cell object at the specified column and row index.
- [cellForView:](nsgridview/cell%28for_%29.md): Returns the grid cell object that contains the given view or one of its ancestors.
- [mergeCellsInHorizontalRange:verticalRange:](nsgridview/mergecells%28inhorizontalrange_verticalrange_%29.md): Expands the cell at the top-leading corner of the horizontal and vertical range to cover the entire area.

## Relationships

### Inherits From

- [NSView](nsview.md)
