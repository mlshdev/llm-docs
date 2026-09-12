> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulermarker/ismovable](https://developer.apple.com/documentation/appkit/nsrulermarker/ismovable)

# isMovable (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the user can move the receiver in its ruler view.

## Declaration

```swift
var isMovable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) to allow the user to drag the marker image in the ruler, [false](https://developer.apple.com/documentation/swift/false) to make it immobile.

By default, ruler markers are movable.

## See Also

### Setting movability

- [isRemovable](isremovable.md): A Boolean that indicates whether the user can remove the receiver from its ruler view.

# movable (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the user can move the receiver in its ruler view.

## Declaration

```objectivec
@property (getter=isMovable) BOOL movable;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) to allow the user to drag the marker image in the ruler, [false](https://developer.apple.com/documentation/swift/false) to make it immobile.

By default, ruler markers are movable.

## See Also

### Setting movability

- [removable](isremovable.md): A Boolean that indicates whether the user can remove the receiver from its ruler view.
