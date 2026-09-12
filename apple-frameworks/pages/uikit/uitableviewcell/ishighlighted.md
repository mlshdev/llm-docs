> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/ishighlighted](https://developer.apple.com/documentation/uikit/uitableviewcell/ishighlighted)

# isHighlighted (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the cell is highlighted.

## Declaration

```swift
var isHighlighted: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The highlighting affects the appearance of labels, image, and background. When the highlighted state of a cell is set to [true](https://developer.apple.com/documentation/swift/true), labels are drawn in their highlighted text color (default is white). The default value is [false](https://developer.apple.com/documentation/swift/false). If you set the highlighted state to [true](https://developer.apple.com/documentation/swift/true) through this property, the transition to the new state appearance is not animated. For animated highlighted-state transitions, see the [setHighlighted(\_:animated:)](sethighlighted%28__animated_%29.md) method.

Note that for highlighting to work properly, you must fetch the cell’s labels using the [textLabel](textlabel.md) and [detailTextLabel](detailtextlabel.md) properties and set each label’s [highlightedTextColor](../uilabel/highlightedtextcolor.md) property; for images, get the cell’s image using the [imageView](imageview.md) property and set the [UIImageView](../uiimageview.md) object’s `highlightedImage` property.

## See Also

### Managing cell selection and highlighting

- [selectionStyle](selectionstyle-swift.property.md): The style of selection for a cell.
- [UITableViewCell.SelectionStyle](selectionstyle-swift.enum.md): The style of selected cells.
- [isSelected](isselected.md): A Boolean value that indicates whether the cell is selected.
- [setSelected(\_:animated:)](setselected%28__animated_%29.md): Sets the selected state of the cell, optionally animating the transition between states.
- [setHighlighted(\_:animated:)](sethighlighted%28__animated_%29.md): Sets the highlighted state of the cell, optionally animating the transition between states.

# highlighted (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the cell is highlighted.

## Declaration

```objectivec
@property (nonatomic, getter=isHighlighted) BOOL highlighted;
```

<a id="Discussion"></a>

## Discussion

The highlighting affects the appearance of labels, image, and background. When the highlighted state of a cell is set to [true](https://developer.apple.com/documentation/swift/true), labels are drawn in their highlighted text color (default is white). The default value is [false](https://developer.apple.com/documentation/swift/false). If you set the highlighted state to [true](https://developer.apple.com/documentation/swift/true) through this property, the transition to the new state appearance is not animated. For animated highlighted-state transitions, see the [setHighlighted:animated:](sethighlighted%28__animated_%29.md) method.

Note that for highlighting to work properly, you must fetch the cell’s labels using the [textLabel](textlabel.md) and [detailTextLabel](detailtextlabel.md) properties and set each label’s [highlightedTextColor](../uilabel/highlightedtextcolor.md) property; for images, get the cell’s image using the [imageView](imageview.md) property and set the [UIImageView](../uiimageview.md) object’s `highlightedImage` property.

## See Also

### Managing cell selection and highlighting

- [selectionStyle](selectionstyle-swift.property.md): The style of selection for a cell.
- [UITableViewCellSelectionStyle](selectionstyle-swift.enum.md): The style of selected cells.
- [selected](isselected.md): A Boolean value that indicates whether the cell is selected.
- [setSelected:animated:](setselected%28__animated_%29.md): Sets the selected state of the cell, optionally animating the transition between states.
- [setHighlighted:animated:](sethighlighted%28__animated_%29.md): Sets the highlighted state of the cell, optionally animating the transition between states.
