> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticadvancedpatternplayer/pause(attime:)](https://developer.apple.com/documentation/corehaptics/chhapticadvancedpatternplayer/pause(attime:))

# pause(atTime:) (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Pauses the haptic player during playback.

## Declaration

```swift
func pause(atTime time: TimeInterval) throws
```

## Parameters

- `time`: The time in the haptic pattern at which to pause playback.

## See Also

### Controlling Playback

- [resume(atTime:)](resume%28attime_%29.md): Resumes playing a paused haptic.
- [seek(toOffset:)](seek%28tooffset_%29.md): Jumps to the specified offset time in playing the haptic.

# pauseAtTime:error: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Pauses the haptic player during playback.

## Declaration

```objectivec
- (BOOL) pauseAtTime:(NSTimeInterval) time error:(NSError **) outError;
```

## Parameters

- `time`: The time in the haptic pattern at which to pause playback.
- `outError`: The error to throw in case the player couldn’t pause.

## See Also

### Controlling Playback

- [resumeAtTime:error:](resume%28attime_%29.md): Resumes playing a paused haptic.
- [seekToOffset:error:](seek%28tooffset_%29.md): Jumps to the specified offset time in playing the haptic.
