> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdiffabledatasourcereference](https://developer.apple.com/documentation/appkit/nscollectionviewdiffabledatasourcereference)

# NSCollectionViewDiffableDataSourceReference (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

The object you use to manage data and provide items for a collection view.

## Declaration

```swift
class NSCollectionViewDiffableDataSourceReference
```

<a id="overview"></a>

## Overview

> **Important**

>  If you’re working in a Swift codebase, always use [NSCollectionViewDiffableDataSource](nscollectionviewdiffabledatasource-axww.md) instead of `NSCollectionViewDiffableDataSourceReference`.

A *diffable data source* object is a specialized type of data source that works together with your collection view object. It provides the behavior you need to manage updates to your collection view’s data and UI in a simple, efficient way. It also conforms to the [NSCollectionViewDataSource](nscollectionviewdatasource.md) protocol and provides implementations for all of the protocol’s methods.

To fill a collection view with data:

1. Connect a diffable data source to your collection view.
2. Implement an item provider to configure your collection view’s items.
3. Generate the current state of the data.
4. Display the data in the UI.

To connect a diffable data source to a collection view, you create the diffable data source using its [init(collectionView:itemProvider:)](nscollectionviewdiffabledatasourcereference/init%28collectionview_itemprovider_%29.md) initializer, passing in the collection view you want to associate with that data source. You also pass in an item provider, where you configure each of your items to determine how to display your data in the UI.

```swift
dataSource = NSCollectionViewDiffableDataSource<Int, UUID>(collectionView: collectionView) {
    (collectionView: NSCollectionView, indexPath: IndexPath, itemIdentifier: UUID) -> NSCollectionViewItem? in
    // configure and return item
}
```

Then, you generate the current state of the data and display the data in the UI by constructing and applying a snapshot. For more information, see [NSDiffableDataSourceSnapshotReference](nsdiffabledatasourcesnapshotreference.md).

## Topics

### Creating a Diffable Data Source

- [init(collectionView:itemProvider:)](nscollectionviewdiffabledatasourcereference/init%28collectionview_itemprovider_%29.md): Creates a diffable data source with the specified item provider, and connects it to the specified collection view.
- [NSCollectionViewDiffableDataSourceReferenceItemProvider](nscollectionviewdiffabledatasourcereferenceitemprovider.md): A closure that configures and returns an item for a collection view from its diffable data source.

### Creating Supplementary Views

- [supplementaryViewProvider](nscollectionviewdiffabledatasourcereference/supplementaryviewprovider.md): The closure that configures and returns the collection view’s supplementary views, such as headers and footers, from the diffable data source.
- [NSCollectionViewDiffableDataSourceReferenceSupplementaryViewProvider](nscollectionviewdiffabledatasourcereferencesupplementaryviewprovider.md): A closure that configures and returns a collection view’s supplementary view, such as a header or footer, from a diffable data source.

### Identifying Items

- [itemIdentifier(for:)](nscollectionviewdiffabledatasourcereference/itemidentifier%28for_%29.md): Returns an identifier for the item at the specified index path in the collection view.
- [indexPath(forItemIdentifier:)](nscollectionviewdiffabledatasourcereference/indexpath%28foritemidentifier_%29.md): Returns an index path for the item with the specified identifier in the collection view.

### Updating Data

- [snapshot()](nscollectionviewdiffabledatasourcereference/snapshot%28%29.md): Returns a representation of the current state of the data in the collection view.
- [applySnapshot(\_:animatingDifferences:)](nscollectionviewdiffabledatasourcereference/applysnapshot%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes.

### Supporting Protocol Requirements

- [Protocol Implementations](protocol-implementations.md): Access the diffable data source’s implementations of protocol methods.

### Supporting Bridging

- [NSCollectionViewDiffableDataSource](nscollectionviewdiffabledatasource-axww.md): The object you use to manage data and provide items for a collection view.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCollectionViewDataSource](nscollectionviewdatasource.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# NSCollectionViewDiffableDataSource (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

The object you use to manage data and provide items for a collection view.

## Declaration

```objectivec
@interface NSCollectionViewDiffableDataSource : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  If you’re working in a Swift codebase, always use [NSCollectionViewDiffableDataSource](nscollectionviewdiffabledatasource-axww.md) instead of `NSCollectionViewDiffableDataSourceReference`.

A *diffable data source* object is a specialized type of data source that works together with your collection view object. It provides the behavior you need to manage updates to your collection view’s data and UI in a simple, efficient way. It also conforms to the [NSCollectionViewDataSource](nscollectionviewdatasource.md) protocol and provides implementations for all of the protocol’s methods.

To fill a collection view with data:

1. Connect a diffable data source to your collection view.
2. Implement an item provider to configure your collection view’s items.
3. Generate the current state of the data.
4. Display the data in the UI.

To connect a diffable data source to a collection view, you create the diffable data source using its [initWithCollectionView:itemProvider:](nscollectionviewdiffabledatasourcereference/init%28collectionview_itemprovider_%29.md) initializer, passing in the collection view you want to associate with that data source. You also pass in an item provider, where you configure each of your items to determine how to display your data in the UI.

```swift
dataSource = NSCollectionViewDiffableDataSource<Int, UUID>(collectionView: collectionView) {
    (collectionView: NSCollectionView, indexPath: IndexPath, itemIdentifier: UUID) -> NSCollectionViewItem? in
    // configure and return item
}
```

Then, you generate the current state of the data and display the data in the UI by constructing and applying a snapshot. For more information, see [NSDiffableDataSourceSnapshot](nsdiffabledatasourcesnapshotreference.md).

## Topics

### Creating a Diffable Data Source

- [initWithCollectionView:itemProvider:](nscollectionviewdiffabledatasourcereference/init%28collectionview_itemprovider_%29.md): Creates a diffable data source with the specified item provider, and connects it to the specified collection view.
- [NSCollectionViewDiffableDataSourceItemProvider](nscollectionviewdiffabledatasourcereferenceitemprovider.md): A closure that configures and returns an item for a collection view from its diffable data source.

### Creating Supplementary Views

- [supplementaryViewProvider](nscollectionviewdiffabledatasourcereference/supplementaryviewprovider.md): The closure that configures and returns the collection view’s supplementary views, such as headers and footers, from the diffable data source.
- [NSCollectionViewDiffableDataSourceSupplementaryViewProvider](nscollectionviewdiffabledatasourcereferencesupplementaryviewprovider.md): A closure that configures and returns a collection view’s supplementary view, such as a header or footer, from a diffable data source.

### Identifying Items

- [itemIdentifierForIndexPath:](nscollectionviewdiffabledatasourcereference/itemidentifier%28for_%29.md): Returns an identifier for the item at the specified index path in the collection view.
- [indexPathForItemIdentifier:](nscollectionviewdiffabledatasourcereference/indexpath%28foritemidentifier_%29.md): Returns an index path for the item with the specified identifier in the collection view.

### Updating Data

- [snapshot](nscollectionviewdiffabledatasourcereference/snapshot%28%29.md): Returns a representation of the current state of the data in the collection view.
- [applySnapshot:animatingDifferences:](nscollectionviewdiffabledatasourcereference/applysnapshot%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCollectionViewDataSource](nscollectionviewdatasource.md)

## See Also

### Data

- [NSCollectionViewDataSource](nscollectionviewdatasource.md): A set of methods that a data source object implements to provide the information and view objects that a collection view requires to present content.
- [NSCollectionViewDelegate](nscollectionviewdelegate.md): A set of methods that you use to manage the behavior of a collection view.
- [NSDiffableDataSourceSnapshot](nsdiffabledatasourcesnapshotreference.md): A representation of the state of the data in a view at a specific point in time.
