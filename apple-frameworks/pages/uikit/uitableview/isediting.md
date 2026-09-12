> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/isediting](https://developer.apple.com/documentation/uikit/uitableview/isediting)

# isEditing (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the table view is in editing mode.

## Declaration

```swift
var isEditing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the table view is in editing mode: The cells of the table might show an insertion or deletion control on the left side of each cell and a reordering control on the right side, depending on how the cell is configured. (See [UITableViewCell](../uitableviewcell.md) for details.) Tapping a control causes the table view to invoke the data source method [tableView(\_:commit:forRowAt:)](../uitableviewdatasource/tableview%28__commit_forrowat_%29.md). The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Putting the table into edit mode

- [setEditing(\_:animated:)](setediting%28__animated_%29.md): Toggles the table view into and out of editing mode.

# editing (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the table view is in editing mode.

## Declaration

```objectivec
@property (nonatomic, getter=isEditing) BOOL editing;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the table view is in editing mode: The cells of the table might show an insertion or deletion control on the left side of each cell and a reordering control on the right side, depending on how the cell is configured. (See [UITableViewCell](../uitableviewcell.md) for details.) Tapping a control causes the table view to invoke the data source method [tableView:commitEditingStyle:forRowAtIndexPath:](../uitableviewdatasource/tableview%28__commit_forrowat_%29.md). The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Putting the table into edit mode

- [setEditing:animated:](setediting%28__animated_%29.md): Toggles the table view into and out of editing mode.
