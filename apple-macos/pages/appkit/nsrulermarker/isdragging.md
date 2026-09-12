> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulermarker/isdragging](https://developer.apple.com/documentation/appkit/nsrulermarker/isdragging)

# isDragging (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the receiver is being dragged.

## Declaration

```swift
var isDragging: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver is being dragged, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Drawing and event handling

- [draw(\_:)](draw%28__%29.md): Draws the receiver’s image that appears in the supplied rectangle.
- [trackMouse(with:adding:)](trackmouse%28with_adding_%29.md): Handles user manipulation of the receiver in its ruler view.

# dragging (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the receiver is being dragged.

## Declaration

```objectivec
@property (readonly, getter=isDragging) BOOL dragging;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver is being dragged, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Drawing and event handling

- [drawRect:](draw%28__%29.md): Draws the receiver’s image that appears in the supplied rectangle.
- [trackMouse:adding:](trackmouse%28with_adding_%29.md): Handles user manipulation of the receiver in its ruler view.
