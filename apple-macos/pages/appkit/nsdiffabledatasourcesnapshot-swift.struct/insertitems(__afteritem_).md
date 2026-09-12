> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct/insertitems(_:afteritem:)](https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct/insertitems(_:afteritem:))

# insertItems(\_:afterItem:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15.1+

Inserts the provided items immediately after the item with the specified identifier in the snapshot.

## Declaration

```swift
mutating func insertItems(_ identifiers: [ItemIdentifierType], afterItem afterIdentifier: ItemIdentifierType)
```

## Parameters

- `identifiers`: The array of identifiers corresponding to the items to add to the snapshot.
- `afterIdentifier`: The identifier of the item after which to insert the new items.

## See Also

### Inserting Items and Sections

- [insertItems(\_:beforeItem:)](insertitems%28__beforeitem_%29.md): Inserts the provided items immediately before the item with the specified identifier in the snapshot.
- [insertSections(\_:afterSection:)](insertsections%28__aftersection_%29.md): Inserts the provided sections immediately after the section with the specified identifier in the snapshot.
- [insertSections(\_:beforeSection:)](insertsections%28__beforesection_%29.md): Inserts the provided sections immediately before the section with the specified identifier in the snapshot.
