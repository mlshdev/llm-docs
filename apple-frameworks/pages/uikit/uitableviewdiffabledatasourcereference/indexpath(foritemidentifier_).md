> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdiffabledatasourcereference/indexpath(foritemidentifier:)](https://developer.apple.com/documentation/uikit/uitableviewdiffabledatasourcereference/indexpath(foritemidentifier:))

# indexPath(forItemIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Returns an index path for the item with the specified identifier in the table view.

## Declaration

```swift
func indexPath(forItemIdentifier identifier: Any) -> IndexPath?
```

## Parameters

- `identifier`: The identifier of the item in the table view.

<a id="return-value"></a>

## Return Value

The item’s index path, or `nil` if no item is found with the provided item identifier.

<a id="Discussion"></a>

## Discussion

This method is a constant time operation, O(1), which means you can look up an index path from its corresponding item identifier with no significant overhead.

## See Also

### Identifying items

- [itemIdentifier(for:)](itemidentifier%28for_%29.md): Returns an identifier for the item at the specified index path in the table view.

# indexPathForItemIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Returns an index path for the item with the specified identifier in the table view.

## Declaration

```objectivec
- (NSIndexPath *) indexPathForItemIdentifier:(ItemIdentifierType) identifier;
```

## Parameters

- `identifier`: The identifier of the item in the table view.

<a id="return-value"></a>

## Return Value

The item’s index path, or `nil` if no item is found with the provided item identifier.

<a id="Discussion"></a>

## Discussion

This method is a constant time operation, O(1), which means you can look up an index path from its corresponding item identifier with no significant overhead.

## See Also

### Identifying items

- [itemIdentifierForIndexPath:](itemidentifier%28for_%29.md): Returns an identifier for the item at the specified index path in the table view.
