> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasourcereference/init(collectionview:cellprovider:)](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasourcereference/init(collectionview:cellprovider:))

# init(collectionView:cellProvider:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a diffable data source with the specified cell provider, and connects it to the specified collection view.

## Declaration

```swift
init(collectionView: UICollectionView, cellProvider: @escaping UICollectionViewDiffableDataSourceReferenceCellProvider)
```

## Parameters

- `collectionView`: The initialized collection view object to connect to the diffable data source.
- `cellProvider`: A closure that creates and returns each of the cells for the collection view from the data the diffable data source provides.

<a id="Discussion"></a>

## Discussion

To connect a diffable data source to a collection view, you create the diffable data source using this initializer, passing in the collection view you want to associate with that data source. You also pass in a cell provider, where you configure each of your cells to determine how to display your data in the UI.

```objc
self.dataSource = [[UICollectionViewDiffableDataSource alloc] initWithCollectionView:self.collectionView cellProvider:^UICollectionViewCell *(UICollectionView *collectionView, NSIndexPath *indexPath, id item) {
    // configure and return cell
}];
```

## See Also

### Creating a diffable data source

- [UICollectionViewDiffableDataSourceReferenceCellProvider](../uicollectionviewdiffabledatasourcereferencecellprovider.md): A closure that configures and returns a cell for a collection view from its diffable data source.

# initWithCollectionView:cellProvider: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a diffable data source with the specified cell provider, and connects it to the specified collection view.

## Declaration

```objectivec
- (instancetype) initWithCollectionView:(UICollectionView *) collectionView cellProvider:(UICollectionViewDiffableDataSourceCellProvider) cellProvider;
```

## Parameters

- `collectionView`: The initialized collection view object to connect to the diffable data source.
- `cellProvider`: A closure that creates and returns each of the cells for the collection view from the data the diffable data source provides.

<a id="Discussion"></a>

## Discussion

To connect a diffable data source to a collection view, you create the diffable data source using this initializer, passing in the collection view you want to associate with that data source. You also pass in a cell provider, where you configure each of your cells to determine how to display your data in the UI.

```objc
self.dataSource = [[UICollectionViewDiffableDataSource alloc] initWithCollectionView:self.collectionView cellProvider:^UICollectionViewCell *(UICollectionView *collectionView, NSIndexPath *indexPath, id item) {
    // configure and return cell
}];
```

## See Also

### Creating a diffable data source

- [UICollectionViewDiffableDataSourceCellProvider](../uicollectionviewdiffabledatasourcereferencecellprovider.md): A closure that configures and returns a cell for a collection view from its diffable data source.
