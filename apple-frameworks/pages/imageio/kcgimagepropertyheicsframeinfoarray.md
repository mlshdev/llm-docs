> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertyheicsframeinfoarray](https://developer.apple.com/documentation/imageio/kcgimagepropertyheicsframeinfoarray)

# kCGImagePropertyHEICSFrameInfoArray (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An array of dictionaries that contain timing information for the image sequence.

## Declaration

```swift
let kCGImagePropertyHEICSFrameInfoArray: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFArray](../corefoundation/cfarray.md). Each [CFDictionary](../corefoundation/cfdictionary.md) in the array contains timing information about an image in the sequence.

## See Also

### Sequence Timing

- [kCGImagePropertyHEICSDelayTime](kcgimagepropertyheicsdelaytime.md): The number of seconds to wait before displaying the next image in the sequence, clamped to a minimum of `0.1` seconds.
- [kCGImagePropertyHEICSUnclampedDelayTime](kcgimagepropertyheicsunclampeddelaytime.md): The unclamped number of seconds to wait before displaying the next image in the sequence.
- [kCGImagePropertyHEICSLoopCount](kcgimagepropertyheicsloopcount.md): The number of times to play the sequence.

# kCGImagePropertyHEICSFrameInfoArray (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An array of dictionaries that contain timing information for the image sequence.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyHEICSFrameInfoArray;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFArrayRef](../corefoundation/cfarray.md). Each [CFDictionaryRef](../corefoundation/cfdictionary.md) in the array contains timing information about an image in the sequence.

## See Also

### Sequence Timing

- [kCGImagePropertyHEICSDelayTime](kcgimagepropertyheicsdelaytime.md): The number of seconds to wait before displaying the next image in the sequence, clamped to a minimum of `0.1` seconds.
- [kCGImagePropertyHEICSUnclampedDelayTime](kcgimagepropertyheicsunclampeddelaytime.md): The unclamped number of seconds to wait before displaying the next image in the sequence.
- [kCGImagePropertyHEICSLoopCount](kcgimagepropertyheicsloopcount.md): The number of times to play the sequence.
