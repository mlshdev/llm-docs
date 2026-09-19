> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicollectionlayoutlistconfiguration-swift.struct/swipeactionsconfigurationprovider

# UICollectionLayoutListConfiguration.SwipeActionsConfigurationProvider

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS

A closure that configures the swipe actions for a cell.

## Declaration

```swift
typealias SwipeActionsConfigurationProvider = (IndexPath) -> UISwipeActionsConfiguration?
```

## See Also

### Customizing swipe actions

- [leadingSwipeActionsConfigurationProvider](leadingswipeactionsconfigurationprovider.md): The closure that provides the set of actions to display when swiping on the leading edge of the cell.
- [trailingSwipeActionsConfigurationProvider](trailingswipeactionsconfigurationprovider.md): The closure that provides the set of actions to display when swiping on the trailing edge of the cell.
