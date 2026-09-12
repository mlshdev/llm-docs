> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdropdelegate/collectionview(_:droppreviewparametersforitemat:)](https://developer.apple.com/documentation/uikit/uicollectionviewdropdelegate/collectionview(_:droppreviewparametersforitemat:))

# collectionView(\_:dropPreviewParametersForItemAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns custom information about how to display the item at the specified location during the drop.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, dropPreviewParametersForItemAt indexPath: IndexPath) -> UIDragPreviewParameters?
```

## Parameters

- `collectionView`: The collection view that’s the destination for the drop.
- `indexPath`: The index path in the collection view to insert the item.

<a id="return-value"></a>

## Return Value

Drop parameters that indicate how to display the item during the drop.

<a id="Discussion"></a>

## Discussion

Use this method to customize the appearance of the item during drops. If you don’t implement this method or if you implement it and return `nil`, the collection view uses the cell’s visible bounds to create the preview.

# collectionView:dropPreviewParametersForItemAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns custom information about how to display the item at the specified location during the drop.

## Declaration

```objectivec
- (UIDragPreviewParameters *) collectionView:(UICollectionView *) collectionView dropPreviewParametersForItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view that’s the destination for the drop.
- `indexPath`: The index path in the collection view to insert the item.

<a id="return-value"></a>

## Return Value

Drop parameters that indicate how to display the item during the drop.

<a id="Discussion"></a>

## Discussion

Use this method to customize the appearance of the item during drops. If you don’t implement this method or if you implement it and return `nil`, the collection view uses the cell’s visible bounds to create the preview.
