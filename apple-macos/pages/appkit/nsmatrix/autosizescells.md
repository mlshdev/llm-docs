> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/autosizescells](https://developer.apple.com/documentation/appkit/nsmatrix/autosizescells)

# autosizesCells (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the cell sizes change when the receiver is resized.

## Declaration

```swift
var autosizesCells: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), whenever the matrix is resized, the sizes of the cells change in proportion, keeping the intercell space constant. This property verifies that the cell sizes and intercell spacing add up to the exact size of the matrix, adjusting the size of the cells and updating the matrix if they don’t. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), then the intercell spacing and cell size remain constant.

## See Also

### Resizing the Matrix and Its Cells

- [setValidateSize(\_:)](setvalidatesize%28__%29.md): Specifies whether the receiver’s size information is validated.
- [sizeToCells()](sizetocells%28%29.md): Changes the width and the height of the receiver’s frame so it exactly contains the cells.

# autosizesCells (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the cell sizes change when the receiver is resized.

## Declaration

```objectivec
@property BOOL autosizesCells;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), whenever the matrix is resized, the sizes of the cells change in proportion, keeping the intercell space constant. This property verifies that the cell sizes and intercell spacing add up to the exact size of the matrix, adjusting the size of the cells and updating the matrix if they don’t. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), then the intercell spacing and cell size remain constant.

## See Also

### Resizing the Matrix and Its Cells

- [setValidateSize:](setvalidatesize%28__%29.md): Specifies whether the receiver’s size information is validated.
- [sizeToCells](sizetocells%28%29.md): Changes the width and the height of the receiver’s frame so it exactly contains the cells.
