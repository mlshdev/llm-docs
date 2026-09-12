> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/dragdelegate](https://developer.apple.com/documentation/uikit/uicollectionview/dragdelegate)

# dragDelegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate object that manages the dragging of items from the collection view.

## Declaration

```swift
weak var dragDelegate: (any UICollectionViewDragDelegate)? { get set }
```

## Mentioned In

- [Supporting Drag and Drop in Collection Views](../supporting-drag-and-drop-in-collection-views.md)

## See Also

### Managing drag interactions

- [UICollectionViewDragDelegate](../uicollectionviewdragdelegate.md): The interface for initiating drags from a collection view.
- [hasActiveDrag](hasactivedrag.md): A Boolean value that indicates whether items were lifted from the collection view and have not yet been dropped.
- [dragInteractionEnabled](draginteractionenabled.md): A Boolean value that indicates whether the collection view supports dragging content.

# dragDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate object that manages the dragging of items from the collection view.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UICollectionViewDragDelegate> dragDelegate;
```

## Mentioned In

- [Supporting Drag and Drop in Collection Views](../supporting-drag-and-drop-in-collection-views.md)

## See Also

### Managing drag interactions

- [UICollectionViewDragDelegate](../uicollectionviewdragdelegate.md): The interface for initiating drags from a collection view.
- [hasActiveDrag](hasactivedrag.md): A Boolean value that indicates whether items were lifted from the collection view and have not yet been dropped.
- [dragInteractionEnabled](draginteractionenabled.md): A Boolean value that indicates whether the collection view supports dragging content.
