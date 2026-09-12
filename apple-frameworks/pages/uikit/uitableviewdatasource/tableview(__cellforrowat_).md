> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdatasource/tableview(_:cellforrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdatasource/tableview(_:cellforrowat:))

# tableView(\_:cellForRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the data source for a cell to insert in a particular location of the table view.

## Declaration

```swift
func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell
```

## Parameters

- `tableView`: A table-view object requesting the cell.
- `indexPath`: An index path locating a row in `tableView`.

<a id="return-value"></a>

## Return Value

An object inheriting from [UITableViewCell](../uitableviewcell.md) that the table view can use for the specified row. UIKit raises an assertion if you return `nil`.

## Mentioned In

- [Configuring the cells for your table](../configuring-the-cells-for-your-table.md)
- [Filling a table with data](../filling-a-table-with-data.md)

<a id="Discussion"></a>

## Discussion

In your implementation, create and configure an appropriate cell for the given index path. Create your cell using the table view’s [dequeueReusableCell(withIdentifier:for:)](../uitableview/dequeuereusablecell%28withidentifier_for_%29.md) method, which recycles or creates the cell for you. After creating the cell, update the properties of the cell with appropriate data values.

Never call this method yourself. If you want to retrieve cells from your table, call the table view’s [cellForRow(at:)](../uitableview/cellforrow%28at_%29.md) method instead.

## See Also

### Providing cells, headers, and footers

- [tableView(\_:titleForHeaderInSection:)](tableview%28__titleforheaderinsection_%29.md): Asks the data source for the title of the header of the specified section of the table view.
- [tableView(\_:titleForFooterInSection:)](tableview%28__titleforfooterinsection_%29.md): Asks the data source for the title of the footer of the specified section of the table view.

# tableView:cellForRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the data source for a cell to insert in a particular location of the table view.

## Declaration

```objectivec
- (UITableViewCell *) tableView:(UITableView *) tableView cellForRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: A table-view object requesting the cell.
- `indexPath`: An index path locating a row in `tableView`.

<a id="return-value"></a>

## Return Value

An object inheriting from [UITableViewCell](../uitableviewcell.md) that the table view can use for the specified row. UIKit raises an assertion if you return `nil`.

## Mentioned In

- [Configuring the cells for your table](../configuring-the-cells-for-your-table.md)
- [Filling a table with data](../filling-a-table-with-data.md)

<a id="Discussion"></a>

## Discussion

In your implementation, create and configure an appropriate cell for the given index path. Create your cell using the table view’s [dequeueReusableCellWithIdentifier:forIndexPath:](../uitableview/dequeuereusablecell%28withidentifier_for_%29.md) method, which recycles or creates the cell for you. After creating the cell, update the properties of the cell with appropriate data values.

Never call this method yourself. If you want to retrieve cells from your table, call the table view’s [cellForRowAtIndexPath:](../uitableview/cellforrow%28at_%29.md) method instead.

## See Also

### Providing cells, headers, and footers

- [tableView:titleForHeaderInSection:](tableview%28__titleforheaderinsection_%29.md): Asks the data source for the title of the header of the specified section of the table view.
- [tableView:titleForFooterInSection:](tableview%28__titleforfooterinsection_%29.md): Asks the data source for the title of the footer of the specified section of the table view.
