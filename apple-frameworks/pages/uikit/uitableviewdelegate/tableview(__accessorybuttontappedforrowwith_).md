> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:accessorybuttontappedforrowwith:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:accessorybuttontappedforrowwith:))

# tableView(\_:accessoryButtonTappedForRowWith:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that the user tapped the detail button for the specified row.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, accessoryButtonTappedForRowWith indexPath: IndexPath)
```

## Parameters

- `tableView`: The table view informing the delegate of this event.
- `indexPath`: The index path of the row whose detail button was tapped.

## Mentioned In

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md)

<a id="Discussion"></a>

## Discussion

Use this method to respond to taps in the detail button accessory view of a row. The table view does not call this method for other types of accessory views.

# tableView:accessoryButtonTappedForRowWithIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate that the user tapped the detail button for the specified row.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView accessoryButtonTappedForRowWithIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view informing the delegate of this event.
- `indexPath`: The index path of the row whose detail button was tapped.

## Mentioned In

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md)

<a id="Discussion"></a>

## Discussion

Use this method to respond to taps in the detail button accessory view of a row. The table view does not call this method for other types of accessory views.

## See Also

### Managing accessory views

- [tableView:accessoryTypeForRowWithIndexPath:](tableview_accessorytypeforrowwithindexpath_.md): Deprecated. Asks the delegate for the type of standard accessory view to use as a disclosure control for the specified row.
