> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/scrollposition](https://developer.apple.com/documentation/uikit/uitableview/scrollposition)

# UITableView.ScrollPosition (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The position in the table view (top, middle, bottom) to scroll a specified row to.

## Declaration

```swift
enum ScrollPosition
```

<a id="overview"></a>

## Overview

You set the scroll position through a parameter of the [selectRow(at:animated:scrollPosition:)](selectrow%28at_animated_scrollposition_%29.md), [scrollToNearestSelectedRow(at:animated:)](scrolltonearestselectedrow%28at_animated_%29.md), [cellForRow(at:)](cellforrow%28at_%29.md), and [indexPathForSelectedRow](indexpathforselectedrow.md) methods.

## Topics

### Constants

- [UITableView.ScrollPosition.none](scrollposition/none.md): The table view scrolls the row of interest to be fully visible with a minimum of movement.
- [UITableView.ScrollPosition.top](scrollposition/top.md): The table view scrolls the row of interest to the top of the visible table view.
- [UITableView.ScrollPosition.middle](scrollposition/middle.md): The table view scrolls the row of interest to the middle of the visible table view.
- [UITableView.ScrollPosition.bottom](scrollposition/bottom.md): The table view scrolls the row of interest to the bottom of the visible table view.

### Initializers

- [init(rawValue:)](scrollposition/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Scrolling the table view

- [scrollToRow(at:at:animated:)](scrolltorow%28at_at_animated_%29.md): Scrolls through the table view until a row that an index path identifies is at a particular location on the screen.
- [scrollToNearestSelectedRow(at:animated:)](scrolltonearestselectedrow%28at_animated_%29.md): Scrolls the table view so that the selected row nearest to a specified position in the table view is at that position.

# UITableViewScrollPosition (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The position in the table view (top, middle, bottom) to scroll a specified row to.

## Declaration

```objectivec
enum UITableViewScrollPosition : NSInteger;
```

<a id="overview"></a>

## Overview

You set the scroll position through a parameter of the [selectRowAtIndexPath:animated:scrollPosition:](selectrow%28at_animated_scrollposition_%29.md), [scrollToNearestSelectedRowAtScrollPosition:animated:](scrolltonearestselectedrow%28at_animated_%29.md), [cellForRowAtIndexPath:](cellforrow%28at_%29.md), and [indexPathForSelectedRow](indexpathforselectedrow.md) methods.

## Topics

### Constants

- [UITableViewScrollPositionNone](scrollposition/none.md): The table view scrolls the row of interest to be fully visible with a minimum of movement.
- [UITableViewScrollPositionTop](scrollposition/top.md): The table view scrolls the row of interest to the top of the visible table view.
- [UITableViewScrollPositionMiddle](scrollposition/middle.md): The table view scrolls the row of interest to the middle of the visible table view.
- [UITableViewScrollPositionBottom](scrollposition/bottom.md): The table view scrolls the row of interest to the bottom of the visible table view.

## See Also

### Scrolling the table view

- [scrollToRowAtIndexPath:atScrollPosition:animated:](scrolltorow%28at_at_animated_%29.md): Scrolls through the table view until a row that an index path identifies is at a particular location on the screen.
- [scrollToNearestSelectedRowAtScrollPosition:animated:](scrolltonearestselectedrow%28at_animated_%29.md): Scrolls the table view so that the selected row nearest to a specified position in the table view is at that position.
