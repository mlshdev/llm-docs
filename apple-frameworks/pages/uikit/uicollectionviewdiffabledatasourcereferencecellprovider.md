> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasourcereferencecellprovider](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasourcereferencecellprovider)

# UICollectionViewDiffableDataSourceReferenceCellProvider (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A closure that configures and returns a cell for a collection view from its diffable data source.

## Declaration

```swift
typealias UICollectionViewDiffableDataSourceReferenceCellProvider = (UICollectionView, IndexPath, Any) -> UICollectionViewCell?
```

## Parameters

- `collectionView`: The collection view to configure this cell for.
- `indexPath`: The index path that specifies the location of the cell in the collection view.
- `identifier`: The identifier of the item for this cell.

<a id="return-value"></a>

## Return Value

A non-`nil` configured cell object. The cell provider must return a valid cell object to the collection view.

## See Also

### Creating a diffable data source

- [init(collectionView:cellProvider:)](uicollectionviewdiffabledatasourcereference/init%28collectionview_cellprovider_%29.md): Creates a diffable data source with the specified cell provider, and connects it to the specified collection view.

# UICollectionViewDiffableDataSourceCellProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A closure that configures and returns a cell for a collection view from its diffable data source.

## Declaration

```objectivec
typedef UICollectionViewCell *(^)(UICollectionView *, NSIndexPath *, id) UICollectionViewDiffableDataSourceCellProvider;
```

## Parameters

- `collectionView`: The collection view to configure this cell for.
- `indexPath`: The index path that specifies the location of the cell in the collection view.
- `identifier`: The identifier of the item for this cell.

<a id="return-value"></a>

## Return Value

A non-`nil` configured cell object. The cell provider must return a valid cell object to the collection view.

## See Also

### Creating a diffable data source

- [initWithCollectionView:cellProvider:](uicollectionviewdiffabledatasourcereference/init%28collectionview_cellprovider_%29.md): Creates a diffable data source with the specified cell provider, and connects it to the specified collection view.
