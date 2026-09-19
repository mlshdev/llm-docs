> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imageio/kcgimagepropertyapngloopcount

# kCGImagePropertyAPNGLoopCount (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of times that an animated PNG should play through its frames before stopping.

## Declaration

```swift
let kCGImagePropertyAPNGLoopCount: CFString
```

<a id="Discussion"></a>

## Discussion

A value of `0` means the PNG repeats forever.

## See Also

### Sequence Timing

- [kCGImagePropertyAPNGFrameInfoArray](kcgimagepropertyapngframeinfoarray.md): An array of dictionaries that contain timing information for the image sequence.
- [kCGImagePropertyAPNGDelayTime](kcgimagepropertyapngdelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImagePropertyAPNGUnclampedDelayTime](kcgimagepropertyapngunclampeddelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.

# kCGImagePropertyAPNGLoopCount (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of times that an animated PNG should play through its frames before stopping.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyAPNGLoopCount;
```

<a id="Discussion"></a>

## Discussion

A value of `0` means the PNG repeats forever.

## See Also

### Sequence Timing

- [kCGImagePropertyAPNGFrameInfoArray](kcgimagepropertyapngframeinfoarray.md): An array of dictionaries that contain timing information for the image sequence.
- [kCGImagePropertyAPNGDelayTime](kcgimagepropertyapngdelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImagePropertyAPNGUnclampedDelayTime](kcgimagepropertyapngunclampeddelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
