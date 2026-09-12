> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct/deleteitems(_:)](https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct/deleteitems(_:))

# deleteItems(\_:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15.1+

Deletes the items with the specified identifiers from the snapshot.

## Declaration

```swift
mutating func deleteItems(_ identifiers: [ItemIdentifierType])
```

## Parameters

- `identifiers`: The array of identifiers corresponding to the items to delete from the snapshot.

## See Also

### Removing Items and Sections

- [deleteAllItems()](deleteallitems%28%29.md): Deletes all of the items from the snapshot.
- [deleteSections(\_:)](deletesections%28__%29.md): Deletes the sections with the specified identifiers from the snapshot.
