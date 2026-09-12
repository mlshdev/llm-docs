> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofileregionflags/loopenable](https://developer.apple.com/documentation/audiotoolbox/audiofileregionflags/loopenable)

# loopEnable (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

If set, the region is looped. You must set one or both of the remaining flags must also be set for the region to be looped.

## Declaration

```swift
static var loopEnable: AudioFileRegionFlags { get }
```

## See Also

### Constants

- [playBackward](playbackward.md): If set, the region is played backward.
- [playForward](playforward.md): If set, the region is played forward.

# kAudioFileRegionFlag_LoopEnable (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

If set, the region is looped. You must set one or both of the remaining flags must also be set for the region to be looped.

## Declaration

```objectivec
kAudioFileRegionFlag_LoopEnable
```

## See Also

### Constants

- [kAudioFileRegionFlag_PlayBackward](playbackward.md): If set, the region is played backward.
- [kAudioFileRegionFlag_PlayForward](playforward.md): If set, the region is played forward.
