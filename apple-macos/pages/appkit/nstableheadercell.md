> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableheadercell](https://developer.apple.com/documentation/appkit/nstableheadercell)

# NSTableHeaderCell (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that a table header view uses to draw the content of the column headers.

## Declaration

```swift
class NSTableHeaderCell
```

<a id="overview"></a>

## Overview

Subclasses of the `NSTableHeaderCell` class can override the [drawInterior(withFrame:in:)](nscell/drawinterior%28withframe_in_%29.md), [edit(withFrame:in:editor:delegate:event:)](nscell/edit%28withframe_in_editor_delegate_event_%29.md), and [highlight(\_:withFrame:in:)](nscell/highlight%28__withframe_in_%29.md) methods to change the way headers appear. This specific subclass is responsible for drawing the sort indicators. See the [NSCell](nscell.md) class specification for information on overriding these methods.

See the [NSTableView](nstableview.md) and [NSTableHeaderCell](nstableheadercell.md) for more information.

## Topics

### Drawing Sorting Indicators

- [drawSortIndicator(withFrame:in:ascending:priority:)](nstableheadercell/drawsortindicator%28withframe_in_ascending_priority_%29.md): Draws a sorting indicator given a cell frame contained inside a view.
- [sortIndicatorRect(forBounds:)](nstableheadercell/sortindicatorrect%28forbounds_%29.md): Returns the location to display the sorting indicator given `theRect`.

## Relationships

### Inherits From

- [NSTextFieldCell](nstextfieldcell.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Rows and Columns

- [NSTableHeaderView](nstableheaderview.md): An object that draws headers over a table view’s columns and handles mouse events in those headers.
- [NSTableRowView](nstablerowview.md): The view shown for a row in a table view.
- [NSTableColumn](nstablecolumn.md): The display characteristics and identifier for a column in a table view.
- [NSTableViewRowAction](nstableviewrowaction.md): A single action to present when the user swipes horizontally on a table row.
- [NSTableColumn.ResizingOptions](nstablecolumn/resizingoptions.md)

# NSTableHeaderCell (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that a table header view uses to draw the content of the column headers.

## Declaration

```objectivec
@interface NSTableHeaderCell : NSTextFieldCell
```

<a id="overview"></a>

## Overview

Subclasses of the `NSTableHeaderCell` class can override the [drawInteriorWithFrame:inView:](nscell/drawinterior%28withframe_in_%29.md), [editWithFrame:inView:editor:delegate:event:](nscell/edit%28withframe_in_editor_delegate_event_%29.md), and [highlight:withFrame:inView:](nscell/highlight%28__withframe_in_%29.md) methods to change the way headers appear. This specific subclass is responsible for drawing the sort indicators. See the [NSCell](nscell.md) class specification for information on overriding these methods.

See the [NSTableView](nstableview.md) and [NSTableHeaderCell](nstableheadercell.md) for more information.

## Topics

### Drawing Sorting Indicators

- [drawSortIndicatorWithFrame:inView:ascending:priority:](nstableheadercell/drawsortindicator%28withframe_in_ascending_priority_%29.md): Draws a sorting indicator given a cell frame contained inside a view.
- [sortIndicatorRectForBounds:](nstableheadercell/sortindicatorrect%28forbounds_%29.md): Returns the location to display the sorting indicator given `theRect`.

## Relationships

### Inherits From

- [NSTextFieldCell](nstextfieldcell.md)

## See Also

### Rows and Columns

- [NSTableHeaderView](nstableheaderview.md): An object that draws headers over a table view’s columns and handles mouse events in those headers.
- [NSTableRowView](nstablerowview.md): The view shown for a row in a table view.
- [NSTableColumn](nstablecolumn.md): The display characteristics and identifier for a column in a table view.
- [NSTableViewRowAction](nstableviewrowaction.md): A single action to present when the user swipes horizontally on a table row.
- [NSTableColumnResizingOptions](nstablecolumn/resizingoptions.md)
