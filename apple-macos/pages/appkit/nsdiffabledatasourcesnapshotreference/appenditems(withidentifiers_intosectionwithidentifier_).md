> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdiffabledatasourcesnapshotreference/appenditems(withidentifiers:intosectionwithidentifier:)](https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshotreference/appenditems(withidentifiers:intosectionwithidentifier:))

# appendItems(withIdentifiers:intoSectionWithIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Adds the items with the specified identifiers to the specified section of the snapshot.

## Declaration

```swift
func appendItems(withIdentifiers identifiers: [Any], intoSectionWithIdentifier sectionIdentifier: Any)
```

## Parameters

- `identifiers`: An array of identifiers specifying the items to add to the snapshot.
- `sectionIdentifier`: The section to which to add the items.

## See Also

### Creating a snapshot

- [appendSections(withIdentifiers:)](appendsections%28withidentifiers_%29.md): Adds the sections with the specified identifiers to the snapshot.
- [appendItems(withIdentifiers:)](appenditems%28withidentifiers_%29.md): Adds the items with the specified identifiers to the last section of the snapshot.

# appendItemsWithIdentifiers:intoSectionWithIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Adds the items with the specified identifiers to the specified section of the snapshot.

## Declaration

```objectivec
- (void) appendItemsWithIdentifiers:(NSArray<id> *) identifiers intoSectionWithIdentifier:(SectionIdentifierType) sectionIdentifier;
```

## Parameters

- `identifiers`: An array of identifiers specifying the items to add to the snapshot.
- `sectionIdentifier`: The section to which to add the items.

## See Also

### Creating a snapshot

- [appendSectionsWithIdentifiers:](appendsections%28withidentifiers_%29.md): Adds the sections with the specified identifiers to the snapshot.
- [appendItemsWithIdentifiers:](appenditems%28withidentifiers_%29.md): Adds the items with the specified identifiers to the last section of the snapshot.
