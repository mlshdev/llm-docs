> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshotreference/appenditems(withidentifiers:)

# appendItems(withIdentifiers:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

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
