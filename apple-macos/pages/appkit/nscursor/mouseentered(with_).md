> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscursor/mouseentered(with:)](https://developer.apple.com/documentation/appkit/nscursor/mouseentered(with:))

# mouseEntered(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Automatically sent to the receiver when the cursor enters a cursor rectangle owned by the receiver.

> This method is not used.

## Declaration

```swift
func mouseEntered(with event: NSEvent)
```

## Parameters

- `event`: The event generated when the cursor enters the cursor rectangle.

<a id="Discussion"></a>

## Discussion

If used after [setOnMouseEntered(\_:)](setonmouseentered%28__%29.md) has been called with an argument of [true](https://developer.apple.com/documentation/swift/true), [mouseEntered(with:)](mouseentered%28with_%29.md) can make the receiver the current cursor.

In your programs, you won’t invoke [mouseEntered(with:)](mouseentered%28with_%29.md) explicitly. It’s only included in the class interface so you can override it.

For more information, see [addTrackingRect(\_:owner:userData:assumeInside:)](../nsview/addtrackingrect%28__owner_userdata_assumeinside_%29.md).

## See Also

### Deprecated

- [init(image:foregroundColorHint:backgroundColorHint:hotSpot:)](init%28image_foregroundcolorhint_backgroundcolorhint_hotspot_%29.md): Deprecated. Initializes the cursor with the specified image and hot spot.
- [setOnMouseEntered(\_:)](setonmouseentered%28__%29.md): Deprecated. Specifies whether the receiver accepts [mouseEntered(with:)](mouseentered%28with_%29.md) events.
- [isSetOnMouseEntered](issetonmouseentered.md): Deprecated. A Boolean value indicating whether the receiver becomes current on receiving a [mouseEntered(with:)](mouseentered%28with_%29.md) message.
- [mouseExited(with:)](mouseexited%28with_%29.md): Deprecated. Automatically sent to the receiver when the cursor exits a cursor rectangle owned by the receiver.
- [setOnMouseExited(\_:)](setonmouseexited%28__%29.md): Deprecated. Sets whether the receiver accepts [mouseExited(with:)](mouseexited%28with_%29.md) events.
- [isSetOnMouseExited](issetonmouseexited.md): Deprecated. A Boolean value indicating whether the receiver becomes current when it receives a [mouseExited(with:)](mouseexited%28with_%29.md) message.

# mouseEntered: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Automatically sent to the receiver when the cursor enters a cursor rectangle owned by the receiver.

> This method is not used.

## Declaration

```objectivec
- (void) mouseEntered:(NSEvent *) event;
```

## Parameters

- `event`: The event generated when the cursor enters the cursor rectangle.

<a id="Discussion"></a>

## Discussion

If used after [setOnMouseEntered:](setonmouseentered%28__%29.md) has been called with an argument of [true](https://developer.apple.com/documentation/swift/true), [mouseEntered:](mouseentered%28with_%29.md) can make the receiver the current cursor.

In your programs, you won’t invoke [mouseEntered:](mouseentered%28with_%29.md) explicitly. It’s only included in the class interface so you can override it.

For more information, see [addTrackingRect:owner:userData:assumeInside:](../nsview/addtrackingrect%28__owner_userdata_assumeinside_%29.md).

## See Also

### Deprecated

- [initWithImage:foregroundColorHint:backgroundColorHint:hotSpot:](init%28image_foregroundcolorhint_backgroundcolorhint_hotspot_%29.md): Deprecated. Initializes the cursor with the specified image and hot spot.
- [setOnMouseEntered:](setonmouseentered%28__%29.md): Deprecated. Specifies whether the receiver accepts [mouseEntered:](mouseentered%28with_%29.md) events.
- [setOnMouseEntered](issetonmouseentered.md): Deprecated. A Boolean value indicating whether the receiver becomes current on receiving a [mouseEntered:](mouseentered%28with_%29.md) message.
- [mouseExited:](mouseexited%28with_%29.md): Deprecated. Automatically sent to the receiver when the cursor exits a cursor rectangle owned by the receiver.
- [setOnMouseExited:](setonmouseexited%28__%29.md): Deprecated. Sets whether the receiver accepts [mouseExited:](mouseexited%28with_%29.md) events.
- [setOnMouseExited](issetonmouseexited.md): Deprecated. A Boolean value indicating whether the receiver becomes current when it receives a [mouseExited:](mouseexited%28with_%29.md) message.
