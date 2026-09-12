> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablecolumn/iseditable](https://developer.apple.com/documentation/appkit/nstablecolumn/iseditable)

# isEditable (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether a cell-based table’s column cells are user editable.

## Declaration

```swift
var isEditable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the user can edit cells in the cell-based table’s column. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

To initiate editing programmatically regardless of the value of this property, use the `NSTableView` [editColumn(\_:row:with:select:)](../nstableview/editcolumn%28__row_with_select_%29.md) method.

# editable (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether a cell-based table’s column cells are user editable.

## Declaration

```objectivec
@property (getter=isEditable) BOOL editable;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the user can edit cells in the cell-based table’s column. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

To initiate editing programmatically regardless of the value of this property, use the `NSTableView` [editColumn:row:withEvent:select:](../nstableview/editcolumn%28__row_with_select_%29.md) method.
