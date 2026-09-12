> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableheaderview](https://developer.apple.com/documentation/appkit/nstableheaderview)

# NSTableHeaderView (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that draws headers over a table view’s columns and handles mouse events in those headers.

## Declaration

```swift
class NSTableHeaderView
```

<a id="overview"></a>

## Overview

[NSTableHeaderView](nstableheaderview.md) uses [NSTableHeaderCell](nstableheadercell.md) to implement its user interface.

## Topics

### Setting the table view

- [tableView](nstableheaderview/tableview.md): The [NSTableView](nstableview.md) instance that this table header view belongs to.

### Checking altered columns

- [draggedColumn](nstableheaderview/draggedcolumn.md): The index of the column that the user is dragging.
- [draggedDistance](nstableheaderview/draggeddistance.md): The horizontal distance that the user has dragged a column.
- [resizedColumn](nstableheaderview/resizedcolumn.md): The index of the column that the user is resizing.

### Utility methods

- [column(at:)](nstableheaderview/column%28at_%29.md): Returns the index of the column whose header lies under `aPoint` in the receiver, or –1 if no such column is found.
- [headerRect(ofColumn:)](nstableheaderview/headerrect%28ofcolumn_%29.md): Returns the rectangle containing the header tile for the column at `columnIndex`.

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
- [NSViewToolTipOwner](nsviewtooltipowner.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Rows and Columns

- [NSTableHeaderCell](nstableheadercell.md): An object that a table header view uses to draw the content of the column headers.
- [NSTableRowView](nstablerowview.md): The view shown for a row in a table view.
- [NSTableColumn](nstablecolumn.md): The display characteristics and identifier for a column in a table view.
- [NSTableViewRowAction](nstableviewrowaction.md): A single action to present when the user swipes horizontally on a table row.
- [NSTableColumn.ResizingOptions](nstablecolumn/resizingoptions.md)

# NSTableHeaderView (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that draws headers over a table view’s columns and handles mouse events in those headers.

## Declaration

```objectivec
@interface NSTableHeaderView : NSView
```

<a id="overview"></a>

## Overview

[NSTableHeaderView](nstableheaderview.md) uses [NSTableHeaderCell](nstableheadercell.md) to implement its user interface.

## Topics

### Setting the table view

- [tableView](nstableheaderview/tableview.md): The [NSTableView](nstableview.md) instance that this table header view belongs to.

### Checking altered columns

- [draggedColumn](nstableheaderview/draggedcolumn.md): The index of the column that the user is dragging.
- [draggedDistance](nstableheaderview/draggeddistance.md): The horizontal distance that the user has dragged a column.
- [resizedColumn](nstableheaderview/resizedcolumn.md): The index of the column that the user is resizing.

### Utility methods

- [columnAtPoint:](nstableheaderview/column%28at_%29.md): Returns the index of the column whose header lies under `aPoint` in the receiver, or –1 if no such column is found.
- [headerRectOfColumn:](nstableheaderview/headerrect%28ofcolumn_%29.md): Returns the rectangle containing the header tile for the column at `columnIndex`.

## Relationships

### Inherits From

- [NSView](nsview.md)

### Conforms To

- [NSViewToolTipOwner](nsviewtooltipowner.md)

## See Also

### Rows and Columns

- [NSTableHeaderCell](nstableheadercell.md): An object that a table header view uses to draw the content of the column headers.
- [NSTableRowView](nstablerowview.md): The view shown for a row in a table view.
- [NSTableColumn](nstablecolumn.md): The display characteristics and identifier for a column in a table view.
- [NSTableViewRowAction](nstableviewrowaction.md): A single action to present when the user swipes horizontally on a table row.
- [NSTableColumnResizingOptions](nstablecolumn/resizingoptions.md)
