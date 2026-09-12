> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:performprimaryactionforitemat:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:performprimaryactionforitemat:))

# collectionView(\_:performPrimaryActionForItemAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Tells the delegate to perform the primary action for the cell at the specified index path.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, performPrimaryActionForItemAt indexPath: IndexPath)
```

## Parameters

- `collectionView`: The collection view object on which to perform the primary action.
- `indexPath`: The index path of the cell.

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

Primary actions allow you to distinguish between a distinct user action and a change in selection (like a focus change or other indirect selection change). A primary action occurs when a person selects a single cell without extending an existing selection.

UIKit calls this method after [collectionView(\_:shouldSelectItemAt:)](collectionview%28__shouldselectitemat_%29.md) and [collectionView(\_:didSelectItemAt:)](collectionview%28__didselectitemat_%29.md), regardless of whether the cell selection state changes. Use [collectionView(\_:didSelectItemAt:)](collectionview%28__didselectitemat_%29.md) to update the state of the current view controller (like its buttons, title, and so on), and use [collectionView(\_:performPrimaryActionForItemAt:)](collectionview%28__performprimaryactionforitemat_%29.md) for actions like navigation or showing another split view column.

If [collectionView(\_:shouldSelectItemAt:)](collectionview%28__shouldselectitemat_%29.md) returns [true](https://developer.apple.com/documentation/swift/true) to allow selection for the cell at `indexPath`, only that cell has selection when the system calls this method. If [collectionView(\_:shouldSelectItemAt:)](collectionview%28__shouldselectitemat_%29.md) returns [false](https://developer.apple.com/documentation/swift/false), the system preserves the existing cell selection in the collection view. You can use this behavior to perform primary actions on nonselectable, button-style cells without changing the selection.

## See Also

### Managing actions for cells

- [collectionView(\_:canPerformPrimaryActionForItemAt:)](collectionview%28__canperformprimaryactionforitemat_%29.md): Asks the delegate whether to perform a primary action for the cell at the specified index path.

# collectionView:performPrimaryActionForItemAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Tells the delegate to perform the primary action for the cell at the specified index path.

## Declaration

```objectivec
- (void) collectionView:(UICollectionView *) collectionView performPrimaryActionForItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view object on which to perform the primary action.
- `indexPath`: The index path of the cell.

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

Primary actions allow you to distinguish between a distinct user action and a change in selection (like a focus change or other indirect selection change). A primary action occurs when a person selects a single cell without extending an existing selection.

UIKit calls this method after [collectionView:shouldSelectItemAtIndexPath:](collectionview%28__shouldselectitemat_%29.md) and [collectionView:didSelectItemAtIndexPath:](collectionview%28__didselectitemat_%29.md), regardless of whether the cell selection state changes. Use [collectionView:didSelectItemAtIndexPath:](collectionview%28__didselectitemat_%29.md) to update the state of the current view controller (like its buttons, title, and so on), and use [collectionView:performPrimaryActionForItemAtIndexPath:](collectionview%28__performprimaryactionforitemat_%29.md) for actions like navigation or showing another split view column.

If [collectionView:shouldSelectItemAtIndexPath:](collectionview%28__shouldselectitemat_%29.md) returns [true](https://developer.apple.com/documentation/swift/true) to allow selection for the cell at `indexPath`, only that cell has selection when the system calls this method. If [collectionView:shouldSelectItemAtIndexPath:](collectionview%28__shouldselectitemat_%29.md) returns [false](https://developer.apple.com/documentation/swift/false), the system preserves the existing cell selection in the collection view. You can use this behavior to perform primary actions on nonselectable, button-style cells without changing the selection.

## See Also

### Managing actions for cells

- [collectionView:canPerformPrimaryActionForItemAtIndexPath:](collectionview%28__canperformprimaryactionforitemat_%29.md): Asks the delegate whether to perform a primary action for the cell at the specified index path.
