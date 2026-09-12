> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertygifunclampeddelaytime](https://developer.apple.com/documentation/imageio/kcgimagepropertygifunclampeddelaytime)

# kCGImagePropertyGIFUnclampedDelayTime (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of seconds to wait before displaying the next image in an animated sequence.

## Declaration

```swift
let kCGImagePropertyGIFUnclampedDelayTime: CFString
```

<a id="Discussion"></a>

## Discussion

This value may be `0` milliseconds or higher. Unlike the [kCGImagePropertyGIFDelayTime](kcgimagepropertygifdelaytime.md) property, this value is not clamped at the low end of the range.

## See Also

### Sequence Timing

- [kCGImagePropertyGIFFrameInfoArray](kcgimagepropertygifframeinfoarray.md): An array of dictionaries that contain timing information for the image sequence.
- [kCGImagePropertyGIFDelayTime](kcgimagepropertygifdelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence, clamped to a minimum of 100 milliseconds.
- [kCGImagePropertyGIFLoopCount](kcgimagepropertygifloopcount.md): The number of times to repeat an animated sequence.

# kCGImagePropertyGIFUnclampedDelayTime (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of seconds to wait before displaying the next image in an animated sequence.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyGIFUnclampedDelayTime;
```

<a id="Discussion"></a>

## Discussion

This value may be `0` milliseconds or higher. Unlike the [kCGImagePropertyGIFDelayTime](kcgimagepropertygifdelaytime.md) property, this value is not clamped at the low end of the range.

## See Also

### Sequence Timing

- [kCGImagePropertyGIFFrameInfoArray](kcgimagepropertygifframeinfoarray.md): An array of dictionaries that contain timing information for the image sequence.
- [kCGImagePropertyGIFDelayTime](kcgimagepropertygifdelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence, clamped to a minimum of 100 milliseconds.
- [kCGImagePropertyGIFLoopCount](kcgimagepropertygifloopcount.md): The number of times to repeat an animated sequence.
