> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/routechangereason/override](https://developer.apple.com/documentation/avfaudio/avaudiosession/routechangereason/override)

# AVAudioSession.RouteChangeReason.override (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

A value that indicates that the output route was overridden by the app.

## Declaration

```swift
case override
```

## See Also

### Route Change Reasons

- [AVAudioSession.RouteChangeReason.unknown](unknown.md): A value that indicates the reason for the change is unknown.
- [AVAudioSession.RouteChangeReason.newDeviceAvailable](newdeviceavailable.md): A value that indicates a user action, such as plugging in a headset, has made a preferred audio route available.
- [AVAudioSession.RouteChangeReason.oldDeviceUnavailable](olddeviceunavailable.md): A value that indicates that the previous audio output path is no longer available.
- [AVAudioSession.RouteChangeReason.categoryChange](categorychange.md): A value that indicates that the category of the session object changed.
- [AVAudioSession.RouteChangeReason.wakeFromSleep](wakefromsleep.md): A value that indicates that the route changed when the device woke up from sleep.
- [AVAudioSession.RouteChangeReason.noSuitableRouteForCategory](nosuitablerouteforcategory.md): A value that indicates that the route changed because no suitable route is now available for the specified category.
- [AVAudioSession.RouteChangeReason.routeConfigurationChange](routeconfigurationchange.md): A value that indicates that the configuration for a set of I/O ports has changed.

# AVAudioSessionRouteChangeReasonOverride (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A value that indicates that the output route was overridden by the app.

## Declaration

```objectivec
AVAudioSessionRouteChangeReasonOverride
```

## See Also

### Route Change Reasons

- [AVAudioSessionRouteChangeReasonUnknown](unknown.md): A value that indicates the reason for the change is unknown.
- [AVAudioSessionRouteChangeReasonNewDeviceAvailable](newdeviceavailable.md): A value that indicates a user action, such as plugging in a headset, has made a preferred audio route available.
- [AVAudioSessionRouteChangeReasonOldDeviceUnavailable](olddeviceunavailable.md): A value that indicates that the previous audio output path is no longer available.
- [AVAudioSessionRouteChangeReasonCategoryChange](categorychange.md): A value that indicates that the category of the session object changed.
- [AVAudioSessionRouteChangeReasonWakeFromSleep](wakefromsleep.md): A value that indicates that the route changed when the device woke up from sleep.
- [AVAudioSessionRouteChangeReasonNoSuitableRouteForCategory](nosuitablerouteforcategory.md): A value that indicates that the route changed because no suitable route is now available for the specified category.
- [AVAudioSessionRouteChangeReasonRouteConfigurationChange](routeconfigurationchange.md): A value that indicates that the configuration for a set of I/O ports has changed.
