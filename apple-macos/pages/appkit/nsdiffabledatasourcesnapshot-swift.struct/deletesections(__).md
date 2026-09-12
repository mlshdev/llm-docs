> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct/deletesections(_:)](https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct/deletesections(_:))

# deleteSections(\_:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15.1+

Deletes the sections with the specified identifiers from the snapshot.

## Declaration

```swift
mutating func deleteSections(_ identifiers: [SectionIdentifierType])
```

## Parameters

- `identifiers`: The array of identifiers corresponding to the sections to delete from the snapshot.

## See Also

### Removing Items and Sections

- [deleteAllItems()](deleteallitems%28%29.md): Deletes all of the items from the snapshot.
- [deleteItems(\_:)](deleteitems%28__%29.md): Deletes the items with the specified identifiers from the snapshot.
