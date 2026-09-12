> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/shouldindentwhileediting](https://developer.apple.com/documentation/uikit/uitableviewcell/shouldindentwhileediting)

# shouldIndentWhileEditing (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that controls whether the cell background is indented when the table view is in editing mode.

## Declaration

```swift
var shouldIndentWhileEditing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). This property is unrelated to [indentationLevel](indentationlevel.md). The delegate can override this value in [tableView(\_:shouldIndentWhileEditingRowAt:)](../uitableviewdelegate/tableview%28__shouldindentwhileeditingrowat_%29.md). This property has an effect only on table views created in the grouped style ([UITableView.Style.grouped](../uitableview/style-swift.enum/grouped.md)); it has no effect on [UITableView.Style.plain](../uitableview/style-swift.enum/plain.md) table views.

## See Also

### Managing content indentation

- [indentationLevel](indentationlevel.md): The indentation level of the cell’s content.
- [indentationWidth](indentationwidth.md): The width for each level of indentation of a cell’s content.
- [separatorInset](separatorinset.md): The inset values for the separator line drawn beneath the cell.
- [UITableViewCell.SeparatorStyle](separatorstyle.md): The style for cells to use as separators.

# shouldIndentWhileEditing (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that controls whether the cell background is indented when the table view is in editing mode.

## Declaration

```objectivec
@property (nonatomic) BOOL shouldIndentWhileEditing;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). This property is unrelated to [indentationLevel](indentationlevel.md). The delegate can override this value in [tableView:shouldIndentWhileEditingRowAtIndexPath:](../uitableviewdelegate/tableview%28__shouldindentwhileeditingrowat_%29.md). This property has an effect only on table views created in the grouped style ([UITableViewStyleGrouped](../uitableview/style-swift.enum/grouped.md)); it has no effect on [UITableViewStylePlain](../uitableview/style-swift.enum/plain.md) table views.

## See Also

### Managing content indentation

- [indentationLevel](indentationlevel.md): The indentation level of the cell’s content.
- [indentationWidth](indentationwidth.md): The width for each level of indentation of a cell’s content.
- [separatorInset](separatorinset.md): The inset values for the separator line drawn beneath the cell.
- [UITableViewCellSeparatorStyle](separatorstyle.md): The style for cells to use as separators.
