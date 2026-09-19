> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsmatrix/allowsemptyselection

# allowsEmptySelection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether a radio-mode matrix supports an empty selection.

## Declaration

```swift
var allowsEmptySelection: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the matrix allows one or zero cells to be selected. When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the matrix allows one and only one cell (not zero cells) to be selected. This setting has effect only in the `NSRadioModeMatrix` selection mode.

## See Also

### Configuring the Matrix Object

- [mode](mode-swift.property.md): The selection mode of the receiver.
- [isSelectionByRect](isselectionbyrect.md): A Boolean that indicates whether the user can select a rectangle of cells in the receiver by dragging the cursor.

# allowsEmptySelection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether a radio-mode matrix supports an empty selection.

## Declaration

```objectivec
@property BOOL allowsEmptySelection;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the matrix allows one or zero cells to be selected. When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the matrix allows one and only one cell (not zero cells) to be selected. This setting has effect only in the `NSRadioModeMatrix` selection mode.

## See Also

### Configuring the Matrix Object

- [mode](mode-swift.property.md): The selection mode of the receiver.
- [selectionByRect](isselectionbyrect.md): A Boolean that indicates whether the user can select a rectangle of cells in the receiver by dragging the cursor.
