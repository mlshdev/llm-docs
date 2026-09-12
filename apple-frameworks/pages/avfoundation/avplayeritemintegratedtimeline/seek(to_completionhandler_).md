> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemintegratedtimeline/seek(to:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avplayeritemintegratedtimeline/seek(to:completionhandler:))

# seek(to:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Seeks to a particular date in the integrated time domain.

## Declaration

```swift
func seek(to date: Date, completionHandler: (@Sendable (Bool) -> Void)? = nil)
```

```swift
func seek(to date: Date) async -> Bool
```

## Parameters

- `date`: A date represented in the integrated time domain.
- `completionHandler`: A callback the system invokes after the seek completes. It passes a Boolean value of `true` if the playhead moved to the new date.

## See Also

### Seeking

- [seek(to:toleranceBefore:toleranceAfter:completionHandler:)](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Seeks to a particular time in the integrated time domain.

# seekToDate:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Seeks to a particular date in the integrated time domain.

## Declaration

```objectivec
- (void) seekToDate:(NSDate *) date completionHandler:(void (^)(BOOL success)) completionHandler;
```

## Parameters

- `date`: A date represented in the integrated time domain.
- `completionHandler`: A callback the system invokes after the seek completes. It passes a Boolean value of `true` if the playhead moved to the new date.

## See Also

### Seeking

- [seekToTime:toleranceBefore:toleranceAfter:completionHandler:](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Seeks to a particular time in the integrated time domain.
