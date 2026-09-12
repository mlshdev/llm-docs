> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticpatternplayer/cancel()](https://developer.apple.com/documentation/corehaptics/chhapticpatternplayer/cancel())

# cancel() (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Stops the pattern player immediately and returns the specified error.

## Declaration

```swift
func cancel() throws
```

## See Also

### Starting and Stopping Playback

- [start(atTime:)](start%28attime_%29.md): Starts playing the pattern at the specified time.
- [stop(atTime:)](stop%28attime_%29.md): Stops playing the pattern at the specified time.

# cancelAndReturnError: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Stops the pattern player immediately and returns the specified error.

## Declaration

```objectivec
- (BOOL) cancelAndReturnError:(NSError **) outError;
```

## Parameters

- `outError`: The error to specify for justifying the cancellation of pattern playback.

## See Also

### Starting and Stopping Playback

- [startAtTime:error:](start%28attime_%29.md): Starts playing the pattern at the specified time.
- [stopAtTime:error:](stop%28attime_%29.md): Stops playing the pattern at the specified time.
