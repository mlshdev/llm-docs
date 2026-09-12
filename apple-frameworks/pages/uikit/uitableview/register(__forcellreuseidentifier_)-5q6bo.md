> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/register(_:forcellreuseidentifier:)-5q6bo](https://developer.apple.com/documentation/uikit/uitableview/register(_:forcellreuseidentifier:)-5q6bo)

# register(\_:forCellReuseIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Registers a nib object that contains a cell with the table view under a specified identifier.

## Declaration

```swift
func register(_ nib: UINib?, forCellReuseIdentifier identifier: String)
```

## Parameters

- `nib`: A nib object that specifies the nib file to use to create the cell.
- `identifier`: The reuse identifier for the cell. This parameter must not be `nil` and must not be an empty string.

<a id="Discussion"></a>

## Discussion

Before dequeueing any cells, call this method or the [register(\_:forCellReuseIdentifier:)](register%28__forcellreuseidentifier_%29-3l3ct.md) method to tell the table view how to create new cells. If a cell of the specified type isn’t currently in a reuse queue, the table view uses the provided information to create a new cell object automatically.

If you previously registered a class or nib file with the same reuse identifier, the nib you specify in the `nib` parameter replaces the old entry. You may specify `nil` for `nib` if you want to unregister the nib from the specified reuse identifier.

## See Also

### Related Documentation

- [tableView(\_:cellForRowAt:)](../uitableviewdatasource/tableview%28__cellforrowat_%29.md): Asks the data source for a cell to insert in a particular location of the table view.

### Recycling table view cells

- [register(\_:forCellReuseIdentifier:)](register%28__forcellreuseidentifier_%29-3l3ct.md): Registers a class to use in creating new table cells.
- [dequeueReusableCell(withIdentifier:for:)](dequeuereusablecell%28withidentifier_for_%29.md): Returns a reusable table-view cell object for the specified reuse identifier and adds it to the table.
- [dequeueReusableCell(withIdentifier:)](dequeuereusablecell%28withidentifier_%29.md): Returns a reusable table-view cell object after locating it by its identifier.

# registerNib:forCellReuseIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Registers a nib object that contains a cell with the table view under a specified identifier.

## Declaration

```objectivec
- (void) registerNib:(UINib *) nib forCellReuseIdentifier:(NSString *) identifier;
```

## Parameters

- `nib`: A nib object that specifies the nib file to use to create the cell.
- `identifier`: The reuse identifier for the cell. This parameter must not be `nil` and must not be an empty string.

<a id="Discussion"></a>

## Discussion

Before dequeueing any cells, call this method or the [registerClass:forCellReuseIdentifier:](register%28__forcellreuseidentifier_%29-3l3ct.md) method to tell the table view how to create new cells. If a cell of the specified type isn’t currently in a reuse queue, the table view uses the provided information to create a new cell object automatically.

If you previously registered a class or nib file with the same reuse identifier, the nib you specify in the `nib` parameter replaces the old entry. You may specify `nil` for `nib` if you want to unregister the nib from the specified reuse identifier.

## See Also

### Related Documentation

- [tableView:cellForRowAtIndexPath:](../uitableviewdatasource/tableview%28__cellforrowat_%29.md): Asks the data source for a cell to insert in a particular location of the table view.

### Recycling table view cells

- [registerClass:forCellReuseIdentifier:](register%28__forcellreuseidentifier_%29-3l3ct.md): Registers a class to use in creating new table cells.
- [dequeueReusableCellWithIdentifier:forIndexPath:](dequeuereusablecell%28withidentifier_for_%29.md): Returns a reusable table-view cell object for the specified reuse identifier and adds it to the table.
- [dequeueReusableCellWithIdentifier:](dequeuereusablecell%28withidentifier_%29.md): Returns a reusable table-view cell object after locating it by its identifier.
