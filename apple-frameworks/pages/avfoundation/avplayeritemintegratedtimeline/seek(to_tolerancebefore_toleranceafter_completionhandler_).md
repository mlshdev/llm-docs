> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemintegratedtimeline/seek(to:tolerancebefore:toleranceafter:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avplayeritemintegratedtimeline/seek(to:tolerancebefore:toleranceafter:completionhandler:))

# seek(to:toleranceBefore:toleranceAfter:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Seeks to a particular time in the integrated time domain.

## Declaration

```swift
func seek(to time: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime, completionHandler: (@Sendable (Bool) -> Void)? = nil)
```

```swift
func seek(to time: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime) async -> Bool
```

## Parameters

- `time`: A time represented in the integrated time domain.
- `toleranceBefore`: A tolerance before the target time to allow.
- `toleranceAfter`: A tolerance after the target time to allow.
- `completionHandler`: A callback the system invokes after the seek completes. It passes a Boolean value of `true` if the playhead moved to the new time.

## See Also

### Seeking

- [seek(to:completionHandler:)](seek%28to_completionhandler_%29.md): Seeks to a particular date in the integrated time domain.

# seekToTime:toleranceBefore:toleranceAfter:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Seeks to a particular time in the integrated time domain.

## Declaration

```objectivec
- (void) seekToTime:(CMTime) time toleranceBefore:(CMTime) toleranceBefore toleranceAfter:(CMTime) toleranceAfter completionHandler:(void (^)(BOOL success)) completionHandler;
```

## Parameters

- `time`: A time represented in the integrated time domain.
- `toleranceBefore`: A tolerance before the target time to allow.
- `toleranceAfter`: A tolerance after the target time to allow.
- `completionHandler`: A callback the system invokes after the seek completes. It passes a Boolean value of `true` if the playhead moved to the new time.

## See Also

### Seeking

- [seekToDate:completionHandler:](seek%28to_completionhandler_%29.md): Seeks to a particular date in the integrated time domain.
