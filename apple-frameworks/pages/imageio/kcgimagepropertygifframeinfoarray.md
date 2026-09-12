> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertygifframeinfoarray](https://developer.apple.com/documentation/imageio/kcgimagepropertygifframeinfoarray)

# kCGImagePropertyGIFFrameInfoArray (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An array of dictionaries that contain timing information for the image sequence.

## Declaration

```swift
let kCGImagePropertyGIFFrameInfoArray: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFArray](../corefoundation/cfarray.md). Each [CFDictionary](../corefoundation/cfdictionary.md) in the array contains timing information about an image in the sequence.

## See Also

### Sequence Timing

- [kCGImagePropertyGIFDelayTime](kcgimagepropertygifdelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence, clamped to a minimum of 100 milliseconds.
- [kCGImagePropertyGIFUnclampedDelayTime](kcgimagepropertygifunclampeddelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImagePropertyGIFLoopCount](kcgimagepropertygifloopcount.md): The number of times to repeat an animated sequence.

# kCGImagePropertyGIFFrameInfoArray (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An array of dictionaries that contain timing information for the image sequence.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyGIFFrameInfoArray;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFArrayRef](../corefoundation/cfarray.md). Each [CFDictionaryRef](../corefoundation/cfdictionary.md) in the array contains timing information about an image in the sequence.

## See Also

### Sequence Timing

- [kCGImagePropertyGIFDelayTime](kcgimagepropertygifdelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence, clamped to a minimum of 100 milliseconds.
- [kCGImagePropertyGIFUnclampedDelayTime](kcgimagepropertygifunclampeddelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImagePropertyGIFLoopCount](kcgimagepropertygifloopcount.md): The number of times to repeat an animated sequence.
