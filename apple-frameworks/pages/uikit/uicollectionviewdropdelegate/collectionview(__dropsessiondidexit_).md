> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdropdelegate/collectionview(_:dropsessiondidexit:)](https://developer.apple.com/documentation/uikit/uicollectionviewdropdelegate/collectionview(_:dropsessiondidexit:))

# collectionView(\_:dropSessionDidExit:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies you when dragged content exits the collection view’s bounds rectangle.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, dropSessionDidExit session: any UIDropSession)
```

## Parameters

- `collectionView`: The collection view that was tracking the dragged content.
- `session`: The drop session object containing information about the type of data being dragged.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when dragged content exits the bounds rectangle of the specified collection view. The method isn’t called again until the dragged content enters the collection view’s bounds (triggering a call to the [collectionView(\_:dropSessionDidEnter:)](collectionview%28__dropsessiondidenter_%29.md) method) and exits again.

Use this method to clean up any state information that you configured in your [collectionView(\_:dropSessionDidEnter:)](collectionview%28__dropsessiondidenter_%29.md) method.

## See Also

### Tracking the drag movements

- [collectionView(\_:dropSessionDidUpdate:withDestinationIndexPath:)](collectionview%28__dropsessiondidupdate_withdestinationindexpath_%29.md): Tells your delegate that the position of the dragged data over the collection view changed.
- [collectionView(\_:dropSessionDidEnter:)](collectionview%28__dropsessiondidenter_%29.md): Notifies you when dragged content enters the collection view’s bounds rectangle.
- [collectionView(\_:dropSessionDidEnd:)](collectionview%28__dropsessiondidend_%29.md): Notifies you when the drag operation ends.

# collectionView:dropSessionDidExit: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies you when dragged content exits the collection view’s bounds rectangle.

## Declaration

```objectivec
- (void) collectionView:(UICollectionView *) collectionView dropSessionDidExit:(id<UIDropSession>) session;
```

## Parameters

- `collectionView`: The collection view that was tracking the dragged content.
- `session`: The drop session object containing information about the type of data being dragged.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when dragged content exits the bounds rectangle of the specified collection view. The method isn’t called again until the dragged content enters the collection view’s bounds (triggering a call to the [collectionView:dropSessionDidEnter:](collectionview%28__dropsessiondidenter_%29.md) method) and exits again.

Use this method to clean up any state information that you configured in your [collectionView:dropSessionDidEnter:](collectionview%28__dropsessiondidenter_%29.md) method.

## See Also

### Tracking the drag movements

- [collectionView:dropSessionDidUpdate:withDestinationIndexPath:](collectionview%28__dropsessiondidupdate_withdestinationindexpath_%29.md): Tells your delegate that the position of the dragged data over the collection view changed.
- [collectionView:dropSessionDidEnter:](collectionview%28__dropsessiondidenter_%29.md): Notifies you when dragged content enters the collection view’s bounds rectangle.
- [collectionView:dropSessionDidEnd:](collectionview%28__dropsessiondidend_%29.md): Notifies you when the drag operation ends.
