> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesectionsnapshotreference](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesectionsnapshotreference)

# NSDiffableDataSourceSectionSnapshotReference (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A representation of the state of the data in a layout section at a specific point in time.

## Declaration

```swift
class NSDiffableDataSourceSectionSnapshotReference
```

<a id="overview"></a>

## Overview

A section snapshot represents the data for a single section in a collection view. Through a section snapshot, you set up the initial state of the data that displays in an individual section of your view, and later update that data.

You can use section snapshots with or instead of an [NSDiffableDataSourceSnapshotReference](nsdiffabledatasourcesnapshotreference.md), which represents the data in the entire view. Use a section snapshot when you need precise management of the data in a section of your layout, such as when the sections of your layout acquire their data from different sources. You can also use a section snapshot to represent data with a hierarchical structure, such as an outline with expandable items.

The following example creates a section snapshot with one root item that contains three child items:

```objc
for (NSNumber *section in sections) {
    // Create a section snapshot.
    NSDiffableDataSourceSectionSnapshot<NSString *> *sectionSnapshot = [[NSDiffableDataSourceSectionSnapshot alloc] init];
    
    // Populate the section snapshot.
    [sectionSnapshot appendItems: @[@"Food", @"Drinks"]];
    [sectionSnapshot appendItems: @[@"🍏", @"🍓", @"🥐"] intoParentItem: @"Food"];
    
    // Apply the section snapshot.
    [dataSource applySnapshot: sectionSnapshot
                    toSection: section
         animatingDifferences: YES];
}
```

> **Important**

> If you’re working in a Swift codebase, always use [NSDiffableDataSourceSectionSnapshot](nsdiffabledatasourcesectionsnapshot-swift.struct.md) instead.

Avoid using this type in Swift code. Only use this type to bridge from Objective-C code to Swift code by typecasting from a section snapshot reference to a section snapshot:

```swift
let sectionSnapshot = sectionSnapshotRef as NSDiffableDataSourceSectionSnapshot<UUID>
```

## Topics

### Creating a section snapshot

- [init()](nsdiffabledatasourcesectionsnapshotreference/init%28%29.md): Creates an empty section snapshot.
- [ofParentItem(\_:)](nsdiffabledatasourcesectionsnapshotreference/ofparentitem%28__%29.md): Creates a section snapshot containing the child items of the specified parent item, excluding the parent item.
- [ofParentItem(\_:includingParentItem:)](nsdiffabledatasourcesectionsnapshotreference/ofparentitem%28__includingparentitem_%29.md): Creates a section snapshot containing the child items of the specified parent item, including the parent item.
- [appendItems(\_:)](nsdiffabledatasourcesectionsnapshotreference/appenditems%28__%29.md): Adds the specified items to the section snapshot.
- [appendItems(\_:intoParentItem:)](nsdiffabledatasourcesectionsnapshotreference/appenditems%28__intoparentitem_%29.md): Adds the specified items as child items of the specified parent item in the section snapshot.

### Accessing items

- [items](nsdiffabledatasourcesectionsnapshotreference/items.md): The identifiers of all items in the section snapshot.
- [rootItems](nsdiffabledatasourcesectionsnapshotreference/rootitems.md): The identifiers of the items at the top level of the section snapshot’s hierarchy.
- [visibleItems](nsdiffabledatasourcesectionsnapshotreference/visibleitems.md): The identifiers of the currently visible items in the section snapshot.

### Getting item metrics

- [index(ofItem:)](nsdiffabledatasourcesectionsnapshotreference/index%28ofitem_%29.md): Finds the index of the specified item in the section snapshot.
- [level(ofItem:)](nsdiffabledatasourcesectionsnapshotreference/level%28ofitem_%29.md): Finds the hierarchical level of the specified item in the section snapshot.
- [parent(ofChildItem:)](nsdiffabledatasourcesectionsnapshotreference/parent%28ofchilditem_%29.md): Finds the parent item of the specified item in the section snapshot.
- [containsItem(\_:)](nsdiffabledatasourcesectionsnapshotreference/containsitem%28__%29.md): Indicates whether the section snapshot contains the specified item.
- [isVisible(\_:)](nsdiffabledatasourcesectionsnapshotreference/isvisible%28__%29.md): Indicates whether the specified item is currently visible onscreen.

### Inserting items

- [insert(\_:afterItem:)](nsdiffabledatasourcesectionsnapshotreference/insert%28__afteritem_%29.md): Inserts the provided section snapshot immediately after the item with the specified identifier in the section snapshot.
- [insertItems(\_:afterItem:)](nsdiffabledatasourcesectionsnapshotreference/insertitems%28__afteritem_%29.md): Inserts the provided items immediately after the item with the specified identifier in the section snapshot.
- [insert(\_:beforeItem:)](nsdiffabledatasourcesectionsnapshotreference/insert%28__beforeitem_%29.md): Inserts the provided section snapshot immediately before the item with the specified identifier in the section snapshot.
- [insertItems(\_:beforeItem:)](nsdiffabledatasourcesectionsnapshotreference/insertitems%28__beforeitem_%29.md): Inserts the provided items immediately before the item with the specified identifier in the section snapshot.

