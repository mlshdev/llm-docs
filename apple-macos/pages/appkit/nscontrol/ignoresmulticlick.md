> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/ignoresmulticlick](https://developer.apple.com/documentation/appkit/nscontrol/ignoresmulticlick)

# ignoresMultiClick (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the receiver ignores multiple clicks made in rapid succession.

## Declaration

```swift
var ignoresMultiClick: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the receiver ignores multiple clicks; otherwise, [false](https://developer.apple.com/documentation/swift/false).

By default, controls treat double clicks as two distinct clicks, triple clicks as three distinct clicks, and so on. However, if you set this propery to [true](https://developer.apple.com/documentation/swift/true), additional clicks (within a predetermined interval after the first) occurring after the first click are not processed by the receiver, and are instead passed on to `super`.

## See Also

### Tracking the Mouse

- [mouseDown(with:)](../nsresponder/mousedown%28with_%29.md): Informs the receiver that the user has pressed the left mouse button.

# ignoresMultiClick (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the receiver ignores multiple clicks made in rapid succession.

## Declaration

```objectivec
@property BOOL ignoresMultiClick;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the receiver ignores multiple clicks; otherwise, [false](https://developer.apple.com/documentation/swift/false).

By default, controls treat double clicks as two distinct clicks, triple clicks as three distinct clicks, and so on. However, if you set this propery to [true](https://developer.apple.com/documentation/swift/true), additional clicks (within a predetermined interval after the first) occurring after the first click are not processed by the receiver, and are instead passed on to `super`.

## See Also

### Tracking the Mouse

- [mouseDown:](../nsresponder/mousedown%28with_%29.md): Informs the receiver that the user has pressed the left mouse button.
