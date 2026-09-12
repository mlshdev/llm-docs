> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdatasource/numberofsections(in:)](https://developer.apple.com/documentation/uikit/uicollectionviewdatasource/numberofsections(in:))

# numberOfSections(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks your data source object for the number of sections in the collection view.

## Declaration

```swift
optional func numberOfSections(in collectionView: UICollectionView) -> Int
```

## Parameters

- `collectionView`: The collection view requesting this information.

<a id="return-value"></a>

## Return Value

The number of sections in `collectionView`.

<a id="Discussion"></a>

## Discussion

If you don’t implement this method, the collection view uses a default value of 1.

## See Also

### Getting item and section metrics

- [collectionView(\_:numberOfItemsInSection:)](collectionview%28__numberofitemsinsection_%29.md): Asks your data source object for the number of items in the specified section.

# numberOfSectionsInCollectionView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks your data source object for the number of sections in the collection view.

## Declaration

```objectivec
- (NSInteger) numberOfSectionsInCollectionView:(UICollectionView *) collectionView;
```

## Parameters

- `collectionView`: The collection view requesting this information.

<a id="return-value"></a>

## Return Value

The number of sections in `collectionView`.

<a id="Discussion"></a>

## Discussion

If you don’t implement this method, the collection view uses a default value of 1.

## See Also

### Getting item and section metrics

- [collectionView:numberOfItemsInSection:](collectionview%28__numberofitemsinsection_%29.md): Asks your data source object for the number of items in the specified section.
