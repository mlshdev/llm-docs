> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesnapshot-swift.struct/insertsections(_:beforesection:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshot-swift.struct/insertsections(_:beforesection:))

# insertSections(\_:beforeSection:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS

Inserts the provided sections immediately before the section with the specified identifier in the snapshot.

## Declaration

```swift
mutating func insertSections(_ identifiers: [SectionIdentifierType], beforeSection toIdentifier: SectionIdentifierType)
```

## Parameters

- `identifiers`: The array of identifiers corresponding to the sections to add to the snapshot.
- `toIdentifier`: The identifier of the section before which to insert the new sections.

## See Also

### Inserting items and sections

- [insertItems(\_:afterItem:)](insertitems%28__afteritem_%29.md): Inserts the provided items immediately after the item with the specified identifier in the snapshot.
- [insertItems(\_:beforeItem:)](insertitems%28__beforeitem_%29.md): Inserts the provided items immediately before the item with the specified identifier in the snapshot.
- [insertSections(\_:afterSection:)](insertsections%28__aftersection_%29.md): Inserts the provided sections immediately after the section with the specified identifier in the snapshot.
