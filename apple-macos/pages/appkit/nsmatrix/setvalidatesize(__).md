> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/setvalidatesize(_:)](https://developer.apple.com/documentation/appkit/nsmatrix/setvalidatesize(_:))

# setValidateSize(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Specifies whether the receiver’s size information is validated.

## Declaration

```swift
func setValidateSize(_ flag: Bool)
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) to assume that the size information in the receiver is correct. If `flag` is [false](https://developer.apple.com/documentation/swift/false), the [NSControl](../nscontrol.md) method [calcSize()](../nscontrol/calcsize%28%29.md) will be invoked before any further drawing is done.

## See Also

### Resizing the Matrix and Its Cells

- [autosizesCells](autosizescells.md): A Boolean that indicates whether the cell sizes change when the receiver is resized.
- [sizeToCells()](sizetocells%28%29.md): Changes the width and the height of the receiver’s frame so it exactly contains the cells.

# setValidateSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Specifies whether the receiver’s size information is validated.

## Declaration

```objectivec
- (void) setValidateSize:(BOOL) flag;
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) to assume that the size information in the receiver is correct. If `flag` is [false](https://developer.apple.com/documentation/swift/false), the [NSControl](../nscontrol.md) method [calcSize](../nscontrol/calcsize%28%29.md) will be invoked before any further drawing is done.

## See Also

### Resizing the Matrix and Its Cells

- [autosizesCells](autosizescells.md): A Boolean that indicates whether the cell sizes change when the receiver is resized.
- [sizeToCells](sizetocells%28%29.md): Changes the width and the height of the receiver’s frame so it exactly contains the cells.
