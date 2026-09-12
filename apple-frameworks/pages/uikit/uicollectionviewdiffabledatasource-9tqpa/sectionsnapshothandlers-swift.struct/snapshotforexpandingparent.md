> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/sectionsnapshothandlers-swift.struct/snapshotforexpandingparent](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/sectionsnapshothandlers-swift.struct/snapshotforexpandingparent)

# snapshotForExpandingParent

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

The handler that provides the section snapshot for expanding the parent item.

## Declaration

```swift
var snapshotForExpandingParent: ((ItemIdentifierType, NSDiffableDataSourceSectionSnapshot<ItemIdentifierType>) -> NSDiffableDataSourceSectionSnapshot<ItemIdentifierType>)? { get set }
```

<a id="Discussion"></a>

## Discussion

Use the [snapshotForExpandingParent](snapshotforexpandingparent.md) handler to customize the snapshot that returns when a particular parent item is expanded.

```swift
// Allow every item to be collapsed
dataSource.sectionSnapshotHandlers.shouldCollapseItem = { item in return true }

dataSource.sectionSnapshotHandlers.snapshotForExpandingParent = {
    parent, existingSnapshot -> NSDiffableDataSourceSectionSnapshot<String> in
    
    // Return child snapshot for the parent, or just existingSnapshot
}
```

## See Also

### Expanding and collapsing items

- [shouldCollapseItem](shouldcollapseitem.md): The handler that determines whether a particular item is collapsable.
- [shouldExpandItem](shouldexpanditem.md): The handler that determines whether a particular item is expandable.
- [willCollapseItem](willcollapseitem.md): The handler that prepares the diffable data source for collapsing an item.
- [willExpandItem](willexpanditem.md): The handler that prepares the diffable data source for expanding an item.
