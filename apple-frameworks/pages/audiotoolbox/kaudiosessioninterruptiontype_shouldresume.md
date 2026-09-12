> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiosessioninterruptiontype_shouldresume](https://developer.apple.com/documentation/audiotoolbox/kaudiosessioninterruptiontype_shouldresume)

# kAudioSessionInterruptionType_ShouldResume (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Indicates that the interruption that has just ended was one for which it is appropriate to immediately resume playback; for example, an incoming phone call was rejected by the user.

> Deprecated in iOS 7.0.

## Declaration

```swift
var kAudioSessionInterruptionType_ShouldResume: Int { get }
```

## See Also

### Constants

- [kAudioSessionInterruptionType_ShouldNotResume](kaudiosessioninterruptiontype_shouldnotresume.md): Indicates that the interruption that has just ended was one for which it is not appropriate to resume playback; for example, your app had been interrupted by iPod playback.

# kAudioSessionInterruptionType_ShouldResume (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Indicates that the interruption that has just ended was one for which it is appropriate to immediately resume playback; for example, an incoming phone call was rejected by the user.

> Deprecated in iOS 7.0.

## Declaration

```objectivec
kAudioSessionInterruptionType_ShouldResume
```

## See Also

### Constants

- [kAudioSessionInterruptionType_ShouldNotResume](kaudiosessioninterruptiontype_shouldnotresume.md): Indicates that the interruption that has just ended was one for which it is not appropriate to resume playback; for example, your app had been interrupted by iPod playback.
