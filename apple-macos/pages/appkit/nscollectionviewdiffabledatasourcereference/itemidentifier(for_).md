> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdiffabledatasourcereference/itemidentifier(for:)](https://developer.apple.com/documentation/appkit/nscollectionviewdiffabledatasourcereference/itemidentifier(for:))

# itemIdentifier(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

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

### Identifying Items

- [indexPath(forItemIdentifier:)](indexpath%28foritemidentifier_%29.md): Returns an index path for the item with the specified identifier in the collection view.

# itemIdentifierForIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

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

### Identifying Items

- [indexPathForItemIdentifier:](indexpath%28foritemidentifier_%29.md): Returns an index path for the item with the specified identifier in the collection view.
