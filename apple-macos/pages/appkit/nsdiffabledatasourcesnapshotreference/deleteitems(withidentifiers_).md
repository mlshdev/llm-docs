> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdiffabledatasourcesnapshotreference/deleteitems(withidentifiers:)](https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshotreference/deleteitems(withidentifiers:))

# deleteItems(withIdentifiers:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Deletes the items with the specified identifiers from the snapshot.

## Declaration

```swift
func deleteItems(withIdentifiers identifiers: [Any])
```

## Parameters

- `identifiers`: The array of identifiers corresponding to the items to delete from the snapshot.

## See Also

### Removing items and sections

- [deleteAllItems()](deleteallitems%28%29.md): Deletes all of the items from the snapshot.
- [deleteSections(withIdentifiers:)](deletesections%28withidentifiers_%29.md): Deletes the sections with the specified identifiers from the snapshot.

# deleteItemsWithIdentifiers: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Deletes the items with the specified identifiers from the snapshot.

## Declaration

```objectivec
- (void) deleteItemsWithIdentifiers:(NSArray<id> *) identifiers;
```

## Parameters

- `identifiers`: The array of identifiers corresponding to the items to delete from the snapshot.

## See Also

### Removing items and sections

- [deleteAllItems](deleteallitems%28%29.md): Deletes all of the items from the snapshot.
- [deleteSectionsWithIdentifiers:](deletesections%28withidentifiers_%29.md): Deletes the sections with the specified identifiers from the snapshot.
