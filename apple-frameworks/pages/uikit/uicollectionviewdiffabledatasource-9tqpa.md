> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasource-9tqpa](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasource-9tqpa)

# UICollectionViewDiffableDataSource

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS

The object you use to manage data and provide cells for a collection view.

## Declaration

```swift
@MainActor @preconcurrency class UICollectionViewDiffableDataSource<SectionIdentifierType, ItemIdentifierType> where SectionIdentifierType : Hashable, SectionIdentifierType : Sendable, ItemIdentifierType : Hashable, ItemIdentifierType : Sendable
```

<a id="overview"></a>

## Overview

A *diffable data source* object is a specialized type of data source that works together with your collection view object. It provides the behavior you need to manage updates to your collection view’s data and UI in a simple, efficient way. It also conforms to the [UICollectionViewDataSource](uicollectionviewdatasource.md) protocol and provides implementations for all of the protocol’s methods.

To fill a collection view with data:

1. Connect a diffable data source to your collection view.
2. Implement a cell provider to configure your collection view’s cells.
3. Generate the current state of the data.
4. Display the data in the UI.

To connect a diffable data source to a collection view, you create the diffable data source using its [init(collectionView:cellProvider:)](uicollectionviewdiffabledatasource-9tqpa/init%28collectionview_cellprovider_%29.md) initializer, passing in the collection view you want to associate with that data source. You also pass in a cell provider, where you configure each of your cells to determine how to display your data in the UI.

```swift
dataSource = UICollectionViewDiffableDataSource<Int, UUID>(collectionView: collectionView) {
    (collectionView: UICollectionView, indexPath: IndexPath, itemIdentifier: UUID) -> UICollectionViewCell? in
    // Configure and return cell.
}
```

Then, you generate the current state of the data and display the data in the UI by constructing and applying a snapshot. For more information, see [NSDiffableDataSourceSnapshot](nsdiffabledatasourcesnapshot-swift.struct.md).

> **Important**

>  Don’t change the [dataSource](uitableview/datasource.md) on the collection view after you configure it with a diffable data source. If the collection view needs a new data source after you configure it initially, create and configure a new collection view and diffable data source.

## Topics

### Creating a diffable data source

- [init(collectionView:cellProvider:)](uicollectionviewdiffabledatasource-9tqpa/init%28collectionview_cellprovider_%29.md): Creates a diffable data source with the specified cell provider, and connects it to the specified collection view.
- [UICollectionViewDiffableDataSource.CellProvider](uicollectionviewdiffabledatasource-9tqpa/cellprovider.md): A closure that configures and returns a cell for a collection view from its diffable data source.

### Creating supplementary views

- [supplementaryViewProvider](uicollectionviewdiffabledatasource-9tqpa/supplementaryviewprovider-swift.property.md): The closure that configures and returns the collection view’s supplementary views, such as headers and footers, from the diffable data source.
- [UICollectionViewDiffableDataSource.SupplementaryViewProvider](uicollectionviewdiffabledatasource-9tqpa/supplementaryviewprovider-swift.typealias.md): A closure that configures and returns a collection view’s supplementary view, such as a header or footer, from a diffable data source.

### Identifying items

- [itemIdentifier(for:)](uicollectionviewdiffabledatasource-9tqpa/itemidentifier%28for_%29.md): Returns an identifier for the item at the specified index path in the collection view.
- [indexPath(for:)](uicollectionviewdiffabledatasource-9tqpa/indexpath%28for_%29.md): Returns an index path for the item with the specified identifier in the collection view.

### Identifying sections

- [sectionIdentifier(for:)](uicollectionviewdiffabledatasource-9tqpa/sectionidentifier%28for_%29.md): Returns an identifier for the section at the index you specify in the collection view.
- [index(for:)](uicollectionviewdiffabledatasource-9tqpa/index%28for_%29.md): Returns an index for the section with the identifier you specify in the collection view.

### Updating data

