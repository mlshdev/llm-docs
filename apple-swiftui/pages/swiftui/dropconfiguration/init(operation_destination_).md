> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/dropconfiguration/init(operation:destination:)

# init(operation:destination:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a drop configuration with the provided operation and reorder destination.

## Declaration

```swift
init<ItemID, CollectionID>(operation: DropOperation, destination: ReorderDifference<ItemID, CollectionID>.Destination) where ItemID : Hashable, ItemID : Sendable, CollectionID : Hashable, CollectionID : Sendable
```

<a id="discussion"></a>

## Discussion

Use this initializer when you want to decide where the destination value of the current reordering session should be. The value that you pass to this initializer will be the value used for this update.

If you don’t want to update the destination value, or your [dropDestination(for:isEnabled:action:)](../view/dropdestination%28for_isenabled_action_%29.md) is not configured with a `View/reorderContainer(for:in:move:)`, use the initializer variant that takes only a `DropOperation`.

- operation: The drop operation that the drop destination chooses to perform on the drop.
- destination: The destination value for the reordering operation.
