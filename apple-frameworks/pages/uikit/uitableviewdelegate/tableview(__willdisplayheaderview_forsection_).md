> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:willdisplayheaderview:forsection:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:willdisplayheaderview:forsection:))

# tableView(\_:willDisplayHeaderView:forSection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the table is about to display the header view for the specified section.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, willDisplayHeaderView view: UIView, forSection section: Int)
```

## Parameters

- `tableView`: The table view informing the delegate of this event.
- `view`: The header view that is about to be displayed.
- `section`: The index number of the section containing the header view.

## See Also

### Providing custom header and footer views

- [tableView(\_:viewForHeaderInSection:)](tableview%28__viewforheaderinsection_%29.md): Asks the delegate for a view to display in the header of the specified section of the table view.
- [tableView(\_:viewForFooterInSection:)](tableview%28__viewforfooterinsection_%29.md): Asks the delegate for a view to display in the footer of the specified section of the table view.
- [tableView(\_:willDisplayFooterView:forSection:)](tableview%28__willdisplayfooterview_forsection_%29.md): Tells the delegate that the table is about to display the footer view for the specified section.

# tableView:willDisplayHeaderView:forSection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the table is about to display the header view for the specified section.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView willDisplayHeaderView:(UIView *) view forSection:(NSInteger) section;
```

## Parameters

- `tableView`: The table view informing the delegate of this event.
- `view`: The header view that is about to be displayed.
- `section`: The index number of the section containing the header view.

## See Also

### Providing custom header and footer views

- [tableView:viewForHeaderInSection:](tableview%28__viewforheaderinsection_%29.md): Asks the delegate for a view to display in the header of the specified section of the table view.
- [tableView:viewForFooterInSection:](tableview%28__viewforfooterinsection_%29.md): Asks the delegate for a view to display in the footer of the specified section of the table view.
- [tableView:willDisplayFooterView:forSection:](tableview%28__willdisplayfooterview_forsection_%29.md): Tells the delegate that the table is about to display the footer view for the specified section.
