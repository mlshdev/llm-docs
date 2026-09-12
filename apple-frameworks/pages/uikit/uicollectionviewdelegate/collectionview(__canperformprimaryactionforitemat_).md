> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:canperformprimaryactionforitemat:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:canperformprimaryactionforitemat:))

# collectionView(\_:canPerformPrimaryActionForItemAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Asks the delegate whether to perform a primary action for the cell at the specified index path.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, canPerformPrimaryActionForItemAt indexPath: IndexPath) -> Bool
```

## Parameters

- `collectionView`: The collection view object asking whether to perform a primary action.
- `indexPath`: The index path of the cell.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the primary action can be performed; otherwise, [false](https://developer.apple.com/documentation/swift/false). If you don’t implement this method, the default return value is [true](https://developer.apple.com/documentation/swift/true) when the collection view isn’t in an editing state, and [false](https://developer.apple.com/documentation/swift/false) when it is.

<a id="Discussion"></a>

## Discussion

Primary actions allow you to distinguish between a distinct user action and a change in selection (like a focus change or other indirect selection change). A primary action occurs when a person selects a single cell without extending an existing selection.

UIKit calls this method before [collectionView(\_:performPrimaryActionForItemAt:)](collectionview%28__performprimaryactionforitemat_%29.md).

## See Also

### Managing actions for cells

- [collectionView(\_:performPrimaryActionForItemAt:)](collectionview%28__performprimaryactionforitemat_%29.md): Tells the delegate to perform the primary action for the cell at the specified index path.

# collectionView:canPerformPrimaryActionForItemAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Asks the delegate whether to perform a primary action for the cell at the specified index path.

## Declaration

```objectivec
- (BOOL) collectionView:(UICollectionView *) collectionView canPerformPrimaryActionForItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view object asking whether to perform a primary action.
- `indexPath`: The index path of the cell.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the primary action can be performed; otherwise, [false](https://developer.apple.com/documentation/swift/false). If you don’t implement this method, the default return value is [true](https://developer.apple.com/documentation/swift/true) when the collection view isn’t in an editing state, and [false](https://developer.apple.com/documentation/swift/false) when it is.

<a id="Discussion"></a>

## Discussion

Primary actions allow you to distinguish between a distinct user action and a change in selection (like a focus change or other indirect selection change). A primary action occurs when a person selects a single cell without extending an existing selection.

UIKit calls this method before [collectionView:performPrimaryActionForItemAtIndexPath:](collectionview%28__performprimaryactionforitemat_%29.md).

## See Also

### Managing actions for cells

- [collectionView:performPrimaryActionForItemAtIndexPath:](collectionview%28__performprimaryactionforitemat_%29.md): Tells the delegate to perform the primary action for the cell at the specified index path.
