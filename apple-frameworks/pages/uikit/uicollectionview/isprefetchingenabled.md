> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/isprefetchingenabled](https://developer.apple.com/documentation/uikit/uicollectionview/isprefetchingenabled)

# isPrefetchingEnabled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether cell and data prefetching are enabled.

## Declaration

```swift
var isPrefetchingEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), the collection view requests cells in advance of when they will be displayed, spreading the rendering over multiple layout passes. When [false](https://developer.apple.com/documentation/swift/false), the cells are requested as they are needed for display, often with multiple cells being requested in the same render loop. Setting this property to [false](https://developer.apple.com/documentation/swift/false) also disables data prefetching. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  When prefetching is enabled the [collectionView(\_:cellForItemAt:)](../uicollectionviewdatasource/collectionview%28__cellforitemat_%29.md) method on the collection view delegate is called in advance of when the cell is required. To avoid inconsistencies in the visual appearance, use the [collectionView(\_:willDisplay:forItemAt:)](../uicollectionviewdelegate/collectionview%28__willdisplay_foritemat_%29.md) delegate method to update the cell to reflect visual state such as selection.

## See Also

### Prefetching collection view cells and data

- [prefetchDataSource](prefetchdatasource.md): The object that acts as the prefetching data source for the collection view, receiving notifications of upcoming cell data requirements.
- [UICollectionViewDataSourcePrefetching](../uicollectionviewdatasourceprefetching.md): A protocol that provides advance warning of the data requirements for a collection view, allowing the triggering of asynchronous data load operations.

# prefetchingEnabled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether cell and data prefetching are enabled.

## Declaration

```objectivec
@property (nonatomic, getter=isPrefetchingEnabled) BOOL prefetchingEnabled;
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), the collection view requests cells in advance of when they will be displayed, spreading the rendering over multiple layout passes. When [false](https://developer.apple.com/documentation/swift/false), the cells are requested as they are needed for display, often with multiple cells being requested in the same render loop. Setting this property to [false](https://developer.apple.com/documentation/swift/false) also disables data prefetching. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  When prefetching is enabled the [collectionView:cellForItemAtIndexPath:](../uicollectionviewdatasource/collectionview%28__cellforitemat_%29.md) method on the collection view delegate is called in advance of when the cell is required. To avoid inconsistencies in the visual appearance, use the [collectionView:willDisplayCell:forItemAtIndexPath:](../uicollectionviewdelegate/collectionview%28__willdisplay_foritemat_%29.md) delegate method to update the cell to reflect visual state such as selection.

## See Also

### Prefetching collection view cells and data

- [prefetchDataSource](prefetchdatasource.md): The object that acts as the prefetching data source for the collection view, receiving notifications of upcoming cell data requirements.
- [UICollectionViewDataSourcePrefetching](../uicollectionviewdatasourceprefetching.md): A protocol that provides advance warning of the data requirements for a collection view, allowing the triggering of asynchronous data load operations.
