> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:estimatedheightforfooterinsection:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:estimatedheightforfooterinsection:))

# tableView(\_:estimatedHeightForFooterInSection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate for the estimated height of the footer of a particular section.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, estimatedHeightForFooterInSection section: Int) -> CGFloat
```

## Parameters

- `tableView`: The table view requesting this information.
- `section`: An index number identifying a section of `tableView` .

<a id="return-value"></a>

## Return Value

A nonnegative floating-point value that estimates the height (in points) of the footer for `section`.

## Mentioned In

- [Estimating the height of a table’s scrolling area](../estimating-the-height-of-a-table-s-scrolling-area.md)

<a id="Discussion"></a>

## Discussion

Providing an estimate the height of section footers can improve the user experience when loading the table view. If the table contains variable height section footers, it might be expensive to calculate all their heights and so lead to a longer load time. Using estimation allows you to defer some of the cost of geometry calculation from load time to scrolling time.

## See Also

### Related Documentation

- [tableView(\_:heightForFooterInSection:)](tableview%28__heightforfooterinsection_%29.md): Asks the delegate for the height to use for the footer of a particular section.

### Estimating heights for the table’s content

- [tableView(\_:estimatedHeightForRowAt:)](tableview%28__estimatedheightforrowat_%29.md): Asks the delegate for the estimated height of a row in a specified location.
- [tableView(\_:estimatedHeightForHeaderInSection:)](tableview%28__estimatedheightforheaderinsection_%29.md): Asks the delegate for the estimated height of the header of a particular section.

# tableView:estimatedHeightForFooterInSection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate for the estimated height of the footer of a particular section.

## Declaration

```objectivec
- (CGFloat) tableView:(UITableView *) tableView estimatedHeightForFooterInSection:(NSInteger) section;
```

## Parameters

- `tableView`: The table view requesting this information.
- `section`: An index number identifying a section of `tableView` .

<a id="return-value"></a>

## Return Value

A nonnegative floating-point value that estimates the height (in points) of the footer for `section`.

## Mentioned In

- [Estimating the height of a table’s scrolling area](../estimating-the-height-of-a-table-s-scrolling-area.md)

<a id="Discussion"></a>

## Discussion

Providing an estimate the height of section footers can improve the user experience when loading the table view. If the table contains variable height section footers, it might be expensive to calculate all their heights and so lead to a longer load time. Using estimation allows you to defer some of the cost of geometry calculation from load time to scrolling time.

## See Also

### Related Documentation

- [tableView:heightForFooterInSection:](tableview%28__heightforfooterinsection_%29.md): Asks the delegate for the height to use for the footer of a particular section.

### Estimating heights for the table’s content

- [tableView:estimatedHeightForRowAtIndexPath:](tableview%28__estimatedheightforrowat_%29.md): Asks the delegate for the estimated height of a row in a specified location.
- [tableView:estimatedHeightForHeaderInSection:](tableview%28__estimatedheightforheaderinsection_%29.md): Asks the delegate for the estimated height of the header of a particular section.
