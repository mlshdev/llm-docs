> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdiffabledatasource-axww/indexpath(for:)](https://developer.apple.com/documentation/appkit/nscollectionviewdiffabledatasource-axww/indexpath(for:))

# indexPath(for:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15.1+

Returns an index path for the item with the specified identifier in the collection view.

## Declaration

```swift
func indexPath(for itemIdentifier: ItemIdentifierType) -> IndexPath?
```

## Parameters

- `itemIdentifier`: The identifier of the item in the collection view.

<a id="return-value"></a>

## Return Value

The item’s index path, or `nil` if no item is found with the provided item identifier.

<a id="Discussion"></a>

## Discussion

This method is a constant time operation, O(1), which means you can look up an index path from its corresponding item identifier with no significant overhead.

## See Also

### Identifying Items

- [itemIdentifier(for:)](itemidentifier%28for_%29.md): Returns an identifier for the item at the specified index path in the collection view.
