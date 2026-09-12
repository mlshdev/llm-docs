> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/separatorstyle](https://developer.apple.com/documentation/uikit/uitableviewcell/separatorstyle)

# UITableViewCell.SeparatorStyle (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The style for cells to use as separators.

## Declaration

```swift
enum SeparatorStyle
```

<a id="overview"></a>

## Overview

You use these constants to set the value of the [separatorStyle](../uitableview/separatorstyle.md) property defined by [UITableView](../uitableview.md).

## Topics

### Constants

- [UITableViewCell.SeparatorStyle.none](separatorstyle/none.md): The separator cell has no distinct style.
- [UITableViewCell.SeparatorStyle.singleLine](separatorstyle/singleline.md): The separator cell has a single line running across its width.
- [UITableViewCell.SeparatorStyle.singleLineEtched](separatorstyle/singlelineetched.md): Deprecated. The separator cell has double lines running across its width, giving it an etched look.

### Initializers

- [init(rawValue:)](separatorstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing the separator appearance

- [separatorStyle](../uitableview/separatorstyle.md): The style for table cells to use as separators.
- [separatorColor](../uitableview/separatorcolor.md): The color of separator rows in the table view.
- [separatorEffect](../uitableview/separatoreffect.md): The effect to apply to table separators.
- [separatorInset](../uitableview/separatorinset.md): The default inset of cell separators.
- [separatorInsetReference](../uitableview/separatorinsetreference-swift.property.md): An indicator of how to interpret the separator inset value.
- [UITableView.SeparatorInsetReference](../uitableview/separatorinsetreference-swift.enum.md): Constants that indicate how to interpret the separator inset value of a table view.

# UITableViewCellSeparatorStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The style for cells to use as separators.

## Declaration

```objectivec
enum UITableViewCellSeparatorStyle : NSInteger;
```

<a id="overview"></a>

## Overview

You use these constants to set the value of the [separatorStyle](../uitableview/separatorstyle.md) property defined by [UITableView](../uitableview.md).

## Topics

### Constants

- [UITableViewCellSeparatorStyleNone](separatorstyle/none.md): The separator cell has no distinct style.
- [UITableViewCellSeparatorStyleSingleLine](separatorstyle/singleline.md): The separator cell has a single line running across its width.
- [UITableViewCellSeparatorStyleSingleLineEtched](separatorstyle/singlelineetched.md): Deprecated. The separator cell has double lines running across its width, giving it an etched look.

## See Also

### Customizing the separator appearance

- [separatorStyle](../uitableview/separatorstyle.md): The style for table cells to use as separators.
- [separatorColor](../uitableview/separatorcolor.md): The color of separator rows in the table view.
- [separatorEffect](../uitableview/separatoreffect.md): The effect to apply to table separators.
- [separatorInset](../uitableview/separatorinset.md): The default inset of cell separators.
- [separatorInsetReference](../uitableview/separatorinsetreference-swift.property.md): An indicator of how to interpret the separator inset value.
- [UITableViewSeparatorInsetReference](../uitableview/separatorinsetreference-swift.enum.md): Constants that indicate how to interpret the separator inset value of a table view.
