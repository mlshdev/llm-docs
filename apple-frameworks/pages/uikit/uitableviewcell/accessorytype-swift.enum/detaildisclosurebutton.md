> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/accessorytype-swift.enum/detaildisclosurebutton](https://developer.apple.com/documentation/uikit/uitableviewcell/accessorytype-swift.enum/detaildisclosurebutton)

# UITableViewCell.AccessoryType.detailDisclosureButton (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

An information button and a disclosure (chevron) control.

## Declaration

```swift
case detailDisclosureButton
```

<a id="Discussion"></a>

## Discussion

Choose this type when you want both an information button and a disclosure control. Connect the disclosure control to a push segue to display new content. Use the delegate’s [tableView(\_:accessoryButtonTappedForRowWith:)](../../uitableviewdelegate/tableview%28__accessorybuttontappedforrowwith_%29.md)method to respond to touch events in the detail button.

## See Also

### Accessory views

- [UITableViewCell.AccessoryType.none](none.md): No accessory view.
- [UITableViewCell.AccessoryType.disclosureIndicator](disclosureindicator.md): A chevron-shaped control for presenting new content.
- [UITableViewCell.AccessoryType.checkmark](checkmark.md): A checkmark image.
- [UITableViewCell.AccessoryType.detailButton](detailbutton.md): An information button.

# UITableViewCellAccessoryDetailDisclosureButton (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

An information button and a disclosure (chevron) control.

## Declaration

```objectivec
UITableViewCellAccessoryDetailDisclosureButton
```

<a id="Discussion"></a>

## Discussion

Choose this type when you want both an information button and a disclosure control. Connect the disclosure control to a push segue to display new content. Use the delegate’s [tableView:accessoryButtonTappedForRowWithIndexPath:](../../uitableviewdelegate/tableview%28__accessorybuttontappedforrowwith_%29.md)method to respond to touch events in the detail button.

## See Also

### Accessory views

- [UITableViewCellAccessoryNone](none.md): No accessory view.
- [UITableViewCellAccessoryDisclosureIndicator](disclosureindicator.md): A chevron-shaped control for presenting new content.
- [UITableViewCellAccessoryCheckmark](checkmark.md): A checkmark image.
- [UITableViewCellAccessoryDetailButton](detailbutton.md): An information button.
