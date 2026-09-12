> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/isselected](https://developer.apple.com/documentation/uikit/uitableviewcell/isselected)

# isSelected (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the cell is selected.

## Declaration

```swift
var isSelected: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The selection affects the appearance of labels, image, and background. When the selected state of a cell is set to [true](https://developer.apple.com/documentation/swift/true), it draws the background for selected cells with its title in white. The default value is [false](https://developer.apple.com/documentation/swift/false). If you set the selection state to [true](https://developer.apple.com/documentation/swift/true) through this property, the transition to the new state appearance is not animated. For animated selected-state transitions, see the [setSelected(\_:animated:)](setselected%28__animated_%29.md) method.

## See Also

### Managing cell selection and highlighting

- [selectionStyle](selectionstyle-swift.property.md): The style of selection for a cell.
- [UITableViewCell.SelectionStyle](selectionstyle-swift.enum.md): The style of selected cells.
- [setSelected(\_:animated:)](setselected%28__animated_%29.md): Sets the selected state of the cell, optionally animating the transition between states.
- [isHighlighted](ishighlighted.md): A Boolean value that indicates whether the cell is highlighted.
- [setHighlighted(\_:animated:)](sethighlighted%28__animated_%29.md): Sets the highlighted state of the cell, optionally animating the transition between states.

# selected (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the cell is selected.

## Declaration

```objectivec
@property (nonatomic, getter=isSelected) BOOL selected;
```

<a id="Discussion"></a>

## Discussion

The selection affects the appearance of labels, image, and background. When the selected state of a cell is set to [true](https://developer.apple.com/documentation/swift/true), it draws the background for selected cells with its title in white. The default value is [false](https://developer.apple.com/documentation/swift/false). If you set the selection state to [true](https://developer.apple.com/documentation/swift/true) through this property, the transition to the new state appearance is not animated. For animated selected-state transitions, see the [setSelected:animated:](setselected%28__animated_%29.md) method.

## See Also

### Managing cell selection and highlighting

- [selectionStyle](selectionstyle-swift.property.md): The style of selection for a cell.
- [UITableViewCellSelectionStyle](selectionstyle-swift.enum.md): The style of selected cells.
- [setSelected:animated:](setselected%28__animated_%29.md): Sets the selected state of the cell, optionally animating the transition between states.
- [highlighted](ishighlighted.md): A Boolean value that indicates whether the cell is highlighted.
- [setHighlighted:animated:](sethighlighted%28__animated_%29.md): Sets the highlighted state of the cell, optionally animating the transition between states.
