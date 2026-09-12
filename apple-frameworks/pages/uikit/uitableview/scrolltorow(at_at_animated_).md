> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/scrolltorow(at:at:animated:)](https://developer.apple.com/documentation/uikit/uitableview/scrolltorow(at:at:animated:))

# scrollToRow(at:at:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Scrolls through the table view until a row that an index path identifies is at a particular location on the screen.

## Declaration

```swift
func scrollToRow(at indexPath: IndexPath, at scrollPosition: UITableView.ScrollPosition, animated: Bool)
```

## Parameters

- `indexPath`: An index path that identifies a row in the table view by its row index and its section index.

  `NSNotFound` is a valid row index for scrolling to a section with zero rows.
- `scrollPosition`: A constant that identifies a relative position in the table view (top, middle, bottom) for `row` when scrolling concludes. See [UITableView.ScrollPosition](scrollposition.md) for descriptions of valid constants.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if you want to animate the change in position; [false](https://developer.apple.com/documentation/swift/false) if it should be immediate.

<a id="Discussion"></a>

## Discussion

Invoking this method doesn’t cause the delegate to receive a [scrollViewDidScroll(\_:)](../uiscrollviewdelegate/scrollviewdidscroll%28__%29.md) message, as is normal for programmatically invoked user interface operations.

## See Also

### Scrolling the table view

- [scrollToNearestSelectedRow(at:animated:)](scrolltonearestselectedrow%28at_animated_%29.md): Scrolls the table view so that the selected row nearest to a specified position in the table view is at that position.
- [UITableView.ScrollPosition](scrollposition.md): The position in the table view (top, middle, bottom) to scroll a specified row to.

# scrollToRowAtIndexPath:atScrollPosition:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Scrolls through the table view until a row that an index path identifies is at a particular location on the screen.

## Declaration

```objectivec
- (void) scrollToRowAtIndexPath:(NSIndexPath *) indexPath atScrollPosition:(UITableViewScrollPosition) scrollPosition animated:(BOOL) animated;
```

## Parameters

- `indexPath`: An index path that identifies a row in the table view by its row index and its section index.

  `NSNotFound` is a valid row index for scrolling to a section with zero rows.
- `scrollPosition`: A constant that identifies a relative position in the table view (top, middle, bottom) for `row` when scrolling concludes. See [UITableViewScrollPosition](scrollposition.md) for descriptions of valid constants.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if you want to animate the change in position; [false](https://developer.apple.com/documentation/swift/false) if it should be immediate.

<a id="Discussion"></a>

## Discussion

Invoking this method doesn’t cause the delegate to receive a [scrollViewDidScroll:](../uiscrollviewdelegate/scrollviewdidscroll%28__%29.md) message, as is normal for programmatically invoked user interface operations.

## See Also

### Scrolling the table view

- [scrollToNearestSelectedRowAtScrollPosition:animated:](scrolltonearestselectedrow%28at_animated_%29.md): Scrolls the table view so that the selected row nearest to a specified position in the table view is at that position.
- [UITableViewScrollPosition](scrollposition.md): The position in the table view (top, middle, bottom) to scroll a specified row to.
