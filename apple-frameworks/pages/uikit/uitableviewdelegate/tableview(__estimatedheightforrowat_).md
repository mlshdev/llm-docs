> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:estimatedheightforrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:estimatedheightforrowat:))

# tableView(\_:estimatedHeightForRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate for the estimated height of a row in a specified location.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, estimatedHeightForRowAt indexPath: IndexPath) -> CGFloat
```

## Parameters

- `tableView`: The table view requesting this information.
- `indexPath`: An index path that locates a row in `tableView`.

<a id="return-value"></a>

## Return Value

A nonnegative floating-point value that estimates the height (in points) that `row` should be. Return [automaticDimension](../uitableview/automaticdimension.md) if you have no estimate.

## Mentioned In

- [Estimating the height of a table’s scrolling area](../estimating-the-height-of-a-table-s-scrolling-area.md)

<a id="Discussion"></a>

## Discussion

Providing an estimate the height of rows can improve the user experience when loading the table view. If the table contains variable height rows, it might be expensive to calculate all their heights and so lead to a longer load time. Using estimation allows you to defer some of the cost of geometry calculation from load time to scrolling time.

## See Also

### Related Documentation

- [tableView(\_:heightForRowAt:)](tableview%28__heightforrowat_%29.md): Asks the delegate for the height to use for a row in a specified location.

### Estimating heights for the table’s content

- [tableView(\_:estimatedHeightForHeaderInSection:)](tableview%28__estimatedheightforheaderinsection_%29.md): Asks the delegate for the estimated height of the header of a particular section.
- [tableView(\_:estimatedHeightForFooterInSection:)](tableview%28__estimatedheightforfooterinsection_%29.md): Asks the delegate for the estimated height of the footer of a particular section.

# tableView:estimatedHeightForRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate for the estimated height of a row in a specified location.

## Declaration

```objectivec
- (CGFloat) tableView:(UITableView *) tableView estimatedHeightForRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view requesting this information.
- `indexPath`: An index path that locates a row in `tableView`.

<a id="return-value"></a>

## Return Value

A nonnegative floating-point value that estimates the height (in points) that `row` should be. Return [UITableViewAutomaticDimension](../uitableview/automaticdimension.md) if you have no estimate.

## Mentioned In

- [Estimating the height of a table’s scrolling area](../estimating-the-height-of-a-table-s-scrolling-area.md)

<a id="Discussion"></a>

## Discussion

Providing an estimate the height of rows can improve the user experience when loading the table view. If the table contains variable height rows, it might be expensive to calculate all their heights and so lead to a longer load time. Using estimation allows you to defer some of the cost of geometry calculation from load time to scrolling time.

## See Also

### Related Documentation

- [tableView:heightForRowAtIndexPath:](tableview%28__heightforrowat_%29.md): Asks the delegate for the height to use for a row in a specified location.

### Estimating heights for the table’s content

- [tableView:estimatedHeightForHeaderInSection:](tableview%28__estimatedheightforheaderinsection_%29.md): Asks the delegate for the estimated height of the header of a particular section.
- [tableView:estimatedHeightForFooterInSection:](tableview%28__estimatedheightforfooterinsection_%29.md): Asks the delegate for the estimated height of the footer of a particular section.
