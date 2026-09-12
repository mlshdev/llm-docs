> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecode/frameduration](https://developer.apple.com/documentation/avfoundation/avcapturetimecode/frameduration)

# frameDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Frame duration of the timecode. If unknown, the value is `kCMTimeInvalid`.

## Declaration

```swift
var frameDuration: CMTime
```

## See Also

### Accessing timecode components

- [frames](frames.md): Frame component of the timecode, indicating the frame count within the second.
- [hours](hours.md): Time component representing the current timecode in hours.
- [minutes](minutes.md): Time component representing the current timecode in minutes.
- [seconds](seconds.md): Time component representing the current timecode in seconds.
- [userBits](userbits.md): A 32-bit field carrying SMPTE user bits, which are not strictly standardized. User bits are often used for additional metadata such as scene-take information, reel numbers, or dates, but their exact usage is application-dependent.

# frameDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Frame duration of the timecode. If unknown, the value is `kCMTimeInvalid`.

## Declaration

```objectivec
CMTime frameDuration;
```

## See Also

### Accessing timecode components

- [frames](frames.md): Frame component of the timecode, indicating the frame count within the second.
- [hours](hours.md): Time component representing the current timecode in hours.
- [minutes](minutes.md): Time component representing the current timecode in minutes.
- [seconds](seconds.md): Time component representing the current timecode in seconds.
- [userBits](userbits.md): A 32-bit field carrying SMPTE user bits, which are not strictly standardized. User bits are often used for additional metadata such as scene-take information, reel numbers, or dates, but their exact usage is application-dependent.
