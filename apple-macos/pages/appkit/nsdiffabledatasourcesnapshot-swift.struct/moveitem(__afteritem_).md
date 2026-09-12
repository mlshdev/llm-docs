> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct/moveitem(_:afteritem:)](https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct/moveitem(_:afteritem:))

# moveItem(\_:afterItem:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15.1+

Moves the item from its current position in the snapshot to the position immediately after the specified item.

## Declaration

```swift
mutating func moveItem(_ identifier: ItemIdentifierType, afterItem toIdentifier: ItemIdentifierType)
```

## Parameters

- `identifier`: The identifier of the item to move in the snapshot.
- `toIdentifier`: The identifier of the item after which to move the specified item.

## See Also

### Reordering Items and Sections

- [moveItem(\_:beforeItem:)](moveitem%28__beforeitem_%29.md): Moves the item from its current position in the snapshot to the position immediately before the specified item.
- [moveSection(\_:afterSection:)](movesection%28__aftersection_%29.md): Moves the section from its current position in the snapshot to the position immediately after the specified section.
- [moveSection(\_:beforeSection:)](movesection%28__beforesection_%29.md): Moves the section from its current position in the snapshot to the position immediately before the specified section.
