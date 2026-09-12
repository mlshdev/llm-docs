> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/floatsgrouprows](https://developer.apple.com/documentation/appkit/nstableview/floatsgrouprows)

# floatsGroupRows (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value indicating whether the table view draws grouped rows as if they are floating.

## Declaration

```swift
var floatsGroupRows: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Group rows are rows for which the table view delegate’s [tableView(\_:isGroupRow:)](../nstableviewdelegate/tableview%28__isgrouprow_%29.md) method returns YES. These rows can be displayed as if they are floating in a view-based table view.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

# floatsGroupRows (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value indicating whether the table view draws grouped rows as if they are floating.

## Declaration

```objectivec
@property BOOL floatsGroupRows;
```

<a id="Discussion"></a>

## Discussion

Group rows are rows for which the table view delegate’s [tableView:isGroupRow:](../nstableviewdelegate/tableview%28__isgrouprow_%29.md) method returns YES. These rows can be displayed as if they are floating in a view-based table view.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true).
