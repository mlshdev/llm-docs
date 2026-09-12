> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscursor/issetonmouseexited](https://developer.apple.com/documentation/appkit/nscursor/issetonmouseexited)

# isSetOnMouseExited (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.13)

A Boolean value indicating whether the receiver becomes current when it receives a [mouseExited(with:)](mouseexited%28with_%29.md) message.

> This method is not used.

## Declaration

```swift
var isSetOnMouseExited: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver becomes current when it receives a [mouseExited(with:)](mouseexited%28with_%29.md) message; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Deprecated

- [init(image:foregroundColorHint:backgroundColorHint:hotSpot:)](init%28image_foregroundcolorhint_backgroundcolorhint_hotspot_%29.md): Deprecated. Initializes the cursor with the specified image and hot spot.
- [mouseEntered(with:)](mouseentered%28with_%29.md): Deprecated. Automatically sent to the receiver when the cursor enters a cursor rectangle owned by the receiver.
- [setOnMouseEntered(\_:)](setonmouseentered%28__%29.md): Deprecated. Specifies whether the receiver accepts [mouseEntered(with:)](mouseentered%28with_%29.md) events.
- [isSetOnMouseEntered](issetonmouseentered.md): Deprecated. A Boolean value indicating whether the receiver becomes current on receiving a [mouseEntered(with:)](mouseentered%28with_%29.md) message.
- [mouseExited(with:)](mouseexited%28with_%29.md): Deprecated. Automatically sent to the receiver when the cursor exits a cursor rectangle owned by the receiver.
- [setOnMouseExited(\_:)](setonmouseexited%28__%29.md): Deprecated. Sets whether the receiver accepts [mouseExited(with:)](mouseexited%28with_%29.md) events.

# setOnMouseExited (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.13)

A Boolean value indicating whether the receiver becomes current when it receives a [mouseExited:](mouseexited%28with_%29.md) message.

> This method is not used.

## Declaration

```objectivec
@property (readonly, getter=isSetOnMouseExited) BOOL setOnMouseExited;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver becomes current when it receives a [mouseExited:](mouseexited%28with_%29.md) message; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Deprecated

- [initWithImage:foregroundColorHint:backgroundColorHint:hotSpot:](init%28image_foregroundcolorhint_backgroundcolorhint_hotspot_%29.md): Deprecated. Initializes the cursor with the specified image and hot spot.
- [mouseEntered:](mouseentered%28with_%29.md): Deprecated. Automatically sent to the receiver when the cursor enters a cursor rectangle owned by the receiver.
- [setOnMouseEntered:](setonmouseentered%28__%29.md): Deprecated. Specifies whether the receiver accepts [mouseEntered:](mouseentered%28with_%29.md) events.
- [setOnMouseEntered](issetonmouseentered.md): Deprecated. A Boolean value indicating whether the receiver becomes current on receiving a [mouseEntered:](mouseentered%28with_%29.md) message.
- [mouseExited:](mouseexited%28with_%29.md): Deprecated. Automatically sent to the receiver when the cursor exits a cursor rectangle owned by the receiver.
- [setOnMouseExited:](setonmouseexited%28__%29.md): Deprecated. Sets whether the receiver accepts [mouseExited:](mouseexited%28with_%29.md) events.
