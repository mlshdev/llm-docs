> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:heightforrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:heightforrowat:))

# tableView(\_:heightForRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate for the height to use for a row in a specified location.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat
```

## Parameters

- `tableView`: The table view requesting this information.
- `indexPath`: An index path that locates a row in `tableView`.

<a id="return-value"></a>

## Return Value

A nonnegative floating-point value that specifies the height (in points) that `row` should be.

## Mentioned In

- [Configuring the cells for your table](../configuring-the-cells-for-your-table.md)

<a id="Discussion"></a>

## Discussion

Override this method when the rows of your table are not all the same height. If your rows are the same height, do not override this method; assign a value to the [rowHeight](../uitableview/rowheight.md) property of [UITableView](../uitableview.md) instead. The value returned by this method takes precedence over the value in the [rowHeight](../uitableview/rowheight.md) property.

Before it appears onscreen, the table view calls this method for the items in the visible portion of the table. As the user scrolls, the table view calls the method for items only when they move onscreen. It calls the method each time the item appears onscreen, regardless of whether it appeared onscreen previously.

## See Also

### Related Documentation

- [tableView(\_:estimatedHeightForRowAt:)](tableview%28__estimatedheightforrowat_%29.md): Asks the delegate for the estimated height of a row in a specified location.

### Providing header, footer, and row heights

- [tableView(\_:heightForHeaderInSection:)](tableview%28__heightforheaderinsection_%29.md): Asks the delegate for the height to use for the header of a particular section.
- [tableView(\_:heightForFooterInSection:)](tableview%28__heightforfooterinsection_%29.md): Asks the delegate for the height to use for the footer of a particular section.
- [automaticDimension](../uitableview/automaticdimension.md): A constant representing the default value for a given dimension.

# tableView:heightForRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate for the height to use for a row in a specified location.

## Declaration

```objectivec
- (CGFloat) tableView:(UITableView *) tableView heightForRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view requesting this information.
- `indexPath`: An index path that locates a row in `tableView`.

<a id="return-value"></a>

## Return Value

A nonnegative floating-point value that specifies the height (in points) that `row` should be.

## Mentioned In

- [Configuring the cells for your table](../configuring-the-cells-for-your-table.md)

<a id="Discussion"></a>

## Discussion

Override this method when the rows of your table are not all the same height. If your rows are the same height, do not override this method; assign a value to the [rowHeight](../uitableview/rowheight.md) property of [UITableView](../uitableview.md) instead. The value returned by this method takes precedence over the value in the [rowHeight](../uitableview/rowheight.md) property.

Before it appears onscreen, the table view calls this method for the items in the visible portion of the table. As the user scrolls, the table view calls the method for items only when they move onscreen. It calls the method each time the item appears onscreen, regardless of whether it appeared onscreen previously.

## See Also

### Related Documentation

- [tableView:estimatedHeightForRowAtIndexPath:](tableview%28__estimatedheightforrowat_%29.md): Asks the delegate for the estimated height of a row in a specified location.

### Providing header, footer, and row heights

- [tableView:heightForHeaderInSection:](tableview%28__heightforheaderinsection_%29.md): Asks the delegate for the height to use for the header of a particular section.
- [tableView:heightForFooterInSection:](tableview%28__heightforfooterinsection_%29.md): Asks the delegate for the height to use for the footer of a particular section.
- [UITableViewAutomaticDimension](../uitableview/automaticdimension.md): A constant representing the default value for a given dimension.
