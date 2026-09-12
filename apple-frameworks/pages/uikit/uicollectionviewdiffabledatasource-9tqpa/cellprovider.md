> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/cellprovider](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/cellprovider)

# UICollectionViewDiffableDataSource.CellProvider

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS

A closure that configures and returns a cell for a collection view from its diffable data source.

## Declaration

```swift
typealias CellProvider = (UICollectionView, IndexPath, ItemIdentifierType) -> UICollectionViewCell?
```

## Parameters

- `collectionView`: The collection view to configure this cell for.
- `indexPath`: The index path that specifies the location of the cell in the collection view.
- `itemIdentifier`: An object, with a type that implements the [Hashable](https://developer.apple.com/documentation/swift/hashable) protocol, the data source uses to uniquely identify the item for this cell.

<a id="return-value"></a>

## Return Value

A non-`nil` configured cell object. The cell provider must return a valid cell object to the collection view.

<a id="Discussion"></a>

## Discussion

You use this closure to configure and return cells when creating a diffable data source using [init(collectionView:cellProvider:)](init%28collectionview_cellprovider_%29.md).

## See Also

### Related Documentation

- [UICollectionViewDiffableDataSourceReference](../uicollectionviewdiffabledatasourcereference.md): The object you use to manage data and provide cells for a collection view.
- [Updating collection views using diffable data sources](../updating-collection-views-using-diffable-data-sources.md): Streamline the display and update of data in a collection view using a diffable data source that contains identifiers.
- [Implementing modern collection views](../implementing-modern-collection-views.md): Bring compositional layouts to your app and simplify updating your user interface with diffable data sources.

### Creating a diffable data source

- [init(collectionView:cellProvider:)](init%28collectionview_cellprovider_%29.md): Creates a diffable data source with the specified cell provider, and connects it to the specified collection view.
