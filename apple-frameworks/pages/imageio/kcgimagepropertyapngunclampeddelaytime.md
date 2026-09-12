> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertyapngunclampeddelaytime](https://developer.apple.com/documentation/imageio/kcgimagepropertyapngunclampeddelaytime)

# kCGImagePropertyAPNGUnclampedDelayTime (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of seconds to wait before displaying the next image in an animated sequence.

## Declaration

```swift
let kCGImagePropertyAPNGUnclampedDelayTime: CFString
```

<a id="Discussion"></a>

## Discussion

This value may be `0` milliseconds or higher. Unlike the [kCGImagePropertyAPNGDelayTime](kcgimagepropertyapngdelaytime.md) property, this value is not clamped at the low end of the range.

## See Also

### Sequence Timing

- [kCGImagePropertyAPNGFrameInfoArray](kcgimagepropertyapngframeinfoarray.md): An array of dictionaries that contain timing information for the image sequence.
- [kCGImagePropertyAPNGDelayTime](kcgimagepropertyapngdelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImagePropertyAPNGLoopCount](kcgimagepropertyapngloopcount.md): The number of times that an animated PNG should play through its frames before stopping.

# kCGImagePropertyAPNGUnclampedDelayTime (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of seconds to wait before displaying the next image in an animated sequence.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyAPNGUnclampedDelayTime;
```

<a id="Discussion"></a>

## Discussion

This value may be `0` milliseconds or higher. Unlike the [kCGImagePropertyAPNGDelayTime](kcgimagepropertyapngdelaytime.md) property, this value is not clamped at the low end of the range.

## See Also

### Sequence Timing

- [kCGImagePropertyAPNGFrameInfoArray](kcgimagepropertyapngframeinfoarray.md): An array of dictionaries that contain timing information for the image sequence.
- [kCGImagePropertyAPNGDelayTime](kcgimagepropertyapngdelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImagePropertyAPNGLoopCount](kcgimagepropertyapngloopcount.md): The number of times that an animated PNG should play through its frames before stopping.
