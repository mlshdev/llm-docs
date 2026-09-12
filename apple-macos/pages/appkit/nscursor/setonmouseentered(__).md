> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscursor/setonmouseentered(_:)](https://developer.apple.com/documentation/appkit/nscursor/setonmouseentered(_:))

# setOnMouseEntered(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Specifies whether the receiver accepts [mouseEntered(with:)](mouseentered%28with_%29.md) events.

> This method is not used.

## Declaration

```swift
func setOnMouseEntered(_ flag: Bool)
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) if the receiver accepts future [mouseEntered(with:)](mouseentered%28with_%29.md) event messages; otherwise it ignores them.

<a id="Discussion"></a>

## Discussion

Accepting [mouseEntered(with:)](mouseentered%28with_%29.md) event messages allows the cursor to be made the current cursor when the cursor enters a view’s cursor rectangle.

## See Also

### Deprecated

- [init(image:foregroundColorHint:backgroundColorHint:hotSpot:)](init%28image_foregroundcolorhint_backgroundcolorhint_hotspot_%29.md): Deprecated. Initializes the cursor with the specified image and hot spot.
- [mouseEntered(with:)](mouseentered%28with_%29.md): Deprecated. Automatically sent to the receiver when the cursor enters a cursor rectangle owned by the receiver.
- [isSetOnMouseEntered](issetonmouseentered.md): Deprecated. A Boolean value indicating whether the receiver becomes current on receiving a [mouseEntered(with:)](mouseentered%28with_%29.md) message.
- [mouseExited(with:)](mouseexited%28with_%29.md): Deprecated. Automatically sent to the receiver when the cursor exits a cursor rectangle owned by the receiver.
- [setOnMouseExited(\_:)](setonmouseexited%28__%29.md): Deprecated. Sets whether the receiver accepts [mouseExited(with:)](mouseexited%28with_%29.md) events.
- [isSetOnMouseExited](issetonmouseexited.md): Deprecated. A Boolean value indicating whether the receiver becomes current when it receives a [mouseExited(with:)](mouseexited%28with_%29.md) message.

# setOnMouseEntered: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Specifies whether the receiver accepts [mouseEntered:](mouseentered%28with_%29.md) events.

> This method is not used.

## Declaration

```objectivec
- (void) setOnMouseEntered:(BOOL) flag;
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) if the receiver accepts future [mouseEntered:](mouseentered%28with_%29.md) event messages; otherwise it ignores them.

<a id="Discussion"></a>

## Discussion

Accepting [mouseEntered:](mouseentered%28with_%29.md) event messages allows the cursor to be made the current cursor when the cursor enters a view’s cursor rectangle.

## See Also

### Deprecated

- [initWithImage:foregroundColorHint:backgroundColorHint:hotSpot:](init%28image_foregroundcolorhint_backgroundcolorhint_hotspot_%29.md): Deprecated. Initializes the cursor with the specified image and hot spot.
- [mouseEntered:](mouseentered%28with_%29.md): Deprecated. Automatically sent to the receiver when the cursor enters a cursor rectangle owned by the receiver.
- [setOnMouseEntered](issetonmouseentered.md): Deprecated. A Boolean value indicating whether the receiver becomes current on receiving a [mouseEntered:](mouseentered%28with_%29.md) message.
- [mouseExited:](mouseexited%28with_%29.md): Deprecated. Automatically sent to the receiver when the cursor exits a cursor rectangle owned by the receiver.
- [setOnMouseExited:](setonmouseexited%28__%29.md): Deprecated. Sets whether the receiver accepts [mouseExited:](mouseexited%28with_%29.md) events.
- [setOnMouseExited](issetonmouseexited.md): Deprecated. A Boolean value indicating whether the receiver becomes current when it receives a [mouseExited:](mouseexited%28with_%29.md) message.
