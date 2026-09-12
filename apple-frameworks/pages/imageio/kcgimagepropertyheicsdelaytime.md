> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertyheicsdelaytime](https://developer.apple.com/documentation/imageio/kcgimagepropertyheicsdelaytime)

# kCGImagePropertyHEICSDelayTime (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The number of seconds to wait before displaying the next image in the sequence, clamped to a minimum of `0.1` seconds.

## Declaration

```swift
let kCGImagePropertyHEICSDelayTime: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFNumber](../corefoundation/cfnumber.md) with a floating-point value. The value of this key is never less than 100 millseconds, and the system adjusts values less than that amount to 100 milliseconds, as needed. See [kCGImagePropertyHEICSUnclampedDelayTime](kcgimagepropertyheicsunclampeddelaytime.md).

## See Also

### Sequence Timing

- [kCGImagePropertyHEICSFrameInfoArray](kcgimagepropertyheicsframeinfoarray.md): An array of dictionaries that contain timing information for the image sequence.
- [kCGImagePropertyHEICSUnclampedDelayTime](kcgimagepropertyheicsunclampeddelaytime.md): The unclamped number of seconds to wait before displaying the next image in the sequence.
- [kCGImagePropertyHEICSLoopCount](kcgimagepropertyheicsloopcount.md): The number of times to play the sequence.

# kCGImagePropertyHEICSDelayTime (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The number of seconds to wait before displaying the next image in the sequence, clamped to a minimum of `0.1` seconds.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyHEICSDelayTime;
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFNumberRef](../corefoundation/cfnumber.md) with a floating-point value. The value of this key is never less than 100 millseconds, and the system adjusts values less than that amount to 100 milliseconds, as needed. See [kCGImagePropertyHEICSUnclampedDelayTime](kcgimagepropertyheicsunclampeddelaytime.md).

## See Also

### Sequence Timing

- [kCGImagePropertyHEICSFrameInfoArray](kcgimagepropertyheicsframeinfoarray.md): An array of dictionaries that contain timing information for the image sequence.
- [kCGImagePropertyHEICSUnclampedDelayTime](kcgimagepropertyheicsunclampeddelaytime.md): The unclamped number of seconds to wait before displaying the next image in the sequence.
- [kCGImagePropertyHEICSLoopCount](kcgimagepropertyheicsloopcount.md): The number of times to play the sequence.
