> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/dropdelegate](https://developer.apple.com/documentation/uikit/uicollectionview/dropdelegate)

# dropDelegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate object that manages the dropping of items into the collection view.

## Declaration

```swift
weak var dropDelegate: (any UICollectionViewDropDelegate)? { get set }
```

## Mentioned In

- [Supporting Drag and Drop in Collection Views](../supporting-drag-and-drop-in-collection-views.md)

## See Also

### Managing drop interactions

- [UICollectionViewDropDelegate](../uicollectionviewdropdelegate.md): The interface for handling drops in a collection view.
- [hasActiveDrop](hasactivedrop.md): A Boolean value that indicates whether the collection view is currently tracking a drop session.
- [reorderingCadence](reorderingcadence-swift.property.md): The speed at which items in the collection view are reordered to show potential drop locations.
- [UICollectionView.ReorderingCadence](reorderingcadence-swift.enum.md): Constants indicating the speed at which collection view items are reorganized during a drop.

# dropDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate object that manages the dropping of items into the collection view.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UICollectionViewDropDelegate> dropDelegate;
```

## Mentioned In

- [Supporting Drag and Drop in Collection Views](../supporting-drag-and-drop-in-collection-views.md)

## See Also

### Managing drop interactions

- [UICollectionViewDropDelegate](../uicollectionviewdropdelegate.md): The interface for handling drops in a collection view.
- [hasActiveDrop](hasactivedrop.md): A Boolean value that indicates whether the collection view is currently tracking a drop session.
- [reorderingCadence](reorderingcadence-swift.property.md): The speed at which items in the collection view are reordered to show potential drop locations.
- [UICollectionViewReorderingCadence](reorderingcadence-swift.enum.md): Constants indicating the speed at which collection view items are reorganized during a drop.
