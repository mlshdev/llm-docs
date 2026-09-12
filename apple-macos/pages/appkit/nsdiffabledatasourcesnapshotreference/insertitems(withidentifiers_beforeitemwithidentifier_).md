> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdiffabledatasourcesnapshotreference/insertitems(withidentifiers:beforeitemwithidentifier:)](https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshotreference/insertitems(withidentifiers:beforeitemwithidentifier:))

# insertItems(withIdentifiers:beforeItemWithIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Inserts the provided items immediately before the item with the specified identifier in the snapshot.

## Declaration

```swift
func insertItems(withIdentifiers identifiers: [Any], beforeItemWithIdentifier itemIdentifier: Any)
```

## Parameters

- `identifiers`: The array of identifiers corresponding to the items to add to the snapshot.
- `itemIdentifier`: The identifier of the item before which to insert the new items.

## See Also

### Inserting items and sections

- [insertItems(withIdentifiers:afterItemWithIdentifier:)](insertitems%28withidentifiers_afteritemwithidentifier_%29.md): Inserts the provided items immediately after the item with the specified identifier in the snapshot.
- [insertSections(withIdentifiers:afterSectionWithIdentifier:)](insertsections%28withidentifiers_aftersectionwithidentifier_%29.md): Inserts the provided sections immediately after the section with the specified identifier in the snapshot.
- [insertSections(withIdentifiers:beforeSectionWithIdentifier:)](insertsections%28withidentifiers_beforesectionwithidentifier_%29.md): Inserts the provided sections immediately before the section with the specified identifier in the snapshot.

# insertItemsWithIdentifiers:beforeItemWithIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Inserts the provided items immediately before the item with the specified identifier in the snapshot.

## Declaration

```objectivec
- (void) insertItemsWithIdentifiers:(NSArray<id> *) identifiers beforeItemWithIdentifier:(ItemIdentifierType) itemIdentifier;
```

## Parameters

- `identifiers`: The array of identifiers corresponding to the items to add to the snapshot.
- `itemIdentifier`: The identifier of the item before which to insert the new items.

## See Also

### Inserting items and sections

- [insertItemsWithIdentifiers:afterItemWithIdentifier:](insertitems%28withidentifiers_afteritemwithidentifier_%29.md): Inserts the provided items immediately after the item with the specified identifier in the snapshot.
- [insertSectionsWithIdentifiers:afterSectionWithIdentifier:](insertsections%28withidentifiers_aftersectionwithidentifier_%29.md): Inserts the provided sections immediately after the section with the specified identifier in the snapshot.
- [insertSectionsWithIdentifiers:beforeSectionWithIdentifier:](insertsections%28withidentifiers_beforesectionwithidentifier_%29.md): Inserts the provided sections immediately before the section with the specified identifier in the snapshot.
