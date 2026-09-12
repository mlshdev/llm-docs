> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/dropdelegate](https://developer.apple.com/documentation/uikit/uitableview/dropdelegate)

# dropDelegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate object that manages the dropping of content into the table view.

## Declaration

```swift
weak var dropDelegate: (any UITableViewDropDelegate)? { get set }
```

## Mentioned In

- [Supporting drag and drop in table views](../supporting-drag-and-drop-in-table-views.md)

## See Also

### Managing drop interactions

- [UITableViewDropDelegate](../uitableviewdropdelegate.md): The interface for handling drops in a table view.
- [hasActiveDrop](hasactivedrop.md): A Boolean value that indicates whether the table view is currently tracking a drop session.

# dropDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate object that manages the dropping of content into the table view.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UITableViewDropDelegate> dropDelegate;
```

## Mentioned In

- [Supporting drag and drop in table views](../supporting-drag-and-drop-in-table-views.md)

## See Also

### Managing drop interactions

- [UITableViewDropDelegate](../uitableviewdropdelegate.md): The interface for handling drops in a table view.
- [hasActiveDrop](hasactivedrop.md): A Boolean value that indicates whether the table view is currently tracking a drop session.
