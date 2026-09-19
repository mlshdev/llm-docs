> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitableview/dragdelegate

# dragDelegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate object that manages the dragging of items from the table view.

## Declaration

```swift
weak var dragDelegate: (any UITableViewDragDelegate)? { get set }
```

## Mentioned In

- [Supporting drag and drop in table views](../supporting-drag-and-drop-in-table-views.md)

## See Also

### Managing drag interactions

- [UITableViewDragDelegate](../uitableviewdragdelegate.md): The interface for initiating drags from a table view.
- [hasActiveDrag](hasactivedrag.md): A Boolean value that indicates whether the table view is currently tracking a drag session.
- [dragInteractionEnabled](draginteractionenabled.md): A Boolean value that indicates whether the table view supports dragging content.

# dragDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate object that manages the dragging of items from the table view.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UITableViewDragDelegate> dragDelegate;
```

## Mentioned In

- [Supporting drag and drop in table views](../supporting-drag-and-drop-in-table-views.md)

## See Also

### Managing drag interactions

- [UITableViewDragDelegate](../uitableviewdragdelegate.md): The interface for initiating drags from a table view.
- [hasActiveDrag](hasactivedrag.md): A Boolean value that indicates whether the table view is currently tracking a drag session.
- [dragInteractionEnabled](draginteractionenabled.md): A Boolean value that indicates whether the table view supports dragging content.
