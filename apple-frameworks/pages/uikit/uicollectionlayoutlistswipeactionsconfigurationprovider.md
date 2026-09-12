> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionlayoutlistswipeactionsconfigurationprovider](https://developer.apple.com/documentation/uikit/uicollectionlayoutlistswipeactionsconfigurationprovider)

# UICollectionLayoutListSwipeActionsConfigurationProvider

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A closure that configures the swipe actions for a cell.

## Declaration

```objectivec
typedef UISwipeActionsConfiguration *(^)(NSIndexPath *) UICollectionLayoutListSwipeActionsConfigurationProvider;
```

## See Also

### Customizing swipe actions

- [leadingSwipeActionsConfigurationProvider](uicollectionlayoutlistconfiguration-c.class/leadingswipeactionsconfigurationprovider.md): The closure that provides the set of actions to display when swiping on the leading edge of the cell.
- [trailingSwipeActionsConfigurationProvider](uicollectionlayoutlistconfiguration-c.class/trailingswipeactionsconfigurationprovider.md): The closure that provides the set of actions to display when swiping on the trailing edge of the cell.
