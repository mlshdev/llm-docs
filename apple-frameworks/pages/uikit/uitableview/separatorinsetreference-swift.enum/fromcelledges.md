> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/separatorinsetreference-swift.enum/fromcelledges](https://developer.apple.com/documentation/uikit/uitableview/separatorinsetreference-swift.enum/fromcelledges)

# UITableView.SeparatorInsetReference.fromCellEdges (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

An inset value that’s relative to the edge of the cell.

## Declaration

```swift
case fromCellEdges
```

<a id="Discussion"></a>

## Discussion

When this style is active, setting the left and right insets to `0.0` would result in a separator to extend from the entire distance between the left and right edges of the cell. Setting the insets to other values would inset the separator by the specified amount.

## See Also

### Constants

- [UITableView.SeparatorInsetReference.fromAutomaticInsets](fromautomaticinsets.md): An inset value that indicates the starting position is based on the default separator insets.

# UITableViewSeparatorInsetFromCellEdges (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

An inset value that’s relative to the edge of the cell.

## Declaration

```objectivec
UITableViewSeparatorInsetFromCellEdges
```

<a id="Discussion"></a>

## Discussion

When this style is active, setting the left and right insets to `0.0` would result in a separator to extend from the entire distance between the left and right edges of the cell. Setting the insets to other values would inset the separator by the specified amount.

## See Also

### Constants

- [UITableViewSeparatorInsetFromAutomaticInsets](fromautomaticinsets.md): An inset value that indicates the starting position is based on the default separator insets.
