> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/routechangereason](https://developer.apple.com/documentation/avfaudio/avaudiosession/routechangereason)

# AVAudioSession.RouteChangeReason (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Constants that indicate the reason for an audio route change.

## Declaration

```swift
enum RouteChangeReason
```

## Mentioned In

- [Responding to audio route changes](../responding-to-audio-route-changes.md)

<a id="overview"></a>

## Overview

These constants appear as possible values for the [AVAudioSessionRouteChangeReasonKey](../avaudiosessionroutechangereasonkey.md) key in the `userInfo` dictionary in a [routeChangeNotification](routechangenotification.md) notification.

## Topics

### Route Change Reasons

- [AVAudioSession.RouteChangeReason.unknown](routechangereason/unknown.md): A value that indicates the reason for the change is unknown.
- [AVAudioSession.RouteChangeReason.newDeviceAvailable](routechangereason/newdeviceavailable.md): A value that indicates a user action, such as plugging in a headset, has made a preferred audio route available.
- [AVAudioSession.RouteChangeReason.oldDeviceUnavailable](routechangereason/olddeviceunavailable.md): A value that indicates that the previous audio output path is no longer available.
- [AVAudioSession.RouteChangeReason.categoryChange](routechangereason/categorychange.md): A value that indicates that the category of the session object changed.
- [AVAudioSession.RouteChangeReason.override](routechangereason/override.md): A value that indicates that the output route was overridden by the app.
- [AVAudioSession.RouteChangeReason.wakeFromSleep](routechangereason/wakefromsleep.md): A value that indicates that the route changed when the device woke up from sleep.
- [AVAudioSession.RouteChangeReason.noSuitableRouteForCategory](routechangereason/nosuitablerouteforcategory.md): A value that indicates that the route changed because no suitable route is now available for the specified category.
- [AVAudioSession.RouteChangeReason.routeConfigurationChange](routechangereason/routeconfigurationchange.md): A value that indicates that the configuration for a set of I/O ports has changed.

### Initializers

- [init(rawValue:)](routechangereason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# AVAudioSessionRouteChangeReason (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that indicate the reason for an audio route change.

## Declaration

```objectivec
enum AVAudioSessionRouteChangeReason : NSUInteger;
```

## Mentioned In

- [Responding to audio route changes](../responding-to-audio-route-changes.md)

<a id="overview"></a>

## Overview

These constants appear as possible values for the [AVAudioSessionRouteChangeReasonKey](../avaudiosessionroutechangereasonkey.md) key in the `userInfo` dictionary in a [AVAudioSessionRouteChangeNotification](routechangenotification.md) notification.

## Topics

### Route Change Reasons

- [AVAudioSessionRouteChangeReasonUnknown](routechangereason/unknown.md): A value that indicates the reason for the change is unknown.
- [AVAudioSessionRouteChangeReasonNewDeviceAvailable](routechangereason/newdeviceavailable.md): A value that indicates a user action, such as plugging in a headset, has made a preferred audio route available.
- [AVAudioSessionRouteChangeReasonOldDeviceUnavailable](routechangereason/olddeviceunavailable.md): A value that indicates that the previous audio output path is no longer available.
- [AVAudioSessionRouteChangeReasonCategoryChange](routechangereason/categorychange.md): A value that indicates that the category of the session object changed.
- [AVAudioSessionRouteChangeReasonOverride](routechangereason/override.md): A value that indicates that the output route was overridden by the app.
- [AVAudioSessionRouteChangeReasonWakeFromSleep](routechangereason/wakefromsleep.md): A value that indicates that the route changed when the device woke up from sleep.
- [AVAudioSessionRouteChangeReasonNoSuitableRouteForCategory](routechangereason/nosuitablerouteforcategory.md): A value that indicates that the route changed because no suitable route is now available for the specified category.
- [AVAudioSessionRouteChangeReasonRouteConfigurationChange](routechangereason/routeconfigurationchange.md): A value that indicates that the configuration for a set of I/O ports has changed.
