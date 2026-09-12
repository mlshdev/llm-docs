> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/currentroute](https://developer.apple.com/documentation/avfaudio/avaudiosession/currentroute)

# currentRoute (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A description of the current audio route’s input and output ports.

## Declaration

```swift
var currentRoute: AVAudioSessionRouteDescription { get }
```

## Mentioned In

- [Responding to audio route changes](../responding-to-audio-route-changes.md)
- [Routing audio to specific devices in multidevice sessions](../routing-audio-to-specific-devices-in-multidevice-sessions.md)

<a id="Discussion"></a>

## Discussion

An audio route is an electronic pathway for audio signals. Inspect the state of device audio routes and configure your preferred input and output route settings.

## See Also

### Inspecting the current route

- [AVAudioSessionRouteDescription](../avaudiosessionroutedescription.md): An object that describes the input and output ports associated with a session’s audio route.
- [AVAudioSessionPortDescription](../avaudiosessionportdescription.md): Information about the capabilities of the port and the hardware channels it supports.
- [routeChangeNotification](routechangenotification.md): A notification the system posts when its audio route changes.

# currentRoute (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A description of the current audio route’s input and output ports.

## Declaration

```objectivec
@property (readonly) AVAudioSessionRouteDescription * currentRoute;
```

## Mentioned In

- [Responding to audio route changes](../responding-to-audio-route-changes.md)
- [Routing audio to specific devices in multidevice sessions](../routing-audio-to-specific-devices-in-multidevice-sessions.md)

<a id="Discussion"></a>

## Discussion

An audio route is an electronic pathway for audio signals. Inspect the state of device audio routes and configure your preferred input and output route settings.

## See Also

### Inspecting the current route

- [AVAudioSessionRouteDescription](../avaudiosessionroutedescription.md): An object that describes the input and output ports associated with a session’s audio route.
- [AVAudioSessionPortDescription](../avaudiosessionportdescription.md): Information about the capabilities of the port and the hardware channels it supports.
- [AVAudioSessionRouteChangeNotification](routechangenotification.md): A notification the system posts when its audio route changes.
