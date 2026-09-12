> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofileregionflags/playforward](https://developer.apple.com/documentation/audiotoolbox/audiofileregionflags/playforward)

# playForward (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

If set, the region is played forward.

## Declaration

```swift
static var playForward: AudioFileRegionFlags { get }
```

## See Also

### Constants

- [loopEnable](loopenable.md): If set, the region is looped. You must set one or both of the remaining flags must also be set for the region to be looped.
- [playBackward](playbackward.md): If set, the region is played backward.

# kAudioFileRegionFlag_PlayForward (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

If set, the region is played forward.

## Declaration

```objectivec
kAudioFileRegionFlag_PlayForward
```

## See Also

### Constants

- [kAudioFileRegionFlag_LoopEnable](loopenable.md): If set, the region is looped. You must set one or both of the remaining flags must also be set for the region to be looped.
- [kAudioFileRegionFlag_PlayBackward](playbackward.md): If set, the region is played backward.
