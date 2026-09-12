> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/separatorinsetreference-swift.enum](https://developer.apple.com/documentation/uikit/uitableview/separatorinsetreference-swift.enum)

# UITableView.SeparatorInsetReference (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Constants that indicate how to interpret the separator inset value of a table view.

## Declaration

```swift
enum SeparatorInsetReference
```

## Topics

### Constants

- [UITableView.SeparatorInsetReference.fromCellEdges](separatorinsetreference-swift.enum/fromcelledges.md): An inset value that’s relative to the edge of the cell.
- [UITableView.SeparatorInsetReference.fromAutomaticInsets](separatorinsetreference-swift.enum/fromautomaticinsets.md): An inset value that indicates the starting position is based on the default separator insets.

### Initializers

- [init(rawValue:)](separatorinsetreference-swift.enum/init%28rawvalue_%29.md)

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

- [separatorStyle](separatorstyle.md): The style for table cells to use as separators.
- [UITableViewCell.SeparatorStyle](../uitableviewcell/separatorstyle.md): The style for cells to use as separators.
- [separatorColor](separatorcolor.md): The color of separator rows in the table view.
- [separatorEffect](separatoreffect.md): The effect to apply to table separators.
- [separatorInset](separatorinset.md): The default inset of cell separators.
- [separatorInsetReference](separatorinsetreference-swift.property.md): An indicator of how to interpret the separator inset value.

# UITableViewSeparatorInsetReference (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Constants that indicate how to interpret the separator inset value of a table view.

## Declaration

```objectivec
enum UITableViewSeparatorInsetReference : NSInteger;
```

## Topics

### Constants

- [UITableViewSeparatorInsetFromCellEdges](separatorinsetreference-swift.enum/fromcelledges.md): An inset value that’s relative to the edge of the cell.
- [UITableViewSeparatorInsetFromAutomaticInsets](separatorinsetreference-swift.enum/fromautomaticinsets.md): An inset value that indicates the starting position is based on the default separator insets.

## See Also

### Customizing the separator appearance

- [separatorStyle](separatorstyle.md): The style for table cells to use as separators.
- [UITableViewCellSeparatorStyle](../uitableviewcell/separatorstyle.md): The style for cells to use as separators.
- [separatorColor](separatorcolor.md): The color of separator rows in the table view.
- [separatorEffect](separatoreffect.md): The effect to apply to table separators.
- [separatorInset](separatorinset.md): The default inset of cell separators.
- [separatorInsetReference](separatorinsetreference-swift.property.md): An indicator of how to interpret the separator inset value.