### Removing items

- [deleteItems(\_:)](nsdiffabledatasourcesectionsnapshotreference/deleteitems%28__%29.md): Deletes the items with the specified identifiers, and any of their child items, from the section snapshot.
- [deleteAllItems()](nsdiffabledatasourcesectionsnapshotreference/deleteallitems%28%29.md): Deletes all of the items from the section snapshot.

### Replacing items

- [replaceChildren(ofParentItem:with:)](nsdiffabledatasourcesectionsnapshotreference/replacechildren%28ofparentitem_with_%29.md): Replaces all child items of the specified parent item with the provided section snapshot.

### Expanding and collapsing items

- [isExpanded(\_:)](nsdiffabledatasourcesectionsnapshotreference/isexpanded%28__%29.md): Indicates whether the item with the specified identifier is in an expanded state.
- [expandItems(\_:)](nsdiffabledatasourcesectionsnapshotreference/expanditems%28__%29.md): Expands the specified items in the section snapshot.
- [collapseItems(\_:)](nsdiffabledatasourcesectionsnapshotreference/collapseitems%28__%29.md): Collapses the specified items in the section snapshot.

### Debugging section snapshots

- [visualDescription()](nsdiffabledatasourcesectionsnapshotreference/visualdescription%28%29.md): Returns a string with an ASCII representation of the section snapshot.

### Instance Methods

- [expandedItems()](nsdiffabledatasourcesectionsnapshotreference/expandeditems%28%29.md): The identifiers of all expanded items in the section snapshot.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# NSDiffableDataSourceSectionSnapshot (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A representation of the state of the data in a layout section at a specific point in time.

## Declaration

```objectivec
@interface NSDiffableDataSourceSectionSnapshot : NSObject
```

<a id="overview"></a>

## Overview

A section snapshot represents the data for a single section in a collection view. Through a section snapshot, you set up the initial state of the data that displays in an individual section of your view, and later update that data.

You can use section snapshots with or instead of an [NSDiffableDataSourceSnapshot](nsdiffabledatasourcesnapshotreference.md), which represents the data in the entire view. Use a section snapshot when you need precise management of the data in a section of your layout, such as when the sections of your layout acquire their data from different sources. You can also use a section snapshot to represent data with a hierarchical structure, such as an outline with expandable items.

The following example creates a section snapshot with one root item that contains three child items:

```objc
for (NSNumber *section in sections) {
    // Create a section snapshot.
    NSDiffableDataSourceSectionSnapshot<NSString *> *sectionSnapshot = [[NSDiffableDataSourceSectionSnapshot alloc] init];
    
    // Populate the section snapshot.
    [sectionSnapshot appendItems: @[@"Food", @"Drinks"]];
    [sectionSnapshot appendItems: @[@"🍏", @"🍓", @"🥐"] intoParentItem: @"Food"];
    
    // Apply the section snapshot.
    [dataSource applySnapshot: sectionSnapshot
                    toSection: section
         animatingDifferences: YES];
}
```

> **Important**

> If you’re working in a Swift codebase, always use [NSDiffableDataSourceSectionSnapshot](nsdiffabledatasourcesectionsnapshot-swift.struct.md) instead.

Avoid using this type in Swift code. Only use this type to bridge from Objective-C code to Swift code by typecasting from a section snapshot reference to a section snapshot:

```swift
let sectionSnapshot = sectionSnapshotRef as NSDiffableDataSourceSectionSnapshot<UUID>
```

## Topics

### Creating a section snapshot

- [init](nsdiffabledatasourcesectionsnapshotreference/init%28%29.md): Creates an empty section snapshot.
- [snapshotOfParentItem:](nsdiffabledatasourcesectionsnapshotreference/ofparentitem%28__%29.md): Creates a section snapshot containing the child items of the specified parent item, excluding the parent item.
- [snapshotOfParentItem:includingParentItem:](nsdiffabledatasourcesectionsnapshotreference/ofparentitem%28__includingparentitem_%29.md): Creates a section snapshot containing the child items of the specified parent item, including the parent item.
- [appendItems:](nsdiffabledatasourcesectionsnapshotreference/appenditems%28__%29.md): Adds the specified items to the section snapshot.
- [appendItems:intoParentItem:](nsdiffabledatasourcesectionsnapshotreference/appenditems%28__intoparentitem_%29.md): Adds the specified items as child items of the specified parent item in the section snapshot.

### Accessing items

