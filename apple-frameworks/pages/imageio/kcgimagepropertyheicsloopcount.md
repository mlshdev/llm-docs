> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertyheicsloopcount](https://developer.apple.com/documentation/imageio/kcgimagepropertyheicsloopcount)

# kCGImagePropertyHEICSLoopCount (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The number of times to play the sequence.

## Declaration

```swift
let kCGImagePropertyHEICSLoopCount: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFNumber](../corefoundation/cfnumber.md).

## See Also

### Sequence Timing

- [kCGImagePropertyHEICSFrameInfoArray](kcgimagepropertyheicsframeinfoarray.md): An array of dictionaries that contain timing information for the image sequence.
- [kCGImagePropertyHEICSDelayTime](kcgimagepropertyheicsdelaytime.md): The number of seconds to wait before displaying the next image in the sequence, clamped to a minimum of `0.1` seconds.
- [kCGImagePropertyHEICSUnclampedDelayTime](kcgimagepropertyheicsunclampeddelaytime.md): The unclamped number of seconds to wait before displaying the next image in the sequence.

# kCGImagePropertyHEICSLoopCount (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The number of times to play the sequence.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyHEICSLoopCount;
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFNumberRef](../corefoundation/cfnumber.md).

## See Also

### Sequence Timing

- [kCGImagePropertyHEICSFrameInfoArray](kcgimagepropertyheicsframeinfoarray.md): An array of dictionaries that contain timing information for the image sequence.
- [kCGImagePropertyHEICSDelayTime](kcgimagepropertyheicsdelaytime.md): The number of seconds to wait before displaying the next image in the sequence, clamped to a minimum of `0.1` seconds.
- [kCGImagePropertyHEICSUnclampedDelayTime](kcgimagepropertyheicsunclampeddelaytime.md): The unclamped number of seconds to wait before displaying the next image in the sequence.
