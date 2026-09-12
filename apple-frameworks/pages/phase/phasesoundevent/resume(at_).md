> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundevent/resume(at:)](https://developer.apple.com/documentation/phase/phasesoundevent/resume(at:))

# resume(at:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
func resume(at time: AVAudioTime?)
```

## Parameters

- `time`: The desired start time based on the engine time retrieved from \[PHASEEngine lastRenderTime\]

<a id="discussion"></a>

## Discussion

Resume the sound event at a specific time

A nil time parameter will resume immediately. The device time is not scaled by UnitsPerSecond and is in seconds.

# resumeAtTime: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
- (void) resumeAtTime:(AVAudioTime *) time;
```

## Parameters

- `time`: The desired start time based on the engine time retrieved from \[PHASEEngine lastRenderTime\]

<a id="discussion"></a>

## Discussion

Resume the sound event at a specific time

A nil time parameter will resume immediately. The device time is not scaled by UnitsPerSecond and is in seconds.
