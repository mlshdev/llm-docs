> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/accessorytype-swift.property](https://developer.apple.com/documentation/uikit/uitableviewcell/accessorytype-swift.property)

# accessoryType (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The type of standard accessory view for the cell to use in the table view’s normal state.

## Declaration

```swift
var accessoryType: UITableViewCell.AccessoryType { get set }
```

## Mentioned In

- [Configuring the cells for your table](../configuring-the-cells-for-your-table.md)
- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md)

<a id="Discussion"></a>

## Discussion

The accessory view appears in the right side of the cell in the table view’s normal (default) state. The standard accessory views include the disclosure chevron; for a description of valid [accessoryType](accessorytype-swift.property.md) constants, see [UITableViewCell.AccessoryType](accessorytype-swift.enum.md). The default is [UITableViewCell.AccessoryType.none](accessorytype-swift.enum/none.md). If a custom accessory view is set through the [accessoryView](accessoryview.md) property, the value of this property is ignored. If the cell is enabled and the accessory type is [UITableViewCell.AccessoryType.detailDisclosureButton](accessorytype-swift.enum/detaildisclosurebutton.md), the accessory view tracks touches and, when tapped, sends the data-source object a [tableView(\_:accessoryButtonTappedForRowWith:)](../uitableviewdelegate/tableview%28__accessorybuttontappedforrowwith_%29.md) message.

The accessory-type image cross-fades between normal and editing states if it set for both states; use the [editingAccessoryType](editingaccessorytype.md) property to set the accessory type for the cell during editing mode. If this property is not set for both states, the cell is animated to slide in or out, as necessary.

## See Also

### Related Documentation

- [willTransition(to:)](willtransition%28to_%29.md): Notifies the cell that it’s about to transition to a new cell state.
- [didTransition(to:)](didtransition%28to_%29.md): Notifies the cell that it transitioned to a new cell state.

### Managing accessory views

- [accessoryView](accessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s normal state.
- [editingAccessoryType](editingaccessorytype.md): The type of standard accessory view for the cell to use in the table view’s editing state.
- [editingAccessoryView](editingaccessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s editing state.
- [UITableViewCell.AccessoryType](accessorytype-swift.enum.md): The type of standard accessory control used by a cell.

# accessoryType (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The type of standard accessory view for the cell to use in the table view’s normal state.

## Declaration

```objectivec
@property (nonatomic) UITableViewCellAccessoryType accessoryType;
```

## Mentioned In

- [Configuring the cells for your table](../configuring-the-cells-for-your-table.md)
- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md)

<a id="Discussion"></a>

## Discussion

The accessory view appears in the right side of the cell in the table view’s normal (default) state. The standard accessory views include the disclosure chevron; for a description of valid [accessoryType](accessorytype-swift.property.md) constants, see [UITableViewCellAccessoryType](accessorytype-swift.enum.md). The default is [UITableViewCellAccessoryNone](accessorytype-swift.enum/none.md). If a custom accessory view is set through the [accessoryView](accessoryview.md) property, the value of this property is ignored. If the cell is enabled and the accessory type is [UITableViewCellAccessoryDetailDisclosureButton](accessorytype-swift.enum/detaildisclosurebutton.md), the accessory view tracks touches and, when tapped, sends the data-source object a [tableView:accessoryButtonTappedForRowWithIndexPath:](../uitableviewdelegate/tableview%28__accessorybuttontappedforrowwith_%29.md) message.

The accessory-type image cross-fades between normal and editing states if it set for both states; use the [editingAccessoryType](editingaccessorytype.md) property to set the accessory type for the cell during editing mode. If this property is not set for both states, the cell is animated to slide in or out, as necessary.

## See Also

### Related Documentation

- [willTransitionToState:](willtransition%28to_%29.md): Notifies the cell that it’s about to transition to a new cell state.
- [didTransitionToState:](didtransition%28to_%29.md): Notifies the cell that it transitioned to a new cell state.

### Managing accessory views

- [accessoryView](accessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s normal state.
- [editingAccessoryType](editingaccessorytype.md): The type of standard accessory view for the cell to use in the table view’s editing state.
- [editingAccessoryView](editingaccessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s editing state.
- [UITableViewCellAccessoryType](accessorytype-swift.enum.md): The type of standard accessory control used by a cell.
