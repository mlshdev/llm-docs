> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:estimatedheightforheaderinsection:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:estimatedheightforheaderinsection:))

# tableView(\_:estimatedHeightForHeaderInSection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate for the estimated height of the header of a particular section.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, estimatedHeightForHeaderInSection section: Int) -> CGFloat
```

## Parameters

- `tableView`: The table view requesting this information.
- `section`: An index number identifying a section of `tableView` .

<a id="return-value"></a>

## Return Value

A nonnegative floating-point value that specifies the height (in points) of the header for `section`.

## Mentioned In

- [Estimating the height of a table’s scrolling area](../estimating-the-height-of-a-table-s-scrolling-area.md)

<a id="Discussion"></a>

## Discussion

Providing an estimate the height of section headers can improve the user experience when loading the table view. If the table contains variable height section headers, it might be expensive to calculate all their heights and so lead to a longer load time. Using estimation allows you to defer some of the cost of geometry calculation from load time to scrolling time.

## See Also

### Related Documentation

- [tableView(\_:heightForHeaderInSection:)](tableview%28__heightforheaderinsection_%29.md): Asks the delegate for the height to use for the header of a particular section.

### Estimating heights for the table’s content

- [tableView(\_:estimatedHeightForRowAt:)](tableview%28__estimatedheightforrowat_%29.md): Asks the delegate for the estimated height of a row in a specified location.
- [tableView(\_:estimatedHeightForFooterInSection:)](tableview%28__estimatedheightforfooterinsection_%29.md): Asks the delegate for the estimated height of the footer of a particular section.

# tableView:estimatedHeightForHeaderInSection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate for the estimated height of the header of a particular section.

## Declaration

```objectivec
- (CGFloat) tableView:(UITableView *) tableView estimatedHeightForHeaderInSection:(NSInteger) section;
```

## Parameters

- `tableView`: The table view requesting this information.
- `section`: An index number identifying a section of `tableView` .

<a id="return-value"></a>

## Return Value

A nonnegative floating-point value that specifies the height (in points) of the header for `section`.

## Mentioned In

- [Estimating the height of a table’s scrolling area](../estimating-the-height-of-a-table-s-scrolling-area.md)

<a id="Discussion"></a>

## Discussion

Providing an estimate the height of section headers can improve the user experience when loading the table view. If the table contains variable height section headers, it might be expensive to calculate all their heights and so lead to a longer load time. Using estimation allows you to defer some of the cost of geometry calculation from load time to scrolling time.

## See Also

### Related Documentation

- [tableView:heightForHeaderInSection:](tableview%28__heightforheaderinsection_%29.md): Asks the delegate for the height to use for the header of a particular section.

### Estimating heights for the table’s content

- [tableView:estimatedHeightForRowAtIndexPath:](tableview%28__estimatedheightforrowat_%29.md): Asks the delegate for the estimated height of a row in a specified location.
- [tableView:estimatedHeightForFooterInSection:](tableview%28__estimatedheightforfooterinsection_%29.md): Asks the delegate for the estimated height of the footer of a particular section.
