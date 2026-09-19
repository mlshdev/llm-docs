> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitableview/separatorinsetreference-swift.property

# separatorInsetReference (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

An indicator of how to interpret the separator inset value.

## Declaration

```swift
var separatorInsetReference: UITableView.SeparatorInsetReference { get set }
```

<a id="Discussion"></a>

## Discussion

Use the value of this property to determine how the value in the separatorInset property is interpreted for cells. The default value of this property is [UITableView.SeparatorInsetReference.fromCellEdges](separatorinsetreference-swift.enum/fromcelledges.md).

## See Also

### Customizing the separator appearance

- [separatorStyle](separatorstyle.md): The style for table cells to use as separators.
- [UITableViewCell.SeparatorStyle](../uitableviewcell/separatorstyle.md): The style for cells to use as separators.
- [separatorColor](separatorcolor.md): The color of separator rows in the table view.
- [separatorEffect](separatoreffect.md): The effect to apply to table separators.
- [separatorInset](separatorinset.md): The default inset of cell separators.
- [UITableView.SeparatorInsetReference](separatorinsetreference-swift.enum.md): Constants that indicate how to interpret the separator inset value of a table view.

# separatorInsetReference (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

An indicator of how to interpret the separator inset value.

## Declaration

```objectivec
@property (nonatomic) UITableViewSeparatorInsetReference separatorInsetReference;
```

<a id="Discussion"></a>

## Discussion

Use the value of this property to determine how the value in the separatorInset property is interpreted for cells. The default value of this property is [UITableViewSeparatorInsetFromCellEdges](separatorinsetreference-swift.enum/fromcelledges.md).

## See Also

### Customizing the separator appearance

- [separatorStyle](separatorstyle.md): The style for table cells to use as separators.
- [UITableViewCellSeparatorStyle](../uitableviewcell/separatorstyle.md): The style for cells to use as separators.
- [separatorColor](separatorcolor.md): The color of separator rows in the table view.
- [separatorEffect](separatoreffect.md): The effect to apply to table separators.
- [separatorInset](separatorinset.md): The default inset of cell separators.
- [UITableViewSeparatorInsetReference](separatorinsetreference-swift.enum.md): Constants that indicate how to interpret the separator inset value of a table view.
