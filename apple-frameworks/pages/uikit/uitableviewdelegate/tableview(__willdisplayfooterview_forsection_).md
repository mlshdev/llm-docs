> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:willdisplayfooterview:forsection:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:willdisplayfooterview:forsection:))

# tableView(\_:willDisplayFooterView:forSection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the table is about to display the footer view for the specified section.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, willDisplayFooterView view: UIView, forSection section: Int)
```

## Parameters

- `tableView`: The table view informing the delegate of this event.
- `view`: The footer view that is about to be displayed.
- `section`: The index number of the section containing the footer view.

## See Also

### Providing custom header and footer views

- [tableView(\_:viewForHeaderInSection:)](tableview%28__viewforheaderinsection_%29.md): Asks the delegate for a view to display in the header of the specified section of the table view.
- [tableView(\_:viewForFooterInSection:)](tableview%28__viewforfooterinsection_%29.md): Asks the delegate for a view to display in the footer of the specified section of the table view.
- [tableView(\_:willDisplayHeaderView:forSection:)](tableview%28__willdisplayheaderview_forsection_%29.md): Tells the delegate that the table is about to display the header view for the specified section.

# tableView:willDisplayFooterView:forSection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the table is about to display the footer view for the specified section.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView willDisplayFooterView:(UIView *) view forSection:(NSInteger) section;
```

## Parameters

- `tableView`: The table view informing the delegate of this event.
- `view`: The footer view that is about to be displayed.
- `section`: The index number of the section containing the footer view.

## See Also

### Providing custom header and footer views

- [tableView:viewForHeaderInSection:](tableview%28__viewforheaderinsection_%29.md): Asks the delegate for a view to display in the header of the specified section of the table view.
- [tableView:viewForFooterInSection:](tableview%28__viewforfooterinsection_%29.md): Asks the delegate for a view to display in the footer of the specified section of the table view.
- [tableView:willDisplayHeaderView:forSection:](tableview%28__willdisplayheaderview_forsection_%29.md): Tells the delegate that the table is about to display the header view for the specified section.
