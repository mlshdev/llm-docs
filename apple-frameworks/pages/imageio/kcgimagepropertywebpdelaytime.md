> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertywebpdelaytime](https://developer.apple.com/documentation/imageio/kcgimagepropertywebpdelaytime)

# kCGImagePropertyWebPDelayTime (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The number of seconds to wait before displaying the next image in the sequence.

## Declaration

```swift
let kCGImagePropertyWebPDelayTime: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFNumber](../corefoundation/cfnumber.md) with a floating-point value. The value of this key is never less than 100 millseconds, and the system adjusts values less than that amount to 100 milliseconds, as needed. See [kCGImagePropertyGIFUnclampedDelayTime](kcgimagepropertygifunclampeddelaytime.md).

## See Also

### Sequence Timing

- [kCGImagePropertyWebPFrameInfoArray](kcgimagepropertywebpframeinfoarray.md): An array of dictionaries that contain timing information for the image sequence.
- [kCGImagePropertyWebPUnclampedDelayTime](kcgimagepropertywebpunclampeddelaytime.md): The unadjusted number of seconds to wait before displaying the next image in the sequence.
- [kCGImagePropertyWebPLoopCount](kcgimagepropertywebploopcount.md): The number of times to play the sequence.

# kCGImagePropertyWebPDelayTime (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The number of seconds to wait before displaying the next image in the sequence.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyWebPDelayTime;
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFNumberRef](../corefoundation/cfnumber.md) with a floating-point value. The value of this key is never less than 100 millseconds, and the system adjusts values less than that amount to 100 milliseconds, as needed. See [kCGImagePropertyGIFUnclampedDelayTime](kcgimagepropertygifunclampeddelaytime.md).

## See Also

### Sequence Timing

- [kCGImagePropertyWebPFrameInfoArray](kcgimagepropertywebpframeinfoarray.md): An array of dictionaries that contain timing information for the image sequence.
- [kCGImagePropertyWebPUnclampedDelayTime](kcgimagepropertywebpunclampeddelaytime.md): The unadjusted number of seconds to wait before displaying the next image in the sequence.
- [kCGImagePropertyWebPLoopCount](kcgimagepropertywebploopcount.md): The number of times to play the sequence.
