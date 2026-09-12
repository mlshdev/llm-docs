> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablecolumn/resizingoptions](https://developer.apple.com/documentation/appkit/nstablecolumn/resizingoptions)

# NSTableColumn.ResizingOptions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

## Declaration

```swift
struct ResizingOptions
```

## Topics

### Initializers

- [init(rawValue:)](resizingoptions/init%28rawvalue_%29.md)

### Constants

- [autoresizingMask](resizingoptions/autoresizingmask.md): Allows the table column to resize automatically in response to resizing the table view. The resizing behavior for the table view is set using the `NSTableView` method [columnAutoresizingStyle](../nstableview/columnautoresizingstyle-swift.property.md).
- [userResizingMask](resizingoptions/userresizingmask.md): Allows the table column to be resized by the user.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Rows and Columns

- [NSTableHeaderView](../nstableheaderview.md): An object that draws headers over a table view’s columns and handles mouse events in those headers.
- [NSTableHeaderCell](../nstableheadercell.md): An object that a table header view uses to draw the content of the column headers.
- [NSTableRowView](../nstablerowview.md): The view shown for a row in a table view.
- [NSTableColumn](../nstablecolumn.md): The display characteristics and identifier for a column in a table view.
- [NSTableViewRowAction](../nstableviewrowaction.md): A single action to present when the user swipes horizontally on a table row.

# NSTableColumnResizingOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

## Declaration

```objectivec
enum NSTableColumnResizingOptions : NSUInteger;
```

## Topics

### Constants

- [NSTableColumnAutoresizingMask](resizingoptions/autoresizingmask.md): Allows the table column to resize automatically in response to resizing the table view. The resizing behavior for the table view is set using the `NSTableView` method [columnAutoresizingStyle](../nstableview/columnautoresizingstyle-swift.property.md).
- [NSTableColumnUserResizingMask](resizingoptions/userresizingmask.md): Allows the table column to be resized by the user.
- [NSTableColumnNoResizing](../nstablecolumnresizingoptions/nstablecolumnnoresizing.md): Prevents the table column from resizing.

## See Also

### Rows and Columns

- [NSTableHeaderView](../nstableheaderview.md): An object that draws headers over a table view’s columns and handles mouse events in those headers.
- [NSTableHeaderCell](../nstableheadercell.md): An object that a table header view uses to draw the content of the column headers.
- [NSTableRowView](../nstablerowview.md): The view shown for a row in a table view.
- [NSTableColumn](../nstablecolumn.md): The display characteristics and identifier for a column in a table view.
- [NSTableViewRowAction](../nstableviewrowaction.md): A single action to present when the user swipes horizontally on a table row.
