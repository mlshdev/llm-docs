> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertyheicsunclampeddelaytime](https://developer.apple.com/documentation/imageio/kcgimagepropertyheicsunclampeddelaytime)

# kCGImagePropertyHEICSUnclampedDelayTime (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The unclamped number of seconds to wait before displaying the next image in the sequence.

## Declaration

```swift
let kCGImagePropertyHEICSUnclampedDelayTime: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFNumber](../corefoundation/cfnumber.md) with a floating-point value.

## See Also

### Sequence Timing

- [kCGImagePropertyHEICSFrameInfoArray](kcgimagepropertyheicsframeinfoarray.md): An array of dictionaries that contain timing information for the image sequence.
- [kCGImagePropertyHEICSDelayTime](kcgimagepropertyheicsdelaytime.md): The number of seconds to wait before displaying the next image in the sequence, clamped to a minimum of `0.1` seconds.
- [kCGImagePropertyHEICSLoopCount](kcgimagepropertyheicsloopcount.md): The number of times to play the sequence.

# kCGImagePropertyHEICSUnclampedDelayTime (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The unclamped number of seconds to wait before displaying the next image in the sequence.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyHEICSUnclampedDelayTime;
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFNumberRef](../corefoundation/cfnumber.md) with a floating-point value.

## See Also

### Sequence Timing

- [kCGImagePropertyHEICSFrameInfoArray](kcgimagepropertyheicsframeinfoarray.md): An array of dictionaries that contain timing information for the image sequence.
- [kCGImagePropertyHEICSDelayTime](kcgimagepropertyheicsdelaytime.md): The number of seconds to wait before displaying the next image in the sequence, clamped to a minimum of `0.1` seconds.
- [kCGImagePropertyHEICSLoopCount](kcgimagepropertyheicsloopcount.md): The number of times to play the sequence.
