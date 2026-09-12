> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/setediting(_:animated:)](https://developer.apple.com/documentation/uikit/uitableview/setediting(_:animated:))

# setEditing(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Toggles the table view into and out of editing mode.

## Declaration

```swift
func setEditing(_ editing: Bool, animated: Bool)
```

## Parameters

- `editing`: [true](https://developer.apple.com/documentation/swift/true) to enter editing mode; [false](https://developer.apple.com/documentation/swift/false) to leave it. The default value is [false](https://developer.apple.com/documentation/swift/false).
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the transition to editing mode; [false](https://developer.apple.com/documentation/swift/false) to make the transition immediate.

<a id="Discussion"></a>

## Discussion

When you call this method with the value of `editing` set to [true](https://developer.apple.com/documentation/swift/true), the table view goes into editing mode by calling [setEditing(\_:animated:)](../uitableviewcell/setediting%28__animated_%29.md) on each visible `UITableViewCell` object. Calling this method with `editing` set to [false](https://developer.apple.com/documentation/swift/false) turns off editing mode. In editing mode, the cells of the table might show an insertion or deletion control on the left side of each cell and a reordering control on the right side, depending on how the cell is configured. (See [UITableViewCell](../uitableviewcell.md) for details.) The data source of the table view can selectively exclude cells from editing mode by implementing [tableView(\_:canEditRowAt:)](../uitableviewdatasource/tableview%28__caneditrowat_%29.md).

## See Also

### Putting the table into edit mode

- [isEditing](isediting.md): A Boolean value that determines whether the table view is in editing mode.

# setEditing:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Toggles the table view into and out of editing mode.

## Declaration

```objectivec
- (void) setEditing:(BOOL) editing animated:(BOOL) animated;
```

## Parameters

- `editing`: [true](https://developer.apple.com/documentation/swift/true) to enter editing mode; [false](https://developer.apple.com/documentation/swift/false) to leave it. The default value is [false](https://developer.apple.com/documentation/swift/false).
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the transition to editing mode; [false](https://developer.apple.com/documentation/swift/false) to make the transition immediate.

<a id="Discussion"></a>

## Discussion

When you call this method with the value of `editing` set to [true](https://developer.apple.com/documentation/swift/true), the table view goes into editing mode by calling [setEditing:animated:](../uitableviewcell/setediting%28__animated_%29.md) on each visible `UITableViewCell` object. Calling this method with `editing` set to [false](https://developer.apple.com/documentation/swift/false) turns off editing mode. In editing mode, the cells of the table might show an insertion or deletion control on the left side of each cell and a reordering control on the right side, depending on how the cell is configured. (See [UITableViewCell](../uitableviewcell.md) for details.) The data source of the table view can selectively exclude cells from editing mode by implementing [tableView:canEditRowAtIndexPath:](../uitableviewdatasource/tableview%28__caneditrowat_%29.md).

## See Also

### Putting the table into edit mode

- [editing](isediting.md): A Boolean value that determines whether the table view is in editing mode.