- [items](nsdiffabledatasourcesectionsnapshotreference/items.md): The identifiers of all items in the section snapshot.
- [rootItems](nsdiffabledatasourcesectionsnapshotreference/rootitems.md): The identifiers of the items at the top level of the section snapshot’s hierarchy.
- [visibleItems](nsdiffabledatasourcesectionsnapshotreference/visibleitems.md): The identifiers of the currently visible items in the section snapshot.

### Getting item metrics

- [indexOfItem:](nsdiffabledatasourcesectionsnapshotreference/index%28ofitem_%29.md): Finds the index of the specified item in the section snapshot.
- [levelOfItem:](nsdiffabledatasourcesectionsnapshotreference/level%28ofitem_%29.md): Finds the hierarchical level of the specified item in the section snapshot.
- [parentOfChildItem:](nsdiffabledatasourcesectionsnapshotreference/parent%28ofchilditem_%29.md): Finds the parent item of the specified item in the section snapshot.
- [containsItem:](nsdiffabledatasourcesectionsnapshotreference/containsitem%28__%29.md): Indicates whether the section snapshot contains the specified item.
- [isVisible:](nsdiffabledatasourcesectionsnapshotreference/isvisible%28__%29.md): Indicates whether the specified item is currently visible onscreen.

### Inserting items

- [insertSnapshot:afterItem:](nsdiffabledatasourcesectionsnapshotreference/insert%28__afteritem_%29.md): Inserts the provided section snapshot immediately after the item with the specified identifier in the section snapshot.
- [insertItems:afterItem:](nsdiffabledatasourcesectionsnapshotreference/insertitems%28__afteritem_%29.md): Inserts the provided items immediately after the item with the specified identifier in the section snapshot.
- [insertSnapshot:beforeItem:](nsdiffabledatasourcesectionsnapshotreference/insert%28__beforeitem_%29.md): Inserts the provided section snapshot immediately before the item with the specified identifier in the section snapshot.
- [insertItems:beforeItem:](nsdiffabledatasourcesectionsnapshotreference/insertitems%28__beforeitem_%29.md): Inserts the provided items immediately before the item with the specified identifier in the section snapshot.

### Removing items

- [deleteItems:](nsdiffabledatasourcesectionsnapshotreference/deleteitems%28__%29.md): Deletes the items with the specified identifiers, and any of their child items, from the section snapshot.
- [deleteAllItems](nsdiffabledatasourcesectionsnapshotreference/deleteallitems%28%29.md): Deletes all of the items from the section snapshot.

### Replacing items

- [replaceChildrenOfParentItem:withSnapshot:](nsdiffabledatasourcesectionsnapshotreference/replacechildren%28ofparentitem_with_%29.md): Replaces all child items of the specified parent item with the provided section snapshot.

### Expanding and collapsing items

- [isExpanded:](nsdiffabledatasourcesectionsnapshotreference/isexpanded%28__%29.md): Indicates whether the item with the specified identifier is in an expanded state.
- [expandItems:](nsdiffabledatasourcesectionsnapshotreference/expanditems%28__%29.md): Expands the specified items in the section snapshot.
- [collapseItems:](nsdiffabledatasourcesectionsnapshotreference/collapseitems%28__%29.md): Collapses the specified items in the section snapshot.

### Debugging section snapshots

- [visualDescription](nsdiffabledatasourcesectionsnapshotreference/visualdescription%28%29.md): Returns a string with an ASCII representation of the section snapshot.

### Instance Methods

- [expandedItems](nsdiffabledatasourcesectionsnapshotreference/expandeditems%28%29.md): The identifiers of all expanded items in the section snapshot.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Data

- [Updating collection views using diffable data sources](updating-collection-views-using-diffable-data-sources.md): Streamline the display and update of data in a collection view using a diffable data source that contains identifiers.
- [Implementing modern collection views](implementing-modern-collection-views.md): Bring compositional layouts to your app and simplify updating your user interface with diffable data sources.
- [Building high-performance lists and collection views](building-high-performance-lists-and-collection-views.md): Improve the performance of lists and collections in your app with prefetching and image preparation.
- [UICollectionViewDiffableDataSource](uicollectionviewdiffabledatasourcereference.md): The object you use to manage data and provide cells for a collection view.
- [UICollectionViewDataSource](uicollectionviewdatasource.md): The methods adopted by the object you use to manage data and provide cells for a collection view.
- [UICollectionViewDataSourcePrefetching](uicollectionviewdatasourceprefetching.md): A protocol that provides advance warning of the data requirements for a collection view, allowing the triggering of asynchronous data load operations.
- [NSDiffableDataSourceSnapshot](nsdiffabledatasourcesnapshotreference.md): A representation of the state of the data in a view at a specific point in time.
- [UIRefreshControl](uirefreshcontrol.md): A standard control that can initiate the refreshing of a scroll view’s contents.
