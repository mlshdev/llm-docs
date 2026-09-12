> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/selectionhighlightstyle-swift.enum](https://developer.apple.com/documentation/appkit/nstableview/selectionhighlightstyle-swift.enum)

# NSTableView.SelectionHighlightStyle (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The following constants specify the selection highlight styles. These constants are used by the [selectionHighlightStyle](selectionhighlightstyle-swift.property.md) property.

## Declaration

```swift
enum SelectionHighlightStyle
```

## Topics

### Constants

- [NSTableView.SelectionHighlightStyle.none](selectionhighlightstyle-swift.enum/none.md)
- [NSTableView.SelectionHighlightStyle.regular](selectionhighlightstyle-swift.enum/regular.md)
- [NSTableView.SelectionHighlightStyle.sourceList](selectionhighlightstyle-swift.enum/sourcelist.md): Deprecated.

### Initializers

- [init(rawValue:)](selectionhighlightstyle-swift.enum/init%28rawvalue_%29.md)

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
- [NSTableView.AnimationOptions](animationoptions.md): Specifies the animation effects to apply when inserting or removing rows.
- [NSTableView.RowSizeStyle](rowsizestyle-swift.enum.md): The row size style constants define the size of the rows in the table view. They are used by the [effectiveRowSizeStyle](effectiverowsizestyle.md) and [rowSizeStyle](rowsizestyle-swift.property.md) properties. You can also query the row size in the [NSTableCellView](../nstablecellview.md) class’ property [rowSizeStyle](../nstablecellview/rowsizestyle.md).
- [NSTableView.RowActionEdge](rowactionedge.md): These constants define table row edges on which row actions are attached. They are used by the `tableView:rowActionsForRow:edge:` delegate method.

# NSTableViewSelectionHighlightStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The following constants specify the selection highlight styles. These constants are used by the [selectionHighlightStyle](selectionhighlightstyle-swift.property.md) property.

## Declaration

```objectivec
enum NSTableViewSelectionHighlightStyle : NSInteger;
```

## Topics

### Constants

- [NSTableViewSelectionHighlightStyleNone](selectionhighlightstyle-swift.enum/none.md)
- [NSTableViewSelectionHighlightStyleRegular](selectionhighlightstyle-swift.enum/regular.md)
- [NSTableViewSelectionHighlightStyleSourceList](selectionhighlightstyle-swift.enum/sourcelist.md): Deprecated.

## See Also

### Constants

- [Specifying a Custom Row View in a Nib File](../specifying-a-custom-row-view-in-a-nib-file.md): View-based table view instances use `NSTableViewRowKey` to identify the nib file containing the template row view. You can specify a custom row view (without any code) by associating this key with the appropriate nib name in Interface Builder.
- [NSTableViewDraggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.enum.md): These constants specify the drag styles displayed by the table view. They’re used by [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.property.md).
- [NSTableViewDropOperation](dropoperation.md): `NSTableView` defines these constants to specify drop operations.
- [NSTableViewGridLineStyle](gridlinestyle.md): `NSTableView` defines these constants to specify grid styles. These constants are used by the [gridStyleMask](gridstylemask.md) property. The mask can be either [NSTableViewGridNone](../nstableviewgridlinestyle/nstableviewgridnone.md) or it can contain either or both of the other options combined using the C bitwise `OR` operator.
- [NSTableViewColumnAutoresizingStyle](columnautoresizingstyle-swift.enum.md): The following constants specify the autoresizing styles. These constants are used by the [columnAutoresizingStyle](columnautoresizingstyle-swift.property.md) property.
- [NSTableViewAnimationOptions](animationoptions.md): Specifies the animation effects to apply when inserting or removing rows.
- [NSTableViewRowSizeStyle](rowsizestyle-swift.enum.md): The row size style constants define the size of the rows in the table view. They are used by the [effectiveRowSizeStyle](effectiverowsizestyle.md) and [rowSizeStyle](rowsizestyle-swift.property.md) properties. You can also query the row size in the [NSTableCellView](../nstablecellview.md) class’ property [rowSizeStyle](../nstablecellview/rowsizestyle.md).
- [NSTableRowActionEdge](rowactionedge.md): These constants define table row edges on which row actions are attached. They are used by the `tableView:rowActionsForRow:edge:` delegate method.
