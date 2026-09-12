> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:viewforheaderinsection:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:viewforheaderinsection:))

# tableView(\_:viewForHeaderInSection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate for a view to display in the header of the specified section of the table view.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView?
```

## Parameters

- `tableView`: The table view asking for the view.
- `section`: The index number of the section containing the header view.

<a id="return-value"></a>

## Return Value

A [UILabel](../uilabel.md), [UIImageView](../uiimageview.md), or custom view to display at the top of the specified section.

## Mentioned In

- [Adding headers and footers to table sections](../adding-headers-and-footers-to-table-sections.md)

<a id="Discussion"></a>

## Discussion

If you implement this method but don’t implement [tableView(\_:heightForHeaderInSection:)](tableview%28__heightforheaderinsection_%29.md), the table view calculates the height automatically, or uses the value of [sectionHeaderHeight](../uitableview/sectionheaderheight.md) if set.

## See Also

### Providing custom header and footer views

- [tableView(\_:viewForFooterInSection:)](tableview%28__viewforfooterinsection_%29.md): Asks the delegate for a view to display in the footer of the specified section of the table view.
- [tableView(\_:willDisplayHeaderView:forSection:)](tableview%28__willdisplayheaderview_forsection_%29.md): Tells the delegate that the table is about to display the header view for the specified section.
- [tableView(\_:willDisplayFooterView:forSection:)](tableview%28__willdisplayfooterview_forsection_%29.md): Tells the delegate that the table is about to display the footer view for the specified section.

# tableView:viewForHeaderInSection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate for a view to display in the header of the specified section of the table view.

## Declaration

```objectivec
- (UIView *) tableView:(UITableView *) tableView viewForHeaderInSection:(NSInteger) section;
```

## Parameters

- `tableView`: The table view asking for the view.
- `section`: The index number of the section containing the header view.

<a id="return-value"></a>

## Return Value

A [UILabel](../uilabel.md), [UIImageView](../uiimageview.md), or custom view to display at the top of the specified section.

## Mentioned In

- [Adding headers and footers to table sections](../adding-headers-and-footers-to-table-sections.md)

<a id="Discussion"></a>

## Discussion

If you implement this method but don’t implement [tableView:heightForHeaderInSection:](tableview%28__heightforheaderinsection_%29.md), the table view calculates the height automatically, or uses the value of [sectionHeaderHeight](../uitableview/sectionheaderheight.md) if set.

## See Also

### Providing custom header and footer views

- [tableView:viewForFooterInSection:](tableview%28__viewforfooterinsection_%29.md): Asks the delegate for a view to display in the footer of the specified section of the table view.
- [tableView:willDisplayHeaderView:forSection:](tableview%28__willdisplayheaderview_forsection_%29.md): Tells the delegate that the table is about to display the header view for the specified section.
- [tableView:willDisplayFooterView:forSection:](tableview%28__willdisplayfooterview_forsection_%29.md): Tells the delegate that the table is about to display the footer view for the specified section.
