> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdatasource/tableview(_:titleforfooterinsection:)](https://developer.apple.com/documentation/uikit/uitableviewdatasource/tableview(_:titleforfooterinsection:))

# tableView(\_:titleForFooterInSection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the data source for the title of the footer of the specified section of the table view.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, titleForFooterInSection section: Int) -> String?
```

## Parameters

- `tableView`: The table-view object asking for the title.
- `section`: An index number identifying a section of `tableView`.

<a id="return-value"></a>

## Return Value

A string to use as the title of the section footer. If you return `nil` , the section will have no title.

## Mentioned In

- [Adding headers and footers to table sections](../adding-headers-and-footers-to-table-sections.md)

<a id="Discussion"></a>

## Discussion

The table view uses a fixed font style for section footer titles. If you want a different font style, return a custom view (for example, a [UILabel](../uilabel.md) object) in the delegate method [tableView(\_:viewForFooterInSection:)](../uitableviewdelegate/tableview%28__viewforfooterinsection_%29.md) instead.

If you don’t implement this method or the [tableView(\_:viewForFooterInSection:)](../uitableviewdelegate/tableview%28__viewforfooterinsection_%29.md) method, the table doesn’t display footers for sections. If you implement both methods, the [tableView(\_:viewForFooterInSection:)](../uitableviewdelegate/tableview%28__viewforfooterinsection_%29.md) method takes priority.

## See Also

### Providing cells, headers, and footers

- [tableView(\_:cellForRowAt:)](tableview%28__cellforrowat_%29.md): Asks the data source for a cell to insert in a particular location of the table view.
- [tableView(\_:titleForHeaderInSection:)](tableview%28__titleforheaderinsection_%29.md): Asks the data source for the title of the header of the specified section of the table view.

# tableView:titleForFooterInSection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the data source for the title of the footer of the specified section of the table view.

## Declaration

```objectivec
- (NSString *) tableView:(UITableView *) tableView titleForFooterInSection:(NSInteger) section;
```

## Parameters

- `tableView`: The table-view object asking for the title.
- `section`: An index number identifying a section of `tableView`.

<a id="return-value"></a>

## Return Value

A string to use as the title of the section footer. If you return `nil` , the section will have no title.

## Mentioned In

- [Adding headers and footers to table sections](../adding-headers-and-footers-to-table-sections.md)

<a id="Discussion"></a>

## Discussion

The table view uses a fixed font style for section footer titles. If you want a different font style, return a custom view (for example, a [UILabel](../uilabel.md) object) in the delegate method [tableView:viewForFooterInSection:](../uitableviewdelegate/tableview%28__viewforfooterinsection_%29.md) instead.

If you don’t implement this method or the [tableView:viewForFooterInSection:](../uitableviewdelegate/tableview%28__viewforfooterinsection_%29.md) method, the table doesn’t display footers for sections. If you implement both methods, the [tableView:viewForFooterInSection:](../uitableviewdelegate/tableview%28__viewforfooterinsection_%29.md) method takes priority.

## See Also

### Providing cells, headers, and footers

- [tableView:cellForRowAtIndexPath:](tableview%28__cellforrowat_%29.md): Asks the data source for a cell to insert in a particular location of the table view.
- [tableView:titleForHeaderInSection:](tableview%28__titleforheaderinsection_%29.md): Asks the data source for the title of the header of the specified section of the table view.
