> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/reorderingcadence-swift.property](https://developer.apple.com/documentation/uikit/uicollectionview/reorderingcadence-swift.property)

# reorderingCadence (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The speed at which items in the collection view are reordered to show potential drop locations.

## Declaration

```swift
var reorderingCadence: UICollectionView.ReorderingCadence { get set }
```

<a id="Discussion"></a>

## Discussion

The default value in this property is [UICollectionView.ReorderingCadence.immediate](reorderingcadence-swift.enum/immediate.md). You might specify a slower cadence when you want to prevent the reordering of items from being a distraction to the user. For example, you might slow it down if immediate reordering makes it more difficult to drop items at the correct location.

## See Also

### Managing drop interactions

- [dropDelegate](dropdelegate.md): The delegate object that manages the dropping of items into the collection view.
- [UICollectionViewDropDelegate](../uicollectionviewdropdelegate.md): The interface for handling drops in a collection view.
- [hasActiveDrop](hasactivedrop.md): A Boolean value that indicates whether the collection view is currently tracking a drop session.
- [UICollectionView.ReorderingCadence](reorderingcadence-swift.enum.md): Constants indicating the speed at which collection view items are reorganized during a drop.

# reorderingCadence (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The speed at which items in the collection view are reordered to show potential drop locations.

## Declaration

```objectivec
@property (nonatomic) UICollectionViewReorderingCadence reorderingCadence;
```

<a id="Discussion"></a>

## Discussion

The default value in this property is [UICollectionViewReorderingCadenceImmediate](reorderingcadence-swift.enum/immediate.md). You might specify a slower cadence when you want to prevent the reordering of items from being a distraction to the user. For example, you might slow it down if immediate reordering makes it more difficult to drop items at the correct location.

## See Also

### Managing drop interactions

- [dropDelegate](dropdelegate.md): The delegate object that manages the dropping of items into the collection view.
- [UICollectionViewDropDelegate](../uicollectionviewdropdelegate.md): The interface for handling drops in a collection view.
- [hasActiveDrop](hasactivedrop.md): A Boolean value that indicates whether the collection view is currently tracking a drop session.
- [UICollectionViewReorderingCadence](reorderingcadence-swift.enum.md): Constants indicating the speed at which collection view items are reorganized during a drop.
