> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdiffabledatasourcesnapshotreference/insertsections(withidentifiers:beforesectionwithidentifier:)](https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshotreference/insertsections(withidentifiers:beforesectionwithidentifier:))

# insertSections(withIdentifiers:beforeSectionWithIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Inserts the provided sections immediately before the section with the specified identifier in the snapshot.

## Declaration

```swift
func insertSections(withIdentifiers sectionIdentifiers: [Any], beforeSectionWithIdentifier toSectionIdentifier: Any)
```

## Parameters

- `sectionIdentifiers`: The array of identifiers corresponding to the sections to add to the snapshot.
- `toSectionIdentifier`: The identifier of the section before which to insert the new sections.

## See Also

### Inserting items and sections

- [insertItems(withIdentifiers:afterItemWithIdentifier:)](insertitems%28withidentifiers_afteritemwithidentifier_%29.md): Inserts the provided items immediately after the item with the specified identifier in the snapshot.
- [insertItems(withIdentifiers:beforeItemWithIdentifier:)](insertitems%28withidentifiers_beforeitemwithidentifier_%29.md): Inserts the provided items immediately before the item with the specified identifier in the snapshot.
- [insertSections(withIdentifiers:afterSectionWithIdentifier:)](insertsections%28withidentifiers_aftersectionwithidentifier_%29.md): Inserts the provided sections immediately after the section with the specified identifier in the snapshot.

# insertSectionsWithIdentifiers:beforeSectionWithIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Inserts the provided sections immediately before the section with the specified identifier in the snapshot.

## Declaration

```objectivec
- (void) insertSectionsWithIdentifiers:(NSArray<id> *) sectionIdentifiers beforeSectionWithIdentifier:(SectionIdentifierType) toSectionIdentifier;
```

## Parameters

- `sectionIdentifiers`: The array of identifiers corresponding to the sections to add to the snapshot.
- `toSectionIdentifier`: The identifier of the section before which to insert the new sections.

## See Also

### Inserting items and sections

- [insertItemsWithIdentifiers:afterItemWithIdentifier:](insertitems%28withidentifiers_afteritemwithidentifier_%29.md): Inserts the provided items immediately after the item with the specified identifier in the snapshot.
- [insertItemsWithIdentifiers:beforeItemWithIdentifier:](insertitems%28withidentifiers_beforeitemwithidentifier_%29.md): Inserts the provided items immediately before the item with the specified identifier in the snapshot.
- [insertSectionsWithIdentifiers:afterSectionWithIdentifier:](insertsections%28withidentifiers_aftersectionwithidentifier_%29.md): Inserts the provided sections immediately after the section with the specified identifier in the snapshot.
