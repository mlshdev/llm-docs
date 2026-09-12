> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/routechangereason/wakefromsleep](https://developer.apple.com/documentation/avfaudio/avaudiosession/routechangereason/wakefromsleep)

# AVAudioSession.RouteChangeReason.wakeFromSleep (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

A value that indicates that the route changed when the device woke up from sleep.

## Declaration

```swift
case wakeFromSleep
```

## See Also

### Route Change Reasons

- [AVAudioSession.RouteChangeReason.unknown](unknown.md): A value that indicates the reason for the change is unknown.
- [AVAudioSession.RouteChangeReason.newDeviceAvailable](newdeviceavailable.md): A value that indicates a user action, such as plugging in a headset, has made a preferred audio route available.
- [AVAudioSession.RouteChangeReason.oldDeviceUnavailable](olddeviceunavailable.md): A value that indicates that the previous audio output path is no longer available.
- [AVAudioSession.RouteChangeReason.categoryChange](categorychange.md): A value that indicates that the category of the session object changed.
- [AVAudioSession.RouteChangeReason.override](override.md): A value that indicates that the output route was overridden by the app.
- [AVAudioSession.RouteChangeReason.noSuitableRouteForCategory](nosuitablerouteforcategory.md): A value that indicates that the route changed because no suitable route is now available for the specified category.
- [AVAudioSession.RouteChangeReason.routeConfigurationChange](routeconfigurationchange.md): A value that indicates that the configuration for a set of I/O ports has changed.

# AVAudioSessionRouteChangeReasonWakeFromSleep (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A value that indicates that the route changed when the device woke up from sleep.

## Declaration

```objectivec
AVAudioSessionRouteChangeReasonWakeFromSleep
```

## See Also

### Route Change Reasons

- [AVAudioSessionRouteChangeReasonUnknown](unknown.md): A value that indicates the reason for the change is unknown.
- [AVAudioSessionRouteChangeReasonNewDeviceAvailable](newdeviceavailable.md): A value that indicates a user action, such as plugging in a headset, has made a preferred audio route available.
- [AVAudioSessionRouteChangeReasonOldDeviceUnavailable](olddeviceunavailable.md): A value that indicates that the previous audio output path is no longer available.
- [AVAudioSessionRouteChangeReasonCategoryChange](categorychange.md): A value that indicates that the category of the session object changed.
- [AVAudioSessionRouteChangeReasonOverride](override.md): A value that indicates that the output route was overridden by the app.
- [AVAudioSessionRouteChangeReasonNoSuitableRouteForCategory](nosuitablerouteforcategory.md): A value that indicates that the route changed because no suitable route is now available for the specified category.
- [AVAudioSessionRouteChangeReasonRouteConfigurationChange](routeconfigurationchange.md): A value that indicates that the configuration for a set of I/O ports has changed.
