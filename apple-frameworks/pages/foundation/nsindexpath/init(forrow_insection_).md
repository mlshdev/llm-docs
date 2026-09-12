> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexpath/init(forrow:insection:)](https://developer.apple.com/documentation/foundation/nsindexpath/init(forrow:insection:))

# init(forRow:inSection:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+

Initializes an index path with the indexes of a specific row and section in a table view.

## Declaration

```swift
convenience init(forRow row: Int, inSection section: Int)
```

```swift
convenience init(row: Int, section: Int)
```

## Parameters

- `row`: An index number identifying a row in a [UITableView](../../uikit/uitableview.md) object in a section identified by `section`.
- `section`: An index number identifying a section in a [UITableView](../../uikit/uitableview.md) object.

<a id="return-value"></a>

## Return Value

An [NSIndexPath](../nsindexpath.md) object.

## See Also

### Using Special Node Names

- [init(forItem:inSection:)](init%28foritem_insection_%29.md): Initializes an index path with the indexes of a specific item and section in a collection view.
- [section](section.md): An index number identifying a section in a table view or collection view.
- [row](row.md): An index number identifying a row in a section of a table view.
- [item](item.md): An index number identifying an item in a section of a collection view.

# indexPathForRow:inSection: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+

Initializes an index path with the indexes of a specific row and section in a table view.

## Declaration

```objectivec
+ (instancetype) indexPathForRow:(NSInteger) row inSection:(NSInteger) section;
```

## Parameters

- `row`: An index number identifying a row in a [UITableView](../../uikit/uitableview.md) object in a section identified by `section`.
- `section`: An index number identifying a section in a [UITableView](../../uikit/uitableview.md) object.

<a id="return-value"></a>

## Return Value

An [NSIndexPath](../nsindexpath.md) object.

## See Also

### Using Special Node Names

- [indexPathForItem:inSection:](init%28foritem_insection_%29.md): Initializes an index path with the indexes of a specific item and section in a collection view.
- [section](section.md): An index number identifying a section in a table view or collection view.
- [row](row.md): An index number identifying a row in a section of a table view.
- [item](item.md): An index number identifying an item in a section of a collection view.
