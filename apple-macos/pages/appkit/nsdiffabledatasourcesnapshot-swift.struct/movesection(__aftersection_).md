> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct/movesection(_:aftersection:)

# moveSection(\_:afterSection:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15.1+

Moves the section from its current position in the snapshot to the position immediately after the specified section.

## Declaration

```swift
mutating func moveSection(_ identifier: SectionIdentifierType, afterSection toIdentifier: SectionIdentifierType)
```

## Parameters

- `identifier`: The identifier of the section to move in the snapshot.
- `toIdentifier`: The identifier of the section after which to move the specified section.

## See Also

### Reordering Items and Sections

- [moveItem(\_:afterItem:)](moveitem%28__afteritem_%29.md): Moves the item from its current position in the snapshot to the position immediately after the specified item.
- [moveItem(\_:beforeItem:)](moveitem%28__beforeitem_%29.md): Moves the item from its current position in the snapshot to the position immediately before the specified item.
- [moveSection(\_:beforeSection:)](movesection%28__beforesection_%29.md): Moves the section from its current position in the snapshot to the position immediately before the specified section.
