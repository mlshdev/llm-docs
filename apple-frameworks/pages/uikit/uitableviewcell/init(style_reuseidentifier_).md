> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/init(style:reuseidentifier:)](https://developer.apple.com/documentation/uikit/uitableviewcell/init(style:reuseidentifier:))

# init(style:reuseIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a table cell with a style and a reuse identifier and returns it to the caller.

## Declaration

```swift
init(style: UITableViewCell.CellStyle, reuseIdentifier: String?)
```

## Parameters

- `style`: A constant indicating a cell style. See [UITableViewCell.CellStyle](cellstyle.md) for descriptions of these constants.
- `reuseIdentifier`: A string used to identify the cell object if it is to be reused for drawing multiple rows of a table view. Pass `nil` if the cell object is not to be reused. You should use the same reuse identifier for all cells of the same form.

<a id="return-value"></a>

## Return Value

An initialized [UITableViewCell](../uitableviewcell.md) object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the class. The reuse identifier is associated with those cells (rows) of a table view that have the same general configuration, minus cell content. In its implementation of [tableView(\_:cellForRowAt:)](../uitableviewdatasource/tableview%28__cellforrowat_%29.md), the table view’s data source calls the `UITableView` method [dequeueReusableCell(withIdentifier:)](../uitableview/dequeuereusablecell%28withidentifier_%29.md), passing in a reuse identifier, to obtain the cell object to use as the basis for the current row.

If you want a table cell that has a configuration different that those defined by `UITableViewCell` for `style`, you must create your own custom cell. If you want to set the row height of cells on an individual basis, implement the delegate method [tableView(\_:heightForRowAt:)](../uitableviewdelegate/tableview%28__heightforrowat_%29.md).

## See Also

### Creating a table view cell

- [UITableViewCell.CellStyle](cellstyle.md): An enumeration for the various styles of cells.
- [init(coder:)](init%28coder_%29.md): Creates a table view from data in an unarchiver.

# initWithStyle:reuseIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a table cell with a style and a reuse identifier and returns it to the caller.

## Declaration

```objectivec
- (instancetype) initWithStyle:(UITableViewCellStyle) style reuseIdentifier:(NSString *) reuseIdentifier;
```

## Parameters

- `style`: A constant indicating a cell style. See [UITableViewCellStyle](cellstyle.md) for descriptions of these constants.
- `reuseIdentifier`: A string used to identify the cell object if it is to be reused for drawing multiple rows of a table view. Pass `nil` if the cell object is not to be reused. You should use the same reuse identifier for all cells of the same form.

<a id="return-value"></a>

## Return Value

An initialized [UITableViewCell](../uitableviewcell.md) object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the class. The reuse identifier is associated with those cells (rows) of a table view that have the same general configuration, minus cell content. In its implementation of [tableView:cellForRowAtIndexPath:](../uitableviewdatasource/tableview%28__cellforrowat_%29.md), the table view’s data source calls the `UITableView` method [dequeueReusableCellWithIdentifier:](../uitableview/dequeuereusablecell%28withidentifier_%29.md), passing in a reuse identifier, to obtain the cell object to use as the basis for the current row.

If you want a table cell that has a configuration different that those defined by `UITableViewCell` for `style`, you must create your own custom cell. If you want to set the row height of cells on an individual basis, implement the delegate method [tableView:heightForRowAtIndexPath:](../uitableviewdelegate/tableview%28__heightforrowat_%29.md).

## See Also

### Creating a table view cell

- [UITableViewCellStyle](cellstyle.md): An enumeration for the various styles of cells.
- [initWithCoder:](init%28coder_%29.md): Creates a table view from data in an unarchiver.
