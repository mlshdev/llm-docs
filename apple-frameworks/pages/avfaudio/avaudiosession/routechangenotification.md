> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/routechangenotification](https://developer.apple.com/documentation/avfaudio/avaudiosession/routechangenotification)

# routeChangeNotification (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A notification the system posts when its audio route changes.

## Declaration

```swift
class let routeChangeNotification: NSNotification.Name
```

## Mentioned In

- [Responding to audio route changes](../responding-to-audio-route-changes.md)

<a id="Discussion"></a>

## Discussion

The [userInfo](../../foundation/nsnotification/userinfo.md) dictionary of this notification contains the [AVAudioSessionRouteChangeReasonKey](../avaudiosessionroutechangereasonkey.md) and [AVAudioSessionRouteChangePreviousRouteKey](../avaudiosessionroutechangepreviousroutekey.md) keys, which provide information about the route change.

See [Responding to audio route changes](../responding-to-audio-route-changes.md) for more information on using this notification.

The system posts this notification on a secondary thread.

## Topics

### User Info Keys

- [AVAudioSessionRouteChangeReasonKey](../avaudiosessionroutechangereasonkey.md): A user info key that’s used to retrieve the route change reason.
- [AVAudioSessionRouteChangePreviousRouteKey](../avaudiosessionroutechangepreviousroutekey.md): A user info key that’s used to retrieve the previously active audio session route.

### User Info Values

- [AVAudioSession.RouteChangeReason](routechangereason.md): Constants that indicate the reason for an audio route change.

## See Also

### Inspecting the current route

- [currentRoute](currentroute.md): A description of the current audio route’s input and output ports.
- [AVAudioSessionRouteDescription](../avaudiosessionroutedescription.md): An object that describes the input and output ports associated with a session’s audio route.
- [AVAudioSessionPortDescription](../avaudiosessionportdescription.md): Information about the capabilities of the port and the hardware channels it supports.

# AVAudioSessionRouteChangeNotification (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A notification the system posts when its audio route changes.

## Declaration

```objectivec
extern NSNotificationName const AVAudioSessionRouteChangeNotification;
```

## Mentioned In

- [Responding to audio route changes](../responding-to-audio-route-changes.md)

<a id="Discussion"></a>

## Discussion

The [userInfo](../../foundation/nsnotification/userinfo.md) dictionary of this notification contains the [AVAudioSessionRouteChangeReasonKey](../avaudiosessionroutechangereasonkey.md) and [AVAudioSessionRouteChangePreviousRouteKey](../avaudiosessionroutechangepreviousroutekey.md) keys, which provide information about the route change.

See [Responding to audio route changes](../responding-to-audio-route-changes.md) for more information on using this notification.

The system posts this notification on a secondary thread.

## Topics

### User Info Keys

- [AVAudioSessionRouteChangeReasonKey](../avaudiosessionroutechangereasonkey.md): A user info key that’s used to retrieve the route change reason.
- [AVAudioSessionRouteChangePreviousRouteKey](../avaudiosessionroutechangepreviousroutekey.md): A user info key that’s used to retrieve the previously active audio session route.

### User Info Values

- [AVAudioSessionRouteChangeReason](routechangereason.md): Constants that indicate the reason for an audio route change.

## See Also

### Inspecting the current route

- [currentRoute](currentroute.md): A description of the current audio route’s input and output ports.
- [AVAudioSessionRouteDescription](../avaudiosessionroutedescription.md): An object that describes the input and output ports associated with a session’s audio route.
- [AVAudioSessionPortDescription](../avaudiosessionportdescription.md): Information about the capabilities of the port and the hardware channels it supports.
