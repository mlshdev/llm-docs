> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/scale](https://developer.apple.com/documentation/uikit/uiscreen/scale)

# scale (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS

The natural scale factor associated with the screen.

## Declaration

```swift
var scale: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

This value reflects the scale factor needed to convert from the default logical coordinate space into the device coordinate space of this screen. The default logical coordinate space is measured using points. For Retina displays, the scale factor may be `3.0` or `2.0` and one point can represented by nine or four pixels, respectively. For standard-resolution displays, the scale factor is `1.0` and one point equals one pixel.

## See Also

### Getting the size and scale

- [bounds](bounds.md): The bounding rectangle of the screen, measured in points.
- [nativeBounds](nativebounds.md): The bounding rectangle of the physical screen, measured in pixels.
- [nativeScale](nativescale.md): The native scale factor for the physical screen.

# scale (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS

The natural scale factor associated with the screen.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat scale;
```

<a id="Discussion"></a>

## Discussion

This value reflects the scale factor needed to convert from the default logical coordinate space into the device coordinate space of this screen. The default logical coordinate space is measured using points. For Retina displays, the scale factor may be `3.0` or `2.0` and one point can represented by nine or four pixels, respectively. For standard-resolution displays, the scale factor is `1.0` and one point equals one pixel.

## See Also

### Getting the size and scale

- [bounds](bounds.md): The bounding rectangle of the screen, measured in points.
- [nativeBounds](nativebounds.md): The bounding rectangle of the physical screen, measured in pixels.
- [nativeScale](nativescale.md): The native scale factor for the physical screen.
