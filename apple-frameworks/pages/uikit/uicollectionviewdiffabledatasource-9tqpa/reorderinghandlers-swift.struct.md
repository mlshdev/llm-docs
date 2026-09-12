> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/reorderinghandlers-swift.struct](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/reorderinghandlers-swift.struct)

# UICollectionViewDiffableDataSource.ReorderingHandlers

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Handlers for reordering items.

## Declaration

```swift
struct ReorderingHandlers
```

## Topics

### Reordering items

- [canReorderItem](reorderinghandlers-swift.struct/canreorderitem.md): The handler that determines whether you can reorder a particular item.
- [willReorder](reorderinghandlers-swift.struct/willreorder.md): The handler that prepares the diffable data source for reordering its items.
- [didReorder](reorderinghandlers-swift.struct/didreorder.md): The handler that processes a reordering transaction.

### Initializers

- [init()](reorderinghandlers-swift.struct/init%28%29.md): Creates a reordering handlers structure.

## See Also

### Supporting reordering

- [reorderingHandlers](reorderinghandlers-swift.property.md): Conforms when `SectionIdentifierType` conforms to `Hashable`, `SectionIdentifierType` conforms to `Sendable`, `ItemIdentifierType` conforms to `Hashable`, and `ItemIdentifierType` conforms to `Sendable`. The diffable data source’s handlers for reordering items.
- [NSDiffableDataSourceTransaction](../nsdiffabledatasourcetransaction-swift.struct.md): A transaction that describes the changes after reordering the items in the view.
- [NSDiffableDataSourceSectionTransaction](../nsdiffabledatasourcesectiontransaction-swift.struct.md): A transaction that describes the changes after reordering the items in a section.
