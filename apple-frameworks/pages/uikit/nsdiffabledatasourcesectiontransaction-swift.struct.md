> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesectiontransaction-swift.struct](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesectiontransaction-swift.struct)

# NSDiffableDataSourceSectionTransaction

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

A transaction that describes the changes after reordering the items in a section.

## Declaration

```swift
@preconcurrency struct NSDiffableDataSourceSectionTransaction<SectionIdentifierType, ItemIdentifierType> where SectionIdentifierType : Hashable, SectionIdentifierType : Sendable, ItemIdentifierType : Hashable, ItemIdentifierType : Sendable
```

## Topics

### Accessing a transaction’s information

- [sectionIdentifier](nsdiffabledatasourcesectiontransaction-swift.struct/sectionidentifier.md): The identifier of the section for the transaction.
- [initialSnapshot](nsdiffabledatasourcesectiontransaction-swift.struct/initialsnapshot.md): The section snapshot before the transaction occured.
- [finalSnapshot](nsdiffabledatasourcesectiontransaction-swift.struct/finalsnapshot.md): The section snapshot after the transaction occured.
- [difference](nsdiffabledatasourcesectiontransaction-swift.struct/difference.md): A collection of insertions and removals that describe the difference between initial and final section snapshots.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting reordering

- [reorderingHandlers](uicollectionviewdiffabledatasource-9tqpa/reorderinghandlers-swift.property.md): Conforms when `SectionIdentifierType` conforms to `Hashable`, `SectionIdentifierType` conforms to `Sendable`, `ItemIdentifierType` conforms to `Hashable`, and `ItemIdentifierType` conforms to `Sendable`. The diffable data source’s handlers for reordering items.
- [UICollectionViewDiffableDataSource.ReorderingHandlers](uicollectionviewdiffabledatasource-9tqpa/reorderinghandlers-swift.struct.md): Conforms when `SectionIdentifierType` conforms to `Hashable`, `SectionIdentifierType` conforms to `Sendable`, `ItemIdentifierType` conforms to `Hashable`, and `ItemIdentifierType` conforms to `Sendable`. Handlers for reordering items.
- [NSDiffableDataSourceTransaction](nsdiffabledatasourcetransaction-swift.struct.md): A transaction that describes the changes after reordering the items in the view.
