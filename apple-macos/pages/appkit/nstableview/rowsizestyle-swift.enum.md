> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/rowsizestyle-swift.enum](https://developer.apple.com/documentation/appkit/nstableview/rowsizestyle-swift.enum)

# NSTableView.RowSizeStyle (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

The row size style constants define the size of the rows in the table view. They are used by the [effectiveRowSizeStyle](effectiverowsizestyle.md) and [rowSizeStyle](rowsizestyle-swift.property.md) properties. You can also query the row size in the [NSTableCellView](../nstablecellview.md) class’ property [rowSizeStyle](../nstablecellview/rowsizestyle.md).

## Declaration

```swift
enum RowSizeStyle
```

## Topics

### Constants

- [NSTableView.RowSizeStyle.default](rowsizestyle-swift.enum/default.md): The table will use the system default layout size: small, medium or large.
- [NSTableView.RowSizeStyle.custom](rowsizestyle-swift.enum/custom.md): The table will use the [rowHeight](rowheight.md) or invoke the delegate method [tableView(\_:heightOfRow:)](../nstableviewdelegate/tableview%28__heightofrow_%29.md), if implemented. The cell layout is not changed.
- [NSTableView.RowSizeStyle.small](rowsizestyle-swift.enum/small.md): The table will use a row height specified for a small table. It is required that the size be fully tested and supported if `NSTableViewRowSizeStyleCustom` is not used.
- [NSTableView.RowSizeStyle.medium](rowsizestyle-swift.enum/medium.md): The table will use a row height specified for a medium table. It is required that the size be fully tested and supported if `NSTableViewRowSizeStyleCustom` is not used.
- [NSTableView.RowSizeStyle.large](rowsizestyle-swift.enum/large.md): The table will use a row height specified for a large table. It is required that the size be fully tested and supported if `NSTableViewRowSizeStyleCustom` is not used.

### Initializers

- [init(rawValue:)](rowsizestyle-swift.enum/init%28rawvalue_%29.md)

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
- [NSTableView.DropOperation](dropoperation.md): `NSTableView` defines these constants to specify drop operations.
- [NSTableView.GridLineStyle](gridlinestyle.md): `NSTableView` defines these constants to specify grid styles. These constants are used by the [gridStyleMask](gridstylemask.md) property. The mask can be either [NSTableViewGridNone](../nstableviewgridlinestyle/nstableviewgridnone.md) or it can contain either or both of the other options combined using the C bitwise `OR` operator.
- [NSTableView.ColumnAutoresizingStyle](columnautoresizingstyle-swift.enum.md): The following constants specify the autoresizing styles. These constants are used by the [columnAutoresizingStyle](columnautoresizingstyle-swift.property.md) property.
- [NSTableView.SelectionHighlightStyle](selectionhighlightstyle-swift.enum.md): The following constants specify the selection highlight styles. These constants are used by the [selectionHighlightStyle](selectionhighlightstyle-swift.property.md) property.
- [NSTableView.AnimationOptions](animationoptions.md): Specifies the animation effects to apply when inserting or removing rows.
- [NSTableView.RowActionEdge](rowactionedge.md): These constants define table row edges on which row actions are attached. They are used by the `tableView:rowActionsForRow:edge:` delegate method.

# NSTableViewRowSizeStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

The row size style constants define the size of the rows in the table view. They are used by the [effectiveRowSizeStyle](effectiverowsizestyle.md) and [rowSizeStyle](rowsizestyle-swift.property.md) properties. You can also query the row size in the [NSTableCellView](../nstablecellview.md) class’ property [rowSizeStyle](../nstablecellview/rowsizestyle.md).

## Declaration

```objectivec
enum NSTableViewRowSizeStyle : NSInteger;
```

## Topics

### Constants

- [NSTableViewRowSizeStyleDefault](rowsizestyle-swift.enum/default.md): The table will use the system default layout size: small, medium or large.
- [NSTableViewRowSizeStyleCustom](rowsizestyle-swift.enum/custom.md): The table will use the [rowHeight](rowheight.md) or invoke the delegate method [tableView:heightOfRow:](../nstableviewdelegate/tableview%28__heightofrow_%29.md), if implemented. The cell layout is not changed.
- [NSTableViewRowSizeStyleSmall](rowsizestyle-swift.enum/small.md): The table will use a row height specified for a small table. It is required that the size be fully tested and supported if `NSTableViewRowSizeStyleCustom` is not used.
- [NSTableViewRowSizeStyleMedium](rowsizestyle-swift.enum/medium.md): The table will use a row height specified for a medium table. It is required that the size be fully tested and supported if `NSTableViewRowSizeStyleCustom` is not used.
- [NSTableViewRowSizeStyleLarge](rowsizestyle-swift.enum/large.md): The table will use a row height specified for a large table. It is required that the size be fully tested and supported if `NSTableViewRowSizeStyleCustom` is not used.

## See Also

### Constants

- [Specifying a Custom Row View in a Nib File](../specifying-a-custom-row-view-in-a-nib-file.md): View-based table view instances use `NSTableViewRowKey` to identify the nib file containing the template row view. You can specify a custom row view (without any code) by associating this key with the appropriate nib name in Interface Builder.
- [NSTableViewDraggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.enum.md): These constants specify the drag styles displayed by the table view. They’re used by [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.property.md).
- [NSTableViewDropOperation](dropoperation.md): `NSTableView` defines these constants to specify drop operations.
- [NSTableViewGridLineStyle](gridlinestyle.md): `NSTableView` defines these constants to specify grid styles. These constants are used by the [gridStyleMask](gridstylemask.md) property. The mask can be either [NSTableViewGridNone](../nstableviewgridlinestyle/nstableviewgridnone.md) or it can contain either or both of the other options combined using the C bitwise `OR` operator.
- [NSTableViewColumnAutoresizingStyle](columnautoresizingstyle-swift.enum.md): The following constants specify the autoresizing styles. These constants are used by the [columnAutoresizingStyle](columnautoresizingstyle-swift.property.md) property.
- [NSTableViewSelectionHighlightStyle](selectionhighlightstyle-swift.enum.md): The following constants specify the selection highlight styles. These constants are used by the [selectionHighlightStyle](selectionhighlightstyle-swift.property.md) property.
- [NSTableViewAnimationOptions](animationoptions.md): Specifies the animation effects to apply when inserting or removing rows.
- [NSTableRowActionEdge](rowactionedge.md): These constants define table row edges on which row actions are attached. They are used by the `tableView:rowActionsForRow:edge:` delegate method.
