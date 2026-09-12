> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/accessorytype-swift.enum/checkmark](https://developer.apple.com/documentation/uikit/uitableviewcell/accessorytype-swift.enum/checkmark)

# UITableViewCell.AccessoryType.checkmark (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A checkmark image.

## Declaration

```swift
case checkmark
```

## Mentioned In

- [Handling row selection in a table view](../../handling-row-selection-in-a-table-view.md)

<a id="Discussion"></a>

## Discussion

Choose this option to display a checkmark image. This type of accessory view doesn’t track touches.

To hide or show a check mark for a row, toggle the [accessoryType](../accessorytype-swift.property.md) property of the cell between the [UITableViewCell.AccessoryType.none](none.md) and [UITableViewCell.AccessoryType.checkmark](checkmark.md) values. For example, if you use a checkmark to indicate one selected row from a group of rows, use your delegate’s [tableView(\_:didSelectRowAt:)](../../uitableviewdelegate/tableview%28__didselectrowat_%29.md) method to update the accessory views of the affected rows.

## See Also

### Accessory views

- [UITableViewCell.AccessoryType.none](none.md): No accessory view.
- [UITableViewCell.AccessoryType.disclosureIndicator](disclosureindicator.md): A chevron-shaped control for presenting new content.
- [UITableViewCell.AccessoryType.detailDisclosureButton](detaildisclosurebutton.md): An information button and a disclosure (chevron) control.
- [UITableViewCell.AccessoryType.detailButton](detailbutton.md): An information button.

# UITableViewCellAccessoryCheckmark (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A checkmark image.

## Declaration

```objectivec
UITableViewCellAccessoryCheckmark
```

## Mentioned In

- [Handling row selection in a table view](../../handling-row-selection-in-a-table-view.md)

<a id="Discussion"></a>

## Discussion

Choose this option to display a checkmark image. This type of accessory view doesn’t track touches.

To hide or show a check mark for a row, toggle the [accessoryType](../accessorytype-swift.property.md) property of the cell between the [UITableViewCellAccessoryNone](none.md) and [UITableViewCellAccessoryCheckmark](checkmark.md) values. For example, if you use a checkmark to indicate one selected row from a group of rows, use your delegate’s [tableView:didSelectRowAtIndexPath:](../../uitableviewdelegate/tableview%28__didselectrowat_%29.md) method to update the accessory views of the affected rows.

## See Also

### Accessory views

- [UITableViewCellAccessoryNone](none.md): No accessory view.
- [UITableViewCellAccessoryDisclosureIndicator](disclosureindicator.md): A chevron-shaped control for presenting new content.
- [UITableViewCellAccessoryDetailDisclosureButton](detaildisclosurebutton.md): An information button and a disclosure (chevron) control.
- [UITableViewCellAccessoryDetailButton](detailbutton.md): An information button.
