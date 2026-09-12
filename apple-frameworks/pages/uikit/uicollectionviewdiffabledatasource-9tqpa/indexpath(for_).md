> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/indexpath(for:)](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/indexpath(for:))

# indexPath(for:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS

Returns an index path for the item with the specified identifier in the collection view.

## Declaration

```swift
@MainActor @preconcurrency func indexPath(for itemIdentifier: ItemIdentifierType) -> IndexPath?
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

### Identifying items

- [itemIdentifier(for:)](itemidentifier%28for_%29.md): Returns an identifier for the item at the specified index path in the collection view.
