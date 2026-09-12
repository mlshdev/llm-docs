> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcell/dragstatedidchange(_:)](https://developer.apple.com/documentation/uikit/uicollectionviewcell/dragstatedidchange(_:))

# dragStateDidChange(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when the drag state of the cell changes.

## Declaration

```swift
func dragStateDidChange(_ dragState: UICollectionViewCell.DragState)
```

<a id="Discussion"></a>

## Discussion

Subclasses can override this method and use it to change the cell’s appearance during drag and drop operations. For example, you might use this method to hide or disable controls that you do not want to be visible while the cell is being dragged. You can also use this method to alter the disabled appearance of the cell that remains in the collection view at the original location of the drag.

## See Also

### Managing drag state changes

- [UICollectionViewCell.DragState](dragstate.md): Constants indicating the current state of the drag operation.

# dragStateDidChange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when the drag state of the cell changes.

## Declaration

```objectivec
- (void) dragStateDidChange:(UICollectionViewCellDragState) dragState;
```

<a id="Discussion"></a>

## Discussion

Subclasses can override this method and use it to change the cell’s appearance during drag and drop operations. For example, you might use this method to hide or disable controls that you do not want to be visible while the cell is being dragged. You can also use this method to alter the disabled appearance of the cell that remains in the collection view at the original location of the drag.

## See Also

### Managing drag state changes

- [UICollectionViewCellDragState](dragstate.md): Constants indicating the current state of the drag operation.
