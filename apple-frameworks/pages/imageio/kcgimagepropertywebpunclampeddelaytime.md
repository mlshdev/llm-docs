> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertywebpunclampeddelaytime](https://developer.apple.com/documentation/imageio/kcgimagepropertywebpunclampeddelaytime)

# kCGImagePropertyWebPUnclampedDelayTime (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The unadjusted number of seconds to wait before displaying the next image in the sequence.

## Declaration

```swift
let kCGImagePropertyWebPUnclampedDelayTime: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFNumber](../corefoundation/cfnumber.md) with a floating-point value.

## See Also

### Sequence Timing

- [kCGImagePropertyWebPFrameInfoArray](kcgimagepropertywebpframeinfoarray.md): An array of dictionaries that contain timing information for the image sequence.
- [kCGImagePropertyWebPDelayTime](kcgimagepropertywebpdelaytime.md): The number of seconds to wait before displaying the next image in the sequence.
- [kCGImagePropertyWebPLoopCount](kcgimagepropertywebploopcount.md): The number of times to play the sequence.

# kCGImagePropertyWebPUnclampedDelayTime (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The unadjusted number of seconds to wait before displaying the next image in the sequence.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyWebPUnclampedDelayTime;
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFNumberRef](../corefoundation/cfnumber.md) with a floating-point value.

## See Also

### Sequence Timing

- [kCGImagePropertyWebPFrameInfoArray](kcgimagepropertywebpframeinfoarray.md): An array of dictionaries that contain timing information for the image sequence.
- [kCGImagePropertyWebPDelayTime](kcgimagepropertywebpdelaytime.md): The number of seconds to wait before displaying the next image in the sequence.
- [kCGImagePropertyWebPLoopCount](kcgimagepropertywebploopcount.md): The number of times to play the sequence.
