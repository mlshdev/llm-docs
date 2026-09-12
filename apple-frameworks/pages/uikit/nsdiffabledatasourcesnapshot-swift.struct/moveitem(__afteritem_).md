> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesnapshot-swift.struct/moveitem(_:afteritem:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshot-swift.struct/moveitem(_:afteritem:))

# moveItem(\_:afterItem:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS

Moves the item from its current position in the snapshot to the position immediately after the specified item.

## Declaration

```swift
mutating func moveItem(_ identifier: ItemIdentifierType, afterItem toIdentifier: ItemIdentifierType)
```

## Parameters

- `identifier`: The identifier of the item to move in the snapshot.
- `toIdentifier`: The identifier of the item after which to move the specified item.

## See Also

### Reordering items and sections

- [moveItem(\_:beforeItem:)](moveitem%28__beforeitem_%29.md): Moves the item from its current position in the snapshot to the position immediately before the specified item.
- [moveSection(\_:afterSection:)](movesection%28__aftersection_%29.md): Moves the section from its current position in the snapshot to the position immediately after the specified section.
- [moveSection(\_:beforeSection:)](movesection%28__beforesection_%29.md): Moves the section from its current position in the snapshot to the position immediately before the specified section.
