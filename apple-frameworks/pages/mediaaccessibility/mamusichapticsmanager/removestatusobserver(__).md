> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/mamusichapticsmanager/removestatusobserver(_:)](https://developer.apple.com/documentation/mediaaccessibility/mamusichapticsmanager/removestatusobserver(_:))

# removeStatusObserver(\_:) (Swift)

**Framework:** Media Accessibility  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Removes the observer monitoring the status of haptic playback for the Now Playing song.

## Declaration

```swift
func removeStatusObserver(_ registrationToken: any NSCopying)
```

## See Also

### Observing haptic playback

- [addStatusObserver(\_:)](addstatusobserver%28__%29.md): Adds an observer to monitor the status of haptic playback for the Now Playing song.

# removeStatusObserver: (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Removes the observer monitoring the status of haptic playback for the Now Playing song.

## Declaration

```objectivec
- (void) removeStatusObserver:(id<NSCopying>) registrationToken;
```

## See Also

### Observing haptic playback

- [addStatusObserver:](addstatusobserver%28__%29.md): Adds an observer to monitor the status of haptic playback for the Now Playing song.
