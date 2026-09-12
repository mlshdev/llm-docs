> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/setselected(_:animated:)](https://developer.apple.com/documentation/uikit/uitableviewcell/setselected(_:animated:))

# setSelected(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the selected state of the cell, optionally animating the transition between states.

## Declaration

```swift
func setSelected(_ selected: Bool, animated: Bool)
```

## Parameters

- `selected`: [true](https://developer.apple.com/documentation/swift/true) to set the cell as selected, [false](https://developer.apple.com/documentation/swift/false) to set it as unselected. The default is [false](https://developer.apple.com/documentation/swift/false).
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the transition between selected states, [false](https://developer.apple.com/documentation/swift/false) to make the transition immediate.

<a id="Discussion"></a>

## Discussion

The selection affects the appearance of labels, image, and background. When the selected state of a cell is [true](https://developer.apple.com/documentation/swift/true), it draws the background for selected cells (Reusing cells) with its title in white.

## See Also

### Managing cell selection and highlighting

- [selectionStyle](selectionstyle-swift.property.md): The style of selection for a cell.
- [UITableViewCell.SelectionStyle](selectionstyle-swift.enum.md): The style of selected cells.
- [isSelected](isselected.md): A Boolean value that indicates whether the cell is selected.
- [isHighlighted](ishighlighted.md): A Boolean value that indicates whether the cell is highlighted.
- [setHighlighted(\_:animated:)](sethighlighted%28__animated_%29.md): Sets the highlighted state of the cell, optionally animating the transition between states.

# setSelected:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the selected state of the cell, optionally animating the transition between states.

## Declaration

```objectivec
- (void) setSelected:(BOOL) selected animated:(BOOL) animated;
```

## Parameters

- `selected`: [true](https://developer.apple.com/documentation/swift/true) to set the cell as selected, [false](https://developer.apple.com/documentation/swift/false) to set it as unselected. The default is [false](https://developer.apple.com/documentation/swift/false).
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the transition between selected states, [false](https://developer.apple.com/documentation/swift/false) to make the transition immediate.

<a id="Discussion"></a>

## Discussion

The selection affects the appearance of labels, image, and background. When the selected state of a cell is [true](https://developer.apple.com/documentation/swift/true), it draws the background for selected cells (Reusing cells) with its title in white.

## See Also

### Managing cell selection and highlighting

- [selectionStyle](selectionstyle-swift.property.md): The style of selection for a cell.
- [UITableViewCellSelectionStyle](selectionstyle-swift.enum.md): The style of selected cells.
- [selected](isselected.md): A Boolean value that indicates whether the cell is selected.
- [highlighted](ishighlighted.md): A Boolean value that indicates whether the cell is highlighted.
- [setHighlighted:animated:](sethighlighted%28__animated_%29.md): Sets the highlighted state of the cell, optionally animating the transition between states.
