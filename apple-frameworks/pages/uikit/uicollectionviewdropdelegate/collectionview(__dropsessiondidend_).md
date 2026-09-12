> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdropdelegate/collectionview(_:dropsessiondidend:)](https://developer.apple.com/documentation/uikit/uicollectionviewdropdelegate/collectionview(_:dropsessiondidend:))

# collectionView(\_:dropSessionDidEnd:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies you when the drag operation ends.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, dropSessionDidEnd session: any UIDropSession)
```

## Parameters

- `collectionView`: The collection view that’s tracking the dragged content.
- `session`: The drop session object containing information about the data being dragged.

<a id="Discussion"></a>

## Discussion

The collection view calls this method at the conclusion of a drag that was over the collection view at one point. Use it to clean up any state information that you used to handle the drag. This method is called regardless of whether the data was actually dropped onto the collection view.

## See Also

### Tracking the drag movements

- [collectionView(\_:dropSessionDidUpdate:withDestinationIndexPath:)](collectionview%28__dropsessiondidupdate_withdestinationindexpath_%29.md): Tells your delegate that the position of the dragged data over the collection view changed.
- [collectionView(\_:dropSessionDidEnter:)](collectionview%28__dropsessiondidenter_%29.md): Notifies you when dragged content enters the collection view’s bounds rectangle.
- [collectionView(\_:dropSessionDidExit:)](collectionview%28__dropsessiondidexit_%29.md): Notifies you when dragged content exits the collection view’s bounds rectangle.

# collectionView:dropSessionDidEnd: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies you when the drag operation ends.

## Declaration

```objectivec
- (void) collectionView:(UICollectionView *) collectionView dropSessionDidEnd:(id<UIDropSession>) session;
```

## Parameters

- `collectionView`: The collection view that’s tracking the dragged content.
- `session`: The drop session object containing information about the data being dragged.

<a id="Discussion"></a>

## Discussion

The collection view calls this method at the conclusion of a drag that was over the collection view at one point. Use it to clean up any state information that you used to handle the drag. This method is called regardless of whether the data was actually dropped onto the collection view.

## See Also

### Tracking the drag movements

- [collectionView:dropSessionDidUpdate:withDestinationIndexPath:](collectionview%28__dropsessiondidupdate_withdestinationindexpath_%29.md): Tells your delegate that the position of the dragged data over the collection view changed.
- [collectionView:dropSessionDidEnter:](collectionview%28__dropsessiondidenter_%29.md): Notifies you when dragged content enters the collection view’s bounds rectangle.
- [collectionView:dropSessionDidExit:](collectionview%28__dropsessiondidexit_%29.md): Notifies you when dragged content exits the collection view’s bounds rectangle.
