> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesnapshot-swift.struct/deletesections(_:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshot-swift.struct/deletesections(_:))

# deleteSections(\_:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS

Deletes the sections with the specified identifiers from the snapshot.

## Declaration

```swift
mutating func deleteSections(_ identifiers: [SectionIdentifierType])
```

## Parameters

- `identifiers`: The array of identifiers corresponding to the sections to delete from the snapshot.

## See Also

### Removing items and sections

- [deleteAllItems()](deleteallitems%28%29.md): Deletes all of the items from the snapshot.
- [deleteItems(\_:)](deleteitems%28__%29.md): Deletes the items with the specified identifiers from the snapshot.
