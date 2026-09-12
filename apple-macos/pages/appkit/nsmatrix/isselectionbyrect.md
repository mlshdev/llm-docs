> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/isselectionbyrect](https://developer.apple.com/documentation/appkit/nsmatrix/isselectionbyrect)

# isSelectionByRect (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the user can select a rectangle of cells in the receiver by dragging the cursor.

## Declaration

```swift
var isSelectionByRect: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the matrix allows the user to select a rectangle of cells by dragging. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), selection in the matrix is on a row-by-row basis. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [setSelectionFrom(\_:to:anchor:highlight:)](setselectionfrom%28__to_anchor_highlight_%29.md): Programmatically selects a range of cells.

### Configuring the Matrix Object

- [mode](mode-swift.property.md): The selection mode of the receiver.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean that indicates whether a radio-mode matrix supports an empty selection.

# selectionByRect (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the user can select a rectangle of cells in the receiver by dragging the cursor.

## Declaration

```objectivec
@property (getter=isSelectionByRect) BOOL selectionByRect;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the matrix allows the user to select a rectangle of cells by dragging. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), selection in the matrix is on a row-by-row basis. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [setSelectionFrom:to:anchor:highlight:](setselectionfrom%28__to_anchor_highlight_%29.md): Programmatically selects a range of cells.

### Configuring the Matrix Object

- [mode](mode-swift.property.md): The selection mode of the receiver.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean that indicates whether a radio-mode matrix supports an empty selection.
