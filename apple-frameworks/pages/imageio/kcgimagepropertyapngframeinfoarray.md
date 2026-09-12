> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertyapngframeinfoarray](https://developer.apple.com/documentation/imageio/kcgimagepropertyapngframeinfoarray)

# kCGImagePropertyAPNGFrameInfoArray (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An array of dictionaries that contain timing information for the image sequence.

## Declaration

```swift
let kCGImagePropertyAPNGFrameInfoArray: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFArray](../corefoundation/cfarray.md). Each [CFDictionary](../corefoundation/cfdictionary.md) in the array contains timing information about an image in the sequence.

## See Also

### Sequence Timing

- [kCGImagePropertyAPNGDelayTime](kcgimagepropertyapngdelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImagePropertyAPNGUnclampedDelayTime](kcgimagepropertyapngunclampeddelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImagePropertyAPNGLoopCount](kcgimagepropertyapngloopcount.md): The number of times that an animated PNG should play through its frames before stopping.

# kCGImagePropertyAPNGFrameInfoArray (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An array of dictionaries that contain timing information for the image sequence.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyAPNGFrameInfoArray;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFArrayRef](../corefoundation/cfarray.md). Each [CFDictionaryRef](../corefoundation/cfdictionary.md) in the array contains timing information about an image in the sequence.

## See Also

### Sequence Timing

- [kCGImagePropertyAPNGDelayTime](kcgimagepropertyapngdelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImagePropertyAPNGUnclampedDelayTime](kcgimagepropertyapngunclampeddelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImagePropertyAPNGLoopCount](kcgimagepropertyapngloopcount.md): The number of times that an animated PNG should play through its frames before stopping.
