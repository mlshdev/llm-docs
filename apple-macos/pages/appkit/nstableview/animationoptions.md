> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/animationoptions](https://developer.apple.com/documentation/appkit/nstableview/animationoptions)

# NSTableView.AnimationOptions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.7+

Specifies the animation effects to apply when inserting or removing rows.

## Declaration

```swift
struct AnimationOptions
```

## Topics

### Constants

- [effectFade](animationoptions/effectfade.md): Use a fade for row or column removal. The effect can be combined with any of the slide constants.
- [effectGap](animationoptions/effectgap.md): Creates a gap for newly inserted rows. This is useful for drag and drop animations that animate to a newly opened gap and should be used in the delegate method [tableView(\_:acceptDrop:row:dropOperation:)](../nstableviewdatasource/tableview%28__acceptdrop_row_dropoperation_%29.md).
- [slideUp](animationoptions/slideup.md): Animates a row insertion or removal by sliding upward.
- [slideDown](animationoptions/slidedown.md): Animates a row insertion or removal by sliding downward.
- [slideLeft](animationoptions/slideleft.md): Animates a row insertion by sliding from the left. Animates a row removal by sliding towards the left.
- [slideRight](animationoptions/slideright.md): Animates a row insertion by sliding from the right. Animates a row removal by sliding towards the right.

### Initializers

- [init(rawValue:)](animationoptions/init%28rawvalue_%29.md)

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

### Constants

- [Specifying a Custom Row View in a Nib File](../specifying-a-custom-row-view-in-a-nib-file.md): View-based table view instances use `NSTableViewRowKey` to identify the nib file containing the template row view. You can specify a custom row view (without any code) by associating this key with the appropriate nib name in Interface Builder.
- [NSTableView.DraggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.enum.md): These constants specify the drag styles displayed by the table view. They’re used by [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.property.md).
- [NSTableView.DropOperation](dropoperation.md): `NSTableView` defines these constants to specify drop operations.
- [NSTableView.GridLineStyle](gridlinestyle.md): `NSTableView` defines these constants to specify grid styles. These constants are used by the [gridStyleMask](gridstylemask.md) property. The mask can be either [NSTableViewGridNone](../nstableviewgridlinestyle/nstableviewgridnone.md) or it can contain either or both of the other options combined using the C bitwise `OR` operator.
- [NSTableView.ColumnAutoresizingStyle](columnautoresizingstyle-swift.enum.md): The following constants specify the autoresizing styles. These constants are used by the [columnAutoresizingStyle](columnautoresizingstyle-swift.property.md) property.
- [NSTableView.SelectionHighlightStyle](selectionhighlightstyle-swift.enum.md): The following constants specify the selection highlight styles. These constants are used by the [selectionHighlightStyle](selectionhighlightstyle-swift.property.md) property.
- [NSTableView.RowSizeStyle](rowsizestyle-swift.enum.md): The row size style constants define the size of the rows in the table view. They are used by the [effectiveRowSizeStyle](effectiverowsizestyle.md) and [rowSizeStyle](rowsizestyle-swift.property.md) properties. You can also query the row size in the [NSTableCellView](../nstablecellview.md) class’ property [rowSizeStyle](../nstablecellview/rowsizestyle.md).
- [NSTableView.RowActionEdge](rowactionedge.md): These constants define table row edges on which row actions are attached. They are used by the `tableView:rowActionsForRow:edge:` delegate method.

# NSTableViewAnimationOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

Specifies the animation effects to apply when inserting or removing rows.

## Declaration

```objectivec
enum NSTableViewAnimationOptions : NSUInteger;
```

## Topics

### Constants

- [NSTableViewAnimationEffectNone](../nstableviewanimationoptions/nstableviewanimationeffectnone.md): Use no animation effects.
- [NSTableViewAnimationEffectFade](animationoptions/effectfade.md): Use a fade for row or column removal. The effect can be combined with any of the slide constants.
- [NSTableViewAnimationEffectGap](animationoptions/effectgap.md): Creates a gap for newly inserted rows. This is useful for drag and drop animations that animate to a newly opened gap and should be used in the delegate method [tableView:acceptDrop:row:dropOperation:](../nstableviewdatasource/tableview%28__acceptdrop_row_dropoperation_%29.md).
- [NSTableViewAnimationSlideUp](animationoptions/slideup.md): Animates a row insertion or removal by sliding upward.
- [NSTableViewAnimationSlideDown](animationoptions/slidedown.md): Animates a row insertion or removal by sliding downward.
- [NSTableViewAnimationSlideLeft](animationoptions/slideleft.md): Animates a row insertion by sliding from the left. Animates a row removal by sliding towards the left.
- [NSTableViewAnimationSlideRight](animationoptions/slideright.md): Animates a row insertion by sliding from the right. Animates a row removal by sliding towards the right.

## See Also

### Constants

- [Specifying a Custom Row View in a Nib File](../specifying-a-custom-row-view-in-a-nib-file.md): View-based table view instances use `NSTableViewRowKey` to identify the nib file containing the template row view. You can specify a custom row view (without any code) by associating this key with the appropriate nib name in Interface Builder.
- [NSTableViewDraggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.enum.md): These constants specify the drag styles displayed by the table view. They’re used by [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle-swift.property.md).
- [NSTableViewDropOperation](dropoperation.md): `NSTableView` defines these constants to specify drop operations.
- [NSTableViewGridLineStyle](gridlinestyle.md): `NSTableView` defines these constants to specify grid styles. These constants are used by the [gridStyleMask](gridstylemask.md) property. The mask can be either [NSTableViewGridNone](../nstableviewgridlinestyle/nstableviewgridnone.md) or it can contain either or both of the other options combined using the C bitwise `OR` operator.
- [NSTableViewColumnAutoresizingStyle](columnautoresizingstyle-swift.enum.md): The following constants specify the autoresizing styles. These constants are used by the [columnAutoresizingStyle](columnautoresizingstyle-swift.property.md) property.
- [NSTableViewSelectionHighlightStyle](selectionhighlightstyle-swift.enum.md): The following constants specify the selection highlight styles. These constants are used by the [selectionHighlightStyle](selectionhighlightstyle-swift.property.md) property.
- [NSTableViewRowSizeStyle](rowsizestyle-swift.enum.md): The row size style constants define the size of the rows in the table view. They are used by the [effectiveRowSizeStyle](effectiverowsizestyle.md) and [rowSizeStyle](rowsizestyle-swift.property.md) properties. You can also query the row size in the [NSTableCellView](../nstablecellview.md) class’ property [rowSizeStyle](../nstablecellview/rowsizestyle.md).
- [NSTableRowActionEdge](rowactionedge.md): These constants define table row edges on which row actions are attached. They are used by the `tableView:rowActionsForRow:edge:` delegate method.
