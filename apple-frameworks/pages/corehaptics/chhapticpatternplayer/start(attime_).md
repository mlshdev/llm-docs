> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticpatternplayer/start(attime:)](https://developer.apple.com/documentation/corehaptics/chhapticpatternplayer/start(attime:))

# start(atTime:) (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Starts playing the pattern at the specified time.

## Declaration

```swift
func start(atTime time: TimeInterval) throws
```

## Parameters

- `time`: The time from which to start playing the pattern.

## Mentioned In

- [Playing a single-tap haptic pattern](../playing-a-single-tap-haptic-pattern.md)

<a id="Discussion"></a>

## Discussion

If `time` is `0` or any value less than the haptic engine’s [currentTime](../chhapticengine/currenttime.md), the pattern starts playing immediately. If you call this method on a player that’s already playing, it restarts itself at the beginning of the pattern.

## See Also

### Starting and Stopping Playback

- [stop(atTime:)](stop%28attime_%29.md): Stops playing the pattern at the specified time.
- [cancel()](cancel%28%29.md): Stops the pattern player immediately and returns the specified error.

# startAtTime:error: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Starts playing the pattern at the specified time.

## Declaration

```objectivec
- (BOOL) startAtTime:(NSTimeInterval) time error:(NSError **) outError;
```

## Parameters

- `time`: The time from which to start playing the pattern.
- `outError`: An error that contains information about why the pattern player couldn’t start, or `nil` if no error occurred.

## Mentioned In

- [Playing a single-tap haptic pattern](../playing-a-single-tap-haptic-pattern.md)

<a id="Discussion"></a>

## Discussion

If `time` is `0` or any value less than the haptic engine’s [currentTime](../chhapticengine/currenttime.md), the pattern starts playing immediately. If you call this method on a player that’s already playing, it restarts itself at the beginning of the pattern.

## See Also

### Starting and Stopping Playback

- [stopAtTime:error:](stop%28attime_%29.md): Stops playing the pattern at the specified time.
- [cancelAndReturnError:](cancel%28%29.md): Stops the pattern player immediately and returns the specified error.
