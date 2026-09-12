> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/scrolltonearestselectedrow(at:animated:)](https://developer.apple.com/documentation/uikit/uitableview/scrolltonearestselectedrow(at:animated:))

# scrollToNearestSelectedRow(at:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Scrolls the table view so that the selected row nearest to a specified position in the table view is at that position.

## Declaration

```swift
func scrollToNearestSelectedRow(at scrollPosition: UITableView.ScrollPosition, animated: Bool)
```

## Parameters

- `scrollPosition`: A constant that identifies a relative position in the table view (top, middle, bottom) for the row when scrolling concludes. See [UITableView.ScrollPosition](scrollposition.md) for a descriptions of valid constants.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if you want to animate the change in position; [false](https://developer.apple.com/documentation/swift/false) if it should be immediate.

## See Also

### Scrolling the table view

- [scrollToRow(at:at:animated:)](scrolltorow%28at_at_animated_%29.md): Scrolls through the table view until a row that an index path identifies is at a particular location on the screen.
- [UITableView.ScrollPosition](scrollposition.md): The position in the table view (top, middle, bottom) to scroll a specified row to.

# scrollToNearestSelectedRowAtScrollPosition:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Scrolls the table view so that the selected row nearest to a specified position in the table view is at that position.

## Declaration

```objectivec
- (void) scrollToNearestSelectedRowAtScrollPosition:(UITableViewScrollPosition) scrollPosition animated:(BOOL) animated;
```

## Parameters

- `scrollPosition`: A constant that identifies a relative position in the table view (top, middle, bottom) for the row when scrolling concludes. See [UITableViewScrollPosition](scrollposition.md) for a descriptions of valid constants.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if you want to animate the change in position; [false](https://developer.apple.com/documentation/swift/false) if it should be immediate.

## See Also

### Scrolling the table view

- [scrollToRowAtIndexPath:atScrollPosition:animated:](scrolltorow%28at_at_animated_%29.md): Scrolls through the table view until a row that an index path identifies is at a particular location on the screen.
- [UITableViewScrollPosition](scrollposition.md): The position in the table view (top, middle, bottom) to scroll a specified row to.
