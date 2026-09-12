> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexpath/init(foritem:insection:)](https://developer.apple.com/documentation/foundation/nsindexpath/init(foritem:insection:))

# init(forItem:inSection:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes an index path with the indexes of a specific item and section in a collection view.

## Declaration

```swift
convenience init(forItem item: Int, inSection section: Int)
```

```swift
convenience init(item: Int, section: Int)
```

```swift
init(forItem item: Int, inSection section: Int)
```

## Parameters

- `item`: An index number identifying an item in a [UICollectionView](../../uikit/uicollectionview.md) object in a section identified by the `section` parameter.
- `section`: An index number identifying a section in a [UICollectionView](../../uikit/uicollectionview.md) object.

<a id="return-value"></a>

## Return Value

An [NSIndexPath](../nsindexpath.md) object.

## See Also

### Using Special Node Names

- [init(forRow:inSection:)](init%28forrow_insection_%29.md): Initializes an index path with the indexes of a specific row and section in a table view.
- [section](section.md): An index number identifying a section in a table view or collection view.
- [row](row.md): An index number identifying a row in a section of a table view.
- [item](item.md): An index number identifying an item in a section of a collection view.

# indexPathForItem:inSection: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes an index path with the indexes of a specific item and section in a collection view.

## Declaration

```objectivec
+ (instancetype) indexPathForItem:(NSInteger) item inSection:(NSInteger) section;
```

```objectivec
+ (NSIndexPath *) indexPathForItem:(NSInteger) item inSection:(NSInteger) section;
```

## Parameters

- `item`: An index number identifying an item in a [UICollectionView](../../uikit/uicollectionview.md) object in a section identified by the `section` parameter.
- `section`: An index number identifying a section in a [UICollectionView](../../uikit/uicollectionview.md) object.

<a id="return-value"></a>

## Return Value

An [NSIndexPath](../nsindexpath.md) object.

## See Also

### Using Special Node Names

- [indexPathForRow:inSection:](init%28forrow_insection_%29.md): Initializes an index path with the indexes of a specific row and section in a table view.
- [section](section.md): An index number identifying a section in a table view or collection view.
- [row](row.md): An index number identifying a row in a section of a table view.
- [item](item.md): An index number identifying an item in a section of a collection view.
