> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesnapshotreference/deleteitems(withidentifiers:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshotreference/deleteitems(withidentifiers:))

# deleteItems(withIdentifiers:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

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
