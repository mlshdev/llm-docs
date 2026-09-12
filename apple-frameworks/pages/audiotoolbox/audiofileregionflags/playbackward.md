> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofileregionflags/playbackward](https://developer.apple.com/documentation/audiotoolbox/audiofileregionflags/playbackward)

# playBackward (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

If set, the region is played backward.

## Declaration

```swift
static var playBackward: AudioFileRegionFlags { get }
```

## See Also

### Constants

- [loopEnable](loopenable.md): If set, the region is looped. You must set one or both of the remaining flags must also be set for the region to be looped.
- [playForward](playforward.md): If set, the region is played forward.

# kAudioFileRegionFlag_PlayBackward (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

If set, the region is played backward.

## Declaration

```objectivec
kAudioFileRegionFlag_PlayBackward
```

## See Also

### Constants

- [kAudioFileRegionFlag_LoopEnable](loopenable.md): If set, the region is looped. You must set one or both of the remaining flags must also be set for the region to be looped.
- [kAudioFileRegionFlag_PlayForward](playforward.md): If set, the region is played forward.