- [snapshot()](uicollectionviewdiffabledatasource-9tqpa/snapshot%28%29.md): Returns a representation of the current state of the data in the collection view.
- [apply(\_:animatingDifferences:)](uicollectionviewdiffabledatasource-9tqpa/apply%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes.
- [apply(\_:animatingDifferences:completion:)](uicollectionviewdiffabledatasource-9tqpa/apply%28__animatingdifferences_completion_%29.md): Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes and executing a completion handler.
- [applySnapshotUsingReloadData(\_:)](uicollectionviewdiffabledatasource-9tqpa/applysnapshotusingreloaddata%28__%29.md): Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes.
- [applySnapshotUsingReloadData(\_:completion:)](uicollectionviewdiffabledatasource-9tqpa/applysnapshotusingreloaddata%28__completion_%29.md): Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes, optionally executing a completion handler.

### Updating section data

- [snapshot(for:)](uicollectionviewdiffabledatasource-9tqpa/snapshot%28for_%29.md): Conforms when `SectionIdentifierType` conforms to `Hashable`, `SectionIdentifierType` conforms to `Sendable`, `ItemIdentifierType` conforms to `Hashable`, and `ItemIdentifierType` conforms to `Sendable`. Returns a representation of the current state of the data in the specified section of the collection view.
- [apply(\_:to:animatingDifferences:completion:)](uicollectionviewdiffabledatasource-9tqpa/apply%28__to_animatingdifferences_completion_%29.md): Conforms when `SectionIdentifierType` conforms to `Hashable`, `SectionIdentifierType` conforms to `Sendable`, `ItemIdentifierType` conforms to `Hashable`, and `ItemIdentifierType` conforms to `Sendable`. Updates the section UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes and executing a completion handler.
- [apply(\_:to:animatingDifferences:)](uicollectionviewdiffabledatasource-9tqpa/apply%28__to_animatingdifferences_%29.md): Conforms when `SectionIdentifierType` conforms to `Hashable`, `SectionIdentifierType` conforms to `Sendable`, `ItemIdentifierType` conforms to `Hashable`, and `ItemIdentifierType` conforms to `Sendable`. Updates the section UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes.

### Supporting reordering

- [reorderingHandlers](uicollectionviewdiffabledatasource-9tqpa/reorderinghandlers-swift.property.md): Conforms when `SectionIdentifierType` conforms to `Hashable`, `SectionIdentifierType` conforms to `Sendable`, `ItemIdentifierType` conforms to `Hashable`, and `ItemIdentifierType` conforms to `Sendable`. The diffable data source’s handlers for reordering items.
- [UICollectionViewDiffableDataSource.ReorderingHandlers](uicollectionviewdiffabledatasource-9tqpa/reorderinghandlers-swift.struct.md): Conforms when `SectionIdentifierType` conforms to `Hashable`, `SectionIdentifierType` conforms to `Sendable`, `ItemIdentifierType` conforms to `Hashable`, and `ItemIdentifierType` conforms to `Sendable`. Handlers for reordering items.
- [NSDiffableDataSourceTransaction](nsdiffabledatasourcetransaction-swift.struct.md): A transaction that describes the changes after reordering the items in the view.
- [NSDiffableDataSourceSectionTransaction](nsdiffabledatasourcesectiontransaction-swift.struct.md): A transaction that describes the changes after reordering the items in a section.

### Supporting expanding and collapsing

- [sectionSnapshotHandlers](uicollectionviewdiffabledatasource-9tqpa/sectionsnapshothandlers-swift.property.md): Conforms when `SectionIdentifierType` conforms to `Hashable`, `SectionIdentifierType` conforms to `Sendable`, `ItemIdentifierType` conforms to `Hashable`, and `ItemIdentifierType` conforms to `Sendable`. The diffable data source’s handlers for expanding and collapsing items.
- [UICollectionViewDiffableDataSource.SectionSnapshotHandlers](uicollectionviewdiffabledatasource-9tqpa/sectionsnapshothandlers-swift.struct.md): Conforms when `SectionIdentifierType` conforms to `Hashable`, `SectionIdentifierType` conforms to `Sendable`, `ItemIdentifierType` conforms to `Hashable`, and `ItemIdentifierType` conforms to `Sendable`. Handlers for expanding and collapsing items.

### Debugging a diffable data source

- [description()](uicollectionviewdiffabledatasource-9tqpa/description%28%29.md): Returns a string with a description of the diffable data source.

### Supporting bridging

- [UICollectionViewDiffableDataSourceReference](uicollectionviewdiffabledatasourcereference.md): The object you use to manage data and provide cells for a collection view.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UICollectionViewDataSource](uicollectionviewdatasource.md)

## See Also

### Data

- [Updating collection views using diffable data sources](updating-collection-views-using-diffable-data-sources.md): Streamline the display and update of data in a collection view using a diffable data source that contains identifiers.
- [Implementing modern collection views](implementing-modern-collection-views.md): Bring compositional layouts to your app and simplify updating your user interface with diffable data sources.
- [Building high-performance lists and collection views](building-high-performance-lists-and-collection-views.md): Improve the performance of lists and collections in your app with prefetching and image preparation.
- [UICollectionViewDataSource](uicollectionviewdatasource.md): The methods adopted by the object you use to manage data and provide cells for a collection view.
- [UICollectionViewDataSourcePrefetching](uicollectionviewdatasourceprefetching.md): A protocol that provides advance warning of the data requirements for a collection view, allowing the triggering of asynchronous data load operations.
- [NSDiffableDataSourceSnapshot](nsdiffabledatasourcesnapshot-swift.struct.md): A representation of the state of the data in a view at a specific point in time.
- [NSDiffableDataSourceSectionSnapshot](nsdiffabledatasourcesectionsnapshot-swift.struct.md): A representation of the state of the data in a layout section at a specific point in time.
- [UIRefreshControl](uirefreshcontrol.md): A standard control that can initiate the refreshing of a scroll view’s contents.
