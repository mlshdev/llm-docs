> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/nativebounds](https://developer.apple.com/documentation/uikit/uiscreen/nativebounds)

# nativeBounds (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS

The bounding rectangle of the physical screen, measured in pixels.

## Declaration

```swift
var nativeBounds: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

This rectangle is based on the device in a portrait-up orientation. This value does not change as the device rotates.

## See Also

### Getting the size and scale

- [bounds](bounds.md): The bounding rectangle of the screen, measured in points.
- [nativeScale](nativescale.md): The native scale factor for the physical screen.
- [scale](scale.md): The natural scale factor associated with the screen.

# nativeBounds (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS

The bounding rectangle of the physical screen, measured in pixels.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect nativeBounds;
```

<a id="Discussion"></a>

## Discussion

This rectangle is based on the device in a portrait-up orientation. This value does not change as the device rotates.

## See Also

### Getting the size and scale

- [bounds](bounds.md): The bounding rectangle of the screen, measured in points.
- [nativeScale](nativescale.md): The native scale factor for the physical screen.
- [scale](scale.md): The natural scale factor associated with the screen.
