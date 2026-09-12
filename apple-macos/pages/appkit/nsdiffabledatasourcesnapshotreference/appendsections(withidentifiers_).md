> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdiffabledatasourcesnapshotreference/appendsections(withidentifiers:)](https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshotreference/appendsections(withidentifiers:))

# appendSections(withIdentifiers:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Adds the sections with the specified identifiers to the snapshot.

## Declaration

```swift
func appendSections(withIdentifiers sectionIdentifiers: [Any])
```

## Parameters

- `sectionIdentifiers`: An array of identifiers specifying the sections to add to the snapshot.

## See Also

### Creating a snapshot

- [appendItems(withIdentifiers:intoSectionWithIdentifier:)](appenditems%28withidentifiers_intosectionwithidentifier_%29.md): Adds the items with the specified identifiers to the specified section of the snapshot.
- [appendItems(withIdentifiers:)](appenditems%28withidentifiers_%29.md): Adds the items with the specified identifiers to the last section of the snapshot.

# appendSectionsWithIdentifiers: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Adds the sections with the specified identifiers to the snapshot.

## Declaration

```objectivec
- (void) appendSectionsWithIdentifiers:(NSArray<id> *) sectionIdentifiers;
```

## Parameters

- `sectionIdentifiers`: An array of identifiers specifying the sections to add to the snapshot.

## See Also

### Creating a snapshot

- [appendItemsWithIdentifiers:intoSectionWithIdentifier:](appenditems%28withidentifiers_intosectionwithidentifier_%29.md): Adds the items with the specified identifiers to the specified section of the snapshot.
- [appendItemsWithIdentifiers:](appenditems%28withidentifiers_%29.md): Adds the items with the specified identifiers to the last section of the snapshot.
