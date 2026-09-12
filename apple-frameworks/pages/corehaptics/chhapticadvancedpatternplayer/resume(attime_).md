> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticadvancedpatternplayer/resume(attime:)](https://developer.apple.com/documentation/corehaptics/chhapticadvancedpatternplayer/resume(attime:))

# resume(atTime:) (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Resumes playing a paused haptic.

## Declaration

```swift
func resume(atTime time: TimeInterval) throws
```

## Parameters

- `time`: The time in the haptic pattern at which to resume playback.

## See Also

### Controlling Playback

- [pause(atTime:)](pause%28attime_%29.md): Pauses the haptic player during playback.
- [seek(toOffset:)](seek%28tooffset_%29.md): Jumps to the specified offset time in playing the haptic.

# resumeAtTime:error: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Resumes playing a paused haptic.

## Declaration

```objectivec
- (BOOL) resumeAtTime:(NSTimeInterval) time error:(NSError **) outError;
```

## Parameters

- `time`: The time in the haptic pattern at which to resume playback.
- `outError`: The error to throw in case the player couldn’t resume.

## See Also

### Controlling Playback

- [pauseAtTime:error:](pause%28attime_%29.md): Pauses the haptic player during playback.
- [seekToOffset:error:](seek%28tooffset_%29.md): Jumps to the specified offset time in playing the haptic.
