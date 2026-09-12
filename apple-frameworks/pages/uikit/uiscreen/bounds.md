> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/bounds](https://developer.apple.com/documentation/uikit/uiscreen/bounds)

# bounds (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS

The bounding rectangle of the screen, measured in points.

## Declaration

```swift
var bounds: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

This rectangle is specified in the current coordinate space, which takes into account any interface rotations in effect for the device. Therefore, the value of this property may change when the device rotates between portrait and landscape orientations.

## See Also

### Getting the size and scale

- [nativeBounds](nativebounds.md): The bounding rectangle of the physical screen, measured in pixels.
- [nativeScale](nativescale.md): The native scale factor for the physical screen.
- [scale](scale.md): The natural scale factor associated with the screen.

# bounds (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS

The bounding rectangle of the screen, measured in points.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect bounds;
```

<a id="Discussion"></a>

## Discussion

This rectangle is specified in the current coordinate space, which takes into account any interface rotations in effect for the device. Therefore, the value of this property may change when the device rotates between portrait and landscape orientations.

## See Also

### Getting the size and scale

- [nativeBounds](nativebounds.md): The bounding rectangle of the physical screen, measured in pixels.
- [nativeScale](nativescale.md): The native scale factor for the physical screen.
- [scale](scale.md): The natural scale factor associated with the screen.
