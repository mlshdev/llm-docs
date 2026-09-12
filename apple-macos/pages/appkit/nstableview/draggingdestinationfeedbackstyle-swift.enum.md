> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/draggingdestinationfeedbackstyle-swift.enum](https://developer.apple.com/documentation/appkit/nstableview/draggingdestinationfeedbackstyle-swift.enum)

# NSTableView.DraggingDestinationFeedbackStyle (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.6+

These constants specify the drag styles displayed by the table view. They’re used by [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.property.md).

## Declaration

```swift
enum DraggingDestinationFeedbackStyle
```

## Topics

### Constants

- [NSTableView.DraggingDestinationFeedbackStyle.none](draggingdestinationfeedbackstyle-swift.enum/none.md): Provides no feedback when the user drags over the table view. This option exists to allow subclasses to implement their dragging destination highlighting, or to make it not show anything all.
- [NSTableView.DraggingDestinationFeedbackStyle.regular](draggingdestinationfeedbackstyle-swift.enum/regular.md): Draws a solid round-rect background on drop target rows, and an insertion marker between rows. This style should be used in most cases.
- [NSTableView.DraggingDestinationFeedbackStyle.sourceList](draggingdestinationfeedbackstyle-swift.enum/sourcelist.md): Draws an outline on drop target rows, and an insertion marker between rows. This style will automatically be set for source lists when the table’s [unhideRows(at:withAnimation:)](unhiderows%28at_withanimation_%29.md) is set to [NSTableView.DraggingDestinationFeedbackStyle.sourceList](draggingdestinationfeedbackstyle-swift.enum/sourcelist.md). This is the standard look for Source Lists, but may be used in other areas as needed.
- [NSTableView.DraggingDestinationFeedbackStyle.gap](draggingdestinationfeedbackstyle-swift.enum/gap.md): Provides a gap insertion when dragging over the table. Note that this style is only officially supported for [NSView](../nsview.md)-based table views, but may partially work in Cell Based TableViews. The decision to use the gap style (compared to another style) can be made in [tableView(\_:draggingSession:willBeginAt:forRowIndexes:)](../nstableviewdatasource/tableview%28__draggingsession_willbeginat_forrowindexes_%29.md), or it can dynamically be changed.

### Initializers

- [init(rawValue:)](draggingdestinationfeedbackstyle-swift.enum/init%28rawvalue_%29.md)

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
- [NSTableView.DropOperation](dropoperation.md): `NSTableView` defines these constants to specify drop operations.
- [NSTableView.GridLineStyle](gridlinestyle.md): `NSTableView` defines these constants to specify grid styles. These constants are used by the [gridStyleMask](gridstylemask.md) property. The mask can be either [NSTableViewGridNone](../nstableviewgridlinestyle/nstableviewgridnone.md) or it can contain either or both of the other options combined using the C bitwise `OR` operator.
- [NSTableView.ColumnAutoresizingStyle](columnautoresizingstyle-swift.enum.md): The following constants specify the autoresizing styles. These constants are used by the [columnAutoresizingStyle](columnautoresizingstyle-swift.property.md) property.
- [NSTableView.SelectionHighlightStyle](selectionhighlightstyle-swift.enum.md): The following constants specify the selection highlight styles. These constants are used by the [selectionHighlightStyle](selectionhighlightstyle-swift.property.md) property.
- [NSTableView.AnimationOptions](animationoptions.md): Specifies the animation effects to apply when inserting or removing rows.
- [NSTableView.RowSizeStyle](rowsizestyle-swift.enum.md): The row size style constants define the size of the rows in the table view. They are used by the [effectiveRowSizeStyle](effectiverowsizestyle.md) and [rowSizeStyle](rowsizestyle-swift.property.md) properties. You can also query the row size in the [NSTableCellView](../nstablecellview.md) class’ property [rowSizeStyle](../nstablecellview/rowsizestyle.md).
- [NSTableView.RowActionEdge](rowactionedge.md): These constants define table row edges on which row actions are attached. They are used by the `tableView:rowActionsForRow:edge:` delegate method.

# NSTableViewDraggingDestinationFeedbackStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.6+

These constants specify the drag styles displayed by the table view. They’re used by [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.property.md).

## Declaration

```objectivec
enum NSTableViewDraggingDestinationFeedbackStyle : NSInteger;
```

## Topics

### Constants

- [NSTableViewDraggingDestinationFeedbackStyleNone](draggingdestinationfeedbackstyle-swift.enum/none.md): Provides no feedback when the user drags over the table view. This option exists to allow subclasses to implement their dragging destination highlighting, or to make it not show anything all.
- [NSTableViewDraggingDestinationFeedbackStyleRegular](draggingdestinationfeedbackstyle-swift.enum/regular.md): Draws a solid round-rect background on drop target rows, and an insertion marker between rows. This style should be used in most cases.
- [NSTableViewDraggingDestinationFeedbackStyleSourceList](draggingdestinationfeedbackstyle-swift.enum/sourcelist.md): Draws an outline on drop target rows, and an insertion marker between rows. This style will automatically be set for source lists when the table’s [unhideRowsAtIndexes:withAnimation:](unhiderows%28at_withanimation_%29.md) is set to [NSTableViewDraggingDestinationFeedbackStyleSourceList](draggingdestinationfeedbackstyle-swift.enum/sourcelist.md). This is the standard look for Source Lists, but may be used in other areas as needed.
- [NSTableViewDraggingDestinationFeedbackStyleGap](draggingdestinationfeedbackstyle-swift.enum/gap.md): Provides a gap insertion when dragging over the table. Note that this style is only officially supported for [NSView](../nsview.md)-based table views, but may partially work in Cell Based TableViews. The decision to use the gap style (compared to another style) can be made in [tableView:draggingSession:willBeginAtPoint:forRowIndexes:](../nstableviewdatasource/tableview%28__draggingsession_willbeginat_forrowindexes_%29.md), or it can dynamically be changed.

## See Also

### Constants

- [Specifying a Custom Row View in a Nib File](../specifying-a-custom-row-view-in-a-nib-file.md): View-based table view instances use `NSTableViewRowKey` to identify the nib file containing the template row view. You can specify a custom row view (without any code) by associating this key with the appropriate nib name in Interface Builder.
- [NSTableViewDropOperation](dropoperation.md): `NSTableView` defines these constants to specify drop operations.
- [NSTableViewGridLineStyle](gridlinestyle.md): `NSTableView` defines these constants to specify grid styles. These constants are used by the [gridStyleMask](gridstylemask.md) property. The mask can be either [NSTableViewGridNone](../nstableviewgridlinestyle/nstableviewgridnone.md) or it can contain either or both of the other options combined using the C bitwise `OR` operator.
- [NSTableViewColumnAutoresizingStyle](columnautoresizingstyle-swift.enum.md): The following constants specify the autoresizing styles. These constants are used by the [columnAutoresizingStyle](columnautoresizingstyle-swift.property.md) property.
- [NSTableViewSelectionHighlightStyle](selectionhighlightstyle-swift.enum.md): The following constants specify the selection highlight styles. These constants are used by the [selectionHighlightStyle](selectionhighlightstyle-swift.property.md) property.
- [NSTableViewAnimationOptions](animationoptions.md): Specifies the animation effects to apply when inserting or removing rows.
- [NSTableViewRowSizeStyle](rowsizestyle-swift.enum.md): The row size style constants define the size of the rows in the table view. They are used by the [effectiveRowSizeStyle](effectiverowsizestyle.md) and [rowSizeStyle](rowsizestyle-swift.property.md) properties. You can also query the row size in the [NSTableCellView](../nstablecellview.md) class’ property [rowSizeStyle](../nstablecellview/rowsizestyle.md).
- [NSTableRowActionEdge](rowactionedge.md): These constants define table row edges on which row actions are attached. They are used by the `tableView:rowActionsForRow:edge:` delegate method.
