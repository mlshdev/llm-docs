> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshotreference/deletesections(withidentifiers:)

# deleteSections(withIdentifiers:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Deletes the sections with the specified identifiers from the snapshot.

## Declaration

```swift
func deleteSections(withIdentifiers sectionIdentifiers: [Any])
```

## Parameters

- `sectionIdentifiers`: The array of identifiers corresponding to the sections to delete from the snapshot.

## See Also

### Removing items and sections

- [deleteAllItems()](deleteallitems%28%29.md): Deletes all of the items from the snapshot.
- [deleteItems(withIdentifiers:)](deleteitems%28withidentifiers_%29.md): Deletes the items with the specified identifiers from the snapshot.

# deleteSectionsWithIdentifiers: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Deletes the sections with the specified identifiers from the snapshot.

## Declaration

```objectivec
- (void) deleteSectionsWithIdentifiers:(NSArray<id> *) sectionIdentifiers;
```

## Parameters

- `sectionIdentifiers`: The array of identifiers corresponding to the sections to delete from the snapshot.

## See Also

### Removing items and sections

- [deleteAllItems](deleteallitems%28%29.md): Deletes all of the items from the snapshot.
- [deleteItemsWithIdentifiers:](deleteitems%28withidentifiers_%29.md): Deletes the items with the specified identifiers from the snapshot.
