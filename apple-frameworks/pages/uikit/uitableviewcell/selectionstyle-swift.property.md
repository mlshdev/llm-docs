> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/selectionstyle-swift.property](https://developer.apple.com/documentation/uikit/uitableviewcell/selectionstyle-swift.property)

# selectionStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The style of selection for a cell.

## Declaration

```swift
var selectionStyle: UITableViewCell.SelectionStyle { get set }
```

<a id="Discussion"></a>

## Discussion

The selection style is a [backgroundView](backgroundview.md) constant that determines the color of a cell when it’s selected. The default value is [UITableViewCell.SelectionStyle.default](selectionstyle-swift.enum/default.md). See [UITableViewCell.SelectionStyle](selectionstyle-swift.enum.md) for a description of valid constants.

## See Also

### Managing cell selection and highlighting

- [UITableViewCell.SelectionStyle](selectionstyle-swift.enum.md): The style of selected cells.
- [isSelected](isselected.md): A Boolean value that indicates whether the cell is selected.
- [setSelected(\_:animated:)](setselected%28__animated_%29.md): Sets the selected state of the cell, optionally animating the transition between states.
- [isHighlighted](ishighlighted.md): A Boolean value that indicates whether the cell is highlighted.
- [setHighlighted(\_:animated:)](sethighlighted%28__animated_%29.md): Sets the highlighted state of the cell, optionally animating the transition between states.

# selectionStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The style of selection for a cell.

## Declaration

```objectivec
@property (nonatomic) UITableViewCellSelectionStyle selectionStyle;
```

<a id="Discussion"></a>

## Discussion

The selection style is a [backgroundView](backgroundview.md) constant that determines the color of a cell when it’s selected. The default value is [UITableViewCellSelectionStyleDefault](selectionstyle-swift.enum/default.md). See [UITableViewCellSelectionStyle](selectionstyle-swift.enum.md) for a description of valid constants.

## See Also

### Managing cell selection and highlighting

- [UITableViewCellSelectionStyle](selectionstyle-swift.enum.md): The style of selected cells.
- [selected](isselected.md): A Boolean value that indicates whether the cell is selected.
- [setSelected:animated:](setselected%28__animated_%29.md): Sets the selected state of the cell, optionally animating the transition between states.
- [highlighted](ishighlighted.md): A Boolean value that indicates whether the cell is highlighted.
- [setHighlighted:animated:](sethighlighted%28__animated_%29.md): Sets the highlighted state of the cell, optionally animating the transition between states.
