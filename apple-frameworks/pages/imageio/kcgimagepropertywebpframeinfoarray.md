> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertywebpframeinfoarray](https://developer.apple.com/documentation/imageio/kcgimagepropertywebpframeinfoarray)

# kCGImagePropertyWebPFrameInfoArray (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An array of dictionaries that contain timing information for the image sequence.

## Declaration

```swift
let kCGImagePropertyWebPFrameInfoArray: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFArray](../corefoundation/cfarray.md). Each [CFDictionary](../corefoundation/cfdictionary.md) in the array contains timing information about an image in the sequence.

## See Also

### Sequence Timing

- [kCGImagePropertyWebPDelayTime](kcgimagepropertywebpdelaytime.md): The number of seconds to wait before displaying the next image in the sequence.
- [kCGImagePropertyWebPUnclampedDelayTime](kcgimagepropertywebpunclampeddelaytime.md): The unadjusted number of seconds to wait before displaying the next image in the sequence.
- [kCGImagePropertyWebPLoopCount](kcgimagepropertywebploopcount.md): The number of times to play the sequence.

# kCGImagePropertyWebPFrameInfoArray (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An array of dictionaries that contain timing information for the image sequence.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyWebPFrameInfoArray;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFArrayRef](../corefoundation/cfarray.md). Each [CFDictionaryRef](../corefoundation/cfdictionary.md) in the array contains timing information about an image in the sequence.

## See Also

### Sequence Timing

- [kCGImagePropertyWebPDelayTime](kcgimagepropertywebpdelaytime.md): The number of seconds to wait before displaying the next image in the sequence.
- [kCGImagePropertyWebPUnclampedDelayTime](kcgimagepropertywebpunclampeddelaytime.md): The unadjusted number of seconds to wait before displaying the next image in the sequence.
- [kCGImagePropertyWebPLoopCount](kcgimagepropertywebploopcount.md): The number of times to play the sequence.
