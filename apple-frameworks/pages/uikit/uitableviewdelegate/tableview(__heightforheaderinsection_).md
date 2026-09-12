> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:heightforheaderinsection:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:heightforheaderinsection:))

# tableView(\_:heightForHeaderInSection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate for the height to use for the header of a particular section.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat
```

## Parameters

- `tableView`: The table view requesting this information.
- `section`: An index number identifying a section of `tableView` .

<a id="return-value"></a>

## Return Value

A nonnegative floating-point value that specifies the height (in points) of the header for `section`.

## Mentioned In

- [Adding headers and footers to table sections](../adding-headers-and-footers-to-table-sections.md)

<a id="Discussion"></a>

## Discussion

Use this method to specify the height of custom header views returned by your [tableView(\_:viewForHeaderInSection:)](tableview%28__viewforheaderinsection_%29.md) method.

## See Also

### Related Documentation

- [tableView(\_:estimatedHeightForHeaderInSection:)](tableview%28__estimatedheightforheaderinsection_%29.md): Asks the delegate for the estimated height of the header of a particular section.
- [tableView(\_:viewForHeaderInSection:)](tableview%28__viewforheaderinsection_%29.md): Asks the delegate for a view to display in the header of the specified section of the table view.

### Providing header, footer, and row heights

- [tableView(\_:heightForRowAt:)](tableview%28__heightforrowat_%29.md): Asks the delegate for the height to use for a row in a specified location.
- [tableView(\_:heightForFooterInSection:)](tableview%28__heightforfooterinsection_%29.md): Asks the delegate for the height to use for the footer of a particular section.
- [automaticDimension](../uitableview/automaticdimension.md): A constant representing the default value for a given dimension.

# tableView:heightForHeaderInSection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate for the height to use for the header of a particular section.

## Declaration

```objectivec
- (CGFloat) tableView:(UITableView *) tableView heightForHeaderInSection:(NSInteger) section;
```

## Parameters

- `tableView`: The table view requesting this information.
- `section`: An index number identifying a section of `tableView` .

<a id="return-value"></a>

## Return Value

A nonnegative floating-point value that specifies the height (in points) of the header for `section`.

## Mentioned In

- [Adding headers and footers to table sections](../adding-headers-and-footers-to-table-sections.md)

<a id="Discussion"></a>

## Discussion

Use this method to specify the height of custom header views returned by your [tableView:viewForHeaderInSection:](tableview%28__viewforheaderinsection_%29.md) method.

## See Also

### Related Documentation

- [tableView:estimatedHeightForHeaderInSection:](tableview%28__estimatedheightforheaderinsection_%29.md): Asks the delegate for the estimated height of the header of a particular section.
- [tableView:viewForHeaderInSection:](tableview%28__viewforheaderinsection_%29.md): Asks the delegate for a view to display in the header of the specified section of the table view.

### Providing header, footer, and row heights

- [tableView:heightForRowAtIndexPath:](tableview%28__heightforrowat_%29.md): Asks the delegate for the height to use for a row in a specified location.
- [tableView:heightForFooterInSection:](tableview%28__heightforfooterinsection_%29.md): Asks the delegate for the height to use for the footer of a particular section.
- [UITableViewAutomaticDimension](../uitableview/automaticdimension.md): A constant representing the default value for a given dimension.
