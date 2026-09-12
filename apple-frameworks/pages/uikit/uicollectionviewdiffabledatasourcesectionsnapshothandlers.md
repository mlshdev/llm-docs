> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasourcesectionsnapshothandlers](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasourcesectionsnapshothandlers)

# UICollectionViewDiffableDataSourceSectionSnapshotHandlers

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Handlers for expanding and collapsing items.

## Declaration

```objectivec
@interface UICollectionViewDiffableDataSourceSectionSnapshotHandlers : NSObject
```

## Topics

### Expanding and collapsing items

- [shouldCollapseItemHandler](uicollectionviewdiffabledatasourcesectionsnapshothandlers/shouldcollapseitemhandler.md): The handler that determines whether a particular item is collapsable.
- [shouldExpandItemHandler](uicollectionviewdiffabledatasourcesectionsnapshothandlers/shouldexpanditemhandler.md): The handler that determines whether a particular item is expandable.
- [willCollapseItemHandler](uicollectionviewdiffabledatasourcesectionsnapshothandlers/willcollapseitemhandler.md): The handler that prepares the diffable data source for collapsing an item.
- [willExpandItemHandler](uicollectionviewdiffabledatasourcesectionsnapshothandlers/willexpanditemhandler.md): The handler that prepares the diffable data source for expanding an item.
- [snapshotForExpandingParentItemHandler](uicollectionviewdiffabledatasourcesectionsnapshothandlers/snapshotforexpandingparentitemhandler.md): The handler that provides the section snapshot for expanding the parent item.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Supporting expanding and collapsing

- [sectionSnapshotHandlers](uicollectionviewdiffabledatasourcereference/sectionsnapshothandlers.md): The diffable data source’s handlers for expanding and collapsing items.
