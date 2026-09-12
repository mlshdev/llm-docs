> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulermarker/isremovable](https://developer.apple.com/documentation/appkit/nsrulermarker/isremovable)

# isRemovable (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the user can remove the receiver from its ruler view.

## Declaration

```swift
var isRemovable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) to allow the user to drag the marker image off of the ruler and remove the marker, [false](https://developer.apple.com/documentation/swift/false) to prevent the user from removing the marker.

By default ruler markers are not removable.

## See Also

### Setting movability

- [isMovable](ismovable.md): A Boolean that indicates whether the user can move the receiver in its ruler view.

# removable (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the user can remove the receiver from its ruler view.

## Declaration

```objectivec
@property (getter=isRemovable) BOOL removable;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) to allow the user to drag the marker image off of the ruler and remove the marker, [false](https://developer.apple.com/documentation/swift/false) to prevent the user from removing the marker.

By default ruler markers are not removable.

## See Also

### Setting movability

- [movable](ismovable.md): A Boolean that indicates whether the user can move the receiver in its ruler view.
