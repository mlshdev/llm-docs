> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/dequeuereusablecell(withidentifier:for:)](https://developer.apple.com/documentation/uikit/uitableview/dequeuereusablecell(withidentifier:for:))

# dequeueReusableCell(withIdentifier:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a reusable table-view cell object for the specified reuse identifier and adds it to the table.

## Declaration

```swift
func dequeueReusableCell(withIdentifier identifier: String, for indexPath: IndexPath) -> UITableViewCell
```

## Parameters

- `identifier`: A string identifying the cell object to be reused. This parameter must not be `nil`.
- `indexPath`: The index path specifying the location of the cell. Always specify the index path provided to you by your data source object. This method uses the index path to perform additional configuration based on the cell’s position in the table view.

<a id="return-value"></a>

## Return Value

A [UITableViewCell](../uitableviewcell.md) object with the associated reuse identifier. This method always returns a valid cell.

## Mentioned In

- [Configuring the cells for your table](../configuring-the-cells-for-your-table.md)
- [Filling a table with data](../filling-a-table-with-data.md)

<a id="Discussion"></a>

## Discussion

Call this method only from the [tableView(\_:cellForRowAt:)](../uitableviewdatasource/tableview%28__cellforrowat_%29.md) method of your table view data source object. This method returns an existing cell of the specified type, if one is available, or it creates and returns a new cell using the class or storyboard you provided earlier. Don’t call this method outside of your data source’s [tableView(\_:cellForRowAt:)](../uitableviewdatasource/tableview%28__cellforrowat_%29.md) method. If you need to create cells at other times, call [dequeueReusableCell(withIdentifier:)](dequeuereusablecell%28withidentifier_%29.md) instead.

> **Important**

>  You must specify a cell with a matching identifier in your storyboard file. You may also register a class or nib file using the [register(\_:forCellReuseIdentifier:)](register%28__forcellreuseidentifier_%29-5q6bo.md) or [register(\_:forCellReuseIdentifier:)](register%28__forcellreuseidentifier_%29-3l3ct.md) method, but must do so before calling this method.

When creating new cells from your storyboard or nib file, this method loads the cell object and initializes it using its [init(coder:)](init%28coder_%29.md) method. When creating cells from a registered class, this method creates the cell and initializes it by calling its [init(style:reuseIdentifier:)](../uitableviewcell/init%28style_reuseidentifier_%29.md) method. For nib-based cells, this method loads the cell object from the provided nib file. If an existing cell was available for reuse, this method calls the cell’s [prepareForReuse()](../uitableviewcell/prepareforreuse%28%29.md) method instead.

## See Also

### Recycling table view cells

- [register(\_:forCellReuseIdentifier:)](register%28__forcellreuseidentifier_%29-5q6bo.md): Deprecated. Registers a nib object that contains a cell with the table view under a specified identifier.
- [register(\_:forCellReuseIdentifier:)](register%28__forcellreuseidentifier_%29-3l3ct.md): Registers a class to use in creating new table cells.
- [dequeueReusableCell(withIdentifier:)](dequeuereusablecell%28withidentifier_%29.md): Returns a reusable table-view cell object after locating it by its identifier.

# dequeueReusableCellWithIdentifier:forIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a reusable table-view cell object for the specified reuse identifier and adds it to the table.

## Declaration

```objectivec
- (UITableViewCell *) dequeueReusableCellWithIdentifier:(NSString *) identifier forIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `identifier`: A string identifying the cell object to be reused. This parameter must not be `nil`.
- `indexPath`: The index path specifying the location of the cell. Always specify the index path provided to you by your data source object. This method uses the index path to perform additional configuration based on the cell’s position in the table view.

<a id="return-value"></a>

## Return Value

A [UITableViewCell](../uitableviewcell.md) object with the associated reuse identifier. This method always returns a valid cell.

## Mentioned In

- [Configuring the cells for your table](../configuring-the-cells-for-your-table.md)
- [Filling a table with data](../filling-a-table-with-data.md)

<a id="Discussion"></a>

## Discussion

Call this method only from the [tableView:cellForRowAtIndexPath:](../uitableviewdatasource/tableview%28__cellforrowat_%29.md) method of your table view data source object. This method returns an existing cell of the specified type, if one is available, or it creates and returns a new cell using the class or storyboard you provided earlier. Don’t call this method outside of your data source’s [tableView:cellForRowAtIndexPath:](../uitableviewdatasource/tableview%28__cellforrowat_%29.md) method. If you need to create cells at other times, call [dequeueReusableCellWithIdentifier:](dequeuereusablecell%28withidentifier_%29.md) instead.

> **Important**

>  You must specify a cell with a matching identifier in your storyboard file. You may also register a class or nib file using the [registerNib:forCellReuseIdentifier:](register%28__forcellreuseidentifier_%29-5q6bo.md) or [registerClass:forCellReuseIdentifier:](register%28__forcellreuseidentifier_%29-3l3ct.md) method, but must do so before calling this method.

When creating new cells from your storyboard or nib file, this method loads the cell object and initializes it using its [initWithCoder:](init%28coder_%29.md) method. When creating cells from a registered class, this method creates the cell and initializes it by calling its [initWithStyle:reuseIdentifier:](../uitableviewcell/init%28style_reuseidentifier_%29.md) method. For nib-based cells, this method loads the cell object from the provided nib file. If an existing cell was available for reuse, this method calls the cell’s [prepareForReuse](../uitableviewcell/prepareforreuse%28%29.md) method instead.

## See Also

### Recycling table view cells

- [registerNib:forCellReuseIdentifier:](register%28__forcellreuseidentifier_%29-5q6bo.md): Deprecated. Registers a nib object that contains a cell with the table view under a specified identifier.
- [registerClass:forCellReuseIdentifier:](register%28__forcellreuseidentifier_%29-3l3ct.md): Registers a class to use in creating new table cells.
- [dequeueReusableCellWithIdentifier:](dequeuereusablecell%28withidentifier_%29.md): Returns a reusable table-view cell object after locating it by its identifier.
