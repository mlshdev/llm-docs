> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesnapshotreference](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshotreference)

# NSDiffableDataSourceSnapshotReference (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A representation of the state of the data in a view at a specific point in time.

## Declaration

```swift
class NSDiffableDataSourceSnapshotReference
```

<a id="overview"></a>

## Overview

Diffable data sources use *snapshots* to provide data for collection views and table views. You use a snapshot to set up the initial state of the data that a view displays, and you use snapshots to reflect changes to the data that the view displays.

The data in a snapshot is made up of the sections and items you want to display, in the order that you determine. You configure what to display by adding, deleting, or moving the sections and items.

> **Important**

>  Each of your sections and items must have unique identifiers that conform to the [Hashable](https://developer.apple.com/documentation/swift/hashable) protocol. Use `struct` or `enum` Swift value types for your identifiers, including built-in types such as `Int`, `String`, or `UUID`. If you use a Swift `class` for your identifiers, your `class` must be a subclass of `NSObject`.

To display data in a view using a snapshot:

1. Create a snapshot and populate it with the state of the data you want to display.
2. Apply the snapshot to reflect the changes in the UI.

You can create and configure a snapshot in one of these ways:

- Create an empty snapshot, then append sections and items to it.
- Get the current snapshot by calling the diffable data source’s [snapshot()](uicollectionviewdiffabledatasource-9tqpa/snapshot%28%29.md) method, then modify that snapshot to reflect the new state of the data that you want to display.

For example, the following code creates an empty snapshot and populates it with a single section with three items. Then, the code applies the snapshot, animating the UI updates between the previous state and the new state.

```objc
// Create a snapshot.
NSDiffableDataSourceSnapshot<NSNumber *, NSUUID *> *snapshot = [[NSDiffableDataSourceSnapshot alloc] init];

// Populate the snapshot.
[snapshot appendSectionsWithIdentifiers:@[@0]];
[snapshot appendItemsWithIdentifiers:@[[NSUUID UUID], [NSUUID UUID], [NSUUID UUID]]];

// Apply the snapshot.
[self.dataSource applySnapshot:snapshot animatingDifferences:YES];
```

For more information, see the diffable data source types:

- [UICollectionViewDiffableDataSourceReference](uicollectionviewdiffabledatasourcereference.md)
- [UITableViewDiffableDataSourceReference](uitableviewdiffabledatasourcereference.md)
- [NSCollectionViewDiffableDataSource](https://developer.apple.com/documentation/appkit/nscollectionviewdiffabledatasource-axww)

> **Important**

> If you’re working in a Swift codebase, always use [NSDiffableDataSourceSnapshot](nsdiffabledatasourcesnapshot-swift.struct.md) instead.

Avoid using this type in Swift code. Only use this type to bridge from Objective-C code to Swift code by typecasting from a snapshot reference to a snapshot:

```swift
let snapshot = snapshotReference as NSDiffableDataSourceSnapshot<Int, UUID>
```

## Topics

### Creating a snapshot

- [appendSections(withIdentifiers:)](nsdiffabledatasourcesnapshotreference/appendsections%28withidentifiers_%29.md): Adds the sections with the specified identifiers to the snapshot.
- [appendItems(withIdentifiers:intoSectionWithIdentifier:)](nsdiffabledatasourcesnapshotreference/appenditems%28withidentifiers_intosectionwithidentifier_%29.md): Adds the items with the specified identifiers to the specified section of the snapshot.
- [appendItems(withIdentifiers:)](nsdiffabledatasourcesnapshotreference/appenditems%28withidentifiers_%29.md): Adds the items with the specified identifiers to the last section of the snapshot.

### Getting item and section metrics

- [numberOfItems](nsdiffabledatasourcesnapshotreference/numberofitems.md): The number of items in the snapshot.
- [numberOfSections](nsdiffabledatasourcesnapshotreference/numberofsections.md): The number of sections in the snapshot.
- [numberOfItems(inSection:)](nsdiffabledatasourcesnapshotreference/numberofitems%28insection_%29.md): Returns the number of items in the specified section of the snapshot.

### Identifying items and sections

- [itemIdentifiers](nsdiffabledatasourcesnapshotreference/itemidentifiers.md): The identifiers of all of the items in the snapshot.
- [sectionIdentifiers](nsdiffabledatasourcesnapshotreference/sectionidentifiers.md): The identifiers of all of the sections in the snapshot.
- [index(ofItemIdentifier:)](nsdiffabledatasourcesnapshotreference/index%28ofitemidentifier_%29.md): Returns the index of the item in the snapshot with the specified identifier.
- [index(ofSectionIdentifier:)](nsdiffabledatasourcesnapshotreference/index%28ofsectionidentifier_%29.md): Returns the index of the section of the snapshot with the specified identifier.
- [itemIdentifiersInSection(withIdentifier:)](nsdiffabledatasourcesnapshotreference/itemidentifiersinsection%28withidentifier_%29.md): Returns the identifiers of all of the items in the specified section of the snapshot.
- [sectionIdentifier(forSectionContainingItemIdentifier:)](nsdiffabledatasourcesnapshotreference/sectionidentifier%28forsectioncontainingitemidentifier_%29.md): Returns the identifier of the section containing the specified item in the snapshot.

### Inserting items and sections

- [insertItems(withIdentifiers:afterItemWithIdentifier:)](nsdiffabledatasourcesnapshotreference/insertitems%28withidentifiers_afteritemwithidentifier_%29.md): Inserts the provided items immediately after the item with the specified identifier in the snapshot.
- [insertItems(withIdentifiers:beforeItemWithIdentifier:)](nsdiffabledatasourcesnapshotreference/insertitems%28withidentifiers_beforeitemwithidentifier_%29.md): Inserts the provided items immediately before the item with the specified identifier in the snapshot.
- [insertSections(withIdentifiers:afterSectionWithIdentifier:)](nsdiffabledatasourcesnapshotreference/insertsections%28withidentifiers_aftersectionwithidentifier_%29.md): Inserts the provided sections immediately after the section with the specified identifier in the snapshot.
- [insertSections(withIdentifiers:beforeSectionWithIdentifier:)](nsdiffabledatasourcesnapshotreference/insertsections%28withidentifiers_beforesectionwithidentifier_%29.md): Inserts the provided sections immediately before the section with the specified identifier in the snapshot.

### Removing items and sections

- [deleteAllItems()](nsdiffabledatasourcesnapshotreference/deleteallitems%28%29.md): Deletes all of the items from the snapshot.
- [deleteItems(withIdentifiers:)](nsdiffabledatasourcesnapshotreference/deleteitems%28withidentifiers_%29.md): Deletes the items with the specified identifiers from the snapshot.
- [deleteSections(withIdentifiers:)](nsdiffabledatasourcesnapshotreference/deletesections%28withidentifiers_%29.md): Deletes the sections with the specified identifiers from the snapshot.

### Reordering items and sections

- [moveItem(withIdentifier:afterItemWithIdentifier:)](nsdiffabledatasourcesnapshotreference/moveitem%28withidentifier_afteritemwithidentifier_%29.md): Moves the item from its current position in the snapshot to the position immediately after the specified item.
- [moveItem(withIdentifier:beforeItemWithIdentifier:)](nsdiffabledatasourcesnapshotreference/moveitem%28withidentifier_beforeitemwithidentifier_%29.md): Moves the item from its current position in the snapshot to the position immediately before the specified item.
- [moveSection(withIdentifier:afterSectionWithIdentifier:)](nsdiffabledatasourcesnapshotreference/movesection%28withidentifier_aftersectionwithidentifier_%29.md): Moves the section from its current position in the snapshot to the position immediately after the specified section.
- [moveSection(withIdentifier:beforeSectionWithIdentifier:)](nsdiffabledatasourcesnapshotreference/movesection%28withidentifier_beforesectionwithidentifier_%29.md): Moves the section from its current position in the snapshot to the position immediately before the specified section.

### Reloading data

- [reconfigureItems(withIdentifiers:)](nsdiffabledatasourcesnapshotreference/reconfigureitems%28withidentifiers_%29.md): Updates the data for the items you specify in the snapshot, preserving the existing cells for the items.
- [reconfiguredItemIdentifiers](nsdiffabledatasourcesnapshotreference/reconfigureditemidentifiers.md): Identifies the items reconfigured by the changes to the snapshot.
- [reloadItems(withIdentifiers:)](nsdiffabledatasourcesnapshotreference/reloaditems%28withidentifiers_%29.md): Reloads the data within the specified items in the snapshot.
- [reloadedItemIdentifiers](nsdiffabledatasourcesnapshotreference/reloadeditemidentifiers.md): Identifies the items reloaded by the changes to the snapshot.
- [reloadSections(withIdentifiers:)](nsdiffabledatasourcesnapshotreference/reloadsections%28withidentifiers_%29.md): Reloads the data within the specified sections of the snapshot.
- [reloadedSectionIdentifiers](nsdiffabledatasourcesnapshotreference/reloadedsectionidentifiers.md): Identifies the sections reloaded by the changes to the snapshot.

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

# NSDiffableDataSourceSnapshot (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A representation of the state of the data in a view at a specific point in time.

## Declaration

```objectivec
@interface NSDiffableDataSourceSnapshot : NSObject
```

<a id="overview"></a>

## Overview

Diffable data sources use *snapshots* to provide data for collection views and table views. You use a snapshot to set up the initial state of the data that a view displays, and you use snapshots to reflect changes to the data that the view displays.

The data in a snapshot is made up of the sections and items you want to display, in the order that you determine. You configure what to display by adding, deleting, or moving the sections and items.

> **Important**

>  Each of your sections and items must have unique identifiers that conform to the [Hashable](https://developer.apple.com/documentation/swift/hashable) protocol. Use `struct` or `enum` Swift value types for your identifiers, including built-in types such as `Int`, `String`, or `UUID`. If you use a Swift `class` for your identifiers, your `class` must be a subclass of `NSObject`.

To display data in a view using a snapshot:

1. Create a snapshot and populate it with the state of the data you want to display.
2. Apply the snapshot to reflect the changes in the UI.

You can create and configure a snapshot in one of these ways:

- Create an empty snapshot, then append sections and items to it.
- Get the current snapshot by calling the diffable data source’s [snapshot()](uicollectionviewdiffabledatasource-9tqpa/snapshot%28%29.md) method, then modify that snapshot to reflect the new state of the data that you want to display.

For example, the following code creates an empty snapshot and populates it with a single section with three items. Then, the code applies the snapshot, animating the UI updates between the previous state and the new state.

```objc
// Create a snapshot.
NSDiffableDataSourceSnapshot<NSNumber *, NSUUID *> *snapshot = [[NSDiffableDataSourceSnapshot alloc] init];

// Populate the snapshot.
[snapshot appendSectionsWithIdentifiers:@[@0]];
[snapshot appendItemsWithIdentifiers:@[[NSUUID UUID], [NSUUID UUID], [NSUUID UUID]]];

// Apply the snapshot.
[self.dataSource applySnapshot:snapshot animatingDifferences:YES];
```

For more information, see the diffable data source types:

- [UICollectionViewDiffableDataSource](uicollectionviewdiffabledatasourcereference.md)
- [UITableViewDiffableDataSource](uitableviewdiffabledatasourcereference.md)
- [NSCollectionViewDiffableDataSource](https://developer.apple.com/documentation/appkit/nscollectionviewdiffabledatasource-axww)

> **Important**

> If you’re working in a Swift codebase, always use [NSDiffableDataSourceSnapshot](nsdiffabledatasourcesnapshot-swift.struct.md) instead.

Avoid using this type in Swift code. Only use this type to bridge from Objective-C code to Swift code by typecasting from a snapshot reference to a snapshot:

```swift
let snapshot = snapshotReference as NSDiffableDataSourceSnapshot<Int, UUID>
```

## Topics

### Creating a snapshot

- [appendSectionsWithIdentifiers:](nsdiffabledatasourcesnapshotreference/appendsections%28withidentifiers_%29.md): Adds the sections with the specified identifiers to the snapshot.
- [appendItemsWithIdentifiers:intoSectionWithIdentifier:](nsdiffabledatasourcesnapshotreference/appenditems%28withidentifiers_intosectionwithidentifier_%29.md): Adds the items with the specified identifiers to the specified section of the snapshot.
- [appendItemsWithIdentifiers:](nsdiffabledatasourcesnapshotreference/appenditems%28withidentifiers_%29.md): Adds the items with the specified identifiers to the last section of the snapshot.

### Getting item and section metrics

- [numberOfItems](nsdiffabledatasourcesnapshotreference/numberofitems.md): The number of items in the snapshot.
- [numberOfSections](nsdiffabledatasourcesnapshotreference/numberofsections.md): The number of sections in the snapshot.
- [numberOfItemsInSection:](nsdiffabledatasourcesnapshotreference/numberofitems%28insection_%29.md): Returns the number of items in the specified section of the snapshot.

### Identifying items and sections

- [itemIdentifiers](nsdiffabledatasourcesnapshotreference/itemidentifiers.md): The identifiers of all of the items in the snapshot.
- [sectionIdentifiers](nsdiffabledatasourcesnapshotreference/sectionidentifiers.md): The identifiers of all of the sections in the snapshot.
- [indexOfItemIdentifier:](nsdiffabledatasourcesnapshotreference/index%28ofitemidentifier_%29.md): Returns the index of the item in the snapshot with the specified identifier.
- [indexOfSectionIdentifier:](nsdiffabledatasourcesnapshotreference/index%28ofsectionidentifier_%29.md): Returns the index of the section of the snapshot with the specified identifier.
- [itemIdentifiersInSectionWithIdentifier:](nsdiffabledatasourcesnapshotreference/itemidentifiersinsection%28withidentifier_%29.md): Returns the identifiers of all of the items in the specified section of the snapshot.
- [sectionIdentifierForSectionContainingItemIdentifier:](nsdiffabledatasourcesnapshotreference/sectionidentifier%28forsectioncontainingitemidentifier_%29.md): Returns the identifier of the section containing the specified item in the snapshot.

### Inserting items and sections

- [insertItemsWithIdentifiers:afterItemWithIdentifier:](nsdiffabledatasourcesnapshotreference/insertitems%28withidentifiers_afteritemwithidentifier_%29.md): Inserts the provided items immediately after the item with the specified identifier in the snapshot.
- [insertItemsWithIdentifiers:beforeItemWithIdentifier:](nsdiffabledatasourcesnapshotreference/insertitems%28withidentifiers_beforeitemwithidentifier_%29.md): Inserts the provided items immediately before the item with the specified identifier in the snapshot.
- [insertSectionsWithIdentifiers:afterSectionWithIdentifier:](nsdiffabledatasourcesnapshotreference/insertsections%28withidentifiers_aftersectionwithidentifier_%29.md): Inserts the provided sections immediately after the section with the specified identifier in the snapshot.
- [insertSectionsWithIdentifiers:beforeSectionWithIdentifier:](nsdiffabledatasourcesnapshotreference/insertsections%28withidentifiers_beforesectionwithidentifier_%29.md): Inserts the provided sections immediately before the section with the specified identifier in the snapshot.

### Removing items and sections

- [deleteAllItems](nsdiffabledatasourcesnapshotreference/deleteallitems%28%29.md): Deletes all of the items from the snapshot.
- [deleteItemsWithIdentifiers:](nsdiffabledatasourcesnapshotreference/deleteitems%28withidentifiers_%29.md): Deletes the items with the specified identifiers from the snapshot.
- [deleteSectionsWithIdentifiers:](nsdiffabledatasourcesnapshotreference/deletesections%28withidentifiers_%29.md): Deletes the sections with the specified identifiers from the snapshot.

### Reordering items and sections

- [moveItemWithIdentifier:afterItemWithIdentifier:](nsdiffabledatasourcesnapshotreference/moveitem%28withidentifier_afteritemwithidentifier_%29.md): Moves the item from its current position in the snapshot to the position immediately after the specified item.
- [moveItemWithIdentifier:beforeItemWithIdentifier:](nsdiffabledatasourcesnapshotreference/moveitem%28withidentifier_beforeitemwithidentifier_%29.md): Moves the item from its current position in the snapshot to the position immediately before the specified item.
- [moveSectionWithIdentifier:afterSectionWithIdentifier:](nsdiffabledatasourcesnapshotreference/movesection%28withidentifier_aftersectionwithidentifier_%29.md): Moves the section from its current position in the snapshot to the position immediately after the specified section.
- [moveSectionWithIdentifier:beforeSectionWithIdentifier:](nsdiffabledatasourcesnapshotreference/movesection%28withidentifier_beforesectionwithidentifier_%29.md): Moves the section from its current position in the snapshot to the position immediately before the specified section.

### Reloading data

- [reconfigureItemsWithIdentifiers:](nsdiffabledatasourcesnapshotreference/reconfigureitems%28withidentifiers_%29.md): Updates the data for the items you specify in the snapshot, preserving the existing cells for the items.
- [reconfiguredItemIdentifiers](nsdiffabledatasourcesnapshotreference/reconfigureditemidentifiers.md): Identifies the items reconfigured by the changes to the snapshot.
- [reloadItemsWithIdentifiers:](nsdiffabledatasourcesnapshotreference/reloaditems%28withidentifiers_%29.md): Reloads the data within the specified items in the snapshot.
- [reloadedItemIdentifiers](nsdiffabledatasourcesnapshotreference/reloadeditemidentifiers.md): Identifies the items reloaded by the changes to the snapshot.
- [reloadSectionsWithIdentifiers:](nsdiffabledatasourcesnapshotreference/reloadsections%28withidentifiers_%29.md): Reloads the data within the specified sections of the snapshot.
- [reloadedSectionIdentifiers](nsdiffabledatasourcesnapshotreference/reloadedsectionidentifiers.md): Identifies the sections reloaded by the changes to the snapshot.

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
- [NSDiffableDataSourceSectionSnapshot](nsdiffabledatasourcesectionsnapshotreference.md): A representation of the state of the data in a layout section at a specific point in time.
- [UIRefreshControl](uirefreshcontrol.md): A standard control that can initiate the refreshing of a scroll view’s contents.
