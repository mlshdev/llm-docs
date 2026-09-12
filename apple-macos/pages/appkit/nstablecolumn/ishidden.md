> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablecolumn/ishidden](https://developer.apple.com/documentation/appkit/nstablecolumn/ishidden)

# isHidden (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean that indicates whether the table column is hidden.

## Declaration

```swift
var isHidden: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the table column is hidden. The default value is [false](https://developer.apple.com/documentation/swift/false).

Columns that are hidden still exist in the table view object’s [tableColumns](../nstableview/tablecolumns.md) array and are included in the table view’s [numberOfColumns](../nstableview/numberofcolumns.md) count.

The hidden state is stored when the table view autosaves the table column state.

# hidden (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean that indicates whether the table column is hidden.

## Declaration

```objectivec
@property (getter=isHidden) BOOL hidden;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the table column is hidden. The default value is [false](https://developer.apple.com/documentation/swift/false).

Columns that are hidden still exist in the table view object’s [tableColumns](../nstableview/tablecolumns.md) array and are included in the table view’s [numberOfColumns](../nstableview/numberofcolumns.md) count.

The hidden state is stored when the table view autosaves the table column state.
