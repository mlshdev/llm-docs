> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/separatorinsetreference-swift.enum/fromautomaticinsets](https://developer.apple.com/documentation/uikit/uitableview/separatorinsetreference-swift.enum/fromautomaticinsets)

# UITableView.SeparatorInsetReference.fromAutomaticInsets (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

An inset value that indicates the starting position is based on the default separator insets.

## Declaration

```swift
case fromAutomaticInsets
```

<a id="Discussion"></a>

## Discussion

When using this style, the values in the [separatorInset](../separatorinset.md) property are interpreted as offsets from the default insets provided by the table view. The table view normally uses its layout margins as the default cell inset value. However, these insets may be modified by other factors, such as the when the [cellLayoutMarginsFollowReadableWidth](../celllayoutmarginsfollowreadablewidth.md) property is set to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Constants

- [UITableView.SeparatorInsetReference.fromCellEdges](fromcelledges.md): An inset value that’s relative to the edge of the cell.

# UITableViewSeparatorInsetFromAutomaticInsets (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

An inset value that indicates the starting position is based on the default separator insets.

## Declaration

```objectivec
UITableViewSeparatorInsetFromAutomaticInsets
```

<a id="Discussion"></a>

## Discussion

When using this style, the values in the [separatorInset](../separatorinset.md) property are interpreted as offsets from the default insets provided by the table view. The table view normally uses its layout margins as the default cell inset value. However, these insets may be modified by other factors, such as the when the [cellLayoutMarginsFollowReadableWidth](../celllayoutmarginsfollowreadablewidth.md) property is set to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Constants

- [UITableViewSeparatorInsetFromCellEdges](fromcelledges.md): An inset value that’s relative to the edge of the cell.
