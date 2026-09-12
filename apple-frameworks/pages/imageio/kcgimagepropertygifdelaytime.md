> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertygifdelaytime](https://developer.apple.com/documentation/imageio/kcgimagepropertygifdelaytime)

# kCGImagePropertyGIFDelayTime (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of seconds to wait before displaying the next image in an animated sequence, clamped to a minimum of 100 milliseconds.

## Declaration

```swift
let kCGImagePropertyGIFDelayTime: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFNumber](../corefoundation/cfnumber.md) with a floating-point value. The value of this key is never less than 100 millseconds, and the system adjusts values less than that amount to 100 milliseconds, as needed. See [kCGImagePropertyGIFUnclampedDelayTime](kcgimagepropertygifunclampeddelaytime.md).

## See Also

### Sequence Timing

- [kCGImagePropertyGIFFrameInfoArray](kcgimagepropertygifframeinfoarray.md): An array of dictionaries that contain timing information for the image sequence.
- [kCGImagePropertyGIFUnclampedDelayTime](kcgimagepropertygifunclampeddelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImagePropertyGIFLoopCount](kcgimagepropertygifloopcount.md): The number of times to repeat an animated sequence.

# kCGImagePropertyGIFDelayTime (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of seconds to wait before displaying the next image in an animated sequence, clamped to a minimum of 100 milliseconds.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyGIFDelayTime;
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFNumberRef](../corefoundation/cfnumber.md) with a floating-point value. The value of this key is never less than 100 millseconds, and the system adjusts values less than that amount to 100 milliseconds, as needed. See [kCGImagePropertyGIFUnclampedDelayTime](kcgimagepropertygifunclampeddelaytime.md).

## See Also

### Sequence Timing

- [kCGImagePropertyGIFFrameInfoArray](kcgimagepropertygifframeinfoarray.md): An array of dictionaries that contain timing information for the image sequence.
- [kCGImagePropertyGIFUnclampedDelayTime](kcgimagepropertygifunclampeddelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImagePropertyGIFLoopCount](kcgimagepropertygifloopcount.md): The number of times to repeat an animated sequence.
