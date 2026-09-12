> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/accessorytype-swift.enum/detailbutton](https://developer.apple.com/documentation/uikit/uitableviewcell/accessorytype-swift.enum/detailbutton)

# UITableViewCell.AccessoryType.detailButton (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An information button.

## Declaration

```swift
case detailButton
```

<a id="Discussion"></a>

## Discussion

Choose this option to display a button that, when tapped, displays information about the row. Use your delegate’s [tableView(\_:accessoryButtonTappedForRowWith:)](../../uitableviewdelegate/tableview%28__accessorybuttontappedforrowwith_%29.md) method to respond to taps in the button.

## See Also

### Accessory views

- [UITableViewCell.AccessoryType.none](none.md): No accessory view.
- [UITableViewCell.AccessoryType.disclosureIndicator](disclosureindicator.md): A chevron-shaped control for presenting new content.
- [UITableViewCell.AccessoryType.detailDisclosureButton](detaildisclosurebutton.md): An information button and a disclosure (chevron) control.
- [UITableViewCell.AccessoryType.checkmark](checkmark.md): A checkmark image.

# UITableViewCellAccessoryDetailButton (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An information button.

## Declaration

```objectivec
UITableViewCellAccessoryDetailButton
```

<a id="Discussion"></a>

## Discussion

Choose this option to display a button that, when tapped, displays information about the row. Use your delegate’s [tableView:accessoryButtonTappedForRowWithIndexPath:](../../uitableviewdelegate/tableview%28__accessorybuttontappedforrowwith_%29.md) method to respond to taps in the button.

## See Also

### Accessory views

- [UITableViewCellAccessoryNone](none.md): No accessory view.
- [UITableViewCellAccessoryDisclosureIndicator](disclosureindicator.md): A chevron-shaped control for presenting new content.
- [UITableViewCellAccessoryDetailDisclosureButton](detaildisclosurebutton.md): An information button and a disclosure (chevron) control.
- [UITableViewCellAccessoryCheckmark](checkmark.md): A checkmark image.
