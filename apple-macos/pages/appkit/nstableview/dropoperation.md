> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/dropoperation](https://developer.apple.com/documentation/appkit/nstableview/dropoperation)

# NSTableView.DropOperation (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

`NSTableView` defines these constants to specify drop operations.

## Declaration

```swift
enum DropOperation
```

<a id="overview"></a>

## Overview

For example, given a table with `n` rows (numbered with row `0` at the top visually), a row of `n–1` and operation of `NSTableViewDropOn` would specify a drop on the last row. To specify a drop below the last row, you use a row of `n` and `NSTableViewDropAbove` for the operation.

## Topics

### Constants

- [NSTableView.DropOperation.on](dropoperation/on.md): Specifies that the drop should occur on the specified row.
- [NSTableView.DropOperation.above](dropoperation/above.md): Specifies that the drop should occur above the specified row.
- [NSTableView.DropOperation.on](dropoperation/on.md): Specifies that the drop should occur on the specified row.
- [NSTableView.DropOperation.above](dropoperation/above.md): Specifies that the drop should occur above the specified row.

### Initializers

- [init(rawValue:)](dropoperation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [Specifying a Custom Row View in a Nib File](../specifying-a-custom-row-view-in-a-nib-file.md): View-based table view instances use `NSTableViewRowKey` to identify the nib file containing the template row view. You can specify a custom row view (without any code) by associating this key with the appropriate nib name in Interface Builder.
- [NSTableView.DraggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.enum.md): These constants specify the drag styles displayed by the table view. They’re used by [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.property.md).
- [NSTableView.GridLineStyle](gridlinestyle.md): `NSTableView` defines these constants to specify grid styles. These constants are used by the [gridStyleMask](gridstylemask.md) property. The mask can be either [NSTableViewGridNone](../nstableviewgridlinestyle/nstableviewgridnone.md) or it can contain either or both of the other options combined using the C bitwise `OR` operator.
- [NSTableView.ColumnAutoresizingStyle](columnautoresizingstyle-swift.enum.md): The following constants specify the autoresizing styles. These constants are used by the [columnAutoresizingStyle](columnautoresizingstyle-swift.property.md) property.
- [NSTableView.SelectionHighlightStyle](selectionhighlightstyle-swift.enum.md): The following constants specify the selection highlight styles. These constants are used by the [selectionHighlightStyle](selectionhighlightstyle-swift.property.md) property.
- [NSTableView.AnimationOptions](animationoptions.md): Specifies the animation effects to apply when inserting or removing rows.
- [NSTableView.RowSizeStyle](rowsizestyle-swift.enum.md): The row size style constants define the size of the rows in the table view. They are used by the [effectiveRowSizeStyle](effectiverowsizestyle.md) and [rowSizeStyle](rowsizestyle-swift.property.md) properties. You can also query the row size in the [NSTableCellView](../nstablecellview.md) class’ property [rowSizeStyle](../nstablecellview/rowsizestyle.md).
- [NSTableView.RowActionEdge](rowactionedge.md): These constants define table row edges on which row actions are attached. They are used by the `tableView:rowActionsForRow:edge:` delegate method.

# NSTableViewDropOperation (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

`NSTableView` defines these constants to specify drop operations.

## Declaration

```objectivec
enum NSTableViewDropOperation : NSUInteger;
```

<a id="overview"></a>

## Overview

For example, given a table with `n` rows (numbered with row `0` at the top visually), a row of `n–1` and operation of `NSTableViewDropOn` would specify a drop on the last row. To specify a drop below the last row, you use a row of `n` and `NSTableViewDropAbove` for the operation.

## Topics

### Constants

- [NSTableViewDropOn](dropoperation/on.md): Specifies that the drop should occur on the specified row.
- [NSTableViewDropAbove](dropoperation/above.md): Specifies that the drop should occur above the specified row.
- [NSTableViewDropOn](dropoperation/on.md): Specifies that the drop should occur on the specified row.
- [NSTableViewDropAbove](dropoperation/above.md): Specifies that the drop should occur above the specified row.

## See Also

### Constants

- [Specifying a Custom Row View in a Nib File](../specifying-a-custom-row-view-in-a-nib-file.md): View-based table view instances use `NSTableViewRowKey` to identify the nib file containing the template row view. You can specify a custom row view (without any code) by associating this key with the appropriate nib name in Interface Builder.
- [NSTableViewDraggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.enum.md): These constants specify the drag styles displayed by the table view. They’re used by [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.property.md).
- [NSTableViewGridLineStyle](gridlinestyle.md): `NSTableView` defines these constants to specify grid styles. These constants are used by the [gridStyleMask](gridstylemask.md) property. The mask can be either [NSTableViewGridNone](../nstableviewgridlinestyle/nstableviewgridnone.md) or it can contain either or both of the other options combined using the C bitwise `OR` operator.
- [NSTableViewColumnAutoresizingStyle](columnautoresizingstyle-swift.enum.md): The following constants specify the autoresizing styles. These constants are used by the [columnAutoresizingStyle](columnautoresizingstyle-swift.property.md) property.
- [NSTableViewSelectionHighlightStyle](selectionhighlightstyle-swift.enum.md): The following constants specify the selection highlight styles. These constants are used by the [selectionHighlightStyle](selectionhighlightstyle-swift.property.md) property.
- [NSTableViewAnimationOptions](animationoptions.md): Specifies the animation effects to apply when inserting or removing rows.
- [NSTableViewRowSizeStyle](rowsizestyle-swift.enum.md): The row size style constants define the size of the rows in the table view. They are used by the [effectiveRowSizeStyle](effectiverowsizestyle.md) and [rowSizeStyle](rowsizestyle-swift.property.md) properties. You can also query the row size in the [NSTableCellView](../nstablecellview.md) class’ property [rowSizeStyle](../nstablecellview/rowsizestyle.md).
- [NSTableRowActionEdge](rowactionedge.md): These constants define table row edges on which row actions are attached. They are used by the `tableView:rowActionsForRow:edge:` delegate method.
