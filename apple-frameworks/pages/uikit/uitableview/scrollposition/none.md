> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/scrollposition/none](https://developer.apple.com/documentation/uikit/uitableview/scrollposition/none)

# UITableView.ScrollPosition.none (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The table view scrolls the row of interest to be fully visible with a minimum of movement.

## Declaration

```swift
case none
```

<a id="Discussion"></a>

## Discussion

If the row is already fully visible, no scrolling occurs. For example, if the row is above the visible area, the behavior is identical to that specified by [UITableView.ScrollPosition.top](top.md). This is the default.

## See Also

### Constants

- [UITableView.ScrollPosition.top](top.md): The table view scrolls the row of interest to the top of the visible table view.
- [UITableView.ScrollPosition.middle](middle.md): The table view scrolls the row of interest to the middle of the visible table view.
- [UITableView.ScrollPosition.bottom](bottom.md): The table view scrolls the row of interest to the bottom of the visible table view.

# UITableViewScrollPositionNone (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The table view scrolls the row of interest to be fully visible with a minimum of movement.

## Declaration

```objectivec
UITableViewScrollPositionNone
```

<a id="Discussion"></a>

## Discussion

If the row is already fully visible, no scrolling occurs. For example, if the row is above the visible area, the behavior is identical to that specified by [UITableViewScrollPositionTop](top.md). This is the default.

## See Also

### Constants

- [UITableViewScrollPositionTop](top.md): The table view scrolls the row of interest to the top of the visible table view.
- [UITableViewScrollPositionMiddle](middle.md): The table view scrolls the row of interest to the middle of the visible table view.
- [UITableViewScrollPositionBottom](bottom.md): The table view scrolls the row of interest to the bottom of the visible table view.
