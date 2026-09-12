> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticadvancedpatternplayer/seek(tooffset:)](https://developer.apple.com/documentation/corehaptics/chhapticadvancedpatternplayer/seek(tooffset:))

# seek(toOffset:) (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Jumps to the specified offset time in playing the haptic.

## Declaration

```swift
func seek(toOffset offsetTime: TimeInterval) throws
```

## Parameters

- `offsetTime`: The time in the haptic pattern at which to seek playback.

## See Also

### Controlling Playback

- [pause(atTime:)](pause%28attime_%29.md): Pauses the haptic player during playback.
- [resume(atTime:)](resume%28attime_%29.md): Resumes playing a paused haptic.

# seekToOffset:error: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Jumps to the specified offset time in playing the haptic.

## Declaration

```objectivec
- (BOOL) seekToOffset:(NSTimeInterval) offsetTime error:(NSError **) outError;
```

## Parameters

- `offsetTime`: The time in the haptic pattern at which to seek playback.
- `outError`: The error to throw in case the player couldn’t seek.

## See Also

### Controlling Playback

- [pauseAtTime:error:](pause%28attime_%29.md): Pauses the haptic player during playback.
- [resumeAtTime:error:](resume%28attime_%29.md): Resumes playing a paused haptic.
