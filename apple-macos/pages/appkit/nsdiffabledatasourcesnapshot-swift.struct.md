> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct](https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct)

# NSDiffableDataSourceSnapshot

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.15.1+

A representation of the state of the data in a view at a specific point in time.

## Declaration

```swift
struct NSDiffableDataSourceSnapshot<SectionIdentifierType, ItemIdentifierType> where SectionIdentifierType : Hashable, ItemIdentifierType : Hashable
```

<a id="overview"></a>

## Overview

Diffable data sources use *snapshots* to provide data for collection views and table views. You use a snapshot to set up the initial state of the data that a view displays, and you use snapshots to reflect changes to the data that the view displays.

The data in a snapshot is made up of the sections and items you want to display, in the order you that you determine. You configure what to display by adding, deleting, or moving the sections and items.

> **Important**

>  Each of your sections and items must have unique identifiers that conform to the [Hashable](https://developer.apple.com/documentation/swift/hashable) protocol. Use `struct` or `enum` Swift value types for your identifiers, including built-in types such as `Int`, `String`, or `UUID`. If you use a Swift `class` for your identifiers, your `class` must be a subclass of `NSObject`.

To display data in a view using a snapshot:

1. Create a snapshot and populate it with the state of the data you want to display.
2. Apply the snapshot to reflect the changes in the UI.

You can create and configure a snapshot in one of these ways:

- Create an empty snapshot, then append sections and items to it.
- Get the current snapshot by calling the diffable data source’s [snapshot()](nscollectionviewdiffabledatasource-axww/snapshot%28%29.md) method, then modify that snapshot to reflect the new state of the data that you want to display.

For example, the following code creates an empty snapshot and populates it with a single section with three items. Then, the code applies the snapshot, animating the UI updates between the previous state and the new state.

```swift
// Create a snapshot.
var snapshot = NSDiffableDataSourceSnapshot<Int, UUID>()        

// Populate the snapshot.
snapshot.appendSections([0])
snapshot.appendItems([UUID(), UUID(), UUID()])

// Apply the snapshot.
dataSource.apply(snapshot, animatingDifferences: true)
```

For more information, see the diffable data source types:

- [UICollectionViewDiffableDataSource](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasource-9tqpa)
- [UITableViewDiffableDataSource](https://developer.apple.com/documentation/uikit/uitableviewdiffabledatasource-2euir)
- [NSCollectionViewDiffableDataSourceReference](nscollectionviewdiffabledatasourcereference.md)

<a id="Bridging"></a>

### Bridging

You can bridge from an [NSDiffableDataSourceSnapshotReference](nsdiffabledatasourcesnapshotreference.md) object to this type:

```swift
let snapshot = snapshotReference as NSDiffableDataSourceSnapshot<Int, UUID>
```

## Topics

### Creating a Snapshot

- [init()](nsdiffabledatasourcesnapshot-swift.struct/init%28%29.md): Creates an empty snapshot.
- [appendSections(\_:)](nsdiffabledatasourcesnapshot-swift.struct/appendsections%28__%29.md): Adds the sections with the specified identifiers to the snapshot.
- [appendItems(\_:toSection:)](nsdiffabledatasourcesnapshot-swift.struct/appenditems%28__tosection_%29.md): Adds the items with the specified identifiers to the specified section of the snapshot.

### Getting Item and Section Metrics

- [numberOfItems](nsdiffabledatasourcesnapshot-swift.struct/numberofitems.md): The number of items in the snapshot.
- [numberOfSections](nsdiffabledatasourcesnapshot-swift.struct/numberofsections.md): The number of sections in the snapshot.
- [numberOfItems(inSection:)](nsdiffabledatasourcesnapshot-swift.struct/numberofitems%28insection_%29.md): Returns the number of items in the specified section of the snapshot.

### Identifying Items and Sections

- [itemIdentifiers](nsdiffabledatasourcesnapshot-swift.struct/itemidentifiers.md): The identifiers of all of the items in the snapshot.
- [sectionIdentifiers](nsdiffabledatasourcesnapshot-swift.struct/sectionidentifiers.md): The identifiers of all of the sections in the snapshot.
- [indexOfItem(\_:)](nsdiffabledatasourcesnapshot-swift.struct/indexofitem%28__%29.md): Returns the index of the item in the snapshot with the specified identifier.
- [indexOfSection(\_:)](nsdiffabledatasourcesnapshot-swift.struct/indexofsection%28__%29.md): Returns the index of the section of the snapshot with the specified identifier.
- [itemIdentifiers(inSection:)](nsdiffabledatasourcesnapshot-swift.struct/itemidentifiers%28insection_%29.md): Returns the identifiers of all of the items in the specified section of the snapshot.
- [sectionIdentifier(containingItem:)](nsdiffabledatasourcesnapshot-swift.struct/sectionidentifier%28containingitem_%29.md): Returns the identifier of the section containing the specified item in the snapshot.

### Inserting Items and Sections

- [insertItems(\_:afterItem:)](nsdiffabledatasourcesnapshot-swift.struct/insertitems%28__afteritem_%29.md): Inserts the provided items immediately after the item with the specified identifier in the snapshot.
- [insertItems(\_:beforeItem:)](nsdiffabledatasourcesnapshot-swift.struct/insertitems%28__beforeitem_%29.md): Inserts the provided items immediately before the item with the specified identifier in the snapshot.
- [insertSections(\_:afterSection:)](nsdiffabledatasourcesnapshot-swift.struct/insertsections%28__aftersection_%29.md): Inserts the provided sections immediately after the section with the specified identifier in the snapshot.
- [insertSections(\_:beforeSection:)](nsdiffabledatasourcesnapshot-swift.struct/insertsections%28__beforesection_%29.md): Inserts the provided sections immediately before the section with the specified identifier in the snapshot.

### Removing Items and Sections

- [deleteAllItems()](nsdiffabledatasourcesnapshot-swift.struct/deleteallitems%28%29.md): Deletes all of the items from the snapshot.
- [deleteItems(\_:)](nsdiffabledatasourcesnapshot-swift.struct/deleteitems%28__%29.md): Deletes the items with the specified identifiers from the snapshot.
- [deleteSections(\_:)](nsdiffabledatasourcesnapshot-swift.struct/deletesections%28__%29.md): Deletes the sections with the specified identifiers from the snapshot.

### Reordering Items and Sections

- [moveItem(\_:afterItem:)](nsdiffabledatasourcesnapshot-swift.struct/moveitem%28__afteritem_%29.md): Moves the item from its current position in the snapshot to the position immediately after the specified item.
- [moveItem(\_:beforeItem:)](nsdiffabledatasourcesnapshot-swift.struct/moveitem%28__beforeitem_%29.md): Moves the item from its current position in the snapshot to the position immediately before the specified item.
- [moveSection(\_:afterSection:)](nsdiffabledatasourcesnapshot-swift.struct/movesection%28__aftersection_%29.md): Moves the section from its current position in the snapshot to the position immediately after the specified section.
- [moveSection(\_:beforeSection:)](nsdiffabledatasourcesnapshot-swift.struct/movesection%28__beforesection_%29.md): Moves the section from its current position in the snapshot to the position immediately before the specified section.

### Reloading Data

- [reloadItems(\_:)](nsdiffabledatasourcesnapshot-swift.struct/reloaditems%28__%29.md): Reloads the data within the specified items in the snapshot.
- [reloadSections(\_:)](nsdiffabledatasourcesnapshot-swift.struct/reloadsections%28__%29.md): Reloads the data within the specified sections of the snapshot.

### Supporting Bridging

- [NSDiffableDataSourceSnapshotReference](nsdiffabledatasourcesnapshotreference.md): A representation of the state of the data in a view at a specific point in time.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Data

- [NSCollectionViewDataSource](nscollectionviewdatasource.md): A set of methods that a data source object implements to provide the information and view objects that a collection view requires to present content.
- [NSCollectionViewDelegate](nscollectionviewdelegate.md): A set of methods that you use to manage the behavior of a collection view.
- [NSCollectionViewDiffableDataSource](nscollectionviewdiffabledatasource-axww.md): The object you use to manage data and provide items for a collection view.
