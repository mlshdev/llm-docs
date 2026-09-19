> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaaccessibility/mamusichapticsmanager/addstatusobserver(_:)

# addStatusObserver(\_:) (Swift)

**Framework:** Media Accessibility  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Adds an observer to monitor the status of haptic playback for the Now Playing song.

## Declaration

```swift
func addStatusObserver(_ statusHandler: @escaping (String, Bool) -> Void) -> (any NSCopying)?
```

## See Also

### Observing haptic playback

- [removeStatusObserver(\_:)](removestatusobserver%28__%29.md): Removes the observer monitoring the status of haptic playback for the Now Playing song.

# addStatusObserver: (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Adds an observer to monitor the status of haptic playback for the Now Playing song.

## Declaration

```objectivec
- (id<NSCopying>) addStatusObserver:(void (^)(NSString *internationalStandardRecordingCode, BOOL musicHapticsActive)) statusHandler;
```

## See Also

### Observing haptic playback

- [removeStatusObserver:](removestatusobserver%28__%29.md): Removes the observer monitoring the status of haptic playback for the Now Playing song.
