> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct/moveitem(_:beforeitem:)](https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct/moveitem(_:beforeitem:))

# moveItem(\_:beforeItem:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15.1+

Moves the item from its current position in the snapshot to the position immediately before the specified item.

## Declaration

```swift
mutating func moveItem(_ identifier: ItemIdentifierType, beforeItem toIdentifier: ItemIdentifierType)
```

## Parameters

- `identifier`: The identifier of the item to move in the snapshot.
- `toIdentifier`: The identifier of the item before which to move the specified item.

## See Also

### Reordering Items and Sections

- [moveItem(\_:afterItem:)](moveitem%28__afteritem_%29.md): Moves the item from its current position in the snapshot to the position immediately after the specified item.
- [moveSection(\_:afterSection:)](movesection%28__aftersection_%29.md): Moves the section from its current position in the snapshot to the position immediately after the specified section.
- [moveSection(\_:beforeSection:)](movesection%28__beforesection_%29.md): Moves the section from its current position in the snapshot to the position immediately before the specified section.
