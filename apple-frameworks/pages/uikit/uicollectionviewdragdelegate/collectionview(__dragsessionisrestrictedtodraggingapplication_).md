> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdragdelegate/collectionview(_:dragsessionisrestrictedtodraggingapplication:)](https://developer.apple.com/documentation/uikit/uicollectionviewdragdelegate/collectionview(_:dragsessionisrestrictedtodraggingapplication:))

# collectionView(\_:dragSessionIsRestrictedToDraggingApplication:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value that determines whether the source app and destination app must be the same for a drag session.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, dragSessionIsRestrictedToDraggingApplication session: any UIDragSession) -> Bool
```

## Parameters

- `collectionView`: The collection view from which the drag operation originated.
- `session`: The drag session that’s active.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when the source app and destination app should be the same — that is, the user is not allowed to drop the item on another app.

<a id="Discussion"></a>

## Discussion

If you don’t implement this method, the default return value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Controlling the drag session

- [collectionView(\_:dragSessionAllowsMoveOperation:)](collectionview%28__dragsessionallowsmoveoperation_%29.md): Returns a Boolean value that determines whether a move operation is allowed for a drag session.

# collectionView:dragSessionIsRestrictedToDraggingApplication: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value that determines whether the source app and destination app must be the same for a drag session.

## Declaration

```objectivec
- (BOOL) collectionView:(UICollectionView *) collectionView dragSessionIsRestrictedToDraggingApplication:(id<UIDragSession>) session;
```

## Parameters

- `collectionView`: The collection view from which the drag operation originated.
- `session`: The drag session that’s active.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when the source app and destination app should be the same — that is, the user is not allowed to drop the item on another app.

<a id="Discussion"></a>

## Discussion

If you don’t implement this method, the default return value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Controlling the drag session

- [collectionView:dragSessionAllowsMoveOperation:](collectionview%28__dragsessionallowsmoveoperation_%29.md): Returns a Boolean value that determines whether a move operation is allowed for a drag session.
