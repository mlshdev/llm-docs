> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticpatternplayer/stop(attime:)](https://developer.apple.com/documentation/corehaptics/chhapticpatternplayer/stop(attime:))

# stop(atTime:) (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Stops playing the pattern at the specified time.

## Declaration

```swift
func stop(atTime time: TimeInterval) throws
```

## Parameters

- `time`: The time at which to stop playing the pattern.

<a id="Discussion"></a>

## Discussion

If `time` is `0` or any value less than the haptic engine’s [currentTime](../chhapticengine/currenttime.md), the pattern stops playing immediately.

## See Also

### Starting and Stopping Playback

- [start(atTime:)](start%28attime_%29.md): Starts playing the pattern at the specified time.
- [cancel()](cancel%28%29.md): Stops the pattern player immediately and returns the specified error.

# stopAtTime:error: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Stops playing the pattern at the specified time.

## Declaration

```objectivec
- (BOOL) stopAtTime:(NSTimeInterval) time error:(NSError **) outError;
```

## Parameters

- `time`: The time at which to stop playing the pattern.
- `outError`: An error that contains information about why the pattern player couldn’t stop, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

If `time` is `0` or any value less than the haptic engine’s [currentTime](../chhapticengine/currenttime.md), the pattern stops playing immediately.

## See Also

### Starting and Stopping Playback

- [startAtTime:error:](start%28attime_%29.md): Starts playing the pattern at the specified time.
- [cancelAndReturnError:](cancel%28%29.md): Stops the pattern player immediately and returns the specified error.
