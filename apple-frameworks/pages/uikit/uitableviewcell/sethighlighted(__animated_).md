> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/sethighlighted(_:animated:)](https://developer.apple.com/documentation/uikit/uitableviewcell/sethighlighted(_:animated:))

# setHighlighted(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the highlighted state of the cell, optionally animating the transition between states.

## Declaration

```swift
func setHighlighted(_ highlighted: Bool, animated: Bool)
```

## Parameters

- `highlighted`: [true](https://developer.apple.com/documentation/swift/true) to set the cell as highlighted, [false](https://developer.apple.com/documentation/swift/false) to set it as unhighlighted. The default is [false](https://developer.apple.com/documentation/swift/false).
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the transition between highlighted states, [false](https://developer.apple.com/documentation/swift/false) to make the transition immediate.

<a id="Discussion"></a>

## Discussion

Highlights or unhighlights the cell, animating the transition between regular and highlighted state if `animated` is YES.  Highlighting affects the appearance of the cell’s labels, image, and background.

Note that for highlighting to work properly, you must fetch the cell’s label (or labels) using the [textLabel](textlabel.md) (and [detailTextLabel](detailtextlabel.md) properties and set the label’s [highlightedTextColor](../uilabel/highlightedtextcolor.md) property; for images, get the cell’s image using the [imageView](imageview.md) property and set the [UIImageView](../uiimageview.md) object’s `highlightedImage` property.

A custom table cell may override this method to make any transitory appearance changes.

## See Also

### Managing cell selection and highlighting

- [selectionStyle](selectionstyle-swift.property.md): The style of selection for a cell.
- [UITableViewCell.SelectionStyle](selectionstyle-swift.enum.md): The style of selected cells.
- [isSelected](isselected.md): A Boolean value that indicates whether the cell is selected.
- [setSelected(\_:animated:)](setselected%28__animated_%29.md): Sets the selected state of the cell, optionally animating the transition between states.
- [isHighlighted](ishighlighted.md): A Boolean value that indicates whether the cell is highlighted.

# setHighlighted:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the highlighted state of the cell, optionally animating the transition between states.

## Declaration

```objectivec
- (void) setHighlighted:(BOOL) highlighted animated:(BOOL) animated;
```

## Parameters

- `highlighted`: [true](https://developer.apple.com/documentation/swift/true) to set the cell as highlighted, [false](https://developer.apple.com/documentation/swift/false) to set it as unhighlighted. The default is [false](https://developer.apple.com/documentation/swift/false).
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the transition between highlighted states, [false](https://developer.apple.com/documentation/swift/false) to make the transition immediate.

<a id="Discussion"></a>

## Discussion

Highlights or unhighlights the cell, animating the transition between regular and highlighted state if `animated` is YES.  Highlighting affects the appearance of the cell’s labels, image, and background.

Note that for highlighting to work properly, you must fetch the cell’s label (or labels) using the [textLabel](textlabel.md) (and [detailTextLabel](detailtextlabel.md) properties and set the label’s [highlightedTextColor](../uilabel/highlightedtextcolor.md) property; for images, get the cell’s image using the [imageView](imageview.md) property and set the [UIImageView](../uiimageview.md) object’s `highlightedImage` property.

A custom table cell may override this method to make any transitory appearance changes.

## See Also

### Managing cell selection and highlighting

- [selectionStyle](selectionstyle-swift.property.md): The style of selection for a cell.
- [UITableViewCellSelectionStyle](selectionstyle-swift.enum.md): The style of selected cells.
- [selected](isselected.md): A Boolean value that indicates whether the cell is selected.
- [setSelected:animated:](setselected%28__animated_%29.md): Sets the selected state of the cell, optionally animating the transition between states.
- [highlighted](ishighlighted.md): A Boolean value that indicates whether the cell is highlighted.
