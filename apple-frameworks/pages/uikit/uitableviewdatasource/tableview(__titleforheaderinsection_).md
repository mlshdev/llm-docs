> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdatasource/tableview(_:titleforheaderinsection:)](https://developer.apple.com/documentation/uikit/uitableviewdatasource/tableview(_:titleforheaderinsection:))

# tableView(\_:titleForHeaderInSection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the data source for the title of the header of the specified section of the table view.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String?
```

## Parameters

- `tableView`: The table-view object asking for the title.
- `section`: An index number identifying a section of `tableView`.

<a id="return-value"></a>

## Return Value

A string to use as the title of the section header. If you return `nil` , the section will have no title.

## Mentioned In

- [Adding headers and footers to table sections](../adding-headers-and-footers-to-table-sections.md)

<a id="Discussion"></a>

## Discussion

The table view uses a fixed font style for section header titles. If you want a different font style, return a custom view (for example, a [UILabel](../uilabel.md) object) in the delegate method [tableView(\_:viewForHeaderInSection:)](../uitableviewdelegate/tableview%28__viewforheaderinsection_%29.md) instead.

If you don’t implement this method or the [tableView(\_:viewForHeaderInSection:)](../uitableviewdelegate/tableview%28__viewforheaderinsection_%29.md) method, the table doesn’t display headers for sections. If you implement both methods, the [tableView(\_:viewForHeaderInSection:)](../uitableviewdelegate/tableview%28__viewforheaderinsection_%29.md) method takes priority.

## See Also

### Providing cells, headers, and footers

- [tableView(\_:cellForRowAt:)](tableview%28__cellforrowat_%29.md): Asks the data source for a cell to insert in a particular location of the table view.
- [tableView(\_:titleForFooterInSection:)](tableview%28__titleforfooterinsection_%29.md): Asks the data source for the title of the footer of the specified section of the table view.

# tableView:titleForHeaderInSection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the data source for the title of the header of the specified section of the table view.

## Declaration

```objectivec
- (NSString *) tableView:(UITableView *) tableView titleForHeaderInSection:(NSInteger) section;
```

## Parameters

- `tableView`: The table-view object asking for the title.
- `section`: An index number identifying a section of `tableView`.

<a id="return-value"></a>

## Return Value

A string to use as the title of the section header. If you return `nil` , the section will have no title.

## Mentioned In

- [Adding headers and footers to table sections](../adding-headers-and-footers-to-table-sections.md)

<a id="Discussion"></a>

## Discussion

The table view uses a fixed font style for section header titles. If you want a different font style, return a custom view (for example, a [UILabel](../uilabel.md) object) in the delegate method [tableView:viewForHeaderInSection:](../uitableviewdelegate/tableview%28__viewforheaderinsection_%29.md) instead.

If you don’t implement this method or the [tableView:viewForHeaderInSection:](../uitableviewdelegate/tableview%28__viewforheaderinsection_%29.md) method, the table doesn’t display headers for sections. If you implement both methods, the [tableView:viewForHeaderInSection:](../uitableviewdelegate/tableview%28__viewforheaderinsection_%29.md) method takes priority.

## See Also

### Providing cells, headers, and footers

- [tableView:cellForRowAtIndexPath:](tableview%28__cellforrowat_%29.md): Asks the data source for a cell to insert in a particular location of the table view.
- [tableView:titleForFooterInSection:](tableview%28__titleforfooterinsection_%29.md): Asks the data source for the title of the footer of the specified section of the table view.
