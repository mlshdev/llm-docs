> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiosessioninterruptiontype_shouldnotresume](https://developer.apple.com/documentation/audiotoolbox/kaudiosessioninterruptiontype_shouldnotresume)

# kAudioSessionInterruptionType_ShouldNotResume (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Indicates that the interruption that has just ended was one for which it is not appropriate to resume playback; for example, your app had been interrupted by iPod playback.

## Declaration

```swift
var kAudioSessionInterruptionType_ShouldNotResume: Int { get }
```

## See Also

### Constants

- [kAudioSessionInterruptionType_ShouldResume](kaudiosessioninterruptiontype_shouldresume.md): Deprecated. Indicates that the interruption that has just ended was one for which it is appropriate to immediately resume playback; for example, an incoming phone call was rejected by the user.

# kAudioSessionInterruptionType_ShouldNotResume (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Indicates that the interruption that has just ended was one for which it is not appropriate to resume playback; for example, your app had been interrupted by iPod playback.

## Declaration

```objectivec
kAudioSessionInterruptionType_ShouldNotResume
```

## See Also

### Constants

- [kAudioSessionInterruptionType_ShouldResume](kaudiosessioninterruptiontype_shouldresume.md): Deprecated. Indicates that the interruption that has just ended was one for which it is appropriate to immediately resume playback; for example, an incoming phone call was rejected by the user.
