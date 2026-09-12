> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/register(_:forcellreuseidentifier:)-3l3ct](https://developer.apple.com/documentation/uikit/uitableview/register(_:forcellreuseidentifier:)-3l3ct)

# register(\_:forCellReuseIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Registers a class to use in creating new table cells.

## Declaration

```swift
func register(_ cellClass: AnyClass?, forCellReuseIdentifier identifier: String)
```

## Parameters

- `cellClass`: The class of a cell that you want to use in the table (must be a [UITableViewCell](../uitableviewcell.md) subclass).
- `identifier`: The reuse identifier for the cell. This parameter must not be `nil` and must not be an empty string.

<a id="Discussion"></a>

## Discussion

Prior to dequeueing any cells, call this method or the [register(\_:forCellReuseIdentifier:)](register%28__forcellreuseidentifier_%29-5q6bo.md) method to tell the table view how to create new cells. If a cell of the specified type isn’t currently in a reuse queue, the table view uses the provided information to create a new cell object automatically.

If you previously registered a class or nib file with the same reuse identifier, the class you specify in the `cellClass` parameter replaces the old entry. You may specify `nil` for `cellClass` if you want to unregister the class from the specified reuse identifier.

## See Also

### Recycling table view cells

- [register(\_:forCellReuseIdentifier:)](register%28__forcellreuseidentifier_%29-5q6bo.md): Deprecated. Registers a nib object that contains a cell with the table view under a specified identifier.
- [dequeueReusableCell(withIdentifier:for:)](dequeuereusablecell%28withidentifier_for_%29.md): Returns a reusable table-view cell object for the specified reuse identifier and adds it to the table.
- [dequeueReusableCell(withIdentifier:)](dequeuereusablecell%28withidentifier_%29.md): Returns a reusable table-view cell object after locating it by its identifier.

# registerClass:forCellReuseIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Registers a class to use in creating new table cells.

## Declaration

```objectivec
- (void) registerClass:(Class) cellClass forCellReuseIdentifier:(NSString *) identifier;
```

## Parameters

- `cellClass`: The class of a cell that you want to use in the table (must be a [UITableViewCell](../uitableviewcell.md) subclass).
- `identifier`: The reuse identifier for the cell. This parameter must not be `nil` and must not be an empty string.

<a id="Discussion"></a>

## Discussion

Prior to dequeueing any cells, call this method or the [registerNib:forCellReuseIdentifier:](register%28__forcellreuseidentifier_%29-5q6bo.md) method to tell the table view how to create new cells. If a cell of the specified type isn’t currently in a reuse queue, the table view uses the provided information to create a new cell object automatically.

If you previously registered a class or nib file with the same reuse identifier, the class you specify in the `cellClass` parameter replaces the old entry. You may specify `nil` for `cellClass` if you want to unregister the class from the specified reuse identifier.

## See Also

### Recycling table view cells

- [registerNib:forCellReuseIdentifier:](register%28__forcellreuseidentifier_%29-5q6bo.md): Deprecated. Registers a nib object that contains a cell with the table view under a specified identifier.
- [dequeueReusableCellWithIdentifier:forIndexPath:](dequeuereusablecell%28withidentifier_for_%29.md): Returns a reusable table-view cell object for the specified reuse identifier and adds it to the table.
- [dequeueReusableCellWithIdentifier:](dequeuereusablecell%28withidentifier_%29.md): Returns a reusable table-view cell object after locating it by its identifier.
