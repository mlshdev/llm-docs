> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasourcereference/itemidentifier(for:)](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasourcereference/itemidentifier(for:))

# itemIdentifier(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Returns an identifier for the item at the specified index path in the collection view.

## Declaration

```swift
func itemIdentifier(for indexPath: IndexPath) -> Any?
```

## Parameters

- `indexPath`: The index path of the item in the collection view.

<a id="return-value"></a>

## Return Value

The item’s identifier, or `nil` if no item is found at the provided index path.

<a id="Discussion"></a>

## Discussion

This method is a constant time operation, O(1), which means you can look up an item identifier from its corresponding index path with no significant overhead.

## See Also

### Identifying items

- [indexPath(forItemIdentifier:)](indexpath%28foritemidentifier_%29.md): Returns an index path for the item with the specified identifier in the collection view.

# itemIdentifierForIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Returns an identifier for the item at the specified index path in the collection view.

## Declaration

```objectivec
- (ItemIdentifierType) itemIdentifierForIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `indexPath`: The index path of the item in the collection view.

<a id="return-value"></a>

## Return Value

The item’s identifier, or `nil` if no item is found at the provided index path.

<a id="Discussion"></a>

## Discussion

This method is a constant time operation, O(1), which means you can look up an item identifier from its corresponding index path with no significant overhead.

## See Also

### Identifying items

- [indexPathForItemIdentifier:](indexpath%28foritemidentifier_%29.md): Returns an index path for the item with the specified identifier in the collection view.
