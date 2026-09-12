> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/init(collectionview:cellprovider:)](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/init(collectionview:cellprovider:))

# init(collectionView:cellProvider:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS

Creates a diffable data source with the specified cell provider, and connects it to the specified collection view.

## Declaration

```swift
@MainActor @preconcurrency init(collectionView: UICollectionView, cellProvider: @escaping UICollectionViewDiffableDataSource<SectionIdentifierType, ItemIdentifierType>.CellProvider)
```

## Parameters

- `collectionView`: The initialized collection view object to connect to the diffable data source.
- `cellProvider`: A closure that creates and returns each of the cells for the collection view from the data the diffable data source provides.

<a id="Discussion"></a>

## Discussion

To connect a diffable data source to a collection view, you create the diffable data source using this initializer, passing in the collection view you want to associate with that data source. You also pass in a cell provider, where you configure each of your cells to determine how to display your data in the UI.

```swift
dataSource = UICollectionViewDiffableDataSource<Int, UUID>(collectionView: collectionView) {
    (collectionView: UICollectionView, indexPath: IndexPath, itemIdentifier: UUID) -> UICollectionViewCell? in
    // configure and return cell
}
```

## See Also

### Creating a diffable data source

- [UICollectionViewDiffableDataSource.CellProvider](cellprovider.md): A closure that configures and returns a cell for a collection view from its diffable data source.
