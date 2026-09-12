> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesnapshot-swift.struct/deleteitems(_:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshot-swift.struct/deleteitems(_:))

# deleteItems(\_:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS

Deletes the items with the specified identifiers from the snapshot.

## Declaration

```swift
mutating func deleteItems(_ identifiers: [ItemIdentifierType])
```

## Parameters

- `identifiers`: The array of identifiers corresponding to the items to delete from the snapshot.

## See Also

### Removing items and sections

- [deleteAllItems()](deleteallitems%28%29.md): Deletes all of the items from the snapshot.
- [deleteSections(\_:)](deletesections%28__%29.md): Deletes the sections with the specified identifiers from the snapshot.
