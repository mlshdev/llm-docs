> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdiffabledatasourcesnapshotreference/moveitem(withidentifier:afteritemwithidentifier:)](https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshotreference/moveitem(withidentifier:afteritemwithidentifier:))

# moveItem(withIdentifier:afterItemWithIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Moves the item from its current position in the snapshot to the position immediately after the specified item.

## Declaration

```swift
func moveItem(withIdentifier fromIdentifier: Any, afterItemWithIdentifier toIdentifier: Any)
```

## Parameters

- `fromIdentifier`: The identifier of the item to move in the snapshot.
- `toIdentifier`: The identifier of the item after which to move the specified item.

## See Also

### Reordering items and sections

- [moveItem(withIdentifier:beforeItemWithIdentifier:)](moveitem%28withidentifier_beforeitemwithidentifier_%29.md): Moves the item from its current position in the snapshot to the position immediately before the specified item.
- [moveSection(withIdentifier:afterSectionWithIdentifier:)](movesection%28withidentifier_aftersectionwithidentifier_%29.md): Moves the section from its current position in the snapshot to the position immediately after the specified section.
- [moveSection(withIdentifier:beforeSectionWithIdentifier:)](movesection%28withidentifier_beforesectionwithidentifier_%29.md): Moves the section from its current position in the snapshot to the position immediately before the specified section.

# moveItemWithIdentifier:afterItemWithIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Moves the item from its current position in the snapshot to the position immediately after the specified item.

## Declaration

```objectivec
- (void) moveItemWithIdentifier:(ItemIdentifierType) fromIdentifier afterItemWithIdentifier:(ItemIdentifierType) toIdentifier;
```

## Parameters

- `fromIdentifier`: The identifier of the item to move in the snapshot.
- `toIdentifier`: The identifier of the item after which to move the specified item.

## See Also

### Reordering items and sections

- [moveItemWithIdentifier:beforeItemWithIdentifier:](moveitem%28withidentifier_beforeitemwithidentifier_%29.md): Moves the item from its current position in the snapshot to the position immediately before the specified item.
- [moveSectionWithIdentifier:afterSectionWithIdentifier:](movesection%28withidentifier_aftersectionwithidentifier_%29.md): Moves the section from its current position in the snapshot to the position immediately after the specified section.
- [moveSectionWithIdentifier:beforeSectionWithIdentifier:](movesection%28withidentifier_beforesectionwithidentifier_%29.md): Moves the section from its current position in the snapshot to the position immediately before the specified section.
