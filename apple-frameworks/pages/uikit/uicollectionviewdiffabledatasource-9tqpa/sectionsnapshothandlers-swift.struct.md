> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/sectionsnapshothandlers-swift.struct](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/sectionsnapshothandlers-swift.struct)

# UICollectionViewDiffableDataSource.SectionSnapshotHandlers

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Handlers for expanding and collapsing items.

## Declaration

```swift
@preconcurrency struct SectionSnapshotHandlers<ItemIdentifierType> where ItemIdentifierType : Hashable, ItemIdentifierType : Sendable
```

## Topics

### Expanding and collapsing items

- [shouldCollapseItem](sectionsnapshothandlers-swift.struct/shouldcollapseitem.md): The handler that determines whether a particular item is collapsable.
- [shouldExpandItem](sectionsnapshothandlers-swift.struct/shouldexpanditem.md): The handler that determines whether a particular item is expandable.
- [willCollapseItem](sectionsnapshothandlers-swift.struct/willcollapseitem.md): The handler that prepares the diffable data source for collapsing an item.
- [willExpandItem](sectionsnapshothandlers-swift.struct/willexpanditem.md): The handler that prepares the diffable data source for expanding an item.
- [snapshotForExpandingParent](sectionsnapshothandlers-swift.struct/snapshotforexpandingparent.md): The handler that provides the section snapshot for expanding the parent item.

### Initializers

- [init()](sectionsnapshothandlers-swift.struct/init%28%29.md): Creates a section snapshot handlers structure.

## See Also

### Supporting expanding and collapsing

- [sectionSnapshotHandlers](sectionsnapshothandlers-swift.property.md): Conforms when `SectionIdentifierType` conforms to `Hashable`, `SectionIdentifierType` conforms to `Sendable`, `ItemIdentifierType` conforms to `Hashable`, and `ItemIdentifierType` conforms to `Sendable`. The diffable data source’s handlers for expanding and collapsing items.
