> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesnapshotreference/movesection(withidentifier:beforesectionwithidentifier:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshotreference/movesection(withidentifier:beforesectionwithidentifier:))

# moveSection(withIdentifier:beforeSectionWithIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Moves the section from its current position in the snapshot to the position immediately before the specified section.

## Declaration

```swift
func moveSection(withIdentifier fromSectionIdentifier: Any, beforeSectionWithIdentifier toSectionIdentifier: Any)
```

## Parameters

- `fromSectionIdentifier`: The identifier of the section to move in the snapshot.
- `toSectionIdentifier`: The identifier of the section before which to move the specified section.

## See Also

### Reordering items and sections

- [moveItem(withIdentifier:afterItemWithIdentifier:)](moveitem%28withidentifier_afteritemwithidentifier_%29.md): Moves the item from its current position in the snapshot to the position immediately after the specified item.
- [moveItem(withIdentifier:beforeItemWithIdentifier:)](moveitem%28withidentifier_beforeitemwithidentifier_%29.md): Moves the item from its current position in the snapshot to the position immediately before the specified item.
- [moveSection(withIdentifier:afterSectionWithIdentifier:)](movesection%28withidentifier_aftersectionwithidentifier_%29.md): Moves the section from its current position in the snapshot to the position immediately after the specified section.

# moveSectionWithIdentifier:beforeSectionWithIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Moves the section from its current position in the snapshot to the position immediately before the specified section.

## Declaration

```objectivec
- (void) moveSectionWithIdentifier:(SectionIdentifierType) fromSectionIdentifier beforeSectionWithIdentifier:(SectionIdentifierType) toSectionIdentifier;
```

## Parameters

- `fromSectionIdentifier`: The identifier of the section to move in the snapshot.
- `toSectionIdentifier`: The identifier of the section before which to move the specified section.

## See Also

### Reordering items and sections

- [moveItemWithIdentifier:afterItemWithIdentifier:](moveitem%28withidentifier_afteritemwithidentifier_%29.md): Moves the item from its current position in the snapshot to the position immediately after the specified item.
- [moveItemWithIdentifier:beforeItemWithIdentifier:](moveitem%28withidentifier_beforeitemwithidentifier_%29.md): Moves the item from its current position in the snapshot to the position immediately before the specified item.
- [moveSectionWithIdentifier:afterSectionWithIdentifier:](movesection%28withidentifier_aftersectionwithidentifier_%29.md): Moves the section from its current position in the snapshot to the position immediately after the specified section.
