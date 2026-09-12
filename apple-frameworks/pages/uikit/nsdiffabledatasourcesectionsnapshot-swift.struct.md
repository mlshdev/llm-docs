> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesectionsnapshot-swift.struct](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesectionsnapshot-swift.struct)

# NSDiffableDataSourceSectionSnapshot

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

A representation of the state of the data in a layout section at a specific point in time.

## Declaration

```swift
@preconcurrency struct NSDiffableDataSourceSectionSnapshot<ItemIdentifierType> where ItemIdentifierType : Hashable, ItemIdentifierType : Sendable
```

<a id="overview"></a>

## Overview

A section snapshot represents the data for a single section in a collection view. Through a section snapshot, you set up the initial state of the data that displays in an individual section of your view, and later update that data.

You can use section snapshots with or instead of an [NSDiffableDataSourceSnapshot](nsdiffabledatasourcesnapshot-swift.struct.md), which represents the data in the entire view. Use a section snapshot when you need precise management of the data in a section of your layout, such as when the sections of your layout acquire their data from different sources. You can also use a section snapshot to represent data with a hierarchical structure, such as an outline with expandable items.

The following example creates a section snapshot with two root items, with one that contains three child items:

```swift
for section in Section.allCases {
    // Create a section snapshot
    var sectionSnapshot = NSDiffableDataSourceSectionSnapshot<String>()
    
    // Populate the section snapshot
    sectionSnapshot.append(["Food", "Drinks"])
    sectionSnapshot.append(["🍏", "🍓", "🥐"], to: "Food")
    
    // Apply the section snapshot
    dataSource.apply(sectionSnapshot,
                     to: section,
                     animatingDifferences: true)
}
```

## Topics

### Creating a section snapshot

- [init()](nsdiffabledatasourcesectionsnapshot-swift.struct/init%28%29.md): Creates an empty section snapshot.
- [init(\_:)](nsdiffabledatasourcesectionsnapshot-swift.struct/init%28__%29.md): Creates a copy of the provided section snapshot.
- [snapshot(of:includingParent:)](nsdiffabledatasourcesectionsnapshot-swift.struct/snapshot%28of_includingparent_%29.md): Creates a section snapshot that contains the child items of the specified parent item, optionally including the parent item.
- [append(\_:to:)](nsdiffabledatasourcesectionsnapshot-swift.struct/append%28__to_%29.md): Adds the specified items as child items of the specified parent item in the section snapshot.

### Accessing items

- [items](nsdiffabledatasourcesectionsnapshot-swift.struct/items.md): The identifiers of all items in the section snapshot.
- [rootItems](nsdiffabledatasourcesectionsnapshot-swift.struct/rootitems.md): The identifiers of the items at the top level of the section snapshot’s hierarchy.
- [visibleItems](nsdiffabledatasourcesectionsnapshot-swift.struct/visibleitems.md): The identifiers of the currently visible items in the section snapshot.

### Getting item metrics

- [index(of:)](nsdiffabledatasourcesectionsnapshot-swift.struct/index%28of_%29.md): Finds the index of the specified item in the section snapshot.
- [level(of:)](nsdiffabledatasourcesectionsnapshot-swift.struct/level%28of_%29.md): Finds the hierarchical level of the specified item in the section snapshot.
- [parent(of:)](nsdiffabledatasourcesectionsnapshot-swift.struct/parent%28of_%29.md): Finds the parent item of the specified item in the section snapshot.
- [contains(\_:)](nsdiffabledatasourcesectionsnapshot-swift.struct/contains%28__%29.md): Indicates whether the section snapshot contains the specified item.
- [isVisible(\_:)](nsdiffabledatasourcesectionsnapshot-swift.struct/isvisible%28__%29.md): Indicates whether the specified item is currently visible onscreen.

### Inserting items

- [insert(\_:after:)](nsdiffabledatasourcesectionsnapshot-swift.struct/insert%28__after_%29-9v9c7.md): Inserts the provided items immediately after the item with the specified identifier in the section snapshot.
- [insert(\_:after:)](nsdiffabledatasourcesectionsnapshot-swift.struct/insert%28__after_%29-4it9s.md): Inserts the provided section snapshot immediately after the item with the specified identifier in the section snapshot.
- [insert(\_:before:)](nsdiffabledatasourcesectionsnapshot-swift.struct/insert%28__before_%29-5o91y.md): Inserts the provided items immediately before the item with the specified identifier in the section snapshot.
- [insert(\_:before:)](nsdiffabledatasourcesectionsnapshot-swift.struct/insert%28__before_%29-bsrn.md): Inserts the provided section snapshot immediately before the item with the specified identifier in the section snapshot.

### Removing items

- [delete(\_:)](nsdiffabledatasourcesectionsnapshot-swift.struct/delete%28__%29.md): Deletes the items with the specified identifiers, and any of their child items, from the section snapshot.
- [deleteAll()](nsdiffabledatasourcesectionsnapshot-swift.struct/deleteall%28%29.md): Deletes all of the items from the section snapshot.

### Replacing items

- [replace(childrenOf:using:)](nsdiffabledatasourcesectionsnapshot-swift.struct/replace%28childrenof_using_%29.md): Replaces all child items of the specified parent item with the provided section snapshot.

### Expanding and collapsing items

- [isExpanded(\_:)](nsdiffabledatasourcesectionsnapshot-swift.struct/isexpanded%28__%29.md): Indicates whether the item with the specified identifier is in an expanded state.
- [expand(\_:)](nsdiffabledatasourcesectionsnapshot-swift.struct/expand%28__%29.md): Expands the specified items in the section snapshot.
- [collapse(\_:)](nsdiffabledatasourcesectionsnapshot-swift.struct/collapse%28__%29.md): Collapses the specified items in the section snapshot.

### Debugging section snapshots

- [visualDescription()](nsdiffabledatasourcesectionsnapshot-swift.struct/visualdescription%28%29.md): Returns a string with an ASCII representation of the section snapshot.

### Supporting bridging

- [NSDiffableDataSourceSectionSnapshotReference](nsdiffabledatasourcesectionsnapshotreference.md): A representation of the state of the data in a layout section at a specific point in time.

### Instance Properties

- [expandedItems](nsdiffabledatasourcesectionsnapshot-swift.struct/expandeditems.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data

- [Updating collection views using diffable data sources](updating-collection-views-using-diffable-data-sources.md): Streamline the display and update of data in a collection view using a diffable data source that contains identifiers.
- [Implementing modern collection views](implementing-modern-collection-views.md): Bring compositional layouts to your app and simplify updating your user interface with diffable data sources.
- [Building high-performance lists and collection views](building-high-performance-lists-and-collection-views.md): Improve the performance of lists and collections in your app with prefetching and image preparation.
- [UICollectionViewDiffableDataSource](uicollectionviewdiffabledatasource-9tqpa.md): The object you use to manage data and provide cells for a collection view.
- [UICollectionViewDataSource](uicollectionviewdatasource.md): The methods adopted by the object you use to manage data and provide cells for a collection view.
- [UICollectionViewDataSourcePrefetching](uicollectionviewdatasourceprefetching.md): A protocol that provides advance warning of the data requirements for a collection view, allowing the triggering of asynchronous data load operations.
- [NSDiffableDataSourceSnapshot](nsdiffabledatasourcesnapshot-swift.struct.md): A representation of the state of the data in a view at a specific point in time.
- [UIRefreshControl](uirefreshcontrol.md): A standard control that can initiate the refreshing of a scroll view’s contents.
