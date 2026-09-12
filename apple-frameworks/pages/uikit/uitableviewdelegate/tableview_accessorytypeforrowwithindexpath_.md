> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview:accessorytypeforrowwithindexpath:](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview:accessorytypeforrowwithindexpath:)

# tableView:accessoryTypeForRowWithIndexPath:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 3.0) · iPadOS 2.0+ (deprecated in 3.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Asks the delegate for the type of standard accessory view to use as a disclosure control for the specified row.

> Use the accessory-view and accessory-type properties (for both normal and editing modes) of the [UITableViewCell](../uitableviewcell.md) class when configuring table-view cells.

## Declaration

```objectivec
- (UITableViewCellAccessoryType) tableView:(UITableView *) tableView accessoryTypeForRowWithIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view requesting the accessory-view type.
- `indexPath`: An index path locating the row in `tableView`.

<a id="return-value"></a>

## Return Value

A constant identifying a type of standard accessory view. For details, see the “Constants” section in [UITableViewCell](../uitableviewcell.md).

## See Also

### Managing accessory views

- [tableView:accessoryButtonTappedForRowWithIndexPath:](tableview%28__accessorybuttontappedforrowwith_%29.md): Tells the delegate that the user tapped the detail button for the specified row.
