> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct/insertsections(_:beforesection:)](https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct/insertsections(_:beforesection:))

# insertSections(\_:beforeSection:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15.1+

Inserts the provided sections immediately before the section with the specified identifier in the snapshot.

## Declaration

```swift
mutating func insertSections(_ identifiers: [SectionIdentifierType], beforeSection toIdentifier: SectionIdentifierType)
```

## Parameters

- `identifiers`: The array of identifiers corresponding to the sections to add to the snapshot.
- `toIdentifier`: The identifier of the section before which to insert the new sections.

## See Also

### Inserting Items and Sections

- [insertItems(\_:afterItem:)](insertitems%28__afteritem_%29.md): Inserts the provided items immediately after the item with the specified identifier in the snapshot.
- [insertItems(\_:beforeItem:)](insertitems%28__beforeitem_%29.md): Inserts the provided items immediately before the item with the specified identifier in the snapshot.
- [insertSections(\_:afterSection:)](insertsections%28__aftersection_%29.md): Inserts the provided sections immediately after the section with the specified identifier in the snapshot.
