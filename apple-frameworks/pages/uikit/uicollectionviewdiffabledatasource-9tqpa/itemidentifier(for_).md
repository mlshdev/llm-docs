> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/itemidentifier(for:)](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/itemidentifier(for:))

# itemIdentifier(for:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS

Returns an identifier for the item at the specified index path in the collection view.

## Declaration

```swift
@MainActor @preconcurrency func itemIdentifier(for indexPath: IndexPath) -> ItemIdentifierType?
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

- [indexPath(for:)](indexpath%28for_%29.md): Returns an index path for the item with the specified identifier in the collection view.
