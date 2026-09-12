> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecode/frames](https://developer.apple.com/documentation/avfoundation/avcapturetimecode/frames)

# frames (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Frame component of the timecode, indicating the frame count within the second.

## Declaration

```swift
var frames: UInt8
```

## See Also

### Accessing timecode components

- [frameDuration](frameduration.md): Frame duration of the timecode. If unknown, the value is `kCMTimeInvalid`.
- [hours](hours.md): Time component representing the current timecode in hours.
- [minutes](minutes.md): Time component representing the current timecode in minutes.
- [seconds](seconds.md): Time component representing the current timecode in seconds.
- [userBits](userbits.md): A 32-bit field carrying SMPTE user bits, which are not strictly standardized. User bits are often used for additional metadata such as scene-take information, reel numbers, or dates, but their exact usage is application-dependent.

# frames (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Frame component of the timecode, indicating the frame count within the second.

## Declaration

```objectivec
uint8_t frames;
```

## See Also

### Accessing timecode components

- [frameDuration](frameduration.md): Frame duration of the timecode. If unknown, the value is `kCMTimeInvalid`.
- [hours](hours.md): Time component representing the current timecode in hours.
- [minutes](minutes.md): Time component representing the current timecode in minutes.
- [seconds](seconds.md): Time component representing the current timecode in seconds.
- [userBits](userbits.md): A 32-bit field carrying SMPTE user bits, which are not strictly standardized. User bits are often used for additional metadata such as scene-take information, reel numbers, or dates, but their exact usage is application-dependent.
