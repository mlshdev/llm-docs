> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdragdelegate/collectionview(_:dragsessionallowsmoveoperation:)](https://developer.apple.com/documentation/uikit/uicollectionviewdragdelegate/collectionview(_:dragsessionallowsmoveoperation:))

# collectionView(\_:dragSessionAllowsMoveOperation:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value that determines whether a move operation is allowed for a drag session.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, dragSessionAllowsMoveOperation session: any UIDragSession) -> Bool
```

## Parameters

- `collectionView`: The collection view from which the drag operation originated.
- `session`: The drag session that’s active.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) to cancel the drag session if move is not allowed; otherwise, [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

If you don’t implement this method, the default return value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Controlling the drag session

- [collectionView(\_:dragSessionIsRestrictedToDraggingApplication:)](collectionview%28__dragsessionisrestrictedtodraggingapplication_%29.md): Returns a Boolean value that determines whether the source app and destination app must be the same for a drag session.

# collectionView:dragSessionAllowsMoveOperation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value that determines whether a move operation is allowed for a drag session.

## Declaration

```objectivec
- (BOOL) collectionView:(UICollectionView *) collectionView dragSessionAllowsMoveOperation:(id<UIDragSession>) session;
```

## Parameters

- `collectionView`: The collection view from which the drag operation originated.
- `session`: The drag session that’s active.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) to cancel the drag session if move is not allowed; otherwise, [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

If you don’t implement this method, the default return value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Controlling the drag session

- [collectionView:dragSessionIsRestrictedToDraggingApplication:](collectionview%28__dragsessionisrestrictedtodraggingapplication_%29.md): Returns a Boolean value that determines whether the source app and destination app must be the same for a drag session.
