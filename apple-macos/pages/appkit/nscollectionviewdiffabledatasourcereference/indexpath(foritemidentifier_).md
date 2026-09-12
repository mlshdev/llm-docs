> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdiffabledatasourcereference/indexpath(foritemidentifier:)](https://developer.apple.com/documentation/appkit/nscollectionviewdiffabledatasourcereference/indexpath(foritemidentifier:))

# indexPath(forItemIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Returns an index path for the item with the specified identifier in the collection view.

## Declaration

```swift
func indexPath(forItemIdentifier identifier: Any) -> IndexPath?
```

## Parameters

- `identifier`: The identifier of the item in the collection view.

<a id="return-value"></a>

## Return Value

The item’s index path, or `nil` if no item is found with the provided item identifier.

<a id="Discussion"></a>

## Discussion

This method is a constant time operation, O(1), which means you can look up an index path from its corresponding item identifier with no significant overhead.

## See Also

### Identifying Items

- [itemIdentifier(for:)](itemidentifier%28for_%29.md): Returns an identifier for the item at the specified index path in the collection view.

# indexPathForItemIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Returns an index path for the item with the specified identifier in the collection view.

## Declaration

```objectivec
- (NSIndexPath *) indexPathForItemIdentifier:(ItemIdentifierType) identifier;
```

## Parameters

- `identifier`: The identifier of the item in the collection view.

<a id="return-value"></a>

## Return Value

The item’s index path, or `nil` if no item is found with the provided item identifier.

<a id="Discussion"></a>

## Discussion

This method is a constant time operation, O(1), which means you can look up an index path from its corresponding item identifier with no significant overhead.

## See Also

### Identifying Items

- [itemIdentifierForIndexPath:](itemidentifier%28for_%29.md): Returns an identifier for the item at the specified index path in the collection view.
