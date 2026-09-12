> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/hasactivedrop](https://developer.apple.com/documentation/uikit/uicollectionview/hasactivedrop)

# hasActiveDrop (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the collection view is currently tracking a drop session.

## Declaration

```swift
var hasActiveDrop: Bool { get }
```

## See Also

### Managing drop interactions

- [dropDelegate](dropdelegate.md): The delegate object that manages the dropping of items into the collection view.
- [UICollectionViewDropDelegate](../uicollectionviewdropdelegate.md): The interface for handling drops in a collection view.
- [reorderingCadence](reorderingcadence-swift.property.md): The speed at which items in the collection view are reordered to show potential drop locations.
- [UICollectionView.ReorderingCadence](reorderingcadence-swift.enum.md): Constants indicating the speed at which collection view items are reorganized during a drop.

# hasActiveDrop (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the collection view is currently tracking a drop session.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasActiveDrop;
```

## See Also

### Managing drop interactions

- [dropDelegate](dropdelegate.md): The delegate object that manages the dropping of items into the collection view.
- [UICollectionViewDropDelegate](../uicollectionviewdropdelegate.md): The interface for handling drops in a collection view.
- [reorderingCadence](reorderingcadence-swift.property.md): The speed at which items in the collection view are reordered to show potential drop locations.
- [UICollectionViewReorderingCadence](reorderingcadence-swift.enum.md): Constants indicating the speed at which collection view items are reorganized during a drop.
