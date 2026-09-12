> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdiffabledatasourcesnapshotreference/deletesections(withidentifiers:)](https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshotreference/deletesections(withidentifiers:))

# deleteSections(withIdentifiers:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

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

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

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
