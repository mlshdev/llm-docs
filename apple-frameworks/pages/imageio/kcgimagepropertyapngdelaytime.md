> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertyapngdelaytime](https://developer.apple.com/documentation/imageio/kcgimagepropertyapngdelaytime)

# kCGImagePropertyAPNGDelayTime (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of seconds to wait before displaying the next image in an animated sequence.

## Declaration

```swift
let kCGImagePropertyAPNGDelayTime: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFNumber](../corefoundation/cfnumber.md) with a floating-point value. The value of this key is never less than 50 millseconds, and the system adjusts values less than that amount to 50 milliseconds, as needed. See [kCGImagePropertyAPNGUnclampedDelayTime](kcgimagepropertyapngunclampeddelaytime.md).

## See Also

### Sequence Timing

- [kCGImagePropertyAPNGFrameInfoArray](kcgimagepropertyapngframeinfoarray.md): An array of dictionaries that contain timing information for the image sequence.
- [kCGImagePropertyAPNGUnclampedDelayTime](kcgimagepropertyapngunclampeddelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImagePropertyAPNGLoopCount](kcgimagepropertyapngloopcount.md): The number of times that an animated PNG should play through its frames before stopping.

# kCGImagePropertyAPNGDelayTime (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of seconds to wait before displaying the next image in an animated sequence.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyAPNGDelayTime;
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFNumberRef](../corefoundation/cfnumber.md) with a floating-point value. The value of this key is never less than 50 millseconds, and the system adjusts values less than that amount to 50 milliseconds, as needed. See [kCGImagePropertyAPNGUnclampedDelayTime](kcgimagepropertyapngunclampeddelaytime.md).

## See Also

### Sequence Timing

- [kCGImagePropertyAPNGFrameInfoArray](kcgimagepropertyapngframeinfoarray.md): An array of dictionaries that contain timing information for the image sequence.
- [kCGImagePropertyAPNGUnclampedDelayTime](kcgimagepropertyapngunclampeddelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImagePropertyAPNGLoopCount](kcgimagepropertyapngloopcount.md): The number of times that an animated PNG should play through its frames before stopping.
