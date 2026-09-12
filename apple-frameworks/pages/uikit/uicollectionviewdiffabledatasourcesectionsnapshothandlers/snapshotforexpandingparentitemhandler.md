> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasourcesectionsnapshothandlers/snapshotforexpandingparentitemhandler](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasourcesectionsnapshothandlers/snapshotforexpandingparentitemhandler)

# snapshotForExpandingParentItemHandler

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The handler that provides the section snapshot for expanding the parent item.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDiffableDataSourceSectionSnapshot<id> * (^snapshotForExpandingParentItemHandler)(ItemType , NSDiffableDataSourceSectionSnapshot<id> *);
```

<a id="Discussion"></a>

## Discussion

Use the [snapshotForExpandingParentItemHandler](snapshotforexpandingparentitemhandler.md) handler to customize the snapshot that returns when a particular parent item is expanded.

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

- [shouldCollapseItemHandler](shouldcollapseitemhandler.md): The handler that determines whether a particular item is collapsable.
- [shouldExpandItemHandler](shouldexpanditemhandler.md): The handler that determines whether a particular item is expandable.
- [willCollapseItemHandler](willcollapseitemhandler.md): The handler that prepares the diffable data source for collapsing an item.
- [willExpandItemHandler](willexpanditemhandler.md): The handler that prepares the diffable data source for expanding an item.
