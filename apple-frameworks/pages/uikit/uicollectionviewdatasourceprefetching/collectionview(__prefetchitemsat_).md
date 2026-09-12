> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdatasourceprefetching/collectionview(_:prefetchitemsat:)](https://developer.apple.com/documentation/uikit/uicollectionviewdatasourceprefetching/collectionview(_:prefetchitemsat:))

# collectionView(\_:prefetchItemsAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Tells your prefetch data source object to begin preparing data for the cells at the supplied index paths.

## Declaration

```swift
func collectionView(_ collectionView: UICollectionView, prefetchItemsAt indexPaths: [IndexPath])
```

## Parameters

- `collectionView`: The collection view issuing the prefetch request.
- `indexPaths`: The index paths that specify the locations of the items for which the data is to be prefetched.

<a id="Discussion"></a>

## Discussion

The collection view calls this method as the user scrolls, providing the index paths for cells it’s likely to display in the near future. Your implementation of this method is responsible for starting any expensive data loading processes. The data loading must be performed asynchronously, and the results made available to the [collectionView(\_:cellForItemAt:)](../uicollectionviewdatasource/collectionview%28__cellforitemat_%29.md) method on the collection view’s data source.

The collection view doesn’t call this method for cells it requires immediately, so your code must not rely on this method to load data. The order of the index paths provided represents the priority.

For further information about creating an asynchronous data loading task, see [Concurrency Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ConcurrencyProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008091).

## See Also

### Managing data prefetching

- [Prefetching collection view data](../prefetching-collection-view-data.md): Load data for collection view cells before they display.
- [collectionView(\_:cancelPrefetchingForItemsAt:)](collectionview%28__cancelprefetchingforitemsat_%29.md): Cancels a previously triggered data prefetch request.

# collectionView:prefetchItemsAtIndexPaths: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Tells your prefetch data source object to begin preparing data for the cells at the supplied index paths.

## Declaration

```objectivec
- (void) collectionView:(UICollectionView *) collectionView prefetchItemsAtIndexPaths:(NSArray<NSIndexPath *> *) indexPaths;
```

## Parameters

- `collectionView`: The collection view issuing the prefetch request.
- `indexPaths`: The index paths that specify the locations of the items for which the data is to be prefetched.

<a id="Discussion"></a>

## Discussion

The collection view calls this method as the user scrolls, providing the index paths for cells it’s likely to display in the near future. Your implementation of this method is responsible for starting any expensive data loading processes. The data loading must be performed asynchronously, and the results made available to the [collectionView:cellForItemAtIndexPath:](../uicollectionviewdatasource/collectionview%28__cellforitemat_%29.md) method on the collection view’s data source.

The collection view doesn’t call this method for cells it requires immediately, so your code must not rely on this method to load data. The order of the index paths provided represents the priority.

For further information about creating an asynchronous data loading task, see [Concurrency Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ConcurrencyProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008091).

## See Also

### Managing data prefetching

- [Prefetching collection view data](../prefetching-collection-view-data.md): Load data for collection view cells before they display.
- [collectionView:cancelPrefetchingForItemsAtIndexPaths:](collectionview%28__cancelprefetchingforitemsat_%29.md): Cancels a previously triggered data prefetch request.
