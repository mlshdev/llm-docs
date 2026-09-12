> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/editingaccessorytype](https://developer.apple.com/documentation/uikit/uitableviewcell/editingaccessorytype)

# editingAccessoryType (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The type of standard accessory view for the cell to use in the table view’s editing state.

## Declaration

```swift
var editingAccessoryType: UITableViewCell.AccessoryType { get set }
```

<a id="Discussion"></a>

## Discussion

The accessory view appears in the right side of the cell when the table view is in editing mode. The standard accessory views include the disclosure chevron; for a description of valid constants, see [UITableViewCell.AccessoryType](accessorytype-swift.enum.md). The default is [UITableViewCell.AccessoryType.none](accessorytype-swift.enum/none.md). If a custom accessory view for editing mode is set through the [editingAccessoryView](editingaccessoryview.md) property, the value of this property is ignored. If the cell is enabled and the accessory type is [UITableViewCell.AccessoryType.detailDisclosureButton](accessorytype-swift.enum/detaildisclosurebutton.md), the accessory view tracks touches and, when tapped, sends the delegate object a [tableView(\_:accessoryButtonTappedForRowWith:)](../uitableviewdelegate/tableview%28__accessorybuttontappedforrowwith_%29.md) message.

The accessory type cross-fades between normal and editing states if it set for both states; use the [accessoryType](accessorytype-swift.property.md) property to set the accessory view for the cell during the table view’s normal state. If this property is not set for both states, the cell is animated to slide or out, as necessary.

## See Also

### Related Documentation

- [willTransition(to:)](willtransition%28to_%29.md): Notifies the cell that it’s about to transition to a new cell state.
- [didTransition(to:)](didtransition%28to_%29.md): Notifies the cell that it transitioned to a new cell state.

### Managing accessory views

- [accessoryType](accessorytype-swift.property.md): The type of standard accessory view for the cell to use in the table view’s normal state.
- [accessoryView](accessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s normal state.
- [editingAccessoryView](editingaccessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s editing state.
- [UITableViewCell.AccessoryType](accessorytype-swift.enum.md): The type of standard accessory control used by a cell.

# editingAccessoryType (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The type of standard accessory view for the cell to use in the table view’s editing state.

## Declaration

```objectivec
@property (nonatomic) UITableViewCellAccessoryType editingAccessoryType;
```

<a id="Discussion"></a>

## Discussion

The accessory view appears in the right side of the cell when the table view is in editing mode. The standard accessory views include the disclosure chevron; for a description of valid constants, see [UITableViewCellAccessoryType](accessorytype-swift.enum.md). The default is [UITableViewCellAccessoryNone](accessorytype-swift.enum/none.md). If a custom accessory view for editing mode is set through the [editingAccessoryView](editingaccessoryview.md) property, the value of this property is ignored. If the cell is enabled and the accessory type is [UITableViewCellAccessoryDetailDisclosureButton](accessorytype-swift.enum/detaildisclosurebutton.md), the accessory view tracks touches and, when tapped, sends the delegate object a [tableView:accessoryButtonTappedForRowWithIndexPath:](../uitableviewdelegate/tableview%28__accessorybuttontappedforrowwith_%29.md) message.

The accessory type cross-fades between normal and editing states if it set for both states; use the [accessoryType](accessorytype-swift.property.md) property to set the accessory view for the cell during the table view’s normal state. If this property is not set for both states, the cell is animated to slide or out, as necessary.

## See Also

### Related Documentation

- [willTransitionToState:](willtransition%28to_%29.md): Notifies the cell that it’s about to transition to a new cell state.
- [didTransitionToState:](didtransition%28to_%29.md): Notifies the cell that it transitioned to a new cell state.

### Managing accessory views

- [accessoryType](accessorytype-swift.property.md): The type of standard accessory view for the cell to use in the table view’s normal state.
- [accessoryView](accessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s normal state.
- [editingAccessoryView](editingaccessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s editing state.
- [UITableViewCellAccessoryType](accessorytype-swift.enum.md): The type of standard accessory control used by a cell.
