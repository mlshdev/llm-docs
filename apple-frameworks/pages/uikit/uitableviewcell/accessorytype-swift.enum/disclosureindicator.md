> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/accessorytype-swift.enum/disclosureindicator](https://developer.apple.com/documentation/uikit/uitableviewcell/accessorytype-swift.enum/disclosureindicator)

# UITableViewCell.AccessoryType.disclosureIndicator (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A chevron-shaped control for presenting new content.

## Declaration

```swift
case disclosureIndicator
```

<a id="Discussion"></a>

## Discussion

Choose this type when you want taps in the accessory view to display new content. Connect the accessory view itself to a push segue to display that content.

The table view doesn’t call the delegate’s [tableView(\_:accessoryButtonTappedForRowWith:)](../../uitableviewdelegate/tableview%28__accessorybuttontappedforrowwith_%29.md) method in response to touch events in this accessory view.

## See Also

### Accessory views

- [UITableViewCell.AccessoryType.none](none.md): No accessory view.
- [UITableViewCell.AccessoryType.detailDisclosureButton](detaildisclosurebutton.md): An information button and a disclosure (chevron) control.
- [UITableViewCell.AccessoryType.checkmark](checkmark.md): A checkmark image.
- [UITableViewCell.AccessoryType.detailButton](detailbutton.md): An information button.

# UITableViewCellAccessoryDisclosureIndicator (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A chevron-shaped control for presenting new content.

## Declaration

```objectivec
UITableViewCellAccessoryDisclosureIndicator
```

<a id="Discussion"></a>

## Discussion

Choose this type when you want taps in the accessory view to display new content. Connect the accessory view itself to a push segue to display that content.

The table view doesn’t call the delegate’s [tableView:accessoryButtonTappedForRowWithIndexPath:](../../uitableviewdelegate/tableview%28__accessorybuttontappedforrowwith_%29.md) method in response to touch events in this accessory view.

## See Also

### Accessory views

- [UITableViewCellAccessoryNone](none.md): No accessory view.
- [UITableViewCellAccessoryDetailDisclosureButton](detaildisclosurebutton.md): An information button and a disclosure (chevron) control.
- [UITableViewCellAccessoryCheckmark](checkmark.md): A checkmark image.
- [UITableViewCellAccessoryDetailButton](detailbutton.md): An information button.
