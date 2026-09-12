> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/selectionstyle-swift.enum](https://developer.apple.com/documentation/uikit/uitableviewcell/selectionstyle-swift.enum)

# UITableViewCell.SelectionStyle (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The style of selected cells.

## Declaration

```swift
enum SelectionStyle
```

<a id="overview"></a>

## Overview

You use these constants to set the value of the [selectionStyle](selectionstyle-swift.property.md) property.

## Topics

### Constants

- [UITableViewCell.SelectionStyle.none](selectionstyle-swift.enum/none.md): The cell has no distinct style for when it’s selected.
- [UITableViewCell.SelectionStyle.blue](selectionstyle-swift.enum/blue.md): The cell has a default background color when it’s selected.
- [UITableViewCell.SelectionStyle.gray](selectionstyle-swift.enum/gray.md): The cell has a gray background when it’s selected.
- [UITableViewCell.SelectionStyle.default](selectionstyle-swift.enum/default.md): The cell selection style to use for tables.

### Initializers

- [init(rawValue:)](selectionstyle-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing cell selection and highlighting

- [selectionStyle](selectionstyle-swift.property.md): The style of selection for a cell.
- [isSelected](isselected.md): A Boolean value that indicates whether the cell is selected.
- [setSelected(\_:animated:)](setselected%28__animated_%29.md): Sets the selected state of the cell, optionally animating the transition between states.
- [isHighlighted](ishighlighted.md): A Boolean value that indicates whether the cell is highlighted.
- [setHighlighted(\_:animated:)](sethighlighted%28__animated_%29.md): Sets the highlighted state of the cell, optionally animating the transition between states.

# UITableViewCellSelectionStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The style of selected cells.

## Declaration

```objectivec
enum UITableViewCellSelectionStyle : NSInteger;
```

<a id="overview"></a>

## Overview

You use these constants to set the value of the [selectionStyle](selectionstyle-swift.property.md) property.

## Topics

### Constants

- [UITableViewCellSelectionStyleNone](selectionstyle-swift.enum/none.md): The cell has no distinct style for when it’s selected.
- [UITableViewCellSelectionStyleBlue](selectionstyle-swift.enum/blue.md): The cell has a default background color when it’s selected.
- [UITableViewCellSelectionStyleGray](selectionstyle-swift.enum/gray.md): The cell has a gray background when it’s selected.
- [UITableViewCellSelectionStyleDefault](selectionstyle-swift.enum/default.md): The cell selection style to use for tables.

## See Also

### Managing cell selection and highlighting

- [selectionStyle](selectionstyle-swift.property.md): The style of selection for a cell.
- [selected](isselected.md): A Boolean value that indicates whether the cell is selected.
- [setSelected:animated:](setselected%28__animated_%29.md): Sets the selected state of the cell, optionally animating the transition between states.
- [highlighted](ishighlighted.md): A Boolean value that indicates whether the cell is highlighted.
- [setHighlighted:animated:](sethighlighted%28__animated_%29.md): Sets the highlighted state of the cell, optionally animating the transition between states.
