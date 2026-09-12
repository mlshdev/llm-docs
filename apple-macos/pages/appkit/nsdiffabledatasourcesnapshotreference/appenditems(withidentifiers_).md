> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdiffabledatasourcesnapshotreference/appenditems(withidentifiers:)](https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshotreference/appenditems(withidentifiers:))

# appendItems(withIdentifiers:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Adds the items with the specified identifiers to the last section of the snapshot.

## Declaration

```swift
func appendItems(withIdentifiers identifiers: [Any])
```

## Parameters

- `identifiers`: An array of identifiers specifying the items to add to the snapshot.

## See Also

### Creating a snapshot

- [appendSections(withIdentifiers:)](appendsections%28withidentifiers_%29.md): Adds the sections with the specified identifiers to the snapshot.
- [appendItems(withIdentifiers:intoSectionWithIdentifier:)](appenditems%28withidentifiers_intosectionwithidentifier_%29.md): Adds the items with the specified identifiers to the specified section of the snapshot.

# appendItemsWithIdentifiers: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Adds the items with the specified identifiers to the last section of the snapshot.

## Declaration

```objectivec
- (void) appendItemsWithIdentifiers:(NSArray<id> *) identifiers;
```

## Parameters

- `identifiers`: An array of identifiers specifying the items to add to the snapshot.

## See Also

### Creating a snapshot

- [appendSectionsWithIdentifiers:](appendsections%28withidentifiers_%29.md): Adds the sections with the specified identifiers to the snapshot.
- [appendItemsWithIdentifiers:intoSectionWithIdentifier:](appenditems%28withidentifiers_intosectionwithidentifier_%29.md): Adds the items with the specified identifiers to the specified section of the snapshot.
