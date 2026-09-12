> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/datasource](https://developer.apple.com/documentation/uikit/uicollectionview/datasource)

# dataSource (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The object that provides the data for the collection view.

## Declaration

```swift
weak var dataSource: (any UICollectionViewDataSource)? { get set }
```

<a id="Discussion"></a>

## Discussion

The data source must adopt the [UICollectionViewDataSource](../uicollectionviewdatasource.md) protocol. The collection view maintains a weak reference to the data source object.

## See Also

### Providing the collection view data

- [UICollectionViewDiffableDataSource](../uicollectionviewdiffabledatasource-9tqpa.md): The object you use to manage data and provide cells for a collection view.
- [UICollectionViewDataSource](../uicollectionviewdatasource.md): The methods adopted by the object you use to manage data and provide cells for a collection view.
- [Building high-performance lists and collection views](../building-high-performance-lists-and-collection-views.md): Improve the performance of lists and collections in your app with prefetching and image preparation.

# dataSource (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The object that provides the data for the collection view.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UICollectionViewDataSource> dataSource;
```

<a id="Discussion"></a>

## Discussion

The data source must adopt the [UICollectionViewDataSource](../uicollectionviewdatasource.md) protocol. The collection view maintains a weak reference to the data source object.

## See Also

### Providing the collection view data

- [UICollectionViewDiffableDataSource](../uicollectionviewdiffabledatasourcereference.md): The object you use to manage data and provide cells for a collection view.
- [UICollectionViewDataSource](../uicollectionviewdatasource.md): The methods adopted by the object you use to manage data and provide cells for a collection view.
- [Building high-performance lists and collection views](../building-high-performance-lists-and-collection-views.md): Improve the performance of lists and collections in your app with prefetching and image preparation.
