> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/dequeuereusablecell(withidentifier:)](https://developer.apple.com/documentation/uikit/uitableview/dequeuereusablecell(withidentifier:))

# dequeueReusableCell(withIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a reusable table-view cell object after locating it by its identifier.

## Declaration

```swift
func dequeueReusableCell(withIdentifier identifier: String) -> UITableViewCell?
```

## Parameters

- `identifier`: A string identifying the cell object to be reused. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

A [UITableViewCell](../uitableviewcell.md) object with the associated `identifier`, or `nil` if no such object exists in the reusable-cell queue.

<a id="Discussion"></a>

## Discussion

For performance reasons, a table view’s data source should generally reuse [UITableViewCell](../uitableviewcell.md) objects when it assigns cells to rows in its [tableView(\_:cellForRowAt:)](../uitableviewdatasource/tableview%28__cellforrowat_%29.md) method. A table view maintains a queue or list of [UITableViewCell](../uitableviewcell.md) objects that the data source has marked for reuse. Call this method from your data source object when asked to provide a new cell for the table view. This method dequeues an existing cell if one is available or creates a new one using the class or nib file you previously registered. If no cell is available for reuse and you didn’t register a class or nib file, this method returns `nil`.

If you registered a class for the specified `identifier` and a new cell must be created, this method initializes the cell by calling its [init(style:reuseIdentifier:)](../uitableviewcell/init%28style_reuseidentifier_%29.md) method. For nib-based cells, this method loads the cell object from the provided nib file. If an existing cell was available for reuse, this method calls the cell’s [prepareForReuse()](../uitableviewcell/prepareforreuse%28%29.md) method instead.

## See Also

### Recycling table view cells

- [register(\_:forCellReuseIdentifier:)](register%28__forcellreuseidentifier_%29-5q6bo.md): Deprecated. Registers a nib object that contains a cell with the table view under a specified identifier.
- [register(\_:forCellReuseIdentifier:)](register%28__forcellreuseidentifier_%29-3l3ct.md): Registers a class to use in creating new table cells.
- [dequeueReusableCell(withIdentifier:for:)](dequeuereusablecell%28withidentifier_for_%29.md): Returns a reusable table-view cell object for the specified reuse identifier and adds it to the table.

# dequeueReusableCellWithIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a reusable table-view cell object after locating it by its identifier.

## Declaration

```objectivec
- (UITableViewCell *) dequeueReusableCellWithIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: A string identifying the cell object to be reused. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

A [UITableViewCell](../uitableviewcell.md) object with the associated `identifier`, or `nil` if no such object exists in the reusable-cell queue.

<a id="Discussion"></a>

## Discussion

For performance reasons, a table view’s data source should generally reuse [UITableViewCell](../uitableviewcell.md) objects when it assigns cells to rows in its [tableView:cellForRowAtIndexPath:](../uitableviewdatasource/tableview%28__cellforrowat_%29.md) method. A table view maintains a queue or list of [UITableViewCell](../uitableviewcell.md) objects that the data source has marked for reuse. Call this method from your data source object when asked to provide a new cell for the table view. This method dequeues an existing cell if one is available or creates a new one using the class or nib file you previously registered. If no cell is available for reuse and you didn’t register a class or nib file, this method returns `nil`.

If you registered a class for the specified `identifier` and a new cell must be created, this method initializes the cell by calling its [initWithStyle:reuseIdentifier:](../uitableviewcell/init%28style_reuseidentifier_%29.md) method. For nib-based cells, this method loads the cell object from the provided nib file. If an existing cell was available for reuse, this method calls the cell’s [prepareForReuse](../uitableviewcell/prepareforreuse%28%29.md) method instead.

## See Also

### Recycling table view cells

- [registerNib:forCellReuseIdentifier:](register%28__forcellreuseidentifier_%29-5q6bo.md): Deprecated. Registers a nib object that contains a cell with the table view under a specified identifier.
- [registerClass:forCellReuseIdentifier:](register%28__forcellreuseidentifier_%29-3l3ct.md): Registers a class to use in creating new table cells.
- [dequeueReusableCellWithIdentifier:forIndexPath:](dequeuereusablecell%28withidentifier_for_%29.md): Returns a reusable table-view cell object for the specified reuse identifier and adds it to the table.
