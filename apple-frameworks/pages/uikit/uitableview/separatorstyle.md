> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/separatorstyle](https://developer.apple.com/documentation/uikit/uitableview/separatorstyle)

# separatorStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The style for table cells to use as separators.

## Declaration

```swift
var separatorStyle: UITableViewCell.SeparatorStyle { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is one of the separator-style constants described in [UITableViewCell](../uitableviewcell.md). `UITableView` uses this property to set the separator style on the cell returned from the delegate in [tableView(\_:cellForRowAt:)](../uitableviewdatasource/tableview%28__cellforrowat_%29.md).

## See Also

### Customizing the separator appearance

- [UITableViewCell.SeparatorStyle](../uitableviewcell/separatorstyle.md): The style for cells to use as separators.
- [separatorColor](separatorcolor.md): The color of separator rows in the table view.
- [separatorEffect](separatoreffect.md): The effect to apply to table separators.
- [separatorInset](separatorinset.md): The default inset of cell separators.
- [separatorInsetReference](separatorinsetreference-swift.property.md): An indicator of how to interpret the separator inset value.
- [UITableView.SeparatorInsetReference](separatorinsetreference-swift.enum.md): Constants that indicate how to interpret the separator inset value of a table view.

# separatorStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The style for table cells to use as separators.

## Declaration

```objectivec
@property (nonatomic) UITableViewCellSeparatorStyle separatorStyle;
```

<a id="Discussion"></a>

## Discussion

The value of this property is one of the separator-style constants described in [UITableViewCell](../uitableviewcell.md). `UITableView` uses this property to set the separator style on the cell returned from the delegate in [tableView:cellForRowAtIndexPath:](../uitableviewdatasource/tableview%28__cellforrowat_%29.md).

## See Also

### Customizing the separator appearance

- [UITableViewCellSeparatorStyle](../uitableviewcell/separatorstyle.md): The style for cells to use as separators.
- [separatorColor](separatorcolor.md): The color of separator rows in the table view.
- [separatorEffect](separatoreffect.md): The effect to apply to table separators.
- [separatorInset](separatorinset.md): The default inset of cell separators.
- [separatorInsetReference](separatorinsetreference-swift.property.md): An indicator of how to interpret the separator inset value.
- [UITableViewSeparatorInsetReference](separatorinsetreference-swift.enum.md): Constants that indicate how to interpret the separator inset value of a table view.
